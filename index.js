const button = document.querySelector('button')
const b2 = document.getElementById('submit')

function changetxt() {
    // const h = document.querySelector('h1')
    // h.textContent = '~Kapow~'

    const h2 = document.getElementById('heading2')
    h2.textContent = 'Boom. ~magic~'
}

function updateHeading() {
    var newH = document.getElementById('response').value
    const h3 = document.getElementById('newHeading')
    h3.innerHTML = newH
}

button.addEventListener('click', changetxt)
// document.querySelector('form').addEventListener('submit', updateHeading)
b2.addEventListener('click', updateHeading)

window.addEventListener('keyup', function(ev){
    if(ev.keyCode === 13){
      updateHeading();
    }
});