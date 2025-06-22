function displayEnemy() {
  const enemy = document.getElementById("enemy-display");
  enemy.innerHTML = '<img src="assets/images/enemy_chibi.png" id="enemy-img">';
}
function updateStats() {
  const stats = document.getElementById("player-stats");
  stats.innerText = "HP: 100 | MP: 50 | XP: 0";
}