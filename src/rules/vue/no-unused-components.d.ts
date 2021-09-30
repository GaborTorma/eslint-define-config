import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnusedComponentsOption = {
  /**
   * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
   */
  ignoreWhenBindingPresent?: any;
};

/**
 * Options.
 */
export type NoUnusedComponentsOptions = [NoUnusedComponentsOption?];

/**
 * disallow registering components that are not used inside templates
 *
 * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
 */
export type NoUnusedComponentsRuleConfig = RuleConfig<NoUnusedComponentsOptions>;

/**
 * disallow registering components that are not used inside templates
 *
 * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
 */
export interface NoUnusedComponentsRule {
  /**
   * disallow registering components that are not used inside templates
   *
   * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
   */
  'vue/no-unused-components': NoUnusedComponentsRuleConfig;
}