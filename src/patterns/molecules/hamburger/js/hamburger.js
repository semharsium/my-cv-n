'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * hamburger module implementation.
 *
 * @author Semhar Sium <semhar50@gmail.com>
 */

// const selectors = { button: '.js-hamburger__button' };
// const stateClasses = { disabled: 'state-hamburger--disabled' };

T.Module.Hamburger = T.createModule({
	selectors: {
		hamburgerMenuItem: ".js-hamburger-item"
	},
	stateClasses: {
		hamburgerMenuItemActive: "m-hamburger--menu-item-active"
	},
	start(resolve) {
		this.$ctx = $(this._ctx);//data-t-name="Hamburger
		this.$hamburgerItems = this.$ctx.find(this.selectors.hamburgerMenuItem);
		this.registerHandlers();
		resolve();
		//slick();
	},

	registerHandlers() {
		this.$ctx.on("click", this.handleMenuItem.bind(this));
	},

	handleMenuItem() {
		this.$hamburgerItems.toggleClass(this.stateClasses.hamburgerMenuItemActive);
		this._events.emit("navigation.open.menu");
	}
});
