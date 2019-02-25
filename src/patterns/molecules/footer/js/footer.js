'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * footer module implementation.
 *
 * @author Semhar Sium <semhar50@gmail.com>
 */

// const selectors = { button: '.js-footer__button' };
// const stateClasses = { disabled: 'state-footer--disabled' };

T.Module.Footer = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
