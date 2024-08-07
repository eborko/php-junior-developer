import React from "react";

const ListProducts: React.FC = () => {
    return (
        <div>
            <h1>List</h1>
        </div>
    );
}

export default ListProducts;

const container = document.getElementById('product_list');
if (container) {
    const root = createRoot(container);
    root.render(<ListProducts />);
} else {
    console.error("The element with id 'product_list' was not found.");
}