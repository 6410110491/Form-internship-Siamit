import React from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Row, Form } from 'react-bootstrap';

function AddressCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    return (
        <div style={{ marginTop: "2rem" }}>
            <Card sx={{ padding: "1rem", backgroundColor: "#FAFAFA", borderRadius: "15px" }}>
                <CardActions disableSpacing >
                    <div style={{ width: "15%", textAlign: 'center' }}>
                        <p style={{ color: "#1B6BB2", fontWeight: "initial", borderBottom: "2px solid #1B6BB2" }}>
                            ที่อยู่
                        </p>
                    </div>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon sx={{ color: "#1B6BB2" }} fontSize='large' />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div style={{width:"fit-content"}}>
                            <p style={{
                                color: "#1B6BB2",
                                fontWeight: "initial",
                                borderBottom: "2px solid #1B6BB2",
                                textAlign: "center"
                            }}>
                                ที่อยู่ตามทะเบียนบ้าน
                            </p>
                        </div>
                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        เลขที่ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมู่ที่ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ตรอก/ซอย :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ถนน :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ตำบล/แขวง :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อำเภอ/เขต :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        จังหวัด :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        รหัสไปรษณีย์ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div style={{width:"fit-content", marginTop:"1rem"}}>
                                <p style={{
                                    color: "#1B6BB2",
                                    fontWeight: "initial",
                                    borderBottom: "2px solid #1B6BB2",
                                    textAlign: "center"
                                }}>
                                    ที่อยู่ปัจจุบัน
                                </p>
                        </div>
                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        เลขที่ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมู่ที่ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ตรอก/ซอย :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ถนน :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ตำบล/แขวง :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อำเภอ/เขต :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        จังหวัด :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        รหัสไปรษณีย์ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>

                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default AddressCard