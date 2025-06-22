let inventory = ["Healing Potion", "Mana Elixir"];
function updateInventory() {
  const inv = document.getElementById("inventory-ui");
  inv.innerText = "Inventory: " + (inventory.length ? inventory.join(", ") : "Empty");
}