const button = document.querySelector('button')
const form = document.querySelector('form')
const spellArray = [];
const editBtn = document.getElementById("edit")
const submitBtn = document.getElementById("b2")

//const addEntry = function(){
submitBtn.addEventListener('click', function (ev) {
    var favClicked = false;
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
    ///fav button
    const favBtn = document.createElement("button")
    favBtn.innerHTML = "&#9829"
    favBtn.classList.add('fav')
    item.appendChild(favBtn)

    const list = document.getElementById('newHeading')

    list.appendChild(item)
    spellArray.push(item.textContent)

    ///delete button functionality
    deleteBtn.addEventListener('click', function (ev) {
        list.removeChild(item)
        const index = spellArray.indexOf(item.textContent)
        spellArray.splice(index, 1)
    });
    ///edit button functionality
    editBtn.addEventListener('click', function () {
        document.getElementById("inside").contentEditable = true;
    });
    ///fav button functionality
    favBtn.addEventListener('click', function () {
        if (!favClicked) {
            item.style.color = '#990000'
            item.style.backgroundColor = "black"
            favClicked = true;
        } else {
            item.style.color = "black"
            item.style.backgroundColor = "transparent"
            favClicked = false;
        }
    });
    form.reset()
});//end of add entry

submitBtn.addEventListener('click', addEntry)
window.addEventListener('click', addEntry)
window.addEventListener('keyup', function (ev) {
    if (ev.keyCode === 13) {
        addEntry();
    }
});