using CampaignCenter.api.Database.Entities;
using CampaignCenter.api.Model;

namespace CampaignCenter.api.Services.Interfaces
{
    public interface IAuthService
    {
        public Task<User?> RegisterAsync(UserCreateDto request);
        public Task<string?> LoginAsync(UserLoginDto request);
    }
}
