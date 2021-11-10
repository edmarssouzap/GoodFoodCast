using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class PedidoItem
    {
        public long PedidoItemId { get; set; }
        public long? PedidoId { get; set; }
        public int? ItemId { get; set; }
        public int? Quantidade { get; set; }

        public virtual Item Item { get; set; }
        public virtual Pedido Pedido { get; set; }
    }
}
