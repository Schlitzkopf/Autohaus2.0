import React from 'react';
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    console.log();
    // const selectCar = autos.find(auto => auto.id === id)
    // console.log(selectCar);
    return (
        <div className='post, container'>
            <h2>{id}</h2>
             {/* <h2 className='title'>{selectCar}</h2>
            {selectCar.id.featureimage && <img className='featureImage' src={selectCar.fields.featureImage.fields.file.url} alt={selectCar.fields.name} title={selectCar.fields.name} />}
            <section dangerouslySetInnerHTML={{ __html: selectCar.id.discription }} /> */}
        </div>
    )
}

export default Details
