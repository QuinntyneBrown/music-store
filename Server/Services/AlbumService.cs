using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class AlbumService : IAlbumService
    {
        public AlbumService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Albums;
            this.cache = cacheProvider.GetCache();
        }

        public AlbumAddOrUpdateResponseDto AddOrUpdate(AlbumAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Album());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AlbumAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<AlbumDto> Get()
        {
            ICollection<AlbumDto> response = new HashSet<AlbumDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new AlbumDto(entity)); }    
            return response;
        }


        public AlbumDto GetById(int id)
        {
            return new AlbumDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Album> repository;
        protected readonly ICache cache;
    }
}
