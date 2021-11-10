using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        private readonly GoodFoodDBContext _context;

        public PedidosController(GoodFoodDBContext context)
        {
            _context = context;
        }

        // GET: api/Pedidos
        [HttpGet]
        public async Task<Object> GetPedidos()
        {
            return await _context.Pedidos.Join(_context.Clientes, o =>o.ClienteId,c=>c.ClienteId,(o,c)=> new {o.PedidoId,o.NumeroPedido,Cliente=c.Nome,o.MeioPagamento,o.ValorTotal }).ToListAsync();
        }

        // GET: api/Pedidos/5
        [HttpGet("{id}")]
        public async Task<object> GetPedido(long id)
        {
            var pedido = await _context.Pedidos.FindAsync(id);
            pedido.ItemPedidoDeletadoIds = "";

            var pedidoDetails =await _context.PedidoItems.Where(o => o.PedidoId == id).Join(_context.Items, o => o.ItemId, i => i.ItemId, (o, i) => new { o.PedidoId, o.PedidoItemId, o.ItemId, ItemName= i.Nome, i.Preco , o.Quantidade, Total = o.Quantidade * i.Preco}).ToListAsync();

            return Ok(new { pedido, pedidoDetails });

        }

        

        // POST: api/Pedidos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pedido>> PostPedido(Pedido pedido)
        {
            try
            {
                //Tabela de pedido
                if(pedido.PedidoId == 0)
                {
                    _context.Pedidos.Add(pedido);
                }
                else
                {
                    _context.Entry(pedido).State = EntityState.Modified;
                }

                //Tabela de pedidoItems
                foreach (var item in pedido.PedidoItems)
                {
                    if (item.PedidoItemId == 0)
                    {
                        _context.PedidoItems.Add(item);
                    }
                    else
                    {
                        _context.Entry(item).State = EntityState.Modified;
                    }
                   
                }

                //Deleta items do pedido
                foreach (var id in pedido.ItemPedidoDeletadoIds.Split(",").Where(x => x!=""))
                {
                    PedidoItem x = _context.PedidoItems.Find(Convert.ToInt64(id));
                    _context.PedidoItems.Remove(x);
                }
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        // DELETE: api/Pedidos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePedido(long id)
        {
            var pedido = await _context.Pedidos.Include(o =>o.PedidoItems).SingleOrDefaultAsync(x => x.PedidoId == id);

            foreach (var item in pedido.PedidoItems.ToList())
            {
                _context.PedidoItems.Remove(item);

            }

            _context.Pedidos.Remove(pedido);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool PedidoExists(long id)
        {
            return _context.Pedidos.Any(e => e.PedidoId == id);
        }
    }
}
