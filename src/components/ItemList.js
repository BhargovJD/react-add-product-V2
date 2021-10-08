import React, {useState} from 'react'
import Items from './Items'
import Form from './Form';
import Total from './Total';

function ItemList({}) {
    // Creating array to store product
    const [product, setProduct]=useState([
        {id:1,name:"Andrpod",price:150},
        {id:2,name:"Apple",price:170},
        {id:3,name:"Nokia",price:65},
    ]);
    // Creating a function to insert new item to array
    const addproduct = (productObj)=>{
        setProduct([...product, productObj]);
    }


    // Calculating Total Price
    const [total, setTotal] = useState(0);

    const calculateTotal = (price)=>{
        setTotal(total+parseInt(price));
    };


    return (
        <div>

        <Form index={product.length} onAddProduct={addproduct}/>

            {product.map((p)=>(
                <Items
                key={p.id} name={p.name} price={p.price} onCalculateTotal={calculateTotal}/>
            ))}

        <Total totalCash={total}/>


        </div>
    )
}

export default ItemList
