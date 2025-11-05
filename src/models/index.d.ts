import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly users?: (User | null)[] | null;
  readonly projects?: (Project | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly users: AsyncCollection<User>;
  readonly projects: AsyncCollection<Project>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly cognitoId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email?: string | null;
  readonly avatar?: string | null;
  readonly role?: string | null;
  readonly title?: string | null;
  readonly teamID?: string | null;
  readonly team?: Team | null;
  readonly createdProjects?: (Project | null)[] | null;
  readonly assignedProjects?: (ProjectAssignees | null)[] | null;
  readonly createdTasks?: (Task | null)[] | null;
  readonly assignedTasks?: (Task | null)[] | null;
  readonly comments?: (Comment | null)[] | null;
  readonly attachments?: (Attachment | null)[] | null;
  readonly activityLogs?: (ActivityLog | null)[] | null;
  readonly timeLogs?: (TimeLog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly cognitoId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email?: string | null;
  readonly avatar?: string | null;
  readonly role?: string | null;
  readonly title?: string | null;
  readonly teamID?: string | null;
  readonly team: AsyncItem<Team | undefined>;
  readonly createdProjects: AsyncCollection<Project>;
  readonly assignedProjects: AsyncCollection<ProjectAssignees>;
  readonly createdTasks: AsyncCollection<Task>;
  readonly assignedTasks: AsyncCollection<Task>;
  readonly comments: AsyncCollection<Comment>;
  readonly attachments: AsyncCollection<Attachment>;
  readonly activityLogs: AsyncCollection<ActivityLog>;
  readonly timeLogs: AsyncCollection<TimeLog>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
  };
  readonly id: string;
  readonly teamID: string;
  readonly team?: Team | null;
  readonly creatorID: string;
  readonly creator?: User | null;
  readonly projectName: string;
  readonly projectLabel?: (string | null)[] | null;
  readonly description?: string | null;
  readonly projectStatus?: string | null;
  readonly projectProgress?: number | null;
  readonly projectDueDate?: string | null;
  readonly assignees?: (ProjectAssignees | null)[] | null;
  readonly tasks?: (Task | null)[] | null;
  readonly comments?: (Comment | null)[] | null;
  readonly attachments?: (Attachment | null)[] | null;
  readonly activityLogs?: (ActivityLog | null)[] | null;
  readonly timeLogs?: (TimeLog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
  };
  readonly id: string;
  readonly teamID: string;
  readonly team: AsyncItem<Team | undefined>;
  readonly creatorID: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly projectName: string;
  readonly projectLabel?: (string | null)[] | null;
  readonly description?: string | null;
  readonly projectStatus?: string | null;
  readonly projectProgress?: number | null;
  readonly projectDueDate?: string | null;
  readonly assignees: AsyncCollection<ProjectAssignees>;
  readonly tasks: AsyncCollection<Task>;
  readonly comments: AsyncCollection<Comment>;
  readonly attachments: AsyncCollection<Attachment>;
  readonly activityLogs: AsyncCollection<ActivityLog>;
  readonly timeLogs: AsyncCollection<TimeLog>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
  };
  readonly id: string;
  readonly projectID: string;
  readonly project?: Project | null;
  readonly creatorID: string;
  readonly creator?: User | null;
  readonly assigneeID?: string | null;
  readonly assignee?: User | null;
  readonly taskName: string;
  readonly taskDescription?: string | null;
  readonly taskStatus?: string | null;
  readonly taskProgress?: number | null;
  readonly taskPriority?: string | null;
  readonly taskDueDate?: string | null;
  readonly comments?: (Comment | null)[] | null;
  readonly attachments?: (Attachment | null)[] | null;
  readonly activityLogs?: (ActivityLog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
  };
  readonly id: string;
  readonly projectID: string;
  readonly project: AsyncItem<Project | undefined>;
  readonly creatorID: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly assigneeID?: string | null;
  readonly assignee: AsyncItem<User | undefined>;
  readonly taskName: string;
  readonly taskDescription?: string | null;
  readonly taskStatus?: string | null;
  readonly taskProgress?: number | null;
  readonly taskPriority?: string | null;
  readonly taskDueDate?: string | null;
  readonly comments: AsyncCollection<Comment>;
  readonly attachments: AsyncCollection<Attachment>;
  readonly activityLogs: AsyncCollection<ActivityLog>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly projectID?: string | null;
  readonly project?: Project | null;
  readonly taskID?: string | null;
  readonly task?: Task | null;
  readonly authorID: string;
  readonly author?: User | null;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly projectID?: string | null;
  readonly project: AsyncItem<Project | undefined>;
  readonly taskID?: string | null;
  readonly task: AsyncItem<Task | undefined>;
  readonly authorID: string;
  readonly author: AsyncItem<User | undefined>;
  readonly message: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectID?: string | null;
  readonly project?: Project | null;
  readonly taskID?: string | null;
  readonly task?: Task | null;
  readonly fileName: string;
  readonly fileUrl: string;
  readonly fileType?: string | null;
  readonly uploaderID: string;
  readonly uploader?: User | null;
  readonly uploadedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectID?: string | null;
  readonly project: AsyncItem<Project | undefined>;
  readonly taskID?: string | null;
  readonly task: AsyncItem<Task | undefined>;
  readonly fileName: string;
  readonly fileUrl: string;
  readonly fileType?: string | null;
  readonly uploaderID: string;
  readonly uploader: AsyncItem<User | undefined>;
  readonly uploadedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attachment = LazyLoading extends LazyLoadingDisabled ? EagerAttachment : LazyAttachment

export declare const Attachment: (new (init: ModelInit<Attachment>) => Attachment) & {
  copyOf(source: Attachment, mutator: (draft: MutableModel<Attachment>) => MutableModel<Attachment> | void): Attachment;
}

type EagerActivityLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ActivityLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectID?: string | null;
  readonly project?: Project | null;
  readonly taskID?: string | null;
  readonly task?: Task | null;
  readonly actorID: string;
  readonly actor?: User | null;
  readonly action: string;
  readonly timestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActivityLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ActivityLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectID?: string | null;
  readonly project: AsyncItem<Project | undefined>;
  readonly taskID?: string | null;
  readonly task: AsyncItem<Task | undefined>;
  readonly actorID: string;
  readonly actor: AsyncItem<User | undefined>;
  readonly action: string;
  readonly timestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ActivityLog = LazyLoading extends LazyLoadingDisabled ? EagerActivityLog : LazyActivityLog

export declare const ActivityLog: (new (init: ModelInit<ActivityLog>) => ActivityLog) & {
  copyOf(source: ActivityLog, mutator: (draft: MutableModel<ActivityLog>) => MutableModel<ActivityLog> | void): ActivityLog;
}

type EagerTimeLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TimeLog, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly projectID?: string | null;
  readonly project?: Project | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly logDate?: string | null;
  readonly hours?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimeLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TimeLog, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly projectID?: string | null;
  readonly project: AsyncItem<Project | undefined>;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly logDate?: string | null;
  readonly hours?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TimeLog = LazyLoading extends LazyLoadingDisabled ? EagerTimeLog : LazyTimeLog

export declare const TimeLog: (new (init: ModelInit<TimeLog>) => TimeLog) & {
  copyOf(source: TimeLog, mutator: (draft: MutableModel<TimeLog>) => MutableModel<TimeLog> | void): TimeLog;
}

type EagerProjectAssignees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectAssignees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly projectId?: string | null;
  readonly user: User;
  readonly project: Project;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectAssignees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectAssignees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly projectId?: string | null;
  readonly user: AsyncItem<User>;
  readonly project: AsyncItem<Project>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectAssignees = LazyLoading extends LazyLoadingDisabled ? EagerProjectAssignees : LazyProjectAssignees

export declare const ProjectAssignees: (new (init: ModelInit<ProjectAssignees>) => ProjectAssignees) & {
  copyOf(source: ProjectAssignees, mutator: (draft: MutableModel<ProjectAssignees>) => MutableModel<ProjectAssignees> | void): ProjectAssignees;
}