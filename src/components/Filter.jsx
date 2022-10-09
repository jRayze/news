import React from 'react';
import { useState } from 'react';

const Filter = ({data}) => {
    const [dataSelected, setDataSelected] = useState();

    const categories = data.map((elem, id) => {
        return elem[1].category;
    })

    const filterCategory = (value) => {
        console.log(value);
    }

    return (
        <div>
            <label htmlFor="category-select">Choose category:</label>
            <select name="category" id="category-select">
                <option value={0}>Select</option>
                {
                    categories && categories.map((elem, id) => {
                        return <option value={elem} onSelect={(e) => filterCategory(elem)}>{elem}</option>
                    })
                    
                }
            </select>
        </div>
    );
};

export default Filter;