
import Card from './Components/Card'
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function App() {
  return ( <div>
    <h1 className='headingStyle'>TODO APP</h1>
    <Card/>
    <Card />
    <Card />
   <span>
    <h1>This is a Messsenger Icon</h1>
   <FaFacebookMessenger/>
   </span>

   <span>
    <h1>This is a Google Icon</h1>
   <FaGoogle />
   </span>

   <span>
    <h1>This is a Facebook Icon</h1>
   <FaFacebookSquare />
   </span>
   
 </div>
  ); 
}

export default App;
