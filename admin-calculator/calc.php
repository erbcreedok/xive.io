<?php

$MIN_HASH_RATE = $_POST['MIN_HASH_RATE'];
$MAX_HASH_RATE = $_POST['MAX_HASH_RATE'];
$HASH_RATE_VALUE = $_POST['HASH_RATE_VALUE'];
$MIN_POWER = $_POST['MIN_POWER'];
$MAX_POWER = $_POST['MAX_POWER'];
$POWER_VALUE = $_POST['POWER_VALUE'];

file_put_contents(
    '../assets/js/calc-settings.js',
    "var MIN_HASH_RATE = $MIN_HASH_RATE;"
    ."var MAX_HASH_RATE = $MAX_HASH_RATE;"
    ."var HASH_RATE_VALUE = $HASH_RATE_VALUE;"
    ."var MIN_POWER = $MIN_POWER;"
    ."var MAX_POWER = $MAX_POWER;"
    ."var POWER_VALUE = $POWER_VALUE;"
);
header('location: ../#section-calculator');
