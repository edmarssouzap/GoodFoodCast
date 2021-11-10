using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using API.Models;

#nullable disable

namespace API.Models
{
    public partial class GoodFoodDBContext : DbContext
    {
        public GoodFoodDBContext()
        {
        }

        public GoodFoodDBContext(DbContextOptions<GoodFoodDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cliente> Clientes { get; set; }
        public virtual DbSet<Item> Items { get; set; }
        public virtual DbSet<Pedido> Pedidos { get; set; }
        public virtual DbSet<PedidoItem> PedidoItems { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.ToTable("Cliente");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Item>(entity =>
            {
                entity.ToTable("Item");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Preco).HasColumnType("decimal(18, 2)");
            });

            modelBuilder.Entity<Pedido>(entity =>
            {
                entity.HasKey(e => e.PedidoId);

                entity.ToTable("Pedido");

                entity.Property(e => e.ValorTotal)
                    .HasColumnType("decimal(18, 2)")
                    .HasColumnName("ValorToral");

                entity.Property(e => e.NumeroPedido)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MeioPagamento)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("MeioPagamento");

                entity.HasOne(d => d.Cliente)
                    .WithMany(p => p.Pedidos)
                    .HasForeignKey(d => d.ClienteId)
                    .HasConstraintName("FK_Pedido_Cliente");
            });

            modelBuilder.Entity<PedidoItem>(entity =>
            {
                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PedidoItems)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK_PedidoItems_Item");

                entity.HasOne(d => d.Pedido)
                    .WithMany(p => p.PedidoItems)
                    .HasForeignKey(d => d.PedidoId)
                    .HasConstraintName("FK_PedidoItems_Pedido");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

        public DbSet<API.Models.Login> Login { get; set; }
    }
}
