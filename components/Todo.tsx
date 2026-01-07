const Todo = () => {
  return (
    <>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
      >
        1
      </th>
      <td className="px-6 py-4">Study</td>
      <td className="px-6 py-4">Next.js Course</td>
      <td className="px-6 py-4">Pending</td>
      <td className="px-6 py-4 flex gap-1">
        <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">Done</button>
      </td>
    </>
  );
};

export default Todo;
