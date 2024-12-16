( function ( $ ) {
	'use strict';

	var bnInScript2 = {
		id: 'bn-inscript2',
		name: 'ইনস্ক্ৰিপ্ট ২',
		description: 'Enhanced InScript keyboard for Bengali language',
		date: '2013-02-09',
		URL: 'https://www.mediawiki.org/wiki/Help:Extension:UniversalLanguageSelector/Input_methods/bn-inscript2',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '\\!', 'অ্যা' ],
			[ '1', '১' ],
			[ '2', '২' ],
			[ '\\#', '্র' ],
			[ '3', '৩' ],
			[ '\\$', 'র্' ],
			[ '4', '৪' ],
			[ '\\%', 'জ্ঞ' ],
			[ '5', '৫' ],
			[ '\\^', 'ত্র' ],
			[ '6', '৬' ],
			[ '\\&', 'ক্ষ' ],
			[ '7', '৭' ],
			[ '\\*', 'শ্র' ],
			[ '8', '৮' ],
			[ '9', '৯' ],
			[ '\\(', '(' ],
			[ '\\)', ')' ],
			[ '0', '০' ],
			[ '"', 'ঠ' ],
			[ '\'', 'ট' ],
			[ ',', ',' ],
			[ '-', '-' ],
			[ '\\.', '.' ],
			[ '/', 'য়' ],
			[ ':', 'ছ' ],
			[ ';', 'চ' ],
			[ '\\<', 'ষ' ],
			[ '\\=', 'ৃ' ],
			[ '\\+', 'ঋ' ],
			[ '\\>', '।' ],
			[ '\\?', 'য' ],
			[ 'A', 'ও' ],
			[ 'C', 'ণ' ],
			[ 'D', 'অ' ],
			[ 'E', 'আ' ],
			[ 'F', 'ই' ],
			[ 'G', 'উ' ],
			[ 'H', 'ফ' ],
			[ 'I', 'ঘ' ],
			[ 'K', 'খ' ],
			[ 'L', 'থ' ],
			[ 'M', 'শ' ],
			[ 'O', 'ধ' ],
			[ 'P', 'ঝ' ],
			[ 'Q', 'ঔ' ],
			[ 'R', 'ঈ' ],
			[ 'S', 'এ' ],
			[ 'T', 'ঊ' ],
			[ 'U', 'ঙ' ],
			[ 'W', 'ঐ' ],
			[ 'X', 'ঁ' ],
			[ 'Y', 'ভ' ],
			[ '\\{', 'ঢ' ],
			[ '\\[', 'ড' ],
			[ '\\}', 'ঞ' ],
			[ '\\]', '়' ],
			[ '\\_', 'ঃ' ],
			[ 'a', 'ো' ],
			[ 'c', 'ম' ],
			[ 'd', '্' ],
			[ 'e', 'া' ],
			[ 'f', 'ি' ],
			[ 'g', 'ু' ],
			[ 'h', 'প' ],
			[ 'i', 'গ' ],
			[ 'j', 'র' ],
			[ 'k', 'ক' ],
			[ 'l', 'ত' ],
			[ 'm', 'স' ],
			[ 'n', 'ল' ],
			[ 'o', 'দ' ],
			[ 'p', 'জ' ],
			[ 'q', 'ৌ' ],
			[ 'r', 'ী' ],
			[ 's', 'ে' ],
			[ 't', 'ূ' ],
			[ 'u', 'হ' ],
			[ 'v', 'ন' ],
			[ 'w', 'ৈ' ],
			[ 'x', 'ং' ],
			[ 'y', 'ব' ],
			[ 'z', 'ʼ' ]
		],
		patterns_x: [
			[ '\\!', '৴' ],
			[ '1', '\u200d' ],
			[ '\\@', '৵' ],
			[ '2', '\u200c' ],
			[ '\\#', '৶' ],
			[ '\\$', '৷' ],
			[ '4', '₹' ],
			[ '\\%', '৸' ],
			[ '\\^', '৹' ],
			[ ',', '৳' ],
			[ '\\.', '॥' ],
			[ '/', '্য' ],
			[ '\\<', '৲' ],
			[ '\\=', 'ৄ' ],
			[ '\\+', 'ৠ' ],
			[ '\\>', 'ঽ' ],
			[ '\\?', '৻' ],
			[ 'F', 'ঌ' ],
			[ 'R', 'ৡ' ],
			[ '\\{', 'ঢ়' ],
			[ '\\[', 'ড়' ],
			[ 'f', 'ৢ' ],
			[ 'l', 'ৎ' ],
			[ 'r', 'ৣ' ],
			[ 'x', '৺' ]
		]
	};

	$.ime.register( bnInScript2 );
}( jQuery ) );
