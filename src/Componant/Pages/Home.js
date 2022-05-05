import React from 'react';
import { Button, Form } from 'react-bootstrap';
import img from '../../1.jpg';
import img1 from '../../2.jpg';
import img2 from '../../3.jpg';
import Categorie from './Categorie/Categorie';
import Footer from './Footer/Footer';
import bannerImg from '../../banner.png'
import gallery from '../../image/1.jpg'
import gallery8 from '../../image/2.jpg'
import gallery1 from '../../image/3.jpg'
import gallery2 from '../../image/4.jpg'
import gallery3 from '../../image/5.jpg'
import gallery4 from '../../image/6.jpg'
import gallery5 from '../../image/7.jpg'
import gallery6 from '../../image/8.jpg'
import gallery7 from '../../image/9.jpg'
import './Home.css'

const Home = () => {
    return (
<div>
    <div className='container'>
        {/* banner part */}
        <div className='row'>
        <div className='col-lg-8 col-12 mt-2'>
        
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={img} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" className='carosel-button'>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" className='carosel-button'>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
      <div className='col-lg-4 col-12 mt-2 form'>
     <div className="pt-5">
       <>
            <Form.Control
                type="text"
                placeholder="Disabled input"
                aria-label="Disabled input example"
                disabled
                readOnly
            />
            <br />
            <Form.Control
                type="text"
                placeholder="Disabled readonly input"
                aria-label="Disabled input example"
                readOnly
            />
            <div  className='d-flex justify-content-center'>
            <Button className='mt-5 form-button'>View Comparison</Button>
            </div>
      </>
      </div>
      </div>
 </div>
</div>
 {/* banner part end */}
  {/* marqueetext */}
    <div className='mt-5 marquee'>
    <marquee width="40%" direction="right" height="25px">
    This is a sample scrolling text that has scrolls texts to right.
    </marquee> 
    </div>
    {/* marqueetext end */}

    {/* banner */}
    <div className='banner mt-4 mb-4'>
        <div>
            <p>WE MAKE IT EASY TO EXPRIENCE CREATIVITY</p>
            <h3>Newly Update Configertion Laptop</h3>
            <p>Welcome to the home of women's fashion clothing & accessories at Italy</p>
            <button className="btn2 ps-3 pe-3 pt-2 pb-2">Enroll Now</button>
        </div>
        <div>
            <img src={bannerImg} className="" alt=""/>
        </div>

    </div>
    {/* banner end */}

    <Categorie></Categorie>
    {/* Gallery */}
    <div className='Gallery mb-5 mt-3'>
        <div className="row row-cols-lg-3 galleryRow mb-4">
            <img src={gallery} alt=""/>
            <img src={gallery1} alt=""/>
            <img src={gallery2} alt=""/>
        </div>
        <div className="row row-cols-lg-3 galleryRow mb-4">
            <img src={gallery3} alt=""/>
            <img src={gallery4} alt=""/>
            <img src={gallery5} alt=""/>
        </div>
        <div className="row row-cols-lg-3 galleryRow">
            <img src={gallery6} alt=""/>
            <img src={gallery7} alt=""/>
            <img src={gallery8} alt=""/>
        </div>

    </div>
    {/* Gallery End */}

    <Footer></Footer>
</div>
    );
};

export default Home;