using Gifter.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Data
{
    //This is the C# representation of our whole database
    //The DBContext class that this class inherits from is a built-in entity framework class
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        //The DbSet object type represents the entire database to which it is set
        public DbSet<UserProfile> UserProfile { get; set; }

        public DbSet<Post> Post { get; set; }
        public DbSet<Comment> Comment { get; set; }
    }
}
