interface TodoProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  mongoId: string;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string) => void;
}

const Todo = ({
  id,
  title,
  description,
  completed,
  mongoId,
  deleteTodo,
  updateTodo,
}: TodoProps) => {
  return (
    <tr className="border border-b-2">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
      >
        {id}
      </th>
      <td className={`px-6 py-4 ${completed ? "line-through" : ""}`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${completed ? "line-through" : ""}`}>
        {description}
      </td>
      <td className="px-6 py-4">{completed ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex gap-1">
        <button
          onClick={() => deleteTodo(mongoId)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
        {completed ? (
          ""
        ) : (
          <button
            onClick={() => updateTodo(mongoId)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
