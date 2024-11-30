window.onload = apear();

var start;
var clicked;
function run(){
    document.getElementById('hello').style.display='none';
    clicked = Date.now()
    var reaction = (clicked - start)/1000;
    alert(reaction);
    var random = ((Math.random()*3))*1000;
    setTimeout(apear, random);

}
 
function apear(){
    var random = Math.random()*400;
    var randomb = Math.random()*300;
    var randomh = Math.random()*200+10;
    var randomw = Math.random()*100;
    var curve = Math.random();
    var randomcolour = "#"+((1<<24)*Math.random()|0).toString(16);
    if(curve < 0.5){
        document.getElementById('hello').style.borderRadius=30+'px';

    } else{
        document.getElementById('hello').style.borderRadius=0+'px';

    }
    
    document.getElementById('hello').style.top= random+'px';
    document.getElementById('hello').style.height= randomb+'px';
    document.getElementById('hello').style.width = randomh+'px';
    document.getElementById('hello').style.bottom= randomw+'px';

    document.getElementById('hello').style.display='block';
    document.getElementById('hello').style.backgroundColor=randomcolour;

    start = Date.now();
}

$('#hello').on('click',function(){$('hii'.css('baground-colour','green'))})