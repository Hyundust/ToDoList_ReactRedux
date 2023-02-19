import "../css/main.css"
import Todos from '../components/Todos';
import DisplayToDos from '../components/DisplayToDos';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1 
        initial = {{y:-200}}
        animate = {{y:0}}
        transition = {{type:"spring", duration:0.5}}
        whileHover={{scale:1.1}}>
         ToDoList Application
      </motion.h1>
      <motion.div
        initial = {{y:-200}}
        animate = {{y:0}}
        transition = {{type:"spring", duration:1.2}}
        >
        <Todos/>
        <DisplayToDos/>
      </motion.div>
        
    </div>
  );
}

export default App;
