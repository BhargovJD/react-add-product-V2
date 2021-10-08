
import React from 'react'

function Items({ name, price, onCalculateTotal }) {
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item"><h4>{name}</h4></li>
                <li class="list-group-item">Price: ${price} <button type="button" class="btn btn-success" onClick={() => onCalculateTotal(price)}>Buy</button></li>


            </ul>
        </div>
    )
}

export default Items
