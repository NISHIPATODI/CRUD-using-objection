
// User Model 

const { Model } = require('objection');

class Post extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'student';
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
    const University =require("./universityModel")
    
    return {
      pktofk:{
        
      relation:Model.HasOneRelation,
      modelClass:University,
      join:{
          from:"student.id",
          to:"university.studid"
      }
    }


 

    }
  }

}

module.exports = Post;