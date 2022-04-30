import ApiError from '../helper/ApiError'
import PatientService from '../services/PatientService'

class PatientController {
	async create(req, res, next) {
		try {
			const { username, email } = req.body
			if (!username || !email) {
				throw ApiError.badRequest('Missing required author or title or desc fields')
			}
			const patient = await PatientService.create({ username, email })
			res.json(patient)
		} catch (e) {
			next(e)
		}
	}
	
	async getOne(req, res, next) {
		console.log('params', req.params)
		try {
			const { id } = req.params
			if (!id) {
				throw ApiError.badRequest('id not specified')
			}
			const patient = await PatientService.getOne(id)
			res.json([patient])
		} catch (e) {
			next(e)
		}
	}

	async getAll(req, res, next) {
		try {
			const patients = await PatientService.getAll(req.query)
			res.json(patients)
		} catch (e) {
			next(e)
		}
	}

	async update(req, res, next) {
		try {
			const { id } = req.params
			if (!id) {
				throw ApiError.badRequest('id not specified')
			}
			const patient = await PatientService.update(id, req.body)
			res.status(200).json(patient)
		} catch (e) {
			return next(e)
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params
			if (!id) {
				throw ApiError.badRequest('id not specified')
			}
			const patient = await PatientService.delete(req.params.id)
			res.json(patient._id)
		} catch (e) {
			next(e)
		}
	}
}

export default new PatientController()