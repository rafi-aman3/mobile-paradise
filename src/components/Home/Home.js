import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MobileCard from '../MobileCard/MobileCard';
import Search from '../Search/Search';
import Spinner from '../Spinner/Spinner';


const Home = (props) => {
    const [mobiles, setMobiles] = useState([]);
    
    useEffect(() => {
        axios('https://mighty-fjord-06067.herokuapp.com/mobiles')
            .then(res => setMobiles(res.data))
    }, [])
    
    return (
        <>
            <Search></Search>
            {

                mobiles.length > 0 ?
                    <Row>
                        {
                            mobiles.map(mobile => <MobileCard key={mobile._id} mobile={mobile}></MobileCard>)
                        }
                    </Row> :
                    <Spinner></Spinner>
            }
        </>
    );
};

export default Home;