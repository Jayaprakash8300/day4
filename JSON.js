var obj1 = [{
    "name" : "JNV",
    "age" : "5",
}]
var obj2 = [{
    "age" : "5",
    "name" : "JNV",
}]
var obj3 = JSON.stringify(obj1.sort())
var obj4 = JSON.stringify(obj2.sort())
for(key in obj3,obj4){
    console.log(obj3[key] == obj4[key])
}