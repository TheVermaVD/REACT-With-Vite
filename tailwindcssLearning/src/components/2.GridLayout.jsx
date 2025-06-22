
/*


#6.)  Column Dividation/Making Grid System Layout :  -

Grid Layout : It works on two dimensions i.e we will have control over x-axis and y-axis at a time for each elements.

Where as In Flex works on 1-D i.e we can work in either one-diretion at a time.

Working : To Implement grid-system layout, firstly give display:grid i.e class="grid" in tailwindCSS to parent element, to make all child elements as grid box elements.Then -

# Properties to Apply on Grid-Parent elmenet -

i) grid : It is alias of display : grid, to male all elements inside grid box as grid childs.


ii) grid-cols-<number> : TO devide column in how many parts by specifying the number. In other word, To decide how many grid-column we want on our screen.Note: a grid system consist of total 12-grid column by default.

Ex: Use grid-cols-<number> utilities like grid-cols-2 and grid-cols-4 to create grids with n equally sized columns -


grid-cols-3   ---> devide screen in 3 columns
grid-cols-[<value>] ---> devide screen in custom columns

Note : grid-cols-[40%_auto]  --> TO devide column in 40% and rest 60% on Horizontal axis.Also we could have divided like in three unequal ratio like this -

grid-cols-[20%_30%_auto]   ---> To make column divide into three uneual parts with 20%-30%-and-rest left ratios.



iii) gap-<number> : To have space around each rows AND cols.



# Properties to Apply on Grid-Child elmenets -

i) col-span-<number>  : this is properties of child elemenet which controlling how elements are sized and placed across grid columns like suppose a element want to take two column space then we can make that element as : 

 <div class="grid grid-cols-3 gap-4">

  <div class="col-span-2 ...">01</div>
  <div class="...">02</div>

  <div class="...">03</div>
  <div class="...">04</div>
  <div class="...">05</div>

  <div class="col-span-2 ...">07</div>
  <div class="...">08</div>

</div>


ii) col-start-<number>  : To start any column from any perticular column position, like col-start-2 this <div> or element will start from second column position always.

<div class="grid grid-cols-3 gap-4">

  <div class="col-start-2">01</div>
  <div class="...">02</div>

  <div class="...">03</div>
  <div class="...">04</div>
  <div class="...">05</div>
 
</div>

iii) col-end-<numner> : It just ends an Item just below given column count number, remember this. We can use col-start-<number> along with this.

// To define where an child element should end just before on which coulmn count number on grid.


<div class="grid grid-cols-3 gap-4">

  <div class="col-start-1 col-end-4">01</div>   --> thhis first element will take all column space for first row.

  <div class="...">02</div>
  <div class="...">03</div>
  <div class="...">04</div>

 
</div>




# Row Dividation/Making Grid System Layout : It is also like column dividation, but here Items will place vertically order series not horizonal order series.


i) grid-rows-<number> : To specifying the no of rows in a grid layout.

<div className="grid  grid-rows-3  grid-flow-col gap-[20px] ">

  <div>01</div>
  <!-- ... -->
  <div>09</div>

</div>

Note : When we are concern about the flow of Items either in rows or cols. Bydefault when we give grid-cols-<number> ---> means Item flow in row direction(where bydefault grid-flow-row given) But, when we give grid-rows-<number> then we need to purposely apply grid-flow-col property to flow all items firstlt in vertical.

grid-rows-5   ---> Means first col will contain 5 Item then rest item move to next col. 

ii) grid-flow-col : It is fixed and mandatory to use after first property when we divide into vertical Items.


iii) gap : It is also need to use to give gap-between items.



*/


// Learnig Grid Layout Design -
function Try2(){

    return<>
 
       {/* Main Container of the page - */}
       <div className="max-w-[1170px] mx-auto  ">
 
          <h1 className="text-[20px]  md:text-[30px]  lg:text-[40px] font-bold text-center py-[20px]">Learning Grid Layout Design</h1>
 
          {/* Starting of Grid-system-layout */}
          <div className="grid   grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 gap-[20px] ">
          {/* <div className="grid grid-rows-3 grid-flow-col gap-[20px] "> */}
 
             <div className="shadow-lg pb-[25px] ">
 
                <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />
 
                <div className="ps-[20px]">
                <h1 className="text-[20px] font-bold font-mono">1.Master SQL Fundamentals in 90 Minutes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus architecto aspernatur. Odit nemo ipsum reiciendis temporibus ullam at facere?</p>
                </div>
             </div>
             <div className="shadow-lg pb-[25px]">
 
                <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />
 
                <div className="ps-[20px]">
                <h1 className="text-[20px] font-bold font-mono">2.Master SQL Fundamentals in 90 Minutes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus architecto aspernatur. Odit nemo ipsum reiciendis temporibus ullam at facere?</p>
                </div>
             </div>
             <div className="shadow-lg pb-[25px]">
 
                <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />
 
                <div className="ps-[20px]">
                <h1 className="text-[20px] font-bold font-mono">3.Master SQL Fundamentals in 90 Minutes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus architecto aspernatur. Odit nemo ipsum reiciendis temporibus ullam at facere?</p>
                </div>
             </div>
             <div className="shadow-lg pb-[25px]">
 
                <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />
 
                <div className="ps-[20px]">
                <h1 className="text-[20px] font-bold font-mono">4.Master SQL Fundamentals in 90 Minutes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus architecto aspernatur. Odit nemo ipsum reiciendis temporibus ullam at facere?</p>
                </div>
             </div>
             <div className="shadow-lg pb-[25px]">
 
                <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />
 
                <div className="ps-[20px]">
                <h1 className="text-[20px] font-bold font-mono">5.Master SQL Fundamentals in 90 Minutes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus architecto aspernatur. Odit nemo ipsum reiciendis temporibus ullam at facere?</p>
                </div>
             </div>
             <div className="shadow-lg pb-[25px] ">
 
                <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />
 
                <div className="ps-[20px]">
                <h1 className="text-[20px] font-bold font-mono">6.Master SQL Fundamentals in 90 Minutes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus architecto aspernatur. Odit nemo ipsum reiciendis temporibus ullam at facere?</p>
                </div>
             </div>
             <div className="shadow-lg pb-[25px]">
 
                <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />
 
                <div className="ps-[20px]">
                <h1 className="text-[20px] font-bold font-mono">7.Master SQL Fundamentals in 90 Minutes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus architecto aspernatur. Odit nemo ipsum reiciendis temporibus ullam at facere?</p>
                </div>
             </div>
             <div className="shadow-lg pb-[25px]">
 
                <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />
 
                <div className="ps-[20px]">
                <h1 className="text-[20px] font-bold font-mono">8.Master SQL Fundamentals in 90 Minutes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusamus architecto aspernatur. Odit nemo ipsum reiciendis temporibus ullam at facere?</p>
                </div>
             </div>

          </div>
 
       </div>



        
    {/* // Task2 : Design A Grid Layout with two section of 40% and 60% column area section, with total container max width of 1170px - */}

 
       <section className="bg-slate-300 py-10">
 
          <h1 className="text-[20px]  md:text-[30px]  lg:text-[40px] font-bold text-center py-[20px]">About Us</h1>


          {/* Starting of Grid Layout Dividation - */}
          <div className="max-w-[1170px] mx-auto grid  grid-cols-1 md:grid-cols-[40%_auto]  gap-[30px]">

            <div>
            <img src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fmaster-class-media%2F4.webp&w=640&q=75" alt="" />

            </div>
            <div>

                <h2 className="text-[30px] pb-[20px] font-bold">Welcome to WSCubetech</h2>
                <p className="leading-7 mb-[10px] text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui eveniet fugit nobis temporibus assumenda quis ipsa tempora?</p>
                <p className="leading-7 mb-[10px] text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui eveniet fugit nobis temporibus assumenda quis ipsa tempora?</p>
                <p className="leading-7 mb-[10px] text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui eveniet fugit nobis temporibus assumenda quis ipsa tempora?</p>
                <p className="leading-7 mb-[10px] text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui eveniet fugit nobis temporibus assumenda quis ipsa tempora?</p>
                <p className="leading-7 mb-[10px] text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui eveniet fugit nobis temporibus assumenda quis ipsa tempora?</p>
                <p className="leading-7 mb-[10px] text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui eveniet fugit nobis temporibus assumenda quis ipsa tempora?</p>

            </div>

          </div>
 
       </section>
       
    </>
 }
 

 
 
 export {Try2}
 