namespace $.$$ {

	/**
	 * Mixin view logic to DOM node of another component.
	 */
	export class $mol_ghost extends $.$mol_ghost {
		
		@ $mol_mem
		dom_node( next?: Element ) {
			const node = this.Sub().dom_node( next )

			$mol_dom_render_attributes( node , this.attr_static() )
			$mol_dom_render_events( node , this.event() )
			
			return node
		}
		
		@ $mol_mem
		dom_node_actual() {
			this.dom_node()
			const node = this.Sub().dom_node_actual()

			const attr = this.attr()
			const style = this.style()
			const fields = this.field()

			$mol_dom_render_attributes( node , attr )
			$mol_dom_render_styles( node , style )
			$mol_dom_render_fields( node , fields )

			return node
		}
		
		dom_tree() {
			
			const Sub = this.Sub()
			const node = Sub.dom_tree()
			
			try {
				this.dom_node_actual()
				this.auto()
			} catch( error: unknown ) {
				$mol_fail_log( error )
			}
			
			return node
		}

		title() {
			return this.Sub().title()
		}
		
		minimal_width() {
			return this.Sub().minimal_width()
		}

		minimal_height() {
			return this.Sub().minimal_height()
		}

	}

}
