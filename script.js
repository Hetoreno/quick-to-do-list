const collections=document.getElementsByClassName(`list`);

document.getElementById(`add`).onclick = function(){ 
    const addingList= document.getElementById(`adding`);
    const newList = document.createElement(`li`);
    let input = document.getElementById(`value`).value;

    newList.classList.add("list");
    newList.innerText = input;
    addingList.appendChild(newList);

    
}