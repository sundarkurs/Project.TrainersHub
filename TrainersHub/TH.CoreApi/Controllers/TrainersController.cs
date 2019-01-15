using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TH.CoreApi.Data;
using TH.CoreApi.Models;

namespace TH.CoreApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("HealthPolicy")]
    public class TrainersController : ControllerBase
    {
        private readonly TrainersDbContext _context;

        public TrainersController(TrainersDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Trainer> GetTrainers()
        {
            return _context.Trainers;
        }

        //// GET api/trainers
        //[HttpGet]
        //public async Task<IActionResult> GetAsync()
        //{
        //    var trainers = await _context.Trainers.AsNoTracking().ToListAsync();
        //    return Ok(trainers);
        //}

        // GET api/trainers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTrainer([FromRoute]int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //var trainer = await _context.Trainers.Include(tw => tw.TrainerWorkouts).FirstOrDefaultAsync(t => t.Id == id);
            var trainer = await _context.Trainers.FirstOrDefaultAsync(t => t.Id == id);

            if (trainer == null)
            {
                return NotFound();
            }

            return Ok(trainer);
        }

        [HttpGet("{id:int}/workouts")]
        public IActionResult GetTrainerWorkouts([FromRoute]int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trainerWorkouts = from tw in _context.TrainerWorkouts
                     join t in _context.Trainers on tw.TrainerId equals t.Id
                     join w in _context.Workouts on tw.WorkoutId equals w.Id
                     where tw.TrainerId == id
                     select new
                     {
                         w.Id,
                         w.Type
                     };

            if (trainerWorkouts == null)
            {
                return NotFound();
            }

            return Ok(trainerWorkouts);
        }

        [HttpGet("{id:int}/workouts/{workoutId:int}")]
        public IActionResult GetTrainerWorkoutById([FromRoute]int id, int workoutId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trainerWorkouts = from tw in _context.TrainerWorkouts
                                  join t in _context.Trainers on tw.TrainerId equals t.Id
                                  join w in _context.Workouts on tw.WorkoutId equals w.Id
                                  where tw.TrainerId == id && tw.WorkoutId == workoutId
                                  select new
                                  {
                                      w.Id,
                                      w.Type
                                  };

            if (trainerWorkouts == null)
            {
                return NotFound();
            }

            return Ok(trainerWorkouts);
        }

        [HttpGet("{id:int}/workout/{workoutId:int}/expertise")]
        public async Task<IActionResult> GetTrainerWorkoutExpertise([FromRoute]int id, int workoutId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trainerWorkout = await _context.TrainerWorkouts
                .Include(t => t.Trainer)
                .Include(w => w.Workout)
                .Include(e => e.ExpertLevel).FirstOrDefaultAsync(tw => tw.WorkoutId == workoutId);

            if (trainerWorkout == null)
            {
                return NotFound();
            }

            return Ok(trainerWorkout.ExpertLevel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainer([FromRoute] int id, [FromBody] Trainer trainer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != trainer.Id)
            {
                return BadRequest();
            }

            var trainerFromDb = await _context.Trainers.FindAsync(id);

            return Ok(trainer);
        }

        [HttpPost]
        public async Task<IActionResult> PostTrainer([FromBody] Trainer trainer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Trainers.Add(trainer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatient", new { id = trainer.Id });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainer([FromRoute] int id, [FromBody] Trainer trainer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trainerFromDb = await _context.Trainers.FindAsync(id);

            if (trainerFromDb == null)
            {
                return NotFound();
            }

            return Ok(trainer);
        }

    }
}
