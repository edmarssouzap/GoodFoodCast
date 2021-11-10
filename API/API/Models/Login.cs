using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Login
    {
        [Key]
        public int LoginId { get; set; }
        [Required(ErrorMessage = "O nome do usuário é obrigatório", AllowEmptyStrings = false)]
        public string Usuario { get; set; }
        [Required(ErrorMessage = "A senha do usuario é obrigatório", AllowEmptyStrings = false)]
        [StringLength(16, MinimumLength = 5)]
        public string Senha { get; set; }
        // [Required (ErrorMessage = "O usuario é do tipo 'Administrador' ou 'Usuario'", AllowEmptyStrings = false)]
        #nullable enable
        public string? TipoUsuario { get; set; } // Tipo = Administrador/Usuario
        #nullable enable
        public string? Status { get; set; } // Status = A - ativo, I - Inativo
    }
}
