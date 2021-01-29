const mongoose = require('mongoose')

const ResponseInfo = mongoose.model('ResponseInfo',{
    mode:String,
    key:Number,
    status:String,
    amount:Number,
    productinfo: {
        paymentParts: [{
            name:String,
            merchantId:String,
            value:String,
            commission:String,
            description:String
        }]
      },
    firstname:Number,
    email:Number,
    phone:Number,
    hash:Number,
    PG_TYPE:Number,
    bank_ref_num:Number,
    payuMoneyId: {
        paymentId: {
          type: Number
        },
        splitIdMap: [{
            amount: Number,
            splitPaymentId: Number,
            merchantId: Number,
            splitId: String
        }]
      }

    
})

module.exports = ResponseInfo