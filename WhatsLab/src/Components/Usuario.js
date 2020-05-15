import React from 'react';
class Usuario extends React.Component {
    state = {
        usuario: [''],
        mensagem: [''],
        valorInputUsuario: [''],
        valorInputMensagem: ['']

    };

adicionaUsuario = () => {
    const novoUsuario = this.state.valorInputUsuario;
    const novosUsuarios = [usuario, ...this.state.usuario];
    this.setState ({usuario: novosUsuarios})
}

adicionaMensagem = () => {
    const novaMensagem = this.state.valorInputMensagem;
    const novasMensagens = [usuario, ...this.state.mensagem];
    this.setState ({mensagem: novasMensagens})    
}

onChangeUsuario = (event) => {
    this.setState ({valorInputUsuario: event.target.value});
};

onChangeMensagem = (event) => {
    this.setState ({valorInputMensagem: event.target.value});
}

    render() {
        const listaDeUsuarios = this.state.mensagem.map ((usuario) =>{
        return <div>{usuario}</div>
        });

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
    <button onClick = {this.adicionaUsuario}>Enviar</button>
    </div>
    <div>
            {listaDeUsuarios}
    </div>

</div>
);

    }
}






export default Usuario;