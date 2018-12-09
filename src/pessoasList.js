import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pessoaActions from './actions/pessoas';

class PessoasList extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    state = {
        nomePessoa: '',
    };

    addNewPessoa = () =>{
        this.props.addPessoa(this.state.nomePessoa);
        this.setState({nomePessoa: ''});
    }
    removePessoa = () =>{
        this.props.removePessoa();
    }

    render() {
        return (
            <div>
                <ul>
                { this.props.pessoas.map(pessoa => (
                    <li key={pessoa.id}>{pessoa.nome}</li>
                ))}
                </ul>

                <input 
                    type="text" 
                    value={ this.state.nomePessoa }
                    onChange={ (e) => this.setState({nomePessoa: e.target.value }) }
                />
                <button onClick={this.addNewPessoa}> Cadastrar </button>
                <button onClick={this.removePessoa}> Remover último </button>
            </div>
        );
    }
}

//pegando variaveis de estado
const mapStateToProps = state => ({
    pessoas: state.pessoas,
});

//pega os dados e retorna para o componente poder usar
const mapDispatchToProps = dispatch => bindActionCreators(pessoaActions,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PessoasList);
