import {
    Link
}

from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import TeamCard from "../ui/TeamCard";
import Button from "../ui/Button";

const team=[ {
    name: "Rafi Ahmed",
        role: "Founding Engineer",
        bio: "Leads architecture and implementation across the stack.",
}

,
    {
    name: "Nusrat Karim",
        role: "Product Partner",
        bio: "Bridges user needs with engineering trade-offs.",
}

,
    {
    name: "Ethan Chowdhury",
        role: "DevOps & Reliability",
        bio: "Owns deployment pipelines, monitoring and SRE practices.",
}

,
];

const About=()=> {
    return (<div className="page about"> <section className="section"> <div className="container"> <SectionHeading eyebrow="About NovaStack"
        title="Who we are"
        description="NovaStack Technologies is a small, focused engineering partner helping teams build modern web products with production-first thinking."

        /> <div className="about__story"> <p> We started NovaStack after seeing too many products ship with fragile codebases and no clear ownership. Our approach is simple: clean architecture, transparent communication, and a bias toward shipping. </p> <p> From dashboards and internal tools to customer-facing apps, we design systems that are easy to maintain and scale as your team grows. </p> </div> </div> </section> {
            /* Team */
        }

        <section className="section"> <div className="container"> <SectionHeading eyebrow="Team"
        title="The core crew behind NovaStack"
        description="A small, hands-on team that stays close to your product."

        /> <div className="grid grid--3"> {
            team.map((member)=> (<TeamCard key= {
                        member.name
                    }

                        {
                        ...member
                    }

                    />))
        }

        </div> </div> </section> {
            /* Mission & Vision */
        }

        <section className="section section--muted"> <div className="container about__mission-vision"> <div> <h3>Our mission</h3> <p> To help teams ship reliable software without slowing down, by combining strong engineering fundamentals with pragmatic decision-making. </p> </div> <div> <h3>Our vision</h3> <p> A world where early-stage teams can move fast without accumulating brittle, untested systems that block the next stage of growth. </p> </div> </div> </section> {
            /* CTA */
        }

        <section className="section section--centered"> <div className="container section--centered-inner"> <h2>Let’s talk about your next release</h2> <p> Share your roadmap and we’ll outline how NovaStack can support your engineering goals. </p> <Link to="/contact"> <Button>View contact options</Button> </Link> </div> </section> </div>);
}

;

export default About;