
export default function FoodInput({handleInput, handleKeyDown}) {
  return (<>
  
  <input type='text' placeholder='Enter Food Item Here' onChange={handleInput} onKeyDown={handleKeyDown}/>
  
  
  </>
  )
} 
