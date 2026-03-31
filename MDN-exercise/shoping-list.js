      const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const but = document.querySelector('button');

but.addEventListener('click', (event) => {
        event.preventDefault();
    const myItem=input.value;
    input.value='';

let li=document.createElement('li');

let span=document.createElement('span');
    
let buttn=document.createElement('button');
    
li.appendChild(span);
    span.textContent=myItem;

li.appendChild(buttn);
    buttn.textContent='Delete';

list.appendChild(li);

buttn.addEventListener('click', () => {
          list.removeChild(li);
        });

        input.focus();

    });