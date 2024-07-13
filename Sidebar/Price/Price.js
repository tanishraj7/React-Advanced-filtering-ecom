import "./Price.css";
import Input from "../../Components/Input";

 function Price({handleChange}) {
  return (
    <div className="ml2">
      <h2 className="sidebar-title price-title">Pricing</h2>
      <div className="price-cont">
      <label className="sidebar-label-container">
      <input type="radio" onChange={handleChange} value="" name="test2"></input>
      <span className="checkmark " ></span>All
      </label>
      <Input
      handleChange={handleChange}
      value={50}
      title="$0-50"
      name="test2"
      />
      <Input
      handleChange={handleChange}
      value={100}
      title="$50-100"
      name="test2"
      />
      <Input
      handleChange={handleChange}
      value={150}
      title="$100-150"
      name="test2"
      />
      <Input
      handleChange={handleChange}
      value={200}
      title="> $150"
      name="test2"
      />
      </div>
    </div>
  )
}
export default Price;