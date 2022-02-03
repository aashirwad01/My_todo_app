import { FormControlLabel, FormGroup, ListItem } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';

export default function TodoItem({id,title,completed,important}) {

    function toggleCheckBox(params){
        //Todo- Need to dispatch toggle action
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
              label={title}
              >

              </FormControlLabel>
          </FormGroup>
      </ListItem>
  );
}
