import styled from 'styled-components';
<style> @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap'); </style>

export const Box = styled.div`
// padding: 80px 60px;
background: black;
// position: absolute;
// bottom: 0;
// width: 100%;
position: fixed;
bottom: 0;
width: 100%;
height: 60px;   /* Height of the footer */
// background: #6cf;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
font-size: 18px;
color: #fff;
margin-bottom: 38px;
margin-top:20px;
text-align: center;
font-family: "Open Sans";

`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
