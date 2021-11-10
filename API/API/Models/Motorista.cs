using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Motorista
    {
        [Key]
        public int MotoristaId { get; set; }
        [Required (ErrorMessage = "Insira o nome do motorista", AllowEmptyStrings = false)]
        public string Nome { get; set; }
        // public int NumeroPedido { get; set; }
        [Required(ErrorMessage = "Insira o documento de Rg do Motorista", AllowEmptyStrings = false)]
        public string Rg { get; set; }
        [Required(ErrorMessage = "Insira a placa do veiculo do motorista", AllowEmptyStrings = false)]
        public string Placa { get; set; }
    }
}
