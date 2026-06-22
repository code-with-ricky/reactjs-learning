import "./App.css";
import useFetch from "./hooks/useFetch";

const App = () => {
  const[data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
  return (
    <div>
      <h1>Todos</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default App;
