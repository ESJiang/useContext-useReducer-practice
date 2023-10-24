import { useReducer } from "react";
import Balance from "./components/Balance";
import IncomeExpense from "./components/incomeExpense";
import AddTransaction from "./components/AddTransaction";

import TransactionList from "./components/TransactionList";
import "./styles.css";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
    return (
        <GlobalProvider>
            <div className='container'>
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}
