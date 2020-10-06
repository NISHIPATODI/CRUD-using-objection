
// User Model 

const { Model } = require('objection');

class Customer extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'customer';
  }

 

  static get relationMappings(){
    const Order=require("./order")
    
    return {
      custOrderDetails:{
        //PKtoFk
      relation:Model.HasManyRelation,
      modelClass:Order,
      join:{
          from:"customer.cid",
          to:"order.cid"
      }
    }


 

    }
  }

}

module.exports = Customer;