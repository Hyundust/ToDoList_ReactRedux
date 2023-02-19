import React from "react";
import { useRef } from "react";
import {AiFillEdit} from "react-icons/ai";
import {MdDoneOutline} from "react-icons/md"
import {BsTrash} from "react-icons/bs"
import { motion } from "framer-motion";

//create a functional component
const TodoItem = (props)=>{
    const {item,updateTodo,removeTodo,completedTodo} = props;
    const inputRef = useRef(true);
    //Enable input focus for editing
    const changeFocus=()=>{
            inputRef.current.disabled = false;
            inputRef.current.focus();
          }
    // Update todo item on pressing Enter key    
    const update =(id,value,e)=>{
            if(e.which === 13){
                updateTodo({id,item:value});
                inputRef.current.disabled = true;
        
        
         }
        }
    return (

        
            <motion.li
                    initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
                    animate={{ x: 0, transition: { type: "spring", duration: 3.2 } }}
            
                    exit={{
                            x: "-60vw",
                            scale: [1, 0],
                            transition: { duration: 0.5 },
                            backgroundColor: "rgba(255,0,0,1)"
            }}
                    key={item.id} className = "card">
                        <textarea ref = {inputRef} 
                                  disabled={inputRef}
                                  defaultValue={item.item}
                                  onKeyPress={(e)=>update(item.id,inputRef.current.value,e)}/>
                        <div className="btns">
                                <motion.button  whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={()=>changeFocus()}>
                                                    <AiFillEdit/></motion.button>
                                {item.completed === false && <motion.button  
                                                                    whileHover={{ scale: 1.1 }}
                                                                    whileTap={{ scale: 0.9 }}
                                                                    style = {{color:"green"}}
                                                                    onClick={()=>completedTodo(item.id)}>
                                                                        <MdDoneOutline/></motion.button> }
                                <motion.button  whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                style = {{color:"red"}} 
                                                onClick={()=>removeTodo(item.id)}>
                                                    <BsTrash/></motion.button>
                                
                        </div>
                        {/* display "done" when a todo item is completed */}
                        {item.completed === true && <motion.span  whileHover={{ scale: 1.1 }}
                                                                  whileTap={{ scale: 0.9 }}
                                                                  className="completed" 
                                                                  >done</motion.span> }
                        



            </motion.li>
      
    )
}

export default TodoItem;