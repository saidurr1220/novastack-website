import { useState } from "react";
import Button from "../ui/Button";

const initialForm = { name: "", email: "", message: "" };

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setServerError("");
        setSubmitted(false);
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim()) newErrors.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!form.message.trim())
            newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError("");
        setSubmitted(false);

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                // In development, if API route doesn't exist, simulate success
                if (import.meta.env.DEV && response.status === 404) {
                    console.log("Development mode: Form data", form);
                    setSubmitted(true);
                    setForm(initialForm);
                    return;
                }

                const data = await response.json().catch(() => ({}));
                setServerError(
                    data?.error || "Failed to send message. Please try again."
                );
                return;
            }

            setSubmitted(true);
            setForm(initialForm);
        } catch (err) {
            console.error(err);
            // In development mode, simulate success if network error
            if (import.meta.env.DEV) {
                console.log("Development mode: Form data", form);
                setSubmitted(true);
                setForm(initialForm);
            } else {
                setServerError("Network error. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page contact">
            <section className="section">
                <div className="container">
                    <h1>Contact NovaStack</h1>
                    <p className="section__intro">
                        Tell us about your product, timeline, and what success
                        looks like. We’ll respond within one business day.
                    </p>

                    <div className="contact__grid">
                        <form
                            className="contact__form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                />
                                {errors.name && (
                                    <p className="field__error">{errors.name}</p>
                                )}
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="field__error">{errors.email}</p>
                                )}
                            </div>

                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What are you building? What do you need help with?"
                                />
                                {errors.message && (
                                    <p className="field__error">{errors.message}</p>
                                )}
                            </div>

                            {serverError && (
                                <p className="field__error">{serverError}</p>
                            )}

                            <Button type="submit">
                                {loading ? "Sending..." : "Send message"}
                            </Button>

                            {submitted && (
                                <p className="form__success">
                                    Thanks for reaching out! We’ve received your message
                                    and will get back to you shortly.
                                </p>
                            )}
                        </form>

                        <aside className="contact__info">
                            <h2>Other ways to connect</h2>
                            <ul>
                                <li>
                                    Email:{" "}
                                    <a href="mailto:hello@novastack.tech">
                                        hello@novastack.tech
                                    </a>
                                </li>
                                <li>
                                    Phone:{" "}
                                    <a href="tel:+8801515687002">+88 01515-687002</a>
                                </li>
                                <li>
                                    LinkedIn:{" "}
                                    <a href="#">
                                        linkedin.com/company/novastack
                                    </a>
                                </li>
                            </ul>
                            <p className="contact__note">
                                Prefer async communication? Drop us an email with your
                                repo or product link, and we’ll schedule a focused
                                call.
                            </p>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
