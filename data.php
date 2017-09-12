<?php


// Require Config
require_once 'config.php';

// Require Utility Classes
require_once 'lib/SempleXMLElement.php';

// Require Data Sources
require_once 'datasource/ns.php';

if(empty($_POST['type'])){
    die('Must provide type');
}

switch ($_POST['type']) {
    case 'ns':

        if($_POST['key'] == 'city'){

            $ns = new Ns($config['ns']);
            echo $ns->getStationDepartureData($_POST['value'])->toJson();

        } else {
            die('uknown key');
        }
        break;

    default:
        die('Type unkown');
        break;
}