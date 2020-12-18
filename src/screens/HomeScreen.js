import React from 'react'

import Header from '../components/Header'
// import Loader from '../components/Loader'
// import Footer from '../components/Footer'
import MainLayout from '../Utilities/MainLayout'
import { Link } from 'react-router-dom'

import SampleVideo from '../assets/videos/Twemd5.mp4'

const HomeScreen = () => {

    return(
        <>
            <Header />
            <hr />
            <section className='d-flex'>
                <div className='ml-auto' >
                    <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                </div>
                <div className='access'>
                    <Link to='/access' style={{ textDecoration: 'none' }}>Customise access</Link>
                </div>
                <div>
                    <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
                </div>
                <div className='ml-auto pr-4'>
                    <i className="far fa-user"></i>
                </div>
            </section>
            <hr />
            <MainLayout>
                <div className='row h-100'>
                    <div className='col'>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Audio</h5>
                                <p className="card-text">Narration Sentiment</p>
                                <p className="card-text">Background Music</p>
                                <p className="card-text">Narration voice</p>
                                <h5 className="card-title">Video</h5>
                                <p className="card-text">Edit Image Assets</p>
                                <p className="card-text">Animation Style</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className="card h-100">
                            <div className="card-body">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title='video' className="embed-responsive-item" src={SampleVideo} allowfullscreen />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Paragraph 1</h5>
                                <p className="card-text">Scene 1</p>
                                <p className="card-text">Scene 2</p>
                                <h5 className="card-title">Paragraph 2</h5>
                                <p className="card-text">Scene 3</p>
                                <p className="card-text">Scene 4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
            {/* <Footer /> */}
        </>
    )
}

export default HomeScreen