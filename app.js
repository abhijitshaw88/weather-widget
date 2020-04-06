// http://api.openweathermap.org/data/2.5/find?q=London&APPID=7cab49ec801a8dea8afbb713dc26496d

//document.getElementById("button").addEventListener('click',loadText);

document.getElementById("mycity").addEventListener('search',loadText);
function loadText(){
    GETDATA();
}

// var api_d= 'http://api.openweathermap.org/data/2.5/find?q=LONDON&APPID=7cab49ec801a8dea8afbb713dc26496d&units=metric';
// var str=document.getElementById("mycity").value;
// var api_d1 = api_d.replace(/LONDON/, document.getElementById("mycity").value);

async  function GETDATA()
{

    var api_d='http://api.openweathermap.org/data/2.5/find?q=LONDON&APPID=7cab49ec801a8dea8afbb713dc26496d&units=metric';
     str=document.getElementById("mycity").value;
    const api_d1 = api_d.replace(/LONDON/,str);
    // console.log(str);

    /*    ==================== CALLING THE API =================  */

    const response= await fetch(api_d1);
    const data= await response.json();
    //document.getElementById("tem1").value='he';
    document.getElementById("cityname").innerHTML = str ;
    document.getElementById("tem1").innerHTML = data.list[0].main.temp.toFixed(0);
    document.getElementById("tem2").innerHTML = data.list[1].main.temp.toFixed(0);
    document.getElementById("tem3").innerHTML = data.list[2].main.temp.toFixed(0);
    document.getElementById("tem4").innerHTML = data.list[3].main.temp.toFixed(0);
    document.getElementById("tem5").innerHTML = data.list[4].main.temp.toFixed(0);
    //console.log(data.list[1].main.temp.toFixed(0));
}
