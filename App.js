import React from 'react'
import PropsFunction from './DAY4/PropsFunction'
import PropsClass from './DAY4/PropsClass'
import Example1 from './DAY4/Example1'
import ArrorFunProps from './DAY4/ArrorFunProps'
import StateClass from './DAY4/StateClass'
import StateFunction from './DAY4/StateFunction'
import StateHoldsObject from './DAY4/StateHoldsObject'
import Parent from './DAY4/ParentChildCommunication'
import TwoWayBinding from './DAY4/TwoWayBinding'
import Defaultprops from './DAY4/Defaultprops'
import DynamicRendering from './DAY4/DynamicRendering'

export default function App() {
  return (
    <div>
      <PropsFunction name = "ABINAYA" age = "18"></PropsFunction>
      <PropsClass college = "SKCT"></PropsClass>
      <Example1 name = "RM" team = "BTS"></Example1>
      <ArrorFunProps name = "Skate Into Love"></ArrorFunProps>
      <StateClass/>
      <StateFunction/>
      <StateHoldsObject/>
      <Parent/>
      <TwoWayBinding/>
      <Defaultprops/>
      <DynamicRendering/> 
    </div>
  )
}
