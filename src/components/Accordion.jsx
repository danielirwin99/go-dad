import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              paddingRight: "40px",
            }}
          >
            How does GoDaddy help small business owners succeed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              paddingRight: "150px",
              letterSpacing: "1px",
            }}
          >
            GoDaddy offers more than just a platform to build your website, we
            offer everything you need to create an effective, memorable online
            presence. Already have a site? We offer hosting plans that will keep
            it fast, secure and online. Our professional email helps you build a
            professional image, while our online marketing tools empower
            entrepreneurs to get online with an SEO-friendly website. GoDaddy is
            an all-in-one solution provider to get your idea online, backed with
            expert, personalized support from GoDaddy Guides.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              paddingRight: "40px",
            }}
          >
            Why do I need a website for my business?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              paddingRight: "150px",
            }}
          >
            Even small local businesses that only serve their hometown need a
            site. That's because the web is the first place people go when
            looking for a product or service. A website helps every business:
            <br />
            <br />
            - Promote and sell their products and services
            <br />
            <br /> - Connect with new customers (and keep existing customers)
            <br />
            <br />
            - Build credibility
            <br />
            <br />
            - Compete with bigger businesses
            <br />
            <br />
            - Control their brand and keep their marketing fresh and current
            <br />
            <br />
            Best of all, a website is much easier and more affordable than you
            might think. GoDaddy offers a complete selection of online tools for
            building websites, along with hosting, email and marketing options
            to grow their business on the web.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              paddingRight: "40px",
            }}
          >
            Why get a domain name from GoDaddy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              paddingRight: "150px",
              lineHeight: "1.5",
            }}
          >
            GoDaddy is the world’s largest and trusted domain registrar that
            empowers people like you with creative ideas to succeed online.
            Buying a domain name is easy with our domain search tool and domain
            name generator tools you can find the perfect website address for
            your business.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              paddingRight: "40px",
            }}
          >
            Why use GoDaddy Website Builder?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              paddingRight: "150px",
              lineHeight: "1.5",
            }}
          >
            Because it’s a fast, simple way to create a website that you — and
            your customers — will love. Simply type in your idea or industry and
            GoDaddy Website Builder will pull up a number of professionally
            designed, ready-to-launch templates. From there, just add your own
            text and images and you’re good to go. And with dozens of features,
            from online appointment scheduling to a full-blown ecommerce system,
            Website Builder can handle your business’ needs today and as you
            grow.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              paddingRight: "40px",
            }}
          >
            What makes GoDaddy Web Hosting the world leader?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              paddingRight: "150px",
              lineHeight: "1.5",
            }}
          >
            With nearly 20 years in the industry, we have the experience, the
            technology and the hosting experts to help web designers,
            developers, bloggers and online businesses create and maintain their
            online presence. Our secure web hosting platform, complete with
            cPanel, offers a 99.9% uptime guarantee and award-winning support,
            which has helped nearly 21+ million customers get online.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              paddingRight: "40px",
            }}
          >
            Why choose GoDaddy for WordPress?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              paddingRight: "150px",
              lineHeight: "1.5",
            }}
          >
            GoDaddy offers reliable and affordable WordPress hosting plans,
            one-click installs and the latest version so you have the most
            recent features available for your site. Your website content is
            managed from one place; you have a wealth of themes and add-ons
            giving you limitless options to succeed.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
