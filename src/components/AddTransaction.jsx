import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function AddTransaction() {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount,
        };
        addTransaction(newTransaction);
    };
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id='form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='form-input'>Text</label>
                    <input type='text' id='form-input' value={text} onChange={e => setText(e.target.value)} placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='form-amount'>Amount</label>
                    <input type='number' id='form-amount' value={amount} onChange={e => setAmount(e.target.value)} placeholder='Enter Amount...' />
                </div>
                <button className='btn'>Add transaction</button>
                <button className='btn'>remove transaction</button>
                <button className='btn'>remove transaction</button>
                <button className='1'>remove transaction</button>
            </form>
        </div>
    );
}
