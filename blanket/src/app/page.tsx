import AddTodo from "./todoAdd/AddTodo";
import BackgroundImage from "./components/backgroundImage";
import "./pageLayout.css";

export default function Home() {
  return (
    <main>
      <BackgroundImage image="https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-2736499.jpg&fm=jpg" />
      <div>
        <AddTodo />
        <div style={{ position: "absolute" }}>
          {" "}
          <h1 style={{ fontSize: "60px", color: "black" }}>This is a test</h1>
        </div>
      </div>
    </main>
  );
}
