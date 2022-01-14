using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : BaseAPIController
    {
      
        private readonly IUserRepository _userRepository;
       public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
           
        }

 
        [AllowAnonymous]
        [HttpGet]
         public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _userRepository.GetMembersAsync();
            return Ok(users);


        }
        //[Authorize]
        [HttpGet("{username}")]
          public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
           return await _userRepository.GetMemberAsync(username);

        }
    }

}