//feetToMile problem

function feetToMile (feet){
    var positive = feet
        if(positive > 0){
        var inMile = feet / 5280;
        return inMile;
        } 
        else{
           
           var warning = "warning : length can not be negative";
           return warning;
        }
        
    }
    var output = feetToMile(180);
    console.log(output);
    




//woodCalculator problem


function woodCalculator(chair, table, bed){
    if(chair > 0 ){
    var chairCount = chair * 1;
    }
    else{
           
        var warning = "warning : number of chair can not be negative";
        return warning;
     }
     if(table > 0 ){
    var tableCount = table * 3;
     }
     else{
           
        var warning = "warning : number of table can not be negative";
        return warning;
     }
     if(bed > 0 ){
    var bedCount = bed *5;
     }
    else{
           
        var warning = "warning : number of bed can not be negative";
        return warning;
     }

    var totalWoodNumber = chairCount + tableCount + bedCount ;
    return totalWoodNumber;
}


var totalWoodNeeded = woodCalculator( 8, 4, 7);
console.log(totalWoodNeeded);
    
    
    



//brickCalculator problem

    
function brickCalculator(n){
    var floors = n;

        if( floors < 0){
              var warning = "number of floors can not be negative";
             return warning;
         }

        if(floors <= 10){
        var bricks = n * 15000;
        return bricks;
        } 
        if( floors > 10 && floors <= 20 ){
            var bricks = 150000 + ((n-10) * 12000);
            return bricks;
        }
        
        if(floors > 20){
            var bricks = 270000 + ((n-20) * 10000);
            return bricks;

        }
        
        
    }
    var totalBrick = brickCalculator(20);
    console.log(totalBrick);
    




//tinyFriend problem

function tinyFriend (array){
    var smallWord = array[0];

for( var i = 0; i < array.length; i++){
    var tinyName = array[i];
    if(tinyName.length < smallWord.length ){
        smallWord = tinyName;
    }
     
        
        if(smallWord.length == 0){
            var warning = "empty array";
            return warning;
        }
}
    return smallWord   
}
var result = tinyFriend([ "mashrafi", "psy", "tamim" ,"donaldtrump", "saba"]);
console.log(result)