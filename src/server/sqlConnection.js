import mysql from 'mysql'
    const con = mysql.createConnection({
        host: "localhost",
        user: "iman.kh",
        password: "z54gnA2vmdAof0to",
        database:"todo_test"
    })
con.connect(()=>{
    console.log("connection succeed")

    con.query("CREATE DATABASE IF NOT EXISTS cod_back_data", function (err, result) {
        if (err) throw err;
    });
    con.query("CREATE TABLE IF NOT EXISTS tasks (todo VARCHAR(255),date INT(1),status int(0))",
        function (err,res){
            if (err) throw err
            console.log(res)
        })
})

export default con
