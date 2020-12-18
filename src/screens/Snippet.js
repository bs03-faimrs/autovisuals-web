import React, { useState } from 'react'

import SampleVideo from '../assets/videos/Twemd5.mp4'
import './Snippet.css'

const Snippet = () => {
    const [show, setShow] = useState(true)

    const buttonHandler = () => {
        setShow(false)
    }

    const videoSlideHandler = () => {
        setShow(true)
    }


    return (
        <>
         <div className="container">
            <section className="row">
            <div className="mx-auto">
                <div className={`${show ? 'button__container d-block' : 'hide'}`} onClick={buttonHandler}>
                    <i className='fas fa-play fa-2x floatingButton'></i>
                </div>
            </div>
            </section>
        
            <section className="row">
                <div 
                className={`${show ? 'hide': 'col-md-8 mx-auto embed-responsive embed-responsive-16by9 video__container'}`}>
                    <iframe 
                    className='embed-responsive-item video__item slideVideoOut' title="sampleVideo" src={SampleVideo} allowFullScreen></iframe>
                   
                    <div className="verticalLine">
                        <span 
                        onClick= {videoSlideHandler}
                        className='caret'><i className="fa fa-caret-left fa-5x"></i></span>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Snippet
