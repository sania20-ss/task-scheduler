import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { tasks, addTask, removeTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const handleAddTask = () => {
    if (!taskName || !taskTime) {
      toast.error("Please fill all fields!");
      return;
    }

    const task = {
      id: Date.now(),
      name: taskName,
      time: new Date(taskTime).getTime(),
    };
    addTask(task);
    toast.success("Task added!");
    setTaskName("");
    setTaskTime("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      tasks.forEach((task) => {
        if (task.time - now <= 5 * 60 * 1000 && task.time - now > 4 * 60 * 1000) {
          toast.info(`Reminder: ${task.name} is due in 5 minutes!`);
        }
      });
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-5">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Taskify</h1>
      <p className="text-center mb-6">
        Taskify is a scheduler tool to manage your tasks and get reminders before they are due.
      </p>
      <div className="bg-gray-700 p-5 rounded shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-600 text-white"
        />
        <input
          type="datetime-local"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-600 text-white"
        />
        <button
          onClick={handleAddTask}
          className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-700 p-4 mb-3 rounded shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{task.name}</h3>
              <p className="text-gray-400">{new Date(task.time).toLocaleString()}</p>
            </div>
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
