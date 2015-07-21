using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalRAPI.Data.Seedwork.UnitOfWork
{
    public interface IUnitOfWork
    {
        void SaveChanges();
        void CancelChanges();
    }
}
