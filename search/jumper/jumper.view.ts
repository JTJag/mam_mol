namespace $.$$ {
	export class $mol_search_jumper extends $.$mol_search_jumper {

		@ $mol_mem
		results() {

			const needle = this.query()
			if( needle.length < 2 ) return []
			
			const regexp = $mol_regexp.from( { needle } , { ignoreCase: true } )
			return [ ... this.Root().view_find( ( _, text = '' ) => regexp.test( text ) ) ]
			
		}

		@ $mol_mem
		index( next?: number ): number {

			this.query()

			const all = this.results()
			if( all.length == 0 ) return 0
			
			let index: number = next ?? super.index()
			
			if( index! > all.length ) index = 1
			if( index! <= 0 ) index = all.length
			
			if( next !== undefined ) {
				const path = all[ index! - 1 ]
				this.Root().ensure_visible( path[ path.length - 1 ] )
			}
			
			return index
		}

		sub() {
			return [
				this.Query() ,
				... ( this.query().length > 0 ) ? [
 					this.Clear(),
					this.Index(),
				] : [] ,
			]
		}
		
	}
}
