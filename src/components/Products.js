import React from 'react'
import {Link} from "react-router-dom"; 


const Products = ({autos}) => {
    console.log(autos);
      
    return (
        <div>
            {autos.map((auto, index) => (        
                <div className='post, container' key={index}>
                <h2 className='title'>{auto.name}</h2>      
                {auto.featureimage && <img className='featureImage' src={auto.featureimage} alt={auto.name} title={auto.name} />}
                
                <Link to={`/auto/${auto.id}`}>Details</Link>
                {console.log(auto)}
                </div>
                
            ))}
            
        </div>
    )
}

export default Products
