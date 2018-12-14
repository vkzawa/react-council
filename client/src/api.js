import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.REACT_APP_API_URL;

const responseBody = res => res.body;

const requests = {
  get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody),
  getWithCredentials: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .withCredentials()
      .then(responseBody)
};

const Menus = {
  bySlug: slug => requests.get(`/wp-json/react-wp-rest/menus/${slug}`)
};

const Content = {
  data: type => requests.get(`/wp-json/wp/v2/${type}?_embed`),
  dataBySlug: (type, slug) =>
    requests.get(`/wp-json/wp/v2/${type}?slug=${slug}&_embed`),
  dataByCategory: (type, categories, params) =>
    requests.get(
      `/wp-json/wp/v2/${type}?categories=${categories}&${params}&_embed`
    ),
  previewDataBySlug: (type, slug, wpnonce) =>
    requests.getWithCredentials(
      `/wp-json/react-wp-rest/preview?type=${type}&slug=${slug}&_wpnonce=${wpnonce}&_embed`
    ),
  pageList: () => requests.get("/wp-json/react-wp-rest/pages/list"),
  eventsList: (page, length, startDate, endDate) =>
    requests.get(
      `/wp-json/tribe/events/v1/events/?page=${page}&per_page=${length}&start_date=${startDate}&end_date=${endDate}`
    )
};

export default {
  Menus,
  Content
};
