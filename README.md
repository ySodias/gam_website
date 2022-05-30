# gam_website

## Arquiteture:

<br>

### Back-end (Folder backend):

```
        ├───controller
        │   └───__pycache__
        ├───config
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



## Getting Started

<br>

### Backend:

> 💡 To run this side code is better to download Pycharm Community and follow this instructions:

<br>

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

## Or use this code:

```
CREATE DATABASE db_gam_local

-- public.tb_dominio definition

-- Drop table

-- DROP TABLE public.tb_dominio;

CREATE TABLE public.tb_dominio (
	id serial4 NOT NULL,
	nm_dominio varchar NOT NULL,
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz NULL,
	CONSTRAINT tb_dominio_nm_dominio_key UNIQUE (nm_dominio),
	CONSTRAINT tb_dominio_pkey PRIMARY KEY (id)
);


-- public.tb_user definition

-- Drop table

-- DROP TABLE public.tb_user;

CREATE TABLE public.tb_user (
	id serial4 NOT NULL,
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	email_adress varchar NOT NULL,
	photo varchar NOT NULL,
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz NULL,
	CONSTRAINT tb_user_email_adress_key UNIQUE (email_adress),
	CONSTRAINT tb_user_password_key UNIQUE (password),
	CONSTRAINT tb_user_pkey PRIMARY KEY (id),
	CONSTRAINT tb_user_username_key UNIQUE (username)
);


-- public.tb_post definition

-- Drop table

-- DROP TABLE public.tb_post;

CREATE TABLE public.tb_post (
	id serial4 NOT NULL,
	src_img varchar NOT NULL,
	id_dominio int4 NOT NULL,
	id_user int4 NOT NULL,
	title varchar NOT NULL,
	"desc" varchar NOT NULL,
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz NULL,
	CONSTRAINT tb_post_pkey PRIMARY KEY (id),
	CONSTRAINT tb_post_id_dominio_fkey FOREIGN KEY (id_dominio) REFERENCES public.tb_dominio(id) ON DELETE CASCADE,
	CONSTRAINT tb_post_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.tb_user(id) ON DELETE CASCADE
);


-- public.tb_comments definition

-- Drop table

-- DROP TABLE public.tb_comments;

CREATE TABLE public.tb_comments (
	id serial4 NOT NULL,
	id_user int4 NOT NULL,
	id_post int4 NOT NULL,
	"desc" varchar NOT NULL,
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz NULL,
	CONSTRAINT tb_comments_pkey PRIMARY KEY (id),
	CONSTRAINT tb_comments_id_post_fkey FOREIGN KEY (id_post) REFERENCES public.tb_post(id) ON DELETE CASCADE,
	CONSTRAINT tb_comments_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.tb_user(id) ON DELETE CASCADE
);


-- public.tb_likes definition

-- Drop table

-- DROP TABLE public.tb_likes;

CREATE TABLE public.tb_likes (
	id serial4 NOT NULL,
	id_user int4 NOT NULL,
	id_post int4 NOT NULL,
	active bool NOT NULL,
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz NULL,
	CONSTRAINT tb_likes_pkey PRIMARY KEY (id),
	CONSTRAINT tb_likes_id_post_fkey FOREIGN KEY (id_post) REFERENCES public.tb_post(id) ON DELETE CASCADE,
	CONSTRAINT tb_likes_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.tb_user(id) ON DELETE CASCADE
);
```

### Start Server:

#### To start server run the main.py

<br>
<hr>
<br>

### Front-end (Folder project):

```
        ─src
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

<br>

```
cd project
```

#### Install project:

```
npm i
```
<br>

#### run server:
```
npm run dev
```

