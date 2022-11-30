// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    console.log(this.parentElement)
    var div = this.parentElement;

    div.style.display = "none";
  }
}

function myfunction(){
    const list=document.createElement("li")
   const span=document.createElement("span")
   span.className="close"
   const icon='<i class="fa-solid fa-trash-can close"></i>'
   const addList=document.getElementById("MyInputValue").value;
   const text=document.createTextNode(addList);
    span.innerHTML=icon;
    list.appendChild(text);
    //list.innerHTML=addList//
    list.appendChild(span);
    if(addList===''){ 
        alert('You have to write some thing!');
    }else{
        document.getElementById('MyUList').appendChild(list)
    }
    document.getElementById("MyInputValue").value="";

    for ( i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            console.log(this)
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
       
}   

// add "cheked "symbol when clicking on a list
const li=document.querySelector('ul');
li.addEventListener('click',function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }
},
false);





alert("hello")
