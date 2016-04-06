using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AlbumAddOrUpdateResponseDto: AlbumDto
    {
        public AlbumAddOrUpdateResponseDto(Album entity)
            :base(entity)
        {

        }
    }
}
