// Array
const books = ['book1', 'book2', 'book3']
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

//DOM Selectors
const div = document.createElement('div');
const ul = document.createElement('ul');
const selectDiv = document.querySelector('div')
const li = document.querySelectorAll('li');
const newHeader = document.getElementById("main");

//DOM Appenders
document.body.append(div);


//FOR Statments
for (let i=0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = (books[i]);
    ul.append(li)
    div.append(ul);
}

for (let i = 0; i < colors.length; i++) {
    const li = document.createElement('li');
    li.textContent = (colors[i]);
    ul.append(li)
    
}

//Styles

ul.style.backgroundColor = 'green'
ul.style.lineHeight = 2;
newHeader.textContent = 'Jaz is the champion!'
newHeader.className = 'colors'

//removing Selectors
const ulSelector = document.querySelector('ul');
const secondChild = ulSelector.querySelector("li:nth-child(2)");
ulSelector.removeChild(secondChild)

ul.remove()