using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TH.CoreApi.Models
{
    public class TrainerWorkout
    {
        [Key]
        public int Id { get; set; }

        public int TrainerId { get; set; }
        public int WorkoutId { get; set; }
        public int ExpertLevelId { get; set; }

        public Trainer Trainer { get; set; }
        public Workout Workout { get; set; }
        public ExpertLevel ExpertLevel { get; set; }

    }
}
