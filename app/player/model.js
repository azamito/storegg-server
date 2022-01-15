const mongoose = require("mongoose");
const {Schema, model} = mongoose;
const bcrypt = require('bcryptjs');
const HASH_ROUND = 10;

let playerSchema = Schema(
	{
		email: {
			type: String,
			require: [true, "Email harus diisi"],
		},
		name: {
			type: String,
			require: [true, "Nama harus diisi"],
			maxLength: [255, "Panjang maximal nama adalah 255 karakter"],
			minLength: [3, "Panjang minimal nama adalah 3 karakter"],
		},
		username: {
			type: String,
			require: [true, "Nama harus diisi"],
			maxLength: [255, "Panjang maximal nama adalah 255 karakter"],
			minLength: [3, "Panjang minimal nama adalah 3 karakter"],
		},
		password: {
			type: String,
			require: [true, "Kata sandi harus diisi"],
			maxLength: [255, "Panjang maximal nama adalah 255 karakter"],
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
		avatar: {
			type: String,
		},
		fileName: {
			type: String,
		},
		phoneNumber: {
			type: String,
			require: [true, "Nomor telepon harus diisi"],
			maxLength: [13, "Panjang maximal nama adalah 13 karakter"],
			minLength: [9, "Panjang minimal nama adalah 9 karakter"],
		},
		favorite: {
			type: Schema.Types.ObjectId,
			ref: "Category",
		},
	},
	{timestamps: true}
);

playerSchema.path('email').validate(async function (value) {
	try {
		const count = await this.model('Player').countDocuments({email: value});

		return !count;
	} catch (err) {
		throw err;
	}
}, attr => `${attr.value} sudah terdaftar`);

playerSchema.pre('save', function (next) {
	this.password = bcrypt.hashSync(this.password, HASH_ROUND);
	next();
});

module.exports = model("Player", playerSchema);
