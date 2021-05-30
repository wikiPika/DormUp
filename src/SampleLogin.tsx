import React, { useState, useEffect } from "react";
import { db } from "./firebase";
function SampleLogin() {
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");

  async function handleSubmit(e:any) {
    e.preventDefault(); 
   const result = await db.collection('users').add({
       college,
       major,
       hobbies,
       gender,
       bio
   })
   console.log(result.id); 
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} >
        <div>
          <input
            type="text"
            onChange={(e) => setCollege(e.target.value)}
            value={college}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setMajor(e.target.value)}
            value={major}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setHobbies(e.target.value)}
            value={hobbies}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SampleLogin;
