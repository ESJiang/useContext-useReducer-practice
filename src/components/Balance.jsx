import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Balance() {
    const { transactions } = useContext(GlobalContext);
    const [balance, setBalance] = useState(0);
    useEffect(
        () =>
            setBalance(
                transactions
                    .map(item => item.amount)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2)
            ),
        [transactions]
    );
    return (
        <>
            <h4>Your balance</h4>
            <h1>${balance}</h1>
        </>
    );
}
