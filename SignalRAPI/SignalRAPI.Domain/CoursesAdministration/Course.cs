using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalRAPI.Domain.CoursesAdministration
{
    public class Course
    {
        [Key]
        public Guid CourseId { get; set; }

        [StringLength(50, MinimumLength = 1)]
        public string Name { get; set; }

        public virtual ICollection<Student> Students { get; set; }

    }
}
