const products = require('../products.json')

const getProduct = (req,res)=>{

    const {id} = req.params

    const item = products.find(val=> val.id === parseInt(id))
    if(!id){
        return res.status(500).send('It s not here ')
    }

    res.status(200).send(item)
}


module.exports = getProduct