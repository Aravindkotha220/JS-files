// posting the data into json as server
var url="http://localhost:3000/employees";
var options={
    "method":"POST",
    "headers":{
        "Content -type":"application/json"
    },
    "body": JSON.stingify({
        "id":"7",
        "name":"Aravind",
        "rollno":"407"
    })
}
fetch (url7,options)
.then(res => {
    if (res.ok)
        console.log ("Data submited",
           res.status,res.statusText)
})