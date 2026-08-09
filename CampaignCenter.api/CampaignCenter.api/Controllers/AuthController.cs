using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CampaignCenter.api.Database.Entities;
using CampaignCenter.api.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace CampaignCenter.api.Controllers
{
    [Route("api/[controller]")]
    public class AuthController(IConfiguration configuration) : Controller
    {
        public static User user = new();
        [HttpPost("register")]

        public ActionResult<User> Register([FromBody] UserDto request)
        {
            var hashedPassword = new PasswordHasher<User>()
                .HashPassword(user, request.PasswordHash);

            user.UserName = request.UserName;
            user.PasswordHash = hashedPassword;

            return Ok(user);
        }

        [HttpPost]

        public ActionResult<string> Login([FromBody] UserDto request)
        {
            if (user.UserName != request.UserName)
            {
                return BadRequest("User not found.");
            }

            if (new PasswordHasher<User>().VerifyHashedPassword(user, user.PasswordHash, request.PasswordHash) == PasswordVerificationResult.Failed)
            {
                return BadRequest("User or password is wrong.");
            }

            string token = CreateToken(user);

            return Ok(token);
        }

        private string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName)
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(configuration.GetValue<string>("AppSettings:Token")!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

            var tokenDescriptor = new JwtSecurityToken(
                issuer: configuration.GetValue<string>("AppSettings:Issuer"),
                audience: configuration.GetValue<string>("AppSettings:Audience"),
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }
    }
}
