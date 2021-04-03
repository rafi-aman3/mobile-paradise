import axios from 'axios';
import React, { useEffect } from 'react';

const DeleteItem = (props) => {
    const {id} = props.id;

    console.log(id);
    useEffect(() => {
        axios(`https://mighty-fjord-06067.herokuapp.com/delete/${id}`)
            .then(res => {
                console.log(res.data);
            })
    }, [id])


    return (
        <div>
            <h3>Item Deleted</h3>
           

        </div>
    );
};

export default DeleteItem;