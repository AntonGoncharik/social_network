const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';

let initialState = {
  users: [
  ],
  pageSize: 5,
  currentPage: 1,
  totalCountUsers: 0
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: true
            }
          }
          return user;
        })
      }
      break;
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return {
              ...user,
              followed: false
            }
          }
          return user;
        })
      }
      break;
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
      break;
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.page
        }
        break;
        case SET_TOTAL_COUNT_USERS:
          return {
            ...state,
            totalCountUsers: action.count
          }
          break;
    default:
      return state;
  }
}

export const followCreator = (userID) => {
  return {
    type: FOLLOW,
    userID: userID
  }
}
export const unfollowCreator = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID
  }
}
export const setUsersCreator = (users) => {
  return {
    type: SET_USERS,
    users: users
  }
}
export const setCurrentPageCreator = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page
  }
}
export const setTotalCountUsersCreator = (count) => {
  return {
    type: SET_TOTAL_COUNT_USERS,
    count: count
  }
}
