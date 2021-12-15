import React from 'react';
import { useParams } from "react-router-dom";

const  Details = ({autos}) => {
    const { id } = useParams();
    const { name } = useParams();
    

    console.log(id)
    console.log(name)
    // console.log(autos[0].name)


    //  const detail = autos[ido]
    // console.log(detail)


    return (
        <div className='flex, container'>
            <h2 className='titleDetail'>{autos[id].name}</h2>
            {autos[id].featureimage && <img className='featureImageDetail' src={autos[id].featureimage} alt={autos[id].name} title={autos[id].name} />}
            <section className='description' dangerouslySetInnerHTML={{ __html: autos[id].description }} />
        </div>
    )
}

export default Details
