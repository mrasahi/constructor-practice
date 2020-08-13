// Standard constructor
// -----------------------------------------


// function Item (name, price, id, quantity) {
//     this.name = name
//     this.price = price
//     this.id = id
//     this.quantity = quantity || 'out of stock'
// }

// function Grocery (name, price, id, quantity, type, lifetime) {
//     Item.call(this, name, price, id, quantity)
//     this.type = type
//     this.lifetime = lifetime
// }

// function Food (name, price, id, quantity, tasty, death) {
//     Item.call(this, name, price, id, quantity)
//     this.tasty = tasty
//     this.death = death
// }

// function Tools (name, price, id, quantity, electric, warranty) {
//     Item.call(this, name, price, id, quantity)
//     this.electric = electric
//     this.warranty = warranty
// }

// let tomato = new Tools('tomato', 3.00, '11111', null, true, 2)

// console.log(tomato)

// let salmon = new Food('salmon', 20.00, '12345', 6, true, false)

// console.log(salmon)

// let macncheese = new Grocery('man in cheese', 5.00, '55555', 20, 'cheese', '1.5')

// console.log(macncheese)



// Factory functions
// -----------------------------------------


const item = (name, price, id, quantity) => ({ name, price, id, quantity})

const grocery = (name, price, id, quantity, type, lifetime) => ({...item(name, price, id, quantity), type, lifetime})

const food = (name, price, id, quantity, tasty, death) => ({...item(name, price, id, quantity), tasty, death})

const tools = (name, price, id, quantity, electric, warranty) => ({...item(name, price, id, quantity), electric, warranty})

// let potato = grocery('potato', 1.50, '55541', 20, 'yam', '30days')

// console.log(potato)

// let yams = food('yams', 3.00, '94642', 8, true, true)

// console.log(yams)

// let hammer = tools('hammer', 12.50, '12201', 6, false, '20y')

// console.log(hammer)


const frozen = (name, price, id, quantity, icecream, peas) => ({...item(name, price, id, quantity), icecream, peas})

let peas = frozen('peas', 2.50, '55541', null, false, true)

console.log(peas)
