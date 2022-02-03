import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../redux/actions';


export const TodoAdder= () => {

    const [title,setTitle] = useState(null);
    const dispatch=useDispatch();

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function addTodoItem(params) {
        //we need to dispatch the ADD_TODO action here
        dispatch({
            type: ADD_TODO,
            payload: {
                title,
            }
        })
        setTitle(null);

    }


  return (
  <box>
      <TextField style={{
          width: 400,
      }}
      label="Add new Todo" 
      varient="filled"
      onChange={handleTextChange}
      >
      </TextField>

      <Button style={{
          height:48,
      }}
      variant="contained" 
      color="primary"
      onClick={addTodoItem}>

          Add
      </Button>
  </box>
  )
};
