"use client";

import { useState } from "react";
import axios from "axios";
import CustomSelect from "@/components/CustomSelect";

interface ConsultationFormProps {
    serviceTitle: string;
}

export default function ConsultationForm({ serviceTitle }: ConsultationFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        details: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const projectTypeOptions = [
        { value: "Commercial Complexes & Office Spaces", label: "Commercial Complexes & Office Spaces" },
        { value: "Residential Projects", label: "Residential Projects" },
        { value: "Industrial Construction & Warehouses", label: "Industrial Construction & Warehouses" },
        { value: "Renovation & Interior Design Solutions", label: "Renovation & Interior Design Solutions" },
        { value: "Turnkey Project Management", label: "Turnkey Project Management" },
        { value: "Architectural & Structural Consultancy", label: "Architectural & Structural Consultancy" },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, projectType: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        try {
            const htmlBody = `
                <h2>New Consultation Request - ${serviceTitle}</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Project Type:</strong> ${formData.projectType || 'Not Selected'}</p>
                <p><strong>Details:</strong><br/>${formData.details.replace(/\n/g, '<br/>')}</p>
            `;

            await axios.post("/mail-server/send-email.php", {
                toEmail: "nagavelan2005@gmail.com",
                toName: "Nagavelan",
                subject: `New Consultation Request - ${serviceTitle}`,
                htmlBody: htmlBody,
                fromEmail: formData.email,
                fromName: formData.name
            });

            setMessage({ type: 'success', text: "Consultation request sent successfully!" });
            setFormData({
                name: "",
                email: "",
                phone: "",
                projectType: "",
                details: ""
            });
        } catch (error) {
            console.error("Error sending email:", error);
            setMessage({ type: 'error', text: "Failed to send request. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
            </div>
            <div>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
            </div>
            <div className="relative">
                <CustomSelect
                    id="project-type"
                    options={projectTypeOptions}
                    value={formData.projectType}
                    onChange={handleSelectChange}
                    placeholder="Select Project Type"
                />
            </div>
            <div>
                <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Project details..."
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
            </div>

            {message && (
                <div className={`text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {message.text}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full bg-primary text-white py-3 text-sm font-medium uppercase tracking-wider hover:bg-primary-hover transition text-center mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Sending..." : "Schedule Consultation"}
            </button>
        </form>
    );
}
