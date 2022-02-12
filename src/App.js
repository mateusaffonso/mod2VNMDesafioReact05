import React, { Component } from "react"
import "./App.css"

class App extends Component {

  state = {
    amigos: [
      {
        nome: "Douglas",
        idade: 26,
        profissao: "Ajudante de farmácia"
      },
      {
        nome: "Gabriela",
        idade: 26,
        profissao: "Arquiteta"
      },
      {
        nome: "Nathalia",
        idade: 22,
        profissao: "psicóloga"
      },
      {
        nome: "Jhonatan",
        idade: 26,
        profissao: "Vendedor"
      },
      {
        nome: "Eloana",
        idade: 37,
        profissao: "Assistente Social"
      },
      {
        nome: "Vinicius",
        idade: 39,
        profissao: "Professor"
      },
      {
        nome: "Julia",
        idade: 18,
        profissao: "Jovem Aprendiz"
      }
      ]
  }

  render() {

    return (

      <div className="cardFather">
        <h1>Informações sobre alguns amigos</h1>
        {this.state.amigos.map((item) => (
          <div className="card">

            <p><strong>Nome: </strong>{item.nome}</p>
            <p><strong>idade: </strong>{item.idade} anos</p>
            <p><strong>Profissão: </strong>{item.profissao}</p>
            
          </div>
        ))}

      </div>
    )
  }
}

export default App