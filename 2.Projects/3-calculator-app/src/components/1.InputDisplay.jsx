
import mystyle from './inputDisplay.module.css'


export default function InputDisplay({displayValue}) {

 

  return (
    
    <input type="text" id={mystyle.inputDisplay} readOnly value={displayValue} placeholder='0'/>
  )
}
