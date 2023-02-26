import './app-filter.css';

export const AppFilter = () => (
    <div className="btn-group">
        <button type="button" className="btn btn-light">
            Все сотрудники
        </button>
        <button type="button" className="btn btn-outline-light">
            На повышение
        </button>
        <button type="button" className="btn btn-outline-light">
            З/П больше 1000$
        </button>
    </div>
);
