function submitData(name,email){

const configbody={name,email}

const configdata={
    method: 'POST',
    header:{
       "Content-Type":"application/json",
       "Accept": "application/json"
},
    body: JSON.stringify(configbody)
}

return fetch("http://localhost:3000/users",configdata)
.then(response=>response.json)
.then(data=>{
     console.log(data);
     return data;
})
.catch(error=> {
    console.error(error);
    return error;

})

}

