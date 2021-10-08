import React, {useState} from 'react'

function Form({index,onAddProduct}) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);


    // Chcking if getting input values
    // const myFun = ()=>{
    //     alert(name+price);
    // }


    // Saving input value in createProduct and pass it to onAddProduct of ItemList.js component
    const createProduct = (event)=>{
    event.preventDefault();
    const productObj = {id:index, name, price}
    onAddProduct(productObj);
    }

    return (
        <div>
            <form>

                <div class="mb-3">
                    <label>Product name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" />
                </div>

                <div class="mb-3">
                    <label>Product price</label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} class="form-control" />
                </div>


                <button type="submit" class="btn btn-primary" onClick={createProduct}>Add product</button>
            </form>
        </div>
    )
}

export default Form
