const BASEURL = "http://localhost:5000/api"

export const apiGet = () => {

    const url = BASEURL + "/person/"

    return(
        fetch(url).then(res => res.json())
    )
}

export const apiAddPost = (post) => {
    
    const url = BASEURL + "/person/"

    const request = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application /json; charset=UTF-8"
        }
    }
    return(
        fetch(url, request).then(res => res.json())
    )
}

export const apiUpdatePost = (id, post) => {
    
    const url = BASEURL + "/posts/" + id

    const request = {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application /json; charset=UTF-8"
        }
    }
    return(
        fetch(url, request).then(res => res.json())
    )
}

export const apiDeletePost = (id) => {
    
    const url = BASEURL + "/posts/" + id
    const request = {method : 'DELETE'}
    return(
        fetch(url, request).then(res => res.json())
    )
}
