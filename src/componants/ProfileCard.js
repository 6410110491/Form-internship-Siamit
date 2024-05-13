import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Row, Form } from 'react-bootstrap';


import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function ProfileCard() {
    const [expanded, setExpanded] = React.useState(false);
    const [dueDate, setDueDate] = useState(new Date())


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
                <CardActions disableSpacing >
                    <div style={{ width: "15%", textAlign: 'center' }}>
                        <p style={{ color: "#1B6BB2", fontWeight: "initial", borderBottom: "2px solid #1B6BB2" }}>
                            ข้อมูลส่วนตัว
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
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ชื่อ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกชื่อ
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextSurname">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        นามสกุล :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกนามสกุล
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        Name :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your name
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextSurname">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        Surname :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your surname
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ชื่อเล่น :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกชื่อเล่น
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อายุ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="number" required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกอายุ
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        สถานะ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Select aria-label="Default select example">
                                            <option>-</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        โรคประจำตัว :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>

                            </Col>
                        </Row>


                        <Row style={{ marginTop: "3.5rem" }}>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        เลขประจำตัวประชาชน :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเลขประจำตัวประชาชน
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ออกให้ ณ :
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
                                        เมื่อวันที่ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']} >
                                                <DatePicker
                                                    slotProps={{ textField: { size: 'small' } }}
                                                    sx={{
                                                        backgroundColor: "#FFF",
                                                        borderRadius: "10px",
                                                        "& MuiInputBase-root": {
                                                            border: "none",
                                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                                        }
                                                    }}
                                                    onChange={(dueDate) => setDueDate(dueDate)}
                                                    // onChange={(dueDate) => setDueDate(dueDate.format('DD-MM-YYYY'))}
                                                    format="DD/MM/YYYY"
                                                    desktopModeMediaQuery="@media (pointer: fine)"
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมดอายุ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']} >
                                                <DatePicker
                                                    slotProps={{ textField: { size: 'small' } }}
                                                    sx={{
                                                        backgroundColor: "#FFF",
                                                        borderRadius: "10px",
                                                        "& MuiInputBase-root": {
                                                            border: "none",
                                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                                        }
                                                    }}
                                                    onChange={(dueDate) => setDueDate(dueDate)}
                                                    // onChange={(dueDate) => setDueDate(dueDate.format('DD-MM-YYYY'))}
                                                    format="DD/MM/YYYY"
                                                    desktopModeMediaQuery="@media (pointer: fine)"
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        วัน/เดือน/ปีเกิด :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        จังหวัดที่เกิด :
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
                                        ส่วนสูง :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        น้ำหนัก :
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
                                        สัญชาติ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ศาสนา :
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
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        โทรศัพท์มือถือ :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        โทรศัพท์บ้าน :
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
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        โทรศัพท์ที่ทำงาน :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                    </CardContent>
                </Collapse>
            </Card></div >
    )
}

export default ProfileCard