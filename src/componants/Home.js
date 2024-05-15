import React, { useRef, useState } from 'react'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import ProfileCard from './ProfileCard'
import AddressCard from './AddressCard'
import EmergencyCard from './EmergencyCard'
import FamilyCard from './FamilyCard'
import GeneralCard from './GeneralCard'

import ScrollToTop from 'react-scroll-to-top'

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'


function Home() {
    const [profileExpanded, setProfileExpanded] = useState(false);
    const [addressExpanded, setAddressExpanded] = useState(false);
    const [emergencyExpanded, setEmergencyExpanded] = useState(false);
    const [familyExpanded, setFamilyExpanded] = useState(false);
    const [generalExpanded, setGeneralExpanded] = useState(false);


    const [startDueDate, setStartDueDate] = useState(new Date());
    const [endDueDate, setEndDueDate] = useState(new Date());
    const [totalDays, setTotalDays] = useState(0);

    const [imageSrc, setImageSrc] = useState(require('../images/blank-profile.jpg'));
    const fileInputRef = useRef(null);

    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);


    const [form, setForm] = useState({
        ProfileImage: '',
        startDate: startDueDate,
        endDate: endDueDate,
        totalDays: '',
        position: '',
    });

    const calculateTotalDays = (startDate, EndDate) => {
        if (startDate && EndDate) {
            const start = dayjs(startDate);
            const end = dayjs(EndDate);
            const days = end.diff(start, 'day');
            if (days < 0) {
                return 0;
            }
            return (days)
        }
    }

    const handleStartDateChange = (dueDate) => {
        setStartDueDate(dueDate);
        const total = calculateTotalDays(dueDate, endDueDate);
        setTotalDays(total);

        setForm({
            ...form, startDate: dueDate,
            totalDays: total
        });
    }

    const handleEndDateChange = (dueDate) => {
        setEndDueDate(dueDate);
        const total = calculateTotalDays(startDueDate, dueDate);
        setTotalDays(total);

        setForm({
            ...form, endDate: dueDate
            , totalDays: total
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = formRef.current;
        if (form && form.checkValidity() === false) {
            // ค้นหา element ที่ไม่ถูกต้องและเลื่อนไปยังตำแหน่งนั้น
            const firstInvalidField = form.querySelector(':invalid');
            if (firstInvalidField) {
                firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalidField.focus();
            }
        }
        setValidated(true);
        setProfileExpanded(true);
        setAddressExpanded(true);
        setEmergencyExpanded(true);
        setFamilyExpanded(true);
        setGeneralExpanded(true);
    };


    const handleUploadClick = () => {
        fileInputRef.current.click();
        setForm({ ...form, ProfileImage: imageSrc });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
        console.log(file);
    };


    return (
        <div style={{ marginBottom: "10rem" }}>
            <div style={{ width: "100%", height: "75px", backgroundColor: "#1B6BB2" }}></div>

            {/* ScroolToTop */}
            <ScrollToTop smooth color='white' style={{
                borderRadius: "20px",
                backgroundColor: "#1B6BB2",
            }} />

            {/* LOGO */}
            <div>
                <Row style={{
                    display: "flex", padding: "0.5rem"
                }}>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={require('../images/logo-siam-IT-Thailand.png')} alt='logo'
                            className='logo-img' />
                        <div>
                            <div className='logo-th'
                                style={{
                                    color: "#1B6BB2",
                                    fontWeight: "initial", marginBottom: "-7px"
                                }}>
                                บริษัท สยาม ไอที เน็ทเวิร์คกิ้ง (ประเทศไทย)
                            </div>
                            <div className='logo-en'
                                style={{
                                    color: "#1B6BB2",
                                    fontWeight: "initial",
                                    marginTop: "0.5rem"
                                }}>
                                SIAM IT NETWORKING (THAILAND) COMPANY LIMETED
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Divider */}
                <div style={{ height: "2px", width: "100%", backgroundColor: "#1B6BB2" }}></div>

                {/* Form Header */}
                <Container style={{ marginTop: "2rem" }}>
                    <div className='form-header'
                        style={{
                            textAlign: "center",
                            color: "#1B6BB2",
                            marginBottom: "1rem",
                        }}>
                        แบบฟอร์มสมัครนักศึกษาฝึกงาน
                    </div>
                    <Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit}>

                        <Row>
                            <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                                sm={12} md={12} lg={12} xl={3}>
                                <div style={{
                                    width: "90%", display: "flex",
                                    justifyContent: "center", alignItems: "center"
                                }}>
                                    <div style={{
                                        display: "flex", flexDirection: "column",
                                        justifyContent: "center", alignItems: "center"
                                    }}>
                                        <img src={imageSrc} alt='profile'
                                            className='logo-img'
                                            style={{ borderRadius: "15px", width: "150px", height: "150px" }} />
                                        <div style={{ marginTop: "0.75rem" }}>
                                            <Button variant="success" onClick={handleUploadClick}>อัพโหลด</Button>{' '}
                                            <Button variant="danger"
                                                onClick={() =>
                                                    setImageSrc(require('../images/blank-profile.jpg'))}>ลบ</Button>{' '}
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={12} md={12} lg={12} xl={9}
                                style={{ marginTop: '1.75rem', padding: "16px" }}>
                                <Row>
                                    <Col sm={12} md={8} lg={8}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>
                                        <div style={{ width: "100%" }}>
                                            <p style={{
                                                color: "#1B6BB2", marginBottom: "-0.1rem", display: "flex",
                                            }}>
                                                วันที่เริ่มทำงาน <span>*</span>
                                            </p>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    slotProps={{ textField: { size: 'small' } }}
                                                    sx={{
                                                        backgroundColor: "#FFF",
                                                        borderRadius: "10px",
                                                        "& MuiInputBase-root": {
                                                            border: "none",
                                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                                        },
                                                    }} required
                                                    onChange={handleStartDateChange}
                                                    value={dayjs(startDueDate)}
                                                    format="DD/MM/YYYY"
                                                    desktopModeMediaQuery="@media (pointer: fine)"
                                                />
                                            </LocalizationProvider>
                                        </div>
                                        <div style={{
                                            width: "10%", textAlign: "center", display: "flex",
                                            justifyContent: "center", alignItems: "center"
                                        }}>
                                            <div style={{
                                                fontWeight: "initial",
                                                color: "#1B6BB2", marginBottom: "-0.5rem"
                                            }}>
                                                -
                                            </div>
                                        </div>
                                        <div style={{ width: "100%" }}>
                                            <p style={{
                                                color: "#1B6BB2", marginBottom: "-0.1rem",
                                                display: "flex"
                                            }}>
                                                วันสุดท้ายวันที่  <span>*</span>
                                            </p>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    slotProps={{ textField: { size: 'small' } }}
                                                    sx={{
                                                        backgroundColor: "#FFF",
                                                        borderRadius: "10px",
                                                        "& MuiInputBase-root": {
                                                            border: "none",
                                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                                        }
                                                    }} required
                                                    onChange={handleEndDateChange}
                                                    value={dayjs(endDueDate)}
                                                    format="DD/MM/YYYY"
                                                    desktopModeMediaQuery="@media (pointer: fine)"
                                                />
                                            </LocalizationProvider>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={4} lg={4}>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextTotalDate" style={{ margin: "0" }}>
                                            <Form.Label className='form-lebel' style={{
                                                color: "#1B6BB2", margin: "0",
                                                display: "flex"
                                            }}>
                                                เป็นระยะเวลาทั้งหมด
                                            </Form.Label>
                                            <Form.Control type="text" value={`${totalDays} วัน`} readOnly />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={12} lg={8}>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextIntern"
                                            style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                                            <Form.Label className='form-lebel' style={{
                                                color: "#1B6BB2",
                                                display: "flex"
                                            }}>
                                                โปรดระบุตำแหน่งที่ต้องการฝึกงาน
                                                <span>*</span>
                                            </Form.Label>
                                            <Form.Control type="text" required
                                                onChange={e => setForm({ ...form, position: e.target.value })} />
                                            <Form.Control.Feedback type="invalid">
                                                กรุณากรอกตำแหน่งที่ต้องการฝึกงาน
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                        <ProfileCard expanded={profileExpanded} setExpanded={setProfileExpanded} />
                        <AddressCard expanded={addressExpanded} setExpanded={setAddressExpanded} />
                        <EmergencyCard expanded={emergencyExpanded} setExpanded={setEmergencyExpanded} />
                        <FamilyCard expanded={familyExpanded} setExpanded={setFamilyExpanded} />
                        <GeneralCard expanded={generalExpanded} setExpanded={setGeneralExpanded} />
                    </Form>

                    <div style={{
                        display: "flex", justifyContent: "center", alignItems: "center"
                    }}>
                        <Button className='form-lebel' style={{
                            width: "100%", marginTop: "3rem",
                            backgroundColor: "#1B6BB2", padding: "0.5remn",
                            maxWidth: "30%", borderRadius: "15px"
                        }} type="submit"
                            onClick={handleSubmit}>
                            ส่งใบสมัคร
                        </Button>
                    </div>
                </Container>

            </div>
        </div>


    )
}

export default Home