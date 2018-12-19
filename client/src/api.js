import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.REACT_APP_API_URL;

const responseBody = res => res.body;

const requests = {
  get: (url, query = {}) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .query(query)
      .then(responseBody),
  getWithCredentials: (url, query = {}) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .query(query)
      .withCredentials()
      .then(responseBody)
};

const Menus = {
  bySlug: slug => requests.get(`/wp-json/react-wp-rest/menus/${slug}`)
};

const Content = {
  data: type => requests.get(`/wp-json/wp/v2/${type}`, { _embed: true }),
  dataBySlug: (type, slug) =>
    requests.get(`/wp-json/wp/v2/${type}`, { slug: slug, _embed: true }),
  dataByCategory: (type, categories, params) =>
    requests.get(
      `/wp-json/wp/v2/${type}?categories=${categories}&${params}&_embed`
    ),
  previewDataBySlug: (type, slug, wpnonce) =>
    requests.getWithCredentials(`/wp-json/react-wp-rest/preview`, {
      type: type,
      slug: slug,
      wpnonce: wpnonce,
      _embed: true
    }),
  pageList: (query = {}) =>
    requests.get("/wp-json/react-wp-rest/pages/list", query),
  eventsList: (query = {}) =>
    requests.get("/wp-json/tribe/events/v1/events/", query)
};

export default {
  Menus,
  Content
};
