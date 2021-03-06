const mongoose = require ('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema ({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    budget: { type: ObjectId, ref: 'Budget' },
    category: { type: ObjectId, ref: 'Groceries'}
})

const expenseModel = mongoose.model('Expense', expenseSchema);

module.exports = expenseModel;