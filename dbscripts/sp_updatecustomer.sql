USE [OMS]
GO

/****** Object:  StoredProcedure [dbo].[sp_updatecustomer]    Script Date: 10/24/2020 8:29:51 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[sp_updatecustomer] @id int, @name varchar(50), @dob varchar(50), @address varchar(50)
AS
update customers 
set name = @name, dob = @dob, address = @address
where id = @id
GO

