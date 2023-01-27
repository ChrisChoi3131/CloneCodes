import "./Footer.css"
import Input from "../components/Input"
export default function Footer(props) {
  function onTextSubmit(state){
    props.onTextSubmit(state)
  }
  return <div className='Footer' >
    <Input onTextSubmit={onTextSubmit}/>
  </div>;
}
