using System;
using System.Collections.Generic;
using System.Linq;
using SignalRAPI.Data.Seedwork.Repository;
using SignalRAPI.Domain.CoursesAdministration;
using SignalRAPI.Resources;

namespace SignalRAPI.AppServices.CoursesAppServices
{
    public class CoursesAppService
    {

        private readonly IDomainRepository<Course> _coursesRepository; 

        public CoursesAppService(IDomainRepository<Course> coursesRepository)
        {
            if (coursesRepository == null)
            {
                throw  new ArgumentNullException("coursesRepository");
            }

            this._coursesRepository = coursesRepository;
        }

        public List<CourseResource> GetCourses()
        {
            var coursesModel = this._coursesRepository.Get().ToList();
            var coursesResource = AutoMapper.Mapper.Map<List<Course>, List<CourseResource>>(coursesModel);

            return coursesResource;

        }

    }
}
