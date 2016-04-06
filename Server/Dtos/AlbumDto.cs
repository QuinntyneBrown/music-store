using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AlbumDto
    {
        public AlbumDto(Album entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public AlbumDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
