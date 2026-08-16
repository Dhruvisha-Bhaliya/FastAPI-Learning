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