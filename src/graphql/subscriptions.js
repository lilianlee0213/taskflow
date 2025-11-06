/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onCreateTeam(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onUpdateTeam(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onDeleteTeam(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onCreateProject(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onUpdateProject(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onDeleteProject(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onCreateTask(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onUpdateTask(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onDeleteTask(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
    $owner: String
  ) {
    onCreateAttachment(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      uploadedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
    $owner: String
  ) {
    onUpdateAttachment(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      uploadedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
    $owner: String
  ) {
    onDeleteAttachment(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      uploadedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateActivityLog = /* GraphQL */ `
  subscription OnCreateActivityLog(
    $filter: ModelSubscriptionActivityLogFilterInput
    $owner: String
  ) {
    onCreateActivityLog(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      action
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateActivityLog = /* GraphQL */ `
  subscription OnUpdateActivityLog(
    $filter: ModelSubscriptionActivityLogFilterInput
    $owner: String
  ) {
    onUpdateActivityLog(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      action
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteActivityLog = /* GraphQL */ `
  subscription OnDeleteActivityLog(
    $filter: ModelSubscriptionActivityLogFilterInput
    $owner: String
  ) {
    onDeleteActivityLog(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
        owner
        __typename
      }
      action
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateTimeLog = /* GraphQL */ `
  subscription OnCreateTimeLog(
    $filter: ModelSubscriptionTimeLogFilterInput
    $owner: String
  ) {
    onCreateTimeLog(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateTimeLog = /* GraphQL */ `
  subscription OnUpdateTimeLog(
    $filter: ModelSubscriptionTimeLogFilterInput
    $owner: String
  ) {
    onUpdateTimeLog(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteTimeLog = /* GraphQL */ `
  subscription OnDeleteTimeLog(
    $filter: ModelSubscriptionTimeLogFilterInput
    $owner: String
  ) {
    onDeleteTimeLog(filter: $filter, owner: $owner) {
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
        owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateProjectAssignees = /* GraphQL */ `
  subscription OnCreateProjectAssignees(
    $filter: ModelSubscriptionProjectAssigneesFilterInput
    $owner: String
  ) {
    onCreateProjectAssignees(filter: $filter, owner: $owner) {
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
        owner
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
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateProjectAssignees = /* GraphQL */ `
  subscription OnUpdateProjectAssignees(
    $filter: ModelSubscriptionProjectAssigneesFilterInput
    $owner: String
  ) {
    onUpdateProjectAssignees(filter: $filter, owner: $owner) {
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
        owner
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
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteProjectAssignees = /* GraphQL */ `
  subscription OnDeleteProjectAssignees(
    $filter: ModelSubscriptionProjectAssigneesFilterInput
    $owner: String
  ) {
    onDeleteProjectAssignees(filter: $filter, owner: $owner) {
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
        owner
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
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
