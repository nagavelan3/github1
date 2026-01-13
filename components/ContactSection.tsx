"use client";
import axios from "axios";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setSuccessMessage("");

        try {
            const response = await axios.post("http://localhost:8000/mail-server/send-email.php", {
                toEmail: "nagavelan2005@gmail.com",
                toName: "Nagavelan",
                subject: formData.subject,
                htmlBody: `
<html>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0"
            style="background:#ffffff; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.08); overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#ec48d9; color:#ffffff; padding:16px 24px; font-size:18px; font-weight:bold;">
                New Contact Form Submission
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#333333;">
                  
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; width:120px;">Name:</td>
                    <td style="padding:8px 0;">${formData.name}</td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:bold;">Email:</td>
                    <td style="padding:8px 0;">${formData.email}</td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0; font-weight:bold; vertical-align:top;">
                      Message:
                    </td>
                    <td style="padding:12px 0; line-height:1.6;">
                      ${formData.message}
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb; padding:12px 24px; font-size:12px; color:#6b7280; text-align:center;">
                This email was automatically generated from the website contact form
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            setStatus("success");
            setSuccessMessage(response.data.message);
            setFormData({ name: "", email: "", subject: "", message: "" });

        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
        finally {
            setStatus("")
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Map */}
                    <div className="w-full h-full min-h-[400px] lg:min-h-full bg-gray-200 rounded-lg overflow-hidden shadow-sm relative">
                        <iframe
                            src="https://maps.google.com/maps?q=Cmp+Builders+And+Developers&hl=en&z=17&output=embed"
                            style={{ border: 0, width: "100%", height: "100%" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Right Column: Info Cards & Form */}
                    <div className="space-y-8">

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-4 shadow-sm rounded-lg flex items-start space-x-4">
                                <div className="bg-primary-light p-3 rounded-full text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                                    <p className="text-gray-500 text-sm">#319, First floor, Katchery Street, Kattumannarkoil, Cuddalore – 608301</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 shadow-sm rounded-lg flex items-start space-x-4">
                                <div className="bg-primary-light p-3 rounded-full text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-500 text-sm">cmpnovel@gmail.com</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 shadow-sm rounded-lg flex items-start space-x-4">
                                <div className="bg-primary-light p-3 rounded-full text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Call</h3>
                                    <p className="text-gray-500 text-sm">9486960256</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 shadow-sm rounded-lg flex items-start space-x-4">
                                <div className="bg-primary-light p-3 rounded-full text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Open Hours</h3>
                                    <p className="text-gray-500 text-sm">Monday-Friday: 9AM - 6PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100">
                            <div className="border-l-4 border-primary pl-4 mb-8">
                                <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
                            </div>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                               <b>Ready to turn your vision into reality?</b><br></br><br></br>

                                Get in touch with us to discuss your project, ask questions, and receive personalized construction solutions tailored to your needs.
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary transition-colors"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary transition-colors"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary transition-colors"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Message"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary transition-colors resize-none"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className={`px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-hover transition-colors shadow-md hover:shadow-lg text-base ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>
                                {status === "success" && (
                                    <p className="text-green-600 mt-2">{successMessage || "Message sent successfully!"}</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-600 mt-2">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div >
                </div >
            </div >
        </section >
    );
}
