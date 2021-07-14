import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-60px" }}>
		Glass Time: A Jouranal Glass Magazine of India
	</h1><br/>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink>GLASS TIME e-magazine, the first glass-related e-magazine of India</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Magazine</FooterLink>
			<FooterLink href="#">Events</FooterLink>
			<FooterLink href="#">News</FooterLink>
			<FooterLink href="#">Subscribe</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Mr. Surender Sharma</FooterLink>
			<FooterLink href="#">glasstime2008@gmail.com</FooterLink>
			<FooterLink href="#">+91-8368275993</FooterLink>
			<FooterLink href="#">+91-7599449709</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
