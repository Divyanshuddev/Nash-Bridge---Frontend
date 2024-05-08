import React from 'react'
import { Box } from '@mui/material'
import designLogo from './AI-ML/design-a-modern-logo-for-nash-bridge-an-platform-f-fZWuFVq-T4OalbYebJ-hbQ-U1znMMucQW6aNJk5L0pa_w.jpeg'

const styles = {
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoContainer: {
    height: "auto",
    marginRight: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  imgStyle: {
    marginTop:"70px",
    marginRight:"450px",
    width: "300px",
    height: "auto",
  },
  footerLinks: {
    textDecoration: "none",
    marginLeft: "350px",
    padding: "20px",
    color:"white",
    listStyle:"none"
  },
  li: {
    marginRight: "20px",
    padding: "0 10px",
  },
  a: {
    textDecoration: "none" ,
    color: "white"
  },
  footer: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft:"-350px",
    fontSize: "50px"
  },
  blocka:{
    color: "white",
    marginLeft: "750px",
    marginTop: "-90px"
  },
  navs:{
    marginTop:"120px"
  }
}

export default function Footer() {
  return (
    <div style={styles.footerContainer}>
      <Box width={'100%'} height={'50vh'} sx={{ backgroundColor: "black" }}>
        <footer>
          <div style={styles.footerContent}>
            <div style={styles.logoContainer}>
              <img style={styles.imgStyle} src={designLogo} alt="Logo" />
              <div style={styles.footer}>
                <h1>NashBridge</h1>
              </div>
            </div>
            <nav>
              <ul style={styles.navs}>
                <li style={styles.footerLinks}><a href="#about" style={styles.a}>About</a></li>
                <li style={styles.footerLinks}><a href="#contact" style={styles.a}>Contact Us</a></li>
                <li style={styles.footerLinks}><a href="#pricing" style={styles.a}>Pricing</a></li>
                <li style={styles.footerLinks}><a href="#blog" style={styles.a}>Blog</a></li>
                <li style={styles.footerLinks}><a href="#thinking" style={styles.a}>Our thinking</a></li>
              </ul>
            </nav>
          </div>
          <div style={styles.blocka}>
          <address >S-L11 Block, Noida, UP, India</address>
          <p>©2024 NashBridge</p>
          </div>
          
        </footer>
      </Box>
    </div>
  )
}