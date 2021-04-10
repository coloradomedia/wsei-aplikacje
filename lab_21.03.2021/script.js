var kickSound;
var snareSound;
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyPress);
    getAudioTags();
}
function getAudioTags() {
    kickSound = document.querySelector('[data-sound="kick"]');
    snareSound = document.querySelector('[data-sound="snare"]');
}
function onKeyPress(e) {
    var key = e.key;
    var time = e.timeStamp;
    playSound(key);
    console.log(e);
}
function playSound(key) {
    switch (key) {
        case 'z':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'x':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
    }
}
