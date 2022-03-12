import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || +enteredAge.trim().length < 1)
      return;
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

  return (
    <React.Fragment>
      <ErrorModal title="An Error occured" message="Something went wrong" />
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
