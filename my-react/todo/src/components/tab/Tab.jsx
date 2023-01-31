import TabItem from "./TabItem"
import "./Tab.css"
import React, { useState } from 'react';

export default function Tab(props){
  function onClickTab(idx){
    props.onTabChange(idx)
  }
  return <div className='Tab'>
    <TabItem onClickTab={onClickTab} selectedIdx = {props.selectedIdx} value={1} name="All"/>
    <TabItem onClickTab={onClickTab} selectedIdx = {props.selectedIdx} value={2} name="Active"/>
    <TabItem onClickTab={onClickTab} selectedIdx = {props.selectedIdx} value={3} name="Complete"/>
  </div>
}