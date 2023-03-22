import { Component } from "react";
import { AppInfo } from "../app-info/app-info";
import { SearchPanel } from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import { EmployeesList } from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";

import { employees } from "../../const/employee";

import "./app.css";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: employees,
            allEmployees: employees.length,
            rewarded: employees.filter((item) => item.increase === true).length,
            searchString: "",
            filter: "all",
        };
        this.maxId = this.state.data.length + 1;
    }
    getEmployees = () => {
        this.setState((state) => ({
            allEmployees: state.data.length,
            rewarded: state.data.filter((item) => item.increase).length,
        }));
    };

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newData = [...before, ...after];
            // return { data: newData };

            return { data: data.filter((item) => item.id !== id) };
        });
        this.getEmployees();
    };
    addedItem = (name, salary) => {
        const newItem = { name, salary, increase: false, id: this.maxId++ };
        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
        this.getEmployees();
    };
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
        this.getEmployees();
    };
    searchEmployees = (items, searchString) => {
        if (searchString.length) {
            return items;
        }
        return items.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()));
    };
    onUpdateSearch = (searchString) => {
        this.setState({ searchString: searchString });
    };
    employeesFilter = (data, filter) => {
        switch (filter) {
            case "rise":
                return data.filter((item) => item.rise);
            case "moreThen1000":
                return data.filter((item) => item.salary > 1000);
            default:
                return data;
        }
    };
    onFilterSelect = (filter) => {
        this.setState({ filter });
    };
    render() {
        const { searchString, filter, data } = this.state;
        const visibleData = this.employeesFilter(this.searchEmployees(data, searchString), filter);
        return (
            <div className="app">
                <AppInfo allEmployees={this.state.allEmployees} rewarded={this.state.rewarded} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                <EmployeesList
                    dataEmployees={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm addItem={this.addedItem} />
            </div>
        );
    }
}
