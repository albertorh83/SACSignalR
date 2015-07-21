﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalRAPI.Data.Seedwork.UnitOfWork
{
    public interface IQueryableUnitOfWork : IUnitOfWork
    {
        DbSet<T> GetSet<T>() where T : class;
        DbEntityEntry<T> Entry<T>(T entity) where T : class;
    }
}
