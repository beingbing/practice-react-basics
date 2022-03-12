import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {

    const AddUserHandler = event => {
        event.preventDefault();

    }

    return (
        <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
            <label htmlFor='username'>User name</label>
            <input id='username' type="text" />
            <label htmlFor='age'>Age (in years)</label>
            <input id='age' type="number" />
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
    )
};

export default AddUser;