const images = [
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYCZBGvcwuKNdjAka3gCchbI4VxsTYVN1nKcmuP4dJEIZ_2t-oGo8hnCxj5FEzUFjRZakyQ9BGL9qo_3Ceb3697pQtI6p-Zh0667oSCpNVBQ7R_4.jpg?r=221",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfEIgrTnpQ9I5pAxvhMXkksMdhucPDugrXCbO48ap2DOwJdhJO-HoteZ6yovRZt5-y5cnS0bsPdFoWd6T8cEJk8rKI9NX71in8Sy5Q49B4bPpFQA.jpg?r=03e",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABemmlHgv5nMlYcXLEaTGCw1NZF6FRyq20Xd_6IBVKLIT5pYPWWV-pCyiftwQbiZLtueBtjKcO3n8z4xAybX97LsxSQMF4tebjVqzTscwjA-nuCR8.jpg?r=948",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVrbzp-ahGvS4Hva7nnpnfyRz9g31rgW_XUiiMrymA82Lgbwqi7JWZc4Cbkh3vM1vpZ-fnd1JTaG2PmXM3gjIU-4d8iissFkqFgPCuHnD_sTT2Tk.jpg?r=3d3",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRPZuTYXwasZjiils6cn54VT_1YND9Te__EB9Yd35gPfiXctjQpbujxVPsm1uUbXoGMpW7gl5w1hNL9S6bGekjHwQ2tc4Xt5q5j8izQ1ac9UDxgr.jpg?r=75a",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeypNpA4eiABYR582NaJStstHDbyi4_hjvRjYsUKDIEsUe892GpefKSZZyBshE1krm6c0W-bmTPAHJDoC3SC8sB6zjiHtrj5F5jCWmRktO-o4a-0.jpg?r=7d1",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcfQzptoW5q7LPs-JC1fGQ8wDkBwCsyDwILxy1otrEwLfXsGtBSqaJMJHQ-YIUGo4CzRtnWJTH0GtZ6x13C-b3PzY9et7gM-FOdtwPHRfHcxuiE2.jpg?r=fba",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABck17bDCVLVf_u-jU3x1LWZXd3Y2_jbuzFgxR8Zsh6lUKhZpNtvKnouFifUuykQZcquhp61r_Rx8G_Vncaif9AMv5ryJCgKniVEXHp4NAILM8OSW.jpg?r=045",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcs4Xv8TbJQk3PLPoyPpJ0mdRkyfrpk3cvwGcHde4LJ00Pc7Mmj6UrmM3iKexGAM9wQI21lG9TOoaWp2GKvT-lE4WidczzDZUwgOB9VfdrxIv0P5.jpg?r=b6c",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYEY08jga6v289V6AdPpvOUY4GJJR2XuXVSzkSMKKFWhodofZ08AaIpdlw-FsHvNtX8Sgyy2wn0IRrI0nUt5XZduhgjSVoxb4y4EboWZn6B2Ikgq.jpg?r=415",
  "https://occ-0-3062-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcG9_SURPUqC8Ut-XH8Lb9RDXrnzZZfSioQVZeTE4WztK9fP6UWD4DjzniAoFMyFf6uP5AFQlXHDxjcj8aG2eaVwpUGC9y8vulKHwJyncxG5gHuY.jpg?r=8e9",
];

export function getDataEpisodes () {
  return fetch(`https://rickandmortyapi.com/api/episode`)
		.then((response) => response.json())
		.then((data) => {
			return data.results.map((episode, i) => {
				return {
					id: episode.id,
					name: episode.name,
					air_date: episode.air_date,
					episode: episode.episode,
					characters: episode.characters.length,
					charactersUrl: episode.characters,
					url: episode.url,
					created: episode.create,
					img: images[i],
				};
			});
		})
		.catch((error) => console.log(error));
};

export function getDataEpisodesByName(searchName) {
  return fetch(`https://rickandmortyapi.com/api/episode/?name=${searchName}`)
		.then((response) => response.json())
		.then((data) => {
			let resultsEspisodes = [];
			for (let i = 0; i < data.results.length; i++) {
				resultsEspisodes.push({
					id: data.results[i].id,
					name: data.results[i].name,
					air_date: data.results[i].air_date,
					episode: data.results[i].episode,
					charactersUrl: data.results[i].characters,
					url: data.results[i].url,
					created: data.results[i].create,
					img: images[data.results[i].id],
				});
			}
			return resultsEspisodes;
		})
		.catch((error) => console.log(error));
}
