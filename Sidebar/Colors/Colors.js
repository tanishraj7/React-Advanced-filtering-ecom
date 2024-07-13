import "./Colors.css";
import Input from "../../Components/Input";



 function Colors({handleChange}) {
  return (
    <div className="ml">
      <h2 className="sidebar-title colors-title">Colors</h2>
      <div>
      <label className="sidebar-label-container">
      <input type="radio" onChange={handleChange} value="" name="test1"></input>
      <span className="checkmark all" ></span>All
      </label>
      <Input
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test1"
      color="black"
      />
      <Input
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test1"
      color="blue"
      />
      <Input
      handleChange={handleChange}
      value="red"
      title="Red"
      name="test1"
      color="red"
      />
      <Input
      handleChange={handleChange}
      value="green"
      title="Green"
      name="test1"
      color="green"
      />
      <label className="sidebar-label-container" >
        <input type="radio" name="test1" value="white"></input>
        <span className="checkmark" style={{backgroundColor:"whitesmoke"}}></span>White
      </label>
      </div>
    </div>
  )
}
export default Colors;