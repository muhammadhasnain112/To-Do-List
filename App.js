let input = document.getElementById("input")
let ul = document.getElementById("ul")
let add = document.getElementById("add")
let keys
let li

add.addEventListener('click', build)
function build(){
    let uper = input.value.slice(0, 1).toUpperCase() + input.value.slice(1)
    li = document.createElement('li')
    let span = document.createElement('span')
    
    span.innerText = uper
    li.appendChild(span)
    input.value = ""
    ul.appendChild(li)
    let dlt = document.createElement('img')
    // dlt.innerText = `Delete`
    dlt.classList.add('img')
    dlt.setAttribute('src', 'trash.png')
    dlt.setAttribute('onclick', 'delet(this)')
    li.appendChild(dlt)
    let edit = document.createElement('img')
    // edit.innerText = `Edi`
    edit.classList.add('img')
    edit.setAttribute('src', 'edit.png')
    edit.setAttribute('onclick', 'edit(this)')
    li.appendChild(edit)
    
    let hr = document.createElement('hr')
    li.appendChild(hr)
}
document.addEventListener('keydown', function (event) {
    keys = event.key
    // console.log(keys);
    
    // console.log(keys);
    if(keys == "Enter"){
        // console.log("ll");
        build()
        
    }
})

function delet(a) {
let ab = a.parentElement
// console.log(ab);

    ab.remove()

}
function edit(abc) {
    let li = abc.parentElement.firstChild
    let pr = prompt("Enter Your Text")
    li.innerText = pr.slice(0, 1).toUpperCase() + pr.slice(1)
}


