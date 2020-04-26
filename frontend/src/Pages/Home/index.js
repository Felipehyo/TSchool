import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css';

//import api from '../../services/api';

import logoImg from '../../assets/logoTschool.svg';
import logoBus from '../../assets/BusSchool.svg';
import icClose from '../../assets/close.png';

export default function Home() {

    const [ id, setId ] = useState('');

    //History para definir rotas
    const history = useHistory();

    //Função realizar login
    async function handleLogin(e) {
        e.preventDefault();

        try {
            //const response = await api.post('sessions', { id } );

            //console.log(response.data.name);
            //localStorage.setItem('ongId', id);
            //localStorage.setItem('ongName', response.data.name);
            history.push('events');
        } catch (err) {
            alert('Falha no Login, tente novamente.');
        }
    }

    //Função cadastrar
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ zipcode, setZipcode ] = useState('');
    const [ qtdAlunos, setQtdAlunos ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        //const data = ({name, email, phone, zipcode, qtdAlunos, password});

        try {
            //await api.post('schools', data);
            history.push('/home');
        } catch(err) {
            alert('Erro no cadastro, tente novamente');
        }
    };

    //função chamar modal
    function startModal(modalId) {
        const modal = document.getElementById(modalId);
        
        modal.classList.add('show');
        modal.addEventListener('click', (event) => {
            
            if(event.target.id === modalId || event.target.className === 'close-login') {
                modal.classList.remove('show');
            }
        });
    }

    return (
        <div className="home-container">
            <nav>
                <img src={logoImg} alt="Tschool"/>
                <div className="bts">
                    <button onClick={() => startModal('modal-login')} className="button">Login</button>
                    <button onClick={() => startModal('modal-register')} className="button">Cadastrar</button>
                </div>
            </nav>
            <section className="more">
                <img src={logoBus} alt="Bus"/>
                <div>
                    <h1>Autorize seus alunos a participarem de passeios de uma forma mais fácil e ágil!</h1>
                    <Link className="button" to="/">Quero saber mais</Link>
                </div>
            </section>

            <div id="modal-login" className="modal-container-login">
                <div className="login-container">
                    <section className="form">
                        <img src={logoImg} alt="Tschool"/>

                        <form action="">
                            <h1>Faça seu Login</h1>
                            <a id="modal-login" className="button" onClick={ () => startModal('modal-register') }>Ainda não tenho conta</a>
                        </form>
                    </section>
                    <section className="formLogin">
                        <form onSubmit={handleLogin}>
                            <input placeholder="Sua Escola"
                                value={id} 
                                onChange={ e => setId(e.target.value) }
                            />
                            <input type="password" placeholder="Sua Senha"/>
                            <button className="button" type="submit">Entrar</button>
                        </form>
                    </section>
                    <span className="close-login" id="modal-login">
                        <img id="modal-login" src={icClose} alt="" height="18px"/>
                    </span>
                </div>
            </div>

            <div id="modal-register" className="modal-container-register">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Tschool"/>
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e facilite a autorização dos eventos em sua escola.</p>
                        <a id="modal-register" className="button" onClick={() => startModal('modal-login')}>Já tenho uma conta</a>
                    </section>
                    <form onSubmit={handleRegister}>
                        <input placeholder="Nome da Escola" value={name} onChange={ e => setName(e.target.value) }/>
                        <input placeholder="Quatidade de Alunos" type="number" value={qtdAlunos} onChange={ e => setQtdAlunos(e.target.value) }/>
                        <input placeholder="CEP" type="text" value={zipcode} onChange={ e => setZipcode(e.target.value) } />
                        <input placeholder="Telefone" value={phone} onChange={ e => setPhone(e.target.value) }/>
                        <input type="email" placeholder="E-mail" value={email} onChange={ e => setEmail(e.target.value) }/>
                        <input placeholder="Senha" type="text" value={password} onChange={ e => setPassword(e.target.value) }/>

                        <button className="button">Cadastrar</button>
                    </form>
                    <span className="close-register" id="modal-register">
                        <img id="modal-register" src={icClose} alt="" height="18px"/>
                    </span>
                </div>
            </div>
        </div>
    );
}