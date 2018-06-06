const button = document.querySelector('button')
const form = document.querySelector('form')

function changetxt() {
    const h2 = document.getElementById('heading2')
    h2.textContent = 'Boom. ~magic~'
}

const updateHeading = function(ev) {
    ev.preventDefault()
   //  const t = ev.target
    // const item = t.item.value

    const item = document.getElementById('response').value
    const item2 = document.getElementById('herb').value
    document.getElementById('newHeading').innerHTML += '<p>' + item + '</p>' 
    document.getElementById('newHeading').innerHTML += '<p>' + item2 + '</p>'

    form.reset()
    // var newH = document.getElementById('response').value
    // const h3 = document.getElementById('newHeading')
    // h3.innerHTML = newH
}

button.addEventListener('click', changetxt)
window.addEventListener('click', updateHeading)
window.addEventListener('keyup', function(ev){
    if(ev.keyCode === 13){  
      updateHeading();
    }
});
