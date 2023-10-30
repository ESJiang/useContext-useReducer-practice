import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Transaction({ transaction }) {
    const { deleTransaction } = useContext(GlobalContext);
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>
                {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
            </span>
            <button className='delete-btn' onClick={() => deleTransaction(transaction.id)}>
                x
            </button>
        </li>
    );
}
