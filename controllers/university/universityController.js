const University = require("../../models/universityModel");
const Knex = require("knex");

const AddPost = async (req,res)=>{
    let data  = req.body;
         console.log("req.body is "+data)
        
        let post_added = await University.query().skipUndefined().insert(data).returning("uniId");
       // if(!post_added) return badRequestError(res,"Post not added");
       if(!post_added) return res.send("Post not added");
    console.log("value of "+post_added);
        return res.send("Entry Added");
    },
     GetPosts = async (req,res)=>{
    
        let posts = await University.query().select().withGraphFetched(
            "[studUni(SelectUserName, onlydes)]"
           //"studUni"  
           )
          .modifiers({
            SelectUserName(builder) {
              builder.select('id','Name');
            },
            
              onlydes(builder) {
                builder.select('Description');
              }
        })
        //.returning('uniId');
        //let posts = await University.query().select('university.*');
       // 'uniId','uniname','studid'
        
        //return okResponse(res,posts,"Posts Details");
        return res.send(posts);


    },

     GetPost = async (req,res)=>{
       // let data = req.params.postName;
          data='null';
         // let data = req.body.Name;
          
         //  let data = req.body;
         console.log(data);
           //if(!data.fullName) return badRequestError(res,"Enter Fullname");
       
          // let post = await University.query().skipUndefined().where("uniname",data).first().returning('uniname');
           
          let post = await knex('university')
            .returning('id')
            .insert({uniname: 'Slaughterhouse'})
          
          if(post === undefined )   return res.send("no post found")
        console.log(post);
  
           //return badRequestError(res,"No post found");
       
        //   return okResponse(res,post,"Post Details")
        return res.send(post)
         
    
    },

       
     UpdatePost = async(req,res)=>{
    let data = req.body;  
console.log(data);
    let updated_post = await Post.query().skipUndefined().update(data).where("id",data.id);

    if(!updated_post) 
    return res.send("post not updated")
       
    //return badRequestError(res,"Post not updated");
    else{
    return res.send(" post Updated")
}

    //return okResponse(res,"Post Updated");
},
 RemovePost = async(req,res)=>{
    let data = req.body;

    let removed_post = await Post.query().skipUndefined().deleteById(data.id);

    if(!removed_post) return res.send(" post not deleted")

    //return badRequestError("Post not removed");

    return res.send(" post deleted")

    //return okResponse(res,"Post Removed");
}

    
    module.exports = {
        AddPost,
        GetPosts,
        GetPost,
        UpdatePost,
        RemovePost
       }
    