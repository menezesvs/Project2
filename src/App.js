import React, { Component } from 'react'
import './App.css';
import alface from "./img/alface.png"
import laranja from "./img/laranja.png"
import cereja from "./img/cereja.png"
import cenoura from "./img/cenoura.png"
import manga from "./img/manga.png"
import limao from "./img/limao.png"
import beterraba from "./img/beterraba.png"
import tomate from "./img/tomate.png"
import car from "./img/ShoppingCart.png"
import adicionar from "./img/PlusCircle.png"
import remover from "./img/MinusCircle.png"
import vnw from "./img/vnw.png"

class App extends Component {
  state = {
    products: [
      {
        img: `${alface}`},
      {
        img: `${laranja}`},
      {
        img: `${cereja}`},
      {
        img: `${cenoura}`},
      {
        img: `${manga}`},
      {
        img: `${limao}`},
      {
        img: `${beterraba}`},
      {
        img: `${tomate}`}
    ]
  };


  render() {
    return (
      <div className='app'>
        <div className="header">
          <h1>HORTIFRUTI</h1>
          <img className='logo' src={vnw} alt='imagens' />
          <h2>Nossos Produtos</h2>
        </div>

        <div className="cardContainer">
          {this.state.products.map((item) => (
            <div className="card">
              <img className="imgs" src={item.img} alt="imagens" />
            </div>
          ))}
        </div>
        <div className='car'>
          <div className='secondCar'>
            <img className='carImg' src={car} alt="carrinho de compras" />
            <h3>Arraste o seu produto aqui para adicionar no carrinho!</h3>

          </div>
          <div className='btn'>
          <img className='btnSignal' src={adicionar} alt="adicionar" />
          <img className='btnSignal' src={remover} alt="remover" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;