import Icon from '../Icon'
import './cardSimple.css'

function CardSimple(props) {
  const displayNone = {
    display: 'none'
  }
  const displayFlex = {
    display: 'flex'
  }
  const paddingVideo = {
    padding: '1rem 1rem 0 1rem'
  }
  const paddingImg = {
    padding: '1.5rem 1.5rem 0 1.5rem'
  }

  return (
    <>
      <div className="card-img" style={props.video ? paddingVideo : paddingImg}>
        <img
          src={props.image}
          style={props.image ? displayFlex : displayNone}
        />
        <video
          style={props.video ? displayFlex : displayNone}
          controls
          muted
        >
          <source src={props.video} />
        </video>
      </div>
      <div className="card-content">
        <div>
          <p>{props.subtitle}</p>
          <p>{props.title}</p>
        </div>
        <Icon />
      </div>
    </>
  )
}

export default CardSimple
