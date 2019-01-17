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
    public class WorkoutsController : ControllerBase
    {
        private readonly TrainersDbContext _context;

        public WorkoutsController(TrainersDbContext context)
        {
            _context = context;
        }

        // GET api/workouts
        [HttpGet]
        public IEnumerable<Workout> GetWorkouts()
        {
            return _context.Workouts;
        }

        // GET api/workouts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorkout([FromRoute]int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workout = await _context.Workouts.FirstOrDefaultAsync(t => t.Id == id);

            if (workout == null)
            {
                return NotFound();
            }

            return Ok(workout);
        }

        // POST api/workouts
        [HttpPost]
        public async Task<IActionResult> PostWorkout([FromBody] Workout workout)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Workouts.Add(workout);
            await _context.SaveChangesAsync();

            return Ok(String.Format("Workout type {0} created successfully.", workout.Type));
        }

        // PUT api/workouts/1
        [HttpPut("{id}")]
        public IActionResult PutWorkout([FromRoute] int id, [FromBody] Workout workout)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workout.Id)
            {
                return BadRequest();
            }

            _context.Entry(workout).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return Ok(String.Format("Workout type {0} updated successfully.", workout.Type));
        }

        // DELETE api/workouts/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkout([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var workout = await _context.Workouts.FindAsync(id);
            if (workout == null)
            {
                return NotFound();
            }

            _context.Workouts.Remove(workout);
            _context.SaveChanges();
            return Ok(String.Format("Workout type {0} deleted", workout.Type));
        }

    }
}
