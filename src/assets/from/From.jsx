import React from 'react'
import './From.css'

const From = () => {
  return (
    <>
    <div className="div">
        <div className="madina_log">

        <h1>Login</h1>
      <form>
        <h2>Email</h2>
        <input type="mail" />
        <h2>Password</h2>
        <input type="password" />
        <div className="button">
            <button>Login</button>
        </div>
      </form>

      <p>Don't have account ? <span>Create one</span></p>
        </div>
    </div>
    </>
  )
}

export default From