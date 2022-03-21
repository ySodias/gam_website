import { Row, Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitch, faYoutube } 
from '@fortawesome/free-brands-svg-icons';
import CSS from 'csstype';
import { link } from '../utils/links/link';

const redLineStyle: CSS.Properties = {
    backgroundColor: 'rgba(161, 24, 24, 0.7)',
    height: '30px',
    width: '100%',
}

const aStyle: CSS.Properties = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '20px'
}

function getJsonUrl(): any {
    const url = Object.values(link['Dominio'])
    return url
}

export function Footer(){
    let url = getJsonUrl()
    return(
        <div>
            <Row>
                <div style={redLineStyle}>&nbsp;</div>
            </Row>
            <Row>
                <Container>
                    <Col md={{ span: 4, offset: 4 }}>
                        <div className='d-flex justify-content-center m-3'>
                            <a href={url[0]['url']} style={aStyle} 
                            className="p-3" target="_blank">
                                <FontAwesomeIcon icon={faGithub} /></a>
                            <a href={url[2]['url']} style={aStyle} 
                            className="p-3" target="_blank">
                                <FontAwesomeIcon icon={faTwitch} /></a>
                            <a href={url[1]['url']} style={aStyle} 
                            className="p-3" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </Col>
                </Container>
            </Row>
    </div>
    )
}