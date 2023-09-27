import axios from 'axios';

const URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'Client-ID FHjymEqTR7HWbeSE0MponUlz3vuO2BAEpBIIZ5HQ0p0';

const searchImages = async (searchParameter) => {
    const response =  await axios.get(URL, {
        headers: {
          Authorization: ACCESS_KEY
        },
        params: {
          query: searchParameter
        }
      })
    return response;
}

export default searchImages