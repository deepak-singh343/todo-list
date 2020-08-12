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
    deletetask.setAttribute("formaction", `/deletetask/${deleteEle}`);
});
