// http://api.openweathermap.org/data/2.5/find?q=London&APPID=7cab49ec801a8dea8afbb713dc26496d

var rqst=new XMLHttpRequest();
rqst.open('GET','http://api.openweathermap.org/data/2.5/find?q=London&APPID=7cab49ec801a8dea8afbb713dc26496d');
console.log(rqst.status);
console.log(rqst.readyState);
rqst.onload=function(){
    console.log(rqst.readyState);
    var mydata=JSON.parse(rqst.responseText);
   rqst.send();
};
console.log(rqst.readyState);
console.log("hello");