import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";

const Home = () => {
    return (
        <Row xs={1} md={3} className="g-4">
            <Col key="1" id="1">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://s13emagst.akamaized.net/products/52365/52364557/images/res_71ac62868bb30aac7a433dc5dcf6e12a.jpg?width=720&height=720&hash=61047CD37B2230838D0E68944ECAEB13"
                    />
                    <Card.Body>
                        <Card.Title>MSI</Card.Title>
                        <Card.Text>Type: Gaming </Card.Text>
                        <Card.Text>Price: 2789.99$</Card.Text>
                        <Link to={`/computers/1`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="2" id="2">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://s13emagst.akamaized.net/products/41052/41051334/images/res_e4ba64a09195aa22708136be199d5210.jpg?width=450&height=450&hash=93021E2E335EECEBBE8FA4F5F4DEDF4F"
                    />
                    <Card.Body>
                        <Card.Title>ASUS TUF</Card.Title>
                        <Card.Text>Type: Gaming</Card.Text>
                        <Card.Text>Price: 1567.99$</Card.Text>
                        <Link to={`/computers/2`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="3" id="3">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://s13emagst.akamaized.net/products/61892/61891124/images/res_c5053edf4926ccf8d6b4ebd100960e4e.jpg?width=450&height=450&hash=88C34E32ED4B15B82D010DA05D840CF3"
                    />
                    <Card.Body>
                        <Card.Title>Acer Nitro 5</Card.Title>
                        <Card.Text>Type: Gaming</Card.Text>
                        <Card.Text>Price: 1789.99$</Card.Text>
                        <Link to={`/computers/3`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="4" id="4">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://s13emagst.akamaized.net/products/60900/60899704/images/res_f993f6b33855745a2657c293e0f7207e.jpg?width=450&height=450&hash=C463781B5EDB5F39B8DE5E4CD105039A"
                    />
                    <Card.Body>
                        <Card.Title>Lenovo IdeaPad Slim 3</Card.Title>
                        <Card.Text>Type: Ofice</Card.Text>
                        <Card.Text>Price: 1189.99$</Card.Text>
                        <Link to={`/computers/4`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="5" id="5">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://s13emagst.akamaized.net/products/49530/49529431/images/res_0570e66129301af18835705aefad978e.jpg?width=450&height=450&hash=A22B14231A936FB8BBEDE59CC7D419F9"
                    />
                    <Card.Body>
                        <Card.Title>ASUS VivoBook 15</Card.Title>
                        <Card.Text>Type: Office</Card.Text>
                        <Card.Text>Price: 677.40$</Card.Text>
                        <Link to={`/computers/5`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="6" id="6">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://s13emagst.akamaized.net/products/61892/61891118/images/res_304b798127e7b370a055b8ac476fada7.jpg?width=450&height=450&hash=9E6DAF50504255C5133F14BD4FAB10BD"
                    />
                    <Card.Body>
                        <Card.Title>Acer Aspire 5</Card.Title>
                        <Card.Text>Type: Office</Card.Text>
                        <Card.Text>Price: 1219.99$</Card.Text>
                        <Link to={`/computers/6`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Home;
