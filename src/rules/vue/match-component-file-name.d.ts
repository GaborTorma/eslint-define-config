import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MatchComponentFileNameOption = {
  /**
   * @see [match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html)
   */
  extensions?: any;

  /**
   * @see [match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html)
   */
  shouldMatchCase?: any;
};

/**
 * Options.
 */
export type MatchComponentFileNameOptions = [MatchComponentFileNameOption?];

/**
 * require component name property to match its file name
 *
 * @see [match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html)
 */
export type MatchComponentFileNameRuleConfig = RuleConfig<MatchComponentFileNameOptions>;

/**
 * require component name property to match its file name
 *
 * @see [match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html)
 */
export interface MatchComponentFileNameRule {
  /**
   * require component name property to match its file name
   *
   * @see [match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html)
   */
  'vue/match-component-file-name': MatchComponentFileNameRuleConfig;
}