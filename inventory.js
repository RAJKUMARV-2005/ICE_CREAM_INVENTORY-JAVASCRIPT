function IceCream(flavour_name, price, quantity) {
    this.flavour_name = flavour_name;
    this.price = parseFloat(price);  
    this.quantity = parseInt(quantity);  
}

let inventory = []; 
function addIceCream() {
    let flavour_name = prompt("Enter the Ice Cream Flavour Name");
    let price = prompt("Enter the Price");
    let quantity = prompt("Enter the Quantity");
    
    let curr_ice_cream = new IceCream(flavour_name, price, quantity);
    inventory.push(curr_ice_cream);
    alert("Ice Cream added Successfully");
}
function updateFlavour() {
    let flavour_name = prompt("Enter the flavour name you want to update");
    let found = false;
    
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].flavour_name === flavour_name) {
            let new_flavour_name = prompt("Enter the new flavour name");
            let new_price = prompt("Enter the new price");
            let new_quantity = prompt("Enter the new quantity");
            
            inventory[i].flavour_name = new_flavour_name;
            inventory[i].price = parseFloat(new_price);
            inventory[i].quantity = parseInt(new_quantity);
            
            alert("Flavour updated successfully");
            found = true;
            break;
        }
    }
    
    if (!found) {
        alert("Flavour not found in inventory");
    }
}
function calculateTotalValue() {
    let totalValue = 0;
    
    for (let i = 0; i < inventory.length; i++) {
        totalValue += inventory[i].price * inventory[i].quantity;
    }
    
    alert("Total value of ice creams: $" + totalValue.toFixed(2));
}

console.log(inventory);
