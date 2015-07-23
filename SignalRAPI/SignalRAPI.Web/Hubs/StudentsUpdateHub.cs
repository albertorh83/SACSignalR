using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using Microsoft.AspNet.SignalR;

namespace SignalRAPI.Web.Hubs
{
    [EnableCors("*", "*", "*")]
    public class StudentsUpdateHub : Hub
    {
        public void Send(string name, string message)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(name, message);
        }
    }
}