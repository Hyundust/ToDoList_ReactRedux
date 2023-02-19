import React from 'react'
import { connect } from 'react-redux'
import { addTodos,removeTodos, updateTodos,completedTodos } from "../redux/toDoSlice";
import { useState } from 'react';
import TodoItem from './Todoitem';
import { motion } from 'framer-motion';

//maps state from the store to component props

const mapStateToProps = (state) => {
    return {
      todos: state, 
    };
  };
// maps actions to component props
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
      removeTodo: (id) => dispatch(removeTodos(id)),
      updateTodo:(obj)=>dispatch(updateTodos(obj)),
      completedTodo:(id)=>dispatch(completedTodos(id))
    };
  };



const DisplayToDos = (props) => {
const [sort, setSort] = useState("active");//initialize state with "active" value

    return (

        <div className='displaytodos'>
            <div className='buttons'>
                    <motion.button whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   onClick={()=>setSort("active")}>
                                        Active</motion.button>

                    <motion.button whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   onClick={()=>setSort("completed")}>
                                        Completed</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   onClick={()=>setSort("All")}>
                                        All</motion.button>
            
            </div>

            <ul>
                {   // display active todos
                    props.todos.length > 0 && sort ==="active"?
                            props.todos.map(item=>{
                                return(
                                    item.completed === false &&
                                    <TodoItem
                                        key = {item.id}
                                        item = {item}
                                        completedTodo = {props.completedTodo}
                                        removeTodo = {props.removeTodo}
                                        updateTodo = {props.updateTodo}/>
                            )})
                        :null}
                {// display completed todos
                    props.todos.length > 0 && sort ==="completed"?
                            props.todos.map(item=>{
                                return(
                                    item.completed === true &&
                                    <TodoItem
                                        key = {item.id}
                                        item = {item}
                                        completedTodo = {props.completedTodo}
                                        removeTodo = {props.removeTodo}
                                        updateTodo = {props.updateTodo}/>
                            )})
                        :null
                        
                }
                {// display all todos
                    props.todos.length > 0 && sort ==="All"?
                            props.todos.map(item=>{
                                return(
                                    <TodoItem
                                        key = {item.id}
                                        item = {item}
                                        completedTodo = {props.completedTodo}
                                        removeTodo = {props.removeTodo}
                                        updateTodo = {props.updateTodo}/>
                            )})
                        :null
                        
                }

            </ul>
        </div>
    )
    
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayToDos);//connect component to the store using mapStateToProps and mapDispatchToProps