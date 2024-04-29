import TabelaProdutos from './components/TabelaProdutos'

function App() {
  const produtos = [
    {
        id: 1,
        nome: 'Maçã muito bonito',
        preco: 'R$ 79,80',
        estoque: 12
    },
    {
        id: 2,
        nome: 'Banana',
        preco: 'R$ 2,30',
        estoque: 37
    },
    {
        id: 3,
        nome: 'Melancia',
        preco: 'R$ 5,00',
        estoque: 1200
    },
    {
        id: 4,
        nome: 'Melão caro',
        preco: 'R$ 100.000,00',
        estoque: 2
    },
    {
        id: 5,
        nome: 'Uva',
        preco: 'R$ 60,00',
        estoque: 25
    },
    {
        id: 6,
        nome: 'MX3 DA MAZDA. ANO 95 COMPLETO.',
        preco: 'R$ 18.000,00',
        estoque: 1
    },
    {
        id: 7,
        nome: 'Pera',
        preco: 'R$ 2,00',
        estoque: 0
    },
    {
        id: 8,
        nome: 'Morango',
        preco: 'R$ 7,50',
        estoque: 10
    },
    {
        id: 9,
        nome: 'Abacaxi',
        preco: 'R$ 5,00',
        estoque: 5
    },
    {
        id: 10,
        nome: 'Laranja',
        preco: 'R$ 3,00',
        estoque: 0
    }   

];
  return (
<>
  <TabelaProdutos produtos={produtos} />
    </>
  )
}

export default App
