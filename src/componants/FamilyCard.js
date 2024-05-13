import React from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Row, Form } from 'react-bootstrap';

function FamilyCard() {
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
            <Card sx={{
                padding: "1rem", backgroundColor: "#FAFAFA", borderRadius: "15px"
            }}>
                <CardActions disableSpacing onClick={handleExpandClick}
                    style={{ cursor: "pointer" }}>
                    <div style={{ width: "15%", textAlign: 'center' }}>
                        <p style={{ color: "#1B6BB2", fontWeight: "initial", borderBottom: "2px solid #1B6BB2" }}>
                            ประวัติครอบครัว
                        </p>
                    </div>
                    <ExpandMore
                        expand={expanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon sx={{ color: "#1B6BB2" }} fontSize='large' />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        บิดา ชื่อ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        นามสกุล :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        อายุ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0} required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อาชีพ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        มารดา ชื่อ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        นามสกุล :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        อายุ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0} required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อาชีพ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div style={{ width: "fit-content", marginTop: "1rem" }}>
                            <p style={{
                                color: "#1B6BB2",
                                fontWeight: "initial",
                                borderBottom: "2px solid #1B6BB2",
                                textAlign: "center"
                            }}>
                                ที่อยู่
                            </p>
                        </div>
                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        เลขที่ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมู่ที่ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0} required />
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
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        โทรศัพท์ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0} required />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div style={{ width: "fit-content", marginTop: "1rem" }}>
                            <p style={{
                                color: "#1B6BB2",
                                fontWeight: "initial",
                                borderBottom: "2px solid #1B6BB2",
                                textAlign: "center"
                            }}>
                                สมาชิกพี่น้อง
                            </p>
                        </div>
                        <Row>
                            <Col sm={6} md={6} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        จำนวน :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0} required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={2}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ชาย :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0} required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={2}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หญิง :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0} required />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={5}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ผู้สมัครเป็นคนที่ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0} required />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        คนที่ 1 ชื่อ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        นามสกุล :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อายุ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" min={0}  />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อาชีพ :
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

export default FamilyCard
