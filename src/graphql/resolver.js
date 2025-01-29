// methods like routes

const product = require('../data/production');
const products = require('../data/production');

const resolvers  = {
    Query : {
        products:()=> products,
        product: (_, { id }) => products.find((item) => item.id === id),
    },
    Mutation : {
        createProduct : (_, { title,category,price,instock }) => {
            const newlyCreatedProduct = {
                id : String(products.length +1),
                title,
                category,
                price,
                instock
            } 
            products.push(newlyCreatedProduct);
            return newlyCreatedProduct;
        },

        deleteProduct : (_,{id}) =>{
            const idx = products.findIndex(item =>item.id === id);
            if(idx === -1){
                return false;
            }

            products.splice(idx,1);

            return true;
        },
        updateProduct : (_,{ id, ...updates}) =>{
            const Idx = products.findIndex(items => items.id === id);

            if(Idx === -1){
                return null
            };

            const updateProduct  ={

                ...products[Idx], ...updates
            }

            product[Idx] = updateProduct;

            return updateProduct




        }
    }
}

module.exports = resolvers;