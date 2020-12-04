function fullImage(){
    var image = document.getElementById('wall-image')
    image.className = 'full'
}

function halfImage(){
    var image = document.getElementById('wall-image')
    image.className = 'half'
}

function onBulb(){
    var bulb = document.getElementById('bulb')
    bulb.src = "images/onbulb.png"
}

function offBulb(){
    var bulb = document.getElementById('bulb')
    bulb.src = "images/offbulb.png"
}

function addStyle(){
    var para = document.getElementById('para')
    para.className = "par"
}