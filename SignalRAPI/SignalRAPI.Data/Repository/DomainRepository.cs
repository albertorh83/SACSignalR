using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using SignalRAPI.Data.Contexts;
using SignalRAPI.Data.Seedwork.Repository;
using SignalRAPI.Data.Seedwork.UnitOfWork;
using SignalRAPI.Data.UnitOfWorks;

namespace SignalRAPI.Data.Repository
{

    public abstract class DomainRepository<T> : IDomainRepository<T> where T : class
    {

        private readonly IQueryableUnitOfWork _coursesUnitOfWork;

        public DomainRepository(IQueryableUnitOfWork coursesUnitOfWork)
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

        public void Delete(T entity)
        {
            _coursesUnitOfWork.Entry<T>(entity).State = EntityState.Deleted;
        }

        public void Delete(Guid entityId)
        {

            T entity = GetSet().Find(entityId);

            if (entity != null)
            {
                Delete(entity);
            }
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
