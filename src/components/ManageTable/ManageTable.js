import { Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React from 'react';

const ManageTable = (props) => {
    const { name, manufacture, price, _id } = props.mobile;

    return (
        <tr>
            <td>{name}</td>
            <td>{manufacture}</td>
            <td>{price}</td>
            <td>
                <Button>
                    <Edit style={{ color: 'whitesmoke' }}></Edit>
                </Button>
                <Button onClick={() => {
                    console.log("Deleted", _id);
                    fetch(`https://mighty-fjord-06067.herokuapp.com/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                        })
                }}>
                    <Delete style={{ color: 'whitesmoke' }}>
                    </Delete>
                </Button>
            </td>
        </tr>

    );
};

export default ManageTable;