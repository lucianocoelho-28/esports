// Componentes / Propriedades

interface ButtonProps {
  title: string;
}

function Button(propos: ButtonProps) {
  return (
    <button>
      {propos.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
      <Button title="Hello World" />      
    </div>
  )
}

export default App
