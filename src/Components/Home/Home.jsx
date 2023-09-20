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
            </div>
            <div className='navig'>
                <Navigate/>
            </div>
            <div className='button'>
            <button>Logout</button>
            </div>
            
           </div>
           <div className='crd'>
            <Card/>
           </div>
        </div>   
    </div>
  )
}
