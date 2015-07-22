using System.Web.Http;
using System.Web.Http.Cors;
using SignalRAPI.AppServices.CoursesAppServices;
using SignalRAPI.Data.Contexts;
using SignalRAPI.Data.Repositories;
using SignalRAPI.Data.UnitOfWorks;
using SignalRAPI.Web.Controllers.Helpers;

namespace SignalRAPI.Web.Controllers
{

    [RoutePrefix("Api/Courses")]
    [EnableCors("*", "*", "*")]
    [CamelCaseControllerConfig()]
    public class CoursesController : ApiController
    {

        private readonly CoursesAppService _coursesAppService;

        public CoursesController()
        {

            var coursesContext = new CoursesContext();
            var coursesUnitOfWork = new CoursesUnitOfWork(coursesContext);
            var coursesRespository = new CoursesRepository(coursesUnitOfWork);

            this._coursesAppService = new CoursesAppService(coursesRespository);

        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            var courses = this._coursesAppService.GetCourses();
            return Ok(courses);
        }

    }
}
