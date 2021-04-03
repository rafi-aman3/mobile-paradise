import { Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderTable from '../OrderTable/OrderTable';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userEmail = loggedInUser.email;



    useEffect(() => {
        axios(`https://mighty-fjord-06067.herokuapp.com/orders?email=${userEmail}`)
            .then(res => setOrders(res.data))
    }, [userEmail])
    return (
        <div id="container" className="mt-5">
            <Typography style={{ color: 'whitesmoke' }} variant="h5">Your Orders</Typography>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Mobile Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <OrderTable key={order._id} order={order}></OrderTable>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Order;