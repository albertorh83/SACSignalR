using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Microsoft.AspNet.SignalR;
using SignalRAPI.AppServices.CoursesAppServices;
using SignalRAPI.Data.Contexts;
using SignalRAPI.Data.Repositories;
using SignalRAPI.Data.UnitOfWorks;
using SignalRAPI.Resources;
using SignalRAPI.Web.Controllers.Helpers;
using SignalRAPI.Web.Hubs;

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
        [Route("{studentId}")]
        public IHttpActionResult Get(Guid studentId)
        {
            var studentResource = this._studentsAppService.GetStudent(studentId);
            return Ok(studentResource);
        }

        [HttpGet]
        [Route("Courses/{courseId}")]
        public IHttpActionResult GetStudentsFromCourse(Guid courseId)
        {
            return Ok(this._studentsAppService.GetCourseStudents(courseId));
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]StudentResource studentResource)
        {

            var resource = this._studentsAppService.CreateStudent(studentResource);

            var studentsUpdateHub = GlobalHost.ConnectionManager.GetHubContext<StudentsUpdateHub>();
            studentsUpdateHub.Clients.All.refreshStudents();

            return Ok(resource);
        
        }

        [HttpPut]
        [Route("{studentId}")]
        public IHttpActionResult Put(Guid studentId, [FromBody] StudentResource studentResource)
        {

            var resource = this._studentsAppService.UpdateStudent(studentResource);

            var studentsUpdateHub = GlobalHost.ConnectionManager.GetHubContext<StudentsUpdateHub>();
            studentsUpdateHub.Clients.All.refreshStudents();
            
            return Ok(resource);
        
        }

        [HttpDelete]
        [Route("{studentId}")]
        public IHttpActionResult Delete(Guid studentId)
        {

            var resource = this._studentsAppService.DeleteStudent(studentId);

            var studentsUpdateHub = GlobalHost.ConnectionManager.GetHubContext<StudentsUpdateHub>();
            studentsUpdateHub.Clients.All.refreshStudents();

            return Ok(resource);
        
        }

    }
}
