let deletetask = document.getElementById("del-button");
console.log("hello");
let count = 0;
let deleteEle = new Array();

deletetask.addEventListener("click", function(e){
    //getting all the checked value
    
    let check = document.querySelectorAll(".checkbox");
    for(let i of check){
        if(i.checked){
            
            deleteEle.push(i.getAttribute("value"));
            count++;
        }
    }
    if(count==0)
    {
        alert("Plese check the list which you want to delete");
    }
    else{
        deletetask.setAttribute("formaction", `/deletetask/${deleteEle}`);
    }
    
});