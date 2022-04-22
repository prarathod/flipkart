import React, { useState } from 'react'
import './price.css';
const Price = (props) => {
    const [min, setMin] = useState(0);
    props.data(min)
    return (
        <>
        
                <div className='mi'>
                    <div>
                        <label for="cars">Price</label>
                    </div>

                    <div>
                        <select name="min" id="min" className='select' value={min} onChange={e => setMin(e.target.value)}>
                            <option value="0">High to Low</option>
                            <option value="10">Low To High</option>
                        </select>
                    </div>
                </div>
            
        </>

    )
}

export default Price;