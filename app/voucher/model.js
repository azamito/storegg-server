const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let voucherSchema = Schema(
	{
		name: {
			type: String,
			require: [true, "Nama game harus diisi"],
		},
		status: {
			type: String,
			enum: ["Y", "N"],
			default: "Y",
		},
		thumbnail: {
			type: String,
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
		},
		nominals: [
			{
				type: Schema.Types.ObjectId,
				ref: "Nominal",
			},
		],
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Voucher", voucherSchema);
