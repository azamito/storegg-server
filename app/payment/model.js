const mongoose = require("mongoose");
const { Schema, model } = mongoose;

let paymentSchema = Schema(
	{
		type: {
			type: String,
			require: [true, "Tipe pembayaran harus diisi"],
		},
		status: {
			type: String,
			enum: ["Y", "N"],
			default: "Y",
		},
		banks: [
			{
				type: Schema.Types.ObjectId,
				ref: "Bank",
			},
		],
	},
	{ timestamps: true }
);

module.exports = model("Payment", paymentSchema);
