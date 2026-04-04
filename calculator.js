
let arr = ["", "", ""]; // [first, operator, second]

let display = document.querySelector('.display');

document.querySelectorAll('.digit').forEach(btn => {
  btn.addEventListener('click', () => {
    display.value += btn.textContent;
    if (arr[1] === "") {
      arr[0] += btn.textContent;
      // display.value = arr[0];
    } else {
      arr[2] += btn.textContent;
      // display.value = arr[2];
    }
  });
});

document.querySelectorAll('.operator').forEach(btn => {
  btn.addEventListener('click', () => {
    arr[1] = btn.textContent;
    display.value += btn.textContent;
    // display.value+=arr[1];
  });
});

document.querySelector('.equate').addEventListener('click', () => {
  let a = Number(arr[0]);
  let b = Number(arr[2]);

  let result = 0;

  if (arr[1] === "+") result = a + b;
  if (arr[1] === "-") result = a - b;
  if (arr[1] === "*") result = a * b;
  if (arr[1] === "%") result = a % b;
  if (arr[1] === "/") result = b === 0 ? "Nope 😏" : a / b;

  display.value = result;

  arr = [result.toString(), "", ""]; // reset
});

document.querySelector('.clear').addEventListener('click',()=>{
  display.value='';
  arr[0]='';
})