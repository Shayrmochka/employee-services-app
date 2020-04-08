import { createSlice, configureStore } from '@reduxjs/toolkit'
import { fetchData } from '../../components/api/api'

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        fetchedUsers: [],
        searchUsers: [],
        style: true
    },
    reducers: {
        getUsers: (state = {}, action) => {
            state.fetchedUsers = action.payload
        },

        getSearchUsers: (state = {}, action) => {
            state.searchUsers = action.payload
        },

        getStyle: (state = {}, action) => {
            state.style = action.payload
        }
    }
})

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        currentUser: []
    },
    reducers: {
        currentUser: (state = {}, action) => {
            state.currentUser = action.payload
        }
    }
})

const appReducer = createSlice({
    name: 'loader',
    initialState: {
        loading: false
    },
    reducers: {
        showLoaderr: (state = {}) => {
            state.loading = true
        },

        hideLoaderr: (state = {}) => {
            state.loading = false
        }
    }
})


export const { getUsers, getSearchUsers, getStyle  } = usersReducer.actions
export const { currentUser  } = currentUserSlice.actions
export const { showLoaderr, hideLoaderr } = appReducer.actions


const reducer = {
    currentUser: currentUserSlice.reducer,
    getUsers: usersReducer.reducer,
    app: appReducer.reducer
    
}

export default configureStore({
    reducer
})

export const fetchUsers = () => async dispatch => {
    dispatch(showLoaderr())
    const response = await fetchData.get('/users')
    dispatch(getUsers(response.data))
    dispatch(hideLoaderr())
}
