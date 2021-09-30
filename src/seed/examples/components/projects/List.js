/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/projects/List";

function ProjectList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqProjects = usePagination(`
  {
    projectPagination {
      totalPages
      projects {
        name
        createdAt
        members { }
      }
    }
  }`, pageNum, pageSize);

  if (reqProjects.loading) return <Loading />;
  if (reqProjects.error) return "Error";
  const { projects = [], totalPages = 0 } = reqProjects.data.projectPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    projects={projects}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

ProjectList.propTypes = {};

export default ProjectList;