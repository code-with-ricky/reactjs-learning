import React from "react";
import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const user = "Amrik";
  const age = 44;

  return (
    <div>
      {/* mount a component */}
      <Navbar />

      {/* we use variables inside curly brackets */}
      <h1>
        Hello Guys I am {user}, I am {age} years old
      </h1>

      {/* rendering multiple cards */}
      {/* props -> when want same component with different data */}
      {/* We always pass props from parent to child */}
      {/* from App to Card */}
      {/* for strings we can directly use username="Amrik Bhadra" */}
      {/* but if want to pass any integer, array or any variable's value then use {}; example age={18} */}
      <Card
        username={"Amrik Bhadra"}
        designation={"Full Stack Developer"}
        description={
          "Hi, I love creating production grade application, both frontend and backend and make it scalable, highly available using AWS"
        }
      />
      <Card 
        username={"Srivaths Iyer"}
        designation={"Backend developer"}
        description={
          "Hi, I love exploring new backend technologies and exploring different AI tools making our work easy"
        }
      />
    </div>
  );
};

export default App;
