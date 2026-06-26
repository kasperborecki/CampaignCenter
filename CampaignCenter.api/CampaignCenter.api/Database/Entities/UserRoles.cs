using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CampaignCenter.api.Database.Entities
{
    public class UserRoles
    {
        public required Guid RoleId { get; set; }
        public required Guid UserId { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class UserRolesConfiguration : IEntityTypeConfiguration<UserRoles>
    {
        public void Configure(EntityTypeBuilder<UserRoles> b)
        {
            b.ToTable("UserRoles", "auth");

            b.HasKey(x => new { x.UserId, x.RoleId });
        }
    }
}
