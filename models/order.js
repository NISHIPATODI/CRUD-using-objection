
// User Model 

const { Model } = require('objection');

class Order extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'order';
  }

 

  static get relationMappings(){
  const prodectDes =require("./product")
  const pbill =require("./pbill")
    
    return {
      productDetails:{
        
      relation:Model.BelongsToOneRelation,
      //FKtoPk
      modelClass:prodectDes,
      join:{
          from:"order.prodName",
          to:"productDes.prodName"
      }
    },
    billDetails:{
        
      relation:Model.HasOneRelation,
      //PktoFK
      modelClass:pbill,
      join:{
          from:"order.orderid",
          to:"pbill.orderid"
      }
    }


    }
  }

}

module.exports = Order;