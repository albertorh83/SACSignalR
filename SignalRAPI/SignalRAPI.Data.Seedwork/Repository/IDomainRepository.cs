using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SignalRAPI.Data.Seedwork.Repository
{
    public interface IDomainRepository<T> where T : class
    {
        T Get(object id);
        IQueryable<T> Get();
        IQueryable<T> GetFiltered(Expression<Func<T, bool>> filterExpression);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        void Delete(Guid entityId);
        void SaveChanges();
    }
}
