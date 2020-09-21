const express = require("express");
const router  = express.Router();

// import post controller.
const PostController = require("../controllers/index").PostController;

router.post("/addpost",PostController.AddPost);
router.get("/getposts",PostController.GetPosts);

router.get("/getpost/:postName",PostController.GetPost);
router.put("/post",PostController.UpdatePost);
router.delete("/postdelete",PostController.RemovePost);

/*router.get("/getposts",PostController.GetPosts);
router.delete("/post/:id",PostController.RemovePost);*/


router.post("/trial",(req,res)=>{
    data= req.body;
    res.send(data);
});

module.exports = router;