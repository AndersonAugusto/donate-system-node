'use strict'


const login = async(req , res , next) => {
    try {

        return res.status(200).send({Message:'Its Working'})
        
    } catch(error) {
        return res.status(500).send(error.Message)
    }
}


module.exports = {
    login
}