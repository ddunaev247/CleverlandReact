import classNames from 'classnames';
import './employees-list-item.css';

export const EmployeesListItem = ({ name, salary, increase }) => (
    <li
        className={classNames(
            'list-group-item d-flex justify-content-between',
            { increase }
        )}
    >
        <span className="list-group-item-label">{name}</span>
        <input
            type="text"
            className="list-group-item-input"
            defaultValue="1000$"
            value={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn-cookie btn-sm ">
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button" className="btn-trash btn-sm ">
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
);
