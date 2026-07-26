import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);
  const [inputData, setInputData] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!inputData.trim) {
      return;
    }
    setTodos((prev) => [...prev, inputData]);
    setInputData("");
  };
  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incriment</button>
      <div
        style={{
          maxWidth: "450px",
          margin: "40px auto",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Todo List
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Enter a new todo..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#2563eb",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </form>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                padding: "12px",
                marginBottom: "10px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
