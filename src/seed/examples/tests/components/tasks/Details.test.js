/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/tasks/Details';

test('examples/components/tasks/Details', () => {
  mockGql.useDetail({"task": data.GQL_TASK});
  mockGql.useDelete({"deleteTask": data.GQL_TASK});
  render(<Details />);
  expect(screen).toBeDefined()
});