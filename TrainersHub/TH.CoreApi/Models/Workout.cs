using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TH.CoreApi.Models
{
    public class Workout
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(50)]
        public string Type { get; set; }
    }
}
