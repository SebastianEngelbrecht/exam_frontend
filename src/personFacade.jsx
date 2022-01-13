import {SERVER_URL} from './const.jsx'
const URL = SERVER_URL;

function makeOptions(method, body) {
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
   }

const getAllConferences = (test) =>{
    const options = makeOptions("GET");
    return fetch(URL+"/conf",options)
    .then((res) => handleHttpErrors(res))
    .then((data) => test(data))
}

function handleHttpErrors(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
}



const personFacade = {
    getAllConferences
};

export default personFacade;