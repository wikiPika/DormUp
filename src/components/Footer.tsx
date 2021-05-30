import '../css/footer.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from 'react-bootstrap/Button';

function Footer(props:any){
    return (
        <footer id='foot' className="justify-content-center">
            <div className="d-flex">
                <Col className="col-4 text-center">
                    <Row className="lead justify-content-center">Social Media</Row>
                    <Row className="mt-3 justify-content-between container">
                        <i id="instagram" className="icon fab fa-instagram"/>
                        <i id="facebook" className="icon fab fa-facebook"/>
                        <i id="twitter" className="icon fab fa-twitter"/>
                        <i id="reddit" className="icon fab fa-reddit"/>
                    </Row>
                </Col>
                <Col>
                    <Row className="justify-content-center mb-2">
                        Honorable mentions
                    </Row>
                    <div className="d-flex justify-content-center">
                        <Col>
                            <Row className="text-black-50 justify-content-center">
                                Tymur Arsentiev - Front end
                            </Row>
                            <hr/>
                            <Row className="text-black-50 justify-content-center">
                                Jackie Liu - Front end
                            </Row>
                        </Col>
                        <Col>
                            <Row className="text-black-50 justify-content-center">
                                Yash Chhatre - Back end
                            </Row>
                            <hr/>
                            <Row className="text-black-50 justify-content-center">
                                Girish Dodda - Back end
                            </Row>
                        </Col>
                    </div>
                </Col>
            </div>
        </footer>);
}
export default Footer;
