import { useState, useEffect } from "react";
import axios from 'axios'

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const qs = require('qs')
      const axios = require('axios')

      /*const axios = require('axios');

axios
  .post('http://localhost:8080/users', {
    email: { username },
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });*/


      /*
            fetch("http://localhost:8080/users", {
              "mode": "no-cors",
              "method": "post",
              "headers": { "Content-Type": "x-www-form-urlencoded" },
              "body": JSON.stringify({
                "test": { username }
              })
            })
      */
      /*fetch('http://localhost:8080/users', {
        mode:'no-cors',
        method: 'POST',
        body: JSON.stringify({
          "email": "lorenzo@lorenzo.com"
       })
      })*/

      axios({
        method: 'post',
        url: 'http://localhost:8080/users',
        data: qs.stringify({
          email: { username }
        }),
        headers: {
          'content-type': 'x-www-form-urlencoded'
        }
      })



      console.log("Username --> ", username);
      console.log("Password --> ", password);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>GESTIO</legend>
        <div>
          <input
            type="text"
            id="usernameInput"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="passwordInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && (
          <div role="alert">
            {errorMessage}
          </div>
        )}
        <button type="submit" disabled={isLoading}>
          LOGIN
        </button>
      </fieldset>
    </form>
  );
}
