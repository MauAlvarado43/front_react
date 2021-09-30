const GQL_PROJECT_ = {
    name: "",
    members:  { id: 1},
}
export const GQL_PROJECT = {
    project: GQL_PROJECT_
}
export const GQL_PROJECTS = {
    projects: [ GQL_PROJECT_ ]
}
export const GQL_PROJECT_PAGINATION = {
    projectPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        projects: [ GQL_PROJECT_ ]
    }
}

export const API_PROJECT = {
    name: "",
    members_id:  1,
}
export const API_PROJECTS = [API_PROJECT]

const GQL_TASK_ = {
    name: "",
    deadline: "2020-01-01T12:00:00+00:00",
    status: "TODO",
    assigned:  { id: 1},
    project:  { id: 1},
}
export const GQL_TASK = {
    task: GQL_TASK_
}
export const GQL_TASKS = {
    tasks: [ GQL_TASK_ ]
}
export const GQL_TASK_PAGINATION = {
    taskPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        tasks: [ GQL_TASK_ ]
    }
}

export const API_TASK = {
    name: "",
    deadline: "2020-01-01T12:00:00+00:00",
    status: "TODO",
    assigned_id:  1,
    project_id:  1,
}
export const API_TASKS = [API_TASK]

const GQL_USER_ = {
    username: "email@test.com",
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    isActive: true,
    photo: { url: "" },
}
export const GQL_USER = {
    user: GQL_USER_
}
export const GQL_USERS = {
    users: [ GQL_USER_ ]
}
export const GQL_USER_PAGINATION = {
    userPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        users: [ GQL_USER_ ]
    }
}

export const API_USER = {
    username: "email_1@test.com",
    first_name: "FirstName",
    last_name: "LastName",
    email: "email_1@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    is_active: false,
    photo_id: 1,
}
export const API_USERS = [API_USER]