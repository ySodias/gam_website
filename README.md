# gam_website

## Arquiteture:

<br>

### Back-end (Folder backend):

```
        ├───controller
        │   └───__pycache__
        ├───model
        │   └───__pycache__
        ├───repository
        │   └───__pycache__
        ├───service
        │   └───__pycache__
        ├───utils
        │   └───__pycache__
        └───__pycache__
```

<br>

### Front-end (Folder project):

```─src
        ├───assets
        │   ├───css
        │   ├───icons
        │   └───img
        ├───components
        │   ├───FormSignIn
        │   ├───FormSignUp
        │   └───Post
        ├───hooks
        ├───interfaces
        ├───json-mock-api
        │   └───src
        ├───model
        ├───pages
        │   ├───Feed
        │   ├───SignIn
        │   └───SignUp
        ├───providers
        ├───service
        ├───utils
        │   └───links
        └───_environments
```

## Getting Started

<br>

### Backend:

```
cd backend
```

#### Create Virtual Env:

<br>

> 📖 A virtual environment is a Python tool for dependency management and project isolation

> 💡 If you are going to create the Project on Pycharm you can create with the IDE resources

<br>

```
python -m venv venv
```

<br>

> ⚠️ Python are going to create a venv folder with this architeture:

```
        └───venv
          ├───Include
          ├───Lib
          └───Scripts
```
<br>

#### Activate Virtual Enviroment:

<br>

```
cd venv\Scripts
```

```
activate.bat
```




#### Install project:

<br>

```
pip install -r requirements.txt
```

<br>
<hr>
<br>

### .env file

<br>

> 💡 After the installation you need to create a .env file, for post your personal variable values like database string connections

<br>

#### The .env file need to be creating on backend folder and inside of the file you need to post this code:

```
DB_CONN_LOCAL=<Your local database string connection>
```

<br>
<hr>
<br>

### Create Database

#### To create database you only need run this file in order:

<br>

1. User.py
2. Dominio.py
3. Post.py
4. Comments.py
5. Likes.py

