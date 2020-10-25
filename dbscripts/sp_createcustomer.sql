USE [OMS]
GO

/****** Object:  StoredProcedure [dbo].[sp_createcustomer]    Script Date: 10/24/2020 8:27:45 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_createcustomer] @name varchar(50), @dob varchar(50), @address varchar(50)
AS
insert into customers(name, dob, address)
values(@name, @dob, @address)
GO

