import { useQuery, useMutation, useQueryClient } from "react-query";
import { createTodo, getTodoList } from "../utils/api";
const DemoTodo = () => {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery("users", getTodoList);

  //   Mutations;
  const mutation = useMutation(createTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("users");
    },
  });
  return (
    <div className="container">
      <div className="row">
        {query.data.map((todo) => (
          <div className="col-lg-3 col-md-4 col-6" key={todo.id}>
            <div className="todo__item">{todo.title}</div>
          </div>
        ))}
      </div>
      <button
        className="btn btn__add"
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            name: "First Project",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default DemoTodo;
