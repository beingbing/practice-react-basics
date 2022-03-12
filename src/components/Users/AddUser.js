import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);
  const [error, setError] = useState({title: '', message: ''});

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || +enteredAge.trim() === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty)'
      });
      return;
    }
    if (+enteredAge.trim() < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (age > 1)'
      });
      return;
    }
    console.log(enteredUserName, enteredAge);
    setEnteredAge(0);
    setEnteredUserName("");
    const usr = {
      name: enteredUserName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser(usr);
  };

  const handleModalClose = event => {
    setError({title: '', message: ''});
  }

  return (
    <React.Fragment>
      {error && error.title.length > 0 && <ErrorModal title={error.title} message={error.message} onOkay={handleModalClose} />}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
