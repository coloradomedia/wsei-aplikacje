let kickSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;

appStart();
function appStart(): void{
  document.addEventListener('keypress', onKeyPress);
  getAudioTags();
}
function getAudioTags(): void{
  kickSound = document.querySelector('[data-sound="kick"]');
  snareSound = document.querySelector('[data-sound="snare"]');
}

function onKeyPress(e: KeyboardEvent): void{
  const key = e.key;
  const time = e.timeStamp;

  playSound(key);
  
  console.log(e);
  
}

function playSound(key: string): void{
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