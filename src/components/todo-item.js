import { 
    FormControlLabel, 
    FormGroup, 
    IconButton, 
    ListItem, 
    ListItemSecondaryAction, 
    Typography 
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_TODO, TOGGLE_COMPLETED } from '../redux/actions';
import DeleteIcon from '@material-ui/icons/Delete';


export default function TodoItem({id,title,completed,important}) {
    const dispatch = useDispatch();

    function toggleCheckBox(params){
        //Todo- Need to dispatch toggle action
        dispatch({
            type: TOGGLE_COMPLETED,
            payload:{
                id,
            },
        })
    }

    function handleDeleteClick() {
        dispatch({
            type: DELETE_TODO,
            payload:{
                id,
            },
        })
    }



  return (
      <ListItem dense>
          <FormGroup>
              <FormControlLabel
              control={
                <Checkbox
                  checked={completed}
                  onChange={toggleCheckBox}
                  name={title}
                  color="primary"
                />
              }
              label={<Typography style={{
                  textDecoration: completed && "line-through",
              }}>
                  {title}
              </Typography>}
              >
              </FormControlLabel>
          </FormGroup>
          <ListItemSecondaryAction>
              <IconButton onClick={ handleDeleteClick } edge="end">
                  <DeleteIcon />
              </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
  );
}
