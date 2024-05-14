import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Row, Form } from 'react-bootstrap';

function AddressCard() {
    const [expanded, setExpanded] = React.useState(true);

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


    const [provinces, setProvinces] = useState([]);
    const [amphures, setAmphures] = useState([]);
    const [tambons, setTambons] = useState([]);
    const [zipcodes, setZipcodes] = useState([]);
    const [selected, setSelected] = useState({
        province_id: undefined,
        amphure_id: undefined,
        tambon_id: undefined
    });

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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        เลขที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเลขที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมู่ที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกหมู่ที่
                                        </Form.Control.Feedback>
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
                                        จังหวัด <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required
                                            onChange={e => setSelected({
                                                ...selected,
                                                province_id: e.target.value
                                            })}>
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อำเภอ/เขต <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required
                                            onChange={e => setSelected({
                                                ...selected,
                                                amphure_id: e.target.value
                                            })}
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ตำบล/แขวง <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required
                                            onChange={e => setSelected({
                                                ...selected,
                                                tambon_id: e.target.value
                                            })}
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        รหัสไปรษณีย์ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required>
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        เลขที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกเลขที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        หมู่ที่ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Control type="number" min={0} required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกหมู่ที่
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2" }}>
                                        ตรอก/ซอย  :
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
                                        จังหวัด <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required
                                            onChange={e => setSelected({
                                                ...selected,
                                                province_id: e.target.value
                                            })}>
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        อำเภอ/เขต <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required
                                            onChange={e => setSelected({
                                                ...selected,
                                                amphure_id: e.target.value
                                            })}
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        ตำบล/แขวง <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required
                                            onChange={e => setSelected({
                                                ...selected,
                                                tambon_id: e.target.value
                                            })}
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
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                        รหัสไปรษณีย์ <span>*</span> :
                                    </Form.Label>
                                    <Col sm="8"  >
                                        <Form.Select aria-label="Default select example" style={{
                                            cursor: "pointer",
                                        }} required>
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

                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default AddressCard