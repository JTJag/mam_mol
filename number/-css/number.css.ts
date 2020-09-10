namespace $ { $mol_style_attach( "mol/number/number.css",
 "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number]:hover {\n\tz-index: 2;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\ttext-align: right;\n\tposition: relative;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n\n[mol_number_inc] ,\n[mol_number_dec] {\n\tmargin: 0;\n\tflex: 0 0 auto;\n\tposition: absolute;\n\ttop: 0;\n\tdisplay: none;\n\tz-index: 1;\n\tpadding: .5rem;\n}\n\n[mol_number_inc] {\n\tleft: calc( 100% - .5rem );\n}\n\n[mol_number_dec] {\n\tright: calc( 100% - .5rem );\n}\n\n[mol_number]:focus-within [mol_number_inc]:not([disabled]) ,\n[mol_number]:focus-within [mol_number_dec]:not([disabled]) {\n\tdisplay: flex;\n}\n\n[mol_number_inc_icon] ,\n[mol_number_dec_icon] {\n\tdisplay: block;\n\twidth: 1rem;\n\theight: 1rem;\n}\n"
) }