// Write your code here
import './index.css'

const EventItem = props => {
  const {itemDetails, clickEvent, activeId} = props
  const {imageUrl, id, name, location, registrationStatus} = itemDetails
  const classAdd = activeId === id ? 'add-border' : ''
  const eventHappen = () => {
    clickEvent(registrationStatus, id)
  }
  return (
    <li className="list-item">
      <button type="button" className="event-btn" onClick={eventHappen}>
        <img src={imageUrl} className={`event-image ${classAdd}`} alt="event" />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
