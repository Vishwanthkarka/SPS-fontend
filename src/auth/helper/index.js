import React from "react";
import { API } from "../../backend";
const axios = require("axios").default;

// export const signup = async(user) => {
//   // console.log({user})
//   //   await axios.post('/api/v1/signup',user
//   //   )
//   //   .then(function (response) {
//   //     console.log(response.json())
//   //     return response.json();
//   //   })
//   //   .catch(err =>  console.log(err));

// }

export const signup = (user) => {
  return fetch(`/api/v1/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  // await axios.post('/api/v1/login',user)
  // .then(function (response) {
  //   console.log(response.data)
  //   return JSON.stringify(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })
  return fetch(`/api/v1/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// export const authenticate = (data,next) => {
//     if(typeof window !== undefined){

//         localStorage.setItem("vishwa",JSON.stringify(data))
//         console.log(data)
//         next()
//     }
// }
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return axios
      .get(`${API}/signout`)
      .then(function () {
        // handle success
        console.log("signout");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};


// export const isAutheticated = () => {
//   if (typeof window == "undefined") {
//     return false;
//   }
//   if (localStorage.getItem("jwt")) {
//     return JSON.parse(localStorage.getItem("jwt"));
//   } else {
//     return false;
//   }
// }
