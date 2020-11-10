import axios from 'axios';

const MY_KEY = 'wjdtmdwls';

const makeRequest_get = (path, params) =>
  axios.get(`http://localhost:30002${path}`, {
    params: {
      ...params,
      my_key: MY_KEY,
    },
  });
const makeRequest_post = (path, params) =>
  axios.post(`http://localhost:30002${path}`, {
    params: {
      ...params,
    },
  });

const postAnything = async (path, params = {}) => {
  try {
    const {
      data: {results},
      data,
    } = await makeRequest_post(path, params);
    console.log(params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  login: () =>
    postAnything('/tt_login', {user_id: id, user_password: password}),
  popular: () => postAnything('/movie/popular'),
  upcoming: () => postAnything('/movie/upcoming', {region: 'kr'}),
  search: (query) => postAnything('/search/movie', {query}),
  movie: (id) => postAnything(`/movie/${id}`, {append_to_response: 'videos'}),
  discover: () => postAnything('/discover/movie'),
};
