import React from 'react';
import './Contact.css';


class Contact extends React.Component {

    state = {
        fullName: '',
        email: '',
        message: ''
    }
    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        },()=>console.log(this.state))
    }

    onSubmit = e => {
        e.preventDefault();
        const formData = {
            fullName: this.state.fullName,
            email: this.state.email,
            message: this.state.message
        }

        fetch('/tt/contact',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(res=>{
            console.log('Response: ', res);
        })
        .catch((err)=>{
            console.log(err);
        })

        this.setState({
            fullName: '',
            email: '',
            message: ''

        })

        // console.log('formData: ' + formData);
    }

    render(){
        return(
           <div className='main-can'>
               <div className='main'>
                   <div className='bio-container'>
                       <div className='bio-header'>
                           Contact
                       </div>
                       <div className='contact'>
                           <form onSubmit={this.onSubmit}>
                               <div className='form-container'>
                                   <div className='form-group'>
                                       <label>Full Name:</label>
                                       <br/>
                                       <input type='text' className='form-control'
                                        value={this.state.fullName} onChange={this.onChange} name='fullName'/>
                                    </div>
                                    <div className='form-group'>
                                       <label>Email:</label>
                                       <br/>
                                       <input type='email' className='form-control'
                                        value={this.state.email} onChange={this.onChange} name='email'/>
                                    </div>
                                    <div className='form-group'>
                                       <label>Message:</label>
                                       <br/>
                                       <textarea className='form-control-text' rows='10' cols='50' 
                                       value={this.state.message} onChange={this.onChange} name='message'></textarea>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <button type='submit'>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                           {/* <div className='social-media'>
                               <div className='instagram'>
                                   fdfdfdfdsffsdfd
                               </div>
                               <div className='instagram'>
                                   fdfdfdfdsffsdfd
                               </div>
                               <div className='instagram'>
                                   fdfdfdfdsffsdfd
                               </div>
                           </div> */}
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default Contact;