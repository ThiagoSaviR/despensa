using System.Collections.Generic;

namespace DespensaAPI.Models
{
    public class Recipes
    {
        public int RecipeId { get; set; }
        public string? Name { get; set;}
        public List<Ingredient>? Ingredients { get; set; }
        public string? Preparation { get; set; }
        public string? Image { get; set; }
    }
}
