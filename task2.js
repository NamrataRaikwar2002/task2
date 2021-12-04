const chalk=require('chalk');

function quiz(que,opt){
    var j=0
    var ans=0
    for (var i=0;i<ques.length;i++) {
        for (var op=j ;op<=j;op++){
            console.log(chalk.magenta((ques[i])))
            for (var k=0;k<option[op].length;k++){
                console.log(chalk.blue(String(k+1))+".",(chalk.yellow(option[op][k])))
    
            }
        }j++
        var sol=require("readline-sync")
        var solution=sol.question(chalk.magenta("your answer: "))
        if (solution==right_answer[ans]){
            console.log(chalk.bgBlackBright("right answer!!"))
        
        }else{
            console.log(chalk.bgBlackBright("Wrong answer!!"))
        }ans++
        console.log(chalk.yellowBright("----------------------"))
    }
}
console.log(chalk.bgRed("!!select option number !!\n"))

var ques=["Which is the smallest perfect number?","How many factors do a prime number have?",
        "How many centimetres make a decameter?"," How many surfaces are there in a cube?",
        "An acute angle is …"]
var option=[["4","6","3","11"],["1","0","2","4"],
        ["100","10","500","1000"],["3","5","8","6"],["90 degree","less than 90 degree",
        "more than 90 degree","None of these"]]
right_answer=["2","3","4","4","2"]

quiz(ques,option)

