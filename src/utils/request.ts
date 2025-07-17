import axios from 'axios'
import {logError} from "./logger";

let loadingInstance: HTMLElement | null = null
let requestCount = 0

const showLoading = (message: string = 'Loading...') => {
  if (requestCount === 0) {
    loadingInstance = document.createElement('div')
    loadingInstance.className = 'loading-overlay'
    loadingInstance.innerHTML = `
            <div class="loading-spinner"></div>
            <div class="loading-message">${message}</div>
        `
    document.body.appendChild(loadingInstance)
  }
  requestCount++
}

const hideLoading = () => {
  requestCount--
  if (requestCount === 0 && loadingInstance) {
    document.body.removeChild(loadingInstance)
    loadingInstance = null
  }
}

export const instance = axios.create({
  // baseURL: '//127.0.0.1:8000/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
  baseURL: import.meta.env.VITE_BASE_URL
})

instance.interceptors.request.use(
    (config) => {
      showLoading();
      return config
    },
    (error) => {
      hideLoading();
      return Promise.reject(error)
    },
)

// Add a response interceptor
instance.interceptors.response.use(
    (response) => {
      hideLoading();
      return response
    },
    (error) => {
      hideLoading();
      logError("request", "axios error: ", error)
      return Promise.reject(error)
    },
)
