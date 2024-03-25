import './cardInternal.css'

const CardProfile = ({ props }) => {
  const { schoolName, formation, data, local, description, language } = props

  return (
    <>
      <div className="card-profile">
        <div className="title">
          <p className="school-name">{schoolName}</p>
          <p>{data}</p>
        </div>
        <div className="subtitle">
          <p>{formation}</p>
          <p>{local}</p>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="language">
          <p>Linguagens usadas: </p>
          <p> {language}</p>
        </div>
      </div>
    </>
  )
}

export default CardProfile
