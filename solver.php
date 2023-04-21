<?php
  $a = (float)$_POST['param-a'];
  $b = (float)$_POST['param-b'];
  $c = (float)$_POST['param-c'];

  if ($a == 0 || $b == 0 || $c == 0) {
    exit('Ошибка в параметрах!');
  }

  require_once('qEquation.php');

  $q = new QEquation($a,$b,$c);
  $r = $q->doSolve();

  if ($r[0] < 0) {
    $rez = "Дискриминант меньше нуля ({$r[0]}), уравнение не имеет действительных решений.";
  } else {
    $rez = "Уравнение: {$a}x&sup2;".($b<0 ? "{$b}x" : "+{$b}x").($c<0 ? "{$c}" : "+{$c}").'=0<br>'.
           "Дискриминант: {$r[0]}<br>";
    if (count($r) == 2) {
      $rez.= "Один корень: {$r[1]}";
    } else {
      $rez.= "Два корня: {$r[1]} и {$r[2]}";
    }
  }
  exit($rez);
?>
