import React, { useState } from 'react'

import { Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'


function Formulario() {
    const [nome, setNome] = useState(""),
        [cpf, setCpf] = useState(""),
        [email, setEmail] = useState(""),
        [cep, setCep] = useState(""),
        [titular, setTitular] = useState(""),
        [numero, setNumero] = useState(""),
        [validade, setValidade] = useState(""),
        [cvv, setCvv] = useState(""),
        [obs, setObs] = useState(true)

    const [cepResultado, setCepResultado] = useState({})
    

    function exibirDados() {
        if (nome.trim() === ""
            || cpf.trim() === ""
            || email.trim() === ""
            || cep.trim() === ""
            || titular.trim() === ""
            || numero.trim() === ""
            || validade.trim() === ""
            || cvv.trim() === "") {

            alert("Existem campos não preenchidos!")
        } else {
            setObs(false)
        }
    }

    function buscarCep() {
        axios.get(`http://localhost:3001/${cep}`)
            .then((r) => {
                console.log(r.data)
                setCepResultado(r.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div>
            <div className='formulario'>

                {(() => {
                    if (obs === true) {
                        return (<>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Escreva seu nome" onChange={(e) => setNome(e.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="number" placeholder="Escreva seu CPF" onChange={(e) => setCpf(e.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@hotmail.com" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>CEP</Form.Label>
                                <Form.Control type="number" onChange={(e) => setCep(e.target.value)} placeholder="00000-000" />
                                <Button onClick={()=> buscarCep()}>Buscar</Button>
                                <br></br>
                                <Form.Label>Cidade: {cepResultado.city}</Form.Label>
                                <br></br>
                                <Form.Label>Logradouro:{cepResultado.neighborhood} </Form.Label>
                                <br></br>
                                <Form.Label>Estado: {cepResultado.state}</Form.Label>
                                <br></br>
                                <Form.Label>Rua: {cepResultado.street}</Form.Label>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Nome titular do cartão</Form.Label>
                                <Form.Control type="text" onChange={(e) => setTitular(e.target.value)} placeholder="Escreve seu nome" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Número do cartão</Form.Label>
                                <Form.Control type="number" onChange={(e) => setNumero(e.target.value)} placeholder="0000.0000.0000.0000" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Validade</Form.Label>
                                <Form.Control type="date" onChange={(e) => setValidade(e.target.value)} placeholder="" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>CVV</Form.Label>
                                <Form.Control type="number" onChange={(e) => setCvv(e.target.value)} placeholder="000" />
                            </Form.Group>

                            <Button variant="primary" onClick={() => exibirDados()}>
                                Concluir
                            </Button>
                        </>)
                    } else {
                        return (<>
                            <h1>COMPRA EFETUADA COM SUCESSO!</h1>
                            <br/>
                            <div style={{ marginLeft: "20px" }}>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="1">
                                        Nome:
                                </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue={nome} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm="1">
                                        CPF:
                                </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue={cpf} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm="1">
                                        E-mail:
                                </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue={email} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm="1">
                                        CEP:
                                </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue={cep}  />
                                    </Col>
                                </Form.Group>
                            </div>
                            <Button variant="primary" onClick={() => setObs(true)}>Finalizar</Button>
                        </>)
                    }

                })()}


            </div>
        </div>
    )
}

export default Formulario