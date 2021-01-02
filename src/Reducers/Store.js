import{createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import PostReducer from './PostReducer'

const MainReducer = combineReducers({posts: PostReducer})

export default createStore(MainReducer, applyMiddleware(thunk));