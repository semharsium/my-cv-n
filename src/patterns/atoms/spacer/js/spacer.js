'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * spacer module implementation.
 *
 * @author Semhar Sium <semhar50@gmail.com>
 */

// const selectors = { button: '.js-spacer__button' };
// const stateClasses = { disabled: 'state-spacer--disabled' };

T.Module.Spacer= T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
