// Code your solution in this file!
//Return distance in blocks 
function distanceFromHqInBlocks(distance){
    const hQdist = 42 
    if (distance >=42){        
        return distance - hQdist; 
    } else{
        return hQdist - distance;
    }
}

//Calculates distances from HQ in feet
function distanceFromHqInFeet(totalDist){
    return distanceFromHqInBlocks(totalDist)*264;
    // let distInFt = totalDist*264;
    // return distInFt;
  }

  //Return distances travelled in feet
function distanceTravelledInFeet(startBlock, endBlock){
    if (startBlock <= endBlock){
        return (endBlock - startBlock)*264;
    } else {
        return (startBlock - endBlock)*264;
    }
}

function calculatesFarePrice (startBlock, endBlock){
   const distance = distanceTravelledInFeet (startBlock, endBlock);
    if (distance <=400){
        return 0;
    } else if (distance <=2000 && distance >= 400){
        return 0.02*(distance - 400);
    } else if ( distance >= 2000 && distance <= 2500){
        return 25;
    } else {
        return ("cannot travel that far")
    }
}