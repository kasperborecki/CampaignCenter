using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CampaignCenter.api.Database.Entities
{
    public class Roles
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Role { get; set; }
        public string NormalizedRole { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }

    public class RolesConfig : IEntityTypeConfiguration<Roles>
    {
        public void Configure(EntityTypeBuilder<Roles> builder)
        {
            builder.ToTable("Roles", "auth");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Role).IsRequired(true).HasMaxLength(50);
            builder.Property(x => x.NormalizedRole).IsRequired(true).HasMaxLength(50);
        }
    }
}
