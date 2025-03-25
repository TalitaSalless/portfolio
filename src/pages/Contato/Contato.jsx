import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import {
  Container,
  Card,
  CardContent,
  Form,
  InputWrapper,
  Input,
  Textarea,
  Button,
  ErrorMessage,
  Title,
  Icon,
} from "./ContatoStyle";

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

              <Button type="submit">Enviar Mensagem</Button>
            </Form>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
}







  // export function Contato() {
  //   const [nome, setNome] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [telefone, setTelefone] = useState("");
  //   const [mensagem, setMensagem] = useState("");
  //   const [erros, setErros] = useState({});

  //   useEffect(() => {
  //     const campos = document.querySelectorAll(".campoDoFormulario");
  //     const botaoEnviar = document.querySelector("#btnEnviar");

  //     const validarCampos = () => {
  //       let novosErros = {};
  //       campos.forEach((input) => {
  //         if (input.value.trim() === "") {
  //           novosErros[input.name] = "O campo não foi preenchido";
  //         } else {
  //           novosErros[input.name] = "";
  //         }
  //       });
  //       setErros(novosErros);
  //     };

  //     botaoEnviar.addEventListener("click", (event) => {
  //       event.preventDefault();
  //       validarCampos();
  //     });

  //     return () => {
  //       botaoEnviar.removeEventListener("click", () => {});
  //     };
  //   }, []); // executar apenas uma vez ao montar o componente

  //   return (
  //     <>
  //       <Header />
  //       <div className="container-formulario">
  //         <div className="texto">
  //           <h2 className="section-title">Entre em Contato</h2>
  //           <p className="section-description">
  //           Se você tem alguma dúvida, sugestão ou gostaria de discutir uma oportunidade de colaboração, por favor, preencha o formulário abaixo. Estou sempre à procura de novos desafios e projetos interessantes. Vamos conversar!
  //           </p>
  //           <p className="required-fields">
  //             Todos os campos marcados com (*) são obrigatórios.
  //           </p>
  //         </div>
  //         <div className="formulario">
  //           <form>
  //             <input
  //               className="campoDoFormulario"
  //               type="text"
  //               placeholder="Nome completo*"
  //               name="nome"
  //               value={nome}
  //               onChange={(e) => setNome(e.target.value)}
  //             />
  //             <span className="mensagem-erro">{erros.nome}</span>

  //             <input
  //               className="campoDoFormulario"
  //               type="email"
  //               placeholder="Email*"
  //               name="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //             />
  //             <span className="mensagem-erro">{erros.email}</span>

  //             <input
  //               className="campoDoFormulario"
  //               type="tel"
  //               placeholder="Telefone"
  //               name="telefone"
  //               value={telefone}
  //               onChange={(e) => setTelefone(e.target.value)}
  //             />
  //             <span className="mensagem-erro">{erros.telefone}</span>

  //             <textarea
  //               className="campoDoFormulario"
  //               placeholder="Mensagem*"
  //               cols="30"
  //               rows="10"
  //               name="mensagem"
  //               value={mensagem}
  //               onChange={(e) => setMensagem(e.target.value)}
  //             ></textarea>
  //             <span className="mensagem-erro">{erros.mensagem}</span>

  //             <button type="submit" id="btnEnviar">
  //               Enviar
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }
