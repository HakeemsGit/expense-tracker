import React, {useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)
 
    const onSubmit = e => {
        e.preventDefault();
        // Not the best way to create an id...
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    </label>
                <input type="number" step=".01" onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}