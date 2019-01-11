using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TH.CoreApi.Data;
using TH.CoreApi.Models;

namespace TH.CoreApi.Controllers
{
    [Route("api/[controller]")]
    public class TrainersController : ControllerBase
    {
        private readonly TrainersDbContext _context;

        public TrainersController(TrainersDbContext context)
        {
            _context = context;
        }

        // GET api/trainers
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var trainers = await _context.Trainers.AsNoTracking().ToListAsync();
            return Ok(trainers);
        }

        // GET api/trainers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var trainer = await _context.Trainers.FindAsync(id);

            if (trainer == null)
            {
                return NotFound();
            }

            return Ok(trainer);
        }
        
    }
}
