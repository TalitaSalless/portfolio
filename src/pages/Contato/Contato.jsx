import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faExternalLinkAlt, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	Container,
	Card,
	CardContent,
	Form,
	InputWrapper,
	Input,
	Textarea,
	ErrorMessage,
	CardInformations,
	CardTitle,
	CardText,
	Icon,
	SocialMediaContainer,
	SocialMediaList,
	SocialMediaItem,
	SuccessMessage,
	IconEnvelope,
	ButtonArea,
} from "./ContatoStyles";
import { ButtonComponent } from "../../components/Button/Button";

const GITHUB_URL = "https://github.com/TalitaSalless";
const EMAIL_URL = "mailto:talitasalles93@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/talita-salles/";

export function Contato() {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [mensagem, setMensagem] = useState("");
	const [erros, setErros] = useState({});
	const [mensagemSucesso, setMensagemSucesso] = useState("");

	const validarCampos = () => {
		let novosErros = {};

		if (!nome.trim()) novosErros.nome = "O campo nome é obrigatório.";
		if (!email.trim()) novosErros.email = "O campo e-mail é obrigatório.";
		if (!mensagem.trim()) novosErros.mensagem = "A mensagem é obrigatória.";

		setErros(novosErros);
		return Object.keys(novosErros).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validarCampos()) {
			console.log("Formulário enviado com sucesso!");
			setMensagemSucesso("Mensagem enviada com sucesso!");
			setNome("");
			setEmail("");
			setTelefone("");
			setMensagem("");
			setErros({});

			// Remover a mensagem após 5 segundos
			setTimeout(() => setMensagemSucesso(""), 5000);
		}
	};

	return (
		<>
			<Header />
			<Container>
				<Card>
					<CardContent>
						<CardInformations>
							<CardTitle>Entre em Contato</CardTitle>
							<CardText>
								Tem alguma dúvida ou quer trabalhar comigo? <br />
								Preencha o formulário e entrarei em contato o mais breve possível!
							</CardText>
							<SocialMediaContainer>
								<SocialMediaList>
									<SocialMediaItem>
										<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon icon={faGithub} />
										</a>
									</SocialMediaItem>
									<SocialMediaItem>
										<a href={EMAIL_URL} target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon icon={faEnvelope} />
										</a>
									</SocialMediaItem>
									<SocialMediaItem>
										<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon icon={faLinkedin} />
										</a>
									</SocialMediaItem>
								</SocialMediaList>
							</SocialMediaContainer>
						</CardInformations>

						<Form onSubmit={handleSubmit}>
							<InputWrapper>
								<Icon><FontAwesomeIcon icon={faUser} /></Icon>
								<Input
									type="text"
									placeholder="Nome completo*"
									value={nome}
									onChange={(e) => setNome(e.target.value)}
								/>
							</InputWrapper>
							{erros.nome && <ErrorMessage>{erros.nome}</ErrorMessage>}

							<InputWrapper>
								<Icon><FontAwesomeIcon icon={faEnvelope} /></Icon>
								<Input
									type="email"
									placeholder="E-mail*"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</InputWrapper>
							{erros.email && <ErrorMessage>{erros.email}</ErrorMessage>}

							<InputWrapper>
								<Icon><FontAwesomeIcon icon={faPhone} /></Icon>
								<Input
									type="tel"
									placeholder="Telefone"
									value={telefone}
									onChange={(e) => setTelefone(e.target.value)}
								/>
							</InputWrapper>

							<InputWrapper>
								<IconEnvelope><FontAwesomeIcon icon={faMessage} /></IconEnvelope>
								<Textarea
									placeholder="Mensagem*"
									rows="3"
									value={mensagem}
									onChange={(e) => setMensagem(e.target.value)}
								/>
							</InputWrapper>
							{erros.mensagem && <ErrorMessage>{erros.mensagem}</ErrorMessage>}

							<ButtonArea>
								<ButtonComponent
									icon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
									type="submit" >
									Enviar Mensagem
								</ButtonComponent>
							</ButtonArea>
						</Form>

						{mensagemSucesso && <SuccessMessage>{mensagemSucesso}</SuccessMessage>}

					</CardContent>
				</Card>
			</Container>
			<Footer />
		</>
	);
}
