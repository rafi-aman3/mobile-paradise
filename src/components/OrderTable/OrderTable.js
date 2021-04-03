import React from 'react';

const OrderTable = (props) => {
    const {name, mobileName, price} = props.order;
    return (
        
                        <tr>
                            <td>{name}</td>
                            <td>{mobileName}</td>
                            <td>{price}</td>
                        </tr>
                   
    );
};

export default OrderTable;