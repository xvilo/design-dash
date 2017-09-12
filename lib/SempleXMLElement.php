<?php

/**
 * This class add's a simple function to a SimpleXMLElement Object.
 * To JSON. This enables one to output a json string from a XML object.
 *
 * Class SempleXMLElement
 */
class SempleXMLElement extends SimpleXMLElement
{
    /**
     * Returns a JSON string from the SimpleXMLElement Object
     *
     * @param int $options Bitmask consisting of
     * JSON_HEX_QUOT,
     * JSON_HEX_TAG,
     * JSON_HEX_AMP,
     * JSON_HEX_APOS,
     * JSON_NUMERIC_CHECK,
     * JSON_PRETTY_PRINT,
     * JSON_UNESCAPED_SLASHES,
     * JSON_FORCE_OBJECT,
     * JSON_PRESERVE_ZERO_FRACTION,
     * JSON_UNESCAPED_UNICODE,
     * JSON_PARTIAL_OUTPUT_ON_ERROR.
     * The behaviour of these constants is described on the JSON constants page.
     * @param int $depth Set the maximum depth. Must be greater than zero.
     * @return mixed|string|void
     */
    public function toJson($options = 0, $depth = 512)
    {
        return json_encode($this, $options, $depth);
    }
}
