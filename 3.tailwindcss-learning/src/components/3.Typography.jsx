

/*

#7.) Typography : Typography means everthing about and around 'text' related, we will see all classes to work with text like alignment, font, text-color, font-family etc.

NOte : In tailwind CSS, all heading tags from h1 to h6 tailwind removes all default css for them.


#7.a) Related With Font : -

i) font-family : It is for applying font family of an element.

font-sans ---> It is default font-family for text.

<p class="font-sans ...">The quick brown fox ...</p>
<p class="font-serif ...">The quick brown fox ...</p>
<p class="font-mono ...">The quick brown fox ...</p>

//Using a custom font-family :-
<p class="font-[Open_Sans] ...">
  Lorem ipsum dolor sit amet...
</p>


ii) font-size : TO change size of a text.

<p class="text-sm ...">The quick brown fox ...</p>
<p class="text-base ...">The quick brown fox ...</p>
<p class="text-lg ...">The quick brown fox ...</p>
<p class="text-xl ...">The quick brown fox ...</p>
<p class="text-2xl ...">The quick brown fox ...</p>

//Custom font-size : 
<p class="text-[30px] ...">The quick brown fox ...</p>

//Responsive font-size : 
<p class=" text-[20px]  md:text-[30px] ">The quick brown fox ...</p>


iii) font-weight : It is use to control font weight(means motaii) of an element i.e boldness or thickness of text. We will give value from 100 to 900 for custom font-weight.


Class_name                              CSS_Property_Applies

   font-thin	                     font-weight : 100;
   font-extralight	               font-weight : 200;
   font-light	                     font-weight : 300;
   font-normal	                     font-weight : 400 ;
   font-medium	                     font-weight : 500;
   font-semibold	                  font-weight : 600;
   font-bold	                     font-weight : 700;
   font-extrabold   	               font-weight: 800;
   font-black	                     font-weight : 900;
   font-(<custom-property>)         font-weight: var(<custom-property>);
   font-[<value>]                   font-weight: <value>;


   <p class="font-bold ...">The quick brown fox ...</p>
   <p class="font-light ...">The quick brown fox ...</p>
   <p class="font-normal ...">The quick brown fox ...</p>
   <p class="font-medium ...">The quick brown fox ...</p>
   <p class="font-semibold ...">The quick brown fox ...</p>

   //custom font-weight -
   <p class="font-[1000] ...">
      Lorem ipsum dolor sit amet...
   </p>

   //Responsive font-weight -
   <p class="font-normal md:font-bold ...">
       Lorem ipsum dolor sit amet...
   </p>

   Here, Reponsive font-weight, Apply font-bold to medium screen size and above. Plus, below screen applied font-normal.




iv) font-style : To add style of the 'text' like italic, not-italic etc./Utilities for controlling the style of text. 

<p class="italic ...">The quick brown fox ...</p>
<p class="not-italic ...">The quick brown fox ...</p> --> for normal text



v) font-varient : It is use to apply variation in the text like 1st -

<p class="ordinal ...">1st</p>   --->   1st



-------------------------------------------------------------------

#7.b) Related With Text : -

i) Text Color : color property to give color to text, as follows -

syntax : text-<color_name>-<color_value>  or,  text-[<color_code>]

Here, tailwind gives us 50 to 950 color_value which indicates darkness and lightness of a provided color.

<p class="text-white" >The quick brown fox...</p>
<p class="text-black" >The quick brown fox...</p>
<p class="text-blue-900" >The quick brown fox...</p>
<p class="text-red-200" >The quick brown fox...</p>

Note : Only white and black text-color doesnot we need to give its color-value , for rest other colors we need to must specify its color value to work.


// custom text color value -
<p class="text-[#efef] >The quick brown fox...</p> --> grey color text
<p class="text-[#fff] >The quick brown fox...</p>  --> white text
<p class="text-[#000] >The quick brown fox...</p>  --> black text



ii) Text Background Color : To give background color to the text or content of the element.

Syntax : bg-<color_name>-<color-value>   or,  bg-[<color_code>]


iii) text-left/rigt/center : It is the property alies as 'text-align' property in HTML for alignment of text - left or start, right or end, center, justify.

<p class="text-left" >The quick brown fox...</p>
<p class="text-start" >The quick brown fox...</p>

<p class="text-center" >The quick brown fox...</p>

<p class="text-right" >The quick brown fox...</p>
<p class="text-end" >The quick brown fox...</p>
<p class="text-justify" >The quick brown fox...</p>



//Responsive text alignment -
<p class=" text:left lg:text-center" >The quick brown fox...</p>




iv) text-transform : To make text in capital or lower or first char in cap etc.

uppercase   -->  text-transform: uppercase;
lowercase     -->  text-transform: lowercase;
capitalize    -->   text-transform: capitalize; (Make first letter of each word capital)
normal-case  --->   text-transform: none;


<p class="uppercase">The quick brown fox ...</p>
<p class="lowercase">The quick brown fox ...</p>


v) text-overflow : It is the property of 'overflow' where when our content size i.e text might be greater than the provied container size, then we can controll over the text-flow as hidden, scroll, visible(bydefault).


<p class="truncate">The longest word in any of the major...</p>
<p class="overflow-hidden text-ellipsis">The longest word in any of the major...</p>
<p class="overflow-hidden text-clip">The longest word in any of the major...</p>




vi) line-height : It is use to give line heiht between vertical space between two text line -


   leading-<number>  ---> To define line height in tailwind CSS.

<p class="leading-6">So I started to walk into the water...</p>
<p class="leading-[1.5] ...">Lorem ipsum dolor sit amet... </p>



vii) text-decoration-line : - To add or remove undeline, overline, line-through and no-underline -

<p class="underline">The quick brown fox...</p>
<p class="overline">The quick brown fox...</p>
<p class="line-through">The quick brown fox...</p>

//Removing underline from anchor tag -
<a className="no-underline"  href="www.google.com">GOOGLE</a>

// Applying Under-line on hover -
<p>The <a href="..." class="no-underline hover:underline ...">quick brown fox</a> jumps over the lazy dog.</p>





#8. Box-spacing :- To provide space around the content or element, we use padding, border, margin -


i) margin : To have the space outside of border of the element and till  adjacent elment.   -

Syntax : m-<number> or m-[<custom_px>]

m  ---> margin in all four-direction
mt  ---> margin in top direction only
mb  ---> margin in bottom direction only
my  ---> margin in both top and down direction i.e on y-axis

ml or ms --> margin in left direction only
mr  or me  --> margin in right direction only
mx  ---> margin in both left and right direction i.e on x-axis

mx-auto  --> adjust left and right side space, and make element horizonatally center. 


<div class="m-1">margin-1</div>
<div class="m-[20px] ...">margin 20px</div>

m-1
m-2
m-[30px]

m-[20px_40x_30px_20px]  --> works clock wise, seperated with underscore.
m-[20px_40px]  --> first top&bottom and second left%right  
m-[20px_40px_60px]  --> 20px - top, 40px - left&right, 60px - bottom. 

mx-[30px]


//Responsive Margin -
m-[20px] lg:m-[30px]


ii) padding : To have the space just after content and till border./To move content/Means Inside the content box it will move. -

Syntax : p-<number> or p-[<custom_px>]


p  --> p means applying padding around all four sides i.e both x and y-axis.
px --> px means applying padding left and right i.e on x-axis 
py --> py means applying padding top and bottom i.e on y-axis 

pt --->To give padding to only top of html element.
pb --->To give padding to only bottom of html element.

ps or pl --->To give padding to only start of html element.
pe or pr --->To give padding to only end of html element.

<div class="p-1">padding-1</div>
<div class="p-[20px]">padding 20px</div>


p-[30px]
py-[40px]  --> top and bottom
px-[30px]  --> left and right
pt-5

p-[20px_40x_30px_20px]  --> works clock wise, seperated with underscore.
p-[20px_40px]  --> first top&bottom and second left%right  
p-[20px_40px_60px]  --> 20px - top, 40px - left&right, 60px - bottom. 

//Responsive padding -
p-[20px] lg:p-[30px]



iii) border : TO work with the content or element border, like border-width, border-color, border-style, border-radius


a) border-radius : Utilities for controlling the border radius of an element.

<div class="rounded-sm"></div>
<div class="rounded-md"></div>
<div class="rounded-lg"></div>
<div class="rounded-xl"></div>
<div class="rounded-[20px]"></div>
<div class="rounded-[50%]"></div>

<div class="rounded-non"></div>


b) border-width : Utilities for controlling the width of an element's borders.

border-2    ---> border 2px width


c) border-color : 
border-[black]


d) border-style : Utilities for controlling the style of an element's borders.
border-[solid]



#9. Box Shadow/Effects : - TO have shadow effect around the box or element.

i) box-shadow : Utilities to have shadow around the box of element.

<div class="shadow-md ..."></div>    ---> shodow okay
<div class="shadow-lg ..."></div>   --> Shadow More
<div class="shadow-xl ..."></div>   ---> Slighly More


ii) text-shadow : To have shadow around text element.

<p class="text-shadow-2xs ...">The quick brown fox...</p>
<p class="text-shadow-xs ...">The quick brown fox...</p>
<p class="text-shadow-sm ...">The quick brown fox...</p>
<p class="text-shadow-md ...">The quick brown fox...</p>
<p class="text-shadow-lg ...">The quick brown fox...</p>


iii) opacity : TO have opacity or transparency of the element or box of element.

<button class="opacity-100 ..."></button>
<button class="opacity-75 ..."></button>
<button class="opacity-50 ..."></button>
<button class="opacity-25 ..."></button>







#10.) height and width Property : -


w-3xs or w-[20px] or,  w-[100%]

w-14   ---14px
h-14   ---14px
size-14   ---> shortcut to give height and width at the same time to an element with same value, ie when we want to make square shape element usually.
size-[<value>]  


<div class="size-14 bg-blue-500 rounded-full">01</div>




Note : ctrl + D --> To select all similar tag a time, by selcting it. 




#11.) box-sizing : It is use to shrink, padding and margin into content size, not into outside space. Means when 



Note : Including borders and padding /Box-sizing : -

Use class='box-border' utility to set an element's box-sizing to border-box, telling the browser to include the element's borders and padding when you give it a height or width.

This means a 100px × 100px element with a 2px border and 4px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 88px × 88px:



#12.) Hover, focus, and other states : Every utility class in Tailwind can be applied conditionally by adding a variant to the beginning of the class name that describes the condition you want to target.

For example, when resting background color is bg-sky-500, to apply hover on button, we get background color as bg-sky-700, use hover:bg-sky-700 class -


<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>




*/


export default function Typography() {


  return ( <>

        <b className="text-[#740808]" > TypoGraphy : everthing related with text properties : - </b>

        <p className="font-mono text-amber-800 text-start font uppercase">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia iusto suscipit nisi nihil aspernatur ducimus ipsam doloribus nobis voluptatibus nam.</p>


        <div className="max-w-[1170px] mx-auto bg-amber-300">

          <div className="p-[20px]">

                <h1>Margin and Padding Learning </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere dicta corporis voluptate autem exercitationem qui repellendus impedit delectus neque.</p>

          </div>

        </div>

  </>)
}















