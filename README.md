# Social media sample project

## Database setup

``` shell
$ mysql -u root
```

```mysql
CREATE DATABASE socialmediadb;

CREATE USER socialuser IDENTIFIED BY 'socialpass';

GRANT ALL PRIVILIGES ON socialmediadb.* to socialuser;

FLUSH PRIVILEGES;
```

## Project Structure
``` shell
    src
    ├── controllers  # functions to connect routes to db operations
    ├── db           # db connections and models
    ├── public       # html/css/js for static part of the site
    └── routes       # express middlewares route wise
```
## Api Documentation
### `users`

## Folder structure
### `Frontend`
```shell
├── app
│   └── social.js
├── components
│   └── navbar.html
├── css
│   └── bootstrap.css
├── fonts
│   ├── muli.css
│   ├── Muli-Italic.woff2
│   └── Muli.woff2
├── index.html
└── js
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js
```
## Project Structure

```shell

.
├── controllers
│   ├── comments.js
│   ├── posts.js
│   └── users.js
├── db
│   └── models.js
├── public
│   ├── app
│   │   ├── allPost.js
│   │   ├── navbar.js
│   │   ├── social.js
│   │   ├── socialstyle.css
│   │   └── writePost.js
│   ├── components
│   │   ├── allPost.html
│   │   ├── footer.html
│   │   ├── navbar.html
│   │   └── writePost.html
│   ├── css
│   │   └── bootstrap.css
│   ├── fonts
│   │   ├── muli.css
│   │   ├── Muli-Italic.woff2
│   │   └── Muli.woff2
│   ├── index.html
│   └── js
│       ├── bootstrap.js
│       ├── jquery-3.4.1.js
│       └── popper.js
├── routes
│   ├── posts
│   │   ├── comments.js
│   │   └── index.js
│   └── users
│       └── index.js
├── server.js
└── utils
    └── username.js
```