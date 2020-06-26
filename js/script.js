/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


var studL = document.getElementsByClassName('student-item cf');
console.log(studL);

var numOfItem = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/*This function will take any list and page# and hide all but 10. */

const showPage = (list, page) => {
   var strt = (page * numOfItem) - numOfItem;
   var eend = page * numOfItem;
   for (i = 0; i < list.length; i++) {
      if (i >= strt && i < eend) {
         list[i].style.diplay = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {

   /* This will taget the div element on the 'example-meets.html' page???? */
   


   /* This will create a div element, and append it to the div element with the class name of page */
   let ul = document.getElementsByTagName('div.page')
   let div = document.createElement('div.pagination');
   ul.appendChild(div);


  /* This willl call the showPage function when clicked */
  a.addEventListener('click', () => {})

   
}



// Remember to delete the comments that came with this file, and replace them with your own code comments.