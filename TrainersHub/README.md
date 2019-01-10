This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Youtube tutorial on WebApi Core

https://www.youtube.com/watch?v=aIkpVzqLuhA

### `n`

## Project
Create AspNet Core API type project

## Packages installed
install-package Microsoft.EntityFrameworkCore.SqlServer

install-package Microsoft.EntityFrameworkCore.Tools

install-package Microsoft.EntityFrameworkCore.SqlServer.Design

## Connectionstrings 

appsettings.json

    "ConnectionStrings": {
          "DefaultConnection": "Server=.;Database=EFCodeFirst;Trusted_Connection=True;MultipleActiveResultSets=true"
    },

## Create classes for tables


## Create DbContext

## Create intial setup data and call inside Startup.Configure

## Migration

### `Add-migration InitialCreate -o Data/Migrations`
### `Update-Database`

## Database update

## Run api to update initial data

