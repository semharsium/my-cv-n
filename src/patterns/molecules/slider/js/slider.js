'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * slider module implementation.
 *
 * @author Semhar Sium <semhar50@gmail.com>
 */

// const selectors = { button: '.js-slider__button' };
// const stateClasses = { disabled: 'state-slider--disabled' };

T.Module.Slider= T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);
		$ctx.slick({
			slidesToshow:1,
			slidesToScroll:1,
			arrows: true,
			dots: true,
			autoplay: true,
			autoplayspeed: 2000,
		});
		resolve();
		
	},
});


