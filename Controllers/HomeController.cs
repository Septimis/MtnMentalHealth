using Microsoft.AspNetCore.Mvc;

namespace MtnMentalHealth.Controllers {
    public class HomeController : Controller {
        private IConfiguration config;
        private readonly ILogger<HomeController> logger;

        public HomeController(ILogger<HomeController> a_logger, IConfiguration a_config) {
            this.logger = a_logger;
            this.config = a_config;
        }

        public IActionResult home() => View();
        public IActionResult services() => View();
        public IActionResult team() => View();
        public IActionResult patientCenter() => View();
        public IActionResult contact() => View();
    }
}