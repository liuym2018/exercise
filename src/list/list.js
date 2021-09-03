import Item from './item'
import './list.css';

const List = ({ listData }) => {
    console.log('listData: ', listData);
    return <div className="list">
        <table>
            <thead>
                <tr>
                    <th className="table-header">Payment Due Date</th>
                    <th className="table-header">Payment Amount</th>
                    <th className="table-header">Balance After Payment</th>
                </tr>
            </thead>
            <tbody>
                {
                    listData.map((item) => {
                        const { i, payment, newBalance, time } = item
                        return <Item key={i} id={i} payment={payment} total={newBalance} time={time} />
                    })
                }
            </tbody>
        </table>
    </div>
}

export default List;