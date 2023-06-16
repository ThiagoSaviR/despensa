using System.Xml.Linq;

namespace DespensaAPI.Models
{
    public class Ingredient
    {
        public int IngredientId { get; set; }
        public int Qtd { get; set; }
        public  string? Type { get; set; }
        public string? IngredientName { get; set; }
    }
}
