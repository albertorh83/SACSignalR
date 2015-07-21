using SignalRAPI.Domain.CoursesAdministration;

namespace SignalRAPI.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<SignalRAPI.Data.Contexts.CoursesContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(SignalRAPI.Data.Contexts.CoursesContext context)
        {
            context.Courses.AddOrUpdate(r => r.CourseId, new Course()
            {
                CourseId = new Guid("3C0E7DFD-D73A-4FDA-A37B-D7896147EACC"),
                Name = "Curso A"
            });

            context.Courses.AddOrUpdate(r => r.CourseId, new Course()
            {
                CourseId = new Guid("D7896147-D73A-4FDA-A37B-3C0E7DFDEACC"),
                Name = "Curso B"
            });

            context.Students.AddOrUpdate(r => r.StudentId, new Student()
            {
                StudentId = new Guid("9951B7BE-86AB-4279-BA82-7783AD341F63"),
                FirstName = "Alberto",
                MiddleName = ".",
                LastName = "Romero",
                Alias = "Alberto",
                CourseId = new Guid("3C0E7DFD-D73A-4FDA-A37B-D7896147EACC")
            });

            context.Students.AddOrUpdate(r => r.StudentId, new Student()
            {
                StudentId = new Guid("9951B7BE-4279-86AB-BA82-7783AD341F63"),
                FirstName = "Josep",
                MiddleName = ".",
                LastName = "Person",
                Alias = "Person",
                CourseId = new Guid("3C0E7DFD-D73A-4FDA-A37B-D7896147EACC")
            });

            context.Students.AddOrUpdate(r => r.StudentId, new Student()
            {
                StudentId = new Guid("7783AD34-86AB-4279-BA82-9951B7BE1F63"),
                FirstName = "Daniel",
                MiddleName = ".",
                LastName = "Canet",
                Alias = "Dani",
                CourseId = new Guid("3C0E7DFD-D73A-4FDA-A37B-D7896147EACC")
            });

            context.Students.AddOrUpdate(r => r.StudentId, new Student()
            {
                StudentId = new Guid("86AB995E-1B7B-4279-BA82-7783AD341F63"),
                FirstName = "Sergio",
                MiddleName = "A",
                LastName = "Cortés",
                Alias = "Yo",
                CourseId = new Guid("D7896147-D73A-4FDA-A37B-3C0E7DFDEACC")
            });
        }
    }
}
