import React from 'react';
import './Categorie.css'
import img from '../../../Hp.jpg'
import img1 from '../../../lenovo.jpg'


const Categorie = () => {
    return (
        <div className='mb-4 mt-5'>
           
        <div className='row row-cols-lg-5'>
           <div className='card ms-5 mb-3'>
           <img src={img1} alt=""  className='mx-auto d-block'/>
           <button className='btn1 mb-2'>lenovo</button>
           </div>
           <div className='card ms-5 mb-3'>
               <img src={img} alt=""  className='mx-auto d-block'/>
               <button className='btn1 mb-2'>HP</button>
             
           </div>
           <div className='card ms-5 mb-3'>
               <img src={img1} alt=""  className='mx-auto d-block'/>
               <button className='btn1 mb-2'>Asus</button>
              

           </div>
           <div className='card ms-5 mb-3'>
               <img src={img} alt=""  className='mx-auto d-block'/>
               <button className='btn1 mb-2'>Dell</button>
             

           </div>
           </div>


            {/* second row */}
            <div className='row row-cols-lg-5'>
           <div className='card ms-5 mb-3'>
           <img src={img1} alt=""  className='mx-auto d-block'/>
           <button className='btn1 mb-2'>lenovo</button>
           </div>
           <div className='card ms-5 mb-3'>
               <img src={img} alt=""  className='mx-auto d-block'/>
               <button className='btn1 mb-2'>HP</button>
             
           </div>
           <div className='card ms-5 mb-3'>
               <img src={img1} alt=""  className='mx-auto d-block'/>
               <button className='btn1 mb-2'>Asus</button>
              

           </div>
           <div className='card ms-5 mb-3'>
               <img src={img1} alt=""  className='mx-auto d-block'/>
               <button className='btn1 mb-2'>Asus</button>
              

           </div>
         
           </div>
         
            
        </div>
    );
};

export default Categorie;