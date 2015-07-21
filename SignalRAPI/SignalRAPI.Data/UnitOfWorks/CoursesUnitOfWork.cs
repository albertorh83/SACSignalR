using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SignalRAPI.Data.Contexts;

namespace SignalRAPI.Data.UnitOfWorks
{
    public class CoursesUnitOfWork
    {
        protected CoursesContext _coursesContext;

        public CoursesUnitOfWork(CoursesContext context)
        {
            this._coursesContext = context;
        }

        public void SaveChanges()
        {
            this._coursesContext.SaveChanges();
        }

        public DbSet<T> GetSet<T>() where T : class
        {
            return this._coursesContext.Set<T>();
        }

        public DbEntityEntry<T> Entry<T>(T entity) where T : class
        {
            return this._coursesContext.Entry<T>(entity);
        }
    }
}
