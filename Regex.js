class RegGen{
  constructor(){
    regexRes:''
  }
  createRegex(op){
    if(op.toLowerCase() == "email"){
      this.regexRes = /^[a-zA-Z][\w.]+@[a-z]+.[a-z]+.?[a-z]+$/
    }
    else if (op.toLowerCase() == "username"){
      this.regexRes = /^[A-Za-z]\w+$/
    }
    return this.regexRes
  }

  test(text,op){
    return text.match(this.createRegex(op))?true:false
  }

}

var Reg = new RegGen();
var testEmail = ""
var testUser = ""
console.log(Reg.test(testEmail,'EMAIL'))