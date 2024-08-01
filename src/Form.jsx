import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./FirebaseConfig";

export default function Form() {
  const db = getDatabase(app);

  let UserData= (e)=>{
    e.preventDefault();

    let userObj = {
      name:e.target.uname.value,
      email:e.target.uemail.value,
      mobile:e.target.umobile.value,
      password: e.target.upassword.value
    }
    set(ref(db, "users/"),{
      userObj
    })
    alert("User added")
  }
  return (
    <div className="m-5 bg-primary p-4">
      <form onSubmit={UserData}>
        <div className="mb-3">
          <label  className="form-label text-white">
            User name
          </label>
          <input
            type="text"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="uname"
          />
        </div>
        <div className="mb-3">
          <label  className="form-label text-white">
            Email ID
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="uemail"
          />
        </div>
        <div className="mb-3">
          <label  className="form-label text-white">
            Contact detail
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="umobile"
          />
        </div>
        <div className="mb-3">
          <label  className="form-label text-white">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="upassword"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
