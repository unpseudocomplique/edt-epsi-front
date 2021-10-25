import { reactive } from 'vue'

export const useFetch = ({ method, url, body }) => {
	const promise = fetch(url, {
		method,
		body
	})
		.then(async (response) => {
			request.data = await response.json()
			return response
		})
		.catch((err) => {
			request.loadingError = err
		})
		.finally(() => (request.loading = false))
	const request = reactive({
		loading: true,
		data: undefined,
		loadingError: null,
		promise
	})

	return request
}
