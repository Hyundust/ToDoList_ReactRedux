import React, {  useState } from "react";
import { connect } from "react-redux";
import { addTodos} from "../redux/toDoSlice";
import { v4 as uuid } from 'uuid';
import {GoPlus} from "react-icons/go";
import { motion } from "framer-motion";

//connect component to the state 
const mapStateToProps = (state) => {
  return {
    todos: state, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj))// dispatches the addTodos action with the given object as payload
    
  };
};

const Todos = (props) => {
  const [todo, setToDo] = useState("");
  
// handles changes to the input value
  const HandleChange = (e) => {
    setToDo(e.target.value);
  };
  //adds a new todo item to the list
  const add = ()=>{
    if(todo===""){
      alert("input is empty");// alerts the user if the input is empty
    }else{
    props.addTodo({
      id: uuid(),
      item: todo,
      completed: false
    });
    setToDo("")
    };
  }
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => HandleChange(e)}
        className="toDoInput"
        value ={todo} // sets the value of the input to the current value of the todo state hook
      />
      <motion.button
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
        className="add-button"
        onClick={()=>
          add()
          }>
            
           <GoPlus/>
      </motion.button>
        <br/>
           
        
        
        


    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos)//connects the component to the Redux store and passes the mapStateToProps and mapDispatchToProps functions as arguments to the connect HOC
