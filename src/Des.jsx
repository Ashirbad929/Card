import person from "./image/co.png"
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";
const Des = () => {
    return ( 
        <div className="des">
            <img className="img" src={person} alt="asdasd" />
            <h1 className="name">Ashirbad Behera</h1>
            <h3>Programmer/Developer</h3>
            <h5 className="website">Ashirbad929.website</h5>
            <div className="llinks">
          
            <button className="butt">
            <a 
           className="ll" href="#"><AiOutlineMail/><small>Email</small></a>
            </button>
            
          <button className="butt">
          <a className="ll" href="#"><FaLinkedinIn/><small>LinkedIn</small></a>
          </button>
          
        </div>
        </div>
     );
}
 
export default Des;