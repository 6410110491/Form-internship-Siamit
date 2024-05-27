import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Row, Form, Button } from 'react-bootstrap';

function FamilyCard({ expanded, setExpanded }) {
    const [numForms, setNumForms] = useState(1);
    const [provinces, setProvinces] = useState([]);
    const [amphures, setAmphures] = useState([]);
    const [tambons, setTambons] = useState([]);
    const [zipcodes, setZipcodes] = useState([]);
    const [selected, setSelected] = useState({
        province_id: undefined,
        amphure_id: undefined,
        tambon_id: undefined
    });

    const [form, setForm] = React.useState({
        DadName: '',
        DadSureName: '',
        DadAge: '',
        DadJob: '',
        MomName: '',
        MomSureName: '',
        MomAge: '',
        MomJob: '',

        FamAddr: '',
        FamMoo: '',
        FamSoi: '',
        FamRoad: '',
        FamProvince: '',
        FamAmphure: '',
        FamTambon: '',
        FamZipcode: '',
        FamPhone: '',

        FamCount: '',
        CountSis: '',
        CountBro: '',
        CountMe: '',

        FamName1: '',
        FamSureName1: '',
        FamAge1: '',
        FamJob1: '',
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

    const addForm = () => {
        setNumForms(numForms + 1);
        setForm(prevForm => ({
            ...prevForm,
            [`FamName${numForms + 1}`]: '',
            [`FamSureName${numForms + 1}`]: '',
            [`FamAge${numForms + 1}`]: '',
            [`FamJob${numForms + 1}`]: ''
        }));
    };

    const removeForm = () => {
        setNumForms(numForms - 1);
        setForm(prevForm => {
            const newForm = { ...prevForm };
            delete newForm[`FamName${numForms}`];
            delete newForm[`FamSureName${numForms}`];
            delete newForm[`FamAge${numForms}`];
            delete newForm[`FamJob${numForms}`];
            return newForm;
        });
    };

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [fieldName]: value
        }));
    };

    // get province from api
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

    // find district
    useEffect(() => {
        if (selected.province_id !== undefined) {
            const District = provinces.find(
                (item) => item.id === +selected.province_id
            )
            if (District !== undefined) {
                setAmphures(District.amphure)
            }
        }
    }, []);
    // find sub-district
    useEffect(() => {
        if (selected.amphure_id !== undefined) {
            const SubDistrict = amphures.find(
                (item) => item.id === +selected.amphure_id
            )
            if (SubDistrict !== undefined) {
                setTambons(SubDistrict.tambon)
            }
        }
    }, []);
    // find zipcode
    useEffect(() => {
        if (selected.tambon_id !== undefined) {
            const ZipCode = tambons.find(
                (item) => item.id === + selected.tambon_id
            )
            if (ZipCode !== undefined) {
                setZipcodes(ZipCode)
            }
        }
    }, []);
    return (
        <div style={{ marginTop: "2rem" }}>
            <Card sx={{
                padding: "1rem", backgroundColor: "#FAFAFA", borderRadius: "15px"
            }}>
                <CardActions disableSpacing onClick={handleExpandClick}>
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDadName">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        บิดา ชื่อ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.DadName}
                                            onChange={e => setForm({ ...form, DadName: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกชื่อบิดา
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDadSureName">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        นามสกุล <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.DadSureName}
                                            onChange={e => setForm({ ...form, DadSureName: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกนามสกุลบิดา
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDadAge">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        อายุ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.DadAge}
                                            onChange={e => setForm({ ...form, DadAge: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกอายุบิดา
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDadJob">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อาชีพ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.DadJob}
                                            onChange={e => setForm({ ...form, DadJob: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกอาชีพบิดา
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextMomName">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        มารดา ชื่อ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.MomName}
                                            onChange={e => setForm({ ...form, MomName: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกชื่อมารดา
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextMomSureName">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        นามสกุล <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.MomSureName}
                                            onChange={e => setForm({ ...form, MomSureName: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกนามสกุลมารดา
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextMomAge">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        อายุ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.MomAge}
                                            onChange={e => setForm({ ...form, MomAge: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกอายุมารดา
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextMomJob">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อาชีพ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.MomJob}
                                            onChange={e => setForm({ ...form, MomJob: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกอาชีพมารดา
                                        </Form.Control.Feedback>
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFamAddr">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        เลขที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            value={form.FamAddr}
                                            onChange={e => setForm({ ...form, FamAddr: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเลขที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFamMoo">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมู่ที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.FamMoo}
                                            onChange={e => setForm({ ...form, FamMoo: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกหมู่ที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFamSoi">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ตรอก/ซอย  :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text"
                                            value={form.FamSoi}
                                            onChange={e => setForm({ ...form, FamSoi: e.target.value })} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFamRoad">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ถนน :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text"
                                            value={form.FamRoad}
                                            onChange={e => setForm({ ...form, FamRoad: e.target.value })} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextprovinces">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        จังหวัด :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }}
                                            value={selected.province_id}
                                            onChange={e => setSelected({
                                                ...selected,
                                                province_id: e.target.value
                                            },
                                                setForm({
                                                    ...form,
                                                    Province: provinces.find(item => item.id === +e.target.value).name_th
                                                }))}>
                                            <option ></option>
                                            {provinces.map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id}
                                                        id='province_id'>
                                                        {item.name_th}
                                                    </option>
                                                )
                                            })}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกจังหวัด
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextamphures">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อำเภอ/เขต :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }}
                                            value={selected.amphure_id}
                                            onChange={e => setSelected({
                                                ...selected,
                                                amphure_id: e.target.value
                                            },
                                                setForm(
                                                    {
                                                        ...form, District: amphures.find(
                                                            (item) => item.id === +e.target.value
                                                        ).name_th
                                                    }
                                                ))}
                                        >
                                            <option ></option>
                                            {amphures.map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id}
                                                        id='amphures_id'>
                                                        {item.name_th}
                                                    </option>
                                                )
                                            })}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกอำเภอ/เขต
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintexttambons">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ตำบล/แขวง :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }}
                                            value={selected.tambon_id}
                                            onChange={e => setSelected({
                                                ...selected,
                                                tambon_id: e.target.value
                                            },
                                                setForm(
                                                    {
                                                        ...form, Subdistrict: tambons.find(
                                                            (item) => item.id === +e.target.value
                                                        ).name_th
                                                    }
                                                ))}
                                        >
                                            <option ></option>
                                            {tambons.map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id}
                                                        id='tambons_id'>
                                                        {item.name_th}
                                                    </option>
                                                )
                                            })}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกตำบล/แขวง
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextZipcode">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        รหัสไปรษณีย์ :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example"
                                            value={zipcodes.zip_code}
                                            onChange={e => setForm({ ...form, Zipcode: e.target.value },
                                                setForm(
                                                    {
                                                        ...form, Zipcode: zipcodes.zip_code
                                                    }
                                                )
                                            )}
                                            style={{
                                                cursor: "pointer",
                                            }} >
                                            <option></option>
                                            <option id='zipcode'>{zipcodes.zip_code}</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกรหัสไปรษณีย์
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFamPhone">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        โทรศัพท์ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.FamPhone}
                                            onChange={e => setForm({ ...form, FamPhone: e.target.value })
                                            } />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเบอร์โทรศัพท์
                                        </Form.Control.Feedback>
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFamCount">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        จำนวน <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.FamCount}
                                            onChange={e => setForm({ ...form, FamCount: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกจำนวนพี่น้อง
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={2}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCountBro">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ชาย <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.CountBro}
                                            onChange={e => setForm({ ...form, CountBro: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกจำนวนพี่น้องผู้ชาย
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={2}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCountSis">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หญิง <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.CountSis}
                                            onChange={e => setForm({ ...form, CountSis: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกจำนวนพี่น้องผู้หญิง
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={5}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCountMe">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ผู้สมัครเป็นคนที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            value={form.CountMe}
                                            onChange={e => setForm({ ...form, CountMe: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเป็นคนที่เท่าไหร่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div>
                            <div style={{
                                display: "flex", justifyContent: "flex-end", marginBottom: "1rem"
                            }}>

                                <Button style={{
                                    fontSize: "1.5rem", backgroundColor: "#1B6BB2",
                                    marginRight: "1rem", padding: "0 1rem 0 1rem"
                                }}
                                    onClick={addForm}>
                                    +
                                </Button>
                                <Button style={{
                                    fontSize: "1.5rem", backgroundColor: "#1B6BB2",
                                    padding: "0 1rem 0 1rem"
                                }}
                                    onClick={removeForm}>
                                    -
                                </Button>

                            </div>
                            {[...Array(numForms)].map((_, index) => (
                                <div key={index}>
                                    <Row>
                                        <Col sm={12} md={6} lg={6}>
                                            <Form.Group as={Row} className="mb-3" controlId={`formPlaintextPassword-name-${index}`}>
                                                <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                                    คนที่ {index + 1} ชื่อ :
                                                </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control
                                                        type="text"
                                                        value={form[`FamName${index + 1}`]}
                                                        onChange={(e) => handleChange(e, `FamName${index + 1}`)}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={6} lg={6}>
                                            <Form.Group as={Row} className="mb-3" controlId={`formPlaintextPassword-lastname-${index}`}>
                                                <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                                    นามสกุล :
                                                </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control
                                                        type="text"
                                                        value={form[`FamSureName${index + 1}`]}
                                                        onChange={(e) => handleChange(e, `FamSureName${index + 1}`)}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} md={3} lg={3}>
                                            <Form.Group as={Row} className="mb-3" controlId={`formPlaintextPassword-age-${index}`}>
                                                <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                                    อายุ :
                                                </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control
                                                        type="number"
                                                        min={0}
                                                        value={form[`FamAge${index + 1}`]}
                                                        onChange={(e) => handleChange(e, `FamAge${index + 1}`)}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6} md={3} lg={3}>
                                            <Form.Group as={Row} className="mb-3" controlId={`formPlaintextPassword-job-${index}`}>
                                                <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                                    อาชีพ :
                                                </Form.Label>
                                                <Col sm="8">
                                                    <Form.Control
                                                        type="text"
                                                        value={form[`FamJob${index + 1}`]}
                                                        onChange={(e) => handleChange(e, `FamJob${index + 1}`)}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            ))}

                        </div>
                    </CardContent>
                </Collapse>
            </Card >
        </div >
    )
}

export default FamilyCard
