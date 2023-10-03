namespace $ {
	
	/**
	 * Convert asynchronous (promise-based) API to synchronous by wrapping function and method calls in a fiber.
	 * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
	 */
	export function $mol_wire_sync< Host extends object >( obj: Host ) {
		return new Proxy( obj, {
			
			get( obj, field ) {
				
				const val = (obj as any)[ field ]
				if( typeof val !== 'function' ) return val
				
				const temp = $mol_wire_task.getter( val )
				return function $mol_wire_sync( this: Host, ... args: any[] ) {
					const fiber = temp( obj, args )
					return fiber.sync()
				}
				
			},
			
			apply( obj, self, args ) {
				const temp = $mol_wire_task.getter( obj as ( ... args: any[] )=> any )
				const fiber = temp( self, args )
				return fiber.sync()
			},
			
		} ) as any as MethodsResultAwaited<Host>
	}

	type MethodsResultAwaited<Host extends Object> = {
		[K in keyof Host]: Host[K] extends (...args: infer Args) => infer Res
			? (...args: Args) => Awaited<Res>
			: Host[K]
	}

}
