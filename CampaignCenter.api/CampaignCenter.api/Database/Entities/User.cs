using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CampaignCenter.api.Database.Entities
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string UserName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string Theme { get; set; } = "light";
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime LastUpdatedAt { get; set; } = DateTime.UtcNow;
    }

    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users", "auth");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.UserName).IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.Email).IsRequired(true).HasMaxLength(100);  
            builder.Property(x => x.PasswordHash).IsRequired(true).HasMaxLength(255);
            builder.Property(x => x.Theme).IsRequired(true).HasMaxLength(6);
            builder.Property(x => x.CreatedAt).IsRequired(true);
            builder.Property(x => x.LastUpdatedAt).IsRequired(true);

            builder.HasIndex(x => new {x.Email, x.UserName}).IsUnique();
        }
    }
}
