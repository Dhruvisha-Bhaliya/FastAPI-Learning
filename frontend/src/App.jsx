import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://127.0.0.1:8000/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // READ
  const loadUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(API_URL);

      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
      alert("Unable to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // CREATE / UPDATE
  const saveUser = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please enter name and email");
      return;
    }

    const user = {
      name: name,
      email: email,
    };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, user);
      } else {
        await axios.post(API_URL, user);
      }

      clearForm();
      loadUsers();
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Unable to save user");
    }
  };

  // EDIT
  const editUser = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Unable to delete user");
    }
  };

  // CLEAR FORM
  const clearForm = () => {
    setName("");
    setEmail("");
    setEditingId(null);
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div>
          <h1>User Management</h1>
          <p>FastAPI + React + PostgreSQL CRUD</p>
        </div>
      </header>

      <main className="container">

        {/* Form Card */}
        <section className="card">

          <div className="card-header">
            <div>
              <h2>{editingId ? "Edit User" : "Add User"}</h2>
              <p>
                {editingId
                  ? "Update the user information"
                  : "Enter user information below"}
              </p>
            </div>
          </div>

          <form onSubmit={saveUser} className="user-form">

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-buttons">

              <button type="submit" className="btn btn-primary">
                {editingId ? "Update User" : "Add User"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={clearForm}
                >
                  Cancel
                </button>
              )}

            </div>

          </form>

        </section>

        {/* Users Table */}
        <section className="card">

          <div className="card-header users-header">
            <div>
              <h2>Users</h2>
              <p>Manage all registered users</p>
            </div>

            <span className="user-count">
              {users.length} Users
            </span>
          </div>

          {loading ? (
            <div className="loading">
              Loading users...
            </div>
          ) : users.length === 0 ? (
            <div className="empty">
              <h3>No users found</h3>
              <p>Add your first user using the form above.</p>
            </div>
          ) : (
            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {users.map((user) => (
                    <tr key={user.id}>

                      <td>
                        <span className="id-badge">
                          #{user.id}
                        </span>
                      </td>

                      <td className="name-cell">
                        {user.name}
                      </td>

                      <td className="email-cell">
                        {user.email}
                      </td>

                      <td>
                        <div className="actions">

                          <button
                            className="btn-edit"
                            onClick={() => editUser(user)}
                          >
                            Edit
                          </button>

                          <button
                            className="btn-delete"
                            onClick={() => deleteUser(user.id)}
                          >
                            Delete
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>
          )}

        </section>

      </main>

      <footer>
        <p>Simple CRUD Application • FastAPI + React + PostgreSQL</p>
      </footer>

    </div>
  );
}

export default App;