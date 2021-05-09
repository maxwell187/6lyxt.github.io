var playing = false;
function playMusic() {
    var audio = new Audio('media/music.mp3');
    var video = document.getElementById('video');
    if (playing == false) {
        document.getElementsByClassName('muted')[0].innerText = '';
        video.play();
        audio.play();
        audio.volume = 0.05;
        playing = true;
        video.style = "filter: brightness(100%) blur(0px)";
    } else {
        video.pause();
        audio.pause();
    }
    video.addEventListener("ended", function() {
        video.currentTime = 0;
        video.play();
    })

    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        audio.play();
   });
}

var intervalID = window.setInterval(randomText, 10000);

function randomText(){
    var strs = ['whats up?', 'darlin!' , 'weaklings die, big deal.' , 'tilidin in meinem blut', 'eyes red', 'switche auf die fast lane', 'fuck sleep !', 'cold dreams & dirty sprite', 'hab all meine sorgen in all den drogen vergraben', 'fuckthepopulation', 'fuck love', 'lost and tired'];
    var randomStr = strs[Math.floor(Math.random() * strs.length)];
    document.getElementById('rawry').innerText = randomStr;
}