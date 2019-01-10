using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TH.CoreApi.Models;

namespace TH.CoreApi.Data
{
    public class TrainersContext : DbContext
    {

        public TrainersContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Trainer> Trainers { get; set; }

        public DbSet<ExpertLevel> ExpertLevels { get; set; }

        public DbSet<Workout> Workouts { get; set; }

        public DbSet<TrainerWorkout> TrainerWorkouts { get; set; }

    }
}
