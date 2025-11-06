/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createActivityLog = /* GraphQL */ `
  mutation CreateActivityLog(
    $input: CreateActivityLogInput!
    $condition: ModelActivityLogConditionInput
  ) {
    createActivityLog(input: $input, condition: $condition) {
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
export const updateActivityLog = /* GraphQL */ `
  mutation UpdateActivityLog(
    $input: UpdateActivityLogInput!
    $condition: ModelActivityLogConditionInput
  ) {
    updateActivityLog(input: $input, condition: $condition) {
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
export const deleteActivityLog = /* GraphQL */ `
  mutation DeleteActivityLog(
    $input: DeleteActivityLogInput!
    $condition: ModelActivityLogConditionInput
  ) {
    deleteActivityLog(input: $input, condition: $condition) {
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
export const createTimeLog = /* GraphQL */ `
  mutation CreateTimeLog(
    $input: CreateTimeLogInput!
    $condition: ModelTimeLogConditionInput
  ) {
    createTimeLog(input: $input, condition: $condition) {
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
export const updateTimeLog = /* GraphQL */ `
  mutation UpdateTimeLog(
    $input: UpdateTimeLogInput!
    $condition: ModelTimeLogConditionInput
  ) {
    updateTimeLog(input: $input, condition: $condition) {
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
export const deleteTimeLog = /* GraphQL */ `
  mutation DeleteTimeLog(
    $input: DeleteTimeLogInput!
    $condition: ModelTimeLogConditionInput
  ) {
    deleteTimeLog(input: $input, condition: $condition) {
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
export const createProjectAssignees = /* GraphQL */ `
  mutation CreateProjectAssignees(
    $input: CreateProjectAssigneesInput!
    $condition: ModelProjectAssigneesConditionInput
  ) {
    createProjectAssignees(input: $input, condition: $condition) {
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
export const updateProjectAssignees = /* GraphQL */ `
  mutation UpdateProjectAssignees(
    $input: UpdateProjectAssigneesInput!
    $condition: ModelProjectAssigneesConditionInput
  ) {
    updateProjectAssignees(input: $input, condition: $condition) {
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
export const deleteProjectAssignees = /* GraphQL */ `
  mutation DeleteProjectAssignees(
    $input: DeleteProjectAssigneesInput!
    $condition: ModelProjectAssigneesConditionInput
  ) {
    deleteProjectAssignees(input: $input, condition: $condition) {
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
