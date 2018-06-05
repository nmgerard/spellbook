const button = document.querySelector('button')
const form = document.querySelector('form')

function changetxt() {
    const h2 = document.getElementById('heading2')
    h2.textContent = 'Boom. ~magic~'
}

const updateHeading = function(ev) {
    ev.preventDefault()
    var newH = document.getElementById('response').value
    const h3 = document.getElementById('newHeading')
    h3.innerHTML = newH
}

button.addEventListener('click', changetxt)
window.addEventListener('click', updateHeading)
window.addEventListener('keyup', function(ev){
    if(ev.keyCode === 13){  
      updateHeading();
    }
});

//const b2 = document.getElementById('submit') line2
    // const h = document.querySelector('h1') line5
      // h.textContent = '~Kapow~' line6
// document.querySelector('form').addEventListener('submit', updateHeading) line17

