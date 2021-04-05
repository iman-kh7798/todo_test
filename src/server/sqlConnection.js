import mysql from 'mysql'
    const con = mysql.createConnection({
        host: "localhost",
        user: "iman.kh",
        password: "z54gnA2vmdAof0to"
    })
    export default ()=>{
        return con
    }
