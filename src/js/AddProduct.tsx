import React from "react";
import {createRoot} from "react-dom/client";
import MyFooter from "./shared/MyFooter";
const AddProduct: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Product Add</h1>
                <button>Save</button>
                <button>Cancel</button>
            </header>
            <hr/>

            <div className="content container">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label htmlFor="sku">SKU</label>
                        </td>
                        <td>
                            <input type="text" id="sku"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Name</label>
                        </td>
                        <td>
                            <input type="text" id="name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="price">Price</label>
                        </td>
                        <td>
                            <input type="text" id="price"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <MyFooter/>
        </div>
    );
}

export default AddProduct;

const container = document.getElementById('product_form');
if (container) {
    const root = createRoot(container);
    root.render(<AddProduct />);
} else {
    console.error("The element with id 'product_form' was not found.");
}