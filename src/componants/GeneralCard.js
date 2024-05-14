import React from 'react'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Row, Form } from 'react-bootstrap';

function GeneralCard() {
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
    return (
        <div>
            <div>
                <Card sx={{
                    padding: "1rem", backgroundColor: "#FAFAFA", borderRadius: "15px", marginTop: "2rem"
                }}>
                    <CardActions disableSpacing onClick={handleExpandClick}>
                        <div style={{ width: "15%", textAlign: 'center' }}>
                            <p style={{ color: "#1B6BB2", fontWeight: "initial", borderBottom: "2px solid #1B6BB2" }}>
                                ข้อมูลทั่วไป
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
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2", width: "100%" }}>
                                            ทักษะการใช้งานคอมพิวเตอร์ สามารถใช้โปรแกรมอะไรได้บ้าง  <span>*</span> :
                                        </Form.Label>
                                        <Form.Control as="textarea" rows={3} required />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกทักษะการใช้งานคอมพิวเตอร์
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={12} lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2" }}>
                                            จุดมุ่งหมายงานอาชีพ (ระบุสายงาน/อาชีพที่สนใจ) <span>*</span> :
                                        </Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                    >
                                        <Form.Label column sm="1" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                            1 :
                                        </Form.Label>
                                        <Col sm="11">
                                            <Form.Control type="text" required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                    >
                                        <Form.Label column sm="1" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                            2 :
                                        </Form.Label>
                                        <Col sm="11">
                                            <Form.Control type="text" required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                    >
                                        <Form.Label column sm="1" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                            3  :
                                        </Form.Label>
                                        <Col sm="11">
                                            <Form.Control type="text" required />
                                            <Form.Control.Feedback type="invalid">
                                                กรุณากรอกจุดมุ่งหมายงานอาชีพ
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Row>
                                <Col sm={12} md={12} lg={6}>
                                    <Form.Group className="mb-3"
                                        controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2", width: "100%" }}>
                                            ทราบข่าวการรับสมัครนักศึกษาฝึกงานจากช่องทางใด <span>*</span> :
                                        </Form.Label>
                                        <Form.Control as="textarea" rows={3} required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกช่องทางการรับสมัครนักศึกษาฝึกงาน
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={12} lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                        style={{ display: "flex", justifyContent: "center" }}>
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2" }}>
                                            มีผู้ที่รู้จักในบริษัทหรือไม่ ถ้ามี (โปรดระบุ) ชื่อ :
                                        </Form.Label>
                                        <Form.Control type="text" style={{ width: "95%" }} />
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                        style={{ display: "flex", justifyContent: "center" }}>
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                            เกี่ยวข้องเป็น :
                                        </Form.Label>
                                        <Form.Select aria-label="Default select example" style={{
                                            width: "95%",
                                            cursor: "pointer",
                                        }}>
                                            <option>-</option>
                                            <option value="1">พ่อ/แม่</option>
                                            <option value="2">พี่/น้อง</option>
                                            <option value="3">ญาติ</option>
                                            <option value="4">เพื่อน</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={6}>
                                    <Form.Group className="mb-3"
                                        controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2", width: "100%" }}>
                                            สิ่งที่คาดหวังจากการฝึกงาน <span>*</span> :
                                        </Form.Label>
                                        <Form.Control as="textarea" rows={3} required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกสิ่งที่คาดหวังจากการฝึกงาน
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={12} lg={6}>
                                    <Form.Group className="mb-3"
                                        controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2", width: "100%" }}>
                                            ถ้าคุณได้ฝึกงานที่นี่ คุณจะช่วยเหลือหรือพัฒนาอะไร ให้กับสถานที่นี่ <span>*</span> :
                                        </Form.Label>
                                        <Form.Control as="textarea" rows={3} required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกสิ่งที่จะช่วยเหลือหรือพัฒนาให้กับสถานที่นี่
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12} md={12} lg={6}>
                                    <Form.Group className="mb-3"
                                        controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2", width: "100%" }}>
                                            งานอดิเเรก <span>*</span> :
                                        </Form.Label>
                                        <Form.Control as="textarea" rows={3} required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกงานอดิเรก
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={12} lg={6}>
                                    <Form.Group className="mb-3"
                                        controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='form-lebel' style={{ color: "#1B6BB2", width: "100%" }}>
                                            อุปนิสัย <span>*</span> :
                                        </Form.Label>
                                        <Form.Control as="textarea" rows={3} required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณากรอกอุปนิสัย
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>


                            <div style={{
                                width: "fit-content", textAlign: "center",
                                marginTop: "1rem"
                            }}>
                                <p style={{
                                    color: "#1B6BB2",
                                    fontWeight: "initial",
                                    borderBottom: "2px solid #1B6BB2",
                                    textAlign: "center"
                                }}>
                                    ช่องทางการติดต่อ
                                </p>
                            </div>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                            ID Line :
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" />
                                        </Col>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                            Instagram :
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" />
                                        </Col>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                            Facebook :
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" />
                                        </Col>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="4" style={{ color: "#1B6BB2", textWrap: "nowrap" }}>
                                            อื่นๆ :
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
        </div>
    )
}

export default GeneralCard