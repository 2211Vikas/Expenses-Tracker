import React from 'react';
import vikas from './Style.module.css'
// import {BarChart, XAxis,YAxis, Bar} from 'recharts';


function TransactionHistory({ transactions, onDeleteTransaction }) {

    console.log(transactions.name)
    console.log(transactions.amount)
    return (
        <div className={vikas.box}>
            <h2>Transaction History</h2>
            <ul className='transactions'>
                {
                    transactions.map((data) => 
                        <li key={data.id}>
                            <div>
                                <span>{data.name}</span><span> ₹{data.amount}</span>
                                <button className={vikas.btn} onClick={() => onDeleteTransaction(data.id)}>Delete</button>
                            </div>
                            
                        </li>
                        
                    )
                }
            </ul>
           
        </div>
    )
}

export default TransactionHistory;