<?php

namespace src\core\model;

class DVD extends ProductType {
    private int $size;
    public function setSize(int $size): void {
        $this->size = $size;
    }
    public function getSize(): int {
        return $this->size;
    }
}