exports.prime = function(p){
    if(p == 1){
        return "No";
    }   
    else if(p == 2){
        return "Yes";
    }else{
        for(let i=2; i<p; i++){
            if(p%i == 0)
                return "No";
        }
        return "Yes";
    }
}