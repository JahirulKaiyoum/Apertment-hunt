import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import apartments from '../../fakedata';
import Banner from '../Home/Banner/Banner';
import NavBar from '../Home/Nav/NavBar';
import './apartmentDetails.scss'

const ApartmentDetails = () => {
    const { appId } = useParams()
    const [data, setData] = useState({});
    
    const singleApartment = apartments.find(apartment => apartment.id === appId);

    const { id, serviceTitle, price, location, noOfBedRoom, noOfBathRoom, thumbnail, description, rent, serviceCharge, securityDeposite, flatReleasePolicy, address, flatSize, room, Floor, facilities, additionalfacilities } = singleApartment;
    
    const handleChange = (e) => {
        setData({ [e.target.name]: e.target.value});
    };
    const handleRegister = (e) => {
        e.preventDefault();
        
      };
    
    
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <section style={{paddingTop:"20px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col">
                                <img src={thumbnail} alt="img" className="img-fluid" />
                                </div>
                            </div>
                            <div className="row" style={{paddingBottom:"10px",paddingTop:"10px"}}>
                                <div className="col-md-3">
                                <img src="https://i.ibb.co/TYQNDyh/Rectangle-410.png" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-md-3">
                                <img src="https://i.ibb.co/C1Hsj0m/Rectangle-409.png" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-md-3">
                                <img src="https://i.ibb.co/GMrMfy5/Rectangle-408.png" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-md-3">
                                <img src="https://i.ibb.co/vX8c1x5/Rectangle-407.png" className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                <h1>{serviceTitle}</h1>
                                </div>
                                <div className="col-md-2">
                                    <h1>{price}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h2>Price details:</h2>
                                    <p>Reent/Month:{rent}</p>
                                    <p>service Charge:{ serviceCharge }</p>
                                    <p>Security Deposite:{securityDeposite}</p>
                                    <p>Flat Release Policy:{flatReleasePolicy}</p>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                    <h2>Property Details-</h2>
                                    <p>Address: {address}</p>
                                    <p>Flat Size: {flatSize}</p>
                                    <p>Floor: {Floor}</p>
                                    <p>Room: {room}</p>
                                    <p>Facilities:{facilities}</p>
                                    <p>Additional Facilities: {additionalfacilities}</p>
                                </div>
                            
                            </div>
                        
                        </div>
                        <div className="col-md-4">
                        <form className="form-box">
                        
                        <input
                          type="text"
                          name="name"
                          value=""
                          placeholder="Full Name"
                          className="form-control"
                          onChange={(e) => handleChange(e)}
                                />
                        <input
                          type="number"
                          name="phone"
                          value=""
                          placeholder="Phomne no"
                          className="form-control"
                          onChange={(e) => handleChange(e)}
                        />
                        <input
                          type="email"
                          name="email"
                          value=""
                          placeholder="Email"
                          className="form-control"
                          onChange={(e) => handleChange(e)}
                        />
                        <input
                          type="text"
                          name="description"
                          placeholder="Description"
                          className="form-control"
                                    onChange={(e) => handleChange(e)}
                                    style={{ height: "100px" }}
                        />
                        
                       
                        <button
                          className="btn btn-primary form-control "
                          type="submit"
                          onClick={handleRegister}
                        >
                          Register
                        </button>
                      </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApartmentDetails;