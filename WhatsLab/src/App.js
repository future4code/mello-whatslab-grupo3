import React from 'react'
import styled from 'styled-components';


const RedSpan = styled.span `
color: red;
`

class App extends React.Component {
    state = {
        usuario: [''],
        mensagem: [''],
        valorInputUsuario: [''],
        valorInputMensagem: ['']

    }


onClickEnviar = () => {
    const novoUsuario = this.state.valorInputUsuario;
    const novosUsuarios = [novoUsuario, ...this.state.usuario];
    this.setState ({usuario: novosUsuarios})

    const novaMensagem = this.state.valorInputMensagem;
    const novasMensagens = [novaMensagem, ...this.state.mensagem];
    this.setState ({mensagem: novasMensagens})    
}



onChangeUsuario = (event) => {
    this.setState ({valorInputUsuario: event.target.value});
};

onChangeMensagem = (event) => {
    this.setState ({valorInputMensagem: event.target.value});
}

    render() {
        const listaDeUsuarios = this.state.usuario.map ((usuario) =>{
        return <RedSpan>{usuario} </RedSpan>
        })

     
          const listaDeMensagem = this.state.mensagem.map ((mensagem) =>{
          return <RedSpan>{mensagem}</RedSpan>
          })     
        
        
   

return (

<div>
    <div>
    <input 
    value={this.state.valorInputUsuario} 
    onChange = {this.onChangeUsuario} 
    placeholder={'usuario'}
     />

    <input 
    value={this.state.valorInputMensagem}
    onChange = {this.onChangeMensagem}
    placeholder={'mensagem'}
    
    />
    <button onClick = {this.onClickEnviar}>Enviar</button>

    </div>
 
    <div>
          {listaDeUsuarios}     {listaDeMensagem}  
    </div>

</div>
);

    }
}

export default App;
















