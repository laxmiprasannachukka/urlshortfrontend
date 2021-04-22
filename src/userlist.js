import React, { useEffect, useState } from 'react';
import { Getlongurl, GetlongurlbyEmail } from './api';

function Userlist(props) {

    let [userData, setuserData] = useState([])
    async function getdata(){
        let users = await GetlongurlbyEmail(props.match.params.id);
        setuserData(users.data)
    }

    useEffect( () => {
        getdata();
    }, [userData.length])
   

    return (
        <>
        <div class="container mt-5">
            <div className="row">
               
                            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">longUrl</th>
      <th scope="col">shorturl</th>
    </tr>
  </thead>
  <tbody>
  {
                    userData.map((user, index) => {
                        console.log(user)
                        return (
    <tr>
      <th scope="row">1</th>
      <td>{user.longurl}</td>
      <a href={`http://localhost:5000/${user.shorturl}`}><td>{user.shorturl}</td></a>
      
    </tr>
                        )
                        
                    })
                }
    </tbody>
    </table>
                        
            </div>
            </div>
        </>
    )
}

export default Userlist;