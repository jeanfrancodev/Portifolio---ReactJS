import Icon from '../icon-component/Icon'
import './contentCard.css'

function ContentCard(props) {
  const displayNone = {
    display: 'none'
  }
  const displayFlex = {
    display: 'flex'
  }

  return (
    <>
      <div className="card-container">
        <div className="card-img">
          <img
            src={props.image}
            style={props.image ? displayFlex : displayNone}
          />
          <video style={props.video ? displayFlex : displayNone} controls muted>
            <source src={props.video} />
          </video>
        </div>
        <div className="card-content">
          <div>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentCard
