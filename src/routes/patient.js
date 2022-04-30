import { Router } from 'express'
import PatientController from '../controllers/PatientController'

const patient = new Router()

patient.get('/', PatientController.getAll)
patient.get('/:id', PatientController.getOne)
patient.post('/', PatientController.create)
patient.put('/:id', PatientController.update)
patient.delete('/:id', PatientController.delete)

export default patient