// Grading System
function grade(score) {
    if (score >= 80){
        console.log("You had A.")
    }else if (score >= 70 ){
        console.log("You had B.")
    }else if (score >= 60 ){
        console.log("You had C.")
    }else if (score >= 50 ){
        console.log("You had D.")
    }else if (score >= 40 ){
        console.log("You had E.")
    }else{
        console.log("You had F.")
    }
    
}
console.log(grade(30))