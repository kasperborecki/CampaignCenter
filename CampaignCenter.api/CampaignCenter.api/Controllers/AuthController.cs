using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CampaignCenter.api.Database.Entities;
using CampaignCenter.api.Model;
using CampaignCenter.api.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace CampaignCenter.api.Controllers
{
    [Route("api/[controller]")]
    public class AuthController(IAuthService authService) : Controller
    {
        public static User user = new();
        [HttpPost("register")]

        public async Task<ActionResult<User>> Register([FromBody] UserCreateDto request)
        {
           var user = await authService.RegisterAsync(request);

           if(user is null)
                return BadRequest("User with this email already exists.");

            return Ok(user);
        }

        [HttpPost]

        public ActionResult<string> Login([FromBody] UserLoginDto request)
        {
            var token = authService.LoginAsync(request);

            if(token is null)
                return BadRequest("Wrongg credentials.");

            return Ok(token);
        }
    }
}
