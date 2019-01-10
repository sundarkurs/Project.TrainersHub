using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TH.CoreApi.Models
{
    public class Trainer
    {
        public Trainer()
        {
            TrainerWorkouts = new HashSet<TrainerWorkout>();
        }

        [Key]
        public int Id { get; set; }

        [MaxLength(50)]
        public string FirstName { get; set; }

        [MaxLength(50)]
        public string LastName { get; set; }

        [MaxLength(200)]
        public string Email { get; set; }

        [MaxLength(15)]
        public string Phone { get; set; }

        public DateTime DateOfBirth { get; set; }

        [MaxLength(200)]
        public string Address { get; set; }

        public DateTime DateOfJoin { get; set; }

        [MaxLength(200)]
        public string ProfilePic { get; set; }


        public virtual ICollection<TrainerWorkout> TrainerWorkouts { get; set; }
    }
}
