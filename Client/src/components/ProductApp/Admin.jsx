import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
const Admin = () => {
        let [products,setProducts] = useState([])
        useEffect(()=>{
            getProducts()
        },[])
        let getProducts=()=>{
            Axios.get('http://127.0.0.1:5000/api/products')
            .then((resp)=>{
                setProducts(resp.data)
            })
            .catch(()=>{})
        }
        let deleteProduct = (id)=>{
            let url = http //127.0.0.1.5000/api/products/${id}
            Axios.delete(url)
                 .then((resp)=>{
                    console.log(resp)
                    getProducts()
                 })
                 .catch(()=>{})

        
        }
        return <div className='container mt-5'>
                
                <div className="row">
                    <Link to="/create" className='btn btn-success'>Create New Product</Link>
                </div>
                <pre>{JSON.stringify(products)}</pre>
                <div className="row">
                    <div className="col-10">
                    {   products.length>0?  
                        <>
                        {
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                products.map((prod,index)=>{
                                    return <tr key={index}>
                                                <td>{prod.name}</td>
                                                <td><img height={"40px"} src={prod.image} alt="" /></td>
                                                <td>{prod.price}</td>
                                                <td>{prod.qty}</td>
                                                <td><Link className='btn btn-danger' >Delete</Link></td>
                                            </tr>
                                })
                                }
                            </tbody>
                        </table>
                        }
                        </>:<>No Data</>
                    }
                    </div>
                </div>
                </div>
}

export default Admin

