// import React, { useContext, useEffect, useState } from 'react'
// import './MyOrders.css'
// import { StoreContext } from '../../context/StoreContext'
// import axios from 'axios'
// import { assets } from '../../assets/assets'

// const MyOrders = () => {
//     const {url,token}= useContext(StoreContext)
//     const [data,setData] = useState([])

//     const fetchOrders = async () =>{
//         const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
//         setData(response.data.data)
//         // console.log(response.data.data)
//     }

//     useEffect(()=>{
// if(token){
//     fetchOrders()
// }
//     },[token])

//   return (
//     <div className='myorders'>
//         <h2>My Orders</h2>
//         <div className="container">
//             {data.map((order,index)=>{
//                return(
//                 <div key={index} className='my-orders-order' >
//                     <img src={assets.parcel_icon} alt="" />
//                     <p> {order.items.map((item,index)=>{
//                         if(index === order.items.length-1){
//                             return item.name+ " ❌ " + item.quantity

//                         }else{
//                             return item.name+ " ❌ " + item.quantity +" , "
//                         }
//                     })} </p>
//                     <p> ${order.amount} </p>
//                     <p>Items : {order.items.length} </p>
//                     <p><span>&#x25cf</span><b> {order.status} </b></p>

//                 </div>

//                )
//             })}
//         </div>

//     </div>
//   )
// }

// export default MyOrders



import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
            setData(response.data.data || []);
        } catch (error) {
            console.error("Error fetching orders:", error.message);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='myorders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    data.map((order) => (
                        <div key={order._id} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="Parcel Icon" />
                            <p>
                                {order.items.map((item, index) =>
                                    `${item.name} ❌ ${item.quantity}${index < order.items.length - 1 ? ', ' : ''}`
                                )}
                            </p>
                            <p>{order.currency || "$"}{order.amount}</p>
                            <p>Items: {order.items.length}</p>
                            <p>
                                <span>&#x25cf;</span><b> {order.status} </b>
                            </p>
                            <button onClick={fetchOrders} >Track Order</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyOrders;
