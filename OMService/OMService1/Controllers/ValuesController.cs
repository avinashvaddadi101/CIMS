using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using OMDatabase;

namespace OMService1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        //[EnableCors]
        [HttpGet]
        public ActionResult<IEnumerable<Customer>> Get()
        {

            var customers = new List<Customer>();
            //var customersnew = new List<Customer>();
            var db = new Database();
            customers = db.GetCustomers();
            /*foreach(var customer in customers)
            {
                if (customer.Id == 1)
                {
                    customer.Address = String.Concat(customer.Address, ", USA");
                }
                customersnew.Add(customer);
                
            }
            */
            
            return customers;

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<IEnumerable<Customer>> Get(int id)
        {
            var customers = new List<Customer>();
            var db = new Database();
            customers = db.GetCustomer(id);
            return customers;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Customer customer)
        {
            var db = new Database();
            db.createCustomer(customer.Name, customer.Dob, customer.Address);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Customer customer)
        {
            var db = new Database();
            db.updateCustomer(id, customer.Name, customer.Dob, customer.Address);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //var customers = new List<Customer>();
            var db = new Database();
            db.DeleteCustomer(id);
        }
    }
}
