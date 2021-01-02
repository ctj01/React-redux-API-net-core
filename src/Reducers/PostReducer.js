import {apiGet, apiAddPost, apiUpdatePost, apiDeletePost} from  '../Apis/Api'

//estado inicial
const initialState = {

    posts : []

}
// TIPOS DE ACCIONES
const GET_POSTS= 'GET_POSTS'
const ADD_POSTS = 'ADD_POSTS'
const UPDATE_POSTS = 'UPDATE_POSTS'
const DELETE_POSTS = 'DELETE_POSTS'

//acciones

const getPosts = (posts) => ({type: GET_POSTS, payload: posts})
const addPosts = (posts) => ({type: ADD_POSTS, payload: posts})
const updatePosts = (posts) => ({type: UPDATE_POSTS, payload: posts})
const deletePosts = (id) => ({type: DELETE_POSTS, payload: id})

export const fetchGetPost = () => {
    return(dispatch) => {
        apiGet().then(post => {
            dispatch(getPosts(post))
        }).catch(err => console.log(err))
    }
}
export const fetchAddPost = (post) => {
    return (dispatch) => {
        apiAddPost(post).then(post => {
            dispatch(addPosts(post))
        }).catch(err => console.log(err))
    }
}
export const fetchUpdatePost = (id, post) => {

    return (dispatch) => {
        apiUpdatePost(id, post).then(post => {
            dispatch(updatePosts(post))
        }).catch(err => console.log(err))
    }
    
}

export const fetchDeletePost = (id) => {
    return (dispatch) => {
        apiDeletePost(id).then(post => {
            dispatch(deletePosts(id))
        }).catch(err => console.log(err))
    }
    
}

export default (state = initialState, action) => {

    switch (action.type) 
    {
        case GET_POSTS : return {
        ...state, posts: action.payload }
        case ADD_POSTS: return {
            ...state, posts: [action.payload, state.posts]
        }
        case UPDATE_POSTS : return {
            ...state,
            posts : state.posts.map(post =>  
                post.id === action.payload.id ? action.payload : post         )
        }
        case DELETE_POSTS : return {
            ...state,
            posts : [...state.posts.filter(post => post.id !== action.payload)]
        }
        default: return {...state}
    }
}