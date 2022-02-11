using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
namespace API.Interfaces
{
     public interface ITokenService
    {
       Task<string> CreateToken(AppUser user);
        
    }

}