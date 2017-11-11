const storeData = function(first, email, password, birth){
  this.first = first;
  this.email = email;
  this.password = password;
  this.birth = birth;
}

let cta = document.getElementById("acf_form")
cta.addEventListener("click", storeData())

let dataArr = []
function storeData() {
  let first = cta.value  
  return dataArr.push(storeData(first,1,2,3))
                     }


var one = new storeData(1,2,3,4)
console.log(one)