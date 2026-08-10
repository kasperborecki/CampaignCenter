using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CampaignCenter.api.Database.Entities
{
    public class UserRoles
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid UserId { get; set; }
        public Guid UserEmail { get; set; }
        public Guid RoleId { get; set; }
        public Guid RoleName { get; set; }
    }

    public class UserRolesConfig : IEntityTypeConfiguration<UserRoles>
    {
        public void Configure(EntityTypeBuilder<UserRoles> builder)
        {
            builder.ToTable("UserRoles", "auth");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.UserId).IsRequired(true);
            builder.Property(x => x.UserEmail).IsRequired(true);
            builder.Property(x => x.RoleId).IsRequired(true);
            builder.Property(x => x.RoleName).IsRequired(true);
        }
    }
}
