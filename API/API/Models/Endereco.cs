using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Endereco
    {
        [Key]
        public int EnderecoId { get; set; }
        [Required (ErrorMessage = "Insira o logradouro", AllowEmptyStrings = false)]
        public string Logradouro { get; set; }
        [Required(ErrorMessage = "Insira o Numero")]
        [Range(1,9999)]
        public int Numero { get; set; }
        [Required(ErrorMessage = "Insira o Bairro", AllowEmptyStrings = false)]
        public string Bairro { get; set; }
        [Required(ErrorMessage = "Insira o Cidade", AllowEmptyStrings = false)]
        public string Cidade { get; set; }
        [Required(ErrorMessage = "Insira o Estado", AllowEmptyStrings = false)]
        public string Estado { get; set; }
        [Required(ErrorMessage = "Insira o Cep", AllowEmptyStrings = false)]
        [DataType(DataType.PostalCode)]
        public string Cep { get; set; }
    }
}
