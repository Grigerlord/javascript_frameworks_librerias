import "./styles.css";
import Form from "./form";

const movies = [
  {
    name: "Titanic",
    tickets: 15
  },
  {
    name: "12 monkeys",
    tickets: 9
  },
  {
    name: "Advengers",
    tickets: 13
  },
  {
    name: "Cars",
    tickets: 2
  },
  {
    name: "Spiderman",
    tickets: 12
  }
];

export default function App() {
  return (
    <div>
      <h1>Peliculas</h1>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
