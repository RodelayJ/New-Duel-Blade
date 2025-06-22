function attack() {
  const log = document.getElementById("dungeon-log");
  log.innerText = "You strike with your blade!";
  document.getElementById("enemy-img").src = "assets/images/enemy_attack.png";
  playSFX("attack");
}
function useSkill() {
  const log = document.getElementById("dungeon-log");
  log.innerText = "You unleash a mighty skill!";
  playSFX("skill");
}