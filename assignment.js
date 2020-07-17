feetToMile 
function feetToMile (feet){

    // general exception 
    if (typeof(feet) != "number"){
        return "please enter a number"  //arg should be a number
    }
    var mile  = feet/5280;
    return feet + " is equals to " + mile + "miles."
}
console.log(feetToMile(10))
console.log(feetToMile('a'))


// ================================brickCalculator==============================
function brickCalculator (Floor){
    var totalbrick = 0;
    for (var i=1 ; i<=Floor ; i++ ){
        if (i<=10){
            totalbrick = totalbrick+ (15*1000)
        }
        else if (i>10 && i<=20){
            totalbrick = totalbrick+ (12*1000)
        }
        else{
            totalbrick = totalbrick+ (10*1000);
        }
    }
    console.log(totalbrick);

// general exception
    if (Floor < 0){
        return "Floor can not be an negative number. " ;
    }
     else if (typeof(Floor)!=Number ){
         return "plase Enter a number. "
     }  
}
console.log(brickCalculator("a"));
console.log(brickCalculator(-5));
brickCalculator(50)


// =====================================woodCalculator ===========================

function woodCalculator(chair = 0, table = 0 ,bed = 0){
  // for unexpected error 
    if (chair <0 || table < 0 || bed<0){
        return "Number Negative";
    }
    else if ( typeof(chair) != Number || typeof(table) != Number || typeof(bed) != Number ){
        return "arguments mustbe a number ";
    }   
    var total = (chair*1)+(table*3)+(bed*5);
    return ("Total wood needed : " +total+ "Quebic feet"); 
} 
console.log(woodCalculator("a" ,5,3));


// ===========================tinyFriend==================================

function tinyFriend(namelist){
    var slength = namelist[0].length; //Default short length assign fisrt array item
    var Shortest;
    for(var i=0; i < namelist.length; i++){
        if(namelist[i].length < slength){
            var slength = namelist[i].length;
            Shortest = namelist[i];
        }      
    } 
    console.log(Shortest); //Shortest name will print here
}

var namelist = ['Hasan', 'Robi', 'Nayeemur', 'Muttakir-ur-rahman', 'J'];
tinyFriend(namelist);