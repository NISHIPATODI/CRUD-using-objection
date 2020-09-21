const Post = require("../../models/studentModel");

const AddPost = async (req,res)=>{
    let data  = req.body;
         console.log(data)
        
        let post_added = await Post.query().skipUndefined().insert(data).returning("*");
       // if(!post_added) return badRequestError(res,"Post not added");
       if(!post_added) return res.send("Post not added");
    
        return res.send("Post Added");
    },
     GetPosts = async (req,res)=>{
    
        let posts = await Post.query().skipUndefined();
        
        //return okResponse(res,posts,"Posts Details");
        return res.send(posts);


    },

     GetPost = async (req,res)=>{
        let data = req.params.postName;
          //data='nishi';
         // let data = req.body.Name;
          
         //  let data = req.body;
         console.log(data);
           //if(!data.fullName) return badRequestError(res,"Enter Fullname");
       
           let post = await Post.query().skipUndefined().where("Name",data).first();
           if(post === undefined )   return res.send("no post found")
           //console.log(post);
  
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
    