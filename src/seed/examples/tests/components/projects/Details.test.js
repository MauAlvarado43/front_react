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
import Details from 'seed/examples/components/projects/Details';

test('examples/components/projects/Details', () => {
  mockGql.useDetail({"project": data.GQL_PROJECT});
  mockGql.useDelete({"deleteProject": data.GQL_PROJECT});
  render(<Details />);
  expect(screen).toBeDefined()
});