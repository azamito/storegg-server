const mongoose = require("mongoose");
const { Schema, model } = mongoose;

let userSchema = Schema(
	{
		email: {
			type: String,
			require: [true, "Email harus diisi"],
		},
		name: {
			type: String,
			require: [true, "Nama harus diisi"],
		},
		password: {
			type: String,
			require: [true, "Kata sandi harus diisi"],
		},
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
		status: {
			type: String,
			enum: ["Y", "N"],
			default: "Y",
		},
		phoneNumber: {
			type: String,
			require: [true, "Nomor telepon harus diisi"],
		},
	},
	{ timestamps: true }
);

module.exports = model("User", userSchema);