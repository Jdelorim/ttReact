import React from 'react';
import './Footer.css';


class Footer extends React.Component{

    render(){
        return(
            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-left'>
                        <div className='footer-phone'>
                             302.494.3242
                        </div>
                    <div className='footer-email'>
                        JoshuadeLorimier@gmail.com
                    </div>
                    <div className='footer-devsite'>
                        <a href='https://www.joshuadelorimier.com' target='_blank' rel="noopener noreferrer">www.joshuadelorimier.com</a>
                    </div>
                </div>
                <div className='footer-mid'>
                    TRASHTRASH © 2020
                </div>
                <div className='footer-right'>
                    <span className='instagram-icon-link'>
                        <a href='https://www.instagram.com/trashtrashvisuals/' target='_blank' rel="noopener noreferrer"><img src='/img/instagramIcon.png' width='60' alt='instagram trashtrash' /></a>
                    </span>
                    <span className='twitter-icon-link'>
                        <a href='https://twitter.com/JoshuaDeLorimi1/' target='_blank' rel="noopener noreferrer"><img src='/img/twitter_PNG1.png' width='50' alt='joshua deLorimier twitter' /></a>
                    </span>
                </div>
            </div>
         </div>
        )
    }
}

export default Footer;