let menu = {

    pepperoni: {
        toppings: ['pepperoni', 'olive', 'mushroom'],
        price: '$15'
    },
    neapolitan: {
        toppings: ['basil', 'mozzerella', 'tomato'],
        price: '$14'
    },
    hawaiian: {
        toppings: ['ham', 'pineapple', 'cheese'],
        price: '$16'
    },
    cheese: {
        toppings: ['mozzerella', 'cheddar', 'parmesan'],
        price: '$11'
    },
    meatLovers: {
        toppings: ['sausage', 'pepperoni', 'ham'],
        price: '$16'
    }

};

console.log(Object.keys(menu));
console.log(menu.hasOwnProperty('banana'));