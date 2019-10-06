import React, { useState }from 'react';
import api from '../../services/api';

export default function Login({ history }){
    const [email, setEmail] = useState(''); //email é iniciado com valor em branco e depois recebe me tempo real o setEmail que é o estado do email


  async function handleSubmit(event){
    event.preventDefault(); //Evita redirecionamento ao clicar em "Entrar"

    const response = await api.post('/sessions', { email })
    /* o mesmo que :
    api.post('/sessions', {
      email: email
    })
    */

    const { _id } = response.data;
    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }
    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            
            <input type="email" 
                    id="email" 
                    placeholder="Seu melhor e-mail"
                    value = {email}
                    onChange={event => setEmail(event.target.value)}
            />

            <button className="btn" type="submit">Entrar</button>

            </form>
        </>
    )
}