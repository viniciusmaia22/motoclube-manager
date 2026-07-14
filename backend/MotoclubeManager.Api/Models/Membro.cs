namespace MotoclubeManager.Api.Models;

public class Membro
{
    public int Id { get; set; }

    public string Nome { get; set; } = string.Empty;

    public string Apelido { get; set; } = string.Empty;

    public string Telefone { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public DateTime DataIngresso { get; set; }

    public DateTime? DataPromocaoMeioEscudo { get; set; }

    public DateTime? DataPromocaoEscudo { get; set; }

    public DateTime? DataSaida { get; set; }

    public StatusMembro Status { get; set; }

    public CargoMembro Cargo { get; set; }

    public string Observacoes { get; set; } = string.Empty;

    public DateTime DataCriacao { get; set; } = DateTime.UtcNow;
}