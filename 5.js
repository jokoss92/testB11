function drawLine(num){ 
    for(var i=num; i>=1; i--){
        var space = ''
        for(var j=i; j<=num; j++){
            if(j===num){
                space += "*"
            }
            else {
                space += " "
            }
        }
        console.log(space)
    }
    
}

drawLine(8)