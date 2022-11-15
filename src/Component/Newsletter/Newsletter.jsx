import React from 'react'
import './newsletter.css'
function Newsletter() {
    return (
        <div className='newsletter_wrapper'>
            <div className="newsletter">
                <h1>Stay up to date</h1>
                <p>Join my newsletter for up to date information about current or future promotion.</p>
                    <div className="subscribe">
                        <input type="text" name="" id="" className='subscribe-field' placeholder='Name'/>
                        <input type="text" name="" id=""  className='subscribe-field' placeholder='Email'/>
                        <button className='subscribe-btn'>Subscribe</button>
                    </div>
            </div>
        </div>
    )
}

export default Newsletter
