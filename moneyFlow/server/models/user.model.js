const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accounts: [
    {
      name: {
        type: String,
        required: true,
      },
      balance: {
        type: Number,
        required: true,
      },
    },
  ],
  transactions: [
    {
      type: {
        type: String,
        required: true,
        enum: ["income", "expense", "transfer"],
      },
      from: {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
      to: {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
      amount: {
        type: Number,
        default: 10,
      },
      note: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
