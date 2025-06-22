console.log('Blade Duel loaded.');
window.onload = () => {
  document.getElementById("bg-music").volume = 0.4;
  updateStats();
  updateInventory();
  displayEnemy();
};