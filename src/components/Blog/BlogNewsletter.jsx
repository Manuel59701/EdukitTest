import React from 'react';
import './BlogNewsletter.css';

const BlogNewsletter = () => {
    return(
        <div className='blog-newsletter-section'>
            <div className='blog-newsletter-sub'>
                <div className='blog-newsletter-sub-container'>
                    <div className='blog-newsletter-sub-text'>
                        <h4>be part of our growing community</h4>
                        <p>Get monthly updates on our initiatives, success stories, campaigns, and how you can be part of the solution.</p>
                    </div>
                    <div className='blog-newsletter-sub-form'>
                        <div id="blog-subscribe">
                            <form action="">
                                <input type="email" name='email' placeholder='Enter your email'/>
                            </form>
                            <p>We care about your data in our <span id='blog-privacy'>privacy policy</span></p>
                        </div>
                        <div className="blog-subscribe-btn">
                            <button>Subscribe</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default BlogNewsletter;