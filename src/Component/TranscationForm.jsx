import React, { useState } from 'react';
import { uniqueId } from '../funtionsForId';
import vikas from './Style.module.css'


function TransactionForm({ onNewTransaction }) {
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const addTransaction = (type, evt) => {
        evt.preventDefault();

        const data = { id: uniqueId(), name: nameValue, 
                amount: parseInt(amountValue), type: type };

        onNewTransaction(data);

        setNameValue('');
        setAmountValue('');
    }

    return (
        <div className={vikas.box}>
            <h2>Add New Transactions</h2>
            <form className='transaction-form'>
                <label>
                    Name
                    <div>
                        <input type="text" placeholder='Income/Expense' value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} />
                    </div>
                </label>
                <label>
                    Amount
                    <div>
                        <input type="number" placeholder='Amount' value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value)} />
                    </div>
                </label>
                <div>
                    <button className={vikas.btn} onClick={(e) => addTransaction('income', e)}>Add Income</button>
                    <button className={vikas.btn} onClick={(e) => addTransaction('expense', e)}>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default TransactionForm;