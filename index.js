module.exports = {

	'iscroll': require('iscroll'),

	'vueIscrollView': require('vue-iscroll-view'),

	'vueAwesomeSwiper': require('vue-awesome-swiper'),

	'vuelidate': require('vuelidate')

}

/*
module.exports = (

	(
		Importz,

		Package,

		Dependencies = []

	) => {

		for ( name in Package.dependencies )
		{
			Dependencies.push( name );
		}

		return Importz( Dependencies, (name, cip) => {

			return cip( require( name ) );

		});

	}

)
(
	require('importz'),

	require('./package.json')
);
*/
