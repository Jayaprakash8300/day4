var countries = new XMLHttpRequest();
countries.open("GET",'https://restcountries.com/v2/all',true);
countries.send();
countries.onload = function(){
    var data = JSON.parse(countries.response)
    for(var i=0 ; i<data.length ; i++){
        console.log(data[i].name)
        console.log(data[i].flag)
        console.log(data[i].region)
        console.log(data[i].subregion)
        console.log(data[i].population)
    }
}