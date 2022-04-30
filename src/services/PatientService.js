import PatientSchema from '../models/PatientSchema.js'

class PatientService {
	async create(patient) {
		const createdPatient = await PatientSchema.create(patient)
		return createdPatient
	}

	async getOne(id) {
		const patient = await PatientSchema.findOne({ id: id })
		return patient
	}

	async getAll(query) {
		const { page = 1, size = 5, title } = query

		const limit = size
		const skip = (page - 1) * size

		let patients
		const { length: totalLength } = await PatientSchema.find()

		if (title) {
			patients = await PatientSchema.find({ title }).limit(size).skip(skip)
			const similar = await PatientSchema.find({
				$and: [{ title: { $regex: title } }, { desc: { $regex: title } }],
			}).limit(3)
			return { total: totalLength, title, data: { patients, similar } }
		}
		patients = await PatientSchema.find().sort({ email: -1 }).limit(limit).skip(skip)
		return { total: totalLength, data: patients }
	}

	async update(id, body) {
		const updatedPatient = await PatientSchema.findByIdAndUpdate(id, body, { new: true })
		return updatedPatient
	}

	async delete(id) {
		const deletedPatient = await PatientSchema.findByIdAndDelete(id)
		return deletedPatient
	}
}

export default new PatientService()