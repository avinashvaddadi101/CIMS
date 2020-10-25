using System;
using System.Collections.Generic;
using System.Data.SqlClient;



namespace OMDatabase
{
    public class Database
    {
        public List<Customer> GetCustomers1()
        {
            
            var customers = new List<Customer>
            {                
                new Customer { Id = 1, Name = "James", Dob = "01/01/2000", Address = "New Jersey" },
                new Customer { Id = 2, Name = "John", Dob = "01/02/2000", Address = "New York" },
                new Customer { Id = 3, Name = "Robert", Dob = "01/03/2000", Address = "Pennsylvania" },
                new Customer { Id = 4, Name = "William", Dob = "01/04/2000", Address = "Washington" },
                new Customer { Id = 5, Name = "David", Dob = "01/05/2000", Address = "Texas" },
                new Customer { Id = 6, Name = "Richard", Dob = "01/06/2000", Address = "Florida" },
                new Customer { Id = 7, Name = "Joseph", Dob = "01/07/2000", Address = "Ohio" },
                new Customer { Id = 8, Name = "Charles", Dob = "01/08/2000", Address = "Utah" },
                new Customer { Id = 9, Name = "Christopher", Dob = "01/09/2000", Address = "Minnesota" },
                new Customer { Id = 10, Name = "Daniel", Dob = "01/10/2000", Address = "North Carolina" },
            };
            
            return customers;
        }

        public List<Customer> GetCustomers()
        {
            var customers = new List<Customer>();
            SqlConnection cnn;
            string connetionString = "Data Source=AVINASHV-T1;Initial Catalog=OMS;User ID=appuser;Password=ashu";
            cnn = new SqlConnection(connetionString);
            try
            {
                cnn.Open();
                var cmd = new SqlCommand("dbo.sp_getcustomers", cnn);

                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                SqlDataReader rdr = cmd.ExecuteReader();
                
                while (rdr.Read())
                {
                    customers.Add(new Customer()
                    {
                        Id = Convert.ToInt16(rdr["id"]),
                        Name = Convert.ToString(rdr["name"]),
                        Dob = Convert.ToString(rdr["dob"]),
                        //Address = Convert.ToInt16(rdr["id"]) == 1 ? String.Concat(Convert.ToString(rdr["address"]), ", USA") : Convert.ToString(rdr["address"])
                        Address = Convert.ToString(rdr["address"])


                    });
          
                }

            }
            catch (Exception ex)
            {
              
            }
            finally
            {
                cnn.Close();
              
            }
            return customers;
        }

        public List<Customer> GetCustomer(int id)
        {
            var customers = new List<Customer>();
            SqlConnection cnn;
            string connetionString = "Data Source=AVINASHV-T1;Initial Catalog=OMS;User ID=appuser;Password=ashu";
            cnn = new SqlConnection(connetionString);
            try
            {
                cnn.Open();
                var cmd = new SqlCommand("dbo.sp_getcustomer", cnn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@id", id));
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    customers.Add(new Customer()
                    {
                        Id = Convert.ToInt16(rdr["id"]),
                        Name = Convert.ToString(rdr["name"]),
                        Dob = Convert.ToString(rdr["dob"]),
                        //Address = Convert.ToInt16(rdr["id"]) == 1 ? String.Concat(Convert.ToString(rdr["address"]), ", USA") : Convert.ToString(rdr["address"])
                        Address = Convert.ToString(rdr["address"])


                    });

                }

            }
            catch (Exception ex)
            {

            }
            finally
            {
                cnn.Close();

            }
            return customers;
        }

        public void DeleteCustomer(int id)
        {
            var customers = new List<Customer>();
            SqlConnection cnn;
            string connetionString = "Data Source=AVINASHV-T1;Initial Catalog=OMS;User ID=appuser;Password=ashu";
            cnn = new SqlConnection(connetionString);
            try
            {
                cnn.Open();
                var cmd = new SqlCommand("dbo.sp_deletecustomer", cnn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@id", id));
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    //customers.Add(new Customer()
                    //{
                    //    Id = Convert.ToInt16(rdr["id"]),
                    //    Name = Convert.ToString(rdr["name"]),
                    //    Dob = Convert.ToString(rdr["dob"]),
                    //    //Address = Convert.ToInt16(rdr["id"]) == 1 ? String.Concat(Convert.ToString(rdr["address"]), ", USA") : Convert.ToString(rdr["address"])
                    //    Address = Convert.ToString(rdr["address"])


                    //});

                }

            }
            catch (Exception ex)
            {

            }
            finally
            {
                cnn.Close();

            }
            
        }

        public void createCustomer(string name, string dob, string address)
        {
            var customers = new List<Customer>();
            SqlConnection cnn;
            string connetionString = "Data Source=AVINASHV-T1;Initial Catalog=OMS;User ID=appuser;Password=ashu";
            cnn = new SqlConnection(connetionString);
            try
            {
                cnn.Open();
                var cmd = new SqlCommand("dbo.sp_createcustomer", cnn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@name", name));
                cmd.Parameters.Add(new SqlParameter("@dob", dob));
                cmd.Parameters.Add(new SqlParameter("@address", address));
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    //customers.Add(new Customer()
                    //{
                    //    Id = Convert.ToInt16(rdr["id"]),
                    //    Name = Convert.ToString(rdr["name"]),
                    //    Dob = Convert.ToString(rdr["dob"]),
                    //    //Address = Convert.ToInt16(rdr["id"]) == 1 ? String.Concat(Convert.ToString(rdr["address"]), ", USA") : Convert.ToString(rdr["address"])
                    //    Address = Convert.ToString(rdr["address"])


                    //});

                }

            }
            catch (Exception ex)
            {

            }
            finally
            {
                cnn.Close();

            }

        }

        public void updateCustomer(int id, string name, string dob, string address)
        {
            var customers = new List<Customer>();
            SqlConnection cnn;
            string connetionString = "Data Source=AVINASHV-T1;Initial Catalog=OMS;User ID=appuser;Password=ashu";
            cnn = new SqlConnection(connetionString);
            try
            {
                cnn.Open();
                var cmd = new SqlCommand("dbo.sp_updatecustomer", cnn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@id", id));
                cmd.Parameters.Add(new SqlParameter("@name", name));
                cmd.Parameters.Add(new SqlParameter("@dob", dob));
                cmd.Parameters.Add(new SqlParameter("@address", address));
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    //customers.Add(new Customer()
                    //{
                    //    Id = Convert.ToInt16(rdr["id"]),
                    //    Name = Convert.ToString(rdr["name"]),
                    //    Dob = Convert.ToString(rdr["dob"]),
                    //    //Address = Convert.ToInt16(rdr["id"]) == 1 ? String.Concat(Convert.ToString(rdr["address"]), ", USA") : Convert.ToString(rdr["address"])
                    //    Address = Convert.ToString(rdr["address"])


                    //});

                }

            }
            catch (Exception ex)
            {

            }
            finally
            {
                cnn.Close();

            }

        }
    }
}
