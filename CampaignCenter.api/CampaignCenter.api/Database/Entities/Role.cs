using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CampaignCenter.api.Database.Entities
{
    public class Role
    {
        public required Guid Id { get; set; } = Guid.NewGuid();
        public required string Name { get; set; }
        public required string NormalizedName { get; set; }
        public string? Description { get; set; }
        public DateTime? CreatedAt { get; set; }
    }

    public class RolesCOnfiguration: IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> b)
        {
            b.ToTable("Roles", "auth");

            b.HasKey(x => x.Id);
            b.Property(x => x.Name).HasMaxLength(100).IsRequired(true);
            b.Property(x => x.NormalizedName).HasMaxLength(100).IsRequired(true);
            b.Property(x => x.Description).HasMaxLength(512).IsRequired(true);
        }
    }
}
