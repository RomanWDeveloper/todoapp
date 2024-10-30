import style from './app.module.scss';
import { CardList } from './components/CardList';

function App() {
  return (
    <div className="App">
        <div className={style.wrapper}>
            <h1 className={style.title}>Задачи на сегодня</h1>

            <CardList />
        </div>
    </div>
  );
}

export default App;
