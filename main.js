// 1. The object should have a property named orders that is an array. You will need to define this.
// 2. Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// 3. Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// 4. Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getAllOrders: function() {
        return this.orders;
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}
const cheeseburgerComboMeal = {
    sandwichType: "cheeseburger",
    fries: true,
    drinkSize: "large"
}
const hamburgerComboMeal = {
    sandwichType: "hamburger",
    fries: false,
    drinkSize: "small"
}
const veggieBurgerComboMeal = {
    sandwichType: "veggie hamburger",
    fries: true,
    drinkSize: "small"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(cheeseburgerComboMeal)
restaurant.placeOrder(hamburgerComboMeal)
restaurant.placeOrder(veggieBurgerComboMeal)

// Invoke the function to return the list of all orders
let allOrders = restaurant.getAllOrders()
// Output all orders to the console using console.table()
console.table(allOrders)