using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Resources
{
    public class StudentResource
    {

        public Guid StudentId { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public string Alias { get; set; }

        public Guid CourseId { get; set; }

    }
}
