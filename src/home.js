import React, { useState } from "react";
import { useHistory } from "react-router";
import { Postlongurl } from "./api";

function Home(props){

  console.log(props.match.params.id)

    let [longurl, setLongurl] = useState("");

    let userData ={longurl,email:props.match.params.id}

    let history = useHistory();

    function handleClick() {
        history.push(`/userlist/${props.match.params.id}`);
      }
    return (
        <>
        <div className="col-lg-12 text-center text-secondary mt-5">
            <h2>URL SHORTNER</h2>
          </div>
          <form onSubmit={async (e) => {
            e.preventDefault();
            handleClick();
            console.log(userData);
          await  Postlongurl(userData);
            setLongurl("");
           
          }}>
          <div class="container">
            <div className="row mt-5" >
              <div class="col-lg-10">
                <input type="text" name="longurl" class="form-control" placeholder="Paste Your Long URL" value={longurl} onChange={(e) => {
                  setLongurl(e.target.value);

                }} />
              </div>
              <div className="col-lg-2">
                <input type="submit" className="btn btn-outline-primary" value="Submit" />
              </div>
            </div>
            </div>
          </form>
        </>
    )
}



export default Home;