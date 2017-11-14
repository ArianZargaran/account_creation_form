//Adding submit button event to function 
const cta = document.getElementById("formTag")
cta.addEventListener("submit", storeData)

//Main array
var myArr = []

//Main function
function storeData() {
//Get elements
 const form = document.querySelector("form")
 const formArr = form.elements 
 const getName = document.getElementById("firstNameTag")
 const getMiddle = document.getElementById("middleNameTag")
 const getLast = document.getElementById("lastNameTag") 
 const getEmail = document.getElementById("emailTag")
 const getPass = document.getElementById("passTag")
 const getConfirmPass = document.getElementById("passConfirmTag")
 const getMonth = document.getElementById("monthTag") 
 const getDay = document.getElementById("dayTag") 
 const getYear = document.getElementById("yearTag")  
 
//Object constructor 
 var UserData = function(firstName, emailAddres, passwordConfirmation, birthDate){
  this.firstName = firstName;
  this.emailAddres = emailAddres;
  this.passwordConfirmation = passwordConfirmation;
  this.birthDate = birthDate;
}
 
//Object creator
  var newObj = myArr.push(new UserData(fullName(), emailValidation(), passwordCheck(), birthInput()))


 //Get name info 
  function fullName() {
  let legalName = getName.value + " " + getMiddle.value + " " + getLast.value
  return legalName
}

//Get email info
 function emailValidation(){
  let emailInput = getEmail.value
  let regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  let emailVal = regExp.test(emailInput)
  if (emailVal) {return emailInput}
}

//Check and get password  
 function passwordCheck(){
  if (getPass.value ===  getConfirmPass.value) {return getPass.value} 
  else {alert("Passwords provided don't match")}
}

//Get birth info  
function birthInput(){
  return getMonth.value + "/" + getDay.value + "/" + getYear.value
} 
  
//Error checker  
  for(var i = 0; i < formArr.length-2; i++) {
    if(!formArr[i].value){
      console.log(formArr[i].name + ' //Error')
 
//Console.log arry of objects      
      console.log(myArr)
    }
  }    
}