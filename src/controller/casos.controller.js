const dbConnection=require('../config/databaseCon');
const connection= dbConnection();
let getCovid= async(req,res)=>{
    await connection.query("select * from country order by TotalCases ASC limit 5",(err,result)=>{
        if(result)
            res.send(result);
        else
            res.status(500).send(err);
    });
}
module.exports={
    getCovid
}