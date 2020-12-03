

var a = new Date()
document.write(a +'<br>')
document.write(a.getDate())
document.write(a.getDay())

//getting age
var dob = new Date("April 4 , 1998");
var dobs = dob.toString();
var dobw= dobs.slice(4,15)
var dobmili = dob.getTime();

var a = new Date();
var amili = a.getTime();

var diff = amili - dobmili;

var diffyear = diff/(1000*60*60*24*30*12);
var acc = Math.floor(diffyear);
document.write('Your date of birth is ' + dobw + '<br>')
document.write("your age is " + acc);


//function 

function sum(a,b,c){
    var d = a+b+c
    document.write(d)
}

var c = sum(10,6,8);
document.write(c)


// Switch

var name = 'aqsa'

switch(name){
    case 'dua':
        document.write('hi')
        break;
    case 'aqsa':
        document.write('hiiiii')
        break;
    case 'mahroo':
        document.write('hiiiiiiiiiiiii')
        break;
    default :
    document.write('bye')
}


// Events

function getName(){
    var name  = document.getElementById("name");
    document.write(name.value)

    name.value = ''
}

function setName(){
    var name = document.getElementById('name');

    name.value = 'aqsa';

    var para = document.getElementById('para');

    para.innerHTML = "hiii world"
}

setName()

