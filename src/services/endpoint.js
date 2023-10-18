const URL_BASE = 'https://my-hotel-api-rest.onrender.com';

const endpoints = {
    userByEmailAndPassword: (email, password) => `${URL_BASE}users?email=${email}&&password=$${password}`


};

export default endpoints;