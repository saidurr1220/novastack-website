import { Link } from "react-router-dom";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import TestimonialCard from "../ui/TestimonialCard";

const services = [
    {
        title: "Cloud-Native Platforms",
        description:
            "Design and build scalable, event-driven backends ready for millions of users.",
    },
    {
        title: "Modern Frontend Systems",
        description:
            "Responsive, accessible interfaces optimized for performance and maintainability.",
    },
    {
        title: "DevOps & Observability",
        description:
            "Pipelines, monitoring, and alerts so your product ships fast and stays healthy.",
    },
];

const testimonials = [
    {
        quote:
            "NovaStack helped us move from idea to MVP in weeks, not months.",
        name: "Aria Gomez",
        role: "Founder, Finch Labs",
    },
    {
        quote:
            "The team felt like an extension of our own engineering org.",
        name: "Jordan Patel",
        role: "CTO, Lumina Health",
    },
];

const Home = () => {
    return (
        <div className="page home">
            {/* Hero */}
            <section className="hero">
                <div className="container hero__inner">
                    <div className="hero__content">
                        <h1>Ship production-grade products, faster.</h1>
                        <p>
                            NovaStack Technologies partners with startups and teams to
                            design, build, and scale modern web platforms with
                            confidence.
                        </p>
                        <div className="hero__actions">
                            <Link to="/contact">
                                <Button>Book a discovery call</Button>
                            </Link>
                            <Link to="/about" className="hero__secondary-link">
                                Learn more about us →
                            </Link>
                        </div>
                    </div>

                    <aside className="hero__aside">
                        <p className="hero__badge">Average delivery: 6–8 weeks</p>
                        <p className="hero__mini-card">
                            From MVPs to dashboards, we’ve shipped products used by
                            teams across the globe.
                        </p>
                    </aside>
                </div>
            </section>

            {/* Services */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        eyebrow="Services"
                        title="What NovaStack brings to your product"
                        description="Battle-tested engineering practices, from architecture to deployment."
                    />
                    <div className="grid grid--3">
                        {services.map((service) => (
                            <Card
                                key={service.title}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section section--muted">
                <div className="container">
                    <SectionHeading
                        eyebrow="Testimonials"
                        title="Trusted by product teams"
                        description="Teams lean on NovaStack when reliability and velocity both matter."
                    />
                    <div className="grid grid--2">
                        {testimonials.map((item, idx) => (
                            <TestimonialCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section section--centered">
                <div className="container section--centered-inner">
                    <h2>Ready to ship your next release with confidence?</h2>
                    <p>
                        Tell us about your product and we’ll share an architecture
                        and delivery plan tailored to your team.
                    </p>
                    <Link to="/contact">
                        <Button>Contact us</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
