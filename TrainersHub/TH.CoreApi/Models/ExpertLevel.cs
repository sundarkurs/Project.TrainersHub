using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TH.CoreApi.Models
{
    public class ExpertLevel
    {
        public ExpertLevel()
        {
            //TrainerWorkouts = new HashSet<TrainerWorkout>();
        }

        [Key]
        public int Id { get; set; }

        [MaxLength(50)]
        public string Level { get; set; }

        [MaxLength(250)]
        public string Avatar { get; set; }

        [MaxLength(500)]
        public string Description { get; set; }

        //public virtual ICollection<TrainerWorkout> TrainerWorkouts { get; set; }
    }
}
