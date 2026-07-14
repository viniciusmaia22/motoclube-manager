using MotoclubeManager.Api.Models;

namespace MotoclubeManager.Api.Dtos.Membros;

public class MembroResponse
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

    public DateTime DataCriacao { get; set; }
}