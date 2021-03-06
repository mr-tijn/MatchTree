// Generated by CoffeeScript 1.7.1
'use strict';
describe('Filters', function() {
  beforeEach(module('MatchTreeFilters'));
  describe('nodesummary', function() {
    return it('should select type and name', inject(function(nodesummaryFilter) {
      return expect(nodesummaryFilter({
        type: 'Hello',
        name: 'Kitty'
      })).toBe('Hello Kitty');
    }));
  });
  return describe('detailurl', function() {
    return it('should create correct detail url', inject(function(detailurlFilter) {
      return expect(detailurlFilter({
        type: 'normal'
      })).toBe('partial/node_detail_normal.html');
    }));
  });
});
