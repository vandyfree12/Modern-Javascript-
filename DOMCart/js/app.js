// let element;



// element=document;
// element=document.all;
// element=document.all[200];
// element=document.head;
// element=document.body;
// element=document.domain;
// element=document.URL;
// element=document.characterSet;
// element=document.contentType;




//Links

// element=document.links[2];  
// element=document.links[2].className; 
// element=document.links[2].classList; 


// // element=document.forms;
// // console.log(element);


// //Selecting DOM ELEMENT
// let heading =document.getElementById('heading');

// console.log();
// //Change the CSS
// heading.style.background='#333';
// heading.style.color='#FFFFFF';
// heading.style.padding='10px';
// heading.style.padding='50px';

// //Change text Content 

// heading.textContent='The best courses';

// //another way
// heading.innerText='New heading';


//Selecting DOM Element 

// let heading=document.getElementById('heading');

// //select a class with query selector 
// const learningHeading=document.querySelector('#learn');
// //select  a class with a querySelector

// const tagline=document.querySelector('.tagline');



// let card=document.querySelector('.card') // this will select only the first card 

// //seleceting a tag 
// let headings=document.querySelector('h2')       


// //Nest your selectors  with CSS styles
// let image=document.querySelector('.card img')

//Query selector support nth-child,first child or last-child 
 

// let link=document.querySelector('#primary a:first-child');
// let links=document.querySelector('#primary a:last-child');
// let linksa=document.querySelector('#primary a:nth-child(2)');

// console.log(linksa);


//getElementByClassName
//it will get all the alinks 

// console.log(links[0]);
// links[0].style.color='red';
// links[0].textContent='New Document';
// links[0].style.background='black';

// const links=document.getElementById('primary').getElementsByClassName('link')


// console.log(links);

// imagesArray=Array.from(images);

// imagesArray.forEach(function(image)
// {
// console.log(image);

// });

// console.log(imagesArraay);


// const heading=document.getElementsByTagName('h1');

// console.log(heading);  



// const cards=document.querySelector('.card');
//______________________________

// this will print thst of h4 with it content
// console.log(courses[0].textContent);

/*const courses=document.querySelectorAll('.card h4');

const coursesArray=Array.from(courses);


coursesArray.forEach(function(courses) {

console.log(courses.textContent);
});
console.log(courses[0].textContent);
*/

//this is to print all the text that have the tag h4

//Select odd links 

// const oddLinks=document.querySelectorAll('#primary a:nth-child(odd)');

// oddLinks.forEach(function(odd) {

// odd.style.background='red';
// odd.style.color='white';

// });

// //Select Even links 


// const evenLinks=document.querySelectorAll('#primary a:nth-child(even)');

// evenLinks.forEach(function(even) {
//     even.style.background='blue ';
//     even.style.color='white';
// });




//Change all the add-to-cart button text 
// const addCartBtns=document.querySelectorAll('.add-to-cart');


// addCartBtns.forEach(function(button) {

// button.textContent='Something New';

// });

// console.log(addCartBtns); 

// //u-pull-right 


// const addCartBtns=document.querySelectorAll('.u-pull-right '); //to change all text and price uisng a particaular class


// addCartBtns.forEach(function(button) {

// button.textContent='90ghc';

// });

// console.log(addCartBtns); 


//Travesting 

// const navigation=document.querySelector('#secondary');





// let element=navigation.children[0].nodeName;



// const coursesList=document.querySelector('#courses-list');

// let element;

// element=coursesList.children[1].children[0].children[0].children[1].lastElementChild;
// element=coursesList.children[1].children[0].children[0].children[1].firstElementChild;
// element=coursesList.children[1].children[0].children[0].children[1];


// console.log(element); 




// Modern JavaScript The Complete Course - Build +10 Projects\4. DOM Scripting Number 10 tutorial
//Travesing from Children to Parents


// const cartBtn=document.querySelector('.add-to-cart');

// let element;

// //Parent Node 
// element=cartBtn;
// element=cartBtn.parentNode;
// element=cartBtn.parentElement.parentElement.children[0];
 

// //Sibling
// element=cartBtn.parentNode;
// element=cartBtn.previousElementSibling.previousElementSibling;


    //next element sibling 



// // Course Name 
// // const courseName=cartBtn.parentElement.querySelector('h4');



// // element=courseName.nextElementSibling.nextElementSibling.nextElementSibling;

// // console.log(element);
// // console.log(cartBtn.parentElement);


// //Create a new element 
// //create a new <a>

// const newLink =document.createElement('a');

// //add to class 
// newLink.className='link';

// //add the href
// newLink.href='index.html';
// newLink.href='#';
// // newLink.setAttribute('href','#');


// //add the text 
// newLink.appendChild(document.createTextNode('New Link'))

// document.querySelector('#primary').appendChild(newLink)

// console.log(newLink);



//Remove Element 


// const cards=document.querySelectorAll('.card');
// cards[11].remove()


// console.log(cards);



//remove by the children 



// const navigation=document.querySelector('#primry');
// const links=document.querySelectorAll('#primary .link'); 



// navigation.removeChild(links[4]);

// console.log(links);
// console.log(navigation);



// //Classes,Id's & Attribute 
// const link=document.querySelector('.link');
// let element;
// element=link;
// //read
// element=link.className;
// //Read the class(DOM token list)
// element=link.classList;
// //access specific class with classlist
// element=link.classList[0];
//  //add new class 
//  link.classList.add('new-class');
// //   //remove the class 
//   link.classList.remove('link');
// //  //id's
//   link.id='new-id';
// //  //Remove the id 
//      link.id='';
// link.removeAttribute('id');

 

//  //Attribute 

//  element=link.getAttribute('href');

// element=link.getAttribute('class');
// element=link.setAttribute('href','http://facebook.com');
// element=link.setAttribute('href','_blank');

// element=link.setAttribute('data-link','10');
//  element=link.hasAttribute('data-link');


//   element=link.removeAnimation('date-link');
//   console.log(element);



//Event Listener 

// const clearCartBtn=document.getElementById('clear-cart');

// clearCartBtn.addEventListener('click',clearBtnFunction);

  
// function clearBtnFunction(e) {
//     //target
//     let element;
//     element=e;

//     //read the target 
//     element=e.target;
//     element=e.target.id;
//     element=e.target.className;
//     element=e.target.innerText ;
//     element=e.target.innerText=2+2;
//     element=e.target;

//    console.log(element);
// }

//Mouse Event

//create the variable 

const heading=document.querySelector('#heading');
const links=document.querySelector('nav');
const clearCartBtn=document.querySelector('#clear-cart');

//  console.log(heading);
//  console.log(links);
//  console.log(clearCartBtn );



 //Click Mouse Event 

//  clearCartBtn.addEventListener('click',printEvent);
// //Double click 
// clearCartBtn.addEventListener('dblclick',printEvent);
//Mouse Enter

//clearCartBtn.addEventListener('mouseneter',printEvent);
//Mouse Leave 

// clearCartBtn.addEventListener('mouseleave',printEvent);

//Mouse over 

//clearCartBtn.addEventListener('mouseover' ,printEvent);

//Mouseout 
//clearCartBtn.addEventListener('mouseout',printEvent);


//Mouse Move 
// heading.addEventListener('mousemove',printEvent);


//  function printEvent(e) {
   
//     console.log(`THE EVENTS IS: ${e.type}`);
//  }



//Input & Form Events 

//create the variable 


// const searchForm=document.getElementById('search');
// searchInput=document.getElementById('search-course');

// //Event for <form>
// //Input Events

// //searchInput.addEventListener('copy',printEvent)// prevent u from copying
// searchInput.addEventListener('paste',printEvent)
// // searchForm.addEventListener('submit',printEvent);

//     function printEvent(e)  {



//         if(searchInput.value)
//         // e.preventDefault(e);
//             //print the output from the input 
//             console.log(searchInput.value);              
//            console.log(`Type:${e.type}`)    



//     }



//Event Bubbling

//Variables

//  const card=document.querySelector('.card'),
// infoCards=document.querySelector('.info-card'),
// addCartBtn=document.querySelector('.add-to-cart');

// // console.log(card);
// // console.log(infoCards);
// // console.log(addCartBtn);


// //Event Listener
// card.addEventListener('click',function(e) {
// console.log('You clicked the card');
// e.stopPropagation();

// })


// infoCards.addEventListener('click',function(e) {
//     console.log('You clicked the infocard');
//     e.stopPropagation();
// })    

// addCartBtn.addEventListener('click',function(e) {

//     console.log('You clicked on add to cart ');
//     e.stopPropagation();
// })    




//Delegation 


    // const shoppingCart=document.querySelector('#shopping-cart')

    // shoppingCart.addEventListener('click', removeProductFromCart);


    // function removeProductFromCart(e) {
    // // console.log(e.target.classList);

    // if(e.target.classList.contains('remove')){
    //     e.target.parentElement.parentElement.remove();
    // } 
    //     // console.log('NO'); 
    // }

//________________________________________
//Addd to cart 
//____________________
//I HAD AN ERROR 
//____________________

// const courseList=document.querySelector('#courses-List');

// courseList.addEventListener('click',addToCart);


// function addToCart(e) {
//     if(e.target.classList.contains('add-to-cart')) {
//         console.log('Courses Added!!')
//     }
// }

//________________________________________



//Local Storage


//Add to local Storage 


// localStorage.setItem('name','Juan');


//add session storage
// sessionStorage.setItem('name'   ,'John')


//remove from storage 

// localStorage.removeItem('name'); 


//read the value 

// const name=localStorage.getItem('name');

// // console.log(name);

// //localStorage clear 

// localStorage.clear();

const localStorageContent=localStorage.getItem('names');


let names;

if(localStorageContent===null){

    names=[];
}


else {

    names=JSON.parse(localStorageContent);

}

console.log();


names.push('Javascript');

// const myArray= [1,2,3];

localStorage.setItem('names',JSON.stringify(names));

// console.log(localStorageContent);



