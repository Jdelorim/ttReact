'use strict'
const ttRoutes = require('express').Router();

module.exports = app => {
    ttRoutes.route('/contact').post((req, res) => {
        console.log('in the route');
        console.log(req.body);
        
    if(process.env.NODE_ENV === 'production') {
        const body = req.body.message;
        const email = req.body.email;
        const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
        const request = sg.emptyRequest({
         method: 'POST',
         path: '/v3/mail/send',
         body: {
           personalizations: [
             {
               to: [
                 {
                   email: 'joshuadelorimier@gmail.com'
                 },
               ],
               subject: `TRASHTRASH: New message from ${req.body.fullName}`
             },
           ],
           from: {
             email: email
           },
           content: [
             {
               type: 'text/html',
               value: body + email
                       
               },
           ],
         },
       });
       
       sg.API(request)
         .then(response => {
           console.log(response.statusCode);
           console.log(response.body);
           console.log(response.headers);
         })
         .catch(error => {
           console.log(error.response.statusCode);
         });

        } else {
            res.send({msg: 'sent!'});
        }
         
});
       
        


    app.use('/tt', ttRoutes);

}
