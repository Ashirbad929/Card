import person from "./image/co.png"
import { FaLinkedinIn } from "react-icons/fa";
const Des = () => {
    return ( 
        <div className="des">
            <img className="img" src={person} alt="asdasd" />
            <h1 className="name">Ashirbad Behera</h1>
            <h2>Programmer/Developer</h2>
            <h4 className="website">Ashirbad929.website</h4>
            <div className="llinks">
           <a href="#"><FaLinkedinIn/></a>
           <a href="#"><FaLinkedinIn/></a>
            </div>
            
          
        </div>
     );
}
 
export default Des;