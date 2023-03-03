namespace $ {
	export class $mol_app_demo extends $mol_book2 {
		
		/**
		 * ```tree
		 * editor_title <= detail_title
		 * ```
		 */
		editor_title() {
			return this.detail_title()
		}
		
		/**
		 * ```tree
		 * source_prefix \https://github.com/hyoo-ru/mam_mol/tree/master/
		 * ```
		 */
		source_prefix() {
			return "https://github.com/hyoo-ru/mam_mol/tree/master/"
		}
		
		/**
		 * ```tree
		 * repo_dict * mol \hyoo-ru/mam_mol
		 * ```
		 */
		repo_dict() {
			return {
				mol: "hyoo-ru/mam_mol"
			}
		}
		
		/**
		 * ```tree
		 * pages <= blocks
		 * ```
		 */
		pages() {
			return this.blocks()
		}
		
		/**
		 * ```tree
		 * plugins /
		 * 	<= Theme
		 * 	<= Search_start
		 * ```
		 */
		plugins() {
			return [
				this.Theme(),
				this.Search_start()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * demo_block_list /
		 * 	\$mol_example_small
		 * 	\$mol_example_large
		 * ```
		 */
		demo_block_list() {
			return [
				"$mol_example_small",
				"$mol_example_large"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Menu $mol_app_demo_menu
		 * 	names <= names_demo_filtered
		 * 	filter_suggests <= filter_suggests
		 * 	tools <= tools
		 * ```
		 */
		@ $mol_mem
		Menu() {
			const obj = new this.$.$mol_app_demo_menu()
			
			obj.names = () => this.names_demo_filtered()
			obj.filter_suggests = () => this.filter_suggests()
			obj.tools = () => this.tools()
			
			return obj
		}
		
		/**
		 * ```tree
		 * chat_pages*
		 * ```
		 */
		chat_pages(id: any) {
			return this.Detail(id).chat_pages()
		}
		
		/**
		 * ```tree
		 * Detail* $mol_app_demo_detail
		 * 	chat_seed <= chat_seed*
		 * 	chat_pages => chat_pages*
		 * 	title <= detail_title
		 * 	description <= detail_description
		 * 	edit_uri <= edit_uri
		 * 	Demo <= Demo
		 * ```
		 */
		@ $mol_mem_key
		Detail(id: any) {
			const obj = new this.$.$mol_app_demo_detail()
			
			obj.chat_seed = () => this.chat_seed(id)
			obj.title = () => this.detail_title()
			obj.description = () => this.detail_description()
			obj.edit_uri = () => this.edit_uri()
			obj.Demo = () => this.Demo()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Readme_page $mol_app_demo_readme
		 * 	repo <= repo
		 * 	module <= module
		 * 	source_link <= source_link
		 * ```
		 */
		@ $mol_mem
		Readme_page() {
			const obj = new this.$.$mol_app_demo_readme()
			
			obj.repo = () => this.repo()
			obj.module = () => this.module()
			obj.source_link = () => this.source_link()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Detail_empty_message $mol_status sub /
		 * 	<= detail_empty_prefix
		 * 	<= selected
		 * 	<= detail_empty_postfix
		 * ```
		 */
		@ $mol_mem
		Detail_empty_message() {
			const obj = new this.$.$mol_status()
			
			obj.sub = () => [
				this.detail_empty_prefix(),
				this.selected(),
				this.detail_empty_postfix()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * detail_title \$mol
		 * ```
		 */
		detail_title() {
			return "$mol"
		}
		
		/**
		 * ```tree
		 * blocks /
		 * ```
		 */
		blocks() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Theme $mol_theme_auto
		 * ```
		 */
		@ $mol_mem
		Theme() {
			const obj = new this.$.$mol_theme_auto()
			
			return obj
		}
		
		/**
		 * ```tree
		 * search_start? null
		 * ```
		 */
		@ $mol_mem
		search_start(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Search_start $mol_hotkey
		 * 	key * F? <=> search_start?
		 * 	mod_ctrl true
		 * ```
		 */
		@ $mol_mem
		Search_start() {
			const obj = new this.$.$mol_hotkey()
			
			obj.key = () => ({
				F: (next?: any) => this.search_start(next)
			})
			obj.mod_ctrl = () => true
			
			return obj
		}
		
		/**
		 * ```tree
		 * names_demo_filtered /string
		 * ```
		 */
		names_demo_filtered() {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * filter_suggests /string
		 * ```
		 */
		filter_suggests() {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * sources_uri \https://github.com/hyoo-ru/mam_mol/
		 * ```
		 */
		sources_uri() {
			return "https://github.com/hyoo-ru/mam_mol/"
		}
		
		/**
		 * ```tree
		 * Sources $mol_link_source uri <= sources_uri
		 * ```
		 */
		@ $mol_mem
		Sources() {
			const obj = new this.$.$mol_link_source()
			
			obj.uri = () => this.sources_uri()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Lights $mol_lights_toggle
		 * ```
		 */
		@ $mol_mem
		Lights() {
			const obj = new this.$.$mol_lights_toggle()
			
			return obj
		}
		
		/**
		 * ```tree
		 * tools /
		 * 	<= Sources
		 * 	<= Lights
		 * ```
		 */
		tools() {
			return [
				this.Sources(),
				this.Lights()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * chat_seed* \p9zx0v_nsmx1d
		 * ```
		 */
		chat_seed(id: any) {
			return "p9zx0v_nsmx1d"
		}
		
		/**
		 * ```tree
		 * detail_description \
		 * ```
		 */
		detail_description() {
			return ""
		}
		
		/**
		 * ```tree
		 * edit_uri \
		 * ```
		 */
		edit_uri() {
			return ""
		}
		
		/**
		 * ```tree
		 * Demo $mol_view
		 * ```
		 */
		@ $mol_mem
		Demo() {
			const obj = new this.$.$mol_view()
			
			return obj
		}
		
		/**
		 * ```tree
		 * repo \
		 * ```
		 */
		repo() {
			return ""
		}
		
		/**
		 * ```tree
		 * module /string
		 * ```
		 */
		module() {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * source_link \
		 * ```
		 */
		source_link() {
			return ""
		}
		
		/**
		 * ```tree
		 * detail_empty_prefix @ \No one demo with prefix "
		 * ```
		 */
		detail_empty_prefix() {
			return this.$.$mol_locale.text( '$mol_app_demo_detail_empty_prefix' )
		}
		
		/**
		 * ```tree
		 * selected \
		 * ```
		 */
		selected() {
			return ""
		}
		
		/**
		 * ```tree
		 * detail_empty_postfix @ \"
		 * ```
		 */
		detail_empty_postfix() {
			return this.$.$mol_locale.text( '$mol_app_demo_detail_empty_postfix' )
		}
	}
	
	export class $mol_app_demo_menu extends $mol_page {
		
		/**
		 * ```tree
		 * names /string
		 * ```
		 */
		names() {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * filter_suggests /string
		 * ```
		 */
		filter_suggests() {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * title @ \$mol examples
		 * ```
		 */
		title() {
			return this.$.$mol_locale.text( '$mol_app_demo_menu_title' )
		}
		
		/**
		 * ```tree
		 * Body $mol_scroll sub / <= List
		 * ```
		 */
		@ $mol_mem
		Body() {
			const obj = new this.$.$mol_scroll()
			
			obj.sub = () => [
				this.List()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Option* $mol_link
		 * 	arg <= option_arg*
		 * 	sub / <= Option_title*
		 * ```
		 */
		@ $mol_mem_key
		Option(id: any) {
			const obj = new this.$.$mol_link()
			
			obj.arg = () => this.option_arg(id)
			obj.sub = () => [
				this.Option_title(id)
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * filter?val \
		 * ```
		 */
		@ $mol_mem
		filter(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Filter $mol_search query?val <=> filter?val
		 * ```
		 */
		@ $mol_mem
		Filter() {
			const obj = new this.$.$mol_search()
			
			obj.query = (val?: any) => this.filter(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * options /
		 * ```
		 */
		options() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Options $mol_list rows <= options
		 * ```
		 */
		@ $mol_mem
		Options() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.options()
			
			return obj
		}
		
		/**
		 * ```tree
		 * List $mol_list rows /
		 * 	<= Filter
		 * 	<= Options
		 * ```
		 */
		@ $mol_mem
		List() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Filter(),
				this.Options()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * option_arg* *
		 * ```
		 */
		option_arg(id: any) {
			return {
			}
		}
		
		/**
		 * ```tree
		 * option_title* \
		 * ```
		 */
		option_title(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Option_title* $mol_dimmer
		 * 	haystack <= option_title*
		 * 	needle <= filter?val
		 * ```
		 */
		@ $mol_mem_key
		Option_title(id: any) {
			const obj = new this.$.$mol_dimmer()
			
			obj.haystack = () => this.option_title(id)
			obj.needle = () => this.filter()
			
			return obj
		}
	}
	
	export class $mol_app_demo_detail extends $mol_page {
		
		/**
		 * ```tree
		 * description \
		 * ```
		 */
		description() {
			return ""
		}
		
		/**
		 * ```tree
		 * tools /
		 * 	<= Readme
		 * 	<= Chat
		 * 	<= Edit
		 * 	<= Close
		 * ```
		 */
		tools() {
			return [
				this.Readme(),
				this.Chat(),
				this.Edit(),
				this.Close()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * body / <= Demo
		 * ```
		 */
		body() {
			return [
				this.Demo()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * readme_icon $mol_icon_information_outline
		 * ```
		 */
		@ $mol_mem
		readme_icon() {
			const obj = new this.$.$mol_icon_information_outline()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Readme $mol_link
		 * 	arg * readme \
		 * 	hint @ \Readme
		 * 	sub / <= readme_icon
		 * ```
		 */
		@ $mol_mem
		Readme() {
			const obj = new this.$.$mol_link()
			
			obj.arg = () => ({
				readme: ""
			})
			obj.hint = () => this.$.$mol_locale.text( '$mol_app_demo_detail_Readme_hint' )
			obj.sub = () => [
				this.readme_icon()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * chat_seed \0_0
		 * ```
		 */
		chat_seed() {
			return "0_0"
		}
		
		/**
		 * ```tree
		 * chat_pages
		 * ```
		 */
		chat_pages() {
			return this.Chat().pages()
		}
		
		/**
		 * ```tree
		 * Chat $mol_chat
		 * 	pages => chat_pages
		 * 	seed <= chat_seed
		 * ```
		 */
		@ $mol_mem
		Chat() {
			const obj = new this.$.$mol_chat()
			
			obj.seed = () => this.chat_seed()
			
			return obj
		}
		
		/**
		 * ```tree
		 * edit_hint @ \Edit this demo in studio
		 * ```
		 */
		edit_hint() {
			return this.$.$mol_locale.text( '$mol_app_demo_detail_edit_hint' )
		}
		
		/**
		 * ```tree
		 * Edit_speck $mol_speck value \β
		 * ```
		 */
		@ $mol_mem
		Edit_speck() {
			const obj = new this.$.$mol_speck()
			
			obj.value = () => "β"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Edit_icon $mol_icon_settings
		 * ```
		 */
		@ $mol_mem
		Edit_icon() {
			const obj = new this.$.$mol_icon_settings()
			
			return obj
		}
		
		/**
		 * ```tree
		 * edit_uri \
		 * ```
		 */
		edit_uri() {
			return ""
		}
		
		/**
		 * ```tree
		 * Edit $mol_link
		 * 	hint <= edit_hint
		 * 	sub /
		 * 		<= Edit_speck
		 * 		<= Edit_icon
		 * 	uri <= edit_uri
		 * ```
		 */
		@ $mol_mem
		Edit() {
			const obj = new this.$.$mol_link()
			
			obj.hint = () => this.edit_hint()
			obj.sub = () => [
				this.Edit_speck(),
				this.Edit_icon()
			] as readonly any[]
			obj.uri = () => this.edit_uri()
			
			return obj
		}
		
		/**
		 * ```tree
		 * close_hint @ \Close panel
		 * ```
		 */
		close_hint() {
			return this.$.$mol_locale.text( '$mol_app_demo_detail_close_hint' )
		}
		
		/**
		 * ```tree
		 * Close_icon $mol_icon_cross
		 * ```
		 */
		@ $mol_mem
		Close_icon() {
			const obj = new this.$.$mol_icon_cross()
			
			return obj
		}
		
		/**
		 * ```tree
		 * close_arg * demo null
		 * ```
		 */
		close_arg() {
			return {
				demo: null as any
			}
		}
		
		/**
		 * ```tree
		 * Close $mol_link
		 * 	hint <= close_hint
		 * 	sub / <= Close_icon
		 * 	arg <= close_arg
		 * ```
		 */
		@ $mol_mem
		Close() {
			const obj = new this.$.$mol_link()
			
			obj.hint = () => this.close_hint()
			obj.sub = () => [
				this.Close_icon()
			] as readonly any[]
			obj.arg = () => this.close_arg()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Demo $mol_view
		 * ```
		 */
		@ $mol_mem
		Demo() {
			const obj = new this.$.$mol_view()
			
			return obj
		}
	}
	
	export class $mol_app_demo_readme extends $mol_page {
		
		/**
		 * ```tree
		 * link_template \https://raw.githubusercontent.com/{repo}/master/{module}/readme.md
		 * ```
		 */
		link_template() {
			return "https://raw.githubusercontent.com/{repo}/master/{module}/readme.md"
		}
		
		/**
		 * ```tree
		 * repo \
		 * ```
		 */
		repo() {
			return ""
		}
		
		/**
		 * ```tree
		 * module /string
		 * ```
		 */
		module() {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * title @ \Readme
		 * ```
		 */
		title() {
			return this.$.$mol_locale.text( '$mol_app_demo_readme_title' )
		}
		
		/**
		 * ```tree
		 * tools /
		 * 	<= Source_link
		 * 	<= Close
		 * ```
		 */
		tools() {
			return [
				this.Source_link(),
				this.Close()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Readme $mol_text
		 * 	text <= readme
		 * 	uri_base <= uri_base?
		 * ```
		 */
		@ $mol_mem
		Readme() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.readme()
			obj.uri_base = () => this.uri_base()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Not_found $mol_view sub / <= Not_found_caption
		 * ```
		 */
		@ $mol_mem
		Not_found() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.Not_found_caption()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * source_link \
		 * ```
		 */
		source_link() {
			return ""
		}
		
		/**
		 * ```tree
		 * source_hint @ \Source code of this demo
		 * ```
		 */
		source_hint() {
			return this.$.$mol_locale.text( '$mol_app_demo_readme_source_hint' )
		}
		
		/**
		 * ```tree
		 * Source_link $mol_link_source
		 * 	uri <= source_link
		 * 	hint <= source_hint
		 * ```
		 */
		@ $mol_mem
		Source_link() {
			const obj = new this.$.$mol_link_source()
			
			obj.uri = () => this.source_link()
			obj.hint = () => this.source_hint()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Close_icon $mol_icon_cross
		 * ```
		 */
		@ $mol_mem
		Close_icon() {
			const obj = new this.$.$mol_icon_cross()
			
			return obj
		}
		
		/**
		 * ```tree
		 * close_arg * readme null
		 * ```
		 */
		close_arg() {
			return {
				readme: null as any
			}
		}
		
		/**
		 * ```tree
		 * Close $mol_link
		 * 	hint @ \Close panel
		 * 	sub / <= Close_icon
		 * 	arg <= close_arg
		 * ```
		 */
		@ $mol_mem
		Close() {
			const obj = new this.$.$mol_link()
			
			obj.hint = () => this.$.$mol_locale.text( '$mol_app_demo_readme_Close_hint' )
			obj.sub = () => [
				this.Close_icon()
			] as readonly any[]
			obj.arg = () => this.close_arg()
			
			return obj
		}
		
		/**
		 * ```tree
		 * readme \
		 * ```
		 */
		readme() {
			return ""
		}
		
		/**
		 * ```tree
		 * uri_base? \
		 * ```
		 */
		@ $mol_mem
		uri_base(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Not_found_caption @ \Readme not found
		 * ```
		 */
		Not_found_caption() {
			return this.$.$mol_locale.text( '$mol_app_demo_readme_Not_found_caption' )
		}
	}
	
}

