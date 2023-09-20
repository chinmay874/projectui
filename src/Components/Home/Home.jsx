import React from 'react';
import "./Home.css"
import { Navigate } from '../Navigate/Navigate';
import { Card } from '../Card/Card';

export const Home = () => {
  return (
    <div className='Container'>
        <div>
            <div className='head1'>
            <img className='img' src='logo512.png' alt='logo'/>
            </div>
        </div> 
        <div className='boddy'>
           <div className='navigate'>
            <div className='profile'>
                <img className='imgpro' src='logo.jpg' alt='img'/>
                <h3 style={{margin:'0px'}}>Ram Mohan ></h3>
                <h5>rammohan2@gmail.com</h5>
            </div>
            <div className='navig'>
                <Navigate/>
                <div className='button'>
            <button>Logout</button>
            </div>
            </div>
            
            
           </div>
           <div>
            <h2 style={{marginLeft:"3rem"}}>Choose a plan that's just right for you</h2>
           <div className='crd'>

            <Card/>
           </div>
           </div>
        </div>   
    </div>
  )
}
