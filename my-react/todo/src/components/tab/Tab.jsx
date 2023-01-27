import TabItem from "./TabItem"
import "./Tab.css"
export default function Tab(props){
  return <div className='Tab'>
    <TabItem name="All"/>
    <TabItem name="Active"/>
    <TabItem name="Complete"/>
  </div>
}