USE TEST_MONITORING_DATABASE
GO

-------------------------------- floor ------------------------------------------------
INSERT INTO FLOOR VALUES (N'FLOOR4');
INSERT INTO FLOOR VALUES (N'FLOOR15LEFT');
INSERT INTO FLOOR VALUES (N'FLOOR15RIGHT');

truncate table FLOOR
----------------------------- DISTRIBUTION_BOARD ---------------------------------
-- (db_id, db_name, floor_id, row_db, col_db, status, note)
----------------------------------- floor 4 ------------------------------------
SELECT * FROM DISTRIBUTION_BOARD;
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-1', 1, 10, 120, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-2', 1, 20, 120, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-3', 1, 30, 120, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-4', 1, 40, 120, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-5', 1, 50, 120, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-6', 1, 60, 120, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-7', 1, 70, 120, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-8', 1, 80, 120, N'active',  N'-');

------------------------------- floor 15 - left
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-1', 2, 50, 10, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-2', 2, 50, 23, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-3', 2, 50, 36, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-4', 2, 50, 49, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-5', 2, 50, 62, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-6', 2, 50, 75, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-7', 2, 50, 88, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-8', 2, 50, 101, N'active',  N'-');

-------------------------------- floor 15 - right
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-9', 2, 50, 10, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-10', 2, 50, 23, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-11', 2, 50, 36, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'15N-12', 2, 50, 49, N'active',  N'-');

------------------------------------- RACK ---------------------------------------------
-------------------------------- floor 4 --------------------------------------
SELECT*FROM RACK;
INSERT INTO RACK VALUES (N'4-D-1', 1, N'',20, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-2', 1, N'',20, 20, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-3', 1, N'',20, 30, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-4', 1, N'',20, 40, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-5', 1, N'',20, 50, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-6', 1, N'',20, 60, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-7', 1, N'',20, 70, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-8', 1, N'',20, 80, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-9', 1, N'',20, 90, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-10', 1, N'',20, 100, N'active',N'-');

INSERT INTO RACK VALUES (N'4-C-1', 1, N'',40, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-2', 1, N'',40, 20, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-3', 1, N'',40, 30, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-4', 1, N'',40, 40, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-5', 1, N'',40, 50, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-6', 1, N'',40, 60, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-7', 1, N'',40, 70, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-8', 1, N'',40, 80, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-9', 1, N'',40, 90, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-10', 1, N'',40, 100, N'active',  N'-');

INSERT INTO RACK VALUES (N'4-B-1', 1, N'',60, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-2', 1, N'',60, 20, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-3', 1, N'',60, 30, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-4', 1, N'',60, 40, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-5', 1, N'',60, 50, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-6', 1, N'',60, 60, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-7', 1, N'',60, 70, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-8', 1, N'',60, 80, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-9', 1, N'',60, 90, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-10', 1, N'',60, 100, N'active',  N'-');

INSERT INTO RACK VALUES (N'4-A-1', 1, N'',80, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-2', 1, N'',80, 20, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-3', 1, N'',80, 30, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-4', 1, N'',80, 40, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-5', 1, N'',80, 50, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-6', 1, N'',80, 60, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-7', 1, N'',80, 70, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-8', 1, N'',80, 80, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-9', 1, N'',80, 90, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-A-10', 1, N'',80, 100, N'active',  N'-');


--floor 15 - left
-- 15-A-01 --> 15-A-15
select*from RACK;
INSERT INTO RACK VALUES (N'15-A-1', 2,1,20, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-2', 2,1,30, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-3', 2,1,40, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-4', 2,1,50, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-5', 2,1,60, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-6', 2,1,70, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-7', 2,1,80, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-8', 2,1,90, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-9', 2,1,10, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-10', 2,1,110, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-11', 2,1,120, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-12', 2,1,130, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-13', 2,1,140, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-14', 2,1,150, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-15', 2,1,160, 10, N'active',  N'-');
-- 15-B-01 --> 15-B-15
INSERT INTO RACK VALUES (N'15-B-1', 2,1,20, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-2', 2,1,30, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-3', 2,1,40, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-4', 2,1,50, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-5', 2,1,60, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-6', 2,1,70, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-7', 2,1,80, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-8', 2,1,90, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-9', 2,1,100, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-10', 2,1,110, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-11', 2,1,120, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-12', 2,1,130, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-13', 2,1,140, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-14', 2,1,150, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-B-15', 2,1,160, 10, N'active',  N'-');

-- 15-C-01 --> 15-C-15

INSERT INTO RACK VALUES (N'15-C-1', 2, 1,20, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-2', 2, 1,30, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-3', 2, 1,40, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-4', 2, 1,50, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-5', 2, 1,60, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-6', 2, 1,70, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-7', 2, 1,80, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-8', 2, 1,90, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-9', 2, 1,100, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-10', 2, 1,110, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-11', 2, 1,120, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-12', 2, 1,130, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-13', 2, 1,140, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-14', 2, 1,150, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-C-15', 2, 1,160, 10, N'active',  N'-');

-------------------------------------- WORKDESK ----------------------------------------
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,20,25, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,26,25, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,32,25, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,20,36, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,26,36, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,32,36, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,20,47, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,26,47, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,32,47, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,20,58, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,26,58, N'active', N'-');
INSERT INTO WORKDESKS VALUES (N'?????', N'????',2,1,32,58, N'active', N'-');


--floor 15 - right


----------------------------------- CONNECTION_LINES ------------------------------------

truncate table RACK

SELECT*FROM WORKDESKS