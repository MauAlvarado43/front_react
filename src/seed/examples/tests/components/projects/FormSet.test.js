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
import FormSet from 'seed/examples/components/projects/FormSet';

test('examples/components/projects/FormSet', () => {
  mockGql.useDetail({"project": data.GQL_PROJECT});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSet({"setProject": data.GQL_PROJECT});
  render(<FormSet />);
  expect(screen).toBeDefined();
});