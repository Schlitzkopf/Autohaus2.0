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
        <div className='post, container'>
            <h2 className='title'>{autos[id].name}</h2>
            {autos[id].featureimage && <img className='featureImage' src={autos[id].featureimage} alt={autos[id].name} title={autos[id].name} />}
            <section dangerouslySetInnerHTML={{ __html: autos[id].description }} />
        </div>
    )
}

export default Details
