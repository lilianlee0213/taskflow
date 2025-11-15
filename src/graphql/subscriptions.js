/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
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
export const onCreateActivityLog = /* GraphQL */ `
  subscription OnCreateActivityLog(
    $filter: ModelSubscriptionActivityLogFilterInput
  ) {
    onCreateActivityLog(filter: $filter) {
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
export const onUpdateActivityLog = /* GraphQL */ `
  subscription OnUpdateActivityLog(
    $filter: ModelSubscriptionActivityLogFilterInput
  ) {
    onUpdateActivityLog(filter: $filter) {
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
export const onDeleteActivityLog = /* GraphQL */ `
  subscription OnDeleteActivityLog(
    $filter: ModelSubscriptionActivityLogFilterInput
  ) {
    onDeleteActivityLog(filter: $filter) {
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
export const onCreateTimeLog = /* GraphQL */ `
  subscription OnCreateTimeLog($filter: ModelSubscriptionTimeLogFilterInput) {
    onCreateTimeLog(filter: $filter) {
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
export const onUpdateTimeLog = /* GraphQL */ `
  subscription OnUpdateTimeLog($filter: ModelSubscriptionTimeLogFilterInput) {
    onUpdateTimeLog(filter: $filter) {
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
export const onDeleteTimeLog = /* GraphQL */ `
  subscription OnDeleteTimeLog($filter: ModelSubscriptionTimeLogFilterInput) {
    onDeleteTimeLog(filter: $filter) {
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
export const onCreateProjectAssignees = /* GraphQL */ `
  subscription OnCreateProjectAssignees(
    $filter: ModelSubscriptionProjectAssigneesFilterInput
  ) {
    onCreateProjectAssignees(filter: $filter) {
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
export const onUpdateProjectAssignees = /* GraphQL */ `
  subscription OnUpdateProjectAssignees(
    $filter: ModelSubscriptionProjectAssigneesFilterInput
  ) {
    onUpdateProjectAssignees(filter: $filter) {
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
export const onDeleteProjectAssignees = /* GraphQL */ `
  subscription OnDeleteProjectAssignees(
    $filter: ModelSubscriptionProjectAssigneesFilterInput
  ) {
    onDeleteProjectAssignees(filter: $filter) {
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
