import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Prashant | Portfolio",

    description:
        "Hi, I'm Prashant Kushwaha — a Full-Stack Developer passionate about building modern, scalable, and user-friendly web applications.",

    author: "Prashant Kushwaha",
    siteUrl: "https://your-portfolio-link.com", // replace with your actual domain
    applicationName: "Prashant | Portfolio",

    keywords: [
        "Prashant Kushwaha",
        "Prashant Portfolio",
        "Full Stack Developer",
        "Web Developer",
        "React Developer",
        "JavaScript Developer",
        "TypeScript Developer",
        "Node.js Developer",
        "Software Engineer",
    ],

    openGraph: {
        type: "website",
        url: "https://your-portfolio-link.com", // replace with your actual domain
        title: "Prashant | Portfolio",
        site_name: "Prashant | Portfolio",
        description:
            "Explore my portfolio — I’m Prashant Kushwaha, a Full-Stack Developer who loves creating responsive, high-performance, and user-centric web applications.",
        width: 1200,
        height: 630,
        images: [
            {
                url: "/og-image.png", // make your own preview image
                alt: "Prashant Kushwaha Portfolio",
            },
        ],
    },
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				
			</body>
		</html>
	);
}
