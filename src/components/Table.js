
import Row from "./row"
function Table({transaction}){


    return(
        <div>
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    
                </tr>
            </thead>
            <tbody>
                <Row transactions={transaction}/>
            </tbody>    
        </table>
        </div>
    )

}


export default Table;
