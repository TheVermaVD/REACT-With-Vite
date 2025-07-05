
/* 

#13. Flex-Box Layout Design : - To design flex-box layout, user must give display:flex i.e class="flex" (in tailwindCSS) to Parent element to make all child Items as Flex Childs, Then -


# Properties to Apply on Flex-Parent elmenet -

i) flex : It is alias of display:flex to make all childs item as Flex Childs.


ii) flex-direction : To controlling the direction of flex items to stack IN.


Class_name	                       CSS_Properties_Applies
flex-row              	      flex-direction :	row ; (default)
flex-row-reverse	            flex-direction :	row-reverse;
flex-col	                    flex-direction :	column;
flex-col-reverse	            f1ex-direction :	col umn-reverse ;



<div class="flex flex-row ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>


ii) flex-wrap : To  controlling how flex items wrap when container is restricted with some limits and items get more.


flex-wrap: nowrap;  --->   'flex-nowrap' (default)
flex-wrap:	wrap ;  --->    'flex-wrap'
flex-wrap:	wrap-reverse ;  --->  'flex-wrap-reverse	 '

<div class="flex flex-nowrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>


iii) justify-content(grid+flex) : It is property we can put over grid as well flex layout, It is use to align all items horizontally flexible either center, start, end etc.

justify-content: flex-start    ---->   'justify-start' (default)
justify-content: flex-end    ---->   'justify-end'
justify-content: flex-center    ---->   'justify-center'
justify-content: flex-between    ---->   'justify-between'
justify-content: flex-around    ---->   'justify-around'

<div class="flex justify-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>


iv) align-items(Grid +flex) : It is property we can put over grid as well flex layout, It is use to align all items vertically flexible either center, start, end etc.

<div class="flex items-start ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>


v) gap : It is property we can put over grid as well flex layout, It is use to add space between Flex Items.

<div class="flex gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>




# Properties to Apply on Flex-Child elmenets -

i) flex-basis : To define the initial size of flex item.TO expand as per horizonl space left in the container.It also works like flex-grow.


flex-basis: 300px; (takes 300px width Item)  --->  'basis-[300px]'
flex-basis: 55%; (takes 55% width Item)  --->  'basis-[55%]'
flex-basis: 100%; (takes full width Item)  --->  'basis-full'
                                                  'basis-2xs'
                                                  'basis-xs'
                                                  'basis-sm'
                                                  'basis-md'
                                                  'basis-lg'
                                                  'basis-auto' (default)




ii) flex-grow : To occupie remaing horizontal space of any child item by mentionaly grow value. If we give same value to each flex item, then it will take equal width for each child horizontally to occupie the space.

flex-grow: 1;           ---->    class="grow"
flex-grow: <number>;     --->    class="grow-<number>"
flex-grow: <value>;     --->    class="grow-[<value>]"

<div class="flex md:flex-row flex-col ">
  <div class="grow size-14">01</div>
  <div class="grow size-14">02</div>
  <div class="grow size-14">03</div>
  <div class="grow size-14">04</div>
</div>
Note : Here, All child will take equal width to occupier horizontal width space.  


iii) flex-shrink : It is just opposite to the grow, means Item ko sikuda lena, with mentioning shrink value -

flex-shrink: 1;           ---->    class="shrink"
flex-shrink: <number>;     --->    class="shrink-<number>"
flex-shrink: <value>;     --->    class="shrink-[<value>]"




iv) order : To controll the order of the Flex items. 


order: <number>;   --->   class="order-<number>"
order: <value>;   --->   class="order-[<value>]"
order: 0; --->   class="order-none"


<div class="flex justify-between ...">
  <div class="order-3 ...">01</div>
  <div class="order-1 ...">02</div>
  <div class="order-2 ...">03</div>
</div>


*/







export default function FlexBoxLayout() {
  return ( <> 

  <div className="max-w-[1070px] mx-auto border-2">

    <div className="flex justify-around">

      <div className="bg-amber-400 p-2 m-1 grow">Item1</div>
      <div className="bg-amber-400 p-2 m-1 grow" >Item2</div>
      <div className="bg-amber-400 p-2 m-1 grow">Item3</div>
      <div className="bg-amber-400 p-2 m-1 grow">Item4</div>
   

    </div>

  </div>


  {/* Designing a Flex Layout Website Design : -

  Step1 : First of all, Define visible screen section with its background color and padding top and bottom with py(with responsive padding of screen).

  Step2 : Then, Define the container width, where we want to put our content, with container max-width and margin-auto(mx-auto) to get this container center of visible screen horizonatally.
  
  Step3 : Now, Ready to define content, flex Layout design with 55% and 45% left and right with parent Flex Div.


  Step4: Define content for twp flex Items with making padding responsive in nature.


  step5 : Remmeber, to check responsive design(for mobile) at end, here, we need to specify flex-row for deskop and flex-col for mobile, such that -
  md:flex-row flex-col, and similary at most flex added need to implement same so that it get responsive at mobile screen.
  
  
  
  
  
  
  
  
  
  */}

{/* Deigning Hero Section of Website : https://blog.hubspot.com/website/simple-website-examples */}

  <section className="bg-[#FCEAD7]   lg:py-[80px]  sm:py-[50px] py-[30px]">



     {/* Defining Another Section - 1 */}
    <div className="max-w-[1080px] mx-auto">


        <div className="flex md:flex-row flex-col">

          <div className="basis-[55%] md:order-1 order-2">

            <h1 className="lg:text-[40px]  text-[32px] font-bold">20 of My Favorite Simple Website Examples</h1>

            <span>  Written By: <a className="underline text-[#0e5058] text-lg" target="_blank" href="https://blog.hubspot.com/website/author/madison-zoey-vettorino?hubs_content=blog.hubspot.com/website/simple-website-examples&hubs_content-cta=cl-textLink">Madison Zoey Vettorino</a></span>

            <div className="flex items-center my-2 p-5 bg-amber-50 rounded-md md:flex-row flex-col">

              <div className="basis-[30%]">

              <img src="https://www.hubspot.com/hs-fs/hubfs/Image%20Hackathon%20%E2%80%93%20Vertical%20(50).png?width=112&height=112&name=Image%20Hackathon%20%E2%80%93%20Vertical%20(50).png" alt="" width={95} />

              </div>

              <span>

                <h1 className="text-[18px] font-medium">FREE GUIDE: WEBSITE DESIGN EXAMPLE LOOKBOOK</h1>
                <p className="py-[10px] text-md ">77 of blog and website page design examples.</p>

                <section className="flex gap-[25px] py-[20px] md:justify-start justify-center ">
                  <button className="bg-[#FF5C35]  hover:bg-[#683b3be7] text-white md:p-[10px_12px] p-[8px_10px]  rounded-[8px]  ">Download for Free</button>
                  <button className="bg-[#FF5C35] hover:bg-[#683b3be7]  text-white md:p-[10px_12px] p-[8px_10px]  rounded-[8px]  ">Explore Courses</button>
                

                </section>

              </span>



            </div>




          </div>
          <div className="basis-[45%] md:order-2 order-1">

            
           <img src="https://www.hubspot.com/hubfs/simple-websites-e.png" alt="" />



          </div>


        </div>


    </div>



    {/* Defining Another Section - 2 */}
    <div className="max-w-[1080px] mx-auto lg:py-[50px]  sm:py-[30px] py-[20px]">

      <div className="flex md:flex-row flex-col gap-[30px] p-[16px] border-[0.2px] rounded-lg">


        <div className="grow flex items-center gap-[20px]">

          <img src="https://megaphone.imgix.net/podcasts/39846662-79ea-11eb-9b06-a75ddc4bddcc/image/39f8195a6d8978d0a7bd9c7d7b3fba2d.png?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress" alt="" width={35} />

          <div>
          <h1>My First Million</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis fuga, reore.</p>
          </div>

        </div>
        <div className="grow flex items-center gap-[20px]">

          <img src="https://megaphone.imgix.net/podcasts/39846662-79ea-11eb-9b06-a75ddc4bddcc/image/39f8195a6d8978d0a7bd9c7d7b3fba2d.png?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress" alt="" width={35} />

          <div>
          <h1>My First Million</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis fuga, reore.</p>
          </div>

        </div>
        <div className="grow flex items-center gap-[20px]">

          <img src="https://megaphone.imgix.net/podcasts/39846662-79ea-11eb-9b06-a75ddc4bddcc/image/39f8195a6d8978d0a7bd9c7d7b3fba2d.png?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress" alt="" width={35} />

          <div>
          <h1>My First Million</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis fuga, reore.</p>
          </div>

        </div>


      </div>


    </div>


     {/* Defining Another Section - 3 */}

     <div className="max-w-[1080px] mx-auto lg:py-[50px]  sm:py-[30px] py-[15px]">

      <div className="flex flex-wrap md:flex-row flex-col">

        <div className="basis-[30%] m-[1.5%] shadow-lg py-[18px]">
          <img className="w-[80px] mx-auto"  src="https://www.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-1.webp" alt="" />
          <h2 className="text-[18px] font-bold text-center py-[15px]">14 Stunning HTML Websites [+ How They Work]</h2>
          <p className="px-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem ad delectus! Iure autem aliquam commodi numquam porro distinctio velit explicabo totam nesciunt mollitia quia voluptates culpa optio, ut provident?</p>


        </div>
        <div className="basis-[30%] m-[1.5%] shadow-lg py-[18px]">
          <img className="w-[80px] mx-auto"  src="https://www.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-1.webp" alt="" />
          <h2 className="text-[18px] font-bold text-center py-[15px]">14 Stunning HTML Websites [+ How They Work]</h2>
          <p className="px-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem ad delectus! Iure autem aliquam commodi numquam porro distinctio velit explicabo totam nesciunt mollitia quia voluptates culpa optio, ut provident?</p>


        </div>
        <div className="basis-[30%] m-[1.5%] shadow-lg py-[18px]">
          <img className="w-[80px] mx-auto"  src="https://www.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-1.webp" alt="" />
          <h2 className="text-[18px] font-bold text-center py-[15px]">14 Stunning HTML Websites [+ How They Work]</h2>
          <p className="px-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem ad delectus! Iure autem aliquam commodi numquam porro distinctio velit explicabo totam nesciunt mollitia quia voluptates culpa optio, ut provident?</p>


        </div>
        <div className="basis-[30%] m-[1.5%] shadow-lg py-[18px]">
          <img className="w-[80px] mx-auto"  src="https://www.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-1.webp" alt="" />
          <h2 className="text-[18px] font-bold text-center py-[15px]">14 Stunning HTML Websites [+ How They Work]</h2>
          <p className="px-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem ad delectus! Iure autem aliquam commodi numquam porro distinctio velit explicabo totam nesciunt mollitia quia voluptates culpa optio, ut provident?</p>


        </div>
        <div className="basis-[30%] m-[1.5%] shadow-lg py-[18px]">
          <img className="w-[80px] mx-auto"  src="https://www.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-1.webp" alt="" />
          <h2 className="text-[18px] font-bold text-center py-[15px]">14 Stunning HTML Websites [+ How They Work]</h2>
          <p className="px-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem ad delectus! Iure autem aliquam commodi numquam porro distinctio velit explicabo totam nesciunt mollitia quia voluptates culpa optio, ut provident?</p>


        </div>
        <div className="basis-[30%] m-[1.5%] shadow-lg py-[18px]">
          <img className="w-[80px] mx-auto"  src="https://www.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-1.webp" alt="" />
          <h2 className="text-[18px] font-bold text-center py-[15px]">14 Stunning HTML Websites [+ How They Work]</h2>
          <p className="px-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem ad delectus! Iure autem aliquam commodi numquam porro distinctio velit explicabo totam nesciunt mollitia quia voluptates culpa optio, ut provident?</p>


        </div>
        <div className="basis-[30%] m-[1.5%] shadow-lg py-[18px]">
          <img className="w-[80px] mx-auto"  src="https://www.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-1.webp" alt="" />
          <h2 className="text-[18px] font-bold text-center py-[15px]">14 Stunning HTML Websites [+ How They Work]</h2>
          <p className="px-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem ad delectus! Iure autem aliquam commodi numquam porro distinctio velit explicabo totam nesciunt mollitia quia voluptates culpa optio, ut provident?</p>


        </div>
        <div className="basis-[30%] m-[1.5%] shadow-lg py-[18px]">
          <img className="w-[80px] mx-auto"  src="https://www.hubspot.com/hubfs/Copy%20of%20Featured%20Image%20Template%20Backgrounds-1.webp" alt="" />
          <h2 className="text-[18px] font-bold text-center py-[15px]">14 Stunning HTML Websites [+ How They Work]</h2>
          <p className="px-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem ad delectus! Iure autem aliquam commodi numquam porro distinctio velit explicabo totam nesciunt mollitia quia voluptates culpa optio, ut provident?</p>


        </div>



      </div>



     </div>





  </section>




  </>)
}
