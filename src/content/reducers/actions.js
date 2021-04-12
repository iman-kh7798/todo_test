export const FETCH_SUCCESS="FETCH_SUCCESS"
export default ()=>async (dispatch,getState,api)=>{
    const res=await api.get('/fetch').then((val)=>{
        return val.data
    })
dispatch({
    type:FETCH_SUCCESS,
    payload:res
})

}
