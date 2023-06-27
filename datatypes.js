//create a user defined object
var car={
    modal:"BMW X3",
    Color:"white",
    doors:5
}
document.write("<br>"+car.modal+" "+car.color+" "+car.doors);
//array datatype
var car=[" BMW", "Mercedes-benz","volkswagen"];
document.write("<br/>"+car[0]);
document.write("<br/>"+car[1]);
document.write("<br/>"+car[2]);

//function datatype
var demo=function(){
    return "Hello Welcome To Javascript";
}
   
    document.write("<br/>"+typeof(demo));
    document.write("<br/>"+demo());