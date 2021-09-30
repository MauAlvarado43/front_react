/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/tasks/FormSet';

test('examples/components/tasks/FormSet', () => {
  mockGql.useDetail({"task": data.GQL_TASK});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useQuery({"projects": data.GQL_PROJECTS});
  mockGql.useSet({"setTask": data.GQL_TASK});
  render(<FormSet />);
  expect(screen).toBeDefined();
});