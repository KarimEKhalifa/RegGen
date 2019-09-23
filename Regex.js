class RegGen{
  constructor(){
  }
  createRegex(op){
    var regexRes;
    if(op.toLowerCase() == "email"){
      regexRes = /^[a-zA-Z][\w.]+@[a-z]+.[a-z]+.?[a-z]+$/
    }
    else if (op.toLowerCase() == "username"){
      regexRes = /^[A-Za-z]\w+$/
    }
    return regexRes
  }

  test(text,op){
    return text.match(this.createRegex(op))?true:false
  }

}

var Reg = new RegGen();
var testEmail = ""
var testUser = ""
console.log(Reg.test(testEmail,'EMAIL'))