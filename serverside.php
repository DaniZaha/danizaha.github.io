<?php

function printValues($arr)
{
  echo "[ ";
  foreach ($arr as &$value) {
    print_r($value);
    echo " ";
  }
  unset($value);
  echo " ]";
}

$arr1 = range(0, 10);
$arr2 = range(0, 10);

foreach ($arr1 as &$value) {
  $value = rand(0,10);
}
unset($value);
foreach ($arr2 as &$value) {
  $value = rand(0,10);
}
unset($value);

$a1 = count($arr1);
$a2 = count($arr2);

echo "Original arrays: <br> First array: ";
printValues($arr1);
echo " <br> Second array: ";
printValues($arr2);
echo " <br> ";

$arr1 = array_unique($arr1);
$arr2 = array_unique($arr2);
$arr3 = (array_merge($arr1, $arr2));

echo " <br> Unique values: <br> First array: ";

printValues($arr1);
echo " <br> Number of repeted values: ";
print_r($a1 - count($arr1));
echo " <br> <br> Second array: ";
printValues($arr2);
echo " <br> Number of repeted values: ";
print_r($a2 - count($arr2));
echo " <br> <br> Combined array: <br> ";
printValues($arr3);

$arr3 = array_unique($arr3);

$arr3 = $arr3_dupe = array_combine(range(0, count($arr3)-1), array_values($arr3));

foreach ($arr3 as $key => &$value) {
  $value = $arr3_dupe[count($arr3) - $key - 1];
}
unset($value);

echo " <br> <br> Unique values: <br> ";
printValues($arr3_dupe);
echo " <br> <br> Reversed array: <br> ";
printValues($arr3);

?>
