import axios from 'axios'
const baseUrl = '/api/markers'  // relative url

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const post = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const remove = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`)
        return response.data
    } catch(error) {
        console.error('Error deleting marker:', error)
    }
}

export default {
    getAll,
    post,
    remove,
}
