import { EmployeesListItem } from '../employees-list-item/employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ dataEmployees, onDelete }) => (
    <ul className="app-list list-group">
        {dataEmployees.map(({ id, ...item }) => (
            <EmployeesListItem
                key={id}
                {...item}
                onDelete={() => onDelete(id)}
            />
        ))}
    </ul>
);
