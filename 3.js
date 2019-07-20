var betweenDays = function (startDate, endDate){
    var resultDates =[]
    for(var i=startDate; i<endDate; i+= 86400000){
        var day = new Date(i)
        resultDates.push(day)
    }
    console.log(resultDates)
}

betweenDays('2018-11-01', '2018-11-05')
