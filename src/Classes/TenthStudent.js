class TenthStudent{
static passMarks=35;

static aboutTenth =()=>{
console.log(
"Tenth exams are important because there is no further studies without tenth.");
}

constructor(){
console.log("inside TenthStudent constructor.");

this.telMarks=0;
this.hindiMarks=0;
this.engMarks=0;
this.mathsMarks=0;
this.sciMarks=0;
this.socMarks=0;
}
calculateResult=()=>{
if (this.telMarks >=TenthStudent.passMarks &&
    this.hindiMarks >=TenthStudent.passMarks &&
    this.engMarks >=TenthStudent.passMarks &&
    this.mathsMarks >=TenthStudent.passMarks &&
    this.sciMarks >=TenthStudent.passMarks &&
    this.socMarks >=TenthStudent.passMarks 
){
console.log("student passed in tenth.");
} else {
console.log("student failed in tenth.");
}
}

}

export default TenthStudent