This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Youtube tutorial on WebApi Core

https://www.youtube.com/watch?v=aIkpVzqLuhA
https://weblogs.asp.net/senthil/code-first-ef-core

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

    public class TrainersDbContext : DbContext
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
        services.AddDbContext<TrainersDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
        services.AddMvc();
    }

## Create intial setup data and call inside Startup.Configure

## Migration and Update database related commands

### `PM> Add-migration InitialCreate -o Data/Migrations`
### `PM> Update-Database`
### `PM> Remove-Migration`


Command to create entities from database
### `Scaffold-DbContext "Server=.;Database=Blogging;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models`

## Hosting it in IIS

1. Publish Core Api into some folder
2. Create a website in IIS and point to the above folder
3. Go to application pool and change .NET CLR Version to No Managed Code

If it's not working then install WebHost
https://stackify.com/how-to-deploy-asp-net-core-to-iis/


