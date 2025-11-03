using Newtonsoft.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class ToDoItems
    {
        public int Id { get; set; }

        
        [MaxLength(25, ErrorMessage = "Max Length is 25 numbers!!")]
        [Required]
        public string Title { get; set; }

        [Required]
        [MaxLength(100, ErrorMessage ="Max Length is 100 numbers!!")]
        public string Description { get; set; }

        public bool IsCompleted { get; set; }   
    }
}
