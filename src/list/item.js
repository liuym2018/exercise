const Item = ({ id, payment, total, time }) => {

    return (
        <tr>
            <td className="time">{time}</td>
            <td className="text">${payment}</td>
            <td className="text">${total}</td>
        </tr>
    )
}

export default Item;