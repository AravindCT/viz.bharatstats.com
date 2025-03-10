import React from 'react'
import styles from './Header.module.scss'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header({ menuItems }) {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className={styles.navbar}>
    
    <Navbar.Brand href="/" className="d-flex align-items-center">
    <img 
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-qabRFqgDTHcpUQ8Clmq15CZU9F98Qw.png"
      alt="Logo"
      height="20"
      width="20"
      className="me-2 d-inline-block align-top"
    />
    
      <b>Bharat</b><span className="text-primary">Stats </span> Viz</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {menuItems.map((d, i) => {
            return (
              <Nav.Link key={'item' + i} href={d.href}>
                {d.label}
              </Nav.Link>
            )
          })}
          <a
            role="button"
           href="https://www.bharatstats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary ml-2 d-flex flex-column align-items-center justify-content-center"
          >
            Ask AI
          </a>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
