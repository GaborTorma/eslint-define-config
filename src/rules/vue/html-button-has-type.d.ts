import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type HtmlButtonHasTypeOption = {
  /**
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  button?: any;

  /**
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  submit?: any;

  /**
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  reset?: any;
};

/**
 * Options.
 */
export type HtmlButtonHasTypeOptions = [HtmlButtonHasTypeOption?];

/**
 * disallow usage of button without an explicit type attribute
 *
 * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
 */
export type HtmlButtonHasTypeRuleConfig = RuleConfig<HtmlButtonHasTypeOptions>;

/**
 * disallow usage of button without an explicit type attribute
 *
 * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
 */
export interface HtmlButtonHasTypeRule {
  /**
   * disallow usage of button without an explicit type attribute
   *
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  'vue/html-button-has-type': HtmlButtonHasTypeRuleConfig;
}