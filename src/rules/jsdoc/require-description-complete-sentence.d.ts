import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireDescriptionCompleteSentenceOption = {
  /**
   * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
   */
  abbreviations?: any;

  /**
   * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
   */
  newlineBeforeCapsAssumesBadSentenceEnd?: any;

  /**
   * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
   */
  tags?: any;
};

/**
 * Options.
 */
export type RequireDescriptionCompleteSentenceOptions = [RequireDescriptionCompleteSentenceOption?];

/**
 * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
 *
 * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
 */
export type RequireDescriptionCompleteSentenceRuleConfig = RuleConfig<RequireDescriptionCompleteSentenceOptions>;

/**
 * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
 *
 * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
 */
export interface RequireDescriptionCompleteSentenceRule {
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   *
   * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
   */
  'jsdoc/require-description-complete-sentence': RequireDescriptionCompleteSentenceRuleConfig;
}