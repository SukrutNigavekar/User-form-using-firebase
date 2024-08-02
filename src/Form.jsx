import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "./FirebaseConfig";
import { v4 as uuidv4 } from "uuid";
import Table from "react-bootstrap/Table";

export default function Form() {
  const db = getDatabase(app);

  let UserData = (e) => {
    e.preventDefault();

    let userObj = {
      name: e.target.uname.value,
      email: e.target.uemail.value,
      mobile: e.target.umobile.value,
      password: e.target.upassword.value,
    };

    let uId = uuidv4();

    set(ref(db, "userinfo/" + uId), userObj);
    alert("User added");
    let inputfield = document.querySelectorAll("input");
    inputfield.forEach((input) => {
      input.value = "";
    });
  };

  let [thisData, setThisData] = useState([]);
  // console.log(thisData)

  let DisplayData = () => {
    let starCountRef = ref(db, "userinfo/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      let myArr = [];
      for (let user in data) {
        
        let user2Obj = {
          db_id: user,
          name: data[user].name,
          email: data[user].email,
          mobile: data[user].mobile,
          password: data[user].password,
        };
        myArr.push(user2Obj);
        setThisData(myArr);
      }
    });
  };

  useEffect(() => {
    DisplayData();
  }, []);

  return (
    <>
      <div className="m-5 bg-primary p-4">
        <form onSubmit={UserData}>
          <div className="mb-3">
            <label className="form-label text-white">User name</label>
            <input
              type="text"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="uname"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Email ID</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="uemail"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Contact detail</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="umobile"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Password</label>
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
      <Table striped bordered hover className="container mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {thisData.length > 0
            ? thisData.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{v.db_id}</td>
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                    <td>{v.mobile}</td>
                    <td>{v.password}</td>
                  </tr>
                );
              })
            : "No data found"}
        </tbody>
      </Table>
    </>
  );
}
