import {City, Color, Deck, Game, Mission, Player, Route, Type, User} from './app/modules/index.js'

async function test() {
    try{
        const city = await City.findOrCreate({
        where:{
            name:"San Fransisco"
        },
        defaults:{
            name:"San Fransisco"
        },
    })
}catch(e){
    console.log("erreur détéctée : ",e)
}}

test()