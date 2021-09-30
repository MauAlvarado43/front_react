/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/tasks/List";

function TaskList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqTasks = usePagination(`
  {
    taskPagination {
      totalPages
      tasks {
        name
        deadline
        status
        createdAt
        assigned { }
        project { }
      }
    }
  }`, pageNum, pageSize);

  if (reqTasks.loading) return <Loading />;
  if (reqTasks.error) return "Error";
  const { tasks = [], totalPages = 0 } = reqTasks.data.taskPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    tasks={tasks}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

TaskList.propTypes = {};

export default TaskList;