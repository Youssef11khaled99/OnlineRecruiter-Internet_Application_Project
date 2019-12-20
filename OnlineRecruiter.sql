/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     16-Dec-19 14:05:43                           */
/*==============================================================*/
USE sql7316459;

drop table if exists ANSWER;

drop table if exists CANDIDATE;

drop table if exists CANDIDATE_ANSWER;

drop table if exists CANDIDATE_ASSESMENT;

drop table if exists CANDIDATE_POSITION;

drop table if exists EXAM;

drop table if exists HR;

drop table if exists POSITION;

drop table if exists QUESTION;

/*==============================================================*/
/* Table: ANSWER                                                */
/*==============================================================*/
create table ANSWER
(
   A_ID                 int not null,
   A_TEXT               varchar(50) not null,
   CORRECT              bool not null,
   primary key (A_ID)
);

/*==============================================================*/
/* Table: CANDIDATE                                             */
/*==============================================================*/
create table CANDIDATE
(
   C_ID                 int not null,
   USERNAME             varchar(20) not null,
   EMAIL                varchar(30) not null,
   PASSWORD             varchar(20) not null,
   TELEPHONE            varchar(11),
   primary key (C_ID)
);

/*==============================================================*/
/* Table: CANDIDATE_ANSWER                                      */
/*==============================================================*/
create table CANDIDATE_ANSWER
(
   C_ANSWER_ID          int not null,
   Q_ID                 int not null,
   C_ID                 int not null,
   A_ID                 int not null,
   primary key (C_ANSWER_ID)
);

/*==============================================================*/
/* Table: CANDIDATE_ASSESMENT                                   */
/*==============================================================*/
create table CANDIDATE_ASSESMENT
(
   TOTAL_GRADE          int not null,
   DEADLINE             varchar(10) not null,
   C_ASSESMENT_ID       int not null,
   HR_ID                int not null,
   C_ID                 int not null,
   E_ID                 int not null,
   primary key (C_ASSESMENT_ID)
);

/*==============================================================*/
/* Table: CANDIDATE_POSITION                                    */
/*==============================================================*/
create table CANDIDATE_POSITION
(
   C_POSITION_ID        int not null,
   P_ID                 int not null,
   C_ID                 int not null,
   HR_ID                int not null,
   APPROVED             bool not null,
   primary key (C_POSITION_ID)
);

/*==============================================================*/
/* Table: EXAM                                                  */
/*==============================================================*/
create table EXAM
(
   E_ID                 int not null,
   E_TYPE               varchar(30) not null,
   GRADE                int not null,
   primary key (E_ID)
);

/*==============================================================*/
/* Table: HR                                                    */
/*==============================================================*/
create table HR
(
   HR_ID                int not null,
   primary key (HR_ID)
);

/*==============================================================*/
/* Table: POSITION                                              */
/*==============================================================*/
create table POSITION
(
   P_ID                 int not null,
   NAME                 varchar(30) not null,
   START_DATE           date not null,
   END_DATE             date not null,
   primary key (P_ID)
);

/*==============================================================*/
/* Table: QUESTION                                              */
/*==============================================================*/
create table QUESTION
(
   Q_ID                 int not null,
   A_ID                 int not null,
   E_ID                 int not null,
   Q_TEXT               varchar(100) not null,
   Q_TYPE               varchar(30) not null,
   primary key (Q_ID)
);

alter table CANDIDATE_ANSWER add constraint FK_ANSWER foreign key (C_ID)
      references CANDIDATE (C_ID) on delete cascade on update restrict;

alter table CANDIDATE_ANSWER add constraint FK_APPEARED foreign key (A_ID)
      references ANSWER (A_ID) on delete cascade on update restrict;

alter table CANDIDATE_ANSWER add constraint FK_PROPOSED foreign key (Q_ID)
      references QUESTION (Q_ID) on delete cascade on update restrict;

alter table CANDIDATE_ASSESMENT add constraint FK_SELECT foreign key (HR_ID)
      references HR (HR_ID) on delete cascade on update restrict;

alter table CANDIDATE_ASSESMENT add constraint FK_SOLVE foreign key (C_ID)
      references CANDIDATE (C_ID) on delete cascade on update restrict;

alter table CANDIDATE_ASSESMENT add constraint FK_TAKEN foreign key (E_ID)
      references EXAM (E_ID) on delete cascade on update restrict;

alter table CANDIDATE_POSITION add constraint FK_APPLY foreign key (C_ID)
      references CANDIDATE (C_ID) on delete cascade on update restrict;

alter table CANDIDATE_POSITION add constraint FK_APPROVE foreign key (HR_ID)
      references HR (HR_ID) on delete cascade on update restrict;

alter table CANDIDATE_POSITION add constraint FK_OCCUPIED foreign key (P_ID)
      references POSITION (P_ID) on delete cascade on update restrict;

alter table QUESTION add constraint FK_CONSIST_OF foreign key (E_ID)
      references EXAM (E_ID) on delete cascade on update restrict;

alter table QUESTION add constraint FK_CONTAINS foreign key (A_ID)
      references ANSWER (A_ID) on delete cascade on update restrict;

