using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace API.Models
{
    public partial class Pedido
    {
        public Pedido()
        {
            PedidoItems = new HashSet<PedidoItem>();
        }

        public long PedidoId { get; set; }
        public string NumeroPedido { get; set; }
        public int? ClienteId { get; set; }
        public string MeioPagamento { get; set; }
        public decimal? ValorTotal { get; set; }

        [NotMapped]
        public string ItemPedidoDeletadoIds { get; set; }

        public virtual Cliente Cliente { get; set; }
        public virtual ICollection<PedidoItem> PedidoItems { get; set; }
    }
}
