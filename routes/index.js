const express = require("express");
const router  = express.Router();

// import post controller.
const PostController = require("../controllers/index").PostController;
const UniController = require("../controllers/index").universityController;

router.post("/addbill",PostController.AddBill);

//under the hoode HasManyRelation. BelongstoOne
router.get("/getOrderDetails",PostController.GetFulllDetail);

//Belongs to one
router.get("/getBillDetails",PostController.Getorderid);

//HasOneRelation
router.get("/getorderIdbill",PostController.GetBill);



router.put("/post",PostController.UpdatePost);
router.delete("/postdelete",PostController.RemovePost);

/*router.get("/getposts",PostController.GetPosts);
router.delete("/post/:id",PostController.RemovePost);*/

router.post("/adduni",UniController.AddPost);
router.get("/getuniname",UniController.GetPost);

router.post("/trial",(req,res)=>{
    data= req.body;
    res.send(data);
});

module.exports = router;