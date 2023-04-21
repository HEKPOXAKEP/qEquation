<?php
class QEquation
{
  // коэффициенты
  private $a;
  private $b;
  private $c;
  // дискриминант
  private $D;

  public function __construct($a,$b,$c) {
    $this->a = $a; $this->b = $b; $this->c = $c;
    $this->calcD();
  }

  private function calcD() {
    $this->D = pow($this->b,2) - 4 * $this->a * $this->c;
  }

  public function doSolve() {
    if ($this->D < 0) return [$this->D];  // при дискриминанте <0 действительных корней нет

    $x1 = (-$this->b - sqrt($this->D)) / (2 * $this->a);
    $x2 = (-$this->b + sqrt($this->D)) / (2 * $this->a);
    return [$this->D,$x1,$x2];
  }
}
?>
