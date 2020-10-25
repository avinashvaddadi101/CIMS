USE [OMS]
GO

/****** Object:  StoredProcedure [dbo].[sp_deletecustomer]    Script Date: 10/24/2020 8:28:42 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_deletecustomer] @id int 
AS
delete from Customers where id = @id
GO

