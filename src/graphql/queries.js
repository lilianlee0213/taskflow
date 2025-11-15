/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      description
      users {
        nextToken
        startedAt
        __typename
      }
      projects {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoId
      firstName
      lastName
      email
      avatar
      role
      title
      teamID
      team {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdProjects {
        nextToken
        startedAt
        __typename
      }
      assignedProjects {
        nextToken
        startedAt
        __typename
      }
      createdTasks {
        nextToken
        startedAt
        __typename
      }
      assignedTasks {
        nextToken
        startedAt
        __typename
      }
      comments {
        nextToken
        startedAt
        __typename
      }
      attachments {
        nextToken
        startedAt
        __typename
      }
      activityLogs {
        nextToken
        startedAt
        __typename
      }
      timeLogs {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const usersByCognitoId = /* GraphQL */ `
  query UsersByCognitoId(
    $cognitoId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByCognitoId(
      cognitoId: $cognitoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const usersByTeamID = /* GraphQL */ `
  query UsersByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      teamID
      team {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      creatorID
      creator {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      projectName
      projectLabel
      description
      projectStatus
      projectProgress
      projectDueDate
      assignees {
        nextToken
        startedAt
        __typename
      }
      tasks {
        nextToken
        startedAt
        __typename
      }
      comments {
        nextToken
        startedAt
        __typename
      }
      attachments {
        nextToken
        startedAt
        __typename
      }
      activityLogs {
        nextToken
        startedAt
        __typename
      }
      timeLogs {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const projectsByTeamID = /* GraphQL */ `
  query ProjectsByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const projectsByCreatorID = /* GraphQL */ `
  query ProjectsByCreatorID(
    $creatorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByCreatorID(
      creatorID: $creatorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      projectID
      project {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      creatorID
      creator {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      assigneeID
      assignee {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      taskName
      taskDescription
      taskStatus
      taskProgress
      taskPriority
      taskDueDate
      comments {
        nextToken
        startedAt
        __typename
      }
      attachments {
        nextToken
        startedAt
        __typename
      }
      activityLogs {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        creatorID
        assigneeID
        taskName
        taskDescription
        taskStatus
        taskProgress
        taskPriority
        taskDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectID
        creatorID
        assigneeID
        taskName
        taskDescription
        taskStatus
        taskProgress
        taskPriority
        taskDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const tasksByProjectIDAndTaskDueDate = /* GraphQL */ `
  query TasksByProjectIDAndTaskDueDate(
    $projectID: ID!
    $taskDueDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByProjectIDAndTaskDueDate(
      projectID: $projectID
      taskDueDate: $taskDueDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        creatorID
        assigneeID
        taskName
        taskDescription
        taskStatus
        taskProgress
        taskPriority
        taskDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const tasksByCreatorID = /* GraphQL */ `
  query TasksByCreatorID(
    $creatorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByCreatorID(
      creatorID: $creatorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        creatorID
        assigneeID
        taskName
        taskDescription
        taskStatus
        taskProgress
        taskPriority
        taskDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const tasksByAssigneeID = /* GraphQL */ `
  query TasksByAssigneeID(
    $assigneeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByAssigneeID(
      assigneeID: $assigneeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        creatorID
        assigneeID
        taskName
        taskDescription
        taskStatus
        taskProgress
        taskPriority
        taskDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      projectID
      project {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      taskID
      task {
        id
        projectID
        creatorID
        assigneeID
        taskName
        taskDescription
        taskStatus
        taskProgress
        taskPriority
        taskDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      authorID
      author {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        taskID
        authorID
        message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectID
        taskID
        authorID
        message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const commentsByProjectIDAndCreatedAt = /* GraphQL */ `
  query CommentsByProjectIDAndCreatedAt(
    $projectID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByProjectIDAndCreatedAt(
      projectID: $projectID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        authorID
        message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const commentsByTaskIDAndCreatedAt = /* GraphQL */ `
  query CommentsByTaskIDAndCreatedAt(
    $taskID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByTaskIDAndCreatedAt(
      taskID: $taskID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        authorID
        message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const commentsByAuthorID = /* GraphQL */ `
  query CommentsByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByAuthorID(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        authorID
        message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
      id
      projectID
      project {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      taskID
      task {
        id
        projectID
        creatorID
        assigneeID
        taskName
        taskDescription
        taskStatus
        taskProgress
        taskPriority
        taskDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      fileName
      fileUrl
      fileType
      uploaderID
      uploader {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      uploadedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        taskID
        fileName
        fileUrl
        fileType
        uploaderID
        uploadedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAttachments = /* GraphQL */ `
  query SyncAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttachments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectID
        taskID
        fileName
        fileUrl
        fileType
        uploaderID
        uploadedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByProjectIDAndFileName = /* GraphQL */ `
  query AttachmentsByProjectIDAndFileName(
    $projectID: ID!
    $fileName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByProjectIDAndFileName(
      projectID: $projectID
      fileName: $fileName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        fileName
        fileUrl
        fileType
        uploaderID
        uploadedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByTaskIDAndFileName = /* GraphQL */ `
  query AttachmentsByTaskIDAndFileName(
    $taskID: ID!
    $fileName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByTaskIDAndFileName(
      taskID: $taskID
      fileName: $fileName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        fileName
        fileUrl
        fileType
        uploaderID
        uploadedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByUploaderID = /* GraphQL */ `
  query AttachmentsByUploaderID(
    $uploaderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByUploaderID(
      uploaderID: $uploaderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        fileName
        fileUrl
        fileType
        uploaderID
        uploadedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getActivityLog = /* GraphQL */ `
  query GetActivityLog($id: ID!) {
    getActivityLog(id: $id) {
      id
      projectID
      project {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      taskID
      task {
        id
        projectID
        creatorID
        assigneeID
        taskName
        taskDescription
        taskStatus
        taskProgress
        taskPriority
        taskDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      actorID
      actor {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      action
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listActivityLogs = /* GraphQL */ `
  query ListActivityLogs(
    $filter: ModelActivityLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        taskID
        actorID
        action
        content
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncActivityLogs = /* GraphQL */ `
  query SyncActivityLogs(
    $filter: ModelActivityLogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActivityLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectID
        taskID
        actorID
        action
        content
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const activityLogsByProjectIDAndTimestamp = /* GraphQL */ `
  query ActivityLogsByProjectIDAndTimestamp(
    $projectID: ID!
    $timestamp: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActivityLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityLogsByProjectIDAndTimestamp(
      projectID: $projectID
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        actorID
        action
        content
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const activityLogsByTaskIDAndTimestamp = /* GraphQL */ `
  query ActivityLogsByTaskIDAndTimestamp(
    $taskID: ID!
    $timestamp: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActivityLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityLogsByTaskIDAndTimestamp(
      taskID: $taskID
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        actorID
        action
        content
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const activityLogsByActorID = /* GraphQL */ `
  query ActivityLogsByActorID(
    $actorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActivityLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityLogsByActorID(
      actorID: $actorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        taskID
        actorID
        action
        content
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTimeLog = /* GraphQL */ `
  query GetTimeLog($id: ID!) {
    getTimeLog(id: $id) {
      id
      projectID
      project {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      user {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      logDate
      hours
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTimeLogs = /* GraphQL */ `
  query ListTimeLogs(
    $filter: ModelTimeLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        userID
        logDate
        hours
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTimeLogs = /* GraphQL */ `
  query SyncTimeLogs(
    $filter: ModelTimeLogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTimeLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectID
        userID
        logDate
        hours
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const timeLogsByProjectIDAndLogDate = /* GraphQL */ `
  query TimeLogsByProjectIDAndLogDate(
    $projectID: ID!
    $logDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTimeLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    timeLogsByProjectIDAndLogDate(
      projectID: $projectID
      logDate: $logDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        userID
        logDate
        hours
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const timeLogsByUserID = /* GraphQL */ `
  query TimeLogsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTimeLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    timeLogsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        userID
        logDate
        hours
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProjectAssignees = /* GraphQL */ `
  query GetProjectAssignees($id: ID!) {
    getProjectAssignees(id: $id) {
      id
      userId
      projectId
      user {
        id
        cognitoId
        firstName
        lastName
        email
        avatar
        role
        title
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      project {
        id
        teamID
        creatorID
        projectName
        projectLabel
        description
        projectStatus
        projectProgress
        projectDueDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listProjectAssignees = /* GraphQL */ `
  query ListProjectAssignees(
    $filter: ModelProjectAssigneesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectAssignees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        projectId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProjectAssignees = /* GraphQL */ `
  query SyncProjectAssignees(
    $filter: ModelProjectAssigneesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjectAssignees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        projectId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const projectAssigneesByUserId = /* GraphQL */ `
  query ProjectAssigneesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectAssigneesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectAssigneesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        projectId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const projectAssigneesByProjectId = /* GraphQL */ `
  query ProjectAssigneesByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectAssigneesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectAssigneesByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        projectId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
