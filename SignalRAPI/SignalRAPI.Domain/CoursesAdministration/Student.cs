using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalRAPI.Domain.CoursesAdministration
{
    public class Student
    {
        [Key]
        public Guid StudentId { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string MiddleName { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 1)]
        public string LastName { get; set; }

        public string Alias { get; set; }

        public Guid CourseId { get; set; }

        public virtual Course Course { get; set; }

    }

}
