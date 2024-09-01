import "./Navbar.css"
import {Link} from "react-scroll"

export default function Navbar(){

  return(
    <div className="navbar">
      <div className="logo">
        <h1>Apun <span>Fitness</span></h1>
      </div>

      <div className="list">
        <Link className="items">Home</Link>
        <Link className="items">About Us</Link>
        <Link className="items">Services</Link>
        <Link className="items">Gallery</Link>
        <Link className="items">Membership</Link>
      </div>
     
     <div className="btn">
      <button className="btn1">Contact Us</button>
     </div>

    </div>
  )
}