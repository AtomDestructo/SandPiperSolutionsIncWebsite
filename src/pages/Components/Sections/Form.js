import React from "react";

export default function ContactUs() {


    return (

        <div class="container row">
            <div class="col-3">
            <form name="pmForm" id="pmForm" method="post">  
                <label>Name</label>
                <input type="text" maxlength="32" name="contact_number" id="nameFrom" pattern="[a-z]" required aria-required="true" size="32"/><br/>
                <label>Subject</label>
                <input type="text" name="Sandpiper" id="subject" maxlength="32" pattern="[a-z]" size="32" required/><br/>
                <label>Message</label>
                <textarea id="message" rows="4" cols="32" maxlength="350"/><br/>
                <button type="button" id="sendButton" onClick={sendMail}>Send Message</button>
            </form>
            </div>
        </div>
    );

    function clear(){
        document.getElementById("subject").value = "";
        document.getElementById("nameFrom").value = "";
        document.getElementById("message").value = "";
    }
    function sendMail() {
        var emailTo = 'edoucett@hotmail.com';
        var subject = document.getElementById("subject").value;
        var nameFrom = document.getElementById("nameFrom").value;
        var message = document.getElementById("message").value;

        if (nameFrom === ''){
            alert('Please enter your name');
            return false;
        }
        if (subject === ''){
            alert('Please enter a subject');
            return false;
        }
        if (message === ''){
            alert('Please enter message');
            return false;
        }

        window.open('mailto:'+emailTo+'?subject='+subject+'&body=Dear SandPiper Team:%0D%0D'+message+'%0D%0DSincerely,%0D'+nameFrom);
        clear();
    }
  }