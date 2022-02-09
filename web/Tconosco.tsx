import React from 'react';
import { Redirect } from 'react-router';
import User from '../Img/user.png';
import Email from '../Img/Email.png';
import CPF from '../Img/CPF.png';
import Senha from '../Img/Senha.png';
import Vaga from '../Img/vaga.png';


export interface IProps {
  label: string;
}
export interface IState {
  nome: string;
  sobrenome: string;
  email: string;
  cpf: string;
  senha: string;
  vaga: string;
  redirect: boolean;
}

class Tconosco extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      cpf: '',
      email: '',
      senha: '',
      vaga: '',

      redirect: false,


    };
    this.handleChange = this.handleChange.bind(this);
    this.alterarS = this.alterarS.bind(this);
    this.alterarE = this.alterarE.bind(this);
    this.alterarSn = this.alterarSn.bind(this);
    this.alterarCF = this.alterarCF.bind(this);
    this.alterarV = this.alterarV.bind(this);




  }
  private handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ nome: event.currentTarget.value });
  }

  private alterarS(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ sobrenome: event.currentTarget.value });
  }

  private alterarE(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ email: event.currentTarget.value });
  }

  private alterarCF(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ cpf: event.currentTarget.value });
  }

  private alterarSn(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ senha: event.currentTarget.value });
  }

  private alterarV(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ vaga: event.currentTarget.value });
  }


  chamaForm = () => {
    this.setState({
      redirect: true
    })
  }


  public render(): JSX.Element {

    if (this.state.redirect) {

      return <Redirect to="/Dados" />

    }
    else {

      return (
        <div>

          <div className='TC'>
            <h2>Trabalhe Conosco</h2>

            <h3> Trabalhe de onde quiser, com benefícios fora da curva e ajudando marcas incríveis</h3>
            <h4>
              Trabalhe de onde quiser, com benefícios fora da curva e ajudando marcas incríveis
              Você é capaz de ajudar empresas de alto nível a conseguirem resultados ainda melhores na internet através de nosso site?

              Então, o seu lugar é na Starship Technology, a casa do time mais feliz, experiente, eficiente e valorizado no assunto Otimização de Conversão.
                </h4>
          </div>

          <div className='col-sm-7'>
            <h2>3 Motivos para você trabalhar na Starship Technology</h2>

            <h4>Trabalhe de onde você quiser</h4>

            <p>Nosso modelo de trabalho é remoto, desde o nosso primeiro dia. Se você ainda trabalha em um escritório, prepare-se para melhorar a sua vida em todos os aspectos possíveis. Continue lendo para entender melhor.</p>

            <h4>Receba diversos bônus por resultados</h4>


            <p>Além do seu salário, você terá direito também a receber bônus pelos resultados que você gera para nossos clientes. Entre esses bônus está uma agressiva participação no lucro da empresa.</p>


            <h4>Trabalhe com clientes prestigiados do Brasil e dos EUA</h4>&nbsp;
                    <p>Trabalhamos há anos com marcas de reconhecida qualidade em seu Marketing Digital, no Brasil e nos Estados Unidos. Você lidará com grandes profissionais, dentro e fora da empresa, diariamente.</p>


          </div>
                    
          <div>
            

            <h2>Vagas abertas para trabalhar Conosco:</h2>

            <p>Desenvolvedor Web</p>
            <p>Especialista em Inboun Marketing</p>
            <p>Account Manager</p>
            <p>Executivo de Vendas</p>

          </div>

          <div className="Corpo-F">
            <hr className="featurette-divider"></hr>

            <h2>PREENCHA O FORMULÁRIO PARA TRABALHA CONOSCO</h2>

            <form method='GET' >


              <div className='Nome'>

                <span>{this.props.label}</span>
                <label>
                  <img src={User} width="25" height="25" alt='Logo' />&nbsp;
        &nbsp;<input type='text' className='form-control' id='nome' placeholder=' NOME' required value={this.state.nome} onChange={this.handleChange} />
                </label>
              </div>

              <div className='Sobrenome'>
                <span>{this.props.label}</span>
                <label>
                  <img src={User} width="25" height="25" alt='Logo' />&nbsp;

         <input type='text' className='form-control' id='sobrenome' placeholder=' SOBRENOME' required value={this.state.sobrenome} onChange={this.alterarS} />
                </label>
              </div>

              <div className='E-mail'>
                <label>
                  <img src={Email} width="25" height="25" alt='Logo' />&nbsp;

              <input type='email' className='form-control' id='email' placeholder='E-MAIL' required value={this.state.email} onChange={this.alterarE} />
                </label>
              </div>

              <div className='Vaga'>
                <label>
                  <img src={Vaga} width="25" height="25" alt='Logo' />&nbsp;

              <input type='text' className='form-control' id='vaga' placeholder='VAGA' required value={this.state.vaga} onChange={this.alterarV} />
                </label>
              </div>

              <div className='CPF'>
                <label>
                  <img src={CPF} width="35" height="35" alt='Logo' />&nbsp;
             <input type='text' className='form-control' id='CPF' placeholder='CPF' required value={this.state.cpf} onChange={this.alterarCF} />
                </label>
              </div>


              <div className='Senha'>
                <label>
                  <img src={Senha} width="35" height="35" alt='Logo' />&nbsp;
                <input type='password' className='form-control' id='senha' placeholder=' NOVA SENHA' required value={this.state.senha} onChange={this.alterarSn} />&nbsp;
             </label>
              </div>


              <div className='enviar'>
                <br />
                <input type='submit' onClick={() => this.chamaForm()} value='Enviar Formulário' />

              </div>

              <hr className="featurette-divider"></hr>


            </form>
          </div>
          <div>


              <h2>Funções que poderão ter oportunidades abertas em breve:</h2>

              <p>Desenvolvedor Web Analytics</p>
              <p>Especialista em Inbound Marketing</p>
              <p>Account Manager</p>
              <p>Executivo de Vendas</p>

            </div>
        </div>

      );
    }
  }
}

export default Tconosco;
