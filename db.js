const knex = require('knex')
const config = require("./knexfile").development
const connection = knex(config);


module.exports = {
 addSentence,
 getStartingSentence,
 getUserSentence,
 getStory
}

function addSentence (sentence, db = connection) {
 return db('user-sentences')
 .insert(sentence)
 // .then((result) => {
 //  console.log(result)
 // })
}

function getStartingSentence (db = connection){

}

function getUserSentence(db = conncetion)
{

}

function getStory(db = conncetion)
{

}
