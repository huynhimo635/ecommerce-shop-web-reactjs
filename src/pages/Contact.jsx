/* eslint-disable prettier/prettier */
import { useRef, useState } from "react"
import emailjs from "emailjs-com"

import Helmet from "../components/Helmet"
import Button from "../components/Button"

import Phone from "../assets/data-main/fake/img/contact/phone.png"
import Email from "../assets/data-main/fake/img/contact/email.png"
import Address from "../assets/data-main/fake/img/contact/address.png"

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        emailjs
            .sendForm(
                "service_39stvuk",
                "template_tkk6gou",
                formRef.current,
                "user_zS1Z8PqYwVmPQKPnlV8XT"
            )
            .then(
                result => {
                    console.log(result.text)
                    alert("Success")
                },
                error => {
                    console.log(error.text)
                }
            )
    }

    return (
        <Helmet title="Contact">
            <div className="c">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's discuss your project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" />
                                <span>+1 1234 556 75</span>
                            </div>
                            <div className="c-info-item">
                                <img className="c-icon" src={Email} alt="" />
                                <span>contact@Nguyen</span>
                            </div>
                            <div className="c-info-item">
                                <img className="c-icon" src={Address} alt="" />
                                <span>98 Ngo Tat To</span>
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What’s your story?</b> Get in touch. Always
                            available for freelancing if the right project comes
                            along. me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input
                                style={{ backgroundColor: "#333" }}
                                type="text"
                                placeholder="Name"
                                name="user_name"
                            />
                            <input
                                style={{ backgroundColor: "#333" }}
                                type="text"
                                placeholder="Subject"
                                name="user_subject"
                            />
                            <input
                                style={{ backgroundColor: "#333" }}
                                type="text"
                                placeholder="Email"
                                name="user_email"
                            />
                            <textarea
                                style={{ backgroundColor: "#333" }}
                                rows="5"
                                placeholder="Message"
                                name="message"
                            />
                            <Button size="md">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Contact
