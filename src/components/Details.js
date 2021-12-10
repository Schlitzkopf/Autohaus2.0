import React from 'react';
import { useParams } from "react-router-dom";

const Details = ({autos}) => {
    const { id } = useParams();
    console.log(id);
    const selectCar = autos.find(auto => auto.sys.id === id)
    console.log(selectCar.fields.featureImage.fields.file)
    return (
        <div className='post, container'>
            <h2 className='title'>{selectCar.fields.name}</h2>
            {selectCar.fields.featureImage.sys.id && <img className='featureImage' src={selectCar.fields.featureImage.fields.file.url} alt={selectCar.fields.name} title={selectCar.fields.name} />}
            <section dangerouslySetInnerHTML={{ __html: selectCar.fields.discription }} />
        </div>
    )
}

export default Details
