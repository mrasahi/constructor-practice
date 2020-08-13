const inquirer = require('inquirer')

// const character = (name, hp, mp, weapon) => ({name, hp, mp, weapon})
// const wizard = (name, hp, mp, weapon, element, summon) => ({...character(name, hp, mp, weapon), element, summon})
// const soldier = (name, hp, mp, weapon, rank, banner) => ({...character(name, hp, mp, weapon), rank, banner})
// const assassin = (name, hp, mp, weapon, stealth, poison) => ({...character(name, hp, mp, weapon), stealth, poison})

class Chracter {
    constructor(name, hp, mp, weapon) {
        this.name = name
        this.hp = hp
        this.mp = mp
        this.weapon = weapon
    }
}

class Wizard extends Character {
    constructor(name, hp, mp, weapon, element, summon) {
        super(name, hp, mp, weapon)
        this.element = element
        this.summon = summon
    }
}

class Soldier extends Character {
    constructor(name, hp, mp, weapon, rank, banner) {
        super(name, hp, mp, weapon)
        this.rank = rank
        this.banner = banner
    }
}

class Assassin extends Character {
    constructor(name, hp, mp, weapon, stealth, poison) {
        super(name, hp, mp, weapon)
        this.stealth = stealth
        this.poison = poison
    }
}


inquirer
    .prompt(
        [
            {
                type: 'list',
                name: 'class',
                message: 'Choose a class',
                choices: ['Wizard', 'Soldier', 'Assassin']
            }
        ]
    )
    .then(answer => {
        console.log(answer)
        classGeneral(answer.class)
        switch (answer.class) {
            case 'Wizard':
                console.log(answer.class)
                break
            case 'Soldier':
                console.log(answer.class)
                break
            case 'Assassin':
                console.log(answer.class)
                break
        }
    })
    .catch(err => {console.log(err)})

let classGeneralQ = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your character name?'
    },
    {
        type: 'input',
        name: 'hp',
        message: 'Input HP for your character'
    },
    {
        type: 'input',
        name: 'mp',
        message: 'Input MP for your character'
    },
    {
        type: 'input',
        name: 'weapon',
        message: 'Input weapon type for your character'
    },
]

let classWizard = [
    {
        type: 'input',
        name: 'element',
        message: 'Input Element type for your character'
    },
    {
        type: 'input',
        name: 'summon',
        message: 'Input summon name for your character'
    },
]

let classSoldier = [
    {
        type: 'input',
        name: 'rank',
        message: 'Input rank for your character'
    },
    {
        type: 'input',
        name: 'banner',
        message: 'Input banner name for your character'
    },
]

let classAssassin = [
    {
        type: 'input',
        name: 'stealth',
        message: 'Input stealth for your character'
    },
    {
        type: 'input',
        name: 'poison',
        message: 'Input poinson type for your character'
    },
]

function classGeneral() {
    inquirer
        .prompt(
            classGeneralQ
        )
        .then(generalQ => {
            console.log(generalQ)
            return generalQ
        })
        .catch(err => {console.log(err)})
}