import React from 'react';

import { Box, Container, makeStyles, Paper } from '@material-ui/core';
import { AppBar,Toolbar,IconButton, Typography } from "@material-ui/core";
import { TodoAdder } from './components/todo-adder';

import TodosContainer from './components/todos-containter';

const useStyles = makeStyles((theme) => ({
  root:{},
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 100,
  },
  wrapper:{
    textAlign:"center",
    width:"100%",
  },
}))

function App() {
const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            My
          </IconButton>
          <Typography variant="h5">
            Todos
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0}>
          {/*inside this we need two component 1 add todos -"TodosAdder"*/}
          {/*the container area to display all the todos "TodosContainer"*/}
          <TodoAdder />
          <TodosContainer />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
