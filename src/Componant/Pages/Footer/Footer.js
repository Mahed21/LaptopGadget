import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {

  
    const element = <FontAwesomeIcon icon={faLocationDot} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const contact = <FontAwesomeIcon icon={faAddressBook} />
    return (
       <div className='footer'>
        
        <div className='container'>
        <div className='row pt-5'>
            <div className='mb-1 col-lg-4'>
              <h4>Laptop Gadget</h4>
              <p>lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className='mb-1 col-lg-4'>
              <h4>Contact US</h4>
              <h5 className='mb-3'>{element}Address : <span className='footer-text'>Donaram, Fenchugonj, Sylhet</span></h5>
              <h5 className='mb-3'>{email} Email: <span className='footer-text'>mahed255261@gmail.com</span> </h5>
              <h5 className='mb-3's>{contact} Contact : <span className='footer-text'>01759704872</span></h5>
              <h5>{contact} Fex : <span className='footer-text'>: (08) 8827 633354</span></h5>
            </div>
            <div className='mb-1 col-lg-2'>
              <h4>Information</h4>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Home</p>
              <p>Order</p>
              <p>Payment</p>
              <p>Supply</p>
            </div>
            <div className='mb-1 col-lg-2'>
              <h4>My Account</h4>
              <p>Delivery</p>
              <p>legal Notice</p>
              <p>About Us</p>
              <p>Order</p>
              <p>Payment</p>
              <p>Supply</p>
            </div>
           
        </div>
        </div>
        
        <hr/>
        <div className='container footer-end'>
             <div>
             <div className='mb-1 d-flex'>
             <h5 className='me-2 footer-li'>Home</h5>
             <h5 className='me-2 footer-li'>Article</h5>
             <h5 className='me-2 footer-li'>Impression</h5>
              <h5 className='footer-li'>Review</h5>
             </div>
             <p className='me-5'>Copywright@2022LaptopGadget.All right reserved</p>
           
            <div className='mb-2'>
                <i class="fab fa-google me-2"></i>
                <i class="fab fa-facebook me-2"></i>
                <i class="fab fa-twitter me-2"></i>
                <i class="fab fa-instagram me-2"></i>
                <i class="fab fa-youtube me-2"></i>
                <i class="fab fa-skype me-2"></i>
            </div>
            
             </div>
             
        </div>
        </div>
      
    

      
            
      
    );
};

export default Footer;