import React from "react";
import {useState} from 'react';
import GithubUser from "./GithubUser";

export default function GithubUserList () {
    const [usernames, setUsernames] = useState([]);

    const handleAddUsername = (event) => {
        event.preventDefault();
        const newUsername = event.target.username.value;
        setUsernames((prevUsernames) => [...prevUsernames, newUsername]);
        event.target.reset();
    }

    return (
        <div>
          <form onSubmit={handleAddUsername}>
            <label>
              Github username:
              <input type="text" name="username" />
            </label>
            <button type="submit">Add</button>
          </form>
          {usernames.map((username) => (
            <GithubUser key={username} username={username} />
          ))}
        </div>
      );
}