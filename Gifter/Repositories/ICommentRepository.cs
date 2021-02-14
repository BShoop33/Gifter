using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface ICommentRepository
    {
        void Add(Comment comment);

        List<Comment> GetAll();

        Comment GetById(int id);

        Comment GetByPostId(int id);

        void Update(Comment comment);

        void Delete(int id);
    }
}