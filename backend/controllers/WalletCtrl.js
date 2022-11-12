import Wallet from "../models/WalletModel.js";

//create wallet function
const WalletCtrl = {
createWallet :async (req, res) => {
    const check = await Wallet.findOne({ user_id: req.body.user_id });
    if (!check){
    try {
        const {user_id, amount, loan_amount} = req.body;

        const newWallet = new Wallet({
            user_id,
            amount,
            loan_amount
           
        });
        await newWallet.save();
        res.status(200).json(newWallet);
    } catch (error) {
        res.status(500).json(error);
    }
    }
    else{
        res.status(500).json("Wallet already exists");
    }
    
},

//update wallet function
updateWallet: async (req, res) => {
    try {
        const {user_id, amount, loan_amount} = req.body;
       const wallet= await Wallet.findOneAndUpdate({user_id : req.params.user_id}, {
            user_id,
            amount,
            loan_amount    
        });
        res.json(wallet);
    } catch (error) {
        res.status(500).json(error);
    }
},

//view wallet function
viewWallet: async (req, res) => {
    try {
        const wallet = await Wallet.find({user_id: req.params.user_id});
        res.status(200).json(wallet);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }}
   
}
export default WalletCtrl;
