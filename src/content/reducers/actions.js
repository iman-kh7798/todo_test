

export const FETCH_DATA="FETCH_DATA"
export const FETCH_SUCCESS="FETCH_SUCCESS"
export default ()=>async (dispatch,getState,api)=>{
    const res=await api.get('/fetch').then(()=>console.log('data fetched'))
dispatch({
    type:FETCH_SUCCESS,
    payload:res
})

}
