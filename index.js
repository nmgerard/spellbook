const button = document.querySelector('button')
const form = document.querySelector('form')

function changetxt() {
    const h2 = document.getElementById('heading2')
    h2.textContent = 'Boom. ~magic~'
}

const updateHeading = function(ev) {
    ev.preventDefault()
     const item = document.getElementById('response').value
    // document.getElementById('newHeading').innerHTML += '<p>' + item + '</p>' 

    var node = document.createElement("p");
    var textNode = document.createTextNode(item)
    node.appendChild(textNode);
    document.getElementById('newHeading').appendChild(node)

    form.reset()
}

const clickRadioBtn = function(ev){
    ev.preventDefault()
    const item2 = document.querySelector('input[name = "herb"]:checked').value
    // document.getElementById('newHeading').innerHTML += '<p>' + item2 + '</p>'

    var node = document.createElement("p");
    var textNode = document.createTextNode(item2)
    node.appendChild(textNode);
    document.getElementById('newHeading').appendChild(node)  
    form.reset()
}

button.addEventListener('click', changetxt)
window.addEventListener('click', clickRadioBtn)
window.addEventListener('click', updateHeading)
window.addEventListener('keyup', function(ev){
    if(ev.keyCode === 13){  
      updateHeading();
    }
});

