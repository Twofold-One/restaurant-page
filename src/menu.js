function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.className = 'menu';
    appendAllDiv();

    function createMenuHeading() {
        const menuHeading = document.createElement('div');
        menuHeading.id = 'heading';
        menuHeading.className = 'content-element';

        const menuHeadingH1 = document.createElement('h1');
        menuHeadingH1.textContent = 'Menu';

        menuHeading.appendChild(menuHeadingH1);

        return menuHeading;
    }

    function createMenuFoodAndDrink() {
        const menuFoodAndDrink = document.createElement('div');
        menuFoodAndDrink.id ='food-and-drink';
        menuFoodAndDrink.className = 'food-and-drink';
        appenAllFoodAndDrinkDivs();

        function appenAllFoodAndDrinkDivs() {
            menuFoodAndDrink.appendChild(snacks());
            menuFoodAndDrink.appendChild(beverages());
            menuFoodAndDrink.appendChild(desserts());
            menuFoodAndDrink.appendChild(skittles());
        }

        function snacks() {
            const snacks = document.createElement('div');
            snacks.className = 'f-n-d';

            const snacksH3 = document.createElement('h3');
            snacksH3.textContent = 'Random snacks';
            
            const snacksImg = document.createElement('img');
            snacksImg.src = '/src/snacks.jpg';
            snacksImg.alt = 'snacks image';

            const snacksP = document.createElement('p');
            snacksP.textContent = 'Try your luck making order! You even can be served meat if you\'re vegan!';

            snacks.appendChild(snacksH3);
            snacks.appendChild(snacksImg);
            snacks.appendChild(snacksP);

            return snacks;
        }

        function beverages() {
            const beverages = document.createElement('div');
            beverages.className = 'f-n-d';

            const beveragesH3 = document.createElement('h3');
            beveragesH3.textContent = 'Random beverages';
            
            const beveragesImg = document.createElement('img');
            beveragesImg.src = '/src/drinks.jpg';
            beveragesImg.alt = 'drinks image';

            const beveragesP = document.createElement('p');
            beveragesP.textContent = 'Try your luck making order! You even can be served vodka if you\'re non-alcohol drinker!';

            beverages.appendChild(beveragesH3);
            beverages.appendChild(beveragesImg);
            beverages.appendChild(beveragesP);

            return beverages;
        }

        function desserts() {
            const desserts = document.createElement('div');
            desserts.className = 'f-n-d';

            const dessertsH3 = document.createElement('h3');
            dessertsH3.textContent = 'Random beverages';
            
            const dessertsImg = document.createElement('img');
            dessertsImg.src = '/src/desserts.jpeg';
            dessertsImg.alt = 'desserts image';

            const dessertsP = document.createElement('p');
            dessertsP.textContent = 'Try your luck making order! Wasabi ice cream maybe?';

            desserts.appendChild(dessertsH3);
            desserts.appendChild(dessertsImg);
            desserts.appendChild(dessertsP);

            return desserts;
        }

        function skittles() {
            const skittles = document.createElement('div');
            skittles.className = 'f-n-d';

            const skittlesH3 = document.createElement('h3');
            skittlesH3.textContent = 'And...';
            
            const skittlesImg = document.createElement('img');
            skittlesImg.src = '/src/skittles.jpg';
            skittlesImg.alt = 'skittles image';

            const skittlesP = document.createElement('p');
            skittlesP.textContent = 'Of course random Skittles candy as a compliment!';

            skittles.appendChild(skittlesH3);
            skittles.appendChild(skittlesImg);
            skittles.appendChild(skittlesP);

            return skittles;
        }
        return menuFoodAndDrink;
    }

    function appendAllDiv() {
        menu.appendChild(createMenuHeading());
        menu.appendChild(createMenuFoodAndDrink());
    }

    return menu;
}

export default createMenu;