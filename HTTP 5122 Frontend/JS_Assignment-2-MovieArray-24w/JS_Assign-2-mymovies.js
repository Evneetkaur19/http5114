//Assignment 2 for Lucky 7 Movies.

// ---- Variables ----
 //Intializing 7 movie names
 var movie1 = "Yeh Jawani hai Deewani";
 var movie2 = "Dunki";
 var movie3 = "Bhool Bhulaiya";
 var movie4 = "Revenge";
 var movie5 = "3 Idiots";
 var movie6 = "Om Shanti Om";
 var movie7 = "The Accountant";

 
 var userInput = 0;

 
 var movieArray = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

 while(true){
    
    userInput = prompt("Which top 7 movie would you like", "Pick a number :1-7");
 
    if(userInput != null && userInput<=7 && userInput>=1){
        
        alert("Number"+ userInput + "on the list is" + movieArray[userInput]);
        
        for (i=0; i<movieArray,length; i++){
            console.log("Movie" +movieNumb +";" +movieArray[i]);
        }
        break;
    }
    else{
        
        alert("Please enter a number between 1 and 7!");
        
    }
 }