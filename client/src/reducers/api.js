import { arrayToObject } from "../utilities/convertData";
import postTypes from "../post-types";
import { normalize } from "normalizr";
import * as schema from "../schemas";

const postTypeDefaultState = arrayToObject(postTypes);

const defaultState = {
  data: {
    ...postTypeDefaultState,
    users: {}
  },
  menus: {},
  lists: {
    pages: [],
    posts: {
      hotTopics: []
    },
    meetings: {
      upcoming: []
    },
    calendarEvents: []
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.type]: arrayToObject(action.payload.data, "slug")
        }
      };

    case "LOAD_DATA_BY_SLUG":
      let normalizedData = normalize(
        action.payload.data,
        schema[action.payload.type]
      );

      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.type]: {
            ...state.data[action.payload.type],
            ...normalizedData.entities[action.payload.type]
          }
        }
      };

    case "LOAD_PAGES_LIST":
      return {
        ...state,
        lists: {
          ...state.lists,
          pages: action.payload
        }
      };

    case "LOAD_UPCOMING_MEETINGS_LIST":
      return {
        ...state,
        lists: {
          ...state.lists,
          meetings: {
            ...state.lists.meetings,
            upcoming: action.payload
          }
        }
      };

    case "LOAD_CALENDAR_EVENTS":
      let normalizedEvents = normalize(action.payload.events, schema.eventList);
      return {
        ...state,
        data: {
          ...state.data,
          events: {
            ...state.data.events,
            ...normalizedEvents.entities.events
          }
        },
        lists: {
          ...state.lists,
          calendarEvents: normalizedEvents.result
        }
      };

    case "LOAD_HOT_TOPICS_LIST":
      return {
        ...state,
        lists: {
          ...state.lists,
          posts: {
            ...state.lists.posts,
            hotTopics: action.payload
          }
        }
      };

    case "LOAD_MENU":
      return {
        ...state,
        menus: {
          ...state.menus,
          [action.payload.slug]: action.payload.menu
        }
      };

    case "CLEAR_API_CONTENT":
      return {
        ...defaultState
      };

    case "CLEAR_API_DATA_BY_SLUG":
      if (
        state.data[action.payload.type] &&
        state.data[action.payload.type][action.payload.slug]
      ) {
        let newState = { ...state };
        delete newState.data[action.payload.type][action.payload.slug];

        return newState;
      }

      return state;

    default:
      return state;
  }
};
