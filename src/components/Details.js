import React from 'react';
import { useParams } from "react-router-dom";

const  Details = ({autos}) => {
    const { id } = useParams();
    console.log(id);
    const selectCar = autos.find(auto => auto.id === id)
    console.log(autos);
    return (
        <div className='post, container'>
             <h2 className='title'>{selectCar.name}</h2>
            {selectCar.id.featureimage && <img className='featureImage' src={selectCar.fields.featureImage.fields.file.url} alt={selectCar.fields.name} title={selectCar.fields.name} />}
            <section dangerouslySetInnerHTML={{ __html: selectCar.id.discription }} />
        </div>
    )
}

export default Details
