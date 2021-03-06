﻿using Microsoft.AspNetCore.Builder;
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
                var context = serviceScope.ServiceProvider.GetService<TrainersDbContext>();
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

                if (context.TrainerWorkouts == null || !context.TrainerWorkouts.Any())
                {
                    context.TrainerWorkouts.AddRange();
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
                    LastName="Urs",
                    Address="Bangalore",
                    DateOfBirth = new DateTime(1983, 06, 10),
                    Email = "sundarkurs@gmail.com",
                    Phone = "9999988888"
                }
            };
        }

        public static List<Workout> GetWorkouts()
        {
            return new List<Workout>() {
                new Workout()
                {
                    Type = "Crossfire",
                    Description = "Strengthening and power exercises.",
                    Avatar = ""
                },
                new Workout()
                {
                    Type = "SROD",
                    Description = "Core and functional.",
                    Avatar = ""
                }
            };
        }

        public static List<ExpertLevel> GetExpertLevels()
        {
            return new List<ExpertLevel>() {
                new ExpertLevel()
                {
                    Level = "Beginner",
                    Description = "Only for beginners.",
                    Avatar = ""
                },
                new ExpertLevel()
                {
                    Level = "Intermediate",
                    Description = "Intermediate level.",
                    Avatar = ""
                }
            };
        }
    }
}
