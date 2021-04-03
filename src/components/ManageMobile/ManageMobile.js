import { Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageTable from '../ManageTable/ManageTable';

const ManageMobile = () => {
    const [mobiles, setMobiles] = useState([]);
    
    useEffect(() => {
        axios('https://mighty-fjord-06067.herokuapp.com/mobiles')
            .then(res => setMobiles(res.data))
    }, [])
    return (
        <div id="container">
                <Typography style={{color: 'whitesmoke'}} variant="h5">Manage Mobiles</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Manufacturer</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mobiles.map(mobile => <ManageTable key={mobile._id} mobile={mobile}></ManageTable>)
                        }
                    </tbody>
                </table>
                </div>
    );
};

export default ManageMobile;