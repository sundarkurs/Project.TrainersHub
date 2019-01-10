using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TH.CoreApi.Models;

namespace TH.CoreApi.Data
{
    public class InitialDataSetup
    {
        public static void Initialize(IApplicationBuilder app)
        {
            var scopeFactory = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
            using (var serviceScope = scopeFactory.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<TrainersContext>();
                context.Database.EnsureCreated();

                if (context.ExpertLevels == null || !context.ExpertLevels.Any())
                {
                    context.ExpertLevels.AddRange(GetExpertLevels().ToArray());
                }

                if (context.Workouts == null || !context.Workouts.Any())
                {
                    context.Workouts.AddRange(GetWorkouts().ToArray());
                }

                if (context.Trainers == null || !context.Trainers.Any())
                {
                    context.Trainers.AddRange(GetTrainers().ToArray());
                }

                context.SaveChanges();
            }
        }

        public static List<Trainer> GetTrainers()
        {
            return new List<Trainer>() {
                new Trainer()
                {
                    FirstName = "Sundar",
                    LastName="Urs"
                }
            };
        }

        public static List<Workout> GetWorkouts()
        {
            return new List<Workout>() {
                new Workout()
                {
                    Type = "Crossfire"
                },
                new Workout()
                {
                    Type = "SROD"
                }
            };
        }

        public static List<ExpertLevel> GetExpertLevels()
        {
            return new List<ExpertLevel>() {
                new ExpertLevel()
                {
                    Level = "Beginner"
                },
                new ExpertLevel()
                {
                    Level = "Intermediate"
                }
            };
        }
    }
}
