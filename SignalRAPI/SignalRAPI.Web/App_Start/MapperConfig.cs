using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using SignalRAPI.Resources;
using SignalRAPI.Domain.CoursesAdministration;
using SignalRAPI.Resources;

namespace SignalRAPI.Web
{
    public static class MapperConfig
    {
        public static void ConfigMaps()
        {

            Mapper.CreateMap<Course, CourseResource>();
            Mapper.CreateMap<Student, StudentResource>();

        }
    }
}