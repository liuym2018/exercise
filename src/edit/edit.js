import { useState } from 'react'
import './edit.css';

const Eidt = ({ add, submitStatus }) => {
    const [payment, setPayment] = useState("");
    let [total, setTotal] = useState("");

    function paymentChange(e) {
        setPayment(e.target.value)
    }

    function totalChange(e) {
        setTotal(e.target.value)
    }

    function displayDetails() {
        submitStatus.current = true;
        add(function () {
            const time = 6;
            let details = []
            let day = '01';
            let month = '00';
            let year = '2021';
            for (let i = 0; i < time; i++) {
                let newMonth = parseInt(month) + 1;
                month = newMonth;
                let time = '0' + newMonth + '/' + day + '/' + year;
                let newBalance = total - payment;
                total = newBalance;
                let pay = '$' + payment;
                details.push({ i, pay, newBalance, time });
            }
            return details;
        });
    }

    return <div className="top">
        <h1 className="header">Payment Calculator</h1>
        <div className="body">
            <div className="input">
                <p className="label">Payment Amount:</p>
                <input type="text" placeholder="Your Monthly Payment" value={payment} onChange={paymentChange} />
            </div>
            <div className="input">
                <p className="label">Initial Payment Amount:</p>
                <input type="text" placeholder="Your Initial Balance" value={total} onChange={totalChange} />
            </div>
        </div>
        <button onClick={displayDetails} className="add">Submit</button>
    </div>
}

export default Eidt;