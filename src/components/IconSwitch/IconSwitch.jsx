import './iconSwitch.css'

export const  IconSwitch = ({ icon, onSwitch }) => {
  
  return (
    <>
    <i className="material-icons" onClick={onSwitch}>{icon}</i>
    </>  
  )
}
