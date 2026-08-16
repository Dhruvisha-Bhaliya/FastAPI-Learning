# FastAPI + React + PostgreSQL

A full-stack CRUD application using **FastAPI**, **React.js**, and **PostgreSQL**.

---

## 📂 Backend Structure

```text
backend/
│
├── venv/
├── main.py
├── database.py
├── models.py
├── schemas.py
├── requirements.txt
└── .env

```

---

# 📄 Backend Files

## `venv/`

A Python virtual environment that isolates the project's Python packages from the system-wide Python installation and from other Python projects.

It prevents **dependency conflicts** between different projects.

---

## `main.py`

The main entry point of the **FastAPI application**.

It contains the FastAPI application instance and API endpoints for performing CRUD operations.

It is responsible for handling **HTTP requests**, processing requests through the appropriate API endpoints, and returning responses to the frontend.

---

## `database.py`

Responsible for configuring the connection between the **FastAPI application and PostgreSQL**.

It creates the SQLAlchemy database engine and database sessions.

It also provides database sessions to API endpoints so they can perform database operations.

---

## `models.py`

Contains **SQLAlchemy database models**.

Models represent the structure of database tables using Python classes.

The model defines the table name, columns, data types, primary keys, and other database-related properties.

---

## `schemas.py`

Contains **Pydantic schemas** used for API data validation and serialization.

Schemas define what data the API accepts from the frontend and what data it returns to the frontend.

They provide validation before data is processed by the application.

---

## `requirements.txt`

Contains the **Python packages required by the backend**.

It allows the complete backend environment to be recreated by installing the listed dependencies.

---

## `.env`

Contains **environment-specific configuration** such as database connection information.

It keeps sensitive configuration separate from the application source code.

# ⚙️ Backend Commands

## 1. Check Python Version

```bash
python --version
```

Shows the installed Python version.

It is useful for confirming that Python is installed and available in the terminal.

---

## 2. Create Virtual Environment

```bash
python -m venv venv
```

Creates a **virtual environment** named `venv`.

A virtual environment keeps this project's Python packages separate from other Python projects.

This prevents **dependency conflicts** between projects.

---

## 3. Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

Activates the project's virtual environment.

After activation, packages installed using `pip` are installed inside the project's virtual environment instead of the global Python environment.

The terminal normally shows:

```text
(venv)
```

at the beginning of the command prompt.

### Why do we activate it?

Without activation, you may install packages into the wrong Python environment.

Activation tells the terminal:

> Use this project's Python environment and its installed packages.

---

## 4. Upgrade pip

```bash
python -m pip install --upgrade pip
```

Updates `pip` to the latest available version.

`pip` is Python's package manager and is used to install and manage Python packages.

---

## 5. Install Backend Packages

```bash
pip install fastapi uvicorn sqlalchemy psycopg python-dotenv
```

Installs the packages required by the FastAPI backend.

### Packages installed

| Package | Purpose |
|---|---|
| **FastAPI** | Build the REST API |
| **Uvicorn** | Run the FastAPI application |
| **SQLAlchemy** | Work with the database using Python models |
| **Psycopg** | Connect Python to PostgreSQL |
| **Python-dotenv** | Load configuration from `.env` |

---

## 6. Check Installed Packages

```bash
pip list
```

Displays the Python packages currently installed in the active virtual environment.

It is useful for checking whether the required backend packages are installed.

---

## 7. Generate `requirements.txt`

```bash
pip freeze > requirements.txt
```

Saves the installed Python packages and their versions into `requirements.txt`.

This allows the project's dependencies to be recorded and recreated later.

---

## 8. Install Packages from `requirements.txt`

```bash
pip install -r requirements.txt
```

Installs all packages listed in `requirements.txt`.

This is useful when setting up the project on another computer or recreating the project environment.

---

## 9. Run FastAPI

```bash
uvicorn main:app --reload
```

Starts the FastAPI backend using Uvicorn.

### `main:app`

`main` refers to:

```text
main.py
```

`app` refers to the FastAPI application instance inside `main.py`.

### `--reload`

Automatically restarts the server when backend source code changes.

It is mainly used during development.

---

## 10. Check FastAPI API Documentation

After starting the server, FastAPI provides automatic API documentation.

The documentation allows developers to view and test the available API endpoints.

---

## 11. Deactivate Virtual Environment

```bash
deactivate
```

Deactivates the currently active virtual environment.

After deactivation, the terminal returns to the normal system Python environment.

---

# 🔄 Backend Development Command Flow

The normal development process is:

```text
Check Python
     ↓
Create Virtual Environment
     ↓
Activate Virtual Environment
     ↓
Upgrade pip
     ↓
Install Packages
     ↓
Create requirements.txt
     ↓
Write Backend Code
     ↓
Run FastAPI
     ↓
Test API
     ↓
Deactivate Environment
```

---

# 🧠 Important Concepts

## Why use `venv`?

`venv` creates an isolated Python environment for the project.

Different projects may require different versions of the same package.

Using a virtual environment prevents those dependencies from interfering with each other.

---

## Why activate `venv`?

Activation changes the terminal's Python and package paths to the project's virtual environment.

Therefore:

```text
pip install package
```

installs the package into the project's environment rather than the global Python installation.

---

## Why use `requirements.txt`?

`requirements.txt` records the backend dependencies.

It makes it easier to recreate the same Python environment later.

---

## Why use Uvicorn?

FastAPI is the web framework, while Uvicorn is the server that runs the FastAPI application.

The relationship is:

```text
FastAPI
   ↓
Uvicorn
   ↓
HTTP Server
   ↓
React / Browser
```

---

# 🛑 When the Virtual Environment Is Not Active

If the terminal does not show:

```text
(venv)
```

activate it before installing packages or running the backend:

```bash
venv\Scripts\activate
```

---

# 🧹 Deactivate When Finished

When you finish working on the backend:

```bash
deactivate
```

This only deactivates the environment.

It **does not delete** the virtual environment or installed packages.