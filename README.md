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

📄 Backend Files
venv/

A Python virtual environment that isolates the project's Python packages from the system-wide Python installation and from other Python projects.

It prevents dependency conflicts between different projects.

main.py

The main entry point of the FastAPI application.

It contains the FastAPI application instance and API endpoints for performing CRUD operations.

It is responsible for handling HTTP requests, processing requests through the appropriate API endpoints, and returning responses to the frontend.

database.py

Responsible for configuring the connection between the FastAPI application and PostgreSQL.

It creates the SQLAlchemy database engine and database sessions.

It also provides database sessions to API endpoints so they can perform database operations.

models.py

Contains SQLAlchemy database models.

Models represent the structure of database tables using Python classes.

The model defines the table name, columns, data types, primary keys, and other database-related properties.

schemas.py

Contains Pydantic schemas used for API data validation and serialization.

Schemas define what data the API accepts from the frontend and what data it returns to the frontend.

They provide validation before data is processed by the application.

requirements.txt

Contains the Python packages required by the backend.

It allows the complete backend environment to be recreated by installing the listed dependencies.

.env

Contains environment-specific configuration such as database connection information.

It keeps sensitive configuration separate from the application source code.

This file should not be committed to GitHub.

⚠️ Files Excluded from Git
venv/

Contains the project's Python virtual environment and installed packages.

It should not be committed because it is specific to the local development environment.

.env

Contains local environment configuration and potentially sensitive database credentials.

It should not be committed to GitHub.

📦 Backend Packages
FastAPI

FastAPI is the Python web framework used to build the REST API.

It handles HTTP requests, routing, request validation, responses, and API documentation.

Uvicorn

Uvicorn is the ASGI server used to run the FastAPI application.

FastAPI provides the application, while Uvicorn provides the server that listens for HTTP requests.

SQLAlchemy

SQLAlchemy is the ORM (Object Relational Mapper) used to communicate with PostgreSQL through Python models and objects.

It provides an abstraction layer between the application and the database.

Psycopg

Psycopg is the PostgreSQL database driver.

It provides the connection between Python applications and PostgreSQL.

Database Connection
Python
   ↓
SQLAlchemy
   ↓
Psycopg
   ↓
PostgreSQL
Pydantic

Pydantic is used for data validation and serialization.

It validates incoming API data and defines the structure of API requests and responses.

Python-dotenv

Python-dotenv loads environment variables from the .env file.

It allows configuration such as database credentials to remain outside the application source code.

⚙️ Backend Commands
1. Create Virtual Environment
python -m venv venv

Creates an isolated Python environment for the project.

2. Activate Virtual Environment
venv\Scripts\activate

Activates the project's virtual environment so Python and installed packages are taken from that environment.

3. Install Backend Packages
pip install fastapi uvicorn sqlalchemy psycopg python-dotenv

Installs the packages required to build and run the backend.

4. Generate Requirements File
pip freeze > requirements.txt

Records the installed Python package versions so the same backend dependencies can be installed later.

5. Install Requirements
pip install -r requirements.txt

Installs all Python dependencies listed in requirements.txt.

6. Run FastAPI
uvicorn main:app --reload

Starts the FastAPI application using Uvicorn.

main refers to main.py.
app refers to the FastAPI application instance.
--reload automatically restarts the server when backend source files change during development.
7. Deactivate Virtual Environment
deactivate

Exits the project's Python virtual environment and returns to the system Python environment.

🔄 Backend Architecture

The application follows this flow:

React.js
   ↓
HTTP Request
   ↓
FastAPI
   ↓
Pydantic
   ↓
API Endpoint
   ↓
SQLAlchemy
   ↓
Psycopg
   ↓
PostgreSQL
🔁 Response Flow

The response follows the reverse direction:

PostgreSQL
   ↓
Psycopg
   ↓
SQLAlchemy
   ↓
FastAPI
   ↓
JSON Response
   ↓
React.js