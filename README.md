![Solarnergy](https://github.com/redwine-1/solarenergy/blob/main/solarenergy.png)

# Solar Energy

## How to install

Download the example [or clone the repo](https://github.com/redwine-1/solarenergy.git):

```sh
curl https://github.com/redwine-1/solarenergy.git
cd solarenergy
```

Create a .env.local file:

```
touch .env.local
```

Add following environment variables:

```
MONGO_URI: mongodb+srv://<username>:<password>@cluster0.gpr5z.mongodb.net/solar
SECRET: secret for password encription
NEXT_PUBLIC_BASE_URL: in local environment http://localhost:3000
```

Install it and run:

```sh
npm install
npm run dev
```

or:

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/redwine-1/solarenergy)

# Demo 👉 [Solar Energy](https://solarenergy.vercel.app)

Go to 👉 [https://solarenergy.vercel.app/admin/login](https://solarenergy.vercel.app/admin/login) to visit admin panel

Use following user name and password:

```
username: solarenergy@energy.com
password: 12345
```
