import './app-info.css';

export const AppInfo = ({ allEmployees, rewarded }) => (
    <div className="app-info">
        <h1>Учет сотрудников в компании</h1>
        <h2>Общее число сотрудников: {allEmployees}</h2>
        <h2>Премию получат: {rewarded}</h2>
    </div>
);
