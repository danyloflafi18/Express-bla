import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true }
	},
	{
		versionKey: false,
	}
)

export default mongoose.model('Patient', PatientSchema)