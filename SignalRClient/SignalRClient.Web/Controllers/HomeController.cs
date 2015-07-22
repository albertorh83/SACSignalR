using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;

namespace SignalRClient.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string view)
        {

            if (!view.IsNullOrWhiteSpace())
            {
                return PartialView("Partials/" + view);
            }

            return View();
        }
    }
}