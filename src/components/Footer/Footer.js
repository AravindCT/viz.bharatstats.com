import React from 'react'
import styles from './Footer.module.scss'
import { Row, Col, Container } from 'react-bootstrap'
import { BsFillEnvelopeFill, BsBarChartFill } from 'react-icons/bs'
import { FaTwitter, FaGithub } from 'react-icons/fa'

// #TODO add commit hash
// const commitHash = process.env.REACT_APP_VERSION || 'dev'

export default function Footer(props) {
  return (
    <Container fluid style={{ backgroundColor: 'var(--dark)' }}>
      <Container className={styles.footer}>
        <Row>
          <Col xs={6} sm={{ span: 5, order: 1 }} lg={{ span: 3, order: 1 }}>
            <p className="Xsmall">
              Bharatstats Viz is a no code data visualization tool built on top of RAWGraphs
            </p>
          </Col>
          <Col xs={6} sm={{ span: 5, order: 3 }} lg={{ span: 3, order: 1 }}>
            <p className="Xsmall"></p>
          </Col>
          {/* <Col xs={6} sm={{span:5, order:3}} lg={{span:3,order:1}}><p className="Xsmall">This <span title={commitHash}>version</span> is intended to be available only for the backers of the crowdfunding campaign.</p></Col> */}
          <Col
            xs={6}
            sm={{ span: 6, offset: 1, order: 2 }}
            md={{ span: 3 }}
            lg={{ offset: 0 }}
            xl={{ span: 2, offset: 2 }}
          >
            <p>
              <BsFillEnvelopeFill /> 
            hello@bharatstats.com
            </p>
            <p>
              <FaTwitter />{' '}
              <a
                href="https://twitter.com/bharatstats"
                target="_blank"
                rel="noopener noreferrer"
              >
                @bharatstats
              </a>
            </p>
          </Col>
          <Col
            xs={6}
            sm={{ span: 6, offset: 1, order: 4 }}
            md={{ span: 2 }}
            lg={{ offset: 0 }}
            xl={{ span: 2, offset: 0 }}
          >
            <p>
              <FaGithub />{' '}
              <a
                href="https://www.bharatstats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </p>
            <p>
              <BsBarChartFill />{' '}
              <a
                href="https://data.bharatstats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datasets
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
