const body=document.querySelector('body');
const div=document.createElement('div');
div.classList.add('container');
body.appendChild(div);
const button=document.querySelector('.add');

const clear=document.querySelector('.clear');

const revert=document.querySelector('.revert');


button.addEventListener('click',function(){
    div.innerHTML="";
    
    let input=prompt("Enter a number of square:");
    let num=Number(input);

if (!num || num <= 0 || num > 100) {
    alert("Enter a number between 1 and 100");
    input=prompt("Enter a number of square:");
    num=Number(input);
}
    input="";
    done(num);
       clear.addEventListener('click',function(){
    div.innerHTML="";
   done(num);
})
    })
function done(num){
    for (let i = 0; i < num*num; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const width=Math.floor(960/num);
    const height=Math.floor(736/num);

    const square = document.createElement('div'); // ✅ create once
    square.style.width=`${width}px`;
    square.style.height=`${height}px`;
if(revert.checked){
    revert.addEventListener('change', function(){
        square.addEventListener('mouseover',function(){
        square.style.backgroundColor ="white";
        })
        
    })
}
else{
 let total=0;
    square.addEventListener('mouseover',function(){
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
       
        square.style.opacity=`${total+=0.1}`;
    })
        }
//  let total=0;
//     square.addEventListener('mouseover',function(){
//         square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
       
//         square.style.opacity=`${total+=0.1}`;
//     })
    //square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // ✅ style it

    div.appendChild(square); // ✅ add it to container
}
}



