import {Row, Container, Col} from 'react-bootstrap';
import Github from '../assets/Github.svg';
import Twich from '../assets/Twich.svg';
import Youtube from '../assets/Youtube.svg';
import CSS from 'csstype';

const redLineStyle: CSS.Properties = {
    backgroundColor: 'rgba(161, 24, 24, 0.7)',
    height: '100%',
    width: '100%',
}

const imgStyle: CSS.Properties = {
    height: '12%',
    width: '12%', 
}


export function Footer(){
    let url="https://github.com/ySodias/gam_website/tree/dev"
    return(
        <div>
            <Row>
                <div style={redLineStyle}>&nbsp;</div>
            </Row>
            <Row>
                <Container>
                    <Col md={{ span: 4, offset: 4 }}>
                        <div className='d-flex justify-content-center m-3'>
                            <img className='fluid p-3'  style={imgStyle} src={Twich}/>
                            <a href={url} >
                                <img className='fluid p-3'  style={imgStyle} src={Github}/>
                            </a>
                            <img className='fluid p-3'  style={imgStyle} src={Youtube}/>
                        </div>
                    </Col>
                </Container>
            </Row>
    </div>
        
    )
}