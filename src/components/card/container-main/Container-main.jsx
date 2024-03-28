import { menuDropDown } from '../../../context/menuContext'
import './container-main.css'

export const ContainerMain = (props) => {

  const { isActive } = menuDropDown()
  console.log(isActive)
  const opacity = {
    filter: 'blur(1.5px)'
  }
  const opacityNone = {
    filter: 'blur(0px)'
  }



  return (
  <div className="container-main" style={isActive == true ? opacity : opacityNone} onClick={()=>{isActive == true ? !isActive :'' }}>
    {props.children}
  </div>)
}
