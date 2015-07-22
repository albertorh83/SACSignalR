using System.Threading.Tasks;
using System.Web.Cors;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;

[assembly: OwinStartupAttribute(typeof(SignalRAPI.Web.Startup))]
namespace SignalRAPI.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {


            app.Map("/signalr", map =>
            {

                var corsPolicy = new CorsPolicy
                {
                    AllowAnyHeader = true,
                    AllowAnyMethod = true
                };

                corsPolicy.AllowAnyOrigin = true;
                corsPolicy.AllowAnyHeader = true;
                corsPolicy.AllowAnyMethod = true;
                corsPolicy.SupportsCredentials = true;
                
                map.UseCors(new CorsOptions
                {
                    PolicyProvider = new CorsPolicyProvider
                    {
                        PolicyResolver = r => Task.FromResult(corsPolicy)
                    }
                });

                map.RunSignalR(new HubConfiguration()
                {
                    EnableJSONP = true
                });

            });


            ConfigureAuth(app);

        }
    }
}
