const initialState = JSON.parse(window.localStorage.getItem("My-Todos")) || {
  todos:[
  { 
    id:0,
    title:"Buy milk",
    completed: false,
    important: false,
  },
  { 
    id:1,
    title:"clean my room",
    completed: true,
    important: false,
  },
  { 
    id:2,
    title:"Get Medicines",
    completed: false,
    important: true,
  },
  { 
    id:3,
    title:"Car Services",
    completed: false,
    important: true,
  },
  { 
    id:4,
    title:"Prepare for meeting",
    completed: true,
    important: false,
  },
],
};
export default initialState;