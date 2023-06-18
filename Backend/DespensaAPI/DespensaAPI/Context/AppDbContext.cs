using DespensaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DespensaAPI.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :
            base(options)
        {
        }

        public DbSet<Recipes>? Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }

    }
}
