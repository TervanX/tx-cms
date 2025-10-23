export const productivityProps = {
    heading: {
        main: "AI tools that",
        highlighted: "maximize productivity",
    },
    description:
        "Agents can resolve complex queries more efficiently in any language with instant assistance from Copilot, no-code workflows, and AI Inbox Translation.",
    images: {
        mobile: {
            src: "//assetsproductivity-hero-mobile.webp",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        desktop: {
            src: "/assets/productivity-hero-desktop.webp",
            alt: "Illustration of productive bees in a grassy meadow",
        },
        product: {
            src: "/assets/productivity-1-desktop.webp",
            alt: "Helpdesk product UI",
        },
    },
    features: [
        {
            title: "An AI assistant for every agent",
            description:
                "Copilot provides expert training, troubleshooting, and guidance so agents can find answers faster and get more done for customers.",
        },
        {
            title: "Automate repetitive tasks",
            description:
                "No-code workflows handle repetitive tasks, so agents can focus on helping customers, not managing processes.",
        },
        {
            title: "Support every customer, in every language",
            description:
                "Helpdesk unifies messages from every channel and uses AI to translate 45+ languages in real time—so agents can respond faster, without switching tools.",
        },
    ],
    testimonial: {
        quote:
            "Our agents are dramatically more efficient when using Copilot. In testing, agents using Copilot were able to close 31% more customer conversations daily, compared to agents not using Copilot.",
        author: "Angelo Livanos",
        role: "Vice President, Global Support",
        companyLogo: ` <svg
        xmlns="http://www.w3.org/2000/svg"
        width="102"
        height="25"
        fill="none"
      >
        {/* Lightspeed logo SVG */}
        <g clipPath="url(#lightspeed_svg__a)">
          <mask
            id="lightspeed_svg__b"
            width="102"
            height="25"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
          >
            <path fill="#fff" d="M102 .9H0v23.926h102z" />
          </mask>
          <g fill="#191513" mask="url(#lightspeed_svg__b)">
            {/* Logo paths would go here */}
          </g>
        </g>
      </svg>`,
        image: {
            src: "/assets/lightspeed-headshot-min.png",
            alt: "Angelo Livanos",
        },
    },
};

export const usabilityProps = {
    heading: {
        main: "Modern software that's",
        highlighted: "fast and friction-free",
    },
    description:
        "Helpdesk is fast to set up and easy to use. Pre-built reports, built-in ticketing, and native integrations with tools like Slack and Jira help teams work seamlessly and stay aligned.",
    images: {
        mobile: {
            src: "/assets/usability-hero-mobile.webp",
            alt: "Illustration of people walking down a flowery path",
        },
        desktop: {
            src: "/assets/usability-hero-desktop.webp",
            alt: "Illustration of people walking down a flowery path",
        },
        mainFeature: {
            src: "/assets/usability-1-desktop.webp",
            alt: "Helpdesk usability instant insight product visual",
        },
    },
    usabilityFeatures: [
        {
            title: "Instant insight with pre-built reporting",
            description:
                "Monitor, analyze and optimize your support with powerful, customizable reports and real-time performance metrics.",
        },
    ],
    additionalFeatures: [
        {
            image: {
                src: "/assets/usability-2-desktop.webp",
                alt: "Ticketing system interface showing collaboration features",
            },
            title: "Ticketing designed for teamwork",
            description:
                "Resolve complex issues more efficiently with Tickets designed to streamline collaboration and keep the conversation going—no switching tools or lost context.",
        },
        {
            image: {
                src: "/assets/usability-3-desktop.webp",
                alt: "Integration dashboard showing connected apps",
            },
            title: "Integrate with your existing tools",
            description:
                "Connect apps like Slack, Jira, and Salesforce directly in the Helpdesk, so your agents can take action and access customer information in one place.",
        },
    ],
    sectionStyle: {
        backgroundColor: "var(--color-cream)",
    },
};

export const outboundProps = {
    heading: {
        main: "Outbound messaging",
        highlighted: "that reduces support volume",
    },
    description:
        "Onboard, educate, and notify your customers with in-context, automated messages that reduce support volume and improve your customer experience.",
    images: {
        mobile: {
            src: "/assets/outbound-hero-mobile.webp",
            alt: "Illustration of a futuristic satellite receiver in a rural setting",
        },
        desktop: {
            src: "/assets/outbound-hero-desktop.webp",
            alt: "Illustration of a futuristic satellite receiver in a rural setting",
        },
        mainFeature: {
            src: "/assets/outbound-1-desktop.webp",
            alt: "Helpdesk outbound product visual",
        },
    },
    outboundFeatures: [
        {
            title: "Onboard customers faster",
            description:
                "Onboard users with interactive guides, personalized tasks, and in-app highlights that help them get started successfully.",
        },
        {
            title: "Stay ahead of known issues",
            description:
                "Send timely messages about bugs, outages, or changes, so your customers stay informed and your team stays in control.",
        },
        {
            title: "Answer common questions in advance",
            description:
                "Highlight tips, surface support content, and announce new features in-product so customers get answers before they reach out.",
        },
    ],
    g2Comparison: {
        title: "Ranked #1 on G2 in 97 categories",
        description:
            "Intercom is rated highest on G2's most recent User Satisfaction Ratings for CS.",
        link: {
            text: "Read the report",
            href: "https://www.g2.com/compare_reports/intercom-zendesk-support-suite-and-salesforce-service-cloud",
            target: "_self",
        },
        items: [
            { name: "Intercom", value: 97, color: "text-black" },
            { name: "Salesforce", value: 0, color: "text-black/40" },
            { name: "Zendesk", value: 0, color: "text-black/40" },
        ],
    },
    sectionStyle: {
        backgroundColor: "white",
    },
};

export const featuresProps = {
    title: "Features",
    features: [
        {
            id: "inbox",
            name: "Inbox",
            href: "/suite/helpdesk/inbox",
            description: "Support for customers, before they need it",
            image: "/assets/photo-1552664730-d307ca884978.jpg",
        },
        {
            id: "copilot",
            name: "Copilot",
            href: "/suite/helpdesk/copilot",
            description: "AI-powered assistance for your team",
            image: "/assets/photo-1677442136019-21780ecad995.jpg",
        },
        {
            id: "tickets",
            name: "Tickets",
            href: "/suite/helpdesk/tickets",
            description: "Efficient ticket management system",
            image: "/assets/photo-1552664730-d307ca884978.jpg",
        },
        {
            id: "omnichannel",
            name: "Omnichannel",
            href: "/suite/helpdesk/omnichannel",
            description: "Unified customer experience across channels",
            image: "/assets/photo-1677442136019-21780ecad995.jpg",
        },
        {
            id: "help-center",
            name: "Help Center",
            href: "/suite/helpdesk/help-center",
            description: "Self-service support for your customers",
            image: "/assets/photo-1552664730-d307ca884978.jpg",
        },
        {
            id: "apps-integrations",
            name: "Apps & Integrations",
            href: "/app-store",
            description: "Extend functionality with integrations",
            image: "/assets/photo-1677442136019-21780ecad995.jpg",
        },
        {
            id: "reporting",
            name: "Reporting",
            href: "/suite/helpdesk/reporting",
            description: "Data-driven insights and analytics",
            image: "/assets/photo-1552664730-d307ca884978.jpg",
        },
        {
            id: "knowledge-hub",
            name: "Knowledge Hub",
            href: "/suite/helpdesk/knowledge-hub",
            description: "Centralized knowledge management",
            image: "/assets/photo-1677442136019-21780ecad995.jpg",
        },
        {
            id: "outbound",
            name: "Outbound",
            href: "/suite/helpdesk/outbound",
            description: "Proactive customer outreach",
            image: "/assets/photo-1552664730-d307ca884978.jpg",
        },
    ],
    defaultActiveFeature: "omnichannel",
    sectionStyle: {
        backgroundColor: "var(--color-cream)",
    },
    linkStyle: {
        text: "Find out more",
    },
};