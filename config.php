<?php
$server = "localhost";
$user="postgres";
$password = "karisa";
$port= "5432";

$info_string = "host=$server port=$port dbname=postgres user=$user password=$password";

$connection = pg_connect($info_string) or
die ("não foi possivel conectar ao servidor");
echo "conexão efetuada com sucesso";


?>

   