
import "./TabItem.css"
export default function TabItem(props){
  function clickHandler(){
    props.onClickTab(props.value)
  }
  if(props.selectedIdx === props.value){
    return <>
    <button className="TabItem selected">
      {props.name}
    </button>
  </>
  }else{
    return <>
    <button onClick={clickHandler} className="TabItem">
      {props.name}
    </button>
  </>
  }
}