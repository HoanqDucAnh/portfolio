import styled from "styled-components";

const TooltipContainer = styled.div`
	position: relative;
	display: inline-block;
`;

const TooltipText = styled.span`
	visibility: hidden;
	width: 150px;
	background-color: #fff;
	color: #101827;
	text-align: center;
	border-radius: 6px;
	padding: 5px;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;

	${TooltipContainer}:hover & {
		visibility: visible;
		opacity: 1;
	}
`;

interface TooltipProps {
	text: string;
	children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
	return (
		<TooltipContainer>
			{children}
			<TooltipText>{text}</TooltipText>
		</TooltipContainer>
	);
};

export default Tooltip;
