// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Team, User, Project, Task, Comment, Attachment, ActivityLog, TimeLog, ProjectAssignees } = initSchema(schema);

export {
  Team,
  User,
  Project,
  Task,
  Comment,
  Attachment,
  ActivityLog,
  TimeLog,
  ProjectAssignees
};