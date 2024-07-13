import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { TbShoe } from "react-icons/tb";
//destructured handlechange
 function Sidebar({handleChange}) {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
          <a href="https://www.linkedin.com/in/tanishrajsingh/" target="_main">
        <img className="main-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_green_letter-g.svg/768px-Eo_circle_green_letter-g.svg.png?2020041713265" alt="logo"/></a>
        <TbShoe className="main-logo"/>
        </div>
        <Category handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
        <Price handleChange={handleChange}/> 
    </section>
    </>
  )
}
export default Sidebar; //passed hc as a prop