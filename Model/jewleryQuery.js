const knex = require("./connection")


let keyword = () => {
    return knex('keyword').select('keyword.keyword', 'keyword.metrics', 'keyword.category', 'keyword.keywords')
}
let keywords = () => {
    return knex('keywords').select("*")
}
let category = () => {
    return knex('category').select('*')
}
let matrics = () => {
    return knex('metrics').select('*')
}

module.exports = {
    keyword,
    category,
    keywords,
    matrics
}