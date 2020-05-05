import React, { useState } from 'react'
import medibuddy from './Images/medibuddy.png'
import Reliance from './Images/Reliance.png'
import max from './Images/max.png'
import flipkart from './Images/flipkart.png'
import amazon from './Images/amazon.png'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'




function CouponsCode() {
    return (
        <div className="container-fluid">
            <Coupons />
            
        </div>
    )
}


class Coupons extends React.Component {
    constructor() {
        super();
        this.state = {
            showdialog: false,
            coupon: '',
        }
    }

    fetchCode = (input) => {
        this.showDialog();
        return (
            axios.get('http://localhost:8080/findByName/' + input, { headers: { 'content-type': 'application/json' } }).
                then(resp => {
                  
                    this.setState({
                        coupon: resp.data.couponCode
                                       })
                    console.log("json value is"+JSON.stringify(resp))
                    
                })
        )
    }

    showDialog = () => {
        this.setState({
            showdialog: true
        })
    }

    toggleClose = () => {
        this.setState(
            {
                showdialog: false
            }
        )
    }
    modalFunction = () => {

    }
    

    render() {
        return (
            <div id="couponsgroup">
                <div className="card-deck">
                    <div className="card border border-success col-sm-3 " id="coupons">
                        <div className="card-body">
                            <h5 className="card-title">30% OFF</h5>
                            <img id="amazon" src={amazon} alt="Amazon" />
                            <p className="card-text">15% OFF on minimum purchase of 1500. Hurry up.</p>
                            <button id="showcode" type="button" className="btn btn-sm" onClick={() => this.fetchCode('amazon')}>
                                <span className="font-weight-bold">Show Coupon Code</span></button>
                         
                            <React.Fragment>
                                <Modal className="modal" id="showcode" show={this.state.showdialog} onClose={this.toggleClose}>
                                    <Modal.Header>
                                        <Modal.Title><h5 id="headerCoupon">Coupon code</h5></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><span id="dyncoupon">{this.state.coupon}</span></Modal.Body>
                                    <Modal.Footer>
                                        <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={this.toggleClose}>Close</button>
                                    </Modal.Footer>
                                </Modal>
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="card border border-success col-sm-3" id="coupons">
                        <div className="card-body">
                            <h5 className="card-title">Rs.100 Cashback</h5>
                            <img id="medibuddy" src={medibuddy} alt="medibuddy" />
                            <p className="card-text">Rs.200 Cashback on flash sale Medicines.</p>
                            <button id="showcode" type="button" className="btn btn-sm" onClick={() => this.fetchCode('medibuddy')}>
                                <span className="font-weight-bold">Show Coupon Code</span></button>
                        </div>
                    </div>

                    <div className="card  border border-success col-sm-3" id="coupons">
                        <div className="card-body">
                            <h5 className="card-title">10% OFF</h5>
                            <img id="max" src={max} alt="max" />
                            <p className="card-text">10% off on Prescriptions Jeans.</p>
                            <button id="showcode" type="button" className="btn btn-sm" onClick={() => this.fetchCode('max')}><span className="font-weight-bold">Show Coupon Code</span></button>
                        </div>
                    </div>

                    <div className="card border border-success col-sm-3" id="coupons">
                        <div className="card-body">
                            <h5 className="card-title">30% OFF</h5>
                            <img id="flipkart" src={flipkart} alt="flipkart" />
                            <p className="card-text">30% off for flipstar users.</p>
                            <button id="showcode" type="button" className="btn btn-sm" onClick={() => this.fetchCode('flipkart')}>
                                <span className="font-weight-bold">Show Coupon Code</span></button>

                        </div>
                    </div>


                    <div className="card border border-success col-sm-3" id="coupons">
                        <div className="card-body">
                            <h5 className="card-title">Rs.50 Cashback</h5>
                            <img id="Reliance" src={Reliance} alt="Reliance" />
                            <p className="card-text ">Rs.50 Cashback for first three recharges.</p>

                            <button id="showcode" type="button" className="btn btn-sm" onClick={() => this.fetchCode('Reliance')}>
                                <span className="font-weight-bold">Show Coupon Code</span></button>
                        </div>
                    </div>

                </div>
            </div>)
    }
}

export default CouponsCode;