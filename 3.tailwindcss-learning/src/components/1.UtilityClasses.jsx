
/*


#1.) TO customize the utilites classes : Follow three ways -

a) using square bracket[] to define own css property value : Use the bg-[<value>] syntax to set the background color based on a completely custom value:

   <div class="bg-[#50d71e] ...">
       <!-- ... -->
   </div>

   <div class="py-[60px] ...">
       <!-- ... -->
   </div>


b) using variable_name to define own css propertye : Customizing your theme-

   Use the --color-* theme variables to customize the color utilities in your project, under the --color-<variable_name>* synatx -

   @theme {
   --color-regal-blue: #243c5a; 
   --color-rowdy : "pink"
   }

   Now the bg-regal-blue, bg-rowdy, text-rowdy utilities can be used in your markup:

   <div class="bg-regal-blue text-rowdy">
   <!-- ... -->
   </div>

c) Changing predefined/built-in classes values in tailwind css, with our custom value, use like this - (Inside app.css file)

Use the --breakpoint-* theme variables to customize your breakpoints:

@import "tailwindcss";
@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-2xl: 100rem;
  --breakpoint-3xl: 120rem;
}

Note: Now, Here, we have replaced default 2xl breakpoint value to new 100rem rather default 96rem value, and also we have defined two new breakpoints_name for our project i.e xs and 3xl breakpoints that can be used in below markup:

   <div class="grid xs:grid-cols-2 3xl:grid-cols-6">
   <!-- ... -->
   </div>






#2.) Breakpoints : There are five breakpoints by default, inspired by common device resolutions:

Breakpoint_prefix     width_and_esase_uppar_applied	              CSS Applied

sm(Tablets)             40rem (>=640px)     	   @media (width >= 40rem) { ... }
md(Small Laptops)	      48rem (>=768px)	      @media (width >= 48rem) { ... }
lg(Large Laptops)       64rem (>=1024px)    	   @media (width >= 64rem) { ... }
xl(Desktops)            80rem (>=1280px)	      @media (width >= 80rem) { ... }
2xl(Extra-large-Dektop or TV)	 96rem (>=1536px)	      @media (width >= 96rem) { ... }


xs(custom : mobile)     >=30rem(>=480px)


Here, Minimum width applied and maxium width applied to screen width untill user doesnot add higher width prefix.

// Note : >= 640px means sm i.e 640px and Esaspe upper ke sabhi screen size par applied ho jaa.

Note : Mobile screens -->  comes under 0 to 432px Max (we can take 480px as breakpoint)


Note : Responsive Text Making -

<h1 className="text-[20px]  md:text-[30px]  lg:text-[40px]">Our Services</h1>

Means: lg and lg ke uppar 40px text width size.
       md and md ke uppar 30px text width size.
       and default means below 30px, 20px lagega text width size.





#3.) Container Class : It is uses for defualt adjusting break-points as per screen size, for <480px screen 100%

mx-auto --> this property value makes horizontally center, as per space left in either left or right side of the element.

mx --> m for margine and x for left and right on x-axis.
my --> m for margine and y for top and bottom on y-axis.
m --> m for margin and It is applying around four sides i.e both x and y axis.

py --> py means applying padding top and bottom i.e on y-axis 
px --> px means applying padding left and right i.e on x-axis 
p  --> p means applying padding around all four sides i.e both x and y-axis.

pb --->To give padding to only bottom of html element.
pt --->To give padding to only top of html element.

ps or pl --->To give padding to only start of html element.
pe or pr --->To give padding to only end of html element.

   <div className="container bg-amber-700 mx-auto">

   ...
   </div>





#4.) max-width : We use max-width to limit the size of an element. In tailwind Container class is less use, in place we use, max-width to adjust the size of the the container or element.

It means container or HTMl element ka maximum width utna hi rahega, chahe ghat jaye but badhega nahi.

mx-auto --> this property value makes horizontally center, as per space left in either left or right side of the element.


   <div className="max-w-100 mx-auto bg-red-500">
      ...

   </div>


   For Custom Max-width applying, may be not available in tailwind css predefine max-width values -

   <div className="max-w-[1170px] mx-auto bg-red-500">
      ...

   </div>



5.) Display Property In tailwindCSS : It is use to control over the display box type of an HTML element, like div, h1 etc and also change their default display property type -

    Class_name               Properties_Applied

      inline         	      display: inline ;
      block          	      display : block;
      inline-block	         display: inline- block;
      flow-root             	display: flow-root;
      flex	                  display: flex;
      inline-flex	            display: inline-flex;
      grid                 	display: grid;
      inline-grid	            display: inline-grid;
      contents	               display : contents;
      table	                  display : table;
      list-item               display: list-item;
      hidden                  display: none;



*/




function Try() {

  return ( <>

  <div className="container bg-amber-700 mx-auto">
  

  <h1 className='text-red-500  ' >Learning Tailwind CSS</h1>

  {/* <p className='bg-[pink]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ratione fugiat atque distinctio quidem magnam inventore eaque deserunt assumeur officia a rem delectus laudantium voluptatem beatae! Aut, mollitia facilis iure beatae repudiandae iste ex excepturi.</p>
  <p className='bg-rowdy'>Lorem   ipsum dolor sit amet, consectetur adipisicing elit. Natus culpa similique beatae molestiae sit aut, atque illum eligendi. Sit ducimus incidunt dicta provident soluta modi consequatur, temporibus dolore repellat ipsa.</p> 
   */}

   <h2 className="mobile:text-amber-500 sm:text-center md:text-right">Welcome Rowdy</h2>

   <span className="bg-red-500 tablap:bg-amber-300 ">My Name is Khan!!</span>


   </div>


   <div className="max-w-100 mx-auto bg-red-500">


      <b>Hello Ram</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda deserunt est laudantium magnam facilis doloremque nobis ea ad maiores odit nostrum, dolore officiis? Sit dolorem tenetur, nam enim architecto fugiat dolor nihil inventore harum delectus? Dolor, exercitationem qui nisi ipsam harum voluptate voluptatem non! Error magni hic maiores dolore?</p>


   </div>

   <div className="max-w-[1170px] mx-auto bg-red-500 py-6">


      <b>Hello Ram</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda deserunt est laudantium magnam facilis doloremque nobis ea ad maiores odit nostrum, dolore officiis? Sit dolorem tenetur, nam enim architecto fugiat dolor nihil inventore harum delectus? Dolor, exercitationem qui nisi ipsam harum voluptate voluptatem non! Error magni hic maiores dolore?</p>


   </div>




  
  </>
  )
}





export {Try}