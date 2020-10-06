const Customer = require("../../models/customer");
const Order = require("../../models/order");
const pbill= require("../../models/pbill");
const Product= require("../../models/product");


const AddBill = async (req,res)=>{
    let data  = req.body;
         console.log(data)
        
        let post_added = await pbill.query().skipUndefined().insert(data).returning("*");
       // if(!post_added) return badRequestError(res,"Post not added");
       if(!post_added) return res.send("Post not added");
    
        return res.send("Entry Added");
    },

    //GetOrderDetails
     GetFulllDetail = async (req,res)=>{
    
        let results = await Customer.query().skipUndefined().withGraphFetched(
            "[custOrderDetails(SelectOrderDetails).[productDetails,billDetails(Select)]]"
          
            )
          .modifiers({
            SelectOrderDetails(builder) {
              builder.select('orderid','prodName');
            }
          }).modifiers({
            Select(builder) {
              builder.select('pbill');
            }
               });
        
        //return okResponse(res,posts,"Posts Details");
        return res.send(results);


    },

     Getorderid = async (req,res)=>{
        //let data = req.params.postName;
          //data='nishi';
         // let data = req.body.Name;
          
         //  let data = req.body;
         //console.log(data);
           //if(!data.fullName) return badRequestError(res,"Enter Fullname");
       
           let post = await pbill.query().skipUndefined().withGraphFetched(
            "[pbillDetails]"
          
            )
         /* .modifiers({
            SelectOrderDetails(builder) {
              builder.select('orderid','prodName');
            }
               });*/
        
        return res.send(post)
         
    
    },
    GetBill= async (req,res)=>{
    
      let posts = await Order.query().select().withGraphFetched(
          "[billDetails(Select)]"
         //"studUni"  
         )
        .modifiers({
          Select(builder) {
            builder.select('pbill');
          },
        
        })
        return res.send(posts);

      }
  ,

       
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
        AddBill,
        GetFulllDetail,
        Getorderid,
        GetBill,
        UpdatePost,
        RemovePost
       }
    