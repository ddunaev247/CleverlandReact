import { Component } from "react";
import { AppInfo } from "../app-info/app-info";
import { SearchPanel } from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import { EmployeesList } from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";
import "./app.css";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Alex M.", salary: 1000, increase: false, id: 1 },
                { name: "John S.", salary: 7007, increase: true, id: 2 },
                { name: "Michael K.", salary: 5200, increase: false, id: 3 },
            ],
        };
        this.maxId = this.state.data.length + 1;
    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newData = [...before, ...after];
            // return { data: newData };

            return { data: data.filter((item) => item.id !== id) };
        });
    };
    addedItem = (name, salary) => {
        const newItem = { name, salary, increase: false, id: this.maxId++ };
        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };
    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    dataEmployees={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm addItem={this.addedItem} />
            </div>
        );
    }
}
