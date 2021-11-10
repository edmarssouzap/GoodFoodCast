using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace API.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Pedidos = new HashSet<Pedido>();
        }

        public int ClienteId { get; set; }
        public string Nome { get; set; }

        public virtual ICollection<Pedido> Pedidos { get; set; }
    }
}
