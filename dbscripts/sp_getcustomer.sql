USE [OMS]
GO

/****** Object:  StoredProcedure [dbo].[sp_getcustomer]    Script Date: 10/24/2020 8:29:21 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_getcustomer] @id int 
AS
select * from Customers where id = @id
GO

