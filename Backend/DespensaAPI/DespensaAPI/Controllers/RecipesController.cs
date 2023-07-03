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
        [HttpPost]
        public IActionResult CreateRecipe(
            [FromBody] Recipes recipes, 
            [FromServices] AppDbContext context
            )
        {
            try
            {
                if (recipes is null)
                {
                    return BadRequest();
                }

                context.Recipes?.Add(recipes);
                context.SaveChanges();

                return new CreatedAtRouteResult("GetRecipe",
                    new { id = recipes.RecipeId }, recipes);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return StatusCode(StatusCodes.Status500InternalServerError, ex.ToString());
            }

        }

        [HttpGet("skip{skip:int}/take{take:int}")]
        public async Task<IActionResult> GetRecipes(
            [FromServices] AppDbContext context,
            int skip = 0,
            int take = 10)
        {

            try
            {
                var total = await context.Recipes.CountAsync();
                var recipes = context.Recipes
                    .Include(r => r.Ingredients)
                    .AsNoTracking()
                    .ToList()
                    .Skip(skip)
                    .Take(take);
                if (!recipes.Any())
                {
                    return NotFound("produtos não encontrados...");
                }
                return Ok(new
                {
                    total,
                    recipes
                });
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Ocorreu um problema ao tratar sua solicitação...");
            }

        }

        [HttpGet("{id:int}", Name = "getRecipe")]

        public ActionResult<Recipes> Get(
            [FromServices] AppDbContext context,
            int id
            )
        {
            try
            {
                var receita = context.Recipes.Include(r => r.Ingredients).FirstOrDefault(r => r.RecipeId == id);
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
        public ActionResult Delete(
            int id,
            [FromServices] AppDbContext context)
        {
            try
            {
                var recipe = context.Recipes.Include(r => r.Ingredients).FirstOrDefault(r => r.RecipeId == id);

                if (recipe is null)
                {
                    return NotFound("Receita não localizado...");
                }
                context.Ingredients.RemoveRange(recipe.Ingredients);
                context.Recipes.Remove(recipe);
                context.SaveChanges();

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
