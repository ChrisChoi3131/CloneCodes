import "./Header.css";
import Tab from "../components/tab/Tab"
export default function Header(props) {
  function onTabChange(selectedIdx){
    props.onTabChange(selectedIdx)
  }
  return <div className='header'>
    <button>dark button</button>
    <Tab selectedIdx = {props.selectedIdx} onTabChange={onTabChange}/>
  </div>;
}
