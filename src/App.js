import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Form from './components/form';
import Search from './components/search';
import { useState } from 'react';



function App() {
  const transaction = [
    {
      date: "28/04/2024",
        description: "Amazon",
        category: "Expenditure",
        amount: "Ksh 23,500"
    },
    {
        date: "30/03/2024",
        description: "Salary",
        category: "Deposit",
        amount: "Ksh 900,000"
    },
    {
        date: "21/07/2023",
        description: "Safaricom",
        category: "Expenditure",
        amount: "Ksh 3,500,000"
    },
    {
        date: "23/12/2023",
        description: "Water bill",
        category: "Expenditure",
        amount: "Ksh 35,000"
    }
      ]


      const [data, setData] = useState(transaction)
      const [searchData, setSearchData] = useState("")

      function handleSearch (e){
        setSearchData(e.target.value)}

        const newData = data.filter((transaction) => {
          if(searchData.length > 0)
          {
          return transaction.description.toLowerCase().includes(searchData.toLowerCase())
        } else{
          return true
        }
        })
        
      function handleNewData (formData) {
        setData([...data, formData])
      }


  return (
    <div className='container'>
  
    <Header/>
    <Search searchBar={handleSearch}/>
    <Form handleNewData={handleNewData}/>
    <Table transaction={newData}/>

    
    </div>
  );
}

export default App;