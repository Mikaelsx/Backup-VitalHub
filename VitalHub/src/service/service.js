import axios from "axios"; // AXIOS

const portaApi = '4466'

const ip = '172.16.39.88'

// DEFIFINIR A URL

const apiUrlLocal = `http://${ip}:${portaApi}/api`

// TRAZER CONFIGURACAO PRO AXIOS

const api = axios.create({
    baseURL : apiUrlLocal
})

export default api;