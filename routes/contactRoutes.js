const express = require("express");
const router = express.Router();
const {
    getContacts, 
    createContact, 
    getContact, 
    putContact, 
    deleteContact} = require("../controllers/contactController");


router.route("/").get(getContacts).post(createContact);
// router.route("/").post(createContact);

router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

// router.route("/:id").put(putContact);
// router.route("/:id").delete(deleteContact);


module.exports = router;