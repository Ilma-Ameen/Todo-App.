var input = document.getElementById("inp");
var li = document.getElementById("list");

function addtask()
{
    var li = document.createElement("li");
    var liVal = document.createTextNode(inp.value);
    li.appendChild(liVal);
    list.appendChild(li);
    console.log(li);
    inp.value= "";

    //create delete
    var delbtn = document.createElement("BUTTON");
    var delVal = document.createTextNode("Delete");
    delbtn.appendChild(delVal);
    delbtn.setAttribute("class","btn1");
    delbtn.setAttribute("onclick","delrow(this)");
    li.appendChild(delbtn);

    //create edit
    var editbtn = document.createElement("BUTTON");
    var editVal = document.createTextNode("Edit");
    editbtn.appendChild(editVal);
    editbtn.setAttribute("class","btn2");
    editbtn.setAttribute("onclick","editrow(this)");
    li.appendChild(editbtn);

}

function delrow(btn1){
    console.log(btn1.parentNode);
    btn1.parentNode.remove();
}

function editrow(btn2){
    console.log();
    btn2.parentNode.firstChild.nodeValue = prompt("Enter to edit");
}

function ClearAll(){
    list.innerHTML  = "";
}

