
// User Model 

const { Model } = require('objection');

class pbill extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'pbill';
  }

 

  static get relationMappings(){
    const order=require("./order")
    
    return {
      pbillDetails:{
        //FktoPK
      relation:Model.BelongsToOneRelation,
      modelClass:order,
      join:{
          from:"pbill.orderid",
          to:"order.orderid"
      }
    }


 

    }
  }

}

module.exports = pbill;