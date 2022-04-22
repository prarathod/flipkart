import React, { useState } from 'react'

const Price = (props) => {
    const [min,setMin] = useState(0);
    props.data(min)
    return (
        <>
            <label for="cars">Price</label>
            <select name="min" id="min" value={min} onChange={e=>setMin(e.target.value)}>
                <option value="0">High to Low</option>
                <option value="10">Low To High</option>
            </select>
        </>

    )
}

export default Price;