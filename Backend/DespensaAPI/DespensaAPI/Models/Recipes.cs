using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DespensaAPI.Models
{
    public class Recipes
    {
        [Key]
        public int RecipeId { get; set; }

        [Required]
        [StringLength(80)]
        public string? Name { get; set;}

        [Required]
        public List<Ingredient>? Ingredients { get; set; }
        
        [Required]
        [StringLength(1000)]
        public string? Preparation { get; set; }
       
        [StringLength(1000)]
        public string? Image { get; set; }
    }

    public class Ingredient
    {
        [Key]
        public int IngredientId { get; set; }
        [Required]
        public int Qtd { get; set; }
        [Required]
        public string? Type { get; set; }
        [Required]
        public string? IngredientName { get; set; }

    }
}
