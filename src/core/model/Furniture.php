<?php

namespace src\core\model;

class Furniture extends ProductType
{
    private int $height;
    public function getHeight(): int
    {
        return $this->height;
    }
    public function setHeight(int $height): void {
        $this->height = $height;
    }

    private int $width;
    public function getWidth(): int {
        return $this->width;
    }
    public function setWidth(int $width): void {
        $this->width = $width;
    }
    private int $length;
    public function getLength(): int {
        return $this->length;
    }
    public function setLength(int $length): void {
        $this->length = $length;
    }
}