import "./app.css";
import Counter from "./components/counter/Counter";

export default function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Counter />
      <footer>
        &copy; 
        <a href="https://github.com/JeetPrajapati21">Jeet Prajapati</a>
        {currentYear}
      </footer>
    </div>
  );
}
