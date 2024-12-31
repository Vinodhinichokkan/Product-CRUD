import React,{useEffect,useState} from 'react'
import Axios from 'axios'
const Products = () => {
    let [products,setProducts]=useState([]);

    useEffect(()=>{
        Axios.get('http://127.0.0.1:5000/api/products').then((resp)=>{
            setProducts(resp.data)
        }).catch(()=>{})

    

},[]);

return(
    <div>
        <h1>Products Component</h1>
        <pre>{JSON.stringify(products)}</pre>
    </div>
)

}

