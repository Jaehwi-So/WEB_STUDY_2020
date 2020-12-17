using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;

namespace Crawling_Test.Models
{
    public class MusicModel
    {
        public int Rank { get; set; }
        public string Title { get; set; }
        public string Singer { get; set; }

    }


}