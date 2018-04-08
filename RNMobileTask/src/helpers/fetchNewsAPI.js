// @flow
import config from 'react-native-config'


const fetchNewsAPI = (params) => {

  const request = new Request(`https://newsapi.org/v2/${params}&apiKey=${config.API_KEY}`)

  return fetch(request)
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.json())
    }

    return res.json()
  })
  .then((data) => {
    return Promise.resolve(data)
  })
  .catch((error) => {
    return Promise.reject(error)
  })
}

const fetchNewsSources = async (country: string) => {
  const params = `sources?country=${country}`

  try {
    const response = await fetchNewsAPI(params)

    return response
  }
  catch (error) {
    return error
  }
}


export {
  fetchNewsSources
}
