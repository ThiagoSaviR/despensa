using DespensaAPI.Context;
using DespensaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DespensaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RecipesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateRecipe([FromBody] Recipes recipes)
        {
            try
            {
                if (recipes is null)
                {
                    return BadRequest();
                }

                _context.Recipes?.Add(recipes);
                _context.SaveChanges();

                return new CreatedAtRouteResult("GetRecipe",
                    new { id = recipes.RecipeId }, recipes);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return StatusCode(StatusCodes.Status500InternalServerError, ex.ToString());
            }

        }

        [HttpGet]
        public ActionResult<IEnumerable<Recipes>> GetRecipes()
        {

            try
            {
                var recipes = _context.Recipes.Include(r => r.Ingredients).AsNoTracking().ToList();
                if (recipes is null)
                {
                    return NotFound("produtos não encontrados...");
                }
                return recipes;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Ocorreu um problema ao tratar sua solicitação...");
            }

        }

        [HttpGet("{id:int}", Name = "getRecipe")]

        public ActionResult<Recipes> Get(int id)
        {
            try
            {
                var receita = _context.Recipes.Include(r => r.Ingredients).FirstOrDefault(r => r.RecipeId == id);
                if (receita is null)
                {
                    return NotFound("Receita não encontrado...");
                }
                return receita;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                   "Ocorreu um problema ao tratar sua solicitação...");
            }
        }


        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var recipe = _context.Recipes.Include(r => r.Ingredients).FirstOrDefault(r => r.RecipeId == id);

                if (recipe is null)
                {
                    return NotFound("Receita não localizado...");
                }
                _context.Recipes.Remove(recipe);
                _context.SaveChanges();

                return Ok(recipe);
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError,
                   "Ocorreu um problema ao tratar sua solicitação...");
            }
        }


    }
}
