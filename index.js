function myTime(){
    var myDate=new Date();
    // for 

    var min=(myDate.getMinutes()<10)?"0"+myDate.getMinutes():myDate.getMinutes();
    var sec=(myDate.getSeconds()<10)?"0"+myDate.getSeconds():myDate.getSeconds();

    var amPm=(myDate.getHours()<12) ? "AM":"PM";


    if (myDate.getHours()==0){
        hour=12;
    }else if(myDate.getHours()>12){
        hour=myDate.getHours()-12;
    }else{
        hour=myDate.getHours()
    }

    var currentTime=hour+":"+min+":"+sec;

    document.getElementsByClassName("time")[0].innerHTML=currentTime;

    document.getElementsByClassName("amPm")[0].innerHTML=amPm;

    var myDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var myMonth=["January","February","March","April","May","June","July","August","September","Octobor","November","December"];
    var date=myDate.getDate();
    var year=myDate.getFullYear();

    var currentDay=myDay[myDate.getDay()] + "," ;
    var currentDate=+ date + "-" + myMonth[myDate.getMonth()] + "-" + year;

    document.getElementsByClassName("date")[0].innerHTML=currentDate;
    document.getElementsByClassName("currentday")[0].innerHTML=currentDay;



}
myTime();
setInterval(function(){
    myTime();
},1000)