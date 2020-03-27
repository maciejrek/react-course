import React from "react";
import "../style.css";
import TodoItem from "./TodoItem";
import ContactCard from "./ContactCard";

const App = () => (
  <div>
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr.Whiskerson",
          imgUrl: "http://placekitten.com/408/287",
          alt: "",
          phone: "123 123 123",
          email: "email@email.com"
        }}
      />
      <ContactCard
        contact={{
          name: "Mr.Dickerson",
          imgUrl: "http://placekitten.com/200/286",
          alt: "",
          phone: "321 321 312",
          email: "email2@2email.com"
        }}
      />
    </div>
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  </div>
);
export default App;
