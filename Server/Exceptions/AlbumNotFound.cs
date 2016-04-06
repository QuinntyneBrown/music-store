using System;

namespace Chloe.Server.Exceptions
{
    public class AlbumNotFoundException: NotFoundException
    {
        public AlbumNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public AlbumNotFoundException(string message)
            :base(message)
        {

        }

        public AlbumNotFoundException(string message, Exception inner)
        {

        }
    }
}
