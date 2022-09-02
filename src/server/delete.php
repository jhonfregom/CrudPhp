<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: *");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idDetalle"])) {
    exit("No hay id de vehiculo para eliminar");
}
$idDetalle = $_GET["idDetalle"];
$bd = include_once "conect.php";
$sentencia = $bd->prepare("DELETE FROM detalle_factura WHERE id_detalle = ?");
$resultado = $sentencia->execute([$idDetalle]);
echo json_encode($resultado);