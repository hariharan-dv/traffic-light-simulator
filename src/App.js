import React, { useState } from 'react'
import Main from './Main'

const App = () => {

  const [play, setPlay] = useState(false)

  return (
    <>

      <button className="btn" onClick={() => { setPlay(true) }}>Start</button>
      <button className="btn" onClick={() => { setPlay(false) }}>Stop</button>
      <div className='center'>
        {play && play ? <Main /> :
          <div className="center">
            <div className="box">
            </div>
          </div>}


      </div >
    </>
  )
}

export default App