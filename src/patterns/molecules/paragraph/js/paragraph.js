'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * paragraph module implementation.
 *
 * @author Semhar Sium <semhar50@gmail.com>
 */

// const selectors = { button: '.js-paragraph__button' };
// const stateClasses = { disabled: 'state-paragraph--disabled' };

T.Module.Paragraph= T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
