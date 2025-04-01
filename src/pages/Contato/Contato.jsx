import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FaUser, FaEnvelope, FaPhone, } from "react-icons/fa";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Card,
  CardContent,
  Form,
  InputWrapper,
  Input,
  Textarea,
  ErrorMessage,
  Title,
  Icon,
} from "./ContatoStyles";
import { ButtonComponent } from "../../components/Button/Button";
import { FaExternalLinkAlt } from 'react-icons/fa';


export function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erros, setErros] = useState({});

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
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");
      setErros({});
    }
  };

  return (
    <>
      <Header />
      <Container>
        {/* <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1
            }}
          >
          <source src="/assets/video-fundo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video> */}

        <Card>
          <CardContent>
            <Title>Entre em Contato</Title>
            <p>
              Tem uma dúvida ou quer trabalhar comigo? Preencha o formulário e entrarei em contato o mais breve possível!
            </p>

            <Form onSubmit={handleSubmit}>
              <InputWrapper>
                <Icon><FaUser /></Icon>
                <Input
                  type="text"
                  placeholder="Nome completo*"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </InputWrapper>
              {erros.nome && <ErrorMessage>{erros.nome}</ErrorMessage>}

              <InputWrapper>
                <Icon><FaEnvelope /></Icon>
                <Input
                  type="email"
                  placeholder="E-mail*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputWrapper>
              {erros.email && <ErrorMessage>{erros.email}</ErrorMessage>}

              <InputWrapper>
                <Icon><FaPhone /></Icon>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </InputWrapper>

              <InputWrapper>

                <Textarea
                  placeholder="Mensagem*"
                  rows="5"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                />
              </InputWrapper>
              {erros.mensagem && <ErrorMessage>{erros.mensagem}</ErrorMessage>}

              <ButtonComponent
                icon={<FaExternalLinkAlt />}
                type="submit" >
                Enviar Mensagem
              </ButtonComponent>
            </Form>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
