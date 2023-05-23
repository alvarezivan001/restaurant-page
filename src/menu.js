function LoadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';

    const itemNames = ["Ceviche", "Caesar Salad", 
    "Filet Mignon", "Salmon",
    "Bacon Burger", "Pound Cake"];
    const itemDescriptions = ["TIlapia, tomatoes, onion, tortilla chips",
            "Romaine Lettuce, tomatoes, croutons, caesar dressing",
            "Filet Steak, Mushrooms, fries, demi glaze",
            "Salmon, rice, asparagus, buerr blanc sauce",
            "Patty, lettuce, tomatoes, brioche bun, fries",
            "Pound Cake, Ice cream"]

    for(var i = 1; i <= 6; i++)
    {
        const node = document.createElement('div');
        node.setAttribute("class", "item");
        node.setAttribute("id", i.toString());
        const itemName = document.createElement('div');
        const itemDesc = document.createElement('div');
        itemName.textContent = itemNames[i-1];
        itemDesc.textContent = itemDescriptions[i-1];
        node.appendChild(itemName);
        node.appendChild(itemDesc);
        main.appendChild(node);
    }
};

export default LoadMenu;