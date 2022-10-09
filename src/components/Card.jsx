import React from 'react';

const Card = ({data}) => {
    console.log(data);
    return (
        <div>
            <h3>{data.title}</h3>
            <h4>{data.category}</h4>
            <div>{data.date}</div>
            <p>{data.text}</p>
            {
                data.images && data.images.map((elem) => {
                    return <div><img src={".."+elem} alt={elem}></img></div>
                })
            }
        </div>
    );
};

export default Card;