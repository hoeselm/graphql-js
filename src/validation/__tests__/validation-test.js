/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { testSchema } from './harness';
import { validate } from '../';
import { parse } from '../../language';

function expectValid(schema, queryString) {
  const errors = validate(schema, parse(queryString));
  expect(errors).to.deep.equal([], 'Should validate');
}

describe('Validate: Supports full validation', () => {

  it('validates queries', () => {
    expectValid(testSchema, `
      query {
        catOrDog {
          ... on Cat {
            furColor
          }
          ... on Dog {
            isHousetrained
          }
        }
      }
    `);
  });

});
