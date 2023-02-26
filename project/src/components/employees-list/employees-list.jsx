import { EmployeesListItem } from '../employees-list-item/employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ dataEmployees }) => (
    <ul className="app-list list-group">
        {dataEmployees.map(({ id, ...item }) => (
            <EmployeesListItem key={id} {...item} />
        ))}
    </ul>
);
