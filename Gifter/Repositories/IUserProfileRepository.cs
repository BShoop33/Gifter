using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        
        void Delete(int id);

        void Update(UserProfile userProfile);

        List<UserProfile> GetAll();

        UserProfile GetById(int id);

        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}