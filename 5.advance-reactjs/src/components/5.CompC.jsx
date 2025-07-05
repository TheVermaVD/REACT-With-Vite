import React from 'react'
import { CheckContext } from '../store/1.CheckDataContext'
import { useContext } from 'react'

export default function CompC() {

    
    const {check1, check2, handleCheck} = useContext(CheckContext)

    console.log("From Component C :", check1)
    console.log("From Component C :", check2)
    console.log("From Component C :", handleCheck())

  return ( <>

    <h4>CompC</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero rem corporis laboriosam odio quos ea. Error officiis rem, id possimus temporibus corporis nam suscipit illo officia quam asperiores, et hic ut! Fugit, eius! Magnam odio fugiat placeat animi, sed dolore assumenda laboriosam doloribus aliquam optio facilis eum, quae rem vel voluptas? Quisquam eum corporis incidunt. Qui libero aspernatur dolorum, adipisci doloremque earum iusto ratione vel facere fugiat ipsa laudantium, dicta veniam similique harum reiciendis autem? Dignissimos, consequuntur? Expedita soluta reiciendis ipsa cupiditate aut numquam labore ab provident aliquam unde quas nulla debitis neque animi fuga sit, assumenda ea, rem, repellendus sint repxplicabo delectus impedit nesciunt quis veniam sunt. Quas officiis repellendus, voluptate, magni cum, commodi veritatis aliquid rem aut iste tempore laudantium neque accusamus similique debitis. Dolores ex pariatur quia nesciunt laboriosam autem nisi eos modi exercitationem, minima deserunt veritatis quaerat sed consectetur voluptates blanditiis optio, recusandae asperiores? Dignissimos impedit quae sed dolorum. Cupiditate, minus. Quasi iusto iste nihil amet accusamus earum, suscipit placeat officia provident.</p>

    </>
  )
}
