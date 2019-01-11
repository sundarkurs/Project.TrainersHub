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

## Create entities


## DbContext
Create DbContext and initialize in Startup.ConfigureServices()

    public class TrainersContext : DbContext
    {

        public TrainersContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Trainer> Trainers { get; set; }
    }
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddDbContext<TrainersContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
        services.AddMvc();
    }

## Create intial setup data and call inside Startup.Configure

## Migration and Update database related commands

### `PM> Add-migration InitialCreate -o Data/Migrations`
### `PM> Update-Database`
### `PM> Remove-Migration`


Command to create entities from database
### `Scaffold-DbContext "Server=.;Database=Blogging;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models`

## Run api to update initial data

