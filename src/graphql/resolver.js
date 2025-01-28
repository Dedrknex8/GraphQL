// methods like routes

const products = require('../data/production');

const resolvers  = {
    Query : {
        products:()=> products,
    },
}

module.exports = resolvers;