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
    public class ExpertLevelsController : ControllerBase
    {
        private readonly TrainersDbContext _context;

        public ExpertLevelsController(TrainersDbContext context)
        {
            _context = context;
        }

        // GET api/expertlevels
        [HttpGet]
        public IEnumerable<ExpertLevel> GetExpertLevels()
        {
            return _context.ExpertLevels;
        }

        // GET api/expertlevels/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetExpertLevel([FromRoute]int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var expertLevel = await _context.ExpertLevels.FirstOrDefaultAsync(t => t.Id == id);

            if (expertLevel == null)
            {
                return NotFound();
            }

            return Ok(expertLevel);
        }

        // POST api/expertlevels
        [HttpPost]
        public async Task<IActionResult> PostExpertLevel([FromBody] ExpertLevel expertLevel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ExpertLevels.Add(expertLevel);
            await _context.SaveChangesAsync();

            return Ok(String.Format("Expert level {0} created successfully.", expertLevel.Level));
        }

        // PUT api/expertlevels/1
        [HttpPut("{id}")]
        public IActionResult PutExpertLevel([FromRoute] int id, [FromBody] ExpertLevel expertLevel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != expertLevel.Id)
            {
                return BadRequest();
            }

            _context.Entry(expertLevel).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return Ok(String.Format("Expert level {0} updated successfully.", expertLevel.Level));
        }

        // DELETE api/expertlevels/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExpertLevel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var expertLevel = await _context.ExpertLevels.FindAsync(id);
            if (expertLevel == null)
            {
                return NotFound();
            }

            _context.ExpertLevels.Remove(expertLevel);
            _context.SaveChanges();
            return Ok(String.Format("Expert level {0} deleted", expertLevel.Level));
        }

    }
}
