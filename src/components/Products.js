import React from 'react'
import {Link} from "react-router-dom"; 

const Products = ({autos}) => {
    console.log(autos);
    return (
        <div>
            {autos.map((auto, index) => (        
                <div className='post, container' key={index}>
                <h2 className='title'>{auto.fields.name}</h2>      
                {auto.fields.featureImage && <img className='featureImage' src={auto.fields.featureImage.fields.file.url} alt={auto.fields.name} title={auto.name} />}
                <Link to={auto.sys.id}>Details</Link>
                
                </div>
            ))}
        </div>
    )
}

export default Products
