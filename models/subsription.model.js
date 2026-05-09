import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [true, 'subscription name is required'],
    trim : true,
    minLength : 2,
    maxLength : 100,
  },
  price : {
    type : Number,
    required : [true, 'subscription price is required'],
    min : [0, 'must be greater than 0'],
    max : [1000, 'price must be less than 1000']
  },
  currency : {
    type : String,
    enum : ['USD', 'EGP', 'EUR'],
    default : 'EGP'
  },
  frequency : {
    type : String,
    enum : ['Yearly', 'Monthly', 'Weekly', 'Daily'],
    required : [true, 'subscription frequency is required']
  },
  category : {
    type : String,
    enum : ['Entertainment', 'Education', 'Productivity', 'Health', 'Other'],
    required : [true, 'subscription category is required']
  },
  paymentMethod : {
    type : String,
    enum : ['Credit Card', 'PayPal', 'Bank Transfer', 'Other'],
    required : [true, 'payment method is required'],
    trim : true,
  },
  status : {
    type : String,
    enum : ['Active', 'Paused', 'Cancelled'],
    default : 'Active'
  },
  startDate : {
    type : Date,
    required : [true, 'subscription start date is required'],
    validate : {
      validator : (value) => value <= new Date(),
      message : 'start date must be in the past'
    }
  },
  renewalDate : {
    type : Date,
    required : [true, 'subscription renewal date is required'],
    validate : {
      validator : function(value) {
        return value > this.startDate;
      },
      message : 'renewal date must be in the future'
    }
  },
  User : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : [true, 'subscription must be associated with a user'],
    index : true,
  }
}, {timestamps : true});


subscriptionSchema.pre('save', function(next) {
  if(!this.renewalDate){
    const renewalPeriods = {
      'Daily' : 1,
      'Weekly' : 7,
      'Monthly' : 30,
      'Yearly' : 365
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
  }

  if(this.renewalDate < new Date()){
    this.status = 'Cancelled';
  }
  next();
});




const Subscription = mongoose.model('Subscription', subscriptionSchema);


export default Subscription;
