<?php 
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET");

$servername = "localhost";
$username = "jlfranco";
$password = "JL1234";
$dbname = "facturar";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $conn->set_charset("utf8");
  $result= mysqli_query($conn,"SELECT detalle_factura.cod_producto,producto.descripcion,producto.precio_unidad,detalle_factura.cantidad, detalle_factura.total FROM detalle_factura INNER JOIN producto ON detalle_factura.cod_producto=producto.cod_producto where detalle_factura.estado = 0;");

  $array =[];
  
  while($row = $result->fetch_assoc()){
    $var = array('cod_producto' => $row['cod_producto'],
    'descripcion' => $row['descripcion'],
     'precio_unidad' => $row['precio_unidad'],
      'cantidad' => $row['cantidad'],
      'total' => $row['total']);    
    array_push($array,($var));  
}
    echo (json_encode($array));
  $conn->close();
  ?>