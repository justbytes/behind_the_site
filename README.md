# Behind the Site

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Description

This project was created for users that want to keep track of inventory for their E-commerce store. In this app users can view, add, and delete items from your database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

### Installation

To install necessary dependencies, run the following command

```md
npm init -y
npm i
```

### Usage

Copy the env files and put in your mysql info.

```md
cp .env.EXAMPLE .env
```

Next you will need to create and seed the database by inputing the following commands:

```md
mysql -u root < db/schema.sql
npm run seed
```

Finally start the app by runnng the following command:

```md
npm run start
```

### Contributing

If you would like to contribute please fork the repo and submit a pull request.

### Questions

If you have any questions please reach out via Github, my username is jessemarino.
