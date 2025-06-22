function playSFX(type) {
  const audioMap = {
    attack: "assets/audio/attack.wav",
    potion: "assets/audio/potion.wav",
    skill: "assets/audio/skill.wav"
  };
  const sfx = new Audio(audioMap[type]);
  sfx.volume = 0.6;
  sfx.play();
}