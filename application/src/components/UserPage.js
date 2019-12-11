import React, {useState, useEffect} from "react"
import axios from "axios"

function UserPage() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user", )
  }, [])

  return(
    <div>
      <h1>you did it!</h1>
      <img src="https://target.scene7.com/is/image/Target/GUEST_1b1e35d3-04d7-4529-80ce-4539abf870ba?wid=488&hei=488&fmt=pjpeg"></img>
    </div>
  )
}

export default UserPage