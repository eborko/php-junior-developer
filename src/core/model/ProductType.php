<?php

namespace src\core\model;

abstract class ProductType {
    private int $id;
    public function getId():int {
        return $this->id;
    }

    public function __construct()
    {
        try {
            $this->id = random_int(0, PHP_INT_MAX);
        }
        catch (\Exception $ex) {
            echo $ex->getMessage();
        }
    }
}