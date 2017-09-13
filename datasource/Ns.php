<?php

/**
 * Class Ns
 */
class Ns
{
    private $apiUser;
    private $apiSecret;
    private $apiPath = 'https://webservices.ns.nl/ns-api-avt?';

    /**
     * Ns constructor.
     * @param $config
     */
    public function __construct($config)
    {
        $this->apiSecret = $config['apiSecret'];
        $this->apiUser   = $config['apiUser'];
    }

    public function getStationDepartureData($station)
    {
        return $this->get('station', $station);
    }

    /**
     * @param $key
     * @param $value
     * @return SimpleXMLElement
     */
    private function get($key, $value)
    {
        $data = $this->doCurlRequest($key, $value);
        sleep(2);
        return simplexml_load_string($data, 'SempleXMLElement');
    }

    /**
     * @param $key
     * @param $value
     * @return mixed
     */
    private function doCurlRequest($key, $value)
    {
        $apiUrl = $this->apiPath.$key.'='.$value;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $apiUrl);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_USERPWD, $this->apiUser . ":" . $this->apiSecret);

        $resp = curl_exec($ch);

        curl_close($ch);

        return $resp;
    }
}
