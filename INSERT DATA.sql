USE TEST_MONITORING_DATABASE
GO
----------------------------- DISTRIBUTION_BOARD ---------------------------------
-- (db_id, db_name, floor_id, row_db, col_db, status, note)
----------------------------------- floor 4
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-1', 1, 1, 12, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-2', 1, 2, 12, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-3', 1, 3, 12, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-4', 1, 4, 12, N'active', N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-5', 1, 5, 12, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-6', 1, 6, 12, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-7', 1, 7, 12, N'active',  N'-');
INSERT INTO DISTRIBUTION_BOARD VALUES (N'4N-8', 1, 8, 12, N'active',  N'-');

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
-------------------------------- floor 4
INSERT INTO RACK VALUES (N'4-D-1', 1, 2, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-2', 1, 2, 20, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-3', 1, 2, 30, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-4', 1, 2, 40, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-5', 1, 2, 50, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-6', 1, 2, 60, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-7', 1, 2, 70, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-8', 1, 2, 80, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-9', 1, 2, 90, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-D-10', 1, 2, 100, N'active',  N'-');

INSERT INTO RACK VALUES (N'4-C-1', 1, 4, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-2', 1, 4, 20, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-3', 1, 4, 30, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-4', 1, 4, 40, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-5', 1, 4, 50, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-6', 1, 4, 60, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-7', 1, 4, 70, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-8', 1, 4, 80, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-9', 1, 4, 90, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-C-10', 1, 4, 100, N'active',  N'-');

INSERT INTO RACK VALUES (N'4-B-1', 1, 6, 10, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-2', 1, 6, 20, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-3', 1, 6, 30, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-4', 1, 6, 40, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-5', 1, 6, 50, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-6', 1, 6, 60, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-7', 1, 6, 70, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-8', 1, 6, 80, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-9', 1, 6, 90, N'active',  N'-');
INSERT INTO RACK VALUES (N'4-B-10', 1, 6, 100, N'active',  N'-');


--floor 15 - left
-- 15-A-01 --> 15-A-15
INSERT INTO RACK VALUES (N'15-A-1', 2, 2, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-2', 2, 3, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-3', 2, 4, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-4', 2, 5, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-5', 2, 6, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-6', 2, 7, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-7', 2, 8, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-8', 2, 9, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-9', 2, 10, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-10', 2, 11, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-11', 2, 12, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-12', 2, 13, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-13', 2, 14, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-14', 2, 15, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-15', 2, 16, 1, N'active',  N'-');
-- 15-B-01 --> 15-B-15
INSERT INTO RACK VALUES (N'15-A-1', 2, 2, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-2', 2, 3, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-3', 2, 4, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-4', 2, 5, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-5', 2, 6, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-6', 2, 7, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-7', 2, 8, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-8', 2, 9, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-9', 2, 10, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-10', 2, 11, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-11', 2, 12, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-12', 2, 13, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-13', 2, 14, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-14', 2, 15, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-15', 2, 16, 1, N'active',  N'-');

-- 15-C-01 --> 15-C-15

INSERT INTO RACK VALUES (N'15-A-1', 2, 2, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-2', 2, 3, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-3', 2, 4, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-4', 2, 5, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-5', 2, 6, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-6', 2, 7, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-7', 2, 8, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-8', 2, 9, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-9', 2, 10, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-10', 2, 11, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-11', 2, 12, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-12', 2, 13, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-13', 2, 14, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-14', 2, 15, 1, N'active',  N'-');
INSERT INTO RACK VALUES (N'15-A-15', 2, 16, 1, N'active',  N'-');
--floor 15 - right
-------------------------------------- WORKDESK ----------------------------------------

----------------------------------- CONNECTION_LINES ------------------------------------