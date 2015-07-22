using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
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

        public StudentResource GetStudent(Guid studentId)
        {
            var studentModel = this._studentsRepository.Get(studentId);
            var studentResource = AutoMapper.Mapper.Map<Student, StudentResource>(studentModel);
            return studentResource;
        }

        public List<StudentResource> GetCourseStudents(Guid courseId)
        {

            var studentsModel = this._studentsRepository.GetFiltered(r => r.CourseId == courseId).ToList();
            var studentsResource = AutoMapper.Mapper.Map<List<Student>, List<StudentResource>>(studentsModel);

            return studentsResource;

        }

        public StudentResource CreateStudent(StudentResource studentResource)
        {

            Student studentModel = AutoMapper.Mapper.Map<StudentResource, Student>(studentResource);
            this._studentsRepository.Add(studentModel);
            this._studentsRepository.SaveChanges();

            return AutoMapper.Mapper.Map<Student, StudentResource>(studentModel);

        }

        public StudentResource UpdateStudent(StudentResource studentResource)
        {
            Student studentModel = AutoMapper.Mapper.Map<StudentResource, Student>(studentResource);
            this._studentsRepository.Update(studentModel);
            this._studentsRepository.SaveChanges();
            return AutoMapper.Mapper.Map<Student, StudentResource>(studentModel);
        }

        public StudentResource DeleteStudent(Guid studentId)
        {
            var studentModel = this._studentsRepository.Get(studentId);
            this._studentsRepository.Delete(studentModel);

            return AutoMapper.Mapper.Map<Student, StudentResource>(studentModel);
        }

    }
}
