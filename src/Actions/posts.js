

export const getPostsData = (data)=>{
    return{
        type:"GET_POSTS",
        payload:data
    }
}

export const getSubjectsAction = (data)=>{
  return{
      type:"GET_SUBJECTS",
      payload:data
  }
}

export const getPosts = ()=>{
  return dispatch=>(
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(data => data.json())
    .then(res => {
        dispatch(getPostsData(res))
    })
  )
};

export const getSubjects = ()=>{
  return dispatch=>(
    fetch("https://api.talentscreen.io/v1/subjects")
    .then(data => data.json())
    .then(res => {
        dispatch(getSubjectsAction(res))
    })
  )
};