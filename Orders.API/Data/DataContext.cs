using Microsoft.EntityFrameworkCore;
using Orders.API.Models;

namespace Orders.API.Data
{
    public class DataContext : DbContext
    {
         public DataContext(DbContextOptions<DataContext> options):base(options){}

        public DbSet<Order> Orders {get;set;}
        public DbSet<OrderItem> OrderItems {get;set;}
    }
}