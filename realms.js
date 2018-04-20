// const filtered_realms = realms
		// 	.filter(realm => realm.route.match(/^(fr|uk|de|br|es|it|be|apac|ssp|us)$/));

		// const filtered_realm = realms
		// 	.filter(realm => realm.label.match(/adyoulike/i))
		// 	.map(realm => {
		// 		realm.newLabel = ((realmRoute) => {
		// 			switch(realmRoute) {
		// 				case 'fr':
		// 					return 'France';
		// 				case 'uk':
		// 					return 'United Kingdom';
		// 				case 'de':
		// 					return 'Denmark';
		// 				case 'br':
		// 					return 'Brazil';
		// 				case 'es':
		// 					return 'Spain/Portugal';
		// 				case 'it':
		// 					return 'Italy';
		// 				case 'be':
		// 					return 'Belgium';
		// 				case 'apac':
		// 					return 'APAC';
		// 				case 'ssp':
		// 					return 'SSP';
		// 				case 'us':
		// 					return 'United States';
		// 				default:
		// 					break;
		// 			}
		// 		})(realm.route);
		// 	});

		// if the default realm is not an adyoulike one then... 
		
		// const filtered_realms =  realms
		// 	.reduce((filtered_list, realm) => {
		// 		console.log('waka waka waka waka -- ', this.defaultRealm);

		// const defaultRealm = realms
		// 	.find(realm => realm.route === path) || this.props.realms[0];

		// 	}, []);



		// if the path is empty ---> filter on AYLrealms
		// if the path is full  ---> find that realm

		// if (path === empty || path is full but doesn't exist in realms || path is an adyoulike realm)
		// 		====>>  list all AdYouLike realms  -- filter

		// if (path is full and exists in realms)
		//		====>>  that specific realm and disabled field  --- find



		const filtered_realms = ((realms) => {
			const path = window.location.pathname.replace(/\//g, '');
			// const aylRegex = /^(fr|uk|de|br|es|it|be|apac|ssp|us)$/;

			(realms.some(realm => realm.route === path) ) ? 
			
			
			&& (chosen_realm = realms.find(realm => realm.route === path));

			// let realmExists = path && (realms.entries().route.includes(path));
			console.log('reallmfawoiweo', realms.entries());

			let filtered = realms.map(realm => {

			})

			// if there is a path, check that it's part of the available realms
			if (path && realms.includes())

			// path && (realms.find(realm => realm.route === path));
			
			if (!path || RegExp(aylRegex).test(path)) {

				console.log('no path existent OR this is an adyoulike realm');
			} else {
				return (realms.find(realm => realm.route === path)) || this.props.realms[0];
				console.log('path was included and it is ', path);
			}

		})(realms);




		// const filtered_realms = (realms, defaultRealm) => {
		// 	console.log(realms);
		// 	console.log('DEF REALM ===>>> ', defaultRealm);
		// };


		// const filtered_realms = realms
		// 	.reduce((filtered_list, realm, currIndex, arr) => {
		// 		console.log(this.defaultRealm);
		// 		console.log('currIndex -- ', currIndex);
		// 		console.log('array reduce was called upon -- ', arr);				
		// 		if (RegExp(/adyoulike/i).test(realm.label)) {
		// 			// console.log(this.defaultRealm);
		// 			var newRealmObj = {
		// 				...realm, 
		// 				newLabel: ((realmRoute) => {
		// 					switch(realmRoute) {
		// 						case 'fr':
		// 							return 'France';
		// 						case 'uk':
		// 							return 'United Kingdom';
		// 						case 'de':
		// 							return 'Denmark';
		// 						case 'br':
		// 							return 'Brazil';
		// 						case 'es':
		// 							return 'Spain/Portugal';
		// 						case 'it':
		// 							return 'Italy';
		// 						case 'be':
		// 							return 'Belgium';
		// 						case 'apac':
		// 							return 'APAC';
		// 						case 'ssp':
		// 							return 'SSP';
		// 						case 'us':
		// 							return 'United States';
		// 						default:
		// 							break;
		// 					}
		// 				})(realm.route),
		// 			}
		// 			filtered_list.push(newRealmObj);
		// 		}
		// 		return filtered_list;
		// 	}, []);


		// const realmSelectorClasses = classnames({
		// 	[classes.realmSelector]: true,
		// 	[classes.hidden]: false // ==> condition
		// })
