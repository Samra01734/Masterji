/***********lec 5********** */
//comparison oprators
//==,===,!=,!==,>,<,>=,<=

//avoid diif data type comparision like null=0 or undefined=0 etc
//double equalcheck only value;trouple equal check value and type,,,stric check



 //js is not a block scope language it is dynamic language
/****** lec 6***** */

//heep memory (non-premitive values)in js ,stack memory(premitive values) in js
//stack
let myName="Samra"
let myName2=myName
myName2="Ali"
//myName2 is copy of myName
console.log(myName2);//Samra
console.log(myName);//Samra
//heap
let myName3={
    name:"Samra",
    age:23
}
let myName4=myName3
myName4.name="Ali"
myName4.name="Ali"