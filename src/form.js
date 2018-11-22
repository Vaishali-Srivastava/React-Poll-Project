import React, { Component } from 'react';
import {Col, FormControl, FormGroup, Form, ControlLabel, Checkbox, Button} from 'react-bootstrap';
import './css/form.css';

class PollForm extends Component {
  render() {
    return (
      <div className="bg-wrap">
        <div className="container">
            <div className="form-wrapper">
                    <Form className="clearfix form-panel" autoComplete="off">
                        <Col sm={12}>
                            <h4 className="form-title" >Create your New Poll</h4>
                        </Col>
                        <FormGroup controlId="title" className="clearfix">
                            <Col componentClass={ControlLabel}  sm={12} className="text-left label-field">
                                Title
                            </Col>
                            <Col sm={12}>
                                <FormControl type="text" placeholder="Enter Title" className="input-field"/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="poll-item1" className="clearfix">
                            <Col componentClass={ControlLabel} sm={12} className="text-left label-field">
                                Poll Item 1
                            </Col>
                            <Col sm={11}>
                                <FormControl type="text" placeholder="Enter Poll Item 1" className="input-field"/>
                            </Col>
                            <Col sm={1}>
                                <span className="circle-plus">
                                    <i className="fa fa-plus-circle"></i>
                                </span>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="poll-item2" className="clearfix">
                            <Col componentClass={ControlLabel} sm={12} className="text-left label-field">
                                Poll Item 2
                            </Col>
                            <Col sm={11}>
                                <FormControl type="text" placeholder="Enter Poll Item 2" className="input-field"/>
                            </Col>
                            <Col sm={1}>
                                <span className="circle-plus">
                                    <i className="fa fa-plus-circle"></i>
                                    <i className="fa fa-times-circle"></i>
                                </span>
                            </Col>
                        </FormGroup>

                        <FormGroup className="clearfix">
                            <Col smOffset={0} sm={12} className="mt-6x">
                                <Button type="button" bsStyle="primary" bsSize="large" className="btn-custom">Create Poll</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
        </div>
      </div>
    )
  }
}

export default PollForm;