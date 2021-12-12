// Write your code here
import './index.css'

const activeConstants = {
  initial: 'initial',
  register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const initialFunction = () => (
  <p className="initial-para">
    Click on an event, to view its registration details
  </p>
)

const registerFunction = () => (
  <div className="register-holder">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      className="register-image"
      alt="yet to register"
    />
    <p className="register-para">
      A live performance brings so much to your relationship with dance. Seeing
      dance live can often make you fall totally in love with this beautiful art
      form.
    </p>
    <button type="button" className="register-button">
      Register Here
    </button>
  </div>
)

const registeredFunction = () => (
  <div className="registered-holder">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      className="tick-mark"
      alt="registered"
    />
    <h1 className="registered-heading">
      You have already registered for the event
    </h1>
  </div>
)

const closedFunction = () => (
  <div className="closed-holder">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      className="closed-image"
      alt="registrations closed"
    />
    <h1 className="closed-heading">Registrations Are Closed Now!</h1>
    <p className="closed-para">
      Stay tuned. We will reopen the registrations soon!
    </p>
  </div>
)

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  switch (registrationStatus) {
    case activeConstants.register:
      return registerFunction()
    case activeConstants.registered:
      return registeredFunction()
    case activeConstants.closed:
      return closedFunction()
    default:
      return initialFunction()
  }
}

export default ActiveEventRegistrationDetails
