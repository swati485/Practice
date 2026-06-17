var btn= document.querySelector('button');
var main=document.querySelector('main');

btn.addEventListener('click',function(){
    var div=document.createElement('div');
    div.style.width='50px';
    div.style.height='50px';

    main.appendChild(div);

    var x=Math.random()*100;
    var y=Math.random()*100;
    var z=Math.random()*100;
    div.style.position='absolute';
    div.style.left=x+'%';
    div.style.top=y+'%';
    div.style.transform=`rotate(${z}deg)`;


    var c1= Math.floor(Math.random()*256);
    var c2= Math.floor(Math.random()*256);
    var c3= Math.floor(Math.random()*256);
    var color=`rgb(${c1},${c2},${c3})`;
    div.style.backgroundColor=color;
})

