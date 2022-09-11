// @ts-ignore
export default function buildMakeAPIClient<T>({APIClient}: T) {
    return function makeAPIClient({token}: { token: string; }) {
        const BASE_URL = 'https://the-one-api.dev/v2'
        const API = new APIClient({
            'baseURL': BASE_URL,
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        });

        const getRequestHandler = async (endpoint: string, params: object) => {
            const response = await API.get(endpoint, {params})
            return JSON.parse(response.data)
        }
        return Object.freeze({
            get: getRequestHandler
        })

    }
}
