using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SignalRAPI.Web.Startup))]
namespace SignalRAPI.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
