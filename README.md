## Getting Started with orxe-components

The Carbon based foundational web components library can be easily installed in following steps.

### Access Locally

Pulldown a local copy of this Github repository created for you.

```
$ git clone git@github.com:TaviscaSolutions/orxe-components.git
$ cd [REPO_NAME]
```

Use HTTPs or add ssh to do so. Using ssh is recommended.

### Set correct credentials

Step 2 would be to set correct registry address and login to NPM via console. This is required for our privacy and security.

```
$ npm config set registry  "https://orxe-npm.coditas.dev"
$ npm config get registry //should print - https://orxe-npm.coditas.dev
$ npm logout
$ npm login
```

#### Enter following details when asked -

```
Username: orxe-manager
Password: <Get password from registry admin>
Email: <Get email from registry admin>
```

### Install and Start

```
$ lerna bootstrap --hoist
$ lerna run start --scope <component-name>
```

The start command should open a tab in your browser at http://localhost:3000/

#### Enjoy
