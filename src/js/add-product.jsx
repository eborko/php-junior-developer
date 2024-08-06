import React from "react";
import {createRoot} from "react-dom/client";
import Footer from "./shared/footer";
const AddProduct = () => {
    return (
        <>
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

            <Footer/>
        </>
    );
}

export default AddProduct;

const container = document.getElementById('product_form');
const root = createRoot(container);
root.render(<AddProduct/>);