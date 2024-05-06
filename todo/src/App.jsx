import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';


function TodoItem({ todo, index, onRemove }) {
  return (
    <Card className="rounded me-2 mb-2" style={{ display: 'inline-block' }}>
      <Card.Body>
        <Card.Text>{todo}</Card.Text>
        <Button className="rounded me-2" variant="danger" onClick={() => onRemove(index)}>Kaldır</Button>
      </Card.Body>
    </Card>
  );
}

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

 
  return (
    <>
    <div className="container">
      <h1 className="mt-4">Todo</h1>
      <Form className="mb-3">
        <Form.Group controlId="todoInput" >
          <Form.Control 
            type="text" 
            value={todoInput} 
            onChange={handleInputChange} 
            placeholder="Hedef girin" 
          />
        </Form.Group>
        <Button className="rounded mt-4" variant="primary" onClick={addTodo}>Ekle</Button>
      </Form>
      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} onRemove={removeTodo} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App;
