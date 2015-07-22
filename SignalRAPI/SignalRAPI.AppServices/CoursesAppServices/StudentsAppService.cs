using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalRAPI.Data.Seedwork.Repository;
using SignalRAPI.Domain.CoursesAdministration;
using SignalRAPI.Resources;

namespace SignalRAPI.AppServices.CoursesAppServices
{
    public class StudentsAppService
    {

        private readonly IDomainRepository<Student> _studentsRepository; 

        public StudentsAppService(IDomainRepository<Student> studentsRepository)
        {

            if (studentsRepository == null)
            {
                throw new Exception("studentsRepository");
            }

            this._studentsRepository = studentsRepository;

        }

        public List<StudentResource> GetCourseStudents(Guid courseId)
        {

            var studentsModel = this._studentsRepository.GetFiltered(r => r.CourseId == courseId).ToList();
            var studentsResource = AutoMapper.Mapper.Map<List<Student>, List<StudentResource>>(studentsModel);

            return studentsResource;

        }

    }
}
