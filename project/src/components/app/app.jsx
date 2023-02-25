import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';
import './app.css';
import { employees } from '../../const/employee';

export const App = () => (
    <div className="app">
        <AppInfo />
        <div className="search-panel">
            <SearchPanel />
            <AppFilter />
        </div>
        <EmployeesList dataEmployees={employees} />
        <EmployeesAddForm />
    </div>
);
