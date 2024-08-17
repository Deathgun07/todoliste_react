import { useState } from 'react';
import { Input } from './forms.jsx';

function App() {
  const [tasks, setTasks] = useState([]); // Initialement, la liste des tâches est vide
  const [newTask, setNewTask] = useState(''); // Pour capturer la nouvelle tâche

  // Fonction pour ajouter une tâche
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask(''); // Réinitialiser l'input après ajout
    }
  };


  // Fonction pour supprimer une tâche
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(task)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <h2>Ajouter une tâche</h2>
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Entrez une nouvelle tâche"
      />
      <button onClick={addTask}>Ajouter</button>

    </div>
  );
}

export default App;
