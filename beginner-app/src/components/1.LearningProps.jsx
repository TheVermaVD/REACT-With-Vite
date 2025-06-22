

export default function LearningProps({a, b, c}) {
    
    // console.log(props)

    // const {a, b, c} = props #using object destructing we can de-structure the object data/propertie easily.


    // props.a = "wow" # Recived props data are read-only.

  return ( <>
{/* 
    <div>LearningProps {props.a}</div>
    <div>LearningProps {props.b}</div>
    <div>LearningProps {props.c}</div> */}

    <div>LearningProps {a}</div>
    <div>LearningProps {b}</div>
    <div>LearningProps {c}</div>

    </>
  )
}
