// import imageUrl from 'https://unsplash.com/photos/WLxQvbMyfas';

export default function Card (props) {
  console.log(props)

  return (
    <div className='card'>
      <div className="card--img">
        <img src={props.item.imageUrl} alt="" className="card--image"/>
      </div>
      <div className="card--infos">
        <div className="card--infos--top">
         <p> <i class="fa-solid fa-location-dot"></i> {props.item.location}</p>
          <a href={props.item.googleMapsUrl}>view on Google Maps</a>
        </div>
        <div className="card--infos--title">
          <p> {props.item.title}</p>
        </div>
        <div className="card--infos--date">
          <p> {props.item.startDate} </p>
          <p> - {props.item.endDate}</p>
        </div>
        <p> {props.item.description}</p>
      </div>
    </div>
  )

}
