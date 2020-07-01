/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



var studL = document.getElementsByClassName('student-item cf');
console.log(studL);

var numOfItem = 10;




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
};
showPage(studL, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {

   /* 1. This wil get the exact pages needed while displaying only 10 at a time */
   const totNum = Math.ceil(list.length/numOfItem);

   /* 2. This will create a div element, give it a className of pagination, as well as append it to the div element with the class name of .page */
   const  page = document.querySelector('.page');
   const div = document.createElement('div');
      div.className = 'pagination';
      page.appendChild(div);

   /* 3. This will store the pagination links..in the .pagination "div"  */
   const unOrd = document.createElement('ul');
      div.appendChild(unOrd);



   /* 4. this wiil loop over/add 'li' & 'a' tags....as well as set the value to the href, text, and class */
   for (n = 0; n < totNum; n++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
         unOrd.appendChild(li);
         li.appendChild(a);
      };
         a.href = '#'
         a.textContent = n + 1;
         if (n === 0) { 
            a.className = "active";
      };
      
      
         
   /* This will add a "click" EventListener to every "a" element and call the showPage function when clicked */ 
         a.addEventListener('click', (e) => {
            for (i = 0; i < a.length; i++) {
               e. target.classList.remove('active');
            }
               e.target.className = "active";

               showPage(list, e.target.textContent);
                                             })
      }
   
  
  
  
  
   




   



 






// Remember to delete the comments that came with this file, and replace them with your own code comments.