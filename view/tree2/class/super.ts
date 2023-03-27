namespace $ {
	const err = $mol_view_tree2_error_str

	export function $mol_view_tree2_class_super(
		this: $,
		klass: $mol_tree2
	) {
		if( !class_regex.test( klass.type ) ) return this.$mol_fail(
			err `Wrong class name at ${klass.span}` 
		)

		const superclass = klass.kids.length === 1 ? klass.kids[0] : undefined

		if (! superclass) return this.$mol_fail(
			err`No super class at ${klass.span}`
		)

		if( !class_regex.test( superclass.type ) ) return this.$mol_fail(
			err`Wrong super class name ${JSON.stringify(superclass.type).replace(/(^"|"$)/g, "")} at ${superclass.span}`
		)

		return superclass
	}

	const class_regex = /^[$A-Z]\w+$/
}
