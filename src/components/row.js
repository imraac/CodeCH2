


function Row ({transactions: transaction}) {
  
    const rows = transaction.map ((transaction, index) => {
      return (
        
        <tr key={index+1}>
          <td>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
          
        </tr>
        
      )
    })
    
      return (
          <>
          
              {rows}
  
          </>
      )
  }
  
  export default Row