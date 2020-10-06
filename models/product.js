
// User Model 

const { Model } = require('objection');

class Product extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'productDes';
  }

 

 /* static get relationMappings(){
  const order =require("./order")
    
    return {
      productDetails:{
        
      relation:Model.BelongsToOneRelation,
      //FKtoPk
      modelClass:prodectDes,
      join:{
          from:"order.prodName",
          to:"productDes.prodName"
      }
    }


    }
  }*/

}

module.exports = Product;