<?php
$dbh = new PDO("mysql:host=localhost;dbname=schoolstd","root","abde1234");
$sql = " SELECT * FROM schoolstudents ";
$studentsQuery = $dbh->query($sql);
$getstudents = $studentsQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getstudents));
?>