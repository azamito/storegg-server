const mongoose = require("mongoose");
const { Schema, model } = mongoose;

let transactionSchema = Schema(
	{
		historyVoucherTopup: {
			gameName: { type: String, require: [true, "Nama game harus diisi"] },
			category: { type: String, require: [true, "kategori harus diisi"] },
			thumbnail: { type: String },
			coinName: { type: String, require: [true, "Nama koin harus diisi"] },
			coinQuantity: { type: String, require: [true, "Jumlah koin harus diisi"] },
			price: { type: Number },
		},

		historyPayment: {
			name: { type: String, require: [true, "Nama harus diisi"] },
			type: { type: String, require: [true, "Tipe pembayaran harus diisi"] },
			bankName: { type: String, require: [true, "Nama bank harus diisi"] },
			noRekening: { type: String, require: [true, "Nomor rekening harus diisi"] },
		},

		name: {
			type: String,
			require: [true, "Nama harus diisi"],
			maxLength: [255, "Panjang maximal nama adalah 255 karakter"],
			minLength: [3, "Panjang minimal nama adalah 3 karakter"],
		},

		accountUser: {
			type: String,
			require: [true, "Nama akun diisi"],
			maxLength: [255, "Panjang maximal nama adalah 255 karakter"],
			minLength: [3, "Panjang minimal nama adalah 3 karakter"],
		},

		tax: {
			type: Number,
			default: 0,
		},

		value: {
			type: Number,
			default: 0,
		},

		status: {
			type: String,
			enum: ["pending", "success", "failed"],
			default: "pending",
		},

		player: {
			type: Schema.Types.ObjectId,
			ref: "Player",
		},

		historyUser: {
			name: { type: String, require: [true, "Nama harus diisi"] },
			phoneNumber: {
				type: String,
				require: [true, "Nomor telepon akun diisi"],
				maxLength: [13, "Panjang maximal nomor telepon adalah 13 karakter"],
				minLength: [10, "Panjang minimal nomor telepon adalah 10 karakter"],
			},
		},

		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
		},

		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

module.exports = model("Transaction", transactionSchema);
