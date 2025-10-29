using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class ToDoApiContext : DbContext
    {
        public ToDoApiContext(DbContextOptions<ToDoApiContext> options) : base(options) { }

        public DbSet<TodoItems> TodoItems { get; set; }
    }
}