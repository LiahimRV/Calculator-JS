import styles from "./App.module.css";
import { Calculator } from "./CalculatorDevelopment";

function App() {
  return (
    <div className={styles.app}>
      <div className="skeleton">
        <div>{Calculator()}</div>
      </div>
    </div>
  );
}

export default App;
