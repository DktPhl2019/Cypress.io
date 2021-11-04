function myDateTime(){
    var currentdate = new Date()
    var abc = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds()
    return abc
}

module.exports= {myDateTime}