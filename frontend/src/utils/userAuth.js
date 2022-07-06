export const BASE_URL = 'https://mestofull.nomoredomains.xyz/api';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email':email, 
      'password': password
    })
  })
  .then((res) => {
    console.log(res)
    console.log(res.json())
    console.log(res.body.json())
    try {
      if (res.status === 201){
        return res.body.json();
      }
    } catch(e){
      return (false)
    }
  })
  // .then((res) => {
  //   return res.data;
  // })
  .catch((err) => err);
}


export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email':email, 
      'password': password
    })
  })
  .then((response => response.json()))
  .then((data) => {
    if (data.token){
      localStorage.setItem('token', data.token);
      return data;
    }
  })
}; 


export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())  
}