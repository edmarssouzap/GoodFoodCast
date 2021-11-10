export class LoginModel {
  loginId: number;
  usuario: string;
  senha: string;
  tipoUsuario: string; // Tipo = Administrador/Usuario
  status: string; // Variavel char -> Status = A - ativo, I - Inativo
}
