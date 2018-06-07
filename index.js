const button = document.querySelector('button')
const form = document.querySelector('form')
const spellArray = [];

// function changetxt() {
//     const h2 = document.getElementById('heading2')
//     h2.textContent = 'Boom. ~magic~'
// }


const addEntry = function(ev){
    ev.preventDefault()

    const spellName = document.getElementById('response').value
    const spellTxt = document.createTextNode(spellName)
        
    const herb = document.querySelector('input[name = "herb"]:checked').value
    const herbTxt = document.createTextNode(herb)

    const item = document.createElement('p')
    item.appendChild(spellTxt)
    item.appendChild(herbTxt)

     ///delete button
     const deleteBtn = document.createElement("button")
     deleteBtn.innerHTML = "&#10005"
     deleteBtn.classList.add('delete')
     item.appendChild(deleteBtn)
     ///

     ///fav button
     const favBtn = document.createElement("button")
     favBtn.innerHTML = "&#9829"
     favBtn.classList.add('fav')
     item.appendChild(favBtn)
     ///

     ///edit button
     const editBtn = document.createElement("button")
     editBtn.innerHTML = "&#9998"
     editBtn.classList.add('edit')
     item.appendChild(editBtn)
     ///

     const list = document.getElementById('newHeading')
     list.appendChild(item)
     spellArray.push(item.textContent)

     ///delete button functionality
    deleteBtn.addEventListener('click', function(ev){
       // item.parentNode.removeChild(item)
        list.removeChild(item) 
        const index = spellArray.indexOf(item.textContent)
        spellArray.splice(index,1)
    });
    ///

     form.reset()
}

window.addEventListener('click', addEntry)
window.addEventListener('click', addEntry)
window.addEventListener('keyup', function(ev){
    if(ev.keyCode === 13){  
      addEntry();
    }
});

//try to figure out how to just change the color of the herb using span

// const updateHeading = function(ev) {
//     ev.preventDefault()
//     const item = document.getElementById('response').value
//     // document.getElementById('newHeading').innerHTML += '<p>' + item + '</p>' 

//     var node = document.createElement("p");
//     var textNode = document.createTextNode(item)
//     node.appendChild(textNode);
//     spellArray.push(node.innerHTML)
//     document.getElementById('newHeading').appendChild(node)

//     form.reset()
   
// }

// const clickRadioBtn = function(ev){
//     ev.preventDefault()
//     const item2 = document.querySelector('input[name = "herb"]:checked').value
//     // document.getElementById('newHeading').innerHTML += '<p>' + item2 + '</p>'

//     var node = document.createElement("p");
//     var textNode = document.createTextNode(item2)
//     node.appendChild(textNode);
//     spellArray.push(node.innerHTML)
//     document.getElementById('radioHeading').appendChild(node)  
//     form.reset()
// }

// button.addEventListener('click', changetxt)

// window.addEventListener('click', clickRadioBtn)
// window.addEventListener('click', updateHeading)
// window.addEventListener('keyup', function(ev){
//     if(ev.keyCode === 13){  
//       updateHeading();
//     }
// });