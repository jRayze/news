import React from 'react';
import { useState } from 'react';

const FilterDate = ({data, setData}) => {

    const date = data.map((elem, id) => {
        return elem[1].date;
    })

    const filterDate = (value) => {
        setData(value)
    }

    return (
        <div>

            <label htmlFor="date-select">Choose date:</label>
            <select name="date" id="date-select">
                <option value={0} >Select</option>
                {
                    date && date.map((elem, id) => {
                        console.log(elem);
                        return <option value={elem}>{elem}</option>
                    })
                    
                }
            </select>
        </div>
    );
};

export default FilterDate;