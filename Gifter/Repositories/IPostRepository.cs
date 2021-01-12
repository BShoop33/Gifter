using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        List<Post> GetAll();
        Post GetById(int id);
        void Update(Post post);
        void Delete(int id);

        List<Post> Search(string q, bool sortDesc);
    }
}