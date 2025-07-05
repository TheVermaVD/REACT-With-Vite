
import mystyle from "./Individual_Itemm.module.css"

export const IndividualItem=({item, handleBuyButton})=>{

    //Get access as js object,which holds all class name present in that module css as property names.


    //We can pass parameter intionalyy here for more data visibility or we can not as well(then there we have to use the function reference) -

    // function handleBuyButton(item, event){

    //     console.log(`${item} is clicked`);
    //     console.log(event)
        
    // }
    
    //With Just passing the function reference, no paramter passed -
    // function handleBuyButton(){

    //     console.log(`${item} is clicked`);
        
    // }

    return <li className={`${mystyle['kg-item']} list-group-item`} id={mystyle['kg-align']}> 

    <span>{item}</span>
    {/* <button className={mystyle.button} onClick={(event)=> handleBuyButton(item, event) }>Buy</button> */}
    <button className={mystyle.button} onClick={handleBuyButton}>Buy</button>
    
    
     </li>
  

    //Want to merge an string with variable
    

}