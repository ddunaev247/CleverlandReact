import { Component } from "react";
import "./search-panel.css";

export class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
        };
    }
    onUpdateSearch = (e) => {
        const searchString = e.target.value;
        this.setState({ searchString });
        this.props.onUpdateSearch(searchString);
    };
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.searchString}
                onChange={this.onUpdateSearch}
            />
        );
    }
}
