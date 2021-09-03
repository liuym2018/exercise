const Item = ({ id, payment, total, time }) => {
    console.log('total: ', total);
    console.log('payemnt: ', payment);
    console.log('id: ', id);

    return (
        <tr>
            <td className="time">{time}</td>
            <td className="text">${payment}</td>
            <td className="text">${total}</td>
        </tr>
    )
}

export default Item;