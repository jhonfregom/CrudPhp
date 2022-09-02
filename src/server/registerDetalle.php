<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET");
$jsonProducto = json_decode(file_get_contents("php://input"));

if (!$jsonProducto) {
    exit("No hay datos");
}
$conect = include_once "conect.php";
$total = $jsonProducto->cantidad*$jsonProducto->precio_unidad;
$sentencia = $conect->prepare("insert into detalle_factura(cod_producto, cantidad, peso, forma_pago,total) values (?,?,?,?,?)");

$resultado = $sentencia->execute([$jsonProducto->cod_producto,$jsonProducto->cantidad,$jsonProducto->peso,$jsonProducto->forma_pago,$total]);

echo json_encode([
    "resultado" => $resultado,
]);