﻿using Gifter.Data;
using Gifter.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Gifter.Repositories
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserProfile> GetAll()
        {
            return _context.UserProfile
                .ToList();
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile
                .FirstOrDefault(p => p.Id == id);
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);
        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }

        public void Update(UserProfile userProfile)
        {
            _context.Entry(userProfile).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var userProfile = GetById(id);
            _context.UserProfile.Remove(userProfile);
            _context.SaveChanges();
        }
    }
}