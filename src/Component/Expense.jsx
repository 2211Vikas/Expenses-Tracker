import React from 'react'
import vikas from './Style.module.css'


export default function Expense({income, expense}) {
  return (
    <div className={vikas.box}>
            <h2>Your Balance</h2>
            <div >₹{income - expense}</div>
            <div >
                <div >
                    <span>
                        <h3>Income</h3>
                        <div >₹{income}</div>
                    </span>
                </div>
                <div >
                    <h3>Expense</h3>
                    <div >₹{expense}</div>
                </div>
            </div>
        </div>
  )
}
