<?php

namespace src\core\model;

class Book extends ProductType
{
    private int $weight;
    public function getWeight(): int {
        return $this->weight;
    }
    public function setWeight(int $weight): void {
        $this->weight = $weight;
    }
}