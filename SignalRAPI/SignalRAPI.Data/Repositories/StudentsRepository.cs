using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalRAPI.Data.Repository;
using SignalRAPI.Data.UnitOfWorks;
using SignalRAPI.Domain.CoursesAdministration;

namespace SignalRAPI.Data.Repositories
{
    public class StudentsRepository : DomainRepository<Student>
    {
        public StudentsRepository(CoursesUnitOfWork coursesUnitOfWork)
            : base(coursesUnitOfWork)
        {
        }
    }

}
