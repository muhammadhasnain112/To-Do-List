function trash(){
    localStorage.clear()
    ul.innerHTML = ``
    // arr.clear()
}
// localStorage.clear()
let input = document.getElementById("input")
let ul = document.getElementById("ul")
let add = document.getElementById("add")
// let li
let uper
let arr = JSON.parse(localStorage.getItem('todo')) || [];

document.addEventListener('keydown', function (event) {
    let keys = event.key
    if (keys == "Enter") {
        show()
    }
})
for (let i = 0; i < arr.length; i++) {
    ul.innerHTML += `<li><span>${arr[i].list}</span><img class="img clear" src="trash.png" ><img class="img" src="edit.png" onclick="edit(this)"><hr></li>`
    let clear = document.querySelectorAll('.clear')
    for (let j = 0; j < clear.length; j++) {
        clear[j].addEventListener('click', (e) => {
            let parentElement = e.target.parentElement
            console.log(parentElement);
            parentElement.remove()
            arr.splice(j, 1)
            localStorage.setItem('todo', JSON.stringify(arr));
        })
    }
}
add.addEventListener('click', show)
function show() {
    uper = input.value.slice(0, 1).toUpperCase() + input.value.slice(1)
    let obj = {
        list : uper,
    }
    input.value = ``
    arr.push(obj)
    localStorage.setItem('todo', JSON.stringify(arr))
    ul.innerHTML = ``
    // console.log(arr[2]);
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `<li><span>${arr[i].list}</span><img class="img clear" src="trash.png" ><img class="img" src="edit.png" onclick="edit(this)"><hr></li>`
        // ul.innerHTML = ``
    }
    let clear = document.querySelectorAll('.clear')
    for (let i = 0; i < clear.length; i++) {
        clear[i].addEventListener('click', (e) => {
            let parentElement = e.target.parentElement
            // console.log(parentElement);
            parentElement.remove()
            arr.splice(i, 1)
            localStorage.setItem('todo', JSON.stringify(arr));
        })
    }
}


// document.getElementById('trash').addEventListener('click',()=>{
    // location.reload
// })


function edit(abc) {
    let li = abc.parentElement.firstChild
    // console.log(abc.parentElement.firstChild);
    let pr = prompt("Enter Your Text")
    li.innerText = pr.slice(0, 1).toUpperCase() + pr.slice(1)
}

// function cl(){
// }
