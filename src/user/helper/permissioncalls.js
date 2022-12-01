

const { axios } = require("axios");
// export const AddPermision = (permission) => {
// axios.post("/api/v1/user/permission/add",permission).then((per)=> {
//     console.log(per)
//     return per
// })
// .catch((err)=> {
// console.log(err)
// })
// }

export const AddPermision = ( user,email, token,role ) => {
    return fetch(`/api/v1/user/permission/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        email:email,
        role:role,
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        console.log(response)
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const GetPermissions = (email, token,role)  => {
    return fetch(`/api/v1/user/permission/${email}`, {
      
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        email:email,
        role:role,
      },
    })
      .then(response => {
        console.log(response)
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const GetAllPermissions = (email, token,role,search)  => {
    return fetch(`/api/v1/allpermission${search}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        email:email,
        role:role,
      },
      
    })
    

      .then(response => {
        console.log(response)
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const AcceptRequest = (id,data)=>{
    return fetch(`/api/v1/user/permissionacc/${id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },

  body: JSON.stringify({is_PermisssionGranted:data})
})
.then(response=>{
  console.log(response)
  return response.json();
})
.catch(err=> console.log(err))
  }

export const DelPermission = (id,email, token,role)  => {
  return fetch(`/api/v1/user/permission/delete/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      email:email,
      role:role,
    },
    
  })
    .then(response => {
      console.log(response)
      return response.json();
    })
    .catch(err => console.log(err));
}


export const EditPermission = (id,user,email,token,role) => {
  return fetch(`/api/v1/user/updatepermission/${id}`,{
    method: "PUT",
    headers: {
     
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
      // email:email,
      // role:role,
    },
    body: JSON.stringify(user)
   
  }).then(response => {
    console.log(response)
    return response.json();
  })
  .catch(err => console.log(err));
}


export const Userinfo = (id)=>{
  return fetch(`/api/v1/userinfo/${id}`,{
    method: "GET",
    headers: {
      Accept: "application/json",
  
      // Authorization: `Bearer ${token}`,
      // email:email,
      // role:role,
    },
   
  }).then(response=>{
    console.log(response)
    return response.json();
  })
  .catch(err=> console.log(err))
 
}


export const GetAdmin = () => {
  return fetch("/api/v1/admin/listofadmin",{
    method: "GET",
    headers: {
      Accept: "application/json",
  
      // Authorization: `Bearer ${token}`,
      // email:email,
      // role:role,
    },
    
  }).then(response=>{
    console.log(response)
    return response.json();
  })
  .catch(err=> console.log(err))
 
}



export const GetNoneAdmin = () => {
  return fetch("/api/v1/admin/noneadmin",{
    method: "GET",
    headers: {
      Accept: "application/json",
  
      // Authorization: `Bearer ${token}`,
      // email:email,
      // role:role,
    },
  }).then(response=>{
    console.log(response)
    return response.json();
  })
  .catch(err=> console.log(err))
 
}

export const updateRole = (id,role)=>{
  return fetch(`/api/v1/admin/users/${id}`,{
  method: "PUT",
  headers: {
    Accept: "application/json",

    // Authorization: `Bearer ${token}`,
    // email:email,
    // role:role,
  },
  body: JSON.stringify({"role":role})
}).then(response=>{
  console.log(response)
  return response.json();
})
.catch(err=> console.log(err))
}

// /admin/users/