class ApiError {
	constructor(status, message) {
		this.status = status
		this.message = message
	}
	static notFound(message = 'not found') {
		return new ApiError(400, message)
	}
	static Unauthorized(message = 'user unauthorized') {
		return new ApiError(401, message)
	}
	static badRequest(message) {
		return new ApiError(404, message)
	}
}

export default ApiError