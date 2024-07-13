import { BsFillBagHeartFill } from "react-icons/bs";


 function Cards({img, title, prevPrice, newPrice, star, reviews}) {
  return (
    <section className="card">
      <a href="https://crepdogcrew.com" target="_main">
    <img src={img} alt="shoe" className="card-image"></img></a>
    <div className="card-details">
      <h4 className="card-title">{title}</h4>
      <section className="card-reviews">
        {star}{star}{star}
      <span className="total-reviews">{reviews}</span>
      </section>
      <section className="card-price">
      <div className="price">
        <del>{prevPrice}</del>{newPrice}
        </div>
      <div className="bag">
        <BsFillBagHeartFill className="bag-icon"/>
        </div>  
      </section>
    </div>
  </section>
  )
}
export default Cards;