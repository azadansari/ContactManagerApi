//@desc Get all contacts
//@route Get /api/contacts
//@access public
const getContacts = async (req, res)=>{
    res.status(200).json({messege: "Get all contacts"});
}

//@desc Create New contacts
//@route POST /api/contacts
//@access public
const createContact = async (req, res)=>{
    console.log("The request body is : ", req.body);
    const{name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    res.status(201).json({messege: "Created a contact Successfully"});
}

//@desc Get a contacts
//@route Get /api/contacts/:id
//@access public
const getContact = async (req, res)=>{
    res.status(200).json({messege: `Get contact for ${req.params.id}`});
}

//@desc Get a contacts
//@route Get /api/contacts/:id
//@access public
const putContact = async (req, res)=>{
    res.status(200).json({messege: `Update contact for ${req.params.id}` });
}

//@desc Delete a contacts
//@route Get /api/contacts/:id
//@access public
const deleteContact = async (req, res)=>{
    res.status(200).json({messege: `Delete contact for ${req.params.id}` });
}


module.exports = {
    getContacts,
    createContact,
    getContact,
    putContact,
    deleteContact
};