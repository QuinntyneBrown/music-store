using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IAlbumService
    {
        AlbumAddOrUpdateResponseDto AddOrUpdate(AlbumAddOrUpdateRequestDto request);
        ICollection<AlbumDto> Get();
        AlbumDto GetById(int id);
        dynamic Remove(int id);
    }
}
