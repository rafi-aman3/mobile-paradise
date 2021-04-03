import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const {id} = useParams();

    const [mobileDetails, setMobileDetails] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    useEffect(() => {
        axios(`https://mighty-fjord-06067.herokuapp.com/${id}`)
            .then(res => setMobileDetails(res.data[0]))
    }, [id]);


    const handleOrder = async () => {
        const orderDetails = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            mobileName: mobileDetails.name,
            price: mobileDetails.price
        }

        console.log(orderDetails);
        
        let res = await axios({
            method: 'post',
            url: 'https://mighty-fjord-06067.herokuapp.com/addOrder',
            data: orderDetails
        })
        
        alert("You Order Has Been Placed!");
    }
    

    return (
        <div id="container" className="mt-5">
                <Typography style={{color: 'whitesmoke'}} variant="h5">Check Out</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{mobileDetails.name}</td>
                            <td>1</td>
                            <td>{mobileDetails.price}</td>
                        </tr>
                        
                    </tbody>
                </table>
                <Button onClick={handleOrder} className="mt-5 float-right" variant="contained" color="primary">Order</Button>
                </div>
    );
};

export default CheckOut;