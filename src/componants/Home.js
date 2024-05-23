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
import SuccessPopup from './SuccessPopup'


function Home() {
    const [profileExpanded, setProfileExpanded] = useState(false);
    const [addressExpanded, setAddressExpanded] = useState(false);
    const [emergencyExpanded, setEmergencyExpanded] = useState(false);
    const [familyExpanded, setFamilyExpanded] = useState(false);
    const [generalExpanded, setGeneralExpanded] = useState(false);
    const [trigger, setTrigger] = useState(false);

    const [startDueDate, setStartDueDate] = useState();
    const [endDueDate, setEndDueDate] = useState();
    const [totalDays, setTotalDays] = useState(0);

    const [imageSrc, setImageSrc] = useState(require('../images/blank-profile.jpg'));
    const fileInputRef = useRef(null);

    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);
    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

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
        if (typeof total === 'number') {
            setTotalDays(total);
        }
        setForm({
            ...form, startDate: dueDate,
            totalDays: total
        });
    }

    const handleEndDateChange = (dueDate) => {
        setEndDueDate(dueDate);
        const total = calculateTotalDays(startDueDate, dueDate);
        if (typeof total === 'number') {
            setTotalDays(total);
        }

        setForm({
            ...form, endDate: dueDate
            , totalDays: total
        });
    }

    const handlePopup = () => {
        setTrigger(true);
    }

    const handleUploadClick = () => {
        fileInputRef.current.click();
        setForm({ ...form, ProfileImage: imageSrc });
    };

    const handleDeleteClick = () => {
        fileInputRef.current.value = '';
        setImageSrc(require('../images/blank-profile.jpg'));
        setForm({ ...form, ProfileImage: '' });
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type;
            if (fileType === 'image/jpeg' || fileType === 'image/png') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setImageSrc(e.target.result);
                    setForm({ ...form, ProfileImage: e.target.result });
                };
                reader.readAsDataURL(file);
            } else {
                alert('กรุณาเลือกไฟล์รูปภาพเท่านั้น');
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = formRef.current;
        if (!profileExpanded || !addressExpanded || !emergencyExpanded || !familyExpanded || !generalExpanded) {
            setProfileExpanded(true);
            setAddressExpanded(true);
            setEmergencyExpanded(true);
            setFamilyExpanded(true);
            setGeneralExpanded(true);
        }
        await new Promise(resolve => setTimeout(resolve));

        if (startDueDate === undefined || endDueDate === undefined) {
            const startDatePicker = startDatePickerRef.current;
            const endDatePicker = endDatePickerRef.current;

            if (startDatePicker && startDatePicker.querySelector('[value =""]')) {
                startDatePicker.scrollIntoView({ behavior: 'smooth', block: 'center' });
                startDatePicker.focus();
                setValidated(true);
            } else if (endDatePicker && endDatePicker.querySelector('[value =""]')) {
                endDatePicker.scrollIntoView({ behavior: 'smooth', block: 'center' });
                endDatePicker.focus();
                setValidated(true);
            }
        } else if (form && form.checkValidity() === false) {
            const firstInvalidField = form.querySelector(':invalid');
            if (firstInvalidField) {
                firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalidField.focus();
            }
            setValidated(true);
        } else {
            handlePopup();
            window.location.reload();
        }
    };




    console.log(form)
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
                    display: "flex", width: "100%", justifyContent: "center",
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

                {/* Form  */}
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
                                            style={{ borderRadius: "15px", width: "150px", height: "180px" }} />
                                        <div style={{ marginTop: "0.75rem" }}>
                                            <Button variant="success" onClick={handleUploadClick}>อัพโหลด</Button>{' '}
                                            <Button variant="danger" onClick={handleDeleteClick}>ลบ</Button>{' '}
                                            <input
                                                type="file"
                                                accept="image/png, image/jpeg"
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
                                                    ref={startDatePickerRef}
                                                    slotProps={{
                                                        textField: {
                                                            size: 'small',
                                                        },
                                                    }}
                                                    sx={{
                                                        backgroundColor: "#FFF",
                                                        borderRadius: "10px",
                                                        "& MuiInputBase-root": {
                                                            border: "none",
                                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                                        }
                                                    }}
                                                    required={true}
                                                    onChange={handleStartDateChange}
                                                    format="DD/MM/YYYY"
                                                    desktopModeMediaQuery="@media (pointer: fine)"
                                                />
                                                {form.startDate === undefined && validated === true && (
                                                    <p className='helper-text-start'>กรุณากรอกวันที่เริ่มทำงาน</p>
                                                )}

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
                                                    ref={endDatePickerRef}
                                                    slotProps={{
                                                        textField: {
                                                            size: 'small',
                                                        }
                                                    }}
                                                    sx={{
                                                        backgroundColor: "#FFF",
                                                        borderRadius: "10px",
                                                        "& MuiInputBase-root": {
                                                            border: "none",
                                                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                                        }
                                                    }}
                                                    required={true}
                                                    onChange={handleEndDateChange}
                                                    // value={dayjs(endDueDate)}
                                                    format="DD/MM/YYYY"
                                                    desktopModeMediaQuery="@media (pointer: fine)"
                                                />
                                                {form.endDate === undefined && validated === true && (
                                                    <p className='helper-text-end'>กรุณากรอกวันสุดท้ายที่ทำงาน</p>
                                                )}
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
                        <Button className='form-lebel button-custom' type="submit"
                            onClick={handleSubmit}>
                            ส่งใบสมัคร
                        </Button>
                        <SuccessPopup trigger={trigger} setTrigger={setTrigger} />
                    </div>
                </Container>

            </div>
        </div>


    )
}

export default Home