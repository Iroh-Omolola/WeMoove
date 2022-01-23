import React from 'react'
import {Row, Col , Form} from 'antd'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..

AOS.init();
function About() {
 
    return (
        <div className='login'>
            <Row gutter={16} className='d-flex align-items-center' >

                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='w-100'
                    data-aos='slide-right'
                    alt=''
                    data-aos-duration='1500'
                    src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
                     <h1 className='login-logo'>WeMoove</h1>
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5'
                        data-aos='fade-left'
                        data-aos-offset='200'
                        data-aos-duration='800'
                        data-aos-easing='ease-in-out-sine'
                    >
                         <h1>WeMoove</h1>
                         <hr />
                         
                         <p style={{"color":"grey"}}>
                         Rent a car of your choice in minutes.
                         WeMoove drivers safely transport passengers between places in their own vehicles.
                         You’ll always start and stop on your time—because with the WeMoove app, you’re in charge.
                         Plan Your Trip Hours and enjoy the trip with WeMoove cars
                        </p>
                       <hr/>
                         <Link to='/login'>
                         <div className='btn2'>Login</div>  
                         </Link>
                    </Form>
                </Col>


            </Row>

        </div>
    )
}

export default About