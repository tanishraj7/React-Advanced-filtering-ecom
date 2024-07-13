
import { FiHeart } from "react-icons/fi";
import "./Nav.css";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

 function Nav({handleInputChange,query}) {
  return (
  <nav>
    <h1 className="main-title">GINNIs CART</h1>
    <div className="nav-container">
      <input type="text" className="search-input" onChange={handleInputChange} value= {query} placeholder="👟Search" ></input>
    </div>
    <div className="profile-container">
      <a href="https://crepdogcrew.com" target="_main">
        <FiHeart className="nav-icons"/>
      </a>
      <a href="https://crepdogcrew.com" target="_main">
        <AiOutlineShoppingCart className="nav-icons"/>
      </a>
      <a href="https://crepdogcrew.com" target="_main">
        <AiOutlineUserAdd className="nav-icons"/>
      </a>
    </div>
  </nav>
  )
}
export default Nav;