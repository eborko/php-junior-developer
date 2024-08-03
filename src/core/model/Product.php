<?php

namespace src\core\model;

class Product {
    private string $SKU;
    public function setSKU(string $SKU): void {
        $this->SKU = $SKU;
    }
    public function getSku(): string {
        return $this->SKU;
    }

    private string $Name;
    public function setName(string $Name): void {
        $this->Name = $Name;
    }
    public function getName(): string {
        return $this->Name;
    }

    private float $Price;
    public function setPrice(float $Price): void {
        $this->Price = $Price;
    }
    public function getPrice(): float {
        return $this->Price;
    }

    private ProductType $productDescription;
    public function setProductDescription(ProductType $productDescription): void {
        $this->productDescription = $productDescription;
    }
    public function getProductDescription(): ProductType {
        return $this->productDescription;
    }

    private function __construct(ProductType $productDescription) {
        $this->setProductDescription( $productDescription );
    }
}