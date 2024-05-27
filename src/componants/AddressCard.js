import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Row, Form } from 'react-bootstrap';

import $ from 'jquery';
import 'select2'

function AddressCard({ expanded, setExpanded }) {
    const [provinces, setProvinces] = useState([]);
    const [amphures, setAmphures] = useState([]);
    const [tambons, setTambons] = useState([]);
    const [zipcodes, setZipcodes] = useState([]);

    const [Curprovinces, setCurProvinces] = useState([]);
    const [Curamphures, setCurAmphures] = useState([]);
    const [Curtambons, setCurTambons] = useState([]);
    const [CurZipcodes, setCurZipcodes] = useState([]);

    const [selected, setSelected] = useState({
        province_id: undefined,
        amphure_id: undefined,
        tambon_id: undefined,

        Curprovince_id: undefined,
        Curamphure_id: undefined,
        Curtambon_id: undefined,
    });


    const [form, setForm] = useState({
        // Address
        HouseNumber: "",
        Moo: "",
        Soi: "",
        Road: "",
        Province: "",
        District: "",
        Subdistrict: "",
        Zipcode: "",

        // Current Address
        CurHoseNumber: "",
        CurMoo: "",
        CurSoi: "",
        CurRoad: "",
        CurProvince: "",
        CurDistrict: "",
        CurSubdistrict: "",
        CurZipcode: ""
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

    // get province from api
    useEffect(() => {
        (() => {
            fetch(
                "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
            )
                .then((response) => response.json())
                .then((result) => {
                    setProvinces(result);
                    setCurProvinces(result);
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
        if (selected.Curprovince_id !== undefined) {
            const CurDistrict = Curprovinces.find(
                (item) => item.id === +selected.Curprovince_id
            )
            if (CurDistrict !== undefined) {
                setCurAmphures(CurDistrict.amphure)
            }
        }
    });
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
        if (selected.Curamphure_id !== undefined) {
            const CurSubDistrict = Curamphures.find(
                (item) => item.id === +selected.Curamphure_id
            )
            if (CurSubDistrict !== undefined) {
                setCurTambons(CurSubDistrict.tambon)
            }
        }
    });
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
        if (selected.Curtambon_id !== undefined) {
            const CurZipCode = Curtambons.find(
                (item) => item.id === + selected.Curtambon_id
            )
            if (CurZipCode !== undefined) {
                setCurZipcodes(CurZipCode)
            }
        }
    });

    $(document).ready(function () {
        // select2 province
        $('#single-select-province').select2({
            theme: "bootstrap-5",
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
        });

        $('#single-select-province').change(function () {
            // console.log($(this).val());
            const selectedProvinceId = $(this).val();
            setSelected({
                ...selected,
                province_id: selectedProvinceId,
            });
            const selectedProvince = provinces.find(item => item.id === +selectedProvinceId);
            setForm({
                ...form,
                Province: selectedProvince.name_th
            });
        });

        // select2 Current province
        $('#single-select-Curprovince').select2({
            theme: "bootstrap-5",
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
        });

        $('#single-select-Curprovince').change(function () {
            // console.log($(this).val());
            const selectedProvinceId = $(this).val();
            setSelected({
                ...selected,
                Curprovince_id: selectedProvinceId,
            });
            const selectedProvince = Curprovinces.find(item => item.id === +selectedProvinceId);
            setForm({
                ...form,
                CurProvince: selectedProvince.name_th
            });
        });
    });

    return (
        <div style={{ marginTop: "2rem" }}>
            <Card sx={{ padding: "1rem", backgroundColor: "#FAFAFA", borderRadius: "15px" }}>
                <CardActions disableSpacing onClick={handleExpandClick}>
                    <div style={{ width: "15%", textAlign: 'center' }}>
                        <p style={{ color: "#1B6BB2", fontWeight: "initial", borderBottom: "2px solid #1B6BB2" }}>
                            ที่อยู่
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
                        <div style={{ width: "fit-content" }}>
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextHouseNumber">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        เลขที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, HouseNumber: e.target.value })}
                                            value={form.HouseNumber} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเลขที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextMoo">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมู่ที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            onChange={e => setForm({ ...form, Moo: e.target.value })}
                                            value={form.Moo} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกหมู่ที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextSoi">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ตรอก/ซอย :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text"
                                            onChange={e => setForm({ ...form, Soi: e.target.value })}
                                            value={form.Soi} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextRoad">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ถนน :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text"
                                            onChange={e => setForm({ ...form, Road: e.target.value })}
                                            value={form.Road} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextProvince">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        จังหวัด <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <select
                                            className="form-select"
                                            id="single-select-province"
                                            value={selected.province_id}
                                            required
                                        >
                                            <option value=""></option>
                                            {provinces.map(item => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name_th}
                                                </option>
                                            ))}
                                        </select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกจังหวัด
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextamphures">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อำเภอ/เขต <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example"
                                            value={selected.amphure_id}
                                            style={{
                                                cursor: "pointer",
                                            }} required
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
                                                )
                                            )}>
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
                                        ตำบล/แขวง <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example"
                                            value={selected.tambon_id}
                                            style={{
                                                cursor: "pointer",
                                            }} required
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
                                                )
                                            )}
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
                                        รหัสไปรษณีย์ <span>*</span> :
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
                                            }} required>
                                            <option id='zipcode'>{zipcodes.zip_code}</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกรหัสไปรษณีย์
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
                                ที่อยู่ปัจจุบัน
                            </p>
                        </div>
                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCurHoseNumber">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        เลขที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required
                                            onChange={e => setForm({ ...form, CurHoseNumber: e.target.value })}
                                            value={form.CurHoseNumber} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเลขที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCurMoo">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมู่ที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required
                                            onChange={e => setForm({ ...form, CurMoo: e.target.value })}
                                            value={form.CurMoo} />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกหมู่ที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCurSoi">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ตรอก/ซอย  :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text"
                                            onChange={e => setForm({ ...form, CurSoi: e.target.value })}
                                            value={form.CurSoi} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCurRoad">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ถนน :
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text"
                                            onChange={e => setForm({ ...form, CurRoad: e.target.value })}
                                            value={form.CurRoad} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCurprovinces">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        จังหวัด <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <select
                                            className="form-select"
                                            id="single-select-Curprovince"
                                            value={selected.Curprovince_id}
                                            required
                                        >
                                            <option value=""></option>
                                            {Curprovinces.map(item => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name_th}
                                                </option>
                                            ))}
                                        </select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกจังหวัด
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCuramphures">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อำเภอ/เขต <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example"
                                            value={selected.Curamphure_id}
                                            style={{
                                                cursor: "pointer",
                                            }} required
                                            onChange={e => setSelected({
                                                ...selected,
                                                Curamphure_id: e.target.value
                                            },
                                                setForm(
                                                    {
                                                        ...form, CurDistrict: Curamphures.find(
                                                            (item) => item.id === +e.target.value
                                                        ).name_th
                                                    }
                                                ))}
                                        >
                                            <option ></option>
                                            {Curamphures.map((item) => {
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCurtambons">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ตำบล/แขวง <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example"
                                            value={selected.Curtambon_id}
                                            style={{
                                                cursor: "pointer",
                                            }} required
                                            onChange={e => setSelected({
                                                ...selected,
                                                Curtambon_id: e.target.value
                                            },
                                                setForm(
                                                    {
                                                        ...form, CurSubdistrict: Curtambons.find(
                                                            (item) => item.id === +e.target.value
                                                        ).name_th
                                                    }
                                                ))}
                                        >
                                            <option ></option>
                                            {Curtambons.map((item) => {
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCurZipcode">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        รหัสไปรษณีย์ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example"
                                            value={CurZipcodes.zip_code}
                                            onChange={e => setForm({ ...form, CurZipcode: e.target.value },
                                                setForm(
                                                    {
                                                        ...form, CurZipcode: CurZipcodes.zip_code
                                                    }
                                                )
                                            )}
                                            style={{
                                                cursor: "pointer",
                                            }} required>
                                            <option id='zipcode'>{CurZipcodes.zip_code}</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกรหัสไปรษณีย์
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

export default AddressCard