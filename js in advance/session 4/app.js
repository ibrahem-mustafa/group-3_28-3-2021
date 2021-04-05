// [
//     "id1" => 'element',
//     "id2" => 'element',
//     "id3" => 'element',
//     "id4" => 'element',
// ]

// ************* querying ************ //
// 1: getElementById
// const div = document.getElementById("mainDiv");
// 2: querySelector
// const p = document.querySelector(".p");
// console.log(p)
// 3: querySelectorAll
// const ps = document.querySelectorAll("p.p.p3");
// console.log(ps);

// const header = document.querySelector('.header')
// console.log(header)
// const headerTitle = header.querySelector('.headerTitle')
// console.log(headerTitle)

// const ul = header.querySelector('ul')
// console.log(ul)

// const liList = ul.querySelectorAll('li.li')
// console.log(liList)

// const  l4 = ul.querySelector('li.l4')
// console.log(l4)


// ***** Create & render Elements **** //
const container = document.querySelector('.container')
// 1: create element
const div = document.createElement('div')

// 2: control attributes

// setAttribute
div.setAttribute('id', 'main')
div.setAttribute('class', 'mainDiv block')
// div.setAttribute('class', 'newClasses')

// getAttribute
const eleClasses = div.getAttribute('class')

// removeAttribute
// div.removeAttribute('class')

// 3: control classes
const classList = div.classList

// add
classList.add('newClass', 'newClass2', 'newClass3')
// remove
classList.remove('newClass3', 'newClass2')
// toggle
classList.toggle('newClass10')
// contains
console.log(classList.contains('mainDiv'))

// console.log(div.classList)


// 4: control content
// => textContent
// div.textContent = 'Hello From Js'


// => innerText
// div.innerText = 'Hello From Js'

// => innerHTML
// div.innerHTML = '<script> alert("hi")</script>'

// 5: child control

const p = document.createElement('p')
p.textContent = 'P From Js'
div.appendChild(p)

const span = document.createElement('span')
span.textContent = 'Hello Again'

div.prepend(span)

console.log(div)
// 6: append element to document or Other Element in Document

// document.body.appendChild(div)
container.appendChild(div)


// 7: Event Control

div.addEventListener('click', () => {
    console.log('Hiiiii')
})

div.addEventListener('mouseenter', () => console.log('Mouse Entered'))

div.addEventListener('mouseleave', () => console.log('Mouse Leaved'))
