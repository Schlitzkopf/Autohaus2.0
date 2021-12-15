import React from 'react';
import { useParams } from "react-router-dom";

const Details = ({autos}) => {
    const { id } = useParams();
    
    let ido = (id -1)

    console.log(autos[ido])


    //  const detail = autos[ido]
    // console.log(detail)


    return (
        <div className='post, container'>
            <h2>{}</h2>
            <h2 className='title'>{autos[ido].name}</h2>
            {autos[ido].featureimage && <img className='featureImage' src={autos[ido].featureimage} alt={autos[ido].name} title={autos[ido].name} />}
            <section dangerouslySetInnerHTML={{ __html: autos[ido].description }} />
        </div>
    )
}

export default Details
