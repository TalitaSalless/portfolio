import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	min-height: 100vh;
	background: var(--background-color);
`;

export const Card = styled.div`
	width: 80%;
	padding: 1rem 2rem;
	border-radius: 1rem;
	background: rgba(0, 0, 0, 0.5);
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);

	@media (max-width: 1023px) {
		max-width: 600px;
	}

	@media (max-width: 1200px) {

		height: auto;
		padding: 1.5rem;
	}

	@media (max-width: 480px) {

	width: 95%;
	padding: 1rem;
	margin: 1rem 0;
}
`;

export const CardContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	@media (max-width: 1023px) {
		padding: 0 1rem;
		flex-direction: column;
	}
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const CardInformations = styled.div`

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const CardTitle = styled.h1`
    font-size: 2.2rem;
    font-family: "Nunito", sans-serif;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    background: linear-gradient(90deg, var(--primary-purple), var(--secondary-purple));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease forwards;

	@keyframes fadeInUp {
		from {
		opacity: 0;
		transform: translateY(30px);
		}
		to {
		opacity: 1;
		transform: translateY(0);
		}
	}

	@media (max-width: 1024px) {
		font-size: 1.5rem;
	}

	@media (max-width: 480px) {
		font-size: 1.1rem;
		margin: 1rem 0;
	}

`;

export const CardText = styled.p`
	margin: 1rem;
	text-align: center;
	font-size: 1.3rem;
	color: var(--primary-color);
	line-height: 2rem;

	@media (max-width: 1024px) {
		font-size: 0.9rem;
	}
	@media (max-width: 480px) {
		font-size: 0.9;
	}
`;

export const Form = styled.form`
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	width: 90%;
	gap: 0.5rem;

	@media (max-width: 768px) {
		align-items: center;
		width: 100%;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	padding: 10px;
	margin-bottom: 10px;
	transition: all 0.3s ease-in-out;

	&:focus-within {
		box-shadow: 0 0 8px var(--primary-color);
	}

	@media (max-width: 768px) {
		width: 100%;
	}

`;

export const Icon = styled.div`
	color: #ffffff;
	margin-right: 10px;
	font-size: 1.2rem;
`;

export const IconEnvelope = styled.div`
	margin-top: -5rem;
	color: #ffffff;
	margin-right: 10px;
	font-size: 1.2rem;
`

export const Input = styled.input`
	width: 100%;
	border: none;
	background: transparent;
	color: white;
	font-size: 0.9rem;
	outline: none;

	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
`;

export const Textarea = styled.textarea`
	width: 100%;
	border: none;
	background: transparent;
	color: white;
	font-size: 0.9rem;
	outline: none;
	resize: none;
	min-height: 100px;

	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
`;

export const ErrorMessage = styled.span`
	color: var(--alert-color);
	font-size: 0.8rem;
	margin-bottom: 8px;
	display: block;
`;

export const SocialMediaContainer = styled.div`
	margin-top: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SocialMediaList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
`;

// export const SocialMediaItem = styled.li`
// 	margin: 1rem 0.8rem;
// 	font-size: 1.6rem;
// 	padding: 0.5rem;
// 	border-radius: 50%;
// 	border: 2px solid transparent;
// 	background: rgba(255, 255, 255, 0.1);
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	transition: all 0.3s ease-in-out;


// 	a {
// 		color: var(--primary-color);
// 		transition: color 0.3s ease-in-out;
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 	}

// 	&:hover {
// 		background: var(--secondary-purple);
// 		transform: scale(1.05);
// 		box-shadow: 0 0 10px rgba(95, 55, 213, 0.6);

// 		a {
// 			color: white;
// 		}
// 	}

// 	@media (max-width: 1023px) {
// 		font-size: 1rem;

// 		a {
// 			font-size: 0.9rem;
// 		}
// 	}

// 	@media (max-width: 480px) {
// 	margin: 0.5rem;
// 	font-size: 1.2rem;

// 	a {
// 		font-size: 1rem;
// 	}
// }

// `;
export const SocialMediaItem = styled.li`
	margin: 1rem 0.8rem;
	font-size: 1.6rem;
	padding: 0.5rem;
	border-radius: 50%;
	border: 2px solid transparent;
	background: rgba(255, 255, 255, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	/* Animação de entrada */
	animation: popIn 0.6s ease forwards;

	@keyframes popIn {
		from {
			opacity: 0;
			transform: scale(0.7);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	a {
		color: var(--primary-color);
		transition: color 0.3s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:hover {
		background: var(--secondary-purple);
		transform: scale(1.1);
		box-shadow: 0 0 12px rgba(95, 55, 213, 0.6);

		a {
			color: white;
		}
	}

	@media (max-width: 1023px) {
		font-size: 1rem;

		a {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 480px) {
		margin: 0.5rem;
		font-size: 1.2rem;

		a {
			font-size: 1rem;
		}
	}
`;


export const SuccessMessage = styled.p`
	color: green;
	margin-top: 10px;
	font-weight: bold;
`;

export const ButtonArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`