USE [OMS]
GO
/****** Object:  StoredProcedure [dbo].[sp_getcustomers]    Script Date: 8/30/2020 11:50:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_getcustomers]
AS
select * from Customers
GO;
GO
