import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import Filter from './Filter';
import TitleName from './TitleName';
import FilterDate from './FilterDate';

const Actus = ({data, setData}) => {
    const [result, setResult] = useState([data]);

    return (
        <div>
            <TitleName />
            <Filter data={data} />
            <FilterDate data={data} />
            {
                data && data.map((elem, id) => {
                    console.log(id);
                    return <Card key={id+'_'+elem.title} data={elem[1]}/>
                })
            }
        </div>
    );
};

export default Actus;