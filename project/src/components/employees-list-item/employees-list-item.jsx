import { Component } from "react";
import classNames from "classnames";
import "./employees-list-item.css";

export class EmployeesListItem extends Component {
    render() {
        const { name, salary, onDelete, onToggleProp, increase, rise } = this.props;
        return (
            <li className={classNames("list-group-item d-flex justify-content-between", { increase, like: rise })}>
                <span className="list-group-item-label" data-toggle="rise" onClick={onToggleProp}>
                    {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue="1000$" value={salary + "$"} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-cookie btn-sm " data-toggle="increase" onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}
