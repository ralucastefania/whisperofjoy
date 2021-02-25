import React from "react";
import "../style/Contact.css";

export default function Contact() {
    return(
        <div>
            <h1 className="contact-title">Contact</h1>

            <p class="centered">
            Wanna say hello, share your thoughts or talk a bit more about the monkeys you found on my site? Don't be afraid to use the contact form bellow:
            </p>

    <form action="fake-actionpage.html">

        <div>
            <label for="fname" className="label-width">First Name:</label>
            <input type="text" name="fname" id="fname" required/>
        </div>

        <div>
            <label for="lname" className="label-width">Last Name:</label>
            <input type="text" name="lname" id="lname" required/>
        </div>

        <div>
            <label for="email" className="label-width">Email Address:</label>
            <input type="email" name="email" id="email" required/>
        </div>

        <div>
            <label for="howdidyouhear" className="label-width">Share your thoughts with me:</label>
            <textarea name="howdidyouhear" id="howdidyouhear" cols="30" rows="10" placeholder="Just write it down..."></textarea>
        </div>

        <div>
            <span className="label-width"></span>
            <input type="submit" value="Send"/>
        </div>
    </form>
        </div>
    )
}

