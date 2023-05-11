import Container from "../components/container";
import Header from "../components/header";

const AddTodo = () => {
  return (
    <Container>
      <Header title="Add your to-do!" />
      <form>
        <input type="text" placeholder="Buy groceries, send mail, etc." />
        <button type="submit">Add!</button>
      </form>
    </Container>
  );
};

export default AddTodo;
