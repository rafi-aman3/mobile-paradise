import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddMobile.css'
import axios from 'axios';


const AddMobile = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = async data => {
        const mobileData = {
            name:  data.name,
            manufacturer: data.manufacturer,
            price: data.price,
            imageUrl: imgUrl
        };
        console.log(mobileData);

        let res = await axios({
            method: 'post',
            url: 'https://mighty-fjord-06067.herokuapp.com/addMobile',
            data: mobileData
        })

        console.log(res);


    };



    const handleImageUpload = async event => {
        const imageData = new FormData();
        imageData.set('key', 'aa59cf10f225678794abc82af3bd308f');
        imageData.append('image', event.target.files[0])

        let res = await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: imageData
          });
        setImgUrl(res.data.data.display_url);

    }
    return (
        <div id="container">
            <Typography style={{ color: 'whitesmoke' }} variant="h5">Add Mobiles</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                <div className="inputBox">
                    <input name="name" placeholder="Mobile Name" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>

                <div className="inputBox">
                    <input name="manufacturer" placeholder="Manufacturer" ref={register({ required: true })} />
                    {errors.manufacturer && <span>This field is required</span>}
                </div>

                <div className="inputBox">
                    <input name="price" placeholder="Price..." ref={register({ required: true })} />
                    {errors.name && <span >This field is required</span>}

                </div>

                <div className="inputBox">
                    <input name="image" type="file" onChange={handleImageUpload} />
                </div>

                <div className="inputBox">
                    <input style={{cursor: 'pointer'}} type="submit" />
                </div>
                </div>
            </form>
        </div>
    );
};

export default AddMobile;