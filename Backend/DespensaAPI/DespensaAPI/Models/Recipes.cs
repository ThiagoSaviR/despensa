using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DespensaAPI.Models
{
    public class Recipes
    {
        [Key]
        public int RecipeId { get; set; }
        public string? Name { get; set;}
        public List<Ingredient>? Ingredients { get; set; }
        public string? Preparation { get; set; }
        public string? Image { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
    }

    public class Ingredient
    {
        [Key]
        public int IngredientId { get; set; }
        public int Qtd { get; set; }
        public string? Type { get; set; }
        public string? IngredientName { get; set; }

    }
}
