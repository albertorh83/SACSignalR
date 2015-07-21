using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalRAPI.Domain.CoursesAdministration;

namespace SignalRAPI.Data.CoursesAdministration
{
    public class CoursesAdministrationContext : DbContext
    {
        public DbSet<Course> Courses { get; set; }

        public DbSet<Student> Students { get; set; }
    }
}
