const mode_slider = document.querySelector(".sliding-div");
const mode_click = document.querySelector(".mode-outer");

mode_click.addEventListener("click", () =>{
    if( mode_slider.classList.contains('chngtodark')){
        mode_slider.classList.toggle('chngtolight');
    }
    else{
        mode_slider.classList.toggle('chngtodark');

    }
});


const table_content = document.querySelector('.table-content-icon');
const customize_content = document.querySelector('.customize-opt');
const conLeft = document.querySelector('.bottom-left');
const conMiddle = document.querySelector('.bottom-middle');
const conRight = document.querySelector('.bottom-right');
const disZoom = document.querySelector(".lol");

table_content.addEventListener("click", ()=>{
    

    if(conLeft.classList.contains('hidecont') || conRight.classList.contains('hidecont') ){
        if(conLeft.classList.contains('hidecont')){
            conLeft.classList.remove('hidecont');
            conLeft.classList.add('showcont');
        }
        else{
            conLeft.classList.add('hidecont');
            conLeft.classList.remove('showcont');
        }
        if((conRight.classList.contains('hidecont') && (conLeft.classList.contains('hidecont')))){
            conMiddle.classList.add('increase-middle-full')
            conMiddle.classList.remove('increase-middle');          
        }
        else if((conLeft.classList.contains('showcont')) && !(conRight.classList.contains('hidecont')) ){
            conMiddle.classList.remove('increase-middle');
            conMiddle.classList.remove('increase-middle-full');           
        }
        else if(conLeft.classList.contains('showcont') && conRight.classList.contains('hidecont')){
            conMiddle.classList.add('increase-middle');
            conMiddle.classList.remove('increase-middle-full');    
        }
        else{
            conMiddle.classList.add('increase-middle-full')
            
        }
    }
    else{
        conLeft.classList.add('hidecont');
        conLeft.classList.remove('showcont')
        conMiddle.classList.remove('increase-middle-full')
        conMiddle.classList.add('increase-middle');
    }
    conMiddle.style.animation = 'none';
    void conMiddle.offsetWidth;
    conMiddle.style.animation = 'decreasemiddle 0.5s linear forwards';
});

customize_content.addEventListener("click", ()=>{
    if(conLeft.classList.contains('hidecont') || conRight.classList.contains('hidecont') ){
        if(conRight.classList.contains('hidecont')){
            conRight.classList.remove('hidecont');
            conRight.classList.add('showcont');
        }
        else{
            conRight.classList.add('hidecont');
            conRight.classList.remove('showcont');
        }
        if((conLeft.classList.contains('hidecont') && (conRight.classList.contains('hidecont')))){
            conMiddle.classList.add('increase-middle-full')
            conMiddle.classList.remove('increase-middle');
            
        }
        else if((conRight.classList.contains('showcont')) && !(conLeft.classList.contains('hidecont')) ){
            conMiddle.classList.remove('increase-middle');
            conMiddle.classList.remove('increase-middle-full')
            

        }
        else if(conRight.classList.contains('showcont') && conLeft.classList.contains('hidecont')){
            conMiddle.classList.add('increase-middle');
            conMiddle.classList.remove('increase-middle-full')
        }
        else{
            conMiddle.classList.add('increase-middle-full')
        }
    }
    else{
        conRight.classList.add('hidecont');
        conRight.classList.remove('showcont')
        conMiddle.classList.remove('increase-middle-full')
        conMiddle.classList.add('increase-middle');
    }
    conMiddle.style.animation = 'none';
    void conMiddle.offsetWidth;
    conMiddle.style.animation = 'decreasemiddle 0.5s linear forwards';
});



const zoomClick = document.querySelector(".actual-zoom-div");
const zoomCont = document.querySelector(".onclick-zoom-opt");
const zoomNum = document.querySelectorAll(".hover-zoom-opt");
const currentZoom = document.querySelectorAll(".check-icon");
zoomClick.addEventListener("click",()=>{
    zoomCont.classList.toggle("openzoomlist");
  
})

zoomNum.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
    conMiddle.style.animation = 'none';
     let val = 0.25 * ( index + 1) ;
     if(index == (zoomNum.length - 1)){
          val = 1;
     }
     conMiddle.style.transform = 'scale('+ val+ ')';

     currentZoom.forEach(contentzoom  =>{
        contentzoom.classList.remove("activezoom");
     })
     console.log(zoomNum[index].innerText)
     disZoom.innerText = zoomNum[index].innerText;
     currentZoom[index].classList.add("activezoom");
    });
});

window.addEventListener('click',(event)=>{
    if(!(event.target.classList.contains("lol")) && !(event.target.classList.contains(".actual-zoom-div"))){
        if(!(event.target.classList.contains("lol-icon"))){
            hidezoomlist();
        }
    }
})

function hidezoomlist(){
    zoomCont.classList.remove('openzoomlist')
}




 const containerElement = document.querySelector('.main-bottom');
 var offsetX, offsetY;

 // Function to handle mouse down event
 function dragMouseDown(e) {
   e.preventDefault();
   offsetX = e.clientX - conMiddle.offsetLeft;
   offsetY = e.clientY - conMiddle.offsetTop;
   document.addEventListener('mousemove', elementDrag);
   document.addEventListener('mouseup', closeDragElement);
 }

 // Function to handle mouse move event
 function elementDrag(e) {
   e.preventDefault();
   var newX = e.clientX - offsetX;
   var newY = e.clientY - offsetY;

   // Ensure draggable element stays within the container bounds
   newX = Math.min(Math.max(newX, 0), containerElement.offsetWidth - conMiddle.offsetWidth);
   newY = Math.min(Math.max(newY, 0), containerElement.offsetHeight - conMiddle.offsetHeight);

   conMiddle.style.left = newX + 'px';
   conMiddle.style.top = newY + 'px';
 }

 // Function to handle mouse up event
 function closeDragElement() {
   document.removeEventListener('mousemove', elementDrag);
   document.removeEventListener('mouseup', closeDragElement);
 }

 // Add event listener to the draggable element
 conMiddle.addEventListener('mousedown', dragMouseDown);
