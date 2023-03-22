import classNames from "classnames";
import { filterButtons } from "../../const/filter-buttons";
import "./app-filter.css";

export const AppFilter = ({ filter, onFilterSelect }) => (
    <div className="btn-group">
        {filterButtons.map(({ name, label }) => (
            <button
                type="button"
                className={classNames(
                    "btn",
                    { "btn-light": filter === name ,
                    "btn-outline-light": filter !== name }
                )}
                key={name}
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        ))}
    </div>
);
