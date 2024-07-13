import Buttons from "../Components/Buttons";
import "./Recommended.css";

 function Recommended({handleClick}) {
  return (
    <>
    <div className="recommended-container">
      <h2 className="rec-title">Recommended</h2>
      <div className="rec-flex">
      <Buttons onClickHandler={handleClick} value="" title="All"/>
      <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
      <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
      <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>
      <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>
      </div>
    </div>
    </>
  )
}
export default Recommended;