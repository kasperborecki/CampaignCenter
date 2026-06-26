using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Text.Json;

namespace CampaignCenter.api.Database.Entities
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string PasswordHash { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime? LastActive { get; set; }
        public required bool IsArchived { get; set; }
    }

    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> b)
        {
            b.ToTable("Users", "auth");

            b.HasKey(x => x.Id);

            b.Property(x => x.FirstName).HasMaxLength(50).IsRequired(true); ;
            b.Property(x => x.LastName).HasMaxLength(50).IsRequired(true); ;
            b.Property(x => x.Email).HasMaxLength(100).IsRequired(true); ;
            b.Property(x => x.PasswordHash).HasMaxLength(512).IsRequired(true);
            b.Property(x => x.PasswordHash).HasMaxLength(512).IsRequired(true);
            b.Property(x => x.IsArchived).IsRequired(true);
        }
    }
}
