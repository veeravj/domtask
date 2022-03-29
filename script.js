let userDetails=document.createElement("form");
userDetails.className="user";
let firstLabel=getLabel("Firstname:","fname");
let firstName=getInput("text","fname");
userDetails.append(firstLabel);
userDetails.append(firstName);
document.body.append(userDetails);
newline();
let lastLabel=getLabel("Lastname:","lname");
let lastName=getInput("text","lname");
userDetails.append(lastLabel);
userDetails.append(lastName);
document.body.append(userDetails);
newline();








function getLabel(x,y){
    let info=document.createElement("label");
    info.setAttribute("For",y);
    info.innerText=x;
    return info;
}

function getInput(x,y){
     let result=document.createElement("input");
    result.setAttribute("type",x );
    result.setAttribute("id",y);
    return result;
}
function newline(){
    return document.createElement("br");

}