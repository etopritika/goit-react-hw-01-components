import PropTypes from 'prop-types';
import css from '../css/TransactionHistory.module.css';

export default function TransactionHistory({ type, amount, curency, items }) {
  return (
    <section className="history-table">
      <table className={css.transaction_history}>
        <thead>
          <tr>
            <th>{type.toUpperCase()}</th>
            <th>{amount.toUpperCase()}</th>
            <th>{curency.toUpperCase()}</th>
          </tr>
        </thead>

        <tbody>
          {items.map(element => (
            <tr key={element.id}>
              <td>{element.type}</td>
              <td>{element.amount}</td>
              <td>{element.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  curency: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
