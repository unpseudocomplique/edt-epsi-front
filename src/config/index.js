const { VITE_API_PROTOCOL, VITE_API_DOMAIN, VITE_API_PORT } = import.meta.env
export const API_PROTOCOL = VITE_API_PROTOCOL
export const API_DOMAIN = VITE_API_DOMAIN
export const API_PORT = VITE_API_PORT || ''

export const BASE_URL = `${API_PROTOCOL}${API_DOMAIN}${API_PORT}`
