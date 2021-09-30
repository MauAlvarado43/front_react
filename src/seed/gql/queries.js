/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const PROJECT = `
{
  project {
    id
    name
    members {
      id
    }
  }
}
`;

export const SET_PROJECT = `
mutation Set(
  $id: Int!,
  $name: String,
  $members: Int,
)
{
  setProject(
    id: $id,
    name: $name,
    members: $members,
  ) {
    project {
      id
      name
      members {
        id
      }
    }
  }
}
`;

export const SAVE_PROJECT = `
mutation Save(
  $name: String!,
  $members: Int!,
)
{
  saveProject(
    name: $name,
    members: $members,
  ) {
    project {
      id
    }
  }
}
`;

export const DELETE_PROJECT = `
mutation Delete($id: Int!)
{
  deleteProject(id: $id)
  {
    id
  }
}
`;

export const TASK = `
{
  task {
    id
    name
    deadline
    status
    assigned {
      id
    }
    project {
      id
    }
  }
}
`;

export const SET_TASK = `
mutation Set(
  $id: Int!,
  $name: String,
  $deadline: DateTime,
  $status: String,
  $assigned: Int,
  $project: Int,
)
{
  setTask(
    id: $id,
    name: $name,
    deadline: $deadline,
    status: $status,
    assigned: $assigned,
    project: $project,
  ) {
    task {
      id
      name
      deadline
      status
      assigned {
        id
      }
      project {
        id
      }
    }
  }
}
`;

export const SAVE_TASK = `
mutation Save(
  $name: String!,
  $deadline: DateTime!,
  $status: String!,
  $assigned: Int!,
  $project: Int!,
)
{
  saveTask(
    name: $name,
    deadline: $deadline,
    status: $status,
    assigned: $assigned,
    project: $project,
  ) {
    task {
      id
    }
  }
}
`;

export const DELETE_TASK = `
mutation Delete($id: Int!)
{
  deleteTask(id: $id)
  {
    id
  }
}
`;

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
    photo {
      id
    }
  }
}
`;

export const SET_USER = `
mutation Set(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
  $photo: Int,
)
{
  setUser(
    id: $id,
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    photo: $photo,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
      photo {
        id
      }
    }
  }
}
`;

export const SAVE_USER = `
mutation Save(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
  $photo: Int!,
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    photo: $photo,
  ) {
    user {
      id
    }
  }
}
`;

export const DELETE_USER = `
mutation Delete($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`;