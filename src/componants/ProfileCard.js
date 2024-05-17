import React, { useState, useEffect } from 'react'
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
import dayjs from 'dayjs';

function ProfileCard({ expanded, setExpanded }) {
    const [giveDate, setGiveDate] = useState(new Date())
    const [expireDate, setExpireDate] = useState(new Date())
    const [birthDate, setBirthDate] = useState(new Date())
    const [provinces, setProvinces] = useState([]);

    const [selected, setSelected] = useState({
        province_id: undefined,
        amphure_id: undefined,
        tambon_id: undefined,
    });

    const [form, setForm] = useState({
        ProNameTH: "",
        ProSurNameTH: "",
        ProNameEN: "",
        ProSurNameEN: "",
        ProNickname: "",
        ProAge: "",
        ProStatus: "",
        ProDisease: "",

        ProID: "",
        ProPlace: "",
        ProGivenDate: "",
        ProExpireDate: "",
        ProBirthDate: "",
        ProProvince: "",
        ProHeight: "",
        ProWeight: "",
        ProNationality: "",
        ProReligion: "",
        ProMobile: "",
        ProHomephone: "",
        ProWorkphone: "",
    });

    const handleChangeGiveDate = (date) => {
        setGiveDate(date);
        setForm({ ...form, ProGivenDate: date })
    };

    const handleChangeExpireDate = (date) => {
        setExpireDate(date);
        setForm({ ...form, ProExpireDate: date })
    };
    const handleChangeBirthDate = (date) => {
        setBirthDate(date);
        setForm({ ...form, ProBirthDate: date })
    };


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

    useEffect(() => {
        (() => {
            fetch(
                "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
            )
                .then((response) => response.json())
                .then((result) => {
                    setProvinces(result);
                });
        })();
    }, []);
    return (
        <div>
            <Card sx={{ padding: "1rem", backgroundColor: "#FAFAFA", borderRadius: "15px", marginTop: "2rem" }}>
                <CardActions disableSpacing onClick={handleExpandClick}>
                    <div style={{ width: "15%", textAlign: 'center' }}>
                        <p style={{ color: "#1B6BB2", fontWeight: "initial", borderBottom: "2px solid #1B6BB2" }}>
                            ข้อมูลส่วนตัว
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ชื่อ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, ProNameTH: e.target.value })}
                                            value={form.ProNameTH} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกชื่อ
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextSurname">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        นามสกุล <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, ProSurNameTH: e.target.value })}
                                            value={form.ProSurNameTH} />
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
                                        Name <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, ProNameEN: e.target.value })}
                                            value={form.ProNameEN} />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your name
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextSurname">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        Surname <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, ProSurNameEN: e.target.value })}
                                            value={form.ProSurNameEN} />
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
                                        ชื่อเล่น <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, ProNickname: e.target.value })}
                                            value={form.ProNickname} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกชื่อเล่น
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อายุ <span>*</span>  :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            onChange={e => setForm({ ...form, ProAge: e.target.value })}
                                            value={form.ProAge} />
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

                                        <Form.Select aria-label="Default select example"
                                            onChange={e => setForm({ ...form, ProStatus: e.target.value })}
                                            value={form.ProStatus}
                                            style={{
                                                cursor: "pointer",
                                            }}>
                                            <option>-</option>
                                            <option value="โสด">โสด</option>
                                            <option value="สมรส">สมรส</option>
                                            <option value="หย่า">หย่าร้าง</option>
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

                                        <Form.Control type="text"
                                            onChange={e => setForm({ ...form, ProDisease: e.target.value })}
                                            value={form.ProDisease} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>

                            </Col>
                        </Row>


                        <Row style={{ marginTop: "3.5rem" }}>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }} >
                                        เลขประจำตัวประชาชน <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            onChange={e => setForm({ ...form, ProID: e.target.value })}
                                            value={form.ProID} />
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

                                        <Form.Control type="text"
                                            onChange={e => setForm({ ...form, ProPlace: e.target.value })}
                                            value={form.ProPlace} />
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
                                                    onChange={handleChangeGiveDate}
                                                    value={dayjs(giveDate)}
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
                                                    onChange={handleChangeExpireDate}
                                                    value={dayjs(expireDate)}
                                                    format="DD/MM/YYYY"
                                                    desktopModeMediaQuery="@media (pointer: fine)"
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        วัน/เดือน/ปีเกิด :
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
                                                    onChange={handleChangeBirthDate}
                                                    value={dayjs(birthDate)}
                                                    format="DD/MM/YYYY"
                                                    desktopModeMediaQuery="@media (pointer: fine)"
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3 form-province" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        จังหวัดที่เกิด <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select
                                            value={selected.province_id}
                                            aria-label="Default select example"
                                            onChange={e => {
                                                const selectedProvinceId = e.target.value;
                                                setSelected({
                                                    ...selected,
                                                    province_id: selectedProvinceId,
                                                });
                                                const selectedProvince = provinces.find(item => item.id === +selectedProvinceId);
                                                setForm({
                                                    ...form,
                                                    Province: selectedProvince.name_th
                                                });
                                            }}
                                            style={{ cursor: "pointer" }}
                                            required
                                        >
                                            <option></option>
                                            {provinces.map(item => (
                                                <option key={item.id} value={item.id} id="province_id">
                                                    {item.name_th}
                                                </option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกจังหวัดที่เกิด
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ส่วนสูง <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            onChange={e => setForm({ ...form, ProHeight: e.target.value })}
                                            value={form.ProHeight} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกส่วนสูง
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        น้ำหนัก <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            onChange={e => setForm({ ...form, ProWeight: e.target.value })}
                                            value={form.ProWeight} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกน้ำหนัก
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        สัญชาติ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, ProNationality: e.target.value })}
                                            value={form.ProNationality} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกสัญชาติ
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ศาสนา <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, ProReligion: e.target.value })}
                                            value={form.ProReligion} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกศาสนา
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        โทรศัพท์มือถือ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            onChange={e => setForm({ ...form, ProMobile: e.target.value })}
                                            value={form.ProMobile} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเบอร์โทรศัพท์มือถือ
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        โทรศัพท์บ้าน :
                                    </Form.Label>
                                    <Col sm="8">

                                        <Form.Control type="number" min={0} maxLength={0}
                                            onChange={e => setForm({ ...form, ProHomephone: e.target.value })}
                                            value={form.ProHomephone} />
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

                                        <Form.Control type="number" min={0}
                                            onChange={e => setForm({ ...form, ProWorkphone: e.target.value })}
                                            value={form.ProWorkphone} />
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