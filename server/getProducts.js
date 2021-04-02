
const products = require ('../products.json')

const getProducts = (req,res)=> {
    const price = parseInt(req.query.price)
    if(price){
        const cheapItems = products.filter( item => item.price >= price )
        return res.status(200).send(cheapItems)
    }


    res.status(200).send(products)
}


module.exports = getProducts

