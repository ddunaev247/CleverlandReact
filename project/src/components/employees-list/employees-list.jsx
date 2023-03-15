import { EmployeesListItem } from '../employees-list-item/employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ dataEmployees, onDelete, onToggleProp }) => (
    <ul className="app-list list-group">
        {dataEmployees.map(({ id, ...item }) => (
            <EmployeesListItem
                key={id}
                {...item}
                onDelete={() => onDelete(id)}
                onToggleProp={e =>
                    onToggleProp(
                        id,
                        e.currentTarget.getAttribute('data-toggle')
                    )
                }
            />
        ))}
    </ul>
);
