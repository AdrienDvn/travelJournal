// import imageUrl from 'https://unsplash.com/photos/WLxQvbMyfas';

export default function Card (props) {
  console.log(props)

  return (
    <div className='card'>
    {/* <h3>hi from card.js
      make 4 cards
    </h3> */}
  <img src={props.item.imageUrl} alt="" className="card--image"/>
    {/* <img src={`../${props.item.imageUrl}`} alt="" className="card--image"/> */}

    <p> <i class="fa-solid fa-location-dot"></i> {props.item.location}</p>
    <a href={props.item.googleMapsUrl}>view on Google Maps</a>
    <p> {props.item.title}</p>
    <p> {props.item.startDate}</p>
    <p> {props.item.endDate}</p>
    <p> {props.item.description}</p>

  </div>
  )

}
