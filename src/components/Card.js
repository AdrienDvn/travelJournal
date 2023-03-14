
export default function Card (props) {
  console.log(props)

  return (
    <div className='card'>
    <h3>hi from card.js
      make 4 cards
    </h3>
  {/* <img src={props.img} alt="" className="card--image"/> */}
    {/* <img src={`../${props.item.imageUrl}`} alt="" className="card--image"/> */}
    {/* <img src= {swimLogo} alt="" className="card--image"/> */}
    <div className='card--stats'>
       <span><i class="fa-solid fa-star"></i>{props.item.stats.rating}</span>
       <span className='grey'>-({props.item.stats.reviewCount}) </span>
       <span className='grey'>-{props.item.location}</span>
    </div>
    <p > {props.item.title}</p>
    <p > {props.description}</p>
    <p > <span className='bold'>From {props.item.price} $USD</span> / person</p>
  </div>
  )

}
