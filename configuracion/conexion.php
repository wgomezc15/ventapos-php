<?php
require_once "global.php";

$conexion = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

mysqli_query($conexion, 'SET NAMES "' . DB_ENCODE . '"');

if (mysqli_connect_errno()) {
    printf("Error en conexión a base de datos: %s\n", mysqli_connect_error());
    exit();
}


function ejecutarConsulta($sql)
{
    global $conexion;
    //devuelve varios valores
    return $conexion->query($sql);
}

function ejecutarConsultaUnica($sql)
{
    global $conexion;
    $query = $conexion->query($sql);
    $row = $query->fetch_assoc(); //devuelve solo valor
    return $row;
}

function ejecutarConsulta_reternarID($sql)
{
    global $conexion;
    $query = $conexion->query($sql); //devuelve varios valores
    return $conexion->insert_id;
}

function limpiarCadena($str)
{
    global $conexion;
    $str = mysqli_real_escape_string($conexion, trim($str));
    return htmlspecialchars($str);
}

