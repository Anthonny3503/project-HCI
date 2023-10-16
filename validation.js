document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var address = document.getElementById("address").value
    var gender = document.getElementsByName("gender");
    var getletter = document.getElementById("getletter");

    if(name.length < 5 || name.length>20){
        alert("Username must be beetween 5 and 20!");
        return;
    }
    if(!validateEmail(email)){
        alert("Please enter a correct email");
        return;
    }
    if(address.length < 6){
        alert("You must enter a correct address");
        return;
    }
    if(!(gender[0].checked || gender[1].checked)){
        alert("You must select your gender!");
        return;
    }
    var confirmReslut = confirm("Are you sure you want to register");
    if(confirmReslut){
        alert("Thanks for being a member of Tanaka Guitar");
    }
    else{
        alert("Membership cancelled");
    }
})
function validateEmail(email){
    return(email.indexOf("@") != -1) && (email.endsWith(".com"))
}
