<?php
// Get the requested URL path
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Define the routes
$routes = [
    '/' => './src/core/view/pages/list-products.php',
    '/add-product' => './src/core/view/pages/add-product.php'
];

// Check if the requested path exists in the routes array
if (array_key_exists($path, $routes)) {
    require $routes[$path];
} else {
    // Handle 404 - Not Found
    header("HTTP/1.0 404 Not Found");
    echo '404 - Page not found';
}