using Microsoft.AspNetCore.Mvc;
using MotoclubeManager.Api.Models;
using MotoclubeManager.Api.Dtos.Membros;

namespace MotoclubeManager.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MembrosController : ControllerBase
{
    private static readonly List<Membro> Membros = new()
    {
        new Membro
        {
            Id = 1,
            Nome = "João Silva",
            Apelido = "João",
            Telefone = "(21) 99999-0001",
            Email = "joao@email.com",
            DataIngresso = new DateTime(2024, 1, 15),
            Status = StatusMembro.Ativo,
            Cargo = CargoMembro.Padrao,
            Observacoes = "Membro fundador"
        },
        new Membro
        {
            Id = 2,
            Nome = "Carlos Souza",
            Apelido = "Carlão",
            Telefone = "(21) 99999-0002",
            Email = "carlos@email.com",
            DataIngresso = new DateTime(2024, 3, 10),
            Status = StatusMembro.Licenciado,
            Cargo = CargoMembro.Secretario,
            Observacoes = "Licenciado temporariamente"
        }
    };

    private static int ProximoId = 3;

    [HttpGet]
    public ActionResult<List<MembroResponse>> Listar([FromQuery] StatusMembro? status)
    {
        var membros = Membros.AsEnumerable();

        if (status is not null)
        {
            membros = membros.Where(membro => membro.Status == status);
        }

        var response = membros
            .Select(MapearParaResponse)
            .ToList();

        return Ok(response);
    }
    
    [HttpGet("{id}")]
    public ActionResult<MembroResponse> BuscarPorId(int id)
    {
        var membro = Membros.FirstOrDefault(membro => membro.Id == id);

        if (membro is null)
        {
            return NotFound();
        }

        return Ok(MapearParaResponse(membro));
    }

    [HttpPost]
    public ActionResult<MembroResponse> Cadastrar(CreateMembroRequest request)
    {
        var novoMembro = new Membro
        {
            Id = ProximoId,
            Nome = request.Nome,
            Apelido = request.Apelido,
            Telefone = request.Telefone,
            Email = request.Email,
            DataIngresso = request.DataIngresso,
            DataPromocaoMeioEscudo = request.DataPromocaoMeioEscudo,
            DataPromocaoEscudo = request.DataPromocaoEscudo,
            DataSaida = request.DataSaida,
            Status = request.Status,
            Cargo = request.Cargo,
            Observacoes = request.Observacoes,
            DataCriacao = DateTime.UtcNow
        };

        Membros.Add(novoMembro);
        ProximoId++;

        var response = MapearParaResponse(novoMembro);

        return CreatedAtAction(nameof(BuscarPorId), new { id = novoMembro.Id }, response);
    }

    [HttpPut("{id}")]
    public IActionResult Atualizar(int id, UpdateMembroRequest request)
    {
        var membro = Membros.FirstOrDefault(membro => membro.Id == id);

        if (membro is null)
        {
            return NotFound();
        }

        membro.Nome = request.Nome;
        membro.Apelido = request.Apelido;
        membro.Telefone = request.Telefone;
        membro.Email = request.Email;
        membro.DataIngresso = request.DataIngresso;
        membro.DataPromocaoMeioEscudo = request.DataPromocaoMeioEscudo;
        membro.DataPromocaoEscudo = request.DataPromocaoEscudo;
        membro.DataSaida = request.DataSaida;
        membro.Status = request.Status;
        membro.Cargo = request.Cargo;
        membro.Observacoes = request.Observacoes;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        var membro = Membros.FirstOrDefault(membro => membro.Id == id);

        if (membro is null)
        {
            return NotFound();
        }

        Membros.Remove(membro);

        return NoContent();
    }

    private static MembroResponse MapearParaResponse(Membro membro)
    {
        return new MembroResponse
        {
            Id = membro.Id,
            Nome = membro.Nome,
            Apelido = membro.Apelido,
            Telefone = membro.Telefone,
            Email = membro.Email,
            DataIngresso = membro.DataIngresso,
            DataPromocaoMeioEscudo = membro.DataPromocaoMeioEscudo,
            DataPromocaoEscudo = membro.DataPromocaoEscudo,
            DataSaida = membro.DataSaida,
            Status = membro.Status,
            Cargo = membro.Cargo,
            Observacoes = membro.Observacoes,
            DataCriacao = membro.DataCriacao
        };
    }
}