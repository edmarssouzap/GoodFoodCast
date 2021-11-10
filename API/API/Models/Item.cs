using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Item
    {
        public Item()
        {
            PedidoItems = new HashSet<PedidoItem>();
        }

        public int ItemId { get; set; }
        public string Nome { get; set; }
        public decimal? Preco { get; set; }

        public virtual ICollection<PedidoItem> PedidoItems { get; set; }
    }
}
