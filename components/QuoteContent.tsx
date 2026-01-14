"use client";


import { useSearchParams } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import CustomSelect from "./CustomSelect";

export default function QuoteContent() {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get("service");

    const defaultService = serviceParam === "industrial" ? "industrial" : "";

    const [category, setCategory] = useState(defaultService);
    const [timeline, setTimeline] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        description: "",
    });
    const [status, setStatus] = useState("");

    const categoryOptions = [
        { value: "commercial", label: "Commercial Complexes & Office Spaces" },
        { value: "residential", label: "Residential Projects" },
        { value: "interior", label: "Renovation & Interior Design Solutions" },
        { value: "turnkey", label: "Turnkey Project Management" },
        { value: "structural", label: "Architectural & Structural Consultancy" },
        { value: "industrial", label: "Industrial Construction & Warehouses" },
    ];

    const timelineOptions = [
        { value: "immediate", label: "Immediate Start" },
        { value: "1-3months", label: "1-3 Months" },
        { value: "3-6months", label: "3-6 Months" },
        { value: "flexible", label: "Flexible" },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async () => {
        setStatus("sending");

        // Get readable labels for select fields
        const categoryLabel = categoryOptions.find(opt => opt.value === category)?.label || category;
        const timelineLabel = timelineOptions.find(opt => opt.value === timeline)?.label || timeline;

        try {
            const response = await axios.post("/mail-server/send-email.php", {
                toEmail: "nagavelan2005@gmail.com",
                toName: "Nagavelan",
                subject: "New Detailed Quote Request",
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
                New Quote Request
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#333333;">
                  
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; width:140px;">Name:</td>
                    <td style="padding:8px 0;">${formData.name}</td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:bold;">Email:</td>
                    <td style="padding:8px 0;">${formData.email}</td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:bold;">Phone:</td>
                    <td style="padding:8px 0;">${formData.phone}</td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:bold;">Category:</td>
                    <td style="padding:8px 0;">${categoryLabel}</td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:bold;">Timeline:</td>
                    <td style="padding:8px 0;">${timelineLabel}</td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:bold;">Budget:</td>
                    <td style="padding:8px 0;">${formData.budget}</td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0; font-weight:bold; vertical-align:top;">
                      Description:
                    </td>
                    <td style="padding:12px 0; line-height:1.6;">
                      ${formData.description}
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb; padding:12px 24px; font-size:12px; color:#6b7280; text-align:center;">
                This email was automatically generated from the website quote form
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
            });

            if (response.data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", budget: "", description: "" });
                setCategory("");
                setTimeline("");
            } else {
                setStatus("error");
            }

        } catch (error) {
            console.error("Error submitting quote:", error);
            setStatus("error");
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Info & Features */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-light text-gray-800 mb-6">
                                Transform Your Vision Into Reality
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To be a trusted leader in modern construction and development by delivering high-quality, innovative, and sustainable projects that create lasting value for clients, communities, and future generations. We strive to set benchmarks in construction excellence through reliability, integrity, and continuous improvement.
                            </p>
                            <div className="mt-8 mb-4">
                                <h3 className="text-2xl font-light text-gray-800">Values</h3>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Value 1: Quality & Precision */}
                            <div className="flex items-start">
                                <div className="text-primary mt-1 mr-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-normal text-gray-800 mb-2">Quality & Precision</h3>
                                    <p className="text-gray-500">Delivering high standards of workmanship with attention to detail.</p>
                                </div>
                            </div>

                            {/* Value 2: Transparency & Trust */}
                            <div className="flex items-start">
                                <div className="text-primary mt-1 mr-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-normal text-gray-800 mb-2">Transparency & Trust</h3>
                                    <p className="text-gray-500">Maintaining honest communication and clear processes.</p>
                                </div>
                            </div>

                            {/* Value 3: Innovation */}
                            <div className="flex items-start">
                                <div className="text-primary mt-1 mr-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-normal text-gray-800 mb-2">Innovation</h3>
                                    <p className="text-gray-500">Adopting modern design ideas and efficient construction methods.</p>
                                </div>
                            </div>

                            {/* Value 4: Sustainability */}
                            <div className="flex items-start">
                                <div className="text-primary mt-1 mr-4">
                                    {/* Globe Icon for Sustainability/Global Impact */}
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-normal text-gray-800 mb-2">Sustainability</h3>
                                    <p className="text-gray-500">Using eco-friendly practices and responsible construction solutions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100 space-y-4">
                            <div className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-lg">9486960256</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                                </svg>
                                <span className="text-lg">cmpnovel@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Quote Form */}
                    <div className="bg-white">
                        <h2 className="text-3xl font-light text-gray-800 mb-4">Get Your Custom Quote</h2>
                        <p className="text-gray-500 mb-8">
                            Share your project details and receive a comprehensive estimate tailored to your specific needs.
                        </p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 9876543210"
                                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Project Category</label>
                                    <CustomSelect
                                        id="category"
                                        options={categoryOptions}
                                        value={category}
                                        onChange={setCategory}
                                        placeholder="Choose project type"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Expected Timeline</label>
                                    <CustomSelect
                                        id="timeline"
                                        options={timelineOptions}
                                        value={timeline}
                                        onChange={setTimeline}
                                        placeholder="Select timeline"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Project Budget</label>
                                    <input
                                        type="text"
                                        id="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        placeholder="Budget range (optional)"
                                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe your project vision, requirements, materials preferences, and any specific details that will help us provide an accurate estimate..."
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={status === "sending"}
                                    className={`bg-primary hover:bg-primary-hover text-white font-medium py-4 px-8 rounded transition w-auto inline-flex items-center ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
                                >
                                    {status === "sending" ? "Sending Request..." : "Request Detailed Quote"}
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                {status === "success" && (
                                    <p className="text-green-600 mt-2">Quote request sent successfully!</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-600 mt-2">Failed to send request. Please try again.</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
