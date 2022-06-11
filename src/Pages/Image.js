import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductService from '../services/ProductService'

export const Image = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        ProductService.getLimit()
            .then(({ data }) => {
              setData(data)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))
    }, [])

    return (  
      <section>
        <div className="row" style={{paddingLeft:"15%",marginTop:"18px"}}>
        {loading && <p style={{padding:"0 350px",marginTop:"160px"}}><img src={require('../image/progress.gif')} width={180} height={100}/></p>} 
        {!!data && data.length > 0 ? data.map((product) => {
            return(
                <div className="card" style={{width: "18rem",marginLeft:"2%"}}>
                <img className="card-img-top" src={product.image} alt="Card image cap" style={{height:"150px",width:"150px",padding:"10px",marginLeft:"27%",justifyContent:"center"}}/>
                <div className="card-body" style={{padding:"0"}}>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                </div>
            )   
          }):(<p></p>)
        }
        </div> 
      </section>
    )
}
