
// User Model 

const { Model } = require('objection');

class University extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'university';
  }

 /* static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        fullName : { type : "string" },
        dob : { type : "date"}
      }
    };
  }*/


  static get relationMappings(){
  const Post =require("./studentModel")
    
    return {
      studUni:{
        
      relation:Model.BelongsToOneRelation,
      modelClass:Post,
      join:{
          from:"university.studid",
          to:"student.id"
      }
    }


    }
  }

}

module.exports = University;