import React from 'react'
import { Col, Button, Row, Container, Card, Form, img } from 'react-bootstrap'
import ScrollToTop from 'react-scroll-to-top'

function Home() {
  return (
    <div>
      <div style={{ width: "100%", height: "75px", backgroundColor: "#1B6BB2" }}></div>

      {/* LOGO */}
      <div>
        <Row style={{
          display: "flex", padding: "0.5rem"
        }}>
          <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={require('../images/logo-siam-IT-Thailand.png')} alt='logo'
              style={{ maxHeight: "80%" }} />
            <div>
              <p style={{ fontSize: "2.3rem", color: "#1B6BB2", fontWeight: "initial", marginBottom: "-7px" }}>บริษัท สยาม ไอที เน็ทเวิร์คกิ้ง (ประเทศไทย)</p>
              <p style={{ fontSize: "1.25rem", color: "#1B6BB2", fontWeight: "initial" }}>SIAM IT NETWORKING (THAILAND) COMPANY LIMETED</p>
            </div>
          </Col>
        </Row>
        {/* Divider */}
        <div style={{ height: "2px", width: "100%", backgroundColor: "#1B6BB2", marginTop: "-15px" }}></div>

        {/* Form Header */}

      </div>

      <div>
        <div class="card m-b-30" style="margin-top: 1.25rem">
          {/* Head */}
          <p style={{ fontSize: "2rem" }}>ประวัติครอบครัว</p>
          <div style={{ height: "5px", width: "25%", backgroundColor: "rgb(27 107 178)" }}></div>

          {/* ScroolToTop */}
          <ScrollToTop smooth color='white' style={{ borderRadius: "20px", backgroundColor: "#F3C710" }} />
        </div>
      </div>
    </div>


  )
}

export default Home