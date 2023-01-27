import "./Header.css";
import Tab from "../components/tab/Tab"
export default function Header(props) {
  return <div className='header'>
    <button>dark button</button>
    <Tab/>
  </div>;
}
