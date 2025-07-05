

export default function LiftingState2({name, handleInputChange, handleGetName}) {

    // I want this input field final value, in parent APP -
    // const [name, setName] = useState("")

  return (
    <>
            {/* Ways : 2 */}
        <div>

            Name2:
            <input type="text" value={name} onChange={handleInputChange} />
            <button onClick={handleGetName}>Get Input Name</button>

        </div>
    
    </>
  )
}
