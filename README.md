## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

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
