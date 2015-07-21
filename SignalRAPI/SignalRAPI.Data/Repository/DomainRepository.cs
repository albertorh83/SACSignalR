using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using SignalRAPI.Data.Contexts;
using SignalRAPI.Data.Seedwork.UnitOfWorks;
using SignalRAPI.Data.UnitOfWorks;

namespace SignalRAPI.Data.Repository
{

    public class DomainRepository<T> where T : class
    {

        private readonly IUnitOfWork _coursesUnitOfWork;

        public DomainRepository(IUnitOfWork coursesUnitOfWork)
        {
            this._coursesUnitOfWork = coursesUnitOfWork;
        }

        public T Get(object id)
        {
            return GetSet().Find(id);
        }

        public IQueryable<T> Get()
        {
            return GetSet().AsQueryable();
        }

        public IQueryable<T> GetFiltered(Expression<Func<T, bool>> filterExpression)
        {
            return GetSet().Where(filterExpression).AsQueryable();
        }

        public void Add(T entity)
        {
            GetSet().Add(entity);
        }

        public void Update(T entity)
        {
            GetSet().Attach(entity);
            _coursesUnitOfWork.Entry<T>(entity).State = EntityState.Modified;
        }

        public void SaveChanges()
        {
            this._coursesUnitOfWork.SaveChanges();
        }

        #region private methods

        private DbSet<T> GetSet()
        {
            return this._coursesUnitOfWork.GetSet<T>();
        }

        #endregion

    }

}
