function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence===false){
        return("You cannot drive");
    }
    else if(isTired===true){
        return("You shouldn't drive");
    }
    else if(isSober===false){
        return ("You shouldn't drive");
    }
    else if(isTired===false && isSober===true){
        return("You can drive");
    }
}

module.exports = CanDrive;
