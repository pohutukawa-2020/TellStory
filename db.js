const knex = require('knex')
const config = require("./knexfile").development
const connection = knex(config);


module.exports = {
  addSentence,
  getStartingSentence,
  getUserSentence,
  getStory
}

function addSentence(sentence, db = connection) {
  return db('user-sentences')
    .insert({sentence})
}

function getStartingSentence (db = connection){
return db('starter-sentences')
  .select('starter-sentences.sentence as startingSentence')
  .then((result) => {
  sentence = {startingSentence: result[0].startingSentence}
  return sentence
  })
}

function getUserSentence (db = connection) {
  return db('user-sentences')
    .select('user-sentences.sentence as userSentence')
    .then((result) => {
      sentence = { userSentence: result[result.length-1].userSentence }
      return sentence
    })
}


function getStory (db = connection) {
  return db('user-sentences')
  .select('user-sentences.sentence as userSentence')
}



