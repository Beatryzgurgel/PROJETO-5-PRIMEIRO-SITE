import imagem from './public/imagem.jpg'

export default function App() {
  return (
    <div>
      <img src={imagem} alt="react" />
      <h1>React</h1>
      <p>A biblioteca para interface de usuário web e nativas.</p>
      <button>Aprenda React</button> <button>Referência de API</button>
      <hr />
      <h2>Crie interfacews de usuário de componentes</h2>
      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p>
      <hr />
      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes React são funções Javascript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe Javascript popularizada pelo React.</p>
      <hr />
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do Javascript</li>
      </ul>
    </div>
  )
}