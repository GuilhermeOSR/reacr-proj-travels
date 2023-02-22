import { MdLocationOn } from 'react-icons/md'

export default function Travels(props) {
    return(
    <div>
      <div className="cards">
        <img src={props.item.imageURL} alt="" className='card-img'/>
        
        <div className='card-info'>
        <span><MdLocationOn className='marker'/></span>
          <span className='card-local'>{props.item.location}</span>
          <a href={props.item.mapsLink} className='card-link'><small>View on Google Maps</small></a>
          <h2 className='card-nameLocal'>{props.item.title}</h2>
          <small className='card-date'>{props.item.startDate} - {props.item.endDate}</small>
          <p className='card-desc'>{props.item.description}</p>
         
        </div>
    
  
      </div>
      <hr/>
      
    </div>
     
    )
  }