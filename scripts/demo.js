let myimage = document.querySelector('img');

myimage.onclick = function(){
let imgSrc = myimage.getAttribute('src');
if(imgSrc === 'images/mozilla.png'){
    myimage.setAttribute('src', 'images/mozilla2.png');
}else{
    myimage.setAttribute('src','images/mozilla.png')
}

}


let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt('please enter your name');
    if(!myName){
        setUserName();
    }else{ localStorage.setItem('name', myName);
    myHeading.textContent = "welcome" + " " + myName;
 }
   
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "welcome" + " " + storedName;
    
}

myButton.addEventListener('click',()=>{
    setUserName();
})

