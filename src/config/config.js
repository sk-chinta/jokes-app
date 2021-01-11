const env = process.env.REACT_APP_ENVIRONMENT
const jokesApi = process.env.REACT_APP_JOKES_API_URL || "http://localhost:8081"

export default {
  env,
  jokesApi
}
