// for loop 
for(var a=0 ; a<10 ; a++) {
    console.log(a);
}

// while loop faster than for loop
var b = 0 ;
while(b<10){
    console.log(b);
    b++;
}

//dowhile loop : work done first then condition check
var c = 0;
do{
    console.log(c);
    c++
}
while(c<10);

//nested for loop
document.write('<h2>TASK 1</h2> <br>')
for (var a = 1 ; a<=3; a++){
    document.write("the table of " + a + '<br>')
    for(var b = 1 ; b <=10; b++){
        
        var c = a*b
       document.write(a + ' x ' + b +' = ' +c +'<br>')

    }
    document.write('<br>')
}

//head and tail winner

document.write("<h2>TASK 2</h2><br>")

var headuser = 'aqsa';
var tailuser = 'a.hai';

var toss = Math.random() * 2

var floorval = Math.floor(toss)

if(floorval === '0'){
    document.write(headuser + ' head win the toss')
}else{ 
    document.write(tailuser + ' tail win the toss')
}