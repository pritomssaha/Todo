var ourform = document.getElementById("ourform");
var field = document.getElementById("field");
var list = document.getElementById("list");

ourform.addEventListener("submit", (e) => {
    e.preventDefault();
    add(field.value)
    console.log(field.value)
})

function add(c) {
    let out = `<li class="mt-4">${c} <button onclick="edititem(this)" class="btn btn-secondary btn-sm mt-2 ml-1" >Edit</button> <button onclick="deleteItem(this)"class="btn btn-danger btn-sm mt-2">Delete</button></li>`
    list.insertAdjacentHTML("beforeend", out)
    field.value = ""
    field.focus()
}

function deleteItem(x) {
    x.parentElement.remove();
    console.log(x.parentNode.innerHTML)
}

function edititem(x) {
    console.log(x.parentNode.innerHTML)
    var editValue = prompt(" ")
    console.log(editValue)
    if(editValue===null || editValue===""){
      console.log(editValue)
      alert("Wrong input")
    }
    else
      x.parentNode.innerHTML = `${editValue} <button onclick="edititem(this)" class="btn btn-secondary btn-sm mt-2 ml-1">Edit</button> <button onclick="deleteItem(this)"class="btn btn-danger btn-sm mt-2">Delete</button>`
}
