const express = require("express");
const router = express.Router();

router.route("/").get((req, res)=>{
    res.status(200).json({messege: "Get all contacts"});
});

router.route("/").post((req, res)=>{
    res.status(200).json({messege: "Create a contacts"});
});
router.route("/:id").get((req, res)=>{
    res.status(200).json({messege: `Get contact for ${req.params.id}`});
});

router.route("/:id").put((req, res)=>{
    res.status(200).json({messege: `Update contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res)=>{
    res.status(200).json({messege: `Delete contact for ${req.params.id}` });
});


module.exports = router;