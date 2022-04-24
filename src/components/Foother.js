import React from "react";
import "./Foother.css";

export default function Foother()
{
    return(
        <footer>
            <div className="contact">
                <a className="contact-icon" href="https://wa.me/+972547329884" title="whatsapp" tabindex="02">
                    <i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                <a className="contact-icon" href="mailto:avirandabush@gmail.com" title="mail" tabindex="03">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                <a className="contact-icon" href="tel:0547329884" title="054-7329884" tabindex="05">
                    <i className="fa fa-phone-square" aria-hidden="true"></i></a>
            </div>
        </footer>
    )
}