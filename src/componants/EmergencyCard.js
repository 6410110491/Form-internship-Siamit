import React from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Row, Form } from 'react-bootstrap';

function EmergencyCard({ expanded, setExpanded }) {
    const [form, setForm] = React.useState({
        EmergenName: '',
        EmergenRelationship: '',
        EmergenAddr: '',
        EmergenPhonenum: ''
    });

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
        <div>
            <Card sx={{ padding: "1rem", backgroundColor: "#FAFAFA", borderRadius: "15px", marginTop: "2rem" }}>
                <CardActions disableSpacing onClick={handleExpandClick} >
                    <div style={{ width: "15%", textAlign: 'center' }}>
                        <p style={{ color: "#1B6BB2", fontWeight: "initial", borderBottom: "2px solid #1B6BB2" }}>
                            กรณีฉุกเฉิน
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
                            <Col sm={12} md={12} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        กรณีฉุกเฉินติดต่อที่ ชื่อ - นามสกุล <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.EmergenName}
                                            onChange={e => setForm({ ...form, EmergenName: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกชื่อ - นามสกุล
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ความสัมพันธ์ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required
                                            value={form.EmergenRelationship}
                                            onChange={e => setForm({ ...form, EmergenRelationship: e.target.value })}>
                                            <option></option>
                                            <option value="พ่อ">พ่อ</option>
                                            <option value="แม่">แม่</option>
                                            <option value="ญาติ">ญาติ</option>
                                            <option value="เพื่อน ">เพื่อน</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ที่อยู่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.EmergenAddr}
                                            onChange={e => setForm({ ...form, EmergenAddr: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกที่อยู่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        โทรศัพท์ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.EmergenPhonenum}
                                            onChange={e => setForm({ ...form, EmergenPhonenum: e.target.value })}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเบอร์โทรศัพท์
                                        </Form.Control.Feedback>
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

export default EmergencyCard