using Microsoft.AspNetCore.Mvc;
using MotoclubeManager.Api.Models;

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
    public ActionResult<List<Membro>> Listar()
    {
        return Ok(Membros);
    }

    [HttpGet("{id}")]
    public ActionResult<Membro> BuscarPorId(int id)
    {
        var membro = Membros.FirstOrDefault(membro => membro.Id == id);

        if (membro is null)
        {
            return NotFound();
        }

        return Ok(membro);
    }

    [HttpPost]
    public ActionResult<Membro> Cadastrar(Membro novoMembro)
    {
        novoMembro.Id = ProximoId;
        novoMembro.DataCriacao = DateTime.UtcNow;

        Membros.Add(novoMembro);
        ProximoId++;

        return CreatedAtAction(nameof(BuscarPorId), new { id = novoMembro.Id }, novoMembro);
    }

    [HttpPut("{id}")]
    public IActionResult Atualizar(int id, Membro membroAtualizado)
    {
        var membro = Membros.FirstOrDefault(membro => membro.Id == id);

        if (membro is null)
        {
            return NotFound();
        }

        membro.Nome = membroAtualizado.Nome;
        membro.Apelido = membroAtualizado.Apelido;
        membro.Telefone = membroAtualizado.Telefone;
        membro.Email = membroAtualizado.Email;
        membro.DataIngresso = membroAtualizado.DataIngresso;
        membro.DataPromocaoMeioEscudo = membroAtualizado.DataPromocaoMeioEscudo;
        membro.DataPromocaoEscudo = membroAtualizado.DataPromocaoEscudo;
        membro.DataSaida = membroAtualizado.DataSaida;
        membro.Status = membroAtualizado.Status;
        membro.Cargo = membroAtualizado.Cargo;
        membro.Observacoes = membroAtualizado.Observacoes;

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
}