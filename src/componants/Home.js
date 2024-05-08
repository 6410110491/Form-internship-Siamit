import React from 'react'
import {Form} from 'react-bootstrap'
import ScrollToTop from 'react-scroll-to-top'

function Home() {
  return (
    <div>
      <p style={{ fontSize: "2rem" }}>ประวัติครอบครัว</p>
      <div style={{ height: "5px", width: "100%", backgroundColor: "#47474A" }}></div>

      {/* ScroolToTop */}
      <ScrollToTop smooth color='white' style={{ borderRadius: "20px", backgroundColor: "#F3C710" }} />
    </div>
  
  )
}

export default Home