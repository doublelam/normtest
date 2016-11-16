(function(){
    var demo = document.getElementById('demo');
    var demo2 = document.getElementById('demo2');
    console.log(demo);
    var startLeft = 10;
    var demo2Start = 10;
    function animate(){
        if(startLeft > 600){
            startLeft = 10;
        }
        startLeft ++;
        demo.style.left = startLeft + 'px';
        for(var i = 0;i < 9999; i++){
            demo.style.transform = 'scale(1.2)';
        }
        window.requestAnimationFrame(animate); 
    }
    animate();

    function interval(){
        if(demo2Start > 600){
            demo2Start = 10;
        }
        demo2Start ++;
        demo2.style.left = demo2Start + 'px'; 
        for(var i = 0;i < 9999; i++){
            demo2.style.transform = 'scale(1.2)';
        }
    }
    var frame = 1000/50;
    setInterval(interval,frame);
})()