using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using SignalRAPI.AppServices.CoursesAppServices;
using SignalRAPI.Data.Contexts;
using SignalRAPI.Data.Repositories;
using SignalRAPI.Data.UnitOfWorks;
using SignalRAPI.Web.Controllers.Helpers;

namespace SignalRAPI.Web.Controllers
{
    [RoutePrefix("Api/Students")]
    [EnableCors("*", "*", "*")]
    [CamelCaseControllerConfig()]
    public class StudentsController : ApiController
    {

        private readonly StudentsAppService _studentsAppService;

        public StudentsController()
        {

            var coursesContext = new CoursesContext();
            var coursesUnitOfWork = new CoursesUnitOfWork(coursesContext);
            var studentsRespository = new StudentsRepository(coursesUnitOfWork);

            this._studentsAppService = new StudentsAppService(studentsRespository);

        }

        [HttpGet]
        [Route("Courses/{courseId}")]
        public IHttpActionResult Get(Guid courseId)
        {
            return Ok(this._studentsAppService.GetCourseStudents(courseId));
        }

    }
}
