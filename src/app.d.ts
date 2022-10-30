// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import("$lib/server/lucia.js").Auth;
	type UserAttributes = {};
}

/// <reference types="@sveltejs/kit" />
declare namespace App {
	interface Locals {
		getSession: import("@lucia-auth/sveltekit").GetSession;
		setSession: import("@lucia-auth/sveltekit").SetSession;
		clearSession: import("@lucia-auth/sveltekit").ClearSession;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
