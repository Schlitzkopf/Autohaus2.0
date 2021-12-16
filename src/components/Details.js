import React from 'react';
import { useParams } from "react-router-dom";

const  Details = ({autos}) => {
    const { id } = useParams();


    const auto = autos.filter((element) => {

        return element.id == id
        
    }) 
  
    return (
        <div className='flex, container'>
            <h2 className='titleDetail'>{auto[0].name}</h2>
            {auto[0].featureimage && <img className='featureImageDetail' src={auto[0].featureimage} alt={auto[0].name} title={auto[0].name} />}
            <section className='description' dangerouslySetInnerHTML={{ __html: auto[0].description }} />
        </div>
    )
}

export default Details
