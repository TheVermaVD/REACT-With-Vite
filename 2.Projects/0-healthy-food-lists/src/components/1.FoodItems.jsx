import { IndividualItem } from "./4.Individual_Item"

export const FoodItems =({foodItems})=>{

    //Here, parent component deciding all the behavior of the child component.


    return <> 

    <ul className="list-group">

     {foodItems.map(item=> <IndividualItem item={item}  key={item} handleBuyButton={()=> console.log(`${item} is bought`)}/> )}


    </ul>


    
    </>
}