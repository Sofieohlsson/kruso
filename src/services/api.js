const getInfoPromise = async () => {
    const response = await fetch("/info.json")

    const info = await response.json()
    return info; 
}

const api = {
    getInfoPromise
}

export default api; 