export const character_anais = {
	"anais": {
		type: "movieclip",
		fps: 30,
		totalFrames: 268,
		labels: {idle: {from:0, to:75}, shoot: {from:76, to:136}, flash: {from:137, to:154}, run: {from:155, to:169}, hit: {from:170, to:184}, die: {from:185, to:202}, enter_door: {from:203, to:218}, exit_door: {from:219, to:235}, talk: {from:236, to:252}, idle_explore: {from:253, to:267}, },
		layers: [
			{
				name: "anim",
				keys: [
					{
						from: 0,
						to: 75,
						classname: "_anais_anais_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 8.5},
						transform: [0, 8.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 76,
						to: 136,
						classname: "_anais_anais_shoot",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 8.5},
						transform: [0, 8.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 137,
						to: 154,
						classname: "_anais_anais_flash",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 155,
						to: 169,
						classname: "_anais_anais_run",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10, ty: 0},
						transform: [10, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 170,
						to: 184,
						classname: "_anais_anais_hit",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -19, ty: 0},
						transform: [-19, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 185,
						to: 202,
						classname: "_anais_anais_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 203,
						to: 218,
						classname: "_anais_anais_interact",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 8.5},
						transform: [0, 8.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 219,
						to: 235,
						classname: "_anais_anais_exitdoor",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 8.5},
						transform: [0, 8.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 236,
						to: 252,
						classname: "_anais_anais_talk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 8.5},
						transform: [0, 8.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 253,
						to: 267,
						classname: "_anais_anais_idle_explore",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2, ty: 8.5},
						transform: [2, 8.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 75,
					},
					{
						from: 76,
						to: 136,
					},
					{
						from: 137,
						to: 154,
					},
					{
						from: 155,
						to: 169,
					},
					{
						from: 170,
						to: 184,
					},
					{
						from: 185,
						to: 202,
					},
					{
						from: 203,
						to: 218,
					},
					{
						from: 219,
						to: 235,
					},
					{
						from: 236,
						to: 252,
					},
					{
						from: 253,
						to: 267,
					},
				]
			},
		]
	},
	"_anais_anais_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 181,
		labels: {},
		layers: [
			{
				name: "anais_leg",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.764, b: -0.646, c: -0.646, d: 0.764, tx: -36.1, ty: -75.05},
						transform: [-36.1, -75.05, 1, 1, -0.702, -2.44, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.024, b: -0.218, c: -0.127, d: 0.845, tx: -34.5, ty: -61.35},
						transform: [-34.5, -61.35, 1.047, 0.854, -0.149, -2.932, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.048, b: -0.13, c: -0.05, d: 0.864, tx: -36.2, ty: -63.45},
						transform: [-36.2, -63.45, 1.056, 0.865, -0.058, -3.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 62,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.055, b: -0.025, c: 0.04, d: 0.948, tx: -41.35, ty: -70.75},
						transform: [-41.35, -70.75, 1.056, 0.949, 0.042, -3.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 63,
						to: 89,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.041, b: 0.125, c: 0.162, d: 0.888, tx: -42.25, ty: -70.7},
						transform: [-42.25, -70.7, 1.049, 0.902, 0.181, 3.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 118,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.024, b: 0.228, c: 0.284, d: 0.885, tx: -51.1, ty: -70.9},
						transform: [-51.1, -70.9, 1.049, 0.929, 0.31, 2.923, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.014, b: 0.268, c: 0.354, d: 0.885, tx: -59.7, ty: -72.15},
						transform: [-59.7, -72.15, 1.049, 0.953, 0.38, 2.883, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 120,
						to: 122,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 1.033, b: -0.183, c: -0.08, d: 0.985, tx: 17.8, ty: -88.75},
						transform: [17.8, -88.75, 1.049, 0.988, -0.081, -0.175, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 123,
						to: 125,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.756, b: -0.726, c: 0.583, d: 0.772, tx: 26.9, ty: -88.25},
						transform: [26.9, -88.25, 1.048, 0.967, 0.647, -0.765, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 126,
						to: 179,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.86, b: -0.599, c: 0.455, d: 0.854, tx: 26.9, ty: -88.3},
						transform: [26.9, -88.3, 1.048, 0.967, 0.49, -0.608, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.894, b: -0.549, c: 0.477, d: 1.037, tx: 21.6, ty: -108.55},
						transform: [21.6, -108.55, 1.049, 1.141, 0.431, -0.551, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.044, b: -0.132, c: -0.132, d: 1.044, tx: -34.6, ty: -69.05},
						transform: [-34.6, -69.05, 1.053, 1.053, -0.126, -3.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.051, b: -0.064, c: -0.064, d: 1.051, tx: -41.1, ty: -61.3},
						transform: [-41.1, -61.3, 1.053, 1.053, -0.061, -3.08, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.047, b: 0.106, c: 0.106, d: 1.047, tx: -42.6, ty: -63.8},
						transform: [-42.6, -63.8, 1.053, 1.053, 0.1, 3.041, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.021, b: -0.258, c: -0.258, d: 1.021, tx: -49.5, ty: -65.6},
						transform: [-49.5, -65.6, 1.053, 1.053, -0.247, -2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.021, b: -0.258, c: -0.258, d: 1.021, tx: -48, ty: -67.1},
						transform: [-48, -67.1, 1.053, 1.053, -0.247, -2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.02, b: -0.255, c: -0.255, d: 1.02, tx: -46.5, ty: -68.6},
						transform: [-46.5, -68.6, 1.052, 1.052, -0.245, -2.896, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.02, b: -0.255, c: -0.255, d: 1.02, tx: -46.45, ty: -68.65},
						transform: [-46.45, -68.65, 1.052, 1.052, -0.245, -2.896, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.021, b: -0.258, c: -0.258, d: 1.021, tx: -46.5, ty: -68.6},
						transform: [-46.5, -68.6, 1.053, 1.053, -0.247, -2.894, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 1.158, b: -0.534, c: 0.441, d: 0.956, tx: 20.5, ty: -65.6},
						transform: [20.5, -65.6, 1.275, 1.053, 0.432, -0.432, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 1.167, b: -0.514, c: 0.424, d: 0.963, tx: 23, ty: -65.6},
						transform: [23, -65.6, 1.275, 1.053, 0.415, -0.415, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 1.167, b: -0.514, c: 0.424, d: 0.963, tx: 29, ty: -67.6},
						transform: [29, -67.6, 1.275, 1.053, 0.415, -0.415, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hosepipe_n2_x",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -45.25, ty: -25.95},
						transform: [-45.25, -25.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 56,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: 0.279, c: -0.057, d: 0.985, tx: -52.6, ty: -15.45},
						transform: [-52.6, -15.45, 1.037, 0.987, -0.058, 0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.109, c: -0.109, d: 0.994, tx: -47.2, ty: -11.65},
						transform: [-47.2, -11.65, 1, 1, -0.109, 0.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: 0.109, c: -0.064, d: 1.009, tx: -45, ty: -11.7},
						transform: [-45, -11.7, 1.005, 1.011, -0.064, 0.108, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.82, b: 0.186, c: -0.174, d: 1.073, tx: -51.3, ty: -21.2},
						transform: [-51.3, -21.2, 0.841, 1.087, -0.161, 0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.899, b: 0.182, c: -0.132, d: 1.038, tx: -49.8, ty: -23.3},
						transform: [-49.8, -23.3, 0.917, 1.046, -0.127, 0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.969, b: 0.073, c: 0.065, d: 0.986, tx: -45.9, ty: -23.1},
						transform: [-45.9, -23.1, 0.972, 0.988, 0.066, 0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.91, b: 0.219, c: -0.066, d: 0.947, tx: -50.85, ty: -21.7},
						transform: [-50.85, -21.7, 0.936, 0.95, -0.07, 0.236, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.899, b: 0.219, c: -0.066, d: 0.947, tx: -48.6, ty: -20.5},
						transform: [-48.6, -20.5, 0.925, 0.95, -0.069, 0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.977, b: -0.212, c: -0.165, d: 0.987, tx: 25.3, ty: -19},
						transform: [25.3, -19, 1, 1.001, -0.166, -2.928, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: -0.009, c: -0.068, d: 0.935, tx: 30.35, ty: -21.65},
						transform: [30.35, -21.65, 0.992, 0.937, -0.072, -3.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.888, b: 0.044, c: 0.083, d: 0.937, tx: 38.8, ty: -22.9},
						transform: [38.8, -22.9, 0.889, 0.94, 0.088, 3.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.943, b: 0.31, c: 0.236, d: 0.907, tx: 46.9, ty: -44.8},
						transform: [46.9, -44.8, 0.992, 0.937, 0.255, 2.824, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.049, b: -0.083, c: -0.303, d: 1.032, tx: -8.55, ty: -66.8},
						transform: [-8.55, -66.8, 1.053, 1.075, -0.285, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.033, c: -0.107, d: 1.057, tx: -19.1, ty: -61.2},
						transform: [-19.1, -61.2, 1.053, 1.062, -0.101, 3.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.04, c: -0.04, d: 1.055, tx: -20.45, ty: -63},
						transform: [-20.45, -63, 1.053, 1.056, -0.038, 3.104, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.053, b: 0.003, c: -0.049, d: 1.053, tx: -25.6, ty: -61.45},
						transform: [-25.6, -61.45, 1.053, 1.054, -0.047, 3.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.053, b: 0.001, c: -0.047, d: 1.053, tx: -25.65, ty: -61.4},
						transform: [-25.65, -61.4, 1.053, 1.054, -0.044, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.001, c: 0.047, d: 1.057, tx: -33.25, ty: -62.15},
						transform: [-33.25, -62.15, 1.052, 1.058, 0.045, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.001, c: -0.001, d: 1.054, tx: -34.5, ty: -62.9},
						transform: [-34.5, -62.9, 1.052, 1.054, -0.001, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.003, c: -0.008, d: 1.053, tx: -34.6, ty: -62.95},
						transform: [-34.6, -62.95, 1.052, 1.053, -0.008, 3.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.052, b: 0.003, c: -0.048, d: 1.053, tx: -4.45, ty: -61.4},
						transform: [-4.45, -61.4, 1.052, 1.054, -0.046, 0.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.052, b: -0.001, c: -0.033, d: 1.052, tx: -4.1, ty: -61.35},
						transform: [-4.1, -61.35, 1.052, 1.053, -0.031, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: -0.219, c: 0.34, d: 0.963, tx: 6, ty: -60.25},
						transform: [6, -60.25, 1.052, 1.021, 0.339, -0.21, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_foot",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8.4, ty: -32.95},
						transform: [8.4, -32.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.427, d: 1.003, tx: -1.85, ty: -32.95},
						transform: [-1.85, -32.95, 1, 1.09, 0.403, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.533, d: 1.025, tx: -4.6, ty: -33.5},
						transform: [-4.6, -33.5, 1, 1.155, 0.48, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.211, d: 0.97, tx: -1.35, ty: -33.45},
						transform: [-1.35, -33.45, 1, 0.993, 0.214, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.214, d: 1, tx: -1.55, ty: -34.25},
						transform: [-1.55, -34.25, 1, 1.023, 0.211, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.324, d: 1.006, tx: -5.3, ty: -34.2},
						transform: [-5.3, -34.2, 1, 1.057, 0.311, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.426, d: 1, tx: -8.75, ty: -34.25},
						transform: [-8.75, -34.25, 1, 1.087, 0.403, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.429, d: 0.966, tx: -8.8, ty: -33.35},
						transform: [-8.8, -33.35, 1, 1.057, 0.418, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.526, d: 1.26, tx: -11.15, ty: -40.45},
						transform: [-11.15, -40.45, 1, 1.366, 0.396, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.456, d: 1.265, tx: -9.55, ty: -40.45},
						transform: [-9.55, -40.45, 1, 1.345, 0.346, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.135, d: 1.26, tx: 4.65, ty: -40.45},
						transform: [4.65, -40.45, 1, 1.267, -0.107, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_foreleg",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: 0.64, b: 0.769, c: -0.769, d: 0.64, tx: -12.2, ty: -35.5},
						transform: [-12.2, -35.5, 1, 1, -0.877, 0.877, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: 0.716, b: 0.695, c: -0.668, d: 0.688, tx: -18.4, ty: -36.8},
						transform: [-18.4, -36.8, 0.998, 0.959, -0.77, 0.77, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: 0.762, b: 0.694, c: -0.623, d: 0.69, tx: -20.7, ty: -36.7},
						transform: [-20.7, -36.7, 1.031, 0.93, -0.735, 0.739, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: -0.079, d: 0.999, tx: -30.9, ty: -32.9},
						transform: [-30.9, -32.9, 0.982, 1.002, -0.079, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: -0.072, d: 1.03, tx: -31.05, ty: -33.65},
						transform: [-31.05, -33.65, 0.982, 1.032, -0.07, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: 0.041, d: 1.036, tx: -33.75, ty: -33.65},
						transform: [-33.75, -33.65, 0.982, 1.037, 0.039, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: 0.145, d: 1.03, tx: -36.25, ty: -33.65},
						transform: [-36.25, -33.65, 0.982, 1.04, 0.14, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: 0.146, d: 0.994, tx: -36.2, ty: -32.8},
						transform: [-36.2, -32.8, 0.982, 1.005, 0.145, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_leg4_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: 0, c: 0.066, d: 1.132, tx: -35.25, ty: -36.1},
						transform: [-35.25, -36.1, 0.934, 1.134, 0.058, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_leg4_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: 0, c: 0.011, d: 1.134, tx: -34, ty: -36.05},
						transform: [-34, -36.05, 0.934, 1.134, 0.009, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_leg4_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: 0, c: -0.367, d: 1.132, tx: -24.95, ty: -36.1},
						transform: [-24.95, -36.1, 0.934, 1.19, -0.314, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_forearm",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.588, b: 0.809, c: -0.809, d: 0.588, tx: 23.15, ty: -60.5},
						transform: [23.15, -60.5, 1, 1, -0.942, 0.942, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 56,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.896, b: 0.147, c: -0.17, d: 1.209, tx: 9.3, ty: -57.9},
						transform: [9.3, -57.9, 0.908, 1.221, -0.14, 0.162, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.86, b: -0.43, c: 0.527, d: 0.949, tx: 1.2, ty: -60.15},
						transform: [1.2, -60.15, 0.961, 1.086, 0.507, -0.463, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.882, b: -0.395, c: 0.484, d: 0.962, tx: -1.75, ty: -62.35},
						transform: [-1.75, -62.35, 0.967, 1.077, 0.466, -0.421, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 1.196, b: -0.709, c: 0.55, d: 0.926, tx: -7.75, ty: -62.4},
						transform: [-7.75, -62.4, 1.39, 1.077, 0.536, -0.536, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 1.043, b: -0.747, c: 0.626, d: 0.874, tx: -0.4, ty: -66.65},
						transform: [-0.4, -66.65, 1.283, 1.075, 0.621, -0.621, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.676, c: 0.665, d: 0.847, tx: -12.4, ty: -71.85},
						transform: [-12.4, -71.85, 1.096, 1.077, 0.666, -0.665, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.358, c: 0.395, d: 0.999, tx: -24.75, ty: -73.75},
						transform: [-24.75, -73.75, 0.973, 1.075, 0.376, -0.376, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.904, b: -0.337, c: 0.376, d: 1.008, tx: -25.65, ty: -73.85},
						transform: [-25.65, -73.85, 0.965, 1.076, 0.357, -0.357, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.821, b: -0.677, c: -0.636, d: 0.771, tx: -27.2, ty: -65.45},
						transform: [-27.2, -65.45, 1.064, 1, -0.69, -2.452, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 135,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.875, b: -0.586, c: -0.556, d: 0.83, tx: -26.85, ty: -65.45},
						transform: [-26.85, -65.45, 1.053, 0.998, -0.59, -2.551, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 136,
						to: 149,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.979, b: 0.112, c: 0.114, d: 0.993, tx: -24.5, ty: -65.35},
						transform: [-24.5, -65.35, 0.986, 0.999, 0.114, 3.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.819, b: 0.705, c: 0.652, d: 0.757, tx: -25.6, ty: -65.2},
						transform: [-25.6, -65.2, 1.081, 0.999, 0.711, 2.431, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.497, b: 0.941, c: 0.884, d: 0.467, tx: -35.05, ty: -57.75},
						transform: [-35.05, -57.75, 1.064, 1, 1.085, 2.057, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_skirt",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_body_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.9, ty: -58.75},
						transform: [10.9, -58.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_body_x_f0",
						instancename: "",
						matrix: {a: 0.942, b: 0, c: 0.304, d: 1.061, tx: -4.65, ty: -61.1},
						transform: [-4.65, -61.1, 0.942, 1.103, 0.28, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_body_x_f0",
						instancename: "",
						matrix: {a: 0.94, b: 0, c: 0.282, d: 1.088, tx: -7.2, ty: -63},
						transform: [-7.2, -63, 0.94, 1.124, 0.253, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: -0.11, c: 0.042, d: 1.076, tx: -15.85, ty: -65.25},
						transform: [-15.85, -65.25, 1, 1.077, 0.039, -0.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: -0.11, c: 0.122, d: 1.101, tx: -18.5, ty: -65.7},
						transform: [-18.5, -65.7, 1, 1.108, 0.11, -0.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.125, c: 0.205, d: 1.159, tx: -24.2, ty: -68.15},
						transform: [-24.2, -68.15, 0.987, 1.177, 0.175, -0.127, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.965, b: -0.137, c: 0.285, d: 1.206, tx: -29.2, ty: -70.3},
						transform: [-29.2, -70.3, 0.975, 1.239, 0.232, -0.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.965, b: -0.135, c: 0.285, d: 1.168, tx: -29.25, ty: -68.35},
						transform: [-29.25, -68.35, 0.975, 1.202, 0.239, -0.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.974, b: -0.005, c: -0.007, d: 1.237, tx: -15.45, ty: -69.55},
						transform: [-15.45, -69.55, 0.974, 1.237, -0.006, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.009, c: -0.033, d: 1.232, tx: -13.4, ty: -69.35},
						transform: [-13.4, -69.35, 0.979, 1.233, -0.027, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 1.09, b: -0.173, c: 0.371, d: 1.006, tx: -16.05, ty: -61.65},
						transform: [-16.05, -61.65, 1.104, 1.073, 0.353, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_head_idle",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16, ty: -73.6},
						transform: [16, -73.6, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_head_idle",
						instancename: "",
						matrix: {a: -0.848, b: 0.526, c: 0.526, d: 0.848, tx: 1.5, ty: -83.75},
						transform: [1.5, -83.75, 0.999, 0.999, 0.555, 2.586, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_head_idle",
						instancename: "",
						matrix: {a: -0.89, b: 0.457, c: 0.457, d: 0.89, tx: -1.3, ty: -84.65},
						transform: [-1.3, -84.65, 1, 1, 0.475, 2.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_head_idle_up",
						instancename: "",
						matrix: {a: -0.897, b: 0.442, c: 0.442, d: 0.897, tx: -1.5, ty: -77.6},
						transform: [-1.5, -77.6, 1, 1, 0.458, 2.684, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_head_idle_up",
						instancename: "",
						matrix: {a: -0.897, b: 0.439, c: 0.439, d: 0.897, tx: -1.45, ty: -79.25},
						transform: [-1.45, -79.25, 0.999, 0.999, 0.455, 2.686, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_head_idle_up",
						instancename: "",
						matrix: {a: -0.834, b: 0.549, c: 0.549, d: 0.834, tx: -12.7, ty: -78.5},
						transform: [-12.7, -78.5, 0.998, 0.998, 0.582, 2.559, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_head_idle_up",
						instancename: "",
						matrix: {a: -0.766, b: 0.64, c: 0.64, d: 0.766, tx: -22.8, ty: -80.75},
						transform: [-22.8, -80.75, 0.998, 0.998, 0.696, 2.446, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_head_idle_up",
						instancename: "",
						matrix: {a: -0.853, b: 0.522, c: 0.522, d: 0.853, tx: -24.95, ty: -73.35},
						transform: [-24.95, -73.35, 1, 1, 0.549, 2.593, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_head_idle",
						instancename: "",
						matrix: {a: 0.989, b: 0.147, c: -0.147, d: 0.989, tx: -30.5, ty: -89.85},
						transform: [-30.5, -89.85, 1, 1, -0.147, 0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_head_idle",
						instancename: "",
						matrix: {a: 0.99, b: 0.139, c: -0.139, d: 0.99, tx: -26.4, ty: -88.5},
						transform: [-26.4, -88.5, 1, 1, -0.14, 0.14, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_head_idle",
						instancename: "",
						matrix: {a: 0.998, b: -0.057, c: 0.057, d: 0.998, tx: -36.75, ty: -78.35},
						transform: [-36.75, -78.35, 1, 1, 0.057, -0.057, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.712, b: 0.702, c: 0.702, d: 0.712, tx: -3.6, ty: -58.9},
						transform: [-3.6, -58.9, 1, 1, 0.778, 2.364, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.439, b: 0.897, c: 0.897, d: 0.439, tx: -14.1, ty: -58.25},
						transform: [-14.1, -58.25, 0.999, 0.999, 1.116, 2.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.232, b: 0.973, c: 0.973, d: 0.232, tx: -19.85, ty: -59},
						transform: [-19.85, -59, 1, 1, 1.337, 1.805, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
					},
					{
						from: 62,
						to: 89,
					},
					{
						from: 90,
						to: 116,
					},
					{
						from: 117,
						to: 119,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.638, b: 0.631, c: 0.692, d: -0.7, tx: -2.75, ty: -70.2},
						transform: [-2.75, -70.2, 0.897, 0.985, 2.362, 0.78, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.635, b: 0.621, c: 0.684, d: -0.699, tx: -2.5, ty: -70.2},
						transform: [-2.5, -70.2, 0.888, 0.978, 2.368, 0.774, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.616, b: 0.494, c: 0.569, d: -0.71, tx: 2.05, ty: -70.2},
						transform: [2.05, -70.2, 0.79, 0.91, 2.466, 0.676, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.243, c: 0.266, d: -0.948, tx: -7.75, ty: -69.95},
						transform: [-7.75, -69.95, 0.897, 0.984, 2.868, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hosepipe_n_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -45.25, ty: -25.95},
						transform: [-45.25, -25.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: 1.017, b: 0.203, c: -0.022, d: 0.994, tx: -48.6, ty: -21.15},
						transform: [-48.6, -21.15, 1.037, 0.994, -0.022, 0.197, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0.215, c: -0.075, d: 0.984, tx: -49.15, ty: -20.75},
						transform: [-49.15, -20.75, 1.118, 0.986, -0.077, 0.193, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: 1.093, b: 0.234, c: -0.093, d: 0.982, tx: -50, ty: -20},
						transform: [-50, -20, 1.118, 0.986, -0.094, 0.211, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_anais_hosepipe_nd_x_f0",
						instancename: "",
						matrix: {a: 1.035, b: 0.212, c: -0.031, d: 0.994, tx: -49.6, ty: -19.8},
						transform: [-49.6, -19.8, 1.057, 0.994, -0.031, 0.202, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_anais_hosepipe_nd_x_f0",
						instancename: "",
						matrix: {a: 1.095, b: 0.238, c: -0.044, d: 0.993, tx: -50.45, ty: -18.85},
						transform: [-50.45, -18.85, 1.12, 0.994, -0.044, 0.215, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 22,
						to: 25,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.685, b: 0.131, c: -0.044, d: 0.995, tx: -50.85, ty: -18.45},
						transform: [-50.85, -18.45, 0.698, 0.996, -0.045, 0.189, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 26,
						to: 31,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.728, b: 0.146, c: -0.084, d: 0.992, tx: -51.9, ty: -17.05},
						transform: [-51.9, -17.05, 0.743, 0.995, -0.084, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 32,
						to: 56,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.801, b: 0.181, c: -0.109, d: 0.994, tx: -52.7, ty: -15.2},
						transform: [-52.7, -15.2, 0.821, 1, -0.109, 0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 1.019, b: 0.166, c: -0.166, d: 1.021, tx: -48.05, ty: -11.35},
						transform: [-48.05, -11.35, 1.033, 1.035, -0.161, 0.161, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 1.027, b: 0.166, c: -0.119, d: 1.021, tx: -45.8, ty: -11.35},
						transform: [-45.8, -11.35, 1.04, 1.028, -0.116, 0.16, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.873, b: 0.126, c: -0.177, d: 1.091, tx: -51.75, ty: -20.8},
						transform: [-51.75, -20.8, 0.882, 1.105, -0.161, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.909, b: 0.121, c: -0.135, d: 1.055, tx: -50.35, ty: -22.85},
						transform: [-50.35, -22.85, 0.917, 1.063, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 1.055, b: 0.016, c: 0.066, d: 1.003, tx: -46.25, ty: -22.65},
						transform: [-46.25, -22.65, 1.055, 1.005, 0.066, 0.015, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 1.239, b: 0.221, c: -0.13, d: 0.952, tx: -51.75, ty: -21.3},
						transform: [-51.75, -21.3, 1.258, 0.961, -0.135, 0.177, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 1.223, b: 0.221, c: -0.128, d: 0.952, tx: -49.5, ty: -20.1},
						transform: [-49.5, -20.1, 1.243, 0.961, -0.134, 0.179, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.977, b: -0.212, c: -0.212, d: 0.977, tx: 25.5, ty: -18.95},
						transform: [25.5, -18.95, 1, 1, -0.213, -2.928, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: -0.009, c: -0.115, d: 0.934, tx: 30.6, ty: -21.6},
						transform: [30.6, -21.6, 0.992, 0.941, -0.122, -3.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.895, b: -0.099, c: -0.243, d: 0.908, tx: 40.2, ty: -22.85},
						transform: [40.2, -22.85, 0.9, 0.94, -0.262, -3.032, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.943, b: 0.31, c: 0.191, d: 0.922, tx: 47.1, ty: -44.85},
						transform: [47.1, -44.85, 0.992, 0.941, 0.205, 2.824, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cone",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 36.6, ty: -40.25},
						transform: [36.6, -40.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: 22, ty: -88.6},
						transform: [22, -88.6, 0.997, 0.997, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: 16.7, ty: -84.8},
						transform: [16.7, -84.8, 0.999, 0.999, 1.029, -1.029, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: 28, ty: -103.75},
						transform: [28, -103.75, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: 29.15, ty: -112.7},
						transform: [29.15, -112.7, 0.995, 0.995, 1.081, -1.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.001, b: -0.996, c: 0.996, d: 0.001, tx: 0.2, ty: -104.85},
						transform: [0.2, -104.85, 0.996, 0.996, 1.57, -1.57, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -17.6, ty: -99.25},
						transform: [-17.6, -99.25, 0.997, 0.997, 2.039, -2.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -21.55, ty: -99.25},
						transform: [-21.55, -99.25, 0.999, 0.999, 2.074, -2.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -14.85, ty: -87.2},
						transform: [-14.85, -87.2, 0.997, 0.997, 2.091, -2.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -15.05, ty: -85.65},
						transform: [-15.05, -85.65, 0.996, 0.996, 2.126, -2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -26.65, ty: -75.25},
						transform: [-26.65, -75.25, 0.997, 0.997, 2.617, -2.617, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -35.55, ty: -54.85},
						transform: [-35.55, -54.85, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tube_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 38.6, ty: -39.25},
						transform: [38.6, -39.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: 15, ty: -78.6},
						transform: [15, -78.6, 0.997, 0.997, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: 14.1, ty: -80},
						transform: [14.1, -80, 0.999, 0.999, 1.029, -1.029, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: 28, ty: -102.2},
						transform: [28, -102.2, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: 28.05, ty: -106.75},
						transform: [28.05, -106.75, 0.995, 0.995, 1.081, -1.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: 1.3, ty: -116.25},
						transform: [1.3, -116.25, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -17.2, ty: -99},
						transform: [-17.2, -99, 0.997, 0.997, 2.039, -2.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -18.55, ty: -97.65},
						transform: [-18.55, -97.65, 0.999, 0.999, 2.074, -2.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -13.25, ty: -87.8},
						transform: [-13.25, -87.8, 0.997, 0.997, 2.091, -2.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -14.05, ty: -86.65},
						transform: [-14.05, -86.65, 0.996, 0.996, 2.126, -2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -25.65, ty: -71.25},
						transform: [-25.65, -71.25, 0.997, 0.997, 2.617, -2.617, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -38.15, ty: -54.85},
						transform: [-38.15, -54.85, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_forearm",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.117, c: 0.117, d: -0.993, tx: -14.8, ty: -45.7},
						transform: [-14.8, -45.7, 1, 1, 3.024, 0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.772, b: -0.633, c: -0.633, d: -0.772, tx: -20.55, ty: -41.3},
						transform: [-20.55, -41.3, 0.998, 0.998, -2.455, -0.687, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.755, b: -0.656, c: -0.656, d: -0.755, tx: -20.8, ty: -41.1},
						transform: [-20.8, -41.1, 1, 1, -2.427, -0.715, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.814, b: -0.3, c: -0.153, d: -1.008, tx: -15.5, ty: -59.95},
						transform: [-15.5, -59.95, 0.868, 1.02, -2.991, -0.353, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.773, b: -0.391, c: -0.269, d: -0.983, tx: -15.05, ty: -62.3},
						transform: [-15.05, -62.3, 0.867, 1.019, -2.875, -0.469, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.699, b: -0.699, c: -0.561, d: -0.852, tx: -19.4, ty: -67.7},
						transform: [-19.4, -67.7, 0.989, 1.02, -2.559, -0.785, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.938, b: -0.066, c: 0.13, d: -1.011, tx: -20.8, ty: -60.3},
						transform: [-20.8, -60.3, 0.94, 1.019, 3.014, -0.071, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.937, b: -0.019, c: 0.185, d: -1.003, tx: -22, ty: -61.15},
						transform: [-22, -61.15, 0.937, 1.02, 2.959, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.106, c: 0.104, d: 0.984, tx: -40.05, ty: -76.6},
						transform: [-40.05, -76.6, 1, 0.99, 0.106, -0.106, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 135,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.179, c: 0.181, d: 0.972, tx: -40.3, ty: -75.05},
						transform: [-40.3, -75.05, 0.977, 0.989, 0.184, -0.184, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 136,
						to: 149,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.594, b: -0.565, c: 0.681, d: 0.716, tx: -42.3, ty: -64.25},
						transform: [-42.3, -64.25, 0.819, 0.988, 0.76, -0.76, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.264, b: -0.799, c: 0.939, d: 0.311, tx: -41.35, ty: -53.45},
						transform: [-41.35, -53.45, 0.841, 0.989, 1.251, -1.251, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.66, b: -0.479, c: 0.581, d: -0.802, tx: -43.95, ty: -41.1},
						transform: [-43.95, -41.1, 0.815, 0.99, 2.514, -2.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_hand",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.848, b: 0.53, c: 0.53, d: -0.848, tx: 0.7, ty: -43.25},
						transform: [0.7, -43.25, 1, 1, 2.583, 0.558, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.692, b: -0.72, c: -0.72, d: -0.692, tx: -7.15, ty: -49.95},
						transform: [-7.15, -49.95, 0.998, 0.998, -2.336, -0.805, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.657, b: -0.754, c: -0.754, d: -0.657, tx: -7.45, ty: -50.15},
						transform: [-7.45, -50.15, 1, 1, -2.287, -0.854, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.153, c: -0.153, d: -0.988, tx: -3.55, ty: -64.3},
						transform: [-3.55, -64.3, 0.999, 0.999, -2.988, -0.154, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.152, c: -0.152, d: -0.987, tx: -1.05, ty: -69.35},
						transform: [-1.05, -69.35, 0.999, 0.999, -2.989, -0.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.97, b: -0.241, c: -0.241, d: -0.97, tx: -8.9, ty: -77.65},
						transform: [-8.9, -77.65, 1, 1, -2.898, -0.244, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 1, b: -0.01, c: -0.01, d: -1, tx: -7.55, ty: -62.55},
						transform: [-7.55, -62.55, 1, 1, -3.132, -0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: 0.005, d: -1, tx: -7.45, ty: -61.5},
						transform: [-7.45, -61.5, 1, 1, 3.137, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.03, c: 0.029, d: 0.972, tx: -22.6, ty: -79.65},
						transform: [-22.6, -79.65, 1, 0.972, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 135,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.092, c: 0.089, d: 0.968, tx: -24.05, ty: -78.9},
						transform: [-24.05, -78.9, 1, 0.972, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 136,
						to: 149,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.507, c: 0.493, d: 0.838, tx: -34.35, ty: -74.2},
						transform: [-34.35, -74.2, 1, 0.972, 0.532, -0.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 164,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.62, b: -0.785, c: 0.763, d: 0.603, tx: -39.3, ty: -66.05},
						transform: [-39.3, -66.05, 1, 0.972, 0.902, -0.902, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 165,
						to: 179,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.062, b: -0.876, c: 0.969, d: 0.069, tx: -48.55, ty: -55.55},
						transform: [-48.55, -55.55, 0.878, 0.972, 1.5, -1.5, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: -0.498, b: -0.867, c: 0.843, d: -0.485, tx: -53.95, ty: -44.7},
						transform: [-53.95, -44.7, 1, 0.972, 2.093, -2.093, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_hand",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.152, b: -0.988, c: 0.988, d: 0.152, tx: 50, ty: -30.8},
						transform: [50, -30.8, 1, 1, 1.418, -1.418, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.788, b: -0.613, c: 0.613, d: -0.788, tx: 25.75, ty: -74.7},
						transform: [25.75, -74.7, 0.998, 0.998, 2.48, -2.48, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.81, b: -0.586, c: 0.586, d: -0.81, tx: 24.8, ty: -76.25},
						transform: [24.8, -76.25, 1, 1, 2.516, -2.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.741, b: -0.669, c: 0.669, d: -0.741, tx: 28.9, ty: -84.9},
						transform: [28.9, -84.9, 0.998, 0.998, 2.407, -2.407, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.739, b: -0.668, c: 0.668, d: -0.739, tx: 31.4, ty: -89.9},
						transform: [31.4, -89.9, 0.997, 0.997, 2.407, -2.407, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.943, b: -0.332, c: 0.332, d: -0.943, tx: 12, ty: -93.6},
						transform: [12, -93.6, 1, 1, 2.803, -2.803, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.909, b: 0.41, c: -0.41, d: -0.909, tx: -0.8, ty: -90.9},
						transform: [-0.8, -90.9, 0.998, 0.998, -2.718, 2.718, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.885, b: 0.462, c: -0.462, d: -0.885, tx: -1.75, ty: -90.8},
						transform: [-1.75, -90.8, 0.999, 0.999, -2.661, 2.661, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.764, b: -0.645, c: -0.669, d: 0.793, tx: 14.2, ty: -55.95},
						transform: [14.2, -55.95, 1, 1.037, -0.701, -2.441, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.786, b: -0.616, c: -0.639, d: 0.815, tx: 13.85, ty: -56.1},
						transform: [13.85, -56.1, 0.998, 1.036, -0.665, -2.477, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.912, b: 0.411, c: 0.426, d: 0.946, tx: 4.2, ty: -61.45},
						transform: [4.2, -61.45, 1, 1.037, 0.424, 2.718, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "absorb_point",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 71.1, ty: -39.4},
						transform: [71.1, -39.4, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 56,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 53.05, ty: -77.7},
						transform: [53.05, -77.7, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 32.5, ty: -105.5},
						transform: [32.5, -105.5, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 30.9, ty: -107.4},
						transform: [30.9, -107.4, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 44.7, ty: -130.3},
						transform: [44.7, -130.3, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 43.4, ty: -135.25},
						transform: [43.4, -135.25, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 1.5, ty: -149.05},
						transform: [1.5, -149.05, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -31.95, ty: -128.35},
						transform: [-31.95, -128.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -34.55, ty: -127.05},
						transform: [-34.55, -127.05, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -30.3, ty: -116.55},
						transform: [-30.3, -116.55, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -31.3, ty: -114.9},
						transform: [-31.3, -114.9, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -53.9, ty: -87.5},
						transform: [-53.9, -87.5, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -70.25, ty: -54.9},
						transform: [-70.25, -54.9, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_anais_anais_shoot": {
		type: "movieclip",
		fps: 30,
		totalFrames: 181,
		labels: {},
		layers: [
			{
				name: "anais_leg",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.764, b: -0.646, c: -0.646, d: 0.764, tx: -36.1, ty: -69.55},
						transform: [-36.1, -69.55, 1, 1, -0.702, -2.44, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.024, b: -0.218, c: -0.127, d: 0.845, tx: -34.5, ty: -56.35},
						transform: [-34.5, -56.35, 1.047, 0.854, -0.149, -2.932, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.048, b: -0.13, c: -0.05, d: 0.864, tx: -36.2, ty: -58.45},
						transform: [-36.2, -58.45, 1.056, 0.865, -0.058, -3.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 62,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.055, b: -0.025, c: 0.04, d: 0.948, tx: -41.35, ty: -65.75},
						transform: [-41.35, -65.75, 1.056, 0.949, 0.042, -3.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 63,
						to: 89,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.041, b: 0.125, c: 0.162, d: 0.888, tx: -42.25, ty: -65.7},
						transform: [-42.25, -65.7, 1.049, 0.902, 0.181, 3.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 118,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.024, b: 0.228, c: 0.284, d: 0.885, tx: -51.1, ty: -65.9},
						transform: [-51.1, -65.9, 1.049, 0.929, 0.31, 2.923, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.014, b: 0.268, c: 0.354, d: 0.885, tx: -59.7, ty: -67.15},
						transform: [-59.7, -67.15, 1.049, 0.953, 0.38, 2.883, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 120,
						to: 122,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 1.033, b: -0.183, c: -0.08, d: 0.985, tx: 17.8, ty: -83.25},
						transform: [17.8, -83.25, 1.049, 0.988, -0.081, -0.175, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 123,
						to: 125,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.756, b: -0.726, c: 0.583, d: 0.772, tx: 26.9, ty: -82.75},
						transform: [26.9, -82.75, 1.048, 0.967, 0.647, -0.765, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.506, 0], [0.441, 1], [1, 1], ],
						}
					},
					{
						from: 126,
						to: 179,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.86, b: -0.599, c: 0.455, d: 0.854, tx: 26.9, ty: -82.8},
						transform: [26.9, -82.8, 1.048, 0.967, 0.49, -0.608, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.894, b: -0.549, c: 0.477, d: 1.037, tx: 21.6, ty: -103.05},
						transform: [21.6, -103.05, 1.049, 1.141, 0.431, -0.551, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.332, c: -0.332, d: 0.999, tx: -38.1, ty: -63.8},
						transform: [-38.1, -63.8, 1.053, 1.053, -0.321, -2.82, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.018, b: -0.267, c: -0.267, d: 1.018, tx: -43.1, ty: -58.8},
						transform: [-43.1, -58.8, 1.053, 1.053, -0.257, -2.885, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.018, b: -0.267, c: -0.267, d: 1.018, tx: -43.6, ty: -62.3},
						transform: [-43.6, -62.3, 1.053, 1.053, -0.257, -2.885, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.021, b: -0.258, c: -0.258, d: 1.021, tx: -49.5, ty: -63.1},
						transform: [-49.5, -63.1, 1.053, 1.053, -0.247, -2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.021, b: -0.258, c: -0.258, d: 1.021, tx: -48, ty: -64.6},
						transform: [-48, -64.6, 1.053, 1.053, -0.247, -2.894, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.02, b: -0.255, c: -0.255, d: 1.02, tx: -46.5, ty: -66.1},
						transform: [-46.5, -66.1, 1.052, 1.052, -0.245, -2.896, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.02, b: -0.255, c: -0.255, d: 1.02, tx: -46.45, ty: -66.15},
						transform: [-46.45, -66.15, 1.052, 1.052, -0.245, -2.896, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.021, b: -0.258, c: -0.258, d: 1.021, tx: -46.5, ty: -66.1},
						transform: [-46.5, -66.1, 1.053, 1.053, -0.247, -2.894, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 1.158, b: -0.534, c: 0.441, d: 0.956, tx: 20.5, ty: -63.1},
						transform: [20.5, -63.1, 1.275, 1.053, 0.432, -0.432, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 1.167, b: -0.514, c: 0.424, d: 0.963, tx: 23, ty: -63.1},
						transform: [23, -63.1, 1.275, 1.053, 0.415, -0.415, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 1.167, b: -0.514, c: 0.424, d: 0.963, tx: 29, ty: -65.1},
						transform: [29, -65.1, 1.275, 1.053, 0.415, -0.415, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hosepipe_n2_x",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -45.25, ty: -25.95},
						transform: [-45.25, -25.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 56,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: 0.279, c: -0.057, d: 0.985, tx: -52.6, ty: -15.45},
						transform: [-52.6, -15.45, 1.037, 0.987, -0.058, 0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.109, c: -0.109, d: 0.994, tx: -47.2, ty: -11.65},
						transform: [-47.2, -11.65, 1, 1, -0.109, 0.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: 0.109, c: -0.064, d: 1.009, tx: -45, ty: -11.7},
						transform: [-45, -11.7, 1.005, 1.011, -0.064, 0.108, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.82, b: 0.186, c: -0.174, d: 1.073, tx: -51.3, ty: -21.2},
						transform: [-51.3, -21.2, 0.841, 1.087, -0.161, 0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.899, b: 0.182, c: -0.132, d: 1.038, tx: -49.8, ty: -23.3},
						transform: [-49.8, -23.3, 0.917, 1.046, -0.127, 0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.969, b: 0.073, c: 0.065, d: 0.986, tx: -45.9, ty: -23.1},
						transform: [-45.9, -23.1, 0.972, 0.988, 0.066, 0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.91, b: 0.219, c: -0.066, d: 0.947, tx: -50.85, ty: -21.7},
						transform: [-50.85, -21.7, 0.936, 0.95, -0.07, 0.236, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.899, b: 0.219, c: -0.066, d: 0.947, tx: -48.6, ty: -20.5},
						transform: [-48.6, -20.5, 0.925, 0.95, -0.069, 0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.977, b: -0.212, c: -0.165, d: 0.987, tx: 25.3, ty: -19},
						transform: [25.3, -19, 1, 1.001, -0.166, -2.928, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: -0.009, c: -0.068, d: 0.935, tx: 30.35, ty: -21.65},
						transform: [30.35, -21.65, 0.992, 0.937, -0.072, -3.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.888, b: 0.044, c: 0.083, d: 0.937, tx: 38.8, ty: -22.9},
						transform: [38.8, -22.9, 0.889, 0.94, 0.088, 3.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.943, b: 0.31, c: 0.236, d: 0.907, tx: 46.9, ty: -44.8},
						transform: [46.9, -44.8, 0.992, 0.937, 0.255, 2.824, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.049, b: -0.083, c: -0.303, d: 1.032, tx: -8.55, ty: -64.3},
						transform: [-8.55, -64.3, 1.053, 1.075, -0.285, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.033, c: -0.107, d: 1.057, tx: -19.1, ty: -58.7},
						transform: [-19.1, -58.7, 1.053, 1.062, -0.101, 3.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.04, c: -0.04, d: 1.055, tx: -20.45, ty: -60.5},
						transform: [-20.45, -60.5, 1.053, 1.056, -0.038, 3.104, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.053, b: 0.003, c: -0.049, d: 1.053, tx: -25.6, ty: -58.95},
						transform: [-25.6, -58.95, 1.053, 1.054, -0.047, 3.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.053, b: 0.001, c: -0.047, d: 1.053, tx: -25.65, ty: -58.9},
						transform: [-25.65, -58.9, 1.053, 1.054, -0.044, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.001, c: 0.047, d: 1.057, tx: -33.25, ty: -59.65},
						transform: [-33.25, -59.65, 1.052, 1.058, 0.045, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.001, c: -0.001, d: 1.054, tx: -34.5, ty: -60.4},
						transform: [-34.5, -60.4, 1.052, 1.054, -0.001, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.052, b: 0.003, c: -0.008, d: 1.053, tx: -34.6, ty: -60.45},
						transform: [-34.6, -60.45, 1.052, 1.053, -0.008, 3.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.052, b: 0.003, c: -0.048, d: 1.053, tx: -4.45, ty: -58.9},
						transform: [-4.45, -58.9, 1.052, 1.054, -0.046, 0.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.052, b: -0.001, c: -0.033, d: 1.052, tx: -4.1, ty: -58.85},
						transform: [-4.1, -58.85, 1.052, 1.053, -0.031, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: -0.219, c: 0.34, d: 0.963, tx: 6, ty: -57.75},
						transform: [6, -57.75, 1.052, 1.021, 0.339, -0.21, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_foot",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.949, tx: 8.4, ty: -31.45},
						transform: [8.4, -31.45, 1, 0.949, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.427, d: 0.951, tx: -1.85, ty: -31.45},
						transform: [-1.85, -31.45, 1, 1.043, 0.422, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.533, d: 0.972, tx: -4.6, ty: -32},
						transform: [-4.6, -32, 1, 1.109, 0.501, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.211, d: 0.92, tx: -1.35, ty: -31.95},
						transform: [-1.35, -31.95, 1, 0.944, 0.225, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.214, d: 0.949, tx: -1.55, ty: -32.7},
						transform: [-1.55, -32.7, 1, 0.973, 0.222, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.324, d: 0.954, tx: -5.3, ty: -32.65},
						transform: [-5.3, -32.65, 1, 1.008, 0.327, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.426, d: 0.949, tx: -8.75, ty: -32.7},
						transform: [-8.75, -32.7, 1, 1.04, 0.422, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.429, d: 0.916, tx: -8.8, ty: -31.85},
						transform: [-8.8, -31.85, 1, 1.012, 0.438, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.526, d: 1.195, tx: -11.15, ty: -38.6},
						transform: [-11.15, -38.6, 1, 1.306, 0.415, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.456, d: 1.2, tx: -9.55, ty: -38.6},
						transform: [-9.55, -38.6, 1, 1.284, 0.363, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.135, d: 1.195, tx: 4.65, ty: -38.6},
						transform: [4.65, -38.6, 1, 1.203, -0.112, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_foreleg",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: 0.64, b: 0.729, c: -0.769, d: 0.607, tx: -12.2, ty: -33.9},
						transform: [-12.2, -33.9, 0.97, 0.979, -0.903, 0.851, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: 0.716, b: 0.66, c: -0.668, d: 0.653, tx: -18.4, ty: -35.1},
						transform: [-18.4, -35.1, 0.974, 0.934, -0.797, 0.744, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: 0.762, b: 0.659, c: -0.623, d: 0.655, tx: -20.7, ty: -35},
						transform: [-20.7, -35, 1.008, 0.904, -0.761, 0.713, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: -0.079, d: 0.948, tx: -30.9, ty: -31.4},
						transform: [-30.9, -31.4, 0.982, 0.951, -0.083, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: -0.072, d: 0.977, tx: -31.05, ty: -32.1},
						transform: [-31.05, -32.1, 0.982, 0.979, -0.074, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: 0.041, d: 0.983, tx: -33.75, ty: -32.1},
						transform: [-33.75, -32.1, 0.982, 0.984, 0.042, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: 0.145, d: 0.977, tx: -36.25, ty: -32.1},
						transform: [-36.25, -32.1, 0.982, 0.988, 0.147, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: -0.982, b: 0, c: 0.146, d: 0.943, tx: -36.2, ty: -31.3},
						transform: [-36.2, -31.3, 0.982, 0.955, 0.153, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_leg4_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: 0, c: 0.066, d: 1.074, tx: -35.25, ty: -34.45},
						transform: [-35.25, -34.45, 0.934, 1.076, 0.061, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_leg4_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: 0, c: 0.011, d: 1.076, tx: -34, ty: -34.4},
						transform: [-34, -34.4, 0.934, 1.076, 0.01, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_leg4_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: 0, c: -0.367, d: 1.074, tx: -24.95, ty: -34.45},
						transform: [-24.95, -34.45, 0.934, 1.135, -0.329, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_forearm",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.588, b: 0.809, c: -0.809, d: 0.588, tx: 23.15, ty: -60.5},
						transform: [23.15, -60.5, 1, 1, -0.942, 0.942, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 56,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.896, b: 0.147, c: -0.17, d: 1.209, tx: 9.3, ty: -57.9},
						transform: [9.3, -57.9, 0.908, 1.221, -0.14, 0.162, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.86, b: -0.43, c: 0.527, d: 0.949, tx: 1.2, ty: -60.15},
						transform: [1.2, -60.15, 0.961, 1.086, 0.507, -0.463, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.882, b: -0.395, c: 0.484, d: 0.962, tx: -1.75, ty: -62.35},
						transform: [-1.75, -62.35, 0.967, 1.077, 0.466, -0.421, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 1.196, b: -0.709, c: 0.55, d: 0.926, tx: -7.75, ty: -62.4},
						transform: [-7.75, -62.4, 1.39, 1.077, 0.536, -0.536, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 1.043, b: -0.747, c: 0.626, d: 0.874, tx: -0.4, ty: -66.65},
						transform: [-0.4, -66.65, 1.283, 1.075, 0.621, -0.621, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.676, c: 0.665, d: 0.847, tx: -12.4, ty: -71.85},
						transform: [-12.4, -71.85, 1.096, 1.077, 0.666, -0.665, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.905, b: -0.358, c: 0.395, d: 0.999, tx: -24.75, ty: -73.75},
						transform: [-24.75, -73.75, 0.973, 1.075, 0.376, -0.376, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.904, b: -0.337, c: 0.376, d: 1.008, tx: -25.65, ty: -73.85},
						transform: [-25.65, -73.85, 0.965, 1.076, 0.357, -0.357, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.821, b: -0.677, c: -0.636, d: 0.771, tx: -27.2, ty: -65.45},
						transform: [-27.2, -65.45, 1.064, 1, -0.69, -2.452, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 135,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.875, b: -0.586, c: -0.556, d: 0.83, tx: -26.85, ty: -65.45},
						transform: [-26.85, -65.45, 1.053, 0.998, -0.59, -2.551, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 136,
						to: 149,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.979, b: 0.112, c: 0.114, d: 0.993, tx: -24.5, ty: -65.35},
						transform: [-24.5, -65.35, 0.986, 0.999, 0.114, 3.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.819, b: 0.705, c: 0.652, d: 0.757, tx: -25.6, ty: -65.2},
						transform: [-25.6, -65.2, 1.081, 0.999, 0.711, 2.431, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.497, b: 0.941, c: 0.884, d: 0.467, tx: -35.05, ty: -57.75},
						transform: [-35.05, -57.75, 1.064, 1, 1.085, 2.057, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_skirt",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_body_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.949, tx: 10.9, ty: -55.95},
						transform: [10.9, -55.95, 1, 0.949, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_body_x_f0",
						instancename: "",
						matrix: {a: 0.942, b: 0, c: 0.304, d: 1.006, tx: -4.65, ty: -58.15},
						transform: [-4.65, -58.15, 0.942, 1.051, 0.294, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_body_x_f0",
						instancename: "",
						matrix: {a: 0.94, b: 0, c: 0.282, d: 1.033, tx: -7.2, ty: -59.95},
						transform: [-7.2, -59.95, 0.94, 1.07, 0.266, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: -0.104, c: 0.042, d: 1.021, tx: -15.85, ty: -62.1},
						transform: [-15.85, -62.1, 1, 1.022, 0.041, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: -0.104, c: 0.122, d: 1.045, tx: -18.5, ty: -62.55},
						transform: [-18.5, -62.55, 0.999, 1.052, 0.116, -0.105, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.119, c: 0.205, d: 1.099, tx: -24.2, ty: -64.85},
						transform: [-24.2, -64.85, 0.986, 1.118, 0.184, -0.121, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.965, b: -0.13, c: 0.285, d: 1.144, tx: -29.2, ty: -66.9},
						transform: [-29.2, -66.9, 0.974, 1.179, 0.244, -0.133, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.965, b: -0.128, c: 0.285, d: 1.108, tx: -29.25, ty: -65.05},
						transform: [-29.25, -65.05, 0.974, 1.144, 0.251, -0.132, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.974, b: -0.005, c: -0.007, d: 1.174, tx: -15.45, ty: -66.2},
						transform: [-15.45, -66.2, 0.974, 1.174, -0.006, -0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.008, c: -0.033, d: 1.169, tx: -13.4, ty: -66},
						transform: [-13.4, -66, 0.979, 1.17, -0.028, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 1.09, b: -0.164, c: 0.371, d: 0.955, tx: -16.05, ty: -58.7},
						transform: [-16.05, -58.7, 1.103, 1.024, 0.371, -0.149, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_head_shoot",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 16, ty: -67.1},
						transform: [16, -67.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_head_shoot",
						instancename: "",
						matrix: {a: -0.848, b: 0.526, c: 0.526, d: 0.848, tx: 1.5, ty: -77.25},
						transform: [1.5, -77.25, 0.999, 0.999, 0.555, 2.586, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_head_shoot",
						instancename: "",
						matrix: {a: -0.89, b: 0.457, c: 0.457, d: 0.89, tx: -1.3, ty: -80.65},
						transform: [-1.3, -80.65, 1, 1, 0.475, 2.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_head_shoot_up",
						instancename: "",
						matrix: {a: -0.897, b: 0.442, c: 0.442, d: 0.897, tx: -1.5, ty: -70.6},
						transform: [-1.5, -70.6, 1, 1, 0.458, 2.684, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_head_shoot_up",
						instancename: "",
						matrix: {a: -0.897, b: 0.439, c: 0.439, d: 0.897, tx: -1.45, ty: -72.75},
						transform: [-1.45, -72.75, 0.999, 0.999, 0.455, 2.686, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_head_shoot_up",
						instancename: "",
						matrix: {a: -0.834, b: 0.549, c: 0.549, d: 0.834, tx: -12.7, ty: -72},
						transform: [-12.7, -72, 0.998, 0.998, 0.582, 2.559, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_head_shoot_up",
						instancename: "",
						matrix: {a: -0.766, b: 0.64, c: 0.64, d: 0.766, tx: -22.8, ty: -74.25},
						transform: [-22.8, -74.25, 0.998, 0.998, 0.696, 2.446, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_head_shoot_up",
						instancename: "",
						matrix: {a: -0.853, b: 0.522, c: 0.522, d: 0.853, tx: -24.95, ty: -66.85},
						transform: [-24.95, -66.85, 1, 1, 0.549, 2.593, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_head_shoot",
						instancename: "",
						matrix: {a: 0.989, b: 0.147, c: -0.147, d: 0.989, tx: -30.5, ty: -83.35},
						transform: [-30.5, -83.35, 1, 1, -0.147, 0.147, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_head_shoot",
						instancename: "",
						matrix: {a: 0.99, b: 0.139, c: -0.139, d: 0.99, tx: -26.4, ty: -82},
						transform: [-26.4, -82, 1, 1, -0.14, 0.14, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_head_shoot",
						instancename: "",
						matrix: {a: 0.998, b: -0.057, c: 0.057, d: 0.998, tx: -36.75, ty: -71.85},
						transform: [-36.75, -71.85, 1, 1, 0.057, -0.057, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.712, b: 0.702, c: 0.702, d: 0.712, tx: -3.6, ty: -58.9},
						transform: [-3.6, -58.9, 1, 1, 0.778, 2.364, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.439, b: 0.897, c: 0.897, d: 0.439, tx: -14.1, ty: -58.25},
						transform: [-14.1, -58.25, 0.999, 0.999, 1.116, 2.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: -0.232, b: 0.973, c: 0.973, d: 0.232, tx: -19.85, ty: -59},
						transform: [-19.85, -59, 1, 1, 1.337, 1.805, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
					},
					{
						from: 62,
						to: 89,
					},
					{
						from: 90,
						to: 116,
					},
					{
						from: 117,
						to: 119,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.638, b: 0.631, c: 0.692, d: -0.7, tx: -2.75, ty: -70.2},
						transform: [-2.75, -70.2, 0.897, 0.985, 2.362, 0.78, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.635, b: 0.621, c: 0.684, d: -0.699, tx: -2.5, ty: -70.2},
						transform: [-2.5, -70.2, 0.888, 0.978, 2.368, 0.774, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.616, b: 0.494, c: 0.569, d: -0.71, tx: 2.05, ty: -70.2},
						transform: [2.05, -70.2, 0.79, 0.91, 2.466, 0.676, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_arm_2_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.243, c: 0.266, d: -0.948, tx: -7.75, ty: -69.95},
						transform: [-7.75, -69.95, 0.897, 0.984, 2.868, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hosepipe_n_x",
				keys: [
					{
						from: 0,
						to: 13,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -45.25, ty: -25.95},
						transform: [-45.25, -25.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: 1.017, b: 0.203, c: -0.022, d: 0.994, tx: -48.6, ty: -21.15},
						transform: [-48.6, -21.15, 1.037, 0.994, -0.022, 0.197, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0.215, c: -0.075, d: 0.984, tx: -49.15, ty: -20.75},
						transform: [-49.15, -20.75, 1.118, 0.986, -0.077, 0.193, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: 1.093, b: 0.234, c: -0.093, d: 0.982, tx: -50, ty: -20},
						transform: [-50, -20, 1.118, 0.986, -0.094, 0.211, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_anais_hosepipe_nd_x_f0",
						instancename: "",
						matrix: {a: 1.035, b: 0.212, c: -0.031, d: 0.994, tx: -49.6, ty: -19.8},
						transform: [-49.6, -19.8, 1.057, 0.994, -0.031, 0.202, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_anais_hosepipe_nd_x_f0",
						instancename: "",
						matrix: {a: 1.095, b: 0.238, c: -0.044, d: 0.993, tx: -50.45, ty: -18.85},
						transform: [-50.45, -18.85, 1.12, 0.994, -0.044, 0.215, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 22,
						to: 25,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.685, b: 0.131, c: -0.044, d: 0.995, tx: -50.85, ty: -18.45},
						transform: [-50.85, -18.45, 0.698, 0.996, -0.045, 0.189, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 26,
						to: 31,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.728, b: 0.146, c: -0.084, d: 0.992, tx: -51.9, ty: -17.05},
						transform: [-51.9, -17.05, 0.743, 0.995, -0.084, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 32,
						to: 56,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.801, b: 0.181, c: -0.109, d: 0.994, tx: -52.7, ty: -15.2},
						transform: [-52.7, -15.2, 0.821, 1, -0.109, 0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 1.019, b: 0.166, c: -0.166, d: 1.021, tx: -48.05, ty: -11.35},
						transform: [-48.05, -11.35, 1.033, 1.035, -0.161, 0.161, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 1.027, b: 0.166, c: -0.119, d: 1.021, tx: -45.8, ty: -11.35},
						transform: [-45.8, -11.35, 1.04, 1.028, -0.116, 0.16, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.873, b: 0.126, c: -0.177, d: 1.091, tx: -51.75, ty: -20.8},
						transform: [-51.75, -20.8, 0.882, 1.105, -0.161, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.909, b: 0.121, c: -0.135, d: 1.055, tx: -50.35, ty: -22.85},
						transform: [-50.35, -22.85, 0.917, 1.063, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 1.055, b: 0.016, c: 0.066, d: 1.003, tx: -46.25, ty: -22.65},
						transform: [-46.25, -22.65, 1.055, 1.005, 0.066, 0.015, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 1.239, b: 0.221, c: -0.13, d: 0.952, tx: -51.75, ty: -21.3},
						transform: [-51.75, -21.3, 1.258, 0.961, -0.135, 0.177, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 1.223, b: 0.221, c: -0.128, d: 0.952, tx: -49.5, ty: -20.1},
						transform: [-49.5, -20.1, 1.243, 0.961, -0.134, 0.179, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.977, b: -0.212, c: -0.212, d: 0.977, tx: 25.5, ty: -18.95},
						transform: [25.5, -18.95, 1, 1, -0.213, -2.928, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: -0.009, c: -0.115, d: 0.934, tx: 30.6, ty: -21.6},
						transform: [30.6, -21.6, 0.992, 0.941, -0.122, -3.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.895, b: -0.099, c: -0.243, d: 0.908, tx: 40.2, ty: -22.85},
						transform: [40.2, -22.85, 0.9, 0.94, -0.262, -3.032, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.943, b: 0.31, c: 0.191, d: 0.922, tx: 47.1, ty: -44.85},
						transform: [47.1, -44.85, 0.992, 0.941, 0.205, 2.824, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "cone",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 36.6, ty: -40.25},
						transform: [36.6, -40.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: 22, ty: -88.6},
						transform: [22, -88.6, 0.997, 0.997, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: 16.7, ty: -84.8},
						transform: [16.7, -84.8, 0.999, 0.999, 1.029, -1.029, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: 28, ty: -103.75},
						transform: [28, -103.75, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: 29.15, ty: -112.7},
						transform: [29.15, -112.7, 0.995, 0.995, 1.081, -1.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: 0.001, b: -0.996, c: 0.996, d: 0.001, tx: 0.2, ty: -104.85},
						transform: [0.2, -104.85, 0.996, 0.996, 1.57, -1.57, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -17.6, ty: -99.25},
						transform: [-17.6, -99.25, 0.997, 0.997, 2.039, -2.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -21.55, ty: -99.25},
						transform: [-21.55, -99.25, 0.999, 0.999, 2.074, -2.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -14.85, ty: -87.2},
						transform: [-14.85, -87.2, 0.997, 0.997, 2.091, -2.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -15.05, ty: -85.65},
						transform: [-15.05, -85.65, 0.996, 0.996, 2.126, -2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -26.65, ty: -75.25},
						transform: [-26.65, -75.25, 0.997, 0.997, 2.617, -2.617, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_cone",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -35.55, ty: -54.85},
						transform: [-35.55, -54.85, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tube_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 38.6, ty: -39.25},
						transform: [38.6, -39.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: 15, ty: -78.6},
						transform: [15, -78.6, 0.997, 0.997, 0.994, -0.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: 14.1, ty: -80},
						transform: [14.1, -80, 0.999, 0.999, 1.029, -1.029, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: 28, ty: -102.2},
						transform: [28, -102.2, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: 28.05, ty: -106.75},
						transform: [28.05, -106.75, 0.995, 0.995, 1.081, -1.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: 0, b: -1, c: 1, d: 0, tx: 1.3, ty: -116.25},
						transform: [1.3, -116.25, 1, 1, 1.571, -1.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -17.2, ty: -99},
						transform: [-17.2, -99, 0.997, 0.997, 2.039, -2.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -18.55, ty: -97.65},
						transform: [-18.55, -97.65, 0.999, 0.999, 2.074, -2.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -13.25, ty: -87.8},
						transform: [-13.25, -87.8, 0.997, 0.997, 2.091, -2.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -14.05, ty: -86.65},
						transform: [-14.05, -86.65, 0.996, 0.996, 2.126, -2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -25.65, ty: -71.25},
						transform: [-25.65, -71.25, 0.997, 0.997, 2.617, -2.617, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_tube_anim",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -38.15, ty: -54.85},
						transform: [-38.15, -54.85, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_forearm",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.993, b: 0.117, c: 0.117, d: -0.993, tx: -14.8, ty: -45.7},
						transform: [-14.8, -45.7, 1, 1, 3.024, 0.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.772, b: -0.633, c: -0.633, d: -0.772, tx: -20.55, ty: -41.3},
						transform: [-20.55, -41.3, 0.998, 0.998, -2.455, -0.687, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.755, b: -0.656, c: -0.656, d: -0.755, tx: -20.8, ty: -41.1},
						transform: [-20.8, -41.1, 1, 1, -2.427, -0.715, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.814, b: -0.3, c: -0.153, d: -1.008, tx: -15.5, ty: -59.95},
						transform: [-15.5, -59.95, 0.868, 1.02, -2.991, -0.353, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.773, b: -0.391, c: -0.269, d: -0.983, tx: -15.05, ty: -62.3},
						transform: [-15.05, -62.3, 0.867, 1.019, -2.875, -0.469, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.699, b: -0.699, c: -0.561, d: -0.852, tx: -19.4, ty: -67.7},
						transform: [-19.4, -67.7, 0.989, 1.02, -2.559, -0.785, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.938, b: -0.066, c: 0.13, d: -1.011, tx: -20.8, ty: -60.3},
						transform: [-20.8, -60.3, 0.94, 1.019, 3.014, -0.071, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_anais_forearm2_x",
						instancename: "",
						matrix: {a: 0.937, b: -0.019, c: 0.185, d: -1.003, tx: -22, ty: -61.15},
						transform: [-22, -61.15, 0.937, 1.02, 2.959, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.106, c: 0.104, d: 0.984, tx: -40.05, ty: -76.6},
						transform: [-40.05, -76.6, 1, 0.99, 0.106, -0.106, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 135,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.96, b: -0.179, c: 0.181, d: 0.972, tx: -40.3, ty: -75.05},
						transform: [-40.3, -75.05, 0.977, 0.989, 0.184, -0.184, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 136,
						to: 149,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.594, b: -0.565, c: 0.681, d: 0.716, tx: -42.3, ty: -64.25},
						transform: [-42.3, -64.25, 0.819, 0.988, 0.76, -0.76, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: 0.264, b: -0.799, c: 0.939, d: 0.311, tx: -41.35, ty: -53.45},
						transform: [-41.35, -53.45, 0.841, 0.989, 1.251, -1.251, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.66, b: -0.479, c: 0.581, d: -0.802, tx: -43.95, ty: -41.1},
						transform: [-43.95, -41.1, 0.815, 0.99, 2.514, -2.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_hand",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.848, b: 0.53, c: 0.53, d: -0.848, tx: 0.7, ty: -43.25},
						transform: [0.7, -43.25, 1, 1, 2.583, 0.558, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.692, b: -0.72, c: -0.72, d: -0.692, tx: -7.15, ty: -49.95},
						transform: [-7.15, -49.95, 0.998, 0.998, -2.336, -0.805, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.657, b: -0.754, c: -0.754, d: -0.657, tx: -7.45, ty: -50.15},
						transform: [-7.45, -50.15, 1, 1, -2.287, -0.854, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.988, b: -0.153, c: -0.153, d: -0.988, tx: -3.55, ty: -64.3},
						transform: [-3.55, -64.3, 0.999, 0.999, -2.988, -0.154, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.987, b: -0.152, c: -0.152, d: -0.987, tx: -1.05, ty: -69.35},
						transform: [-1.05, -69.35, 0.999, 0.999, -2.989, -0.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.97, b: -0.241, c: -0.241, d: -0.97, tx: -8.9, ty: -77.65},
						transform: [-8.9, -77.65, 1, 1, -2.898, -0.244, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 1, b: -0.01, c: -0.01, d: -1, tx: -7.55, ty: -62.55},
						transform: [-7.55, -62.55, 1, 1, -3.132, -0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: 0.005, d: -1, tx: -7.45, ty: -61.5},
						transform: [-7.45, -61.5, 1, 1, 3.137, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.03, c: 0.029, d: 0.972, tx: -22.6, ty: -79.65},
						transform: [-22.6, -79.65, 1, 0.972, 0.03, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 135,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.995, b: -0.092, c: 0.089, d: 0.968, tx: -24.05, ty: -78.9},
						transform: [-24.05, -78.9, 1, 0.972, 0.092, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 136,
						to: 149,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.507, c: 0.493, d: 0.838, tx: -34.35, ty: -74.2},
						transform: [-34.35, -74.2, 1, 0.972, 0.532, -0.532, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 164,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.62, b: -0.785, c: 0.763, d: 0.603, tx: -39.3, ty: -66.05},
						transform: [-39.3, -66.05, 1, 0.972, 0.902, -0.902, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 165,
						to: 179,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.062, b: -0.876, c: 0.969, d: 0.069, tx: -48.55, ty: -55.55},
						transform: [-48.55, -55.55, 0.878, 0.972, 1.5, -1.5, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: -0.498, b: -0.867, c: 0.843, d: -0.485, tx: -53.95, ty: -44.7},
						transform: [-53.95, -44.7, 1, 0.972, 2.093, -2.093, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_hand",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.152, b: -0.988, c: 0.988, d: 0.152, tx: 50, ty: -30.8},
						transform: [50, -30.8, 1, 1, 1.418, -1.418, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.788, b: -0.613, c: 0.613, d: -0.788, tx: 25.75, ty: -74.7},
						transform: [25.75, -74.7, 0.998, 0.998, 2.48, -2.48, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.81, b: -0.586, c: 0.586, d: -0.81, tx: 24.8, ty: -76.25},
						transform: [24.8, -76.25, 1, 1, 2.516, -2.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.741, b: -0.669, c: 0.669, d: -0.741, tx: 28.9, ty: -84.9},
						transform: [28.9, -84.9, 0.998, 0.998, 2.407, -2.407, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.739, b: -0.668, c: 0.668, d: -0.739, tx: 31.4, ty: -89.9},
						transform: [31.4, -89.9, 0.997, 0.997, 2.407, -2.407, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.943, b: -0.332, c: 0.332, d: -0.943, tx: 12, ty: -93.6},
						transform: [12, -93.6, 1, 1, 2.803, -2.803, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.909, b: 0.41, c: -0.41, d: -0.909, tx: -0.8, ty: -90.9},
						transform: [-0.8, -90.9, 0.998, 0.998, -2.718, 2.718, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.885, b: 0.462, c: -0.462, d: -0.885, tx: -1.75, ty: -90.8},
						transform: [-1.75, -90.8, 0.999, 0.999, -2.661, 2.661, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.764, b: -0.645, c: -0.669, d: 0.793, tx: 14.2, ty: -55.95},
						transform: [14.2, -55.95, 1, 1.037, -0.701, -2.441, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.786, b: -0.616, c: -0.639, d: 0.815, tx: 13.85, ty: -56.1},
						transform: [13.85, -56.1, 0.998, 1.036, -0.665, -2.477, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: -0.912, b: 0.411, c: 0.426, d: 0.946, tx: 4.2, ty: -61.45},
						transform: [4.2, -61.45, 1, 1.037, 0.424, 2.718, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "absorb_point",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 71.1, ty: -39.4},
						transform: [71.1, -39.4, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 56,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 53.05, ty: -77.7},
						transform: [53.05, -77.7, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 58,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 32.5, ty: -105.5},
						transform: [32.5, -105.5, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 30.9, ty: -107.4},
						transform: [30.9, -107.4, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 44.7, ty: -130.3},
						transform: [44.7, -130.3, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 89,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 43.4, ty: -135.25},
						transform: [43.4, -135.25, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 116,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 1.5, ty: -149.05},
						transform: [1.5, -149.05, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 118,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -31.95, ty: -128.35},
						transform: [-31.95, -128.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -34.55, ty: -127.05},
						transform: [-34.55, -127.05, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -30.3, ty: -116.55},
						transform: [-30.3, -116.55, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -31.3, ty: -114.9},
						transform: [-31.3, -114.9, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 179,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -53.9, ty: -87.5},
						transform: [-53.9, -87.5, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 180,
						to: 180,
						classname: "_anais_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -70.25, ty: -54.9},
						transform: [-70.25, -54.9, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_anais_anais_flash": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {exec_flash: {from:4, to:4}, end: {from:14, to:14}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_hosepipev_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.108, c: -0.169, d: 0.913, tx: -46.5, ty: -20.95},
						transform: [-46.5, -20.95, 1.006, 0.929, -0.183, 0.108, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.6626700000000001], [0.666, 0.99567], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_hosepipev_x_f0",
						instancename: "",
						matrix: {a: 1.032, b: 0, c: 0.063, d: 1.032, tx: -37.35, ty: -16.25},
						transform: [-37.35, -16.25, 1.032, 1.034, 0.061, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_anais_hosepipev_x_f0",
						instancename: "",
						matrix: {a: 0.978, b: 0.084, c: -0.086, d: 1.032, tx: -42, ty: -16.55},
						transform: [-42, -16.55, 0.981, 1.036, -0.083, 0.086, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_ear",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.779, b: -0.73, c: -0.643, d: 0.686, tx: -38.2, ty: -79.45},
						transform: [-38.2, -79.45, 1.068, 0.94, -0.753, -2.388, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.895, b: -0.416, c: -0.41, d: 0.906, tx: -46.55, ty: -71.9},
						transform: [-46.55, -71.9, 0.987, 0.995, -0.424, -2.707, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0], [0.539, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 9,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.759, b: -0.693, c: -0.594, d: 0.759, tx: -38.5, ty: -75.35},
						transform: [-38.5, -75.35, 1.027, 0.964, -0.664, -2.402, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.34, 0.501], [0.675, 0.812], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 14,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.764, b: -0.646, c: -0.646, d: 0.764, tx: -36.1, ty: -73.55},
						transform: [-36.1, -73.55, 1, 1, -0.702, -2.44, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.153, b: -0.396, c: -0.203, d: 0.592, tx: -35.8, ty: -49.8},
						transform: [-35.8, -49.8, 1.219, 0.626, -0.331, -2.811, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.049, b: -0.09, c: -0.067, d: 0.781, tx: -31.1, ty: -43.3},
						transform: [-31.1, -43.3, 1.053, 0.784, -0.086, -3.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.021, b: -0.258, c: -0.192, d: 0.76, tx: -38.1, ty: -46.8},
						transform: [-38.1, -46.8, 1.053, 0.784, -0.247, -2.894, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.049, b: -0.083, c: -0.095, d: 1.048, tx: -9.85, ty: -56.25},
						transform: [-9.85, -56.25, 1.053, 1.053, -0.09, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.049, b: -0.083, c: -0.095, d: 1.048, tx: -9.85, ty: -52.25},
						transform: [-9.85, -52.25, 1.053, 1.053, -0.09, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.049, b: -0.083, c: -0.095, d: 1.048, tx: -9.85, ty: -57.75},
						transform: [-9.85, -57.75, 1.053, 1.053, -0.09, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_foot",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.125, d: 0.896, tx: 7.85, ty: -21.95},
						transform: [7.85, -21.95, 1, 0.905, -0.138, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.125, d: 1.047, tx: 7.85, ty: -25.55},
						transform: [7.85, -25.55, 1, 1.054, -0.119, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.125, d: 1, tx: 7.85, ty: -24.45},
						transform: [7.85, -24.45, 1, 1.008, -0.124, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_foreleg",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.016, d: 0.896, tx: -2.9, ty: -21.95},
						transform: [-2.9, -21.95, 1, 0.896, -0.018, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.016, d: 1.047, tx: -2.9, ty: -25.55},
						transform: [-2.9, -25.55, 1, 1.047, -0.016, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.016, d: 1, tx: -2.9, ty: -24.45},
						transform: [-2.9, -24.45, 1, 1, -0.016, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_forearm",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_arm_3_x",
						instancename: "",
						matrix: {a: 0.976, b: 0.258, c: -0.119, d: 0.993, tx: 13.3, ty: -51.9},
						transform: [13.3, -51.9, 1.01, 1, -0.119, 0.258, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_anais_arm_3_x",
						instancename: "",
						matrix: {a: 0.846, b: 0.552, c: -0.425, d: 0.905, tx: 11.35, ty: -62.1},
						transform: [11.35, -62.1, 1.01, 1, -0.439, 0.578, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_anais_arm_3_x",
						instancename: "",
						matrix: {a: 0.9, b: 0.129, c: -0.197, d: 0.98, tx: 13.05, ty: -58.9},
						transform: [13.05, -58.9, 0.909, 1, -0.198, 0.143, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_skirt",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.095, b: -0.058, c: 0.186, d: 0.946, tx: 0.15, ty: -50.45},
						transform: [0.15, -50.45, 1.097, 0.964, 0.194, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.906, b: -0.05, c: 0.237, d: 1.261, tx: -0.2, ty: -57.6},
						transform: [-0.2, -57.6, 0.908, 1.283, 0.185, -0.055, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.035, b: -0.054, c: 0.196, d: 1, tx: 0.25, ty: -56.55},
						transform: [0.25, -56.55, 1.036, 1.019, 0.194, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pollaroid_button",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_pollaroid_button_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.05, ty: -45.5},
						transform: [43.05, -45.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_pollaroid_button_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.05, ty: -45.5},
						transform: [43.05, -45.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_pollaroid_button_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 43.05, ty: -50.5},
						transform: [43.05, -50.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pollaroid",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_pollaroid_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 66.55, ty: -23.4},
						transform: [66.55, -23.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_pollaroid_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 66.55, ty: -23.4},
						transform: [66.55, -23.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_pollaroid_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 66.55, ty: -23.4},
						transform: [66.55, -23.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_head_mad_x_f2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1, ty: -68.1},
						transform: [1, -68.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_anais_head_mad_x_f2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1, ty: -77.6},
						transform: [1, -77.6, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_anais_anais_head_mad_x_f2",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 1, ty: -75.1},
						transform: [1, -75.1, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.91, b: -0.415, c: 0.415, d: 0.91, tx: 3.65, ty: -50.55},
						transform: [3.65, -50.55, 1, 1, 0.428, -0.428, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.868, b: -0.496, c: 0.496, d: 0.868, tx: 7.9, ty: -54.8},
						transform: [7.9, -54.8, 1, 1, 0.519, -0.519, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.173, 0.732], [0.607, 0.942], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.823, b: -0.566, c: 0.566, d: 0.823, tx: 1.9, ty: -56.45},
						transform: [1.9, -56.45, 0.998, 0.998, 0.603, -0.603, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.352, 0.824], [0.693, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.837, b: -0.547, c: 0.547, d: 0.837, tx: 1.3, ty: -56},
						transform: [1.3, -56, 1, 1, 0.579, -0.579, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_arm_4_x",
						instancename: "",
						matrix: {a: -0.741, b: 0.54, c: 0.801, d: 0.813, tx: -12.9, ty: -52.95},
						transform: [-12.9, -52.95, 0.917, 1.141, 0.778, 2.511, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 3,
						classname: "_anais_anais_arm_4_x",
						instancename: "",
						matrix: {a: -0.588, b: 0.721, c: 0.821, d: 0.687, tx: -10.7, ty: -54.65},
						transform: [-10.7, -54.65, 0.93, 1.07, 0.874, 2.255, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 14,
						classname: "_anais_anais_arm_4_x",
						instancename: "",
						matrix: {a: -0.712, b: 0.702, c: 0.702, d: 0.712, tx: -11.35, ty: -58.65},
						transform: [-11.35, -58.65, 1, 1, 0.778, 2.364, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_band",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1.183, b: 0.203, c: -0.146, d: 0.854, tx: -70.05, ty: -122.75},
						transform: [-70.05, -122.75, 1.2, 0.867, -0.17, 0.17, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.854, b: 0, c: 0, d: 1.074, tx: -70.2, ty: -131},
						transform: [-70.2, -131, 0.854, 1.074, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.169, 0.932], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -70.2, ty: -128.95},
						transform: [-70.2, -128.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_fx_flash_f0",
						instancename: "",
						matrix: {a: 1.248, b: 0, c: 0, d: 1.124, tx: 82.45, ty: -57.55},
						transform: [82.45, -57.55, 1.248, 1.124, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_fx_flash_f1",
						instancename: "",
						matrix: {a: 1.248, b: 0, c: 0, d: 1.124, tx: 82.45, ty: -57.55},
						transform: [82.45, -57.55, 1.248, 1.124, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_fx_flash_f2",
						instancename: "",
						matrix: {a: 1.248, b: 0, c: 0, d: 1.124, tx: 82.45, ty: -57.55},
						transform: [82.45, -57.55, 1.248, 1.124, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_fx_flash_f3",
						instancename: "",
						matrix: {a: 1.248, b: 0, c: 0, d: 1.124, tx: 82.45, ty: -57.55},
						transform: [82.45, -57.55, 1.248, 1.124, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 14,
					},
				]
			},
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_fx_flash_f0",
						instancename: "",
						matrix: {a: 0.061, b: 1.097, c: -0.866, d: 0.048, tx: 107.65, ty: -38.75},
						transform: [107.65, -38.75, 1.098, 0.868, -1.516, 1.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_fx_flash_f1",
						instancename: "",
						matrix: {a: 0.061, b: 1.097, c: -0.866, d: 0.048, tx: 107.65, ty: -38.75},
						transform: [107.65, -38.75, 1.098, 0.868, -1.516, 1.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_fx_flash_f2",
						instancename: "",
						matrix: {a: 0.061, b: 1.097, c: -0.866, d: 0.048, tx: 107.65, ty: -38.75},
						transform: [107.65, -38.75, 1.098, 0.868, -1.516, 1.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_fx_flash_f3",
						instancename: "",
						matrix: {a: 0.061, b: 1.097, c: -0.866, d: 0.048, tx: 107.65, ty: -38.75},
						transform: [107.65, -38.75, 1.098, 0.868, -1.516, 1.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 14,
					},
				]
			},
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_fx_flash_f0",
						instancename: "",
						matrix: {a: -0.829, b: -0.627, c: -0.642, d: 0.849, tx: 98.5, ty: -52.9},
						transform: [98.5, -52.9, 1.04, 1.065, -0.647, -2.494, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_fx_flash_f1",
						instancename: "",
						matrix: {a: -0.829, b: -0.627, c: -0.642, d: 0.849, tx: 98.5, ty: -52.9},
						transform: [98.5, -52.9, 1.04, 1.065, -0.647, -2.494, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_fx_flash_f2",
						instancename: "",
						matrix: {a: -0.829, b: -0.627, c: -0.642, d: 0.849, tx: 98.5, ty: -52.9},
						transform: [98.5, -52.9, 1.04, 1.065, -0.647, -2.494, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_fx_flash_f3",
						instancename: "",
						matrix: {a: -0.829, b: -0.627, c: -0.642, d: 0.849, tx: 98.5, ty: -52.9},
						transform: [98.5, -52.9, 1.04, 1.065, -0.647, -2.494, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 14,
					},
				]
			},
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_fx_flash_f0",
						instancename: "",
						matrix: {a: -0.713, b: 0.394, c: 0.45, d: 0.816, tx: 62.05, ty: -53.5},
						transform: [62.05, -53.5, 0.815, 0.932, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_fx_flash_f1",
						instancename: "",
						matrix: {a: -0.713, b: 0.394, c: 0.45, d: 0.816, tx: 62.05, ty: -53.5},
						transform: [62.05, -53.5, 0.815, 0.932, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_fx_flash_f2",
						instancename: "",
						matrix: {a: -0.713, b: 0.394, c: 0.45, d: 0.816, tx: 62.05, ty: -53.5},
						transform: [62.05, -53.5, 0.815, 0.932, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_fx_flash_f3",
						instancename: "",
						matrix: {a: -0.713, b: 0.394, c: 0.45, d: 0.816, tx: 62.05, ty: -53.5},
						transform: [62.05, -53.5, 0.815, 0.932, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 14,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 13,
					},
					{
						from: 14,
						to: 14,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "Layer 9",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 4,
					},
					{
						from: 5,
						to: 13,
					},
					{
						from: 14,
						to: 14,
					},
				]
			},
		]
	},
	"_anais_anais_run": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "anais_ear",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.241, b: -0.982, c: -1.157, d: 0.394, tx: -63.1, ty: -98.5},
						transform: [-63.1, -98.5, 1.011, 1.223, -1.243, -1.812, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.443, b: -0.897, c: -1.129, d: 0.558, tx: -66.1, ty: -95},
						transform: [-66.1, -95, 1, 1.259, -1.112, -2.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.566, b: -0.814, c: -1.115, d: 0.728, tx: -55.45, ty: -102.1},
						transform: [-55.45, -102.1, 0.991, 1.331, -0.992, -2.178, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.43956], [0.666, 0.77256], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.528, b: -0.849, c: -1.222, d: 0.74, tx: -47.25, ty: -110.1},
						transform: [-47.25, -110.1, 0.999, 1.428, -1.026, -2.127, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.379, b: -0.925, c: -1.186, d: 0.594, tx: -45.2, ty: -115.25},
						transform: [-45.2, -115.25, 1, 1.327, -1.106, -1.96, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.06, b: -1.029, c: -1.202, d: 0.375, tx: -45.5, ty: -113},
						transform: [-45.5, -113, 1.03, 1.259, -1.269, -1.629, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.224, b: -1.014, c: -1.147, d: 0.063, tx: -50.95, ty: -113.8},
						transform: [-50.95, -113.8, 1.038, 1.148, -1.516, -1.354, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.224, b: -1.014, c: -1.147, d: 0.063, tx: -56.45, ty: -106.3},
						transform: [-56.45, -106.3, 1.038, 1.148, -1.516, -1.354, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.20979000000000003], [0.666, 0.54279], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.05, b: -1.021, c: -1.164, d: 0.253, tx: -60.35, ty: -101.75},
						transform: [-60.35, -101.75, 1.022, 1.191, -1.357, -1.619, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.028, b: -0.226, c: -0.226, d: 1.028, tx: -58.6, ty: -48.05},
						transform: [-58.6, -48.05, 1.053, 1.053, -0.216, -2.925, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 7,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.028, b: -0.226, c: -0.226, d: 1.028, tx: -61.6, ty: -50.55},
						transform: [-61.6, -50.55, 1.053, 1.053, -0.216, -2.925, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.014], [0.447, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 10,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -1.228, b: -0.064, c: -0.226, d: 1.028, tx: -48.4, ty: -69.85},
						transform: [-48.4, -69.85, 1.23, 1.053, -0.216, -3.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.13653], [0.666, 0.46953], [1, 1]],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.911, b: -0.598, c: -0.332, d: 0.999, tx: -50.4, ty: -73.25},
						transform: [-50.4, -73.25, 1.089, 1.053, -0.32, -2.561, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.989, b: -0.362, c: -0.362, d: 0.989, tx: -55.6, ty: -53.55},
						transform: [-55.6, -53.55, 1.053, 1.053, -0.351, -2.791, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.978, b: -0.156, c: -0.268, d: 1.087, tx: -33.35, ty: -61.8},
						transform: [-33.35, -61.8, 0.991, 1.12, -0.242, -2.983, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.984, b: -0.154, c: -0.263, d: 1.084, tx: -36.05, ty: -61.3},
						transform: [-36.05, -61.3, 0.997, 1.116, -0.238, -2.986, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.016, b: -0.106, c: -0.273, d: 1.062, tx: -30.05, ty: -66.3},
						transform: [-30.05, -66.3, 1.022, 1.096, -0.252, -3.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.43956], [0.666, 0.77256], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -1.005, b: -0.214, c: -0.419, d: 1.013, tx: -24.55, ty: -74.8},
						transform: [-24.55, -74.8, 1.028, 1.096, -0.392, -2.932, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 10,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.945, b: -0.361, c: -0.427, d: 1.01, tx: -23.05, ty: -81.3},
						transform: [-23.05, -81.3, 1.011, 1.096, -0.4, -2.777, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.878, 0.041], [0.963, 0.524], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.332, c: -0.396, d: 1.022, tx: -23.05, ty: -79.3},
						transform: [-23.05, -79.3, 1.011, 1.096, -0.37, -2.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.894, b: -0.473, c: -0.547, d: 0.95, tx: -24.55, ty: -71.8},
						transform: [-24.55, -71.8, 1.011, 1.096, -0.522, -2.655, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.251, c: -0.379, d: 1.061, tx: -27.75, ty: -64.3},
						transform: [-27.75, -64.3, 0.987, 1.127, -0.343, -2.885, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_foreleg",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_anais_run_leg_10_x_f0",
						instancename: "",
						matrix: {a: 0.995, b: 0.104, c: -0.104, d: 0.995, tx: -8.3, ty: -45.75},
						transform: [-8.3, -45.75, 1, 1, -0.104, 0.104, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_anais_run_leg_10_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.8, ty: -46.25},
						transform: [-2.8, -46.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_anais_run_leg_6_x_f0",
						instancename: "",
						matrix: {a: 0.343, b: -0.939, c: 0.939, d: 0.343, tx: -14.05, ty: -52.65},
						transform: [-14.05, -52.65, 1, 1, 1.22, -1.22, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_anais_anais_run_leg_6_x_f0",
						instancename: "",
						matrix: {a: 0.222, b: -0.975, c: 0.975, d: 0.222, tx: -12.85, ty: -54.3},
						transform: [-12.85, -54.3, 1, 1, 1.347, -1.347, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.878, 0.041], [0.963, 0.524], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_anais_anais_run_leg_6_x_f0",
						instancename: "",
						matrix: {a: 0.315, b: -0.949, c: 0.949, d: 0.315, tx: -10.15, ty: -54.85},
						transform: [-10.15, -54.85, 1, 1, 1.251, -1.251, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.878, 0.041], [0.963, 0.524], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_anais_run_leg_11_x_f0",
						instancename: "",
						matrix: {a: 0.771, b: 0.637, c: -0.637, d: 0.771, tx: 0.7, ty: -47.4},
						transform: [0.7, -47.4, 1, 1, -0.691, 0.691, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_run_leg_1_x_f0",
						instancename: "",
						matrix: {a: 0.997, b: 0.073, c: -0.006, d: 1.194, tx: -1.25, ty: -35.5},
						transform: [-1.25, -35.5, 1, 1.194, -0.005, 0.073, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_anais_run_leg_9_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.053, c: 0.053, d: 0.999, tx: -24.5, ty: -40.15},
						transform: [-24.5, -40.15, 1, 1, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
					},
				]
			},
			{
				name: "anais_foot",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_run_leg_2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -21.75, ty: -32.75},
						transform: [-21.75, -32.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_anais_run_leg_3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -18, ty: -35},
						transform: [-18, -35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_anais_run_leg_3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -23, ty: -35},
						transform: [-23, -35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_anais_run_leg_4_x_f0",
						instancename: "",
						matrix: {a: 0.904, b: 0.427, c: -0.427, d: 0.904, tx: -26.35, ty: -43.4},
						transform: [-26.35, -43.4, 1, 1, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_anais_run_leg_4_x_f0",
						instancename: "",
						matrix: {a: 0.797, b: 0.546, c: -0.596, d: 0.87, tx: -25.55, ty: -42.85},
						transform: [-25.55, -42.85, 0.966, 1.055, -0.601, 0.601, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -21.85, ty: -40.85},
						transform: [-21.85, -40.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.973, b: 0.229, c: -0.03, d: 1.02, tx: -21.85, ty: -42.35},
						transform: [-21.85, -42.35, 1, 1.021, -0.03, 0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.501, 0.068], [0.808, 0.446], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_anais_run_leg_9_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.042, c: 0.042, d: 0.999, tx: -25.15, ty: -48.2},
						transform: [-25.15, -48.2, 1, 1, 0.042, -0.042, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_run_leg_9_x_f0",
						instancename: "",
						matrix: {a: 0.971, b: -0.24, c: 0.24, d: 0.971, tx: -21.05, ty: -46.7},
						transform: [-21.05, -46.7, 1, 1, 0.242, -0.242, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_anais_run_leg_1_x_f0",
						instancename: "",
						matrix: {a: 0.967, b: 0.271, c: -0.181, d: 0.983, tx: -4.15, ty: -29.9},
						transform: [-4.15, -29.9, 1.004, 1, -0.182, 0.273, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_run_leg_2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -16.75, ty: -32.75},
						transform: [-16.75, -32.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_skirt",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_body_side_x_f0",
						instancename: "",
						matrix: {a: 1.045, b: 0.065, c: 0.127, d: 1.193, tx: -13.4, ty: -51.5},
						transform: [-13.4, -51.5, 1.047, 1.2, 0.106, 0.062, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_anais_body_side_x_f0",
						instancename: "",
						matrix: {a: 1.085, b: -0.019, c: 0.211, d: 1.205, tx: -13.75, ty: -57.3},
						transform: [-13.75, -57.3, 1.085, 1.224, 0.174, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_body_side2_x_f0",
						instancename: "",
						matrix: {a: 1.145, b: 0.012, c: -0.003, d: 1.145, tx: -5.35, ty: -64.2},
						transform: [-5.35, -64.2, 1.145, 1.145, -0.003, 0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.46620000000000006], [0.666, 0.7992], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_body_side2_x_f0",
						instancename: "",
						matrix: {a: 1.145, b: 0.029, c: -0.003, d: 1.145, tx: -0.4, ty: -69.75},
						transform: [-0.4, -69.75, 1.145, 1.145, -0.003, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_anais_body_side2_x_f0",
						instancename: "",
						matrix: {a: 1.145, b: 0.012, c: -0.051, d: 1.144, tx: 2.25, ty: -74.6},
						transform: [2.25, -74.6, 1.145, 1.145, -0.045, 0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.878, 0.041], [0.963, 0.524], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_body_side2_x_f0",
						instancename: "",
						matrix: {a: 1.147, b: 0.074, c: 0.033, d: 1.088, tx: -2.2, ty: -68.55},
						transform: [-2.2, -68.55, 1.149, 1.089, 0.03, 0.064, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_body_side2_x_f0",
						instancename: "",
						matrix: {a: 1.116, b: 0.285, c: -0.147, d: 1.079, tx: -2.5, ty: -64.8},
						transform: [-2.5, -64.8, 1.152, 1.089, -0.135, 0.25, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_body_side_x_f0",
						instancename: "",
						matrix: {a: 1.085, b: 0.173, c: 0.013, d: 1.2, tx: -5.7, ty: -60.55},
						transform: [-5.7, -60.55, 1.098, 1.2, 0.011, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_body_side_x_f0",
						instancename: "",
						matrix: {a: 1.114, b: 0.178, c: 0.013, d: 1.231, tx: -11.2, ty: -55.3},
						transform: [-11.2, -55.3, 1.128, 1.232, 0.011, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_hosepipe_s_x_f0",
						instancename: "",
						matrix: {a: 0.793, b: 0.366, c: -0.502, d: 0.961, tx: -0.55, ty: -37.4},
						transform: [-0.55, -37.4, 0.873, 1.084, -0.481, 0.432, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 4,
						classname: "_anais_hosepipe_s_x_f0",
						instancename: "",
						matrix: {a: 0.673, b: 0.421, c: -0.77, d: 0.951, tx: -2.3, ty: -38.2},
						transform: [-2.3, -38.2, 0.793, 1.224, -0.681, 0.559, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.358, 0.1], [0.8, 0.658], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_hosepipe_s_x_f0",
						instancename: "",
						matrix: {a: 0.667, b: 0.348, c: -0.699, d: 1.077, tx: 3.5, ty: -50.6},
						transform: [3.5, -50.6, 0.753, 1.284, -0.576, 0.48, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.065], [0.602, 0.849], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_anais_hosepipe_s_x_f0",
						instancename: "",
						matrix: {a: 0.951, b: 0.134, c: -0.309, d: 1.034, tx: 11.65, ty: -62.9},
						transform: [11.65, -62.9, 0.961, 1.079, -0.29, 0.14, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.878, 0.041], [0.963, 0.524], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_hosepipe_s_x_f0",
						instancename: "",
						matrix: {a: 0.996, b: 0.088, c: -0.052, d: 0.934, tx: 7.1, ty: -53.3},
						transform: [7.1, -53.3, 1, 0.935, -0.055, 0.088, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_hosepipe_s_x_f0",
						instancename: "",
						matrix: {a: 0.976, b: 0.076, c: 0.043, d: 0.999, tx: 4.65, ty: -44.75},
						transform: [4.65, -44.75, 0.978, 1, 0.043, 0.077, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tube_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.925, b: 0.379, c: -0.379, d: -0.925, tx: -82.4, ty: -20.2},
						transform: [-82.4, -20.2, 1, 1, -2.753, 2.753, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.915, b: 0.403, c: -0.403, d: -0.915, tx: -82.9, ty: -20.95},
						transform: [-82.9, -20.95, 1, 1, -2.727, 2.727, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.358, 0.1], [0.8, 0.658], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.849, b: 0.528, c: -0.528, d: -0.849, tx: -72.3, ty: -23.85},
						transform: [-72.3, -23.85, 1, 1, -2.586, 2.586, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.4], [0.689, 0.932], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.813, b: 0.582, c: -0.582, d: -0.813, tx: -66.1, ty: -26.3},
						transform: [-66.1, -26.3, 1, 1, -2.52, 2.52, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.878, 0.041], [0.963, 0.524], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.868, b: 0.496, c: -0.496, d: -0.868, tx: -78.35, ty: -23.35},
						transform: [-78.35, -23.35, 1, 1, -2.622, 2.622, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.917, b: 0.399, c: -0.399, d: -0.917, tx: -82.8, ty: -20.85},
						transform: [-82.8, -20.85, 1, 1, -2.732, 2.732, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_forearm",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.378, b: 0.929, c: 0.883, d: 0.466, tx: -2.85, ty: -49.45},
						transform: [-2.85, -49.45, 1.003, 0.998, 1.085, 1.957, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.356, b: 0.94, c: 0.896, d: 0.443, tx: -4.1, ty: -51},
						transform: [-4.1, -51, 1.005, 1, 1.112, 1.933, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.358, 0.1], [0.8, 0.658], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.368, b: 0.901, c: 0.936, d: 0.426, tx: 8.4, ty: -64.7},
						transform: [8.4, -64.7, 0.973, 1.028, 1.144, 1.958, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.4], [0.689, 0.932], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.444, b: 0.919, c: 0.9, d: 0.391, tx: 16.45, ty: -75.35},
						transform: [16.45, -75.35, 1.02, 0.981, 1.161, 2.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.878, 0.041], [0.963, 0.524], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.477, b: 0.879, c: 0.879, d: 0.477, tx: 5.75, ty: -56.5},
						transform: [5.75, -56.5, 1, 1, 1.074, 2.068, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.509, b: 0.866, c: 0.809, d: 0.588, tx: 1.9, ty: -48.5},
						transform: [1.9, -48.5, 1.005, 1, 0.942, 2.102, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_arm_5_x",
						instancename: "",
						matrix: {a: -0.987, b: 0.161, c: 0.161, d: 0.987, tx: -17.1, ty: -58.75},
						transform: [-17.1, -58.75, 1, 1, 0.162, 2.98, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 4,
						classname: "_anais_anais_arm_5_x",
						instancename: "",
						matrix: {a: -0.989, b: 0.15, c: 0.15, d: 0.989, tx: -21.85, ty: -59.2},
						transform: [-21.85, -59.2, 1, 1, 0.151, 2.991, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.358, 0.1], [0.8, 0.658], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_anais_arm_5_x",
						instancename: "",
						matrix: {a: -0.981, b: 0.141, c: 0.225, d: 0.987, tx: -7.15, ty: -71},
						transform: [-7.15, -71, 0.991, 1.012, 0.225, 2.999, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.191, 0.4], [0.689, 0.932], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 11,
						classname: "_anais_anais_arm_5_x",
						instancename: "",
						matrix: {a: -0.983, b: 0.206, c: 0.207, d: 0.973, tx: -0.45, ty: -79.35},
						transform: [-0.45, -79.35, 1.005, 0.995, 0.209, 2.935, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.878, 0.041], [0.963, 0.524], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_anais_arm_5_x",
						instancename: "",
						matrix: {a: -1, b: 0.025, c: 0.117, d: 0.997, tx: -8.65, ty: -65.8},
						transform: [-8.65, -65.8, 1, 1.004, 0.117, 3.117, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_arm_5_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.033, c: 0.033, d: 0.999, tx: -15.85, ty: -56.7},
						transform: [-15.85, -56.7, 1, 1, 0.033, 3.108, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_head_mad_x_f3",
						instancename: "",
						matrix: {a: -0.98, b: -0.196, c: -0.196, d: 0.98, tx: 3, ty: -63.3},
						transform: [3, -63.3, 0.999, 0.999, -0.197, -2.944, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 7,
						classname: "_anais_anais_head_mad_x_f3",
						instancename: "",
						matrix: {a: -0.98, b: -0.199, c: -0.199, d: 0.98, tx: -1.1, ty: -64.6},
						transform: [-1.1, -64.6, 1, 1, -0.2, -2.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.144, 0], [0.184, 0.212], [0.407, 0.466], [0.591, 0.675], [0.887, 0.969], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_anais_anais_head_mad_x_f3",
						instancename: "",
						matrix: {a: -0.98, b: -0.199, c: -0.199, d: 0.98, tx: 18, ty: -85.1},
						transform: [18, -85.1, 1, 1, -0.2, -2.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.371, 0], [0.704, 0.369], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_anais_anais_head_mad_x_f3",
						instancename: "",
						matrix: {a: -0.98, b: -0.196, c: -0.196, d: 0.98, tx: 16.4, ty: -83.45},
						transform: [16.4, -83.45, 0.999, 0.999, -0.197, -2.944, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.321, 0.134], [0.744, 0.555], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_head_mad_x_f3",
						instancename: "",
						matrix: {a: -0.98, b: -0.199, c: -0.199, d: 0.98, tx: 6, ty: -66.1},
						transform: [6, -66.1, 1, 1, -0.2, -2.941, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_band",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.405, b: 0.913, c: -0.913, d: 0.405, tx: -57.2, ty: -137.2},
						transform: [-57.2, -137.2, 0.998, 0.998, -1.153, 1.153, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.596, b: 0.803, c: -0.803, d: 0.596, tx: -61.3, ty: -134.95},
						transform: [-61.3, -134.95, 1, 1, -0.933, 0.933, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.409, 0], [0.698, 0.374], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 7,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.698, b: 0.714, c: -0.714, d: 0.698, tx: -59.55, ty: -137},
						transform: [-59.55, -137, 0.998, 0.998, -0.797, 0.797, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.074, 0.094], [0.153, 0.245], [0.308, 0.411], [0.522, 0.642], [0.868, 0.966], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.596, b: 0.803, c: -0.803, d: 0.596, tx: -42.2, ty: -156.95},
						transform: [-42.2, -156.95, 1, 1, -0.932, 0.932, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.425, 0.339], [0.98, 0.952], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.416, b: 0.909, c: -0.909, d: 0.416, tx: -44.45, ty: -156.75},
						transform: [-44.45, -156.75, 1, 1, -1.142, 1.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.321, 0.134], [0.744, 0.555], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.117, b: 0.993, c: -0.993, d: 0.117, tx: -54.2, ty: -141.45},
						transform: [-54.2, -141.45, 1, 1, -1.453, 1.453, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 11,
					},
					{
						from: 12,
						to: 12,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 13,
						to: 13,
					},
				]
			},
		]
	},
	"_anais_anais_hit": {
		type: "movieclip",
		fps: 30,
		totalFrames: 17,
		labels: {end: {from:16, to:16}, },
		layers: [
			{
				name: "ear_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.9, b: -0.483, c: 0.736, d: 0.872, tx: 36.35, ty: -78.15},
						transform: [36.35, -78.15, 1.022, 1.141, 0.701, -0.493, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.503, b: -0.846, c: 0.925, d: 0.57, tx: 16.7, ty: -99.6},
						transform: [16.7, -99.6, 0.985, 1.086, 1.019, -1.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.525, b: 0.833, c: -0.928, d: 0.565, tx: -39.25, ty: -87.7},
						transform: [-39.25, -87.7, 0.985, 1.086, -1.024, 1.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.416, b: 0.892, c: -0.991, d: 0.444, tx: -35.8, ty: -107.2},
						transform: [-35.8, -107.2, 0.985, 1.086, -1.15, 1.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 12,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.406, b: -0.87, c: -0.991, d: 0.444, tx: -10.55, ty: -76.25},
						transform: [-10.55, -76.25, 0.961, 1.086, -1.15, -2.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.943, b: 0.184, c: 0.176, d: 0.982, tx: 38.3, ty: -82.4},
						transform: [38.3, -82.4, 0.961, 0.998, 0.177, 2.948, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.579, b: 0.766, c: 0.856, d: 0.668, tx: 41.25, ty: -97.6},
						transform: [41.25, -97.6, 0.961, 1.086, 0.908, 2.218, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 0.934, b: -0.358, c: 0.358, d: 0.934, tx: 27.65, ty: -69.9},
						transform: [27.65, -69.9, 1, 1, 0.366, -0.366, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 0.813, b: -0.555, c: 0.562, d: 0.847, tx: 11.65, ty: -87.5},
						transform: [11.65, -87.5, 0.984, 1.016, 0.586, -0.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 0.911, b: 0.37, c: -0.395, d: 0.937, tx: 30.6, ty: -54.5},
						transform: [30.6, -54.5, 0.984, 1.016, -0.399, 0.386, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 0.69, b: 0.798, c: -0.709, d: 0.538, tx: 42, ty: -46.1},
						transform: [42, -46.1, 1.055, 0.89, -0.922, 0.858, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 0.957, b: 0.139, c: -0.094, d: 0.789, tx: 43.8, ty: -60.6},
						transform: [43.8, -60.6, 0.967, 0.794, -0.118, 0.145, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 0.955, b: -0.153, c: 0.167, d: 0.893, tx: 43.25, ty: -69},
						transform: [43.25, -69, 0.967, 0.909, 0.185, -0.159, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: 1.121, b: 0.547, c: -0.064, d: 0.911, tx: 39.9, ty: -43.7},
						transform: [39.9, -43.7, 1.247, 0.913, -0.07, 0.454, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: 1.118, b: 0.388, c: -0.174, d: 1.038, tx: 25.4, ty: -43.95},
						transform: [25.4, -43.95, 1.183, 1.052, -0.166, 0.334, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: 0.791, b: 0.69, c: -0.855, d: 0.518, tx: 16.4, ty: -35.6},
						transform: [16.4, -35.6, 1.05, 1, -1.026, 0.717, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.248, 0.449], [0.597, 0.77], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: 0.701, b: 0.537, c: -0.863, d: 0.765, tx: 16.35, ty: -23.9},
						transform: [16.35, -23.9, 0.883, 1.154, -0.846, 0.654, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.309, 0.46], [0.649, 0.779], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: 0.273, b: 0.897, c: -1.167, d: 0.06, tx: 6.1, ty: -21.25},
						transform: [6.1, -21.25, 0.937, 1.169, -1.519, 1.276, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.338, 0.874], [0.697, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: -0.072, b: 0.896, c: -1.02, d: -0.03, tx: -0.5, ty: -21.3},
						transform: [-0.5, -21.3, 0.898, 1.021, -1.6, 1.651, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.371, 0.087], [0.702, 0.412], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: -0.167, b: 0.9, c: -0.847, d: 0, tx: 1, ty: -21.2},
						transform: [1, -21.2, 0.915, 0.847, -1.571, 1.754, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.582, 0.081], [0.78, 0.374], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: 0.605, b: 0.56, c: -0.297, d: 1.056, tx: 35.65, ty: -19.8},
						transform: [35.65, -19.8, 0.824, 1.097, -0.274, 0.747, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.667], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_hosepipe_u_x_f0",
						instancename: "",
						matrix: {a: 0.765, b: 0.239, c: -0.055, d: 1.075, tx: 49.6, ty: -43.2},
						transform: [49.6, -43.2, 0.801, 1.077, -0.051, 0.303, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.025, b: -0.534, c: 0.575, d: 0.816, tx: -2.55, ty: -61.35},
						transform: [-2.55, -61.35, 1.156, 0.998, 0.613, -0.481, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.918, b: -0.671, c: 0.707, d: 0.729, tx: -9.6, ty: -65.65},
						transform: [-9.6, -65.65, 1.137, 1.016, 0.77, -0.631, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.084, b: 0.303, c: -0.259, d: 0.982, tx: -0.25, ty: -56.15},
						transform: [-0.25, -56.15, 1.126, 1.016, -0.258, 0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.421], [0.833, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.021, b: 0.435, c: -0.434, d: 0.935, tx: 10.3, ty: -57.65},
						transform: [10.3, -57.65, 1.11, 1.031, -0.435, 0.403, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.11, b: 0.012, c: -0.044, d: 1.03, tx: 17.65, ty: -56},
						transform: [17.65, -56, 1.11, 1.031, -0.043, 0.011, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.091, b: -0.203, c: 0.156, d: 1.019, tx: 16.25, ty: -60.1},
						transform: [16.25, -60.1, 1.11, 1.031, 0.152, -0.184, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm_9_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_anais_arm_9_x",
						instancename: "",
						matrix: {a: 0.883, b: 0.47, c: 0.462, d: -0.867, tx: -20.05, ty: -51.85},
						transform: [-20.05, -51.85, 1, 0.983, 2.652, 0.49, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_anais_arm_9_x",
						instancename: "",
						matrix: {a: 0.804, b: 0.623, c: 0.586, d: -0.768, tx: -27, ty: -56},
						transform: [-27, -56, 1.017, 0.966, 2.49, 0.66, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_anais_arm_9_x",
						instancename: "",
						matrix: {a: -0.181, b: -0.96, c: 0.948, d: -0.187, tx: -17.9, ty: -56.05},
						transform: [-17.9, -56.05, 0.976, 0.966, 1.765, -1.757, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_anais_arm_9_x",
						instancename: "",
						matrix: {a: 0.111, b: -0.97, c: 0.961, d: 0.102, tx: -3.9, ty: -61.35},
						transform: [-3.9, -61.35, 0.976, 0.966, 1.465, -1.456, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_anais_arm_9_x",
						instancename: "",
						matrix: {a: 0.516, b: 0.853, c: 0.822, d: -0.507, tx: -12.1, ty: -50.85},
						transform: [-12.1, -50.85, 0.997, 0.966, 2.123, 1.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_anais_arm_9_x",
						instancename: "",
						matrix: {a: 0.749, b: 0.658, c: 0.632, d: -0.731, tx: -12.25, ty: -51},
						transform: [-12.25, -51, 0.997, 0.966, 2.429, 0.721, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tube_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.923, b: 0.278, c: -0.278, d: -0.923, tx: -28.3, ty: -18.6},
						transform: [-28.3, -18.6, 0.964, 0.964, -2.849, 2.849, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.959, b: 0.101, c: -0.101, d: -0.959, tx: -54.5, ty: -25.8},
						transform: [-54.5, -25.8, 0.964, 0.964, -3.036, 3.036, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.85, b: -0.455, c: 0.455, d: -0.85, tx: -51.35, ty: -57.75},
						transform: [-51.35, -57.75, 0.964, 0.964, 2.65, -2.65, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.336, b: -0.904, c: 0.904, d: -0.336, tx: -33.55, ty: -80.05},
						transform: [-33.55, -80.05, 0.964, 0.964, 1.927, -1.927, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.906, b: -0.329, c: 0.329, d: -0.906, tx: -31.85, ty: -33.1},
						transform: [-31.85, -33.1, 0.964, 0.964, 2.794, -2.794, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.956, b: 0.128, c: -0.128, d: -0.956, tx: -21.75, ty: -22.15},
						transform: [-21.75, -22.15, 0.964, 0.964, -3.008, 3.008, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.257, d: 1.089, tx: -9.4, ty: -26.6},
						transform: [-9.4, -26.6, 1, 1.119, 0.232, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.327, d: 1.178, tx: -11.05, ty: -28.7},
						transform: [-11.05, -28.7, 1, 1.223, 0.271, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -1.234, b: -0.453, c: -0.543, d: 0.822, tx: -26.55, ty: -32},
						transform: [-26.55, -32, 1.315, 0.985, -0.583, -2.79, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -1.055, b: -0.724, c: -0.617, d: 0.861, tx: -19.9, ty: -34.45},
						transform: [-19.9, -34.45, 1.28, 1.059, -0.622, -2.54, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_anais_run_leg_9_x_f0",
						instancename: "",
						matrix: {a: 0.242, b: -1.05, c: -0.997, d: -0.078, tx: -8.3, ty: -35.7},
						transform: [-8.3, -35.7, 1.077, 1, -1.649, -1.344, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_anais_anais_run_leg_9_x_f0",
						instancename: "",
						matrix: {a: 0.076, b: -0.969, c: -0.997, d: -0.078, tx: -12.5, ty: -33.6},
						transform: [-12.5, -33.6, 0.972, 1, -1.649, -1.492, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: -1.021, b: 0, c: 0.112, d: 1.324, tx: -10.1, ty: -32.2},
						transform: [-10.1, -32.2, 1.021, 1.329, 0.084, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: -1.021, b: 0, c: -0.121, d: 1.178, tx: -4.55, ty: -28.7},
						transform: [-4.55, -28.7, 1.021, 1.184, -0.103, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: -1.06, b: 0, c: -0.269, d: 1.309, tx: 3, ty: -31.8},
						transform: [3, -31.8, 1.06, 1.337, -0.203, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.846, b: -0.534, c: 0.666, d: 0.762, tx: 20.1, ty: -34},
						transform: [20.1, -34, 1, 1.012, 0.718, -0.563, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.737, b: -0.65, c: 0.782, d: 0.666, tx: 18.4, ty: -43.05},
						transform: [18.4, -43.05, 0.983, 1.027, 0.865, -0.723, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1.126, b: 0, c: -0.057, d: 1.178, tx: 4, ty: -28.7},
						transform: [4, -28.7, 1.126, 1.18, -0.048, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1.126, b: 0, c: -0.408, d: 1.035, tx: 14.35, ty: -25.3},
						transform: [14.35, -25.3, 1.126, 1.112, -0.376, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1.126, b: 0, c: -0.225, d: 1.288, tx: 9.5, ty: -31.3},
						transform: [9.5, -31.3, 1.126, 1.307, -0.173, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1.126, b: 0, c: -0.143, d: 1.294, tx: 7.8, ty: -31.4},
						transform: [7.8, -31.4, 1.126, 1.302, -0.11, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "body2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.931, b: -0.434, c: 0.476, d: 0.921, tx: -8.5, ty: -56.55},
						transform: [-8.5, -56.55, 1.027, 1.037, 0.477, -0.436, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 0.842, b: -0.558, c: 0.628, d: 0.847, tx: -16.1, ty: -62.95},
						transform: [-16.1, -62.95, 1.011, 1.054, 0.639, -0.585, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 1.074, b: 0.045, c: -0.376, d: 1.014, tx: 0.05, ty: -57.2},
						transform: [0.05, -57.2, 1.075, 1.081, -0.355, 0.042, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.201, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 1.021, b: 0.206, c: -0.5, d: 0.982, tx: 13.4, ty: -56.5},
						transform: [13.4, -56.5, 1.042, 1.102, -0.471, 0.199, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 1.012, b: -0.059, c: 0.001, d: 1.025, tx: 2.1, ty: -54},
						transform: [2.1, -54, 1.013, 1.025, 0.001, -0.058, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_body2_x_f0",
						instancename: "",
						matrix: {a: 1.005, b: -0.116, c: 0.131, d: 1.016, tx: 1.7, ty: -54.85},
						transform: [1.7, -54.85, 1.012, 1.025, 0.128, -0.115, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_anais_head_mad_x_f12",
						instancename: "",
						matrix: {a: 0.893, b: -0.449, c: 0.449, d: 0.893, tx: -15.65, ty: -72.7},
						transform: [-15.65, -72.7, 1, 1, 0.466, -0.466, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_anais_head_mad_x_f12",
						instancename: "",
						matrix: {a: 0.737, b: -0.651, c: 0.677, d: 0.759, tx: -27.1, ty: -79.3},
						transform: [-27.1, -79.3, 0.983, 1.017, 0.728, -0.724, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_anais_head_mad_x_f13",
						instancename: "",
						matrix: {a: 0.893, b: 0.411, c: -0.421, d: 0.926, tx: 0.95, ty: -73.35},
						transform: [0.95, -73.35, 0.983, 1.017, -0.427, 0.432, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.377], [0.807, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_anais_head_mad_x_f13",
						instancename: "",
						matrix: {a: 0.85, b: 0.494, c: -0.507, d: 0.882, tx: 12.65, ty: -74.7},
						transform: [12.65, -74.7, 0.983, 1.017, -0.522, 0.527, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_anais_head_mad_x_f11",
						instancename: "",
						matrix: {a: 0.955, b: -0.233, c: 0.246, d: 0.987, tx: -0.5, ty: -68.4},
						transform: [-0.5, -68.4, 0.983, 1.017, 0.245, -0.24, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_anais_head_mad_x_f11",
						instancename: "",
						matrix: {a: 0.947, b: -0.262, c: 0.276, d: 0.979, tx: -5.6, ty: -70.85},
						transform: [-5.6, -70.85, 0.983, 1.017, 0.275, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm_8_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: -0.246, b: -0.844, c: 0.96, d: -0.28, tx: 3.75, ty: -65.3},
						transform: [3.75, -65.3, 0.879, 1, 1.855, -1.855, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: -0.442, b: -0.912, c: 0.981, d: -0.334, tx: -6.65, ty: -73.85},
						transform: [-6.65, -73.85, 1.013, 1.036, 1.899, -2.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: -0.145, b: 1, c: 1.025, d: 0.279, tx: 12.25, ty: -52.5},
						transform: [12.25, -52.5, 1.011, 1.062, 1.305, 1.715, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.377], [0.807, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: 0.601, b: 0.782, c: 0.845, d: -0.673, tx: 29.5, ty: -48.2},
						transform: [29.5, -48.2, 0.986, 1.08, 2.244, 0.916, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: 0.925, b: 0.052, c: -0.182, d: -0.969, tx: 20.6, ty: -57.65},
						transform: [20.6, -57.65, 0.927, 0.986, -2.956, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: 0.886, b: -0.274, c: -0.509, d: -0.844, tx: 18.8, ty: -60.45},
						transform: [18.8, -60.45, 0.927, 0.986, -2.599, -0.3, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_band",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.914, b: -0.406, c: 0.406, d: 0.914, tx: 34.25, ty: -147.6},
						transform: [34.25, -147.6, 1, 1, 0.418, -0.418, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.207, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.768, b: -0.614, c: 0.641, d: 0.79, tx: 0.35, ty: -163.95},
						transform: [0.35, -163.95, 0.983, 1.017, 0.682, -0.674, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 8,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.487, b: 0.854, c: -0.778, d: 0.452, tx: 87.45, ty: -103.45},
						transform: [87.45, -103.45, 0.983, 0.899, -1.044, 1.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.181, 0.377], [0.807, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.939, b: 0.291, c: -0.293, d: 0.974, tx: 104.4, ty: -93.95},
						transform: [104.4, -93.95, 0.983, 1.017, -0.292, 0.3, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.636, 0.014], [0.807, 0.284], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.851, b: -0.492, c: 0.516, d: 0.876, tx: 51.75, ty: -144.95},
						transform: [51.75, -144.95, 0.983, 1.017, 0.532, -0.524, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.954, b: -0.238, c: 0.254, d: 0.985, tx: 44.35, ty: -149},
						transform: [44.35, -149, 0.983, 1.017, 0.253, -0.245, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 15,
					},
					{
						from: 16,
						to: 16,
						actions: function(self){self.stop();
},
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 15,
					},
					{
						from: 16,
						to: 16,
					},
				]
			},
		]
	},
	"_anais_anais_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 55,
		labels: {loop: {from:26, to:54}, },
		layers: [
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.002, c: -0.009, d: 0.892, tx: 33.55, ty: -55.15},
						transform: [33.55, -55.15, 0.979, 0.892, -0.01, -0.002, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.213, 1], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.942, b: -0.17, c: -0.136, d: 0.88, tx: -32.05, ty: -49.95},
						transform: [-32.05, -49.95, 0.957, 0.891, -0.153, -2.963, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.077, 0.719], [0.348, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 18,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.942, b: -0.17, c: -0.136, d: 0.88, tx: -34.05, ty: -38.95},
						transform: [-34.05, -38.95, 0.957, 0.891, -0.153, -2.963, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.942, b: -0.17, c: -0.136, d: 0.88, tx: -32.55, ty: -43.45},
						transform: [-32.55, -43.45, 0.957, 0.891, -0.153, -2.963, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.942, b: -0.17, c: -0.136, d: 0.88, tx: -34.05, ty: -38.95},
						transform: [-34.05, -38.95, 0.957, 0.891, -0.153, -2.963, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.942, b: -0.17, c: -0.136, d: 0.88, tx: -32.55, ty: -40.95},
						transform: [-32.55, -40.95, 0.957, 0.891, -0.153, -2.963, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.942, b: -0.17, c: -0.136, d: 0.88, tx: -34.05, ty: -38.95},
						transform: [-34.05, -38.95, 0.957, 0.891, -0.153, -2.963, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "ear_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.914, b: -0.405, c: 0.266, d: 1.203, tx: 30.7, ty: -74.95},
						transform: [30.7, -74.95, 1, 1.232, 0.218, -0.417, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52614], [0.666, 0.85914], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.544, b: -0.912, c: 0.673, d: 0.838, tx: 38.95, ty: -115.05},
						transform: [38.95, -115.05, 1.062, 1.074, 0.677, -1.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.802, b: -0.777, c: 0.511, d: 0.721, tx: 33.35, ty: -120.7},
						transform: [33.35, -120.7, 1.117, 0.884, 0.616, -0.77, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.835, b: -0.62, c: 0.55, d: 0.836, tx: 31.9, ty: -104.75},
						transform: [31.9, -104.75, 1.04, 1.001, 0.582, -0.639, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 1.149, b: 0.196, c: -0.151, d: 1.009, tx: -33.9, ty: -85.1},
						transform: [-33.9, -85.1, 1.166, 1.02, -0.149, 0.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.6626700000000001], [0.666, 0.99567], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.641, b: 0.973, c: -0.84, d: 0.578, tx: -51.25, ty: -93.65},
						transform: [-51.25, -93.65, 1.166, 1.02, -0.968, 0.988, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.6626700000000001], [0.666, 0.99567], [1, 1]],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.906, b: -0.435, c: -0.423, d: 0.928, tx: -49.05, ty: -67.15},
						transform: [-49.05, -67.15, 1.005, 1.02, -0.427, -2.694, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.026, b: -0.446, c: -0.218, d: 0.937, tx: -38.35, ty: -54.95},
						transform: [-38.35, -54.95, 1.119, 0.962, -0.228, -2.731, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.429, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.08, b: -0.14, c: -0.162, d: 0.971, tx: -35.5, ty: -57.95},
						transform: [-35.5, -57.95, 1.089, 0.985, -0.166, -3.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 21,
						to: 25,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.333, c: -0.278, d: 1.092, tx: -32.65, ty: -65.35},
						transform: [-32.65, -65.35, 1.005, 1.127, -0.249, -2.804, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.891, b: -0.466, c: -0.454, d: 0.913, tx: -39.55, ty: -56.15},
						transform: [-39.55, -56.15, 1.005, 1.02, -0.462, -2.66, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.901, b: -0.446, c: -0.436, d: 1.004, tx: -34.9, ty: -61.3},
						transform: [-34.9, -61.3, 1.005, 1.095, -0.41, -2.682, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.891, b: -0.466, c: -0.454, d: 0.913, tx: -39.55, ty: -56.15},
						transform: [-39.55, -56.15, 1.005, 1.02, -0.462, -2.66, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_hosepipe_u2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 46.4, ty: -24.1},
						transform: [46.4, -24.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_hosepipe_u2_x_f0",
						instancename: "",
						matrix: {a: 1.007, b: 0.335, c: -0.121, d: 1.038, tx: 41.7, ty: -25.5},
						transform: [41.7, -25.5, 1.061, 1.045, -0.116, 0.321, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_hosepipe_u2_x_f0",
						instancename: "",
						matrix: {a: 0.494, b: 0.871, c: 1.141, d: -0.243, tx: 18.9, ty: -18.65},
						transform: [18.9, -18.65, 1.001, 1.166, 1.78, 1.055, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_hosepipe_c_x_f0",
						instancename: "",
						matrix: {a: 0.974, b: 0.785, c: -0.436, d: 0.929, tx: 13.9, ty: -36.95},
						transform: [13.9, -36.95, 1.251, 1.026, -0.439, 0.678, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.285, 0.781], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_hosepipe_c_x_f0",
						instancename: "",
						matrix: {a: 0.574, b: 0.706, c: -0.731, d: 0.834, tx: 2.8, ty: -46.45},
						transform: [2.8, -46.45, 0.91, 1.109, -0.719, 0.888, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.50616], [0.666, 0.83916], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_hosepipe_c_x_f0",
						instancename: "",
						matrix: {a: 1.076, b: 0.482, c: -0.767, d: 0.818, tx: -11.55, ty: -54.45},
						transform: [-11.55, -54.45, 1.179, 1.121, -0.753, 0.422, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.24309], [0.666, 0.57609], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_anais_hosepipe_c_x_f0",
						instancename: "",
						matrix: {a: 0.839, b: 0.311, c: -0.685, d: 0.774, tx: -14.2, ty: -52.65},
						transform: [-14.2, -52.65, 0.895, 1.033, -0.725, 0.355, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.24309], [0.666, 0.57609], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: -0.034, b: 0.949, c: 0.814, d: 0.062, tx: -34.15, ty: -40.45},
						transform: [-34.15, -40.45, 0.949, 0.817, 1.495, 1.607, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: 0.209, b: -0.978, c: 0.865, d: 0.195, tx: -35.1, ty: -43.85},
						transform: [-35.1, -43.85, 1, 0.886, 1.349, -1.36, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: -0.164, b: -1.18, c: 0.834, d: -0.107, tx: -41.95, ty: -42.4},
						transform: [-41.95, -42.4, 1.192, 0.841, 1.698, -1.709, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_hosepipe_u3_x_f0",
						instancename: "",
						matrix: {a: -0.044, b: -0.782, c: 1.234, d: -0.175, tx: -39.55, ty: -33.35},
						transform: [-39.55, -33.35, 0.783, 1.246, 1.711, -1.627, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_hosepipe_u3_x_f0",
						instancename: "",
						matrix: {a: 0.021, b: -0.666, c: 1.249, d: -0.217, tx: -38.4, ty: -25.9},
						transform: [-38.4, -25.9, 0.666, 1.268, 1.743, -1.54, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: -0.242, b: -0.97, c: 0.97, d: -0.242, tx: -45.35, ty: -25.4},
						transform: [-45.35, -25.4, 1, 1, 1.815, -1.815, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: 0.001, b: -1, c: 1.11, d: 0.014, tx: -40.3, ty: -16.9},
						transform: [-40.3, -16.9, 1, 1.11, 1.559, -1.57, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: 0.057, b: 0.887, c: 1.109, d: -0.058, tx: -49.3, ty: -4},
						transform: [-49.3, -4, 0.889, 1.11, 1.623, 1.507, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: 0.057, b: 0.887, c: 1.058, d: -0.081, tx: -52.15, ty: -3.65},
						transform: [-52.15, -3.65, 0.889, 1.061, 1.647, 1.507, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: 0.154, b: 0.88, c: 1.058, d: -0.081, tx: -52.5, ty: -3.6},
						transform: [-52.5, -3.6, 0.893, 1.061, 1.647, 1.398, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: 0.015, b: 0.893, c: 0.721, d: 0.099, tx: -53.15, ty: -4.75},
						transform: [-53.15, -4.75, 0.893, 0.728, 1.434, 1.553, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: 0.188, b: 0.873, c: 0.726, d: -0.043, tx: -52.7, ty: -3.35},
						transform: [-52.7, -3.35, 0.893, 0.728, 1.63, 1.358, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 54,
						classname: "_anais_hosepipe_c2_x_f0",
						instancename: "",
						matrix: {a: 0.231, b: 0.951, c: -0.911, d: 0.047, tx: -36, ty: -5.6},
						transform: [-36, -5.6, 0.978, 0.912, -1.519, 1.332, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.154, b: 0.034, c: 0.095, d: 0.994, tx: 9.05, ty: -54.65},
						transform: [9.05, -54.65, 1.155, 0.998, 0.096, 0.029, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.54612], [0.666, 0.87912], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.165, b: 0.143, c: 0.095, d: 0.994, tx: 4.05, ty: -84.65},
						transform: [4.05, -84.65, 1.173, 0.998, 0.096, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.165, b: 0.143, c: 0.095, d: 0.994, tx: 3.05, ty: -92.15},
						transform: [3.05, -92.15, 1.173, 0.998, 0.096, 0.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.176, b: -0.022, c: 0.163, d: 0.97, tx: 6.05, ty: -77.95},
						transform: [6.05, -77.95, 1.177, 0.983, 0.167, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.965, b: 0.162, c: -0.148, d: 1.023, tx: 8.25, ty: -60.45},
						transform: [8.25, -60.45, 0.978, 1.034, -0.144, 0.166, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.213, 1], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.006, c: -0.023, d: 1.033, tx: -6.85, ty: -50.85},
						transform: [-6.85, -50.85, 0.955, 1.034, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.077, 0.719], [0.348, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.006, c: -0.023, d: 1.033, tx: -8.85, ty: -39.85},
						transform: [-8.85, -39.85, 0.955, 1.034, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 20,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.006, c: -0.023, d: 1.033, tx: -7.35, ty: -46.85},
						transform: [-7.35, -46.85, 0.955, 1.034, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 25,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.006, c: -0.023, d: 1.033, tx: -7.35, ty: -41.85},
						transform: [-7.35, -41.85, 0.955, 1.034, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.006, c: -0.023, d: 1.033, tx: -8.85, ty: -39.85},
						transform: [-8.85, -39.85, 0.955, 1.034, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.006, c: -0.023, d: 1.033, tx: -7.35, ty: -41.85},
						transform: [-7.35, -41.85, 0.955, 1.034, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: -0.006, c: -0.023, d: 1.033, tx: -8.85, ty: -39.85},
						transform: [-8.85, -39.85, 0.955, 1.034, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_arm_8_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: 0.099, b: 0.84, c: 0.813, d: -0.331, tx: -10.45, ty: -58.95},
						transform: [-10.45, -58.95, 0.846, 0.878, 1.958, 1.454, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: 0.022, b: 0.846, c: 0.84, d: -0.256, tx: -13.65, ty: -81.75},
						transform: [-13.65, -81.75, 0.846, 0.878, 1.866, 1.545, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.285, 0.781], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: -0.195, b: 0.823, c: 0.92, d: -0.214, tx: -15, ty: -86.1},
						transform: [-15, -86.1, 0.846, 0.945, 1.799, 1.803, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.886, 0], [0.97, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: -0.301, b: 0.791, c: 0.899, d: 0.018, tx: -9.85, ty: -61.8},
						transform: [-9.85, -61.8, 0.846, 0.899, 1.551, 1.934, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 54,
					},
				]
			},
			{
				name: "tube_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.822, b: -0.531, c: 0.531, d: -0.822, tx: -32.8, ty: -43.75},
						transform: [-32.8, -43.75, 0.979, 0.979, 2.569, -2.569, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.658, b: -0.725, c: 0.725, d: -0.658, tx: -44.85, ty: -74.65},
						transform: [-44.85, -74.65, 0.979, 0.979, 2.308, -2.308, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.285, 0.781], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.746, b: -0.633, c: 0.633, d: -0.746, tx: -76.85, ty: -94.15},
						transform: [-76.85, -94.15, 0.979, 0.979, 2.438, -2.438, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.823, b: -0.527, c: 0.527, d: -0.823, tx: -93.7, ty: -88.5},
						transform: [-93.7, -88.5, 0.977, 0.977, 2.572, -2.572, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.885, b: -0.414, c: 0.414, d: -0.885, tx: -104.95, ty: -80.85},
						transform: [-104.95, -80.85, 0.977, 0.977, 2.704, -2.704, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.24642000000000003], [0.666, 0.57942], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.933, b: -0.296, c: 0.296, d: -0.933, tx: -112.35, ty: -71.15},
						transform: [-112.35, -71.15, 0.979, 0.979, 2.835, -2.835, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.25308], [0.666, 0.58608], [1, 1]],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.968, b: -0.137, c: 0.137, d: -0.968, tx: -119.35, ty: -51.7},
						transform: [-119.35, -51.7, 0.978, 0.978, 3.001, -3.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 13,
						to: 14,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.962, b: 0.18, c: -0.18, d: -0.962, tx: -125.85, ty: -12.65},
						transform: [-125.85, -12.65, 0.979, 0.979, -2.956, 2.956, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.979, b: 0.011, c: -0.011, d: -0.979, tx: -129.35, ty: -14.65},
						transform: [-129.35, -14.65, 0.979, 0.979, -3.13, 3.13, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 17,
						to: 18,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.977, b: -0.062, c: 0.062, d: -0.977, tx: -130.85, ty: -12.15},
						transform: [-130.85, -12.15, 0.979, 0.979, 3.078, -3.078, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.979, b: -0.002, c: 0.002, d: -0.979, tx: -132.85, ty: -8.15},
						transform: [-132.85, -8.15, 0.979, 0.979, 3.139, -3.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.977, b: 0.048, c: -0.048, d: -0.977, tx: -133.35, ty: -9.65},
						transform: [-133.35, -9.65, 0.979, 0.979, -3.092, 3.092, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.979, b: -0.005, c: 0.005, d: -0.979, tx: -134.65, ty: -9.05},
						transform: [-134.65, -9.05, 0.979, 0.979, 3.137, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 22,
						to: 54,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.979, b: -0.002, c: 0.002, d: -0.979, tx: -134.85, ty: -8.15},
						transform: [-134.85, -8.15, 0.979, 0.979, 3.139, -3.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg6_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_leg6_x_f0",
						instancename: "",
						matrix: {a: -1.15, b: 0.074, c: 0.337, d: 1.103, tx: -12.1, ty: -42.7},
						transform: [-12.1, -42.7, 1.152, 1.153, 0.296, 3.077, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_leg6_x_f0",
						instancename: "",
						matrix: {a: -1.211, b: -0.214, c: -0.105, d: 1.124, tx: -9.8, ty: -61.5},
						transform: [-9.8, -61.5, 1.23, 1.129, -0.093, -2.967, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.285, 0.781], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_anais_leg6_x_f0",
						instancename: "",
						matrix: {a: -1.203, b: -0.096, c: 0.002, d: 1.107, tx: -9.85, ty: -66.5},
						transform: [-9.85, -66.5, 1.207, 1.107, 0.002, -3.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.886, 0], [0.97, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_leg6_x_f0",
						instancename: "",
						matrix: {a: -0.909, b: 0.517, c: 0.541, d: 0.792, tx: -4.95, ty: -40.5},
						transform: [-4.95, -40.5, 1.046, 0.96, 0.599, 2.624, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.833, b: -0.447, c: 0.447, d: 1.098, tx: 13, ty: -26.15},
						transform: [13, -26.15, 0.946, 1.185, 0.387, -0.493, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.213, 1], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.076, b: -0.904, c: 1.061, d: 0.193, tx: 15.85, ty: -8.8},
						transform: [15.85, -8.8, 0.907, 1.078, 1.391, -1.487, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.077, 0.719], [0.348, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 18,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.076, b: -0.904, c: 1.061, d: 0.193, tx: 15.85, ty: -8.8},
						transform: [15.85, -8.8, 0.907, 1.078, 1.391, -1.487, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.076, b: -0.938, c: 1.061, d: 0.2, tx: 15.85, ty: -9.2},
						transform: [15.85, -9.2, 0.941, 1.079, 1.385, -1.49, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.076, b: -0.904, c: 1.061, d: 0.193, tx: 15.85, ty: -8.8},
						transform: [15.85, -8.8, 0.907, 1.078, 1.391, -1.487, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.076, b: -0.904, c: 1.061, d: 0.193, tx: 15.85, ty: -8.8},
						transform: [15.85, -8.8, 0.907, 1.078, 1.391, -1.487, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.076, b: -0.904, c: 1.061, d: 0.193, tx: 15.85, ty: -8.8},
						transform: [15.85, -8.8, 0.907, 1.078, 1.391, -1.487, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "leg1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -1.152, b: 0.184, c: 0.193, d: 0.981, tx: 12.65, ty: -37.55},
						transform: [12.65, -37.55, 1.167, 1, 0.195, 2.983, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -1.151, b: 0.189, c: 0.219, d: 1.086, tx: 11.8, ty: -58.7},
						transform: [11.8, -58.7, 1.167, 1.108, 0.199, 2.979, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.285, 0.781], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -1.128, b: 0.298, c: 0.29, d: 0.957, tx: 12.25, ty: -66.25},
						transform: [12.25, -66.25, 1.167, 1, 0.294, 2.883, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.526, 0], [0.826, 0.396], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -1.096, b: 0.4, c: 0.376, d: 0.927, tx: 16.1, ty: -39.05},
						transform: [16.1, -39.05, 1.167, 1, 0.386, 2.792, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_run_leg_2_x_f0",
						instancename: "",
						matrix: {a: -0.827, b: -0.678, c: -0.866, d: 0.896, tx: -6.6, ty: -35.25},
						transform: [-6.6, -35.25, 1.07, 1.246, -0.768, -2.455, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.213, 1], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.091, b: -0.873, c: -1.19, d: 0.169, tx: -9.75, ty: -7.6},
						transform: [-9.75, -7.6, 0.878, 1.202, -1.43, -1.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.077, 0.719], [0.348, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 18,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.091, b: -0.873, c: -1.19, d: 0.169, tx: -9.75, ty: -7.6},
						transform: [-9.75, -7.6, 0.878, 1.202, -1.43, -1.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.091, b: -0.906, c: -1.19, d: 0.175, tx: -9.75, ty: -7.95},
						transform: [-9.75, -7.95, 0.911, 1.203, -1.425, -1.671, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.091, b: -0.873, c: -1.19, d: 0.169, tx: -9.75, ty: -7.6},
						transform: [-9.75, -7.6, 0.878, 1.202, -1.43, -1.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.091, b: -0.873, c: -1.19, d: 0.169, tx: -9.75, ty: -7.6},
						transform: [-9.75, -7.6, 0.878, 1.202, -1.43, -1.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.091, b: -0.873, c: -1.19, d: 0.169, tx: -9.75, ty: -7.6},
						transform: [-9.75, -7.6, 0.878, 1.202, -1.43, -1.675, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "body_side3_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_body_side3_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: -0.137, c: -0.299, d: 0.967, tx: 2.75, ty: -62.4},
						transform: [2.75, -62.4, 1.001, 1.012, -0.3, -3.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_body_side3_x_f0",
						instancename: "",
						matrix: {a: -1.001, b: -0.041, c: -0.205, d: 0.991, tx: -0.6, ty: -83.2},
						transform: [-0.6, -83.2, 1.001, 1.012, -0.204, -3.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.285, 0.781], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_anais_body_side3_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.054, c: -0.11, d: 1.006, tx: -2.2, ty: -88.75},
						transform: [-2.2, -88.75, 1.001, 1.012, -0.109, 3.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.886, 0], [0.97, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_body_side3_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.165, c: -0.061, d: 1.01, tx: 2.7, ty: -61.65},
						transform: [2.7, -61.65, 1.014, 1.012, -0.06, 2.978, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: -0.883, b: -0.191, c: -0.185, d: 0.855, tx: 3.1, ty: -53.35},
						transform: [3.1, -53.35, 0.903, 0.875, -0.214, -2.928, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.231, 0.599], [0.602, 0.874], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: -0.034, c: -0.017, d: 1.057, tx: 2.5, ty: -38.05},
						transform: [2.5, -38.05, 0.984, 1.057, -0.016, -0.035, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.077, 0.719], [0.348, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 18,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: -0.03, c: -0.017, d: 0.931, tx: 2.5, ty: -32.4},
						transform: [2.5, -32.4, 0.984, 0.931, -0.019, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.853, b: -0.032, c: -0.02, d: 1.291, tx: 3.05, ty: -44.05},
						transform: [3.05, -44.05, 0.854, 1.291, -0.015, -0.037, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.973, b: -0.03, c: -0.019, d: 1.013, tx: 2.3, ty: -34.85},
						transform: [2.3, -34.85, 0.973, 1.014, -0.019, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.915, b: -0.032, c: -0.02, d: 1.224, tx: 2.45, ty: -41.65},
						transform: [2.45, -41.65, 0.916, 1.224, -0.016, -0.035, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.973, b: -0.03, c: -0.019, d: 1.013, tx: 2.3, ty: -34.85},
						transform: [2.3, -34.85, 0.973, 1.014, -0.019, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.935, b: -0.157, c: 0.085, d: -0.828, tx: -18.25, ty: -59.3},
						transform: [-18.25, -59.3, 0.948, 0.833, 3.04, -2.976, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.213, 1], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: 1.004, b: 0.069, c: -0.072, d: 0.871, tx: 0.25, ty: -25.3},
						transform: [0.25, -25.3, 1.006, 0.874, -0.083, 0.068, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.077, 0.719], [0.348, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 18,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.211, c: 0.228, d: 0.871, tx: 7.65, ty: -21.35},
						transform: [7.65, -21.35, 1, 0.9, 0.256, -0.213, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: 0.865, b: 0.146, c: -0.14, d: 1.14, tx: -1.35, ty: -23.35},
						transform: [-1.35, -23.35, 0.878, 1.149, -0.122, 0.167, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.043, d: 1, tx: 3.1, ty: -21.45},
						transform: [3.1, -21.45, 1, 1.001, 0.043, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: 0.941, b: 0, c: 0.05, d: 1.169, tx: 2.85, ty: -25.45},
						transform: [2.85, -25.45, 0.941, 1.17, 0.043, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.043, d: 1, tx: 3.1, ty: -21.45},
						transform: [3.1, -21.45, 1, 1.001, 0.043, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_arm copy",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_arm_8_x",
						instancename: "",
						matrix: {a: 1.115, b: 0.187, c: 0.085, d: -0.828, tx: 24.3, ty: -50.7},
						transform: [24.3, -50.7, 1.13, 0.833, 3.04, 0.166, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.213, 1], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: -0.973, b: 0.232, c: 0.168, d: 0.907, tx: 8.3, ty: -22.15},
						transform: [8.3, -22.15, 1, 0.922, 0.183, 2.907, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.077, 0.719], [0.348, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 18,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.043, c: -0.107, d: 0.943, tx: 4.3, ty: -20.65},
						transform: [4.3, -20.65, 1, 0.949, -0.113, -3.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: -0.865, b: 0.149, c: 0.106, d: 1.084, tx: 9.35, ty: -24.45},
						transform: [9.35, -24.45, 0.878, 1.089, 0.098, 2.971, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.067, d: 0.946, tx: 5.25, ty: -20.3},
						transform: [5.25, -20.3, 1, 0.949, -0.07, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: -0.941, b: 0, c: -0.078, d: 1.106, tx: 5.55, ty: -24.1},
						transform: [5.55, -24.1, 0.941, 1.109, -0.07, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_arms_die_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.067, d: 0.946, tx: 5.25, ty: -20.3},
						transform: [5.25, -20.3, 1, 0.949, -0.07, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_head_mad_x_f12",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -8.75, ty: -73.65},
						transform: [-8.75, -73.65, 1, 1, 0.256, -0.256, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_anais_head_mad_x_f6",
						instancename: "",
						matrix: {a: 0.949, b: -0.316, c: 0.316, d: 0.949, tx: -15.85, ty: -95.1},
						transform: [-15.85, -95.1, 1, 1, 0.322, -0.322, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.285, 0.781], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_anais_anais_head_mad_x_f6",
						instancename: "",
						matrix: {a: 0.949, b: -0.316, c: 0.316, d: 0.949, tx: -19.85, ty: -102.6},
						transform: [-19.85, -102.6, 1, 1, 0.322, -0.322, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.886, 0], [0.97, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_anais_head_mad_x_f6",
						instancename: "",
						matrix: {a: 0.967, b: -0.254, c: 0.254, d: 0.967, tx: -12.75, ty: -78.65},
						transform: [-12.75, -78.65, 1, 1, 0.256, -0.256, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_head_mad_x_f6",
						instancename: "",
						matrix: {a: -0.994, b: -0.105, c: -0.106, d: 1.019, tx: 14.8, ty: -71.8},
						transform: [14.8, -71.8, 1, 1.025, -0.104, -3.036, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.304, 0.365], [0.639, 0.697], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_anais_anais_head_mad_x_f10",
						instancename: "",
						matrix: {a: -0.99, b: -0.143, c: -0.145, d: 1.015, tx: 8.1, ty: -54.35},
						transform: [8.1, -54.35, 1, 1.025, -0.142, -2.998, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.077, 0.719], [0.348, 1], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_anais_anais_head_mad_x_f10",
						instancename: "",
						matrix: {a: -0.99, b: -0.143, c: -0.145, d: 1.015, tx: 8.1, ty: -47.35},
						transform: [8.1, -47.35, 1, 1.025, -0.142, -2.998, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 25,
						classname: "_anais_anais_head_mad_x_f10",
						instancename: "",
						matrix: {a: -0.989, b: -0.147, c: -0.15, d: 1.014, tx: 6.6, ty: -62.15},
						transform: [6.6, -62.15, 1, 1.025, -0.146, -2.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_anais_head_mad_x_f10",
						instancename: "",
						matrix: {a: -0.977, b: -0.215, c: -0.22, d: 1.001, tx: 5.05, ty: -52.35},
						transform: [5.05, -52.35, 1, 1.025, -0.216, -2.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_anais_head_mad_x_f10",
						instancename: "",
						matrix: {a: -0.984, b: -0.178, c: -0.181, d: 1.009, tx: 6.65, ty: -60.7},
						transform: [6.65, -60.7, 1, 1.025, -0.177, -2.963, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_anais_head_mad_x_f10",
						instancename: "",
						matrix: {a: -0.977, b: -0.215, c: -0.22, d: 1.001, tx: 5.05, ty: -52.35},
						transform: [5.05, -52.35, 1, 1.025, -0.216, -2.924, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_arm_6_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.485, b: -0.739, c: 0.7, d: -0.545, tx: 12.8, ty: -63},
						transform: [12.8, -63, 0.884, 0.887, 2.232, -2.151, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.306, b: -0.83, c: 0.805, d: -0.373, tx: 8.45, ty: -83.7},
						transform: [8.45, -83.7, 0.884, 0.887, 2.005, -1.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.285, 0.781], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: -0.115, b: -0.877, c: 0.867, d: -0.186, tx: 6.8, ty: -90.1},
						transform: [6.8, -90.1, 0.884, 0.887, 1.782, -1.701, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.886, 0], [0.97, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_anais_arm_6_x",
						instancename: "",
						matrix: {a: 0.184, b: -0.725, c: 0.915, d: -0.011, tx: 12.8, ty: -67.75},
						transform: [12.8, -67.75, 0.748, 0.915, 1.583, -1.322, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 54,
					},
				]
			},
			{
				name: "anais_band",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.984, b: -0.176, c: 0.235, d: 1.31, tx: 53.35, ty: -135.6},
						transform: [53.35, -135.6, 1, 1.331, 0.177, -0.177, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.995, b: -0.1, c: 0.115, d: 1.149, tx: 44.6, ty: -159.75},
						transform: [44.6, -159.75, 1, 1.155, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.963, b: -0.27, c: 0.27, d: 0.963, tx: 40.35, ty: -168.1},
						transform: [40.35, -168.1, 1, 1, 0.274, -0.274, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.886, 0], [0.97, 0.5], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.778, b: -1.193, c: 0.485, d: 0.833, tx: 51.65, ty: -141.55},
						transform: [51.65, -141.55, 1.424, 0.964, 0.527, -0.993, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_band1_x_f0",
						instancename: "",
						matrix: {a: 0.968, b: -0.248, c: 0.04, d: 0.463, tx: -51.85, ty: -133.35},
						transform: [-51.85, -133.35, 0.999, 0.465, 0.086, -0.251, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.478], [0.65, 0.793], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 13,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.955, b: 0.297, c: -0.299, d: 0.98, tx: -54.5, ty: -123.65},
						transform: [-54.5, -123.65, 1, 1.025, -0.296, 0.301, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.107, 0.544], [0.398, 0.858], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 15,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.748, b: 0.662, c: -0.672, d: 0.772, tx: -54.55, ty: -117.2},
						transform: [-54.55, -117.2, 0.999, 1.023, -0.717, 0.724, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.268, 0.685], [0.598, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.903, b: 0.43, c: -0.436, d: 0.927, tx: -54.5, ty: -116.65},
						transform: [-54.5, -116.65, 1, 1.025, -0.44, 0.445, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.45, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 25,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.986, b: 0.167, c: -0.165, d: 1.011, tx: -53.3, ty: -132.6},
						transform: [-53.3, -132.6, 1, 1.025, -0.162, 0.167, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 37,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.954, b: 0.301, c: -0.303, d: 0.979, tx: -51.8, ty: -123.55},
						transform: [-51.8, -123.55, 1, 1.025, -0.3, 0.306, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.222, 1], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 53,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.965, b: 0.264, c: -0.265, d: 0.99, tx: -51.4, ty: -129.7},
						transform: [-51.4, -129.7, 1, 1.025, -0.262, 0.267, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.246, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.954, b: 0.301, c: -0.303, d: 0.979, tx: -51.8, ty: -123.55},
						transform: [-51.8, -123.55, 1, 1.025, -0.3, 0.306, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 25,
					},
					{
						from: 26,
						to: 54,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 53,
					},
					{
						from: 54,
						to: 54,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_anais_anais_interact": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "anais_foot",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.254, b: 0.892, c: -0.847, d: -0.343, tx: 14.2, ty: -48.15},
						transform: [14.2, -48.15, 0.928, 0.913, -1.955, 1.848, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: 0.53, c: 0.426, d: 0.894, tx: 11.55, ty: -46.05},
						transform: [11.55, -46.05, 1.028, 0.99, 0.445, 2.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: -0.006, b: -0.869, c: 0.806, d: -0.016, tx: 11.65, ty: -41.15},
						transform: [11.65, -41.15, 0.869, 0.806, 1.591, -1.577, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.114, b: -0.757, c: 0.854, d: -0.109, tx: 13, ty: -41.8},
						transform: [13, -41.8, 0.766, 0.861, 1.697, -1.421, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.111, d: 1.028, tx: 10.8, ty: -33.55},
						transform: [10.8, -33.55, 0.907, 1.034, -0.107, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1.001, b: 0, c: -0.16, d: 0.974, tx: 6.95, ty: -32.25},
						transform: [6.95, -32.25, 1.001, 0.987, -0.162, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.157, d: 1.02, tx: 6.4, ty: -33.35},
						transform: [6.4, -33.35, 0.907, 1.032, -0.153, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.152, d: 0.892, tx: 9.8, ty: -30.35},
						transform: [9.8, -30.35, 0.907, 0.905, -0.168, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.184, d: 0.981, tx: 11, ty: -32.45},
						transform: [11, -32.45, 0.907, 0.999, -0.185, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.124, d: 0.981, tx: 9.6, ty: -32.45},
						transform: [9.6, -32.45, 0.907, 0.989, -0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.157, d: 1.02, tx: 6.4, ty: -33.35},
						transform: [6.4, -33.35, 0.907, 1.032, -0.153, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: 0.53, c: 0.426, d: 0.894, tx: 11.55, ty: -46.05},
						transform: [11.55, -46.05, 1.028, 0.99, 0.445, 2.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 18,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: -0.006, b: -0.869, c: 0.806, d: -0.016, tx: 11.65, ty: -41.15},
						transform: [11.65, -41.15, 0.869, 0.806, 1.591, -1.577, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.114, b: -0.757, c: 0.854, d: -0.109, tx: 13, ty: -41.8},
						transform: [13, -41.8, 0.766, 0.861, 1.697, -1.421, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_foreleg",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.908, b: -0.43, c: -0.418, d: 0.93, tx: -43.9, ty: -79.1},
						transform: [-43.9, -79.1, 1.005, 1.02, -0.423, -2.699, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.816, b: -0.704, c: -0.487, d: 0.848, tx: -44.6, ty: -65.15},
						transform: [-44.6, -65.15, 1.078, 0.978, -0.521, -2.43, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.134, d: 0.981, tx: -8.3, ty: -32.45},
						transform: [-8.3, -32.45, 0.907, 0.99, 0.136, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.193, d: 1.056, tx: -9.7, ty: -34.2},
						transform: [-9.7, -34.2, 0.907, 1.073, 0.181, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.963, b: 0, c: 0.037, d: 0.87, tx: -6.3, ty: -29.8},
						transform: [-6.3, -29.8, 0.963, 0.871, 0.043, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.963, b: 0, c: 0.037, d: 0.87, tx: -6.8, ty: -29.8},
						transform: [-6.8, -29.8, 0.963, 0.871, 0.043, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.248, b: -0.791, c: -0.887, d: -0.168, tx: -5.7, ty: -35.35},
						transform: [-5.7, -35.35, 0.829, 0.903, -1.758, -1.267, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.329, b: -0.761, c: -0.865, d: -0.259, tx: 1.85, ty: -37.85},
						transform: [1.85, -37.85, 0.829, 0.903, -1.862, -1.163, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: -0.959, b: 0.256, c: 0.16, d: 0.974, tx: -3.9, ty: -36.55},
						transform: [-3.9, -36.55, 0.993, 0.987, 0.162, 2.881, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: 0.046, c: 0.004, d: 1.09, tx: -3.7, ty: -35.05},
						transform: [-3.7, -35.05, 0.993, 1.09, 0.003, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.134, d: 0.981, tx: -8.3, ty: -32.45},
						transform: [-8.3, -32.45, 0.907, 0.99, 0.136, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.193, d: 1.056, tx: -9.7, ty: -34.2},
						transform: [-9.7, -34.2, 0.907, 1.073, 0.181, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_hosepipe_u5_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -60.8, ty: -25.45},
						transform: [-60.8, -25.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_hosepipe_u6_x_f0",
						instancename: "",
						matrix: {a: 0.99, b: 0.139, c: -0.139, d: 0.99, tx: 4.15, ty: -25.5},
						transform: [4.15, -25.5, 1, 1, -0.139, 0.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_hosepipe_u6_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: 0.035, c: -0.035, d: 0.999, tx: 8.55, ty: -26.35},
						transform: [8.55, -26.35, 1, 1, -0.035, 0.035, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_hosepipe_u6_x_f0",
						instancename: "",
						matrix: {a: 0.821, b: -0.176, c: 0.326, d: 0.975, tx: 18.75, ty: -26.95},
						transform: [18.75, -26.95, 0.84, 1.028, 0.322, -0.211, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_hosepipe_u6_x_f0",
						instancename: "",
						matrix: {a: 0.747, b: -0.179, c: 0.457, d: 0.919, tx: 18.75, ty: -23.45},
						transform: [18.75, -23.45, 0.768, 1.026, 0.461, -0.235, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_hosepipe_u6_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.035, c: 0.055, d: 0.999, tx: 5.05, ty: -23.3},
						transform: [5.05, -23.3, 1, 1, 0.055, -0.035, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_hosepipe_u6_x_f0",
						instancename: "",
						matrix: {a: 0.812, b: -0.029, c: -0.284, d: 1.011, tx: 3.55, ty: -23.55},
						transform: [3.55, -23.55, 0.813, 1.05, -0.274, -0.035, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.37296], [0.666, 0.70596], [1, 1]],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_anais_hosepipe_u6_x_f0",
						instancename: "",
						matrix: {a: 0.694, b: 0.29, c: -0.68, d: 0.8, tx: -21.45, ty: -31.8},
						transform: [-21.45, -31.8, 0.752, 1.05, -0.704, 0.395, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.742, b: -0.475, c: -0.538, d: -0.841, tx: 27.8, ty: -51.9},
						transform: [27.8, -51.9, 0.881, 0.998, -2.572, -0.569, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.093, b: -0.876, c: -0.992, d: 0.105, tx: 19.15, ty: -76.95},
						transform: [19.15, -76.95, 0.881, 0.998, -1.465, -1.676, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.365, b: -0.802, c: -0.909, d: 0.413, tx: 11.05, ty: -86.15},
						transform: [11.05, -86.15, 0.881, 0.998, -1.144, -1.998, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.137, b: -0.871, c: -0.986, d: 0.155, tx: 18.6, ty: -80.55},
						transform: [18.6, -80.55, 0.881, 0.998, -1.415, -1.727, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.213, b: -0.855, c: -0.969, d: -0.241, tx: 30.15, ty: -72.9},
						transform: [30.15, -72.9, 0.881, 0.998, -1.815, -1.327, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.352, b: -0.808, c: -0.915, d: -0.399, tx: 30.5, ty: -78.5},
						transform: [30.5, -78.5, 0.881, 0.998, -1.981, -1.16, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.124, b: -0.873, c: -0.988, d: -0.14, tx: 23.5, ty: -81.45},
						transform: [23.5, -81.45, 0.881, 0.998, -1.712, -1.43, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.291, b: -0.832, c: -0.942, d: -0.33, tx: 22.05, ty: -76.45},
						transform: [22.05, -76.45, 0.881, 0.998, -1.907, -1.234, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.55, b: -0.688, c: -0.78, d: 0.623, tx: 13.95, ty: -69.35},
						transform: [13.95, -69.35, 0.881, 0.998, -0.896, -2.245, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.936, b: -0.225, c: -0.19, d: 0.874, tx: -41.3, ty: -58.45},
						transform: [-41.3, -58.45, 0.963, 0.894, -0.214, -2.905, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.928, b: -0.168, c: -0.243, d: 0.884, tx: -39.15, ty: -55.9},
						transform: [-39.15, -55.9, 0.943, 0.917, -0.268, -2.962, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 4,
					},
					{
						from: 5,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.805, b: -0.54, c: -0.393, d: -0.652, tx: 21.2, ty: -59.6},
						transform: [21.2, -59.6, 0.97, 0.761, -2.599, -0.591, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: 0.877, b: -0.021, c: 0, d: -0.672, tx: 15.35, ty: -53},
						transform: [15.35, -53, 0.878, 0.672, 3.141, -0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: 0.86, b: 0.173, c: 0.179, d: -0.79, tx: 15.95, ty: -54.5},
						transform: [15.95, -54.5, 0.878, 0.81, 2.919, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: 0.62, b: 0.622, c: 0.587, d: -0.558, tx: 20.95, ty: -64.5},
						transform: [20.95, -64.5, 0.878, 0.81, 2.331, 0.787, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: 0.877, b: 0.037, c: 0.057, d: -0.873, tx: 19.4, ty: -62.6},
						transform: [19.4, -62.6, 0.878, 0.875, 3.076, 0.042, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.595, b: -0.621, c: -0.478, d: -0.662, tx: 15.65, ty: -53.05},
						transform: [15.65, -53.05, 0.861, 0.817, -2.516, -0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 18,
					},
					{
						from: 19,
						to: 19,
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: 0.033, c: 0.018, d: 1.038, tx: -16.95, ty: -60.25},
						transform: [-16.95, -60.25, 0.961, 1.039, 0.017, 3.107, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: -0.005, c: -0.148, d: 1.038, tx: -13.55, ty: -56.75},
						transform: [-13.55, -56.75, 0.96, 1.049, -0.142, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 19,
					},
				]
			},
			{
				name: "anais_skirt",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_leg6_x_f0",
						instancename: "",
						matrix: {a: -1.055, b: 0.087, c: 0.068, d: 0.979, tx: -9.65, ty: -37.45},
						transform: [-9.65, -37.45, 1.058, 0.982, 0.069, 3.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_leg6_x_f0",
						instancename: "",
						matrix: {a: -1.055, b: 0.087, c: 0.068, d: 0.979, tx: -15.15, ty: -37.2},
						transform: [-15.15, -37.2, 1.058, 0.982, 0.069, 3.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.217, c: 0.174, d: 1.009, tx: -4.1, ty: -63.45},
						transform: [-4.1, -63.45, 1.011, 1.024, 0.171, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.217, c: 0.174, d: 1.009, tx: -7.1, ty: -65.45},
						transform: [-7.1, -65.45, 1.011, 1.024, 0.171, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.97, b: -0.136, c: 0.172, d: 1.045, tx: -6.15, ty: -57.25},
						transform: [-6.15, -57.25, 0.979, 1.06, 0.163, -0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.05, b: 0.168, c: -0.154, d: 0.981, tx: 0.5, ty: -57.6},
						transform: [0.5, -57.6, 1.064, 0.993, -0.155, 0.159, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.052, b: 0.168, c: -0.215, d: 0.97, tx: 6.3, ty: -60.6},
						transform: [6.3, -60.6, 1.065, 0.994, -0.218, 0.159, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.065, b: 0.031, c: -0.087, d: 0.99, tx: 3.3, ty: -60.6},
						transform: [3.3, -60.6, 1.065, 0.994, -0.088, 0.029, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.065, b: -0.006, c: -0.047, d: 0.885, tx: -1.7, ty: -54.55},
						transform: [-1.7, -54.55, 1.065, 0.886, -0.053, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.217, c: 0.174, d: 1.009, tx: -4.1, ty: -63.45},
						transform: [-4.1, -63.45, 1.011, 1.024, 0.171, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.217, c: 0.174, d: 1.009, tx: -7.1, ty: -65.45},
						transform: [-7.1, -65.45, 1.011, 1.024, 0.171, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.134, d: 0.981, tx: 11.5, ty: -32.45},
						transform: [11.5, -32.45, 0.907, 0.99, -0.136, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.033, d: 0.881, tx: 3.95, ty: -30.05},
						transform: [3.95, -30.05, 0.907, 0.882, -0.037, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.602, b: 0.706, c: -0.633, d: -0.657, tx: 2.7, ty: -56.9},
						transform: [2.7, -56.9, 0.928, 0.912, -2.375, 2.277, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.51948], [0.666, 0.8524800000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.173, b: 0.911, c: -0.876, d: -0.257, tx: 6.2, ty: -66.65},
						transform: [6.2, -66.65, 0.928, 0.912, -1.856, 1.758, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 8,
					},
					{
						from: 9,
						to: 14,
					},
					{
						from: 15,
						to: 15,
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.602, b: 0.706, c: -0.633, d: -0.657, tx: 2.7, ty: -56.9},
						transform: [2.7, -56.9, 0.928, 0.912, -2.375, 2.277, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.51948], [0.666, 0.8524800000000001], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.173, b: 0.911, c: -0.876, d: -0.257, tx: 6.2, ty: -66.65},
						transform: [6.2, -66.65, 0.928, 0.912, -1.856, 1.758, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_arm_3_x",
						instancename: "",
						matrix: {a: 0.651, b: 0.654, c: -0.644, d: 0.549, tx: 6.1, ty: -63.35},
						transform: [6.1, -63.35, 0.923, 0.846, -0.865, 0.788, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.117, d: 1.018, tx: -8.4, ty: -74.5},
						transform: [-8.4, -74.5, 1, 1.025, 0.114, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.117, d: 1.018, tx: -11.4, ty: -76.5},
						transform: [-11.4, -76.5, 1, 1.025, 0.114, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -0.997, b: -0.082, c: -0.083, d: 1.022, tx: -1.25, ty: -68.65},
						transform: [-1.25, -68.65, 1, 1.025, -0.081, -3.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -0.98, b: -0.198, c: -0.202, d: 1.005, tx: 2.05, ty: -74},
						transform: [2.05, -74, 1, 1.025, -0.198, -2.942, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -0.996, b: -0.091, c: -0.092, d: 1.021, tx: 8.1, ty: -77.55},
						transform: [8.1, -77.55, 1, 1.025, -0.09, -3.051, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -1, b: 0.021, c: 0.023, d: 1.025, tx: 1.9, ty: -78},
						transform: [1.9, -78, 1, 1.025, 0.023, 3.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -0.998, b: 0.056, c: 0.058, d: 1.023, tx: -3.55, ty: -68.65},
						transform: [-3.55, -68.65, 1, 1.025, 0.057, 3.086, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.117, d: 1.018, tx: -8.4, ty: -74.5},
						transform: [-8.4, -74.5, 1, 1.025, 0.114, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_anais_head_mad_x_f8",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.117, d: 1.018, tx: -11.4, ty: -76.5},
						transform: [-11.4, -76.5, 1, 1.025, 0.114, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.954, b: 0.111, c: 0.102, d: 1.034, tx: -16.7, ty: -57.75},
						transform: [-16.7, -57.75, 0.961, 1.039, 0.098, 3.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: 0.141, c: 0.134, d: 1.03, tx: -15.9, ty: -63.35},
						transform: [-15.9, -63.35, 0.961, 1.039, 0.13, 2.995, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.023, d: 1.038, tx: -12.3, ty: -58},
						transform: [-12.3, -58, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.951, b: -0.139, c: -0.168, d: 1.025, tx: -7.45, ty: -53.55},
						transform: [-7.45, -53.55, 0.961, 1.039, -0.162, -2.997, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.143, c: -0.172, d: 1.024, tx: -5.6, ty: -63.6},
						transform: [-5.6, -63.6, 0.961, 1.039, -0.166, -2.993, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.023, d: 1.038, tx: -10.3, ty: -57},
						transform: [-10.3, -57, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.954, b: 0.062, c: 0.121, d: 1.037, tx: -15.3, ty: -47.65},
						transform: [-15.3, -47.65, 0.956, 1.044, 0.116, 3.077, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.956, b: 0.09, c: 0.08, d: 1.036, tx: -20.4, ty: -53.2},
						transform: [-20.4, -53.2, 0.961, 1.039, 0.077, 3.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.959, b: 0.061, c: 0.048, d: 1.037, tx: -27.3, ty: -58.25},
						transform: [-27.3, -58.25, 0.961, 1.039, 0.047, 3.078, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.052, c: 0.198, d: 0.974, tx: -4.8, ty: -59.05},
						transform: [-4.8, -59.05, 0.988, 0.993, 0.2, -0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.022, b: 0.138, c: -0.186, d: 0.976, tx: -1.45, ty: -57.4},
						transform: [-1.45, -57.4, 1.031, 0.993, -0.188, 0.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 19,
					},
				]
			},
			{
				name: "ear_x",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.929, b: -0.351, c: -0.372, d: 0.994, tx: -54.8, ty: -70.95},
						transform: [-54.8, -70.95, 0.994, 1.061, -0.358, -2.78, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.937, b: -0.341, c: -0.351, d: 0.966, tx: -56.65, ty: -74.5},
						transform: [-56.65, -74.5, 0.997, 1.028, -0.349, -2.792, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: -0.503, c: -0.475, d: 0.857, tx: -42.55, ty: -76.95},
						transform: [-42.55, -76.95, 1.014, 0.98, -0.506, -2.623, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.806, b: -0.583, c: -0.623, d: 0.82, tx: -43.85, ty: -87.2},
						transform: [-43.85, -87.2, 0.995, 1.03, -0.65, -2.516, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.372, c: -0.18, d: 0.959, tx: -19.1, ty: -79.3},
						transform: [-19.1, -79.3, 1.066, 0.976, -0.186, -2.785, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.068, b: -0.142, c: 0.037, d: 0.965, tx: -17.8, ty: -77.75},
						transform: [-17.8, -77.75, 1.077, 0.966, 0.038, -3.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.238, c: 0.222, d: 0.995, tx: -38.3, ty: -90.4},
						transform: [-38.3, -90.4, 1.005, 1.02, 0.219, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.201, c: 0.112, d: 1.038, tx: -47.5, ty: -98.4},
						transform: [-47.5, -98.4, 0.938, 1.044, 0.107, -0.216, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: 0.005, c: -0.205, d: 1, tx: -57.1, ty: -101},
						transform: [-57.1, -101, 0.999, 1.02, -0.202, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
				]
			},
			{
				name: "tube",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.966, b: -0.252, c: -0.252, d: -0.966, tx: 0.45, ty: -46.05},
						transform: [0.45, -46.05, 0.998, 0.998, -2.886, -0.256, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.878, b: 0.078, c: 0.089, d: -0.994, tx: -15.8, ty: -34.4},
						transform: [-15.8, -34.4, 0.881, 0.998, 3.053, 0.089, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 19,
					},
				]
			},
			{
				name: "ear2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_arm_6_x_f0",
						instancename: "",
						matrix: {a: -0.93, b: 0.188, c: -0.362, d: -0.833, tx: -17.9, ty: -59.05},
						transform: [-17.9, -59.05, 0.949, 0.908, -2.732, 2.942, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.902, b: -0.218, c: 0.209, d: -0.884, tx: -28.55, ty: -55.4},
						transform: [-28.55, -55.4, 0.928, 0.908, 2.909, -2.905, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: -0.993, b: -0.12, c: -0.146, d: 1.045, tx: -18.25, ty: -96.25},
						transform: [-18.25, -96.25, 1, 1.055, -0.139, -3.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: -0.995, b: -0.117, c: -0.123, d: 1.015, tx: -20.65, ty: -99.1},
						transform: [-20.65, -99.1, 1.002, 1.023, -0.121, -3.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: -0.969, b: -0.299, c: -0.256, d: 0.947, tx: -3.65, ty: -93.6},
						transform: [-3.65, -93.6, 1.014, 0.981, -0.264, -2.842, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: -0.981, b: -0.36, c: -0.371, d: 0.948, tx: -0.3, ty: -102.1},
						transform: [-0.3, -102.1, 1.045, 1.018, -0.373, -2.79, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: -1.017, b: -0.148, c: 0.056, d: 1.016, tx: 12.8, ty: -102.75},
						transform: [12.8, -102.75, 1.028, 1.017, 0.056, -2.997, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: -1.006, b: 0, c: 0.361, d: 1.019, tx: 8.85, ty: -105.9},
						transform: [8.85, -105.9, 1.006, 1.081, 0.341, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.897, b: -0.455, c: 0.443, d: 0.919, tx: -0.2, ty: -71.45},
						transform: [-0.2, -71.45, 1.005, 1.02, 0.449, -0.469, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.862, b: -0.428, c: 0.321, d: 0.969, tx: -14.4, ty: -77.9},
						transform: [-14.4, -77.9, 0.963, 1.021, 0.32, -0.461, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: -0.293, c: 0.17, d: 0.956, tx: -30.4, ty: -76.2},
						transform: [-30.4, -76.2, 1.036, 0.971, 0.176, -0.286, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_band",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_head_mad_x_f9",
						instancename: "",
						matrix: {a: -1, b: 0.017, c: 0.019, d: 1.025, tx: 2.45, ty: -77},
						transform: [2.45, -77, 1, 1.025, 0.018, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_anais_head_mad_x_f9",
						instancename: "",
						matrix: {a: -0.99, b: -0.143, c: -0.146, d: 1.014, tx: 2.2, ty: -63.25},
						transform: [2.2, -63.25, 1, 1.025, -0.143, -2.998, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.031, d: 1.024, tx: 32.6, ty: -138.9},
						transform: [32.6, -138.9, 1, 1.025, 0.03, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.031, d: 1.024, tx: 29.6, ty: -140.9},
						transform: [29.6, -140.9, 1, 1.025, 0.03, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
					{
						from: 7,
						to: 8,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.986, b: 0.17, c: -0.169, d: 1.011, tx: 51.55, ty: -123.9},
						transform: [51.55, -123.9, 1, 1.025, -0.165, 0.171, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.967, b: 0.255, c: -0.186, d: 1.011, tx: 62.35, ty: -123.4},
						transform: [62.35, -123.4, 1, 1.028, -0.182, 0.258, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.022, d: 1.024, tx: 61.45, ty: -132.25},
						transform: [61.45, -132.25, 1, 1.025, 0.022, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.991, b: -0.137, c: 0.146, d: 1.014, tx: 48.8, ty: -138.35},
						transform: [48.8, -138.35, 1, 1.025, 0.143, -0.138, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.032, c: 0.039, d: 1.024, tx: 41.2, ty: -130.55},
						transform: [41.2, -130.55, 1, 1.025, 0.038, -0.032, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 18,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.031, d: 1.024, tx: 32.6, ty: -138.9},
						transform: [32.6, -138.9, 1, 1.025, 0.03, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.031, d: 1.024, tx: 29.6, ty: -140.9},
						transform: [29.6, -140.9, 1, 1.025, 0.03, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.998, b: 0.071, c: -0.068, d: 1.022, tx: -69.4, ty: -133.05},
						transform: [-69.4, -133.05, 1, 1.025, -0.066, 0.071, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.965, b: 0.264, c: -0.265, d: 0.99, tx: -63.9, ty: -128.55},
						transform: [-63.9, -128.55, 1, 1.025, -0.262, 0.267, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 8,
					},
					{
						from: 9,
						to: 18,
						classname: "_anais_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15, ty: -99},
						transform: [-15, -99, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15, ty: -99},
						transform: [-15, -99, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 7,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_anais_anais_exitdoor": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {},
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.254, b: 0.892, c: -0.847, d: -0.343, tx: 14.2, ty: -48.15},
						transform: [14.2, -48.15, 0.928, 0.913, -1.955, 1.848, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 17,
					},
				]
			},
			{
				name: "ear_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.929, b: -0.351, c: -0.372, d: 0.994, tx: -54.8, ty: -70.95},
						transform: [-54.8, -70.95, 0.994, 1.061, -0.358, -2.78, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.937, b: -0.341, c: -0.351, d: 0.966, tx: -56.65, ty: -74.5},
						transform: [-56.65, -74.5, 0.997, 1.028, -0.349, -2.792, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: -0.503, c: -0.475, d: 0.857, tx: -42.55, ty: -76.95},
						transform: [-42.55, -76.95, 1.014, 0.98, -0.506, -2.623, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.806, b: -0.583, c: -0.623, d: 0.82, tx: -43.85, ty: -87.2},
						transform: [-43.85, -87.2, 0.995, 1.03, -0.65, -2.516, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.372, c: -0.18, d: 0.959, tx: -19.1, ty: -79.3},
						transform: [-19.1, -79.3, 1.066, 0.976, -0.186, -2.785, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.068, b: -0.142, c: 0.037, d: 0.965, tx: -17.8, ty: -77.75},
						transform: [-17.8, -77.75, 1.077, 0.966, 0.038, -3.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.238, c: 0.222, d: 0.995, tx: -38.3, ty: -90.4},
						transform: [-38.3, -90.4, 1.005, 1.02, 0.219, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.201, c: 0.112, d: 1.038, tx: -47.5, ty: -98.4},
						transform: [-47.5, -98.4, 0.938, 1.044, 0.107, -0.216, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_ear2_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: 0.005, c: -0.205, d: 1, tx: -57.1, ty: -101},
						transform: [-57.1, -101, 0.999, 1.02, -0.202, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.946, b: -0.18, c: -0.147, d: 0.882, tx: -38.25, ty: -50.4},
						transform: [-38.25, -50.4, 0.963, 0.894, -0.165, -2.954, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.3], [0.693, 0.7], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.956, b: -0.114, c: -0.086, d: 0.89, tx: -39.85, ty: -51.4},
						transform: [-39.85, -51.4, 0.963, 0.894, -0.096, -3.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.168, c: -0.136, d: 0.884, tx: -33, ty: -51.65},
						transform: [-33, -51.65, 0.963, 0.894, -0.153, -2.966, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.939, b: -0.21, c: -0.169, d: 0.846, tx: -23.35, ty: -53.85},
						transform: [-23.35, -53.85, 0.963, 0.863, -0.197, -2.922, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.914, b: -0.303, c: -0.262, d: 0.855, tx: -25.2, ty: -65.6},
						transform: [-25.2, -65.6, 0.963, 0.894, -0.297, -2.822, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.94, b: -0.209, c: -0.174, d: 0.877, tx: -28.45, ty: -58.75},
						transform: [-28.45, -58.75, 0.963, 0.894, -0.196, -2.923, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.929, b: -0.279, c: -0.178, d: 0.873, tx: -29.5, ty: -53.6},
						transform: [-29.5, -53.6, 0.97, 0.891, -0.201, -2.85, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.051, c: -0.027, d: 0.894, tx: -36.15, ty: -50.35},
						transform: [-36.15, -50.35, 0.963, 0.894, -0.031, -3.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.957, b: -0.103, c: -0.075, d: 0.891, tx: -44.5, ty: -54.15},
						transform: [-44.5, -54.15, 0.963, 0.894, -0.084, -3.035, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_arm_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 0.993, b: -0.117, c: 0.107, d: 0.994, tx: -50.6, ty: -19.55},
						transform: [-50.6, -19.55, 1, 1, 0.108, -0.117, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 1.083, b: -0.108, c: 0.091, d: 0.958, tx: -57.95, ty: -18.4},
						transform: [-57.95, -18.4, 1.089, 0.962, 0.095, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 1.145, b: -0.079, c: -0.2, d: 0.985, tx: -61.2, ty: -19},
						transform: [-61.2, -19, 1.148, 1.005, -0.2, -0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 1.129, b: -0.078, c: -0.287, d: 0.991, tx: -63.2, ty: -18.85},
						transform: [-63.2, -18.85, 1.132, 1.032, -0.282, -0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 1.263, b: -0.087, c: -0.472, d: 1.004, tx: -66.15, ty: -19.15},
						transform: [-66.15, -19.15, 1.266, 1.109, -0.439, -0.069, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 1.299, b: -0.118, c: 0.001, d: 0.969, tx: -61.35, ty: -18.9},
						transform: [-61.35, -18.9, 1.304, 0.969, 0.001, -0.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 1.231, b: -0.112, c: 0.066, d: 0.963, tx: -56.85, ty: -18.85},
						transform: [-56.85, -18.85, 1.236, 0.966, 0.069, -0.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 1.274, b: -0.115, c: -0.038, d: 0.973, tx: -52.15, ty: -18.8},
						transform: [-52.15, -18.8, 1.279, 0.974, -0.039, -0.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_hosepipe_c3_x_f0",
						instancename: "",
						matrix: {a: 1.302, b: -0.076, c: 0.074, d: 0.86, tx: -49.35, ty: -17.05},
						transform: [-49.35, -17.05, 1.305, 0.864, 0.086, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: -0.021, c: -0.04, d: 1.038, tx: -13.4, ty: -50.45},
						transform: [-13.4, -50.45, 0.961, 1.039, -0.039, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.252, 0.3], [0.693, 0.7], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.954, b: 0.116, c: 0.107, d: 1.033, tx: -14.85, ty: -54.7},
						transform: [-14.85, -54.7, 0.961, 1.039, 0.104, 3.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.023, d: 1.038, tx: -12.3, ty: -52.5},
						transform: [-12.3, -52.5, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.951, b: -0.139, c: -0.168, d: 1.025, tx: -7.45, ty: -53.55},
						transform: [-7.45, -53.55, 0.961, 1.039, -0.162, -2.997, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 8,
						to: 10,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.139, c: -0.168, d: 1.024, tx: -6.65, ty: -57.9},
						transform: [-6.65, -57.9, 0.96, 1.038, -0.162, -2.997, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.143, c: -0.172, d: 1.024, tx: -5.6, ty: -63.6},
						transform: [-5.6, -63.6, 0.961, 1.039, -0.166, -2.993, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: -0.046, c: -0.068, d: 1.036, tx: -8.75, ty: -58.75},
						transform: [-8.75, -58.75, 0.961, 1.039, -0.065, -3.094, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.953, b: -0.063, c: -0.073, d: 1.042, tx: -9.95, ty: -54.15},
						transform: [-9.95, -54.15, 0.955, 1.044, -0.07, -3.076, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.953, b: 0.12, c: 0.112, d: 1.033, tx: -12.3, ty: -54},
						transform: [-12.3, -54, 0.961, 1.039, 0.108, 3.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.956, b: 0.09, c: 0.108, d: 1.033, tx: -17.35, ty: -57.3},
						transform: [-17.35, -57.3, 0.961, 1.038, 0.104, 3.047, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_arm_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.173, b: 0.911, c: -0.876, d: -0.257, tx: 6.2, ty: -66.65},
						transform: [6.2, -66.65, 0.928, 0.912, -1.856, 1.758, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.51948], [0.666, 0.8524800000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.602, b: 0.706, c: -0.633, d: -0.657, tx: 2.7, ty: -56.9},
						transform: [2.7, -56.9, 0.928, 0.912, -2.375, 2.277, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.51948], [0.666, 0.8524800000000001], [1, 1]],
						}
					},
					{
						from: 4,
						to: 13,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.264, b: 0.889, c: -0.827, d: -0.405, tx: 11.2, ty: -66.4},
						transform: [11.2, -66.4, 0.928, 0.921, -2.026, 1.859, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.51948], [0.666, 0.8524800000000001], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.384, b: 0.845, c: -0.79, d: -0.457, tx: 6.2, ty: -66.65},
						transform: [6.2, -66.65, 0.928, 0.912, -2.095, 1.997, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_foot",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: 0.53, c: 0.426, d: 0.894, tx: 11.55, ty: -46.05},
						transform: [11.55, -46.05, 1.028, 0.99, 0.445, 2.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: -0.006, b: -0.869, c: 0.806, d: -0.016, tx: 11.65, ty: -41.15},
						transform: [11.65, -41.15, 0.869, 0.806, 1.591, -1.577, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.114, b: -0.757, c: 0.854, d: -0.109, tx: 13, ty: -41.8},
						transform: [13, -41.8, 0.766, 0.861, 1.697, -1.421, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.111, d: 1.028, tx: 10.8, ty: -33.55},
						transform: [10.8, -33.55, 0.907, 1.034, -0.107, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 1.001, b: 0, c: -0.16, d: 0.974, tx: 6.95, ty: -32.25},
						transform: [6.95, -32.25, 1.001, 0.987, -0.162, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.157, d: 1.02, tx: 6.4, ty: -33.35},
						transform: [6.4, -33.35, 0.907, 1.032, -0.153, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.152, d: 0.892, tx: 9.8, ty: -30.35},
						transform: [9.8, -30.35, 0.907, 0.905, -0.168, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.184, d: 0.981, tx: 11, ty: -32.45},
						transform: [11, -32.45, 0.907, 0.999, -0.185, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.124, d: 0.981, tx: 9.6, ty: -32.45},
						transform: [9.6, -32.45, 0.907, 0.989, -0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.157, d: 1.02, tx: 6.4, ty: -33.35},
						transform: [6.4, -33.35, 0.907, 1.032, -0.153, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_leg1_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: 0.53, c: 0.426, d: 0.894, tx: 11.55, ty: -46.05},
						transform: [11.55, -46.05, 1.028, 0.99, 0.445, 2.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: -0.006, b: -0.869, c: 0.806, d: -0.016, tx: 11.65, ty: -41.15},
						transform: [11.65, -41.15, 0.869, 0.806, 1.591, -1.577, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.114, b: -0.757, c: 0.854, d: -0.109, tx: 13, ty: -41.8},
						transform: [13, -41.8, 0.766, 0.861, 1.697, -1.421, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_foreleg",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.134, d: 0.981, tx: -8.3, ty: -32.45},
						transform: [-8.3, -32.45, 0.907, 0.99, 0.136, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.193, d: 1.056, tx: -9.7, ty: -34.2},
						transform: [-9.7, -34.2, 0.907, 1.073, 0.181, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.963, b: 0, c: 0.037, d: 0.87, tx: -6.3, ty: -29.8},
						transform: [-6.3, -29.8, 0.963, 0.871, 0.043, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.963, b: 0, c: 0.037, d: 0.87, tx: -6.8, ty: -29.8},
						transform: [-6.8, -29.8, 0.963, 0.871, 0.043, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.248, b: -0.791, c: -0.887, d: -0.168, tx: -5.7, ty: -35.35},
						transform: [-5.7, -35.35, 0.829, 0.903, -1.758, -1.267, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_run_leg_5_x_f0",
						instancename: "",
						matrix: {a: 0.329, b: -0.761, c: -0.865, d: -0.259, tx: 1.85, ty: -37.85},
						transform: [1.85, -37.85, 0.829, 0.903, -1.862, -1.163, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: -0.959, b: 0.256, c: 0.16, d: 0.974, tx: -3.9, ty: -36.55},
						transform: [-3.9, -36.55, 0.993, 0.987, 0.162, 2.881, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_leg2_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: 0.046, c: 0.004, d: 1.09, tx: -3.7, ty: -35.05},
						transform: [-3.7, -35.05, 0.993, 1.09, 0.003, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.134, d: 0.981, tx: -8.3, ty: -32.45},
						transform: [-8.3, -32.45, 0.907, 0.99, 0.136, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.193, d: 1.056, tx: -9.7, ty: -34.2},
						transform: [-9.7, -34.2, 0.907, 1.073, 0.181, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_skirt",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.217, c: 0.174, d: 1.009, tx: -4.1, ty: -63.45},
						transform: [-4.1, -63.45, 1.011, 1.024, 0.171, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.217, c: 0.174, d: 1.009, tx: -7.1, ty: -65.45},
						transform: [-7.1, -65.45, 1.011, 1.024, 0.171, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.97, b: -0.136, c: 0.172, d: 1.045, tx: -6.15, ty: -57.25},
						transform: [-6.15, -57.25, 0.979, 1.06, 0.163, -0.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.05, b: 0.168, c: -0.154, d: 0.981, tx: 0.5, ty: -57.6},
						transform: [0.5, -57.6, 1.064, 0.993, -0.155, 0.159, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.052, b: 0.168, c: -0.215, d: 0.97, tx: 6.3, ty: -60.6},
						transform: [6.3, -60.6, 1.065, 0.994, -0.218, 0.159, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.065, b: 0.031, c: -0.087, d: 0.99, tx: 3.3, ty: -60.6},
						transform: [3.3, -60.6, 1.065, 0.994, -0.088, 0.029, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.065, b: -0.006, c: -0.047, d: 0.885, tx: -1.7, ty: -54.55},
						transform: [-1.7, -54.55, 1.065, 0.886, -0.053, -0.006, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.217, c: 0.174, d: 1.009, tx: -4.1, ty: -63.45},
						transform: [-4.1, -63.45, 1.011, 1.024, 0.171, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.217, c: 0.174, d: 1.009, tx: -7.1, ty: -65.45},
						transform: [-7.1, -65.45, 1.011, 1.024, 0.171, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_hand_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.709, b: -0.434, c: -0.522, d: -0.851, tx: -19.4, ty: -45.25},
						transform: [-19.4, -45.25, 0.832, 0.998, -2.592, -0.55, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.736, b: -0.388, c: -0.465, d: -0.883, tx: -25.4, ty: -41.65},
						transform: [-25.4, -41.65, 0.832, 0.998, -2.657, -0.485, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.772, b: -0.31, c: -0.372, d: -0.926, tx: -27.2, ty: -37},
						transform: [-27.2, -37, 0.832, 0.998, -2.76, -0.382, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.753, b: -0.352, c: -0.423, d: -0.904, tx: -28.85, ty: -39.9},
						transform: [-28.85, -39.9, 0.832, 0.998, -2.704, -0.438, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.836, b: -0.362, c: -0.397, d: -0.916, tx: -32.7, ty: -40.15},
						transform: [-32.7, -40.15, 0.911, 0.998, -2.733, -0.409, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.822, b: -0.362, c: -0.402, d: -0.914, tx: -28.65, ty: -40.1},
						transform: [-28.65, -40.1, 0.898, 0.998, -2.727, -0.414, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.797, b: -0.306, c: -0.358, d: -0.932, tx: -26.8, ty: -36.25},
						transform: [-26.8, -36.25, 0.854, 0.998, -2.775, -0.366, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.83, b: -0.39, c: -0.425, d: -0.903, tx: -20.4, ty: -41.5},
						transform: [-20.4, -41.5, 0.917, 0.998, -2.702, -0.44, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.81, b: -0.429, c: -0.468, d: -0.882, tx: -18.95, ty: -44.5},
						transform: [-18.95, -44.5, 0.917, 0.998, -2.654, -0.487, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.911, b: 0.175, c: -0.176, d: -0.891, tx: -21.05, ty: -59.9},
						transform: [-21.05, -59.9, 0.928, 0.908, -2.947, 2.951, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.904, b: 0.272, c: -0.1, d: -0.964, tx: -24.65, ty: -65},
						transform: [-24.65, -65, 0.944, 0.969, -3.039, 2.85, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.928, b: -0.018, c: 0.208, d: -0.904, tx: -20.65, ty: -56.95},
						transform: [-20.65, -56.95, 0.928, 0.928, 2.915, -3.122, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.891, b: 0.012, c: 0.391, d: -1.046, tx: -12.85, ty: -63.4},
						transform: [-12.85, -63.4, 0.891, 1.117, 2.784, 3.129, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 10,
						classname: "_anais_anais_arm_6_x_f0",
						instancename: "",
						matrix: {a: -0.915, b: 0.233, c: -0.158, d: -0.88, tx: -10.9, ty: -63.55},
						transform: [-10.9, -63.55, 0.945, 0.894, -2.964, 2.892, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_arm_6_x_f0",
						instancename: "",
						matrix: {a: -0.977, b: 0.059, c: 0.031, d: -0.92, tx: -5.55, ty: -65.35},
						transform: [-5.55, -65.35, 0.979, 0.92, 3.108, 3.081, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.9, b: 0.178, c: 0.089, d: -0.996, tx: -14.15, ty: -65.9},
						transform: [-14.15, -65.9, 0.918, 1, 3.053, 2.946, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -1.007, b: 0.293, c: 0.001, d: -0.876, tx: -20.15, ty: -58.25},
						transform: [-20.15, -58.25, 1.049, 0.876, 3.14, 2.859, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.98, b: 0.452, c: -0.141, d: -0.835, tx: -19.15, ty: -60},
						transform: [-19.15, -60, 1.079, 0.847, -2.974, 2.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0.486], [0.791, 0.9], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: -0.742, b: 0.645, c: -0.385, d: -0.764, tx: -24.35, ty: -62.65},
						transform: [-24.35, -62.65, 0.982, 0.855, -2.675, 2.426, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.469, b: -0.723, c: -0.587, d: -0.423, tx: 15.6, ty: -70.6},
						transform: [15.6, -70.6, 0.862, 0.724, -2.194, -0.995, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: 0.877, b: -0.021, c: 0, d: -0.672, tx: 15.35, ty: -54},
						transform: [15.35, -54, 0.878, 0.672, 3.141, -0.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: 0.86, b: 0.173, c: 0.179, d: -0.79, tx: 16.95, ty: -55.5},
						transform: [16.95, -55.5, 0.878, 0.81, 2.919, 0.198, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: 0.62, b: 0.622, c: 0.587, d: -0.558, tx: 24.95, ty: -64.5},
						transform: [24.95, -64.5, 0.878, 0.81, 2.331, 0.787, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_anais_arm_8_x_f0",
						instancename: "",
						matrix: {a: 0.877, b: 0.037, c: 0.057, d: -0.873, tx: 20.4, ty: -65.6},
						transform: [20.4, -65.6, 0.878, 0.875, 3.076, 0.042, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.642, b: -0.67, c: -0.516, d: -0.713, tx: 18.75, ty: -54.4},
						transform: [18.75, -54.4, 0.928, 0.88, -2.516, -0.807, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
					},
					{
						from: 17,
						to: 17,
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.117, d: 1.018, tx: -8.4, ty: -74.5},
						transform: [-8.4, -74.5, 1, 1.025, 0.114, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.117, d: 1.018, tx: -11.4, ty: -80},
						transform: [-11.4, -80, 1, 1.025, 0.114, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.168], [0.872, 0.832], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -0.997, b: -0.082, c: -0.083, d: 1.022, tx: -1.25, ty: -68.65},
						transform: [-1.25, -68.65, 1, 1.025, -0.081, -3.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -0.98, b: -0.198, c: -0.202, d: 1.005, tx: 3.55, ty: -72},
						transform: [3.55, -72, 1, 1.025, -0.198, -2.942, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -0.996, b: -0.091, c: -0.092, d: 1.021, tx: 8.1, ty: -77.55},
						transform: [8.1, -77.55, 1, 1.025, -0.09, -3.051, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -1, b: 0.021, c: 0.023, d: 1.025, tx: 1.9, ty: -78},
						transform: [1.9, -78, 1, 1.025, 0.023, 3.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -0.998, b: 0.056, c: 0.058, d: 1.023, tx: -3.55, ty: -68.65},
						transform: [-3.55, -68.65, 1, 1.025, 0.057, 3.086, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.117, d: 1.018, tx: -8.65, ty: -76},
						transform: [-8.65, -76, 1, 1.025, 0.114, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_anais_head_mad_x_f15",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.117, d: 1.018, tx: -11.4, ty: -76.5},
						transform: [-11.4, -76.5, 1, 1.025, 0.114, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_band",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.031, d: 1.024, tx: -85.4, ty: -126.9},
						transform: [-85.4, -126.9, 1, 1.025, 0.03, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.996, b: 0.088, c: -0.085, d: 1.021, tx: -87.4, ty: -131.4},
						transform: [-87.4, -131.4, 1, 1.025, -0.083, 0.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.168], [0.872, 0.832], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.959, b: 0.284, c: -0.286, d: 0.984, tx: -66.45, ty: -134.9},
						transform: [-66.45, -134.9, 1, 1.025, -0.283, 0.288, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 10,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.967, b: 0.255, c: -0.186, d: 1.011, tx: -53.15, ty: -143.4},
						transform: [-53.15, -143.4, 1, 1.028, -0.182, 0.258, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.022, d: 1.024, tx: -57.55, ty: -145.25},
						transform: [-57.55, -145.25, 1, 1.025, 0.022, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.991, b: -0.137, c: 0.146, d: 1.014, tx: -69.2, ty: -136.35},
						transform: [-69.2, -136.35, 1, 1.025, 0.143, -0.138, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.032, c: 0.039, d: 1.024, tx: -76.8, ty: -123.55},
						transform: [-76.8, -123.55, 1, 1.025, 0.038, -0.032, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.031, d: 1.024, tx: -85.4, ty: -126.9},
						transform: [-85.4, -126.9, 1, 1.025, 0.03, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.968, b: 0.251, c: -0.252, d: 0.993, tx: -89.4, ty: -129.9},
						transform: [-89.4, -129.9, 1, 1.025, -0.248, 0.254, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.16317], [0.666, 0.49617], [1, 1]],
						}
					},
				]
			},
			{
				name: "pupila",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.043, b: -0.266, c: 0.266, d: 1.043, tx: -58.3, ty: -108.6},
						transform: [-58.3, -108.6, 1.076, 1.076, 0.249, -0.249, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.043, b: -0.266, c: 0.266, d: 1.043, tx: -61.55, ty: -115.35},
						transform: [-61.55, -115.35, 1.076, 1.076, 0.249, -0.249, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.168], [0.872, 0.832], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.075, b: -0.049, c: 0.049, d: 1.075, tx: -43.95, ty: -112.4},
						transform: [-43.95, -112.4, 1.076, 1.076, 0.045, -0.045, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.185, b: 0.21, c: -0.098, d: 0.569, tx: -20.65, ty: -102.55},
						transform: [-20.65, -102.55, 1.203, 0.577, -0.171, 0.176, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.993, b: -0.646, c: 0.456, d: 0.739, tx: -12.05, ty: -109.5},
						transform: [-12.05, -109.5, 1.184, 0.868, 0.553, -0.577, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.01, b: -0.088, c: 0.088, d: 1.01, tx: -4.95, ty: -116.55},
						transform: [-4.95, -116.55, 1.014, 1.014, 0.087, -0.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.60606], [0.666, 0.93906], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.005, b: -0.133, c: 0.133, d: 1.005, tx: -5.4, ty: -118.8},
						transform: [-5.4, -118.8, 1.014, 1.014, 0.131, -0.131, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.266, c: 0.266, d: 0.979, tx: -16.5, ty: -119.85},
						transform: [-16.5, -119.85, 1.014, 1.014, 0.266, -0.266, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.98, b: -0.262, c: 0.262, d: 0.98, tx: -23.4, ty: -109.5},
						transform: [-23.4, -109.5, 1.014, 1.014, 0.262, -0.262, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.96, b: -0.327, c: 0.327, d: 0.96, tx: -30.15, ty: -114.85},
						transform: [-30.15, -114.85, 1.014, 1.014, 0.328, -0.328, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.74], [0.667, 0.983], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.955, b: -0.34, c: 0.34, d: 0.955, tx: -33.3, ty: -116.8},
						transform: [-33.3, -116.8, 1.014, 1.014, 0.342, -0.342, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pupila",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.04, b: -0.065, c: 0.065, d: 1.04, tx: -4.45, ty: -117.55},
						transform: [-4.45, -117.55, 1.042, 1.042, 0.063, -0.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.297, 0.819], [0.604, 0.921], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.04, b: -0.065, c: 0.065, d: 1.04, tx: -7.7, ty: -124.3},
						transform: [-7.7, -124.3, 1.042, 1.042, 0.063, -0.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.236, 0.168], [0.872, 0.832], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.032, b: 0.147, c: -0.147, d: 1.032, tx: 10.6, ty: -110.3},
						transform: [10.6, -110.3, 1.042, 1.042, -0.141, 0.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.22, b: -0.021, c: 0.006, d: 0.625, tx: 31.3, ty: -99.6},
						transform: [31.3, -99.6, 1.22, 0.625, 0.009, -0.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.076, b: -0.551, c: 0.397, d: 0.831, tx: 40.05, ty: -104.2},
						transform: [40.05, -104.2, 1.21, 0.921, 0.446, -0.473, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.037, b: 0.104, c: -0.104, d: 1.037, tx: 46.05, ty: -112.75},
						transform: [46.05, -112.75, 1.042, 1.042, -0.1, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.60606], [0.666, 0.93906], [1, 1]],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.04, b: 0.058, c: -0.058, d: 1.04, tx: 46.25, ty: -117},
						transform: [46.25, -117, 1.042, 1.042, -0.056, 0.056, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.039, b: -0.082, c: 0.082, d: 1.039, tx: 34.3, ty: -124.5},
						transform: [34.3, -124.5, 1.042, 1.042, 0.079, -0.079, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.039, b: -0.078, c: 0.078, d: 1.039, tx: 27.4, ty: -113.85},
						transform: [27.4, -113.85, 1.042, 1.042, 0.075, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 16,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.031, b: -0.147, c: 0.147, d: 1.031, tx: 20.2, ty: -122.5},
						transform: [20.2, -122.5, 1.042, 1.042, 0.142, -0.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.74], [0.667, 0.983], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.029, b: -0.161, c: 0.161, d: 1.029, tx: 16.95, ty: -125.15},
						transform: [16.95, -125.15, 1.042, 1.042, 0.155, -0.155, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_anais_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15, ty: -99},
						transform: [-15, -99, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_anais_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15, ty: -99},
						transform: [-15, -99, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 17,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 4,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 5,
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 14,
						to: 16,
					},
					{
						from: 17,
						to: 17,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_anais_anais_talk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 56,
		labels: {},
		layers: [
			{
				name: "anais_leg",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.891, b: -0.466, c: -0.454, d: 0.913, tx: -39.55, ty: -76.4},
						transform: [-39.55, -76.4, 1.005, 1.02, -0.462, -2.66, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 26,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.891, b: -0.466, c: -0.454, d: 0.913, tx: -39.55, ty: -78.65},
						transform: [-39.55, -78.65, 1.005, 1.02, -0.462, -2.66, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.891, b: -0.466, c: -0.454, d: 0.913, tx: -39.55, ty: -78.65},
						transform: [-39.55, -78.65, 1.005, 1.02, -0.462, -2.66, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.891, b: -0.466, c: -0.454, d: 0.913, tx: -39.55, ty: -76.4},
						transform: [-39.55, -76.4, 1.005, 1.02, -0.462, -2.66, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 32,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.914, b: -0.42, c: -0.458, d: 0.911, tx: -41.8, ty: -74.4},
						transform: [-41.8, -74.4, 1.006, 1.02, -0.466, -2.711, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.468, 0], [0.547, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 54,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.944, b: -0.347, c: -0.386, d: 0.944, tx: -41.8, ty: -74.4},
						transform: [-41.8, -74.4, 1.006, 1.02, -0.388, -2.789, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.914, b: -0.42, c: -0.458, d: 0.911, tx: -41.8, ty: -74.4},
						transform: [-41.8, -74.4, 1.006, 1.02, -0.466, -2.711, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.468, 0], [0.547, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -31.65, ty: -24.2},
						transform: [-31.65, -24.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 28,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.024, d: 1.014, tx: -31.2, ty: -24.7},
						transform: [-31.2, -24.7, 1, 1.014, 0.024, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 30,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.111, d: 1.014, tx: -33.9, ty: -24.7},
						transform: [-33.9, -24.7, 1, 1.02, -0.109, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.667, 0.333], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 0.997, b: 0.022, c: -0.129, d: 1.014, tx: -34.3, ty: -24.35},
						transform: [-34.3, -24.35, 0.997, 1.022, -0.127, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 1.001, b: 0.117, c: -0.166, d: 1.052, tx: -35, ty: -25.4},
						transform: [-35, -25.4, 1.008, 1.065, -0.156, 0.116, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 34,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 1.042, b: 0.09, c: -0.16, d: 1.015, tx: -35.55, ty: -25},
						transform: [-35.55, -25, 1.046, 1.028, -0.156, 0.086, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 35,
						to: 53,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 1.055, b: 0.006, c: -0.122, d: 1.015, tx: -36.3, ty: -24.25},
						transform: [-36.3, -24.25, 1.055, 1.023, -0.119, 0.006, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 1.055, b: 0.006, c: -0.056, d: 1.016, tx: -35, ty: -24.25},
						transform: [-35, -24.25, 1.055, 1.017, -0.055, 0.006, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_hosepipe_floor_x_f0",
						instancename: "",
						matrix: {a: 1.054, b: -0.023, c: 0.041, d: 0.989, tx: -33, ty: -23.6},
						transform: [-33, -23.6, 1.054, 0.99, 0.042, -0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.943, b: -0.168, c: -0.162, d: 0.884, tx: -37.4, ty: -55.65},
						transform: [-37.4, -55.65, 0.958, 0.899, -0.181, -2.965, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 26,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.168, c: -0.136, d: 0.884, tx: -38.75, ty: -57.9},
						transform: [-38.75, -57.9, 0.963, 0.894, -0.153, -2.966, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.168, c: -0.136, d: 0.884, tx: -38.75, ty: -57.9},
						transform: [-38.75, -57.9, 0.963, 0.894, -0.153, -2.966, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.943, b: -0.168, c: -0.162, d: 0.884, tx: -37.4, ty: -55.65},
						transform: [-37.4, -55.65, 0.958, 0.899, -0.181, -2.965, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 33,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.944, b: -0.188, c: -0.155, d: 0.881, tx: -39, ty: -58.75},
						transform: [-39, -58.75, 0.963, 0.894, -0.174, -2.945, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 34,
						to: 54,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.074, c: -0.08, d: 0.889, tx: -39.15, ty: -58.35},
						transform: [-39.15, -58.35, 0.964, 0.893, -0.089, -3.065, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.944, b: -0.188, c: -0.155, d: 0.881, tx: -39, ty: -58.75},
						transform: [-39, -58.75, 0.963, 0.894, -0.174, -2.945, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: -0.005, c: -0.053, d: 1.038, tx: -11.95, ty: -56.5},
						transform: [-11.95, -56.5, 0.961, 1.04, -0.051, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 26,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.023, d: 1.038, tx: -13.3, ty: -58.75},
						transform: [-13.3, -58.75, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.023, d: 1.038, tx: -13.3, ty: -58.75},
						transform: [-13.3, -58.75, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: -0.005, c: -0.053, d: 1.038, tx: -11.95, ty: -56.5},
						transform: [-11.95, -56.5, 0.961, 1.04, -0.051, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 32,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: -0.024, c: -0.044, d: 1.038, tx: -13.5, ty: -59.05},
						transform: [-13.5, -59.05, 0.961, 1.039, -0.043, -3.116, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 33,
						to: 54,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: -0.024, c: -0.044, d: 1.038, tx: -13.75, ty: -60.55},
						transform: [-13.75, -60.55, 0.961, 1.039, -0.043, -3.116, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: -0.024, c: -0.044, d: 1.038, tx: -13.5, ty: -59.05},
						transform: [-13.5, -59.05, 0.961, 1.039, -0.043, -3.116, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_foot",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.118, d: 0.929, tx: 6.5, ty: -31.25},
						transform: [6.5, -31.25, 0.907, 0.937, -0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 26,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.084, d: 0.981, tx: 5.9, ty: -32.45},
						transform: [5.9, -32.45, 0.907, 0.985, -0.085, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.084, d: 0.981, tx: 5.9, ty: -32.45},
						transform: [5.9, -32.45, 0.907, 0.985, -0.085, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.176, 0.382], [0.384, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: -0.118, d: 0.929, tx: 6.5, ty: -31.25},
						transform: [6.5, -31.25, 0.907, 0.937, -0.126, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.176, 0.382], [0.384, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 31,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.063, d: 0.929, tx: 7.5, ty: -31.15},
						transform: [7.5, -31.15, 0.907, 0.931, 0.068, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 32,
						to: 54,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.152, d: 0.981, tx: 8.2, ty: -32.45},
						transform: [8.2, -32.45, 0.907, 0.993, 0.154, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.117, d: 0.95, tx: 9.05, ty: -31.7},
						transform: [9.05, -31.7, 0.907, 0.958, 0.122, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_foreleg",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.003, d: 0.929, tx: -3.65, ty: -31.25},
						transform: [-3.65, -31.25, 0.907, 0.929, 0.003, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 26,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.037, d: 0.981, tx: -4.25, ty: -32.45},
						transform: [-4.25, -32.45, 0.907, 0.982, 0.038, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.037, d: 0.981, tx: -4.25, ty: -32.45},
						transform: [-4.25, -32.45, 0.907, 0.982, 0.038, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.176, 0.382], [0.384, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.003, d: 0.929, tx: -3.65, ty: -31.25},
						transform: [-3.65, -31.25, 0.907, 0.929, 0.003, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.176, 0.382], [0.384, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 31,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.148, d: 0.899, tx: -6.15, ty: -30.5},
						transform: [-6.15, -30.5, 0.907, 0.911, 0.163, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 32,
						to: 54,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.161, d: 0.981, tx: -6.45, ty: -32.45},
						transform: [-6.45, -32.45, 0.907, 0.994, 0.163, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.125, d: 0.95, tx: -5.6, ty: -31.7},
						transform: [-5.6, -31.7, 0.907, 0.958, 0.131, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.833, b: 0.385, c: -0.467, d: 0.704, tx: 14.05, ty: -55.9},
						transform: [14.05, -55.9, 0.917, 0.845, -0.585, 0.433, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 26,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.392, c: -0.446, d: 0.719, tx: 12.7, ty: -57.75},
						transform: [12.7, -57.75, 0.931, 0.846, -0.556, 0.435, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.844, b: 0.392, c: -0.446, d: 0.719, tx: 12.7, ty: -57.75},
						transform: [12.7, -57.75, 0.931, 0.846, -0.556, 0.435, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.833, b: 0.385, c: -0.467, d: 0.704, tx: 14.05, ty: -55.9},
						transform: [14.05, -55.9, 0.917, 0.845, -0.585, 0.433, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 31,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: 0.662, b: 0.694, c: -0.699, d: 0.522, tx: 16.2, ty: -53.05},
						transform: [16.2, -53.05, 0.959, 0.872, -0.929, 0.809, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: 0.875, b: 0.169, c: -0.193, d: 0.737, tx: 12.75, ty: -51.7},
						transform: [12.75, -51.7, 0.892, 0.762, -0.256, 0.191, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 34,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: 0.587, b: 0.638, c: -0.697, d: 0.253, tx: 18.4, ty: -55.45},
						transform: [18.4, -55.45, 0.867, 0.741, -1.222, 0.827, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 35,
						to: 53,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: 0.797, b: 0.4, c: -0.542, d: 0.528, tx: 16.1, ty: -53.35},
						transform: [16.1, -53.35, 0.892, 0.756, -0.799, 0.465, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: 0.875, b: 0.169, c: -0.155, d: 0.64, tx: 10.75, ty: -51.1},
						transform: [10.75, -51.1, 0.892, 0.659, -0.237, 0.191, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: 0.7, b: 0.668, c: -0.616, d: 0.468, tx: 14.85, ty: -52.7},
						transform: [14.85, -52.7, 0.968, 0.773, -0.921, 0.762, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_forearm_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.618, b: 0.387, c: -0.501, d: -0.621, tx: 28.95, ty: -48.55},
						transform: [28.95, -48.55, 0.729, 0.797, -2.463, 2.582, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 26,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.607, b: 0.395, c: -0.518, d: -0.633, tx: 27.8, ty: -50.25},
						transform: [27.8, -50.25, 0.724, 0.818, -2.455, 2.565, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.607, b: 0.395, c: -0.518, d: -0.633, tx: 27.8, ty: -50.25},
						transform: [27.8, -50.25, 0.724, 0.818, -2.455, 2.565, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.618, b: 0.387, c: -0.501, d: -0.621, tx: 28.95, ty: -48.55},
						transform: [28.95, -48.55, 0.729, 0.797, -2.463, 2.582, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 55,
					},
				]
			},
			{
				name: "anais_hand_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.546, b: 0.529, c: -0.706, d: 0.531, tx: 19.25, ty: -39.95},
						transform: [19.25, -39.95, 0.76, 0.883, -0.926, 0.769, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 26,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.561, b: 0.539, c: -0.691, d: 0.542, tx: 18.35, ty: -41.5},
						transform: [18.35, -41.5, 0.779, 0.878, -0.905, 0.765, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.561, b: 0.539, c: -0.691, d: 0.542, tx: 18.35, ty: -41.5},
						transform: [18.35, -41.5, 0.779, 0.878, -0.905, 0.765, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_anais_hand_x",
						instancename: "",
						matrix: {a: 0.546, b: 0.529, c: -0.706, d: 0.531, tx: 19.25, ty: -39.95},
						transform: [19.25, -39.95, 0.76, 0.883, -0.926, 0.769, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 31,
					},
					{
						from: 32,
						to: 54,
					},
					{
						from: 55,
						to: 55,
					},
				]
			},
			{
				name: "anais_skirt",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.029, c: 0.055, d: 0.97, tx: 0.4, ty: -53.25},
						transform: [0.4, -53.25, 0.98, 0.972, 0.057, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 26,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.03, c: 0.083, d: 0.99, tx: -0.9, ty: -55.05},
						transform: [-0.9, -55.05, 0.979, 0.993, 0.084, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.03, c: 0.083, d: 0.99, tx: -0.9, ty: -55.05},
						transform: [-0.9, -55.05, 0.979, 0.993, 0.084, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.029, c: 0.055, d: 0.97, tx: 0.4, ty: -53.25},
						transform: [0.4, -53.25, 0.98, 0.972, 0.057, -0.03, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 31,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.008, c: 0.061, d: 0.992, tx: -0.4, ty: -55.65},
						transform: [-0.4, -55.65, 0.979, 0.993, 0.062, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 32,
						to: 54,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.008, c: 0.061, d: 0.992, tx: -0.65, ty: -57.15},
						transform: [-0.65, -57.15, 0.979, 0.993, 0.062, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.008, c: 0.025, d: 0.96, tx: 1.1, ty: -55.65},
						transform: [1.1, -55.65, 0.979, 0.961, 0.026, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 54,
					},
					{
						from: 55,
						to: 55,
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.777, b: 0.553, c: 0.219, d: 0.655, tx: -16.65, ty: -49.35},
						transform: [-16.65, -49.35, 0.954, 0.69, 0.323, 2.523, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.619, b: 0.829, c: 0.625, d: 0.61, tx: -14.35, ty: -55.15},
						transform: [-14.35, -55.15, 1.034, 0.873, 0.797, 2.212, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.681, b: 0.767, c: 0.724, d: 0.498, tx: -14.7, ty: -55.5},
						transform: [-14.7, -55.5, 1.026, 0.879, 0.968, 2.297, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 28,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.729, b: 0.722, c: 0.6, d: 0.705, tx: -15, ty: -55.9},
						transform: [-15, -55.9, 1.026, 0.926, 0.706, 2.361, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 30,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.681, b: 0.767, c: 0.724, d: 0.498, tx: -14.7, ty: -55.5},
						transform: [-14.7, -55.5, 1.026, 0.879, 0.968, 2.297, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.934, b: 0.426, c: 0.085, d: 0.634, tx: -13.3, ty: -54.55},
						transform: [-13.3, -54.55, 1.026, 0.64, 0.134, 2.714, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.246, b: 1.006, c: -0.788, d: -0.099, tx: -15.85, ty: -63.7},
						transform: [-15.85, -63.7, 1.035, 0.794, -1.695, 1.81, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 34,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.034, b: 0.978, c: -0.924, d: -0.104, tx: -15.45, ty: -59.7},
						transform: [-15.45, -59.7, 0.979, 0.93, -1.683, 1.605, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 35,
						to: 53,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.178, b: 0.962, c: -0.899, d: 0.014, tx: -15.6, ty: -60.5},
						transform: [-15.6, -60.5, 0.978, 0.899, -1.555, 1.753, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.246, b: 1.006, c: -0.788, d: -0.099, tx: -15.85, ty: -63.7},
						transform: [-15.85, -63.7, 1.035, 0.794, -1.695, 1.81, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_anais_arm3_x",
						instancename: "",
						matrix: {a: -0.854, b: 0.418, c: 0.114, d: 0.682, tx: -13.55, ty: -50.85},
						transform: [-13.55, -50.85, 0.951, 0.691, 0.166, 2.686, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_head_mad_x_f4",
						instancename: "",
						matrix: {a: -0.998, b: -0.06, c: -0.06, d: 1.023, tx: 6.85, ty: -68.8},
						transform: [6.85, -68.8, 1, 1.025, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 26,
						classname: "_anais_anais_head_mad_x_f4",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.021, d: 1.025, tx: 6.7, ty: -74.75},
						transform: [6.7, -74.75, 1, 1.025, -0.021, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_anais_head_mad_x_f4",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.021, d: 1.025, tx: 6.7, ty: -74.75},
						transform: [6.7, -74.75, 1, 1.025, -0.021, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_anais_head_mad_x_f4",
						instancename: "",
						matrix: {a: -0.998, b: -0.06, c: -0.06, d: 1.023, tx: 6.1, ty: -71.3},
						transform: [6.1, -71.3, 1, 1.025, -0.059, -3.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 32,
						classname: "_anais_anais_head_mad_x_f4",
						instancename: "",
						matrix: {a: -0.999, b: -0.044, c: -0.044, d: 1.024, tx: 3.55, ty: -72.1},
						transform: [3.55, -72.1, 1, 1.025, -0.043, -3.098, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 33,
						to: 54,
						classname: "_anais_anais_head_mad_x_f4",
						instancename: "",
						matrix: {a: -0.999, b: -0.044, c: -0.044, d: 1.024, tx: 3.3, ty: -73.6},
						transform: [3.3, -73.6, 1, 1.025, -0.043, -3.098, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_anais_head_mad_x_f4",
						instancename: "",
						matrix: {a: -0.999, b: -0.044, c: -0.044, d: 1.024, tx: 3.55, ty: -72.1},
						transform: [3.55, -72.1, 1, 1.025, -0.043, -3.098, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_mouth,talk_f0",
						instancename: "",
						matrix: {a: 0.999, b: 0.038, c: -0.038, d: 0.999, tx: 11.15, ty: -89.6},
						transform: [11.15, -89.6, 1, 1, -0.038, 0.038, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_mouth,talk_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_mouth,talk_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_mouth,talk_f5",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_mouth,talk_f6",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_anais_mouth,talk_f7",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_anais_mouth,talk_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_anais_mouth,talk_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_anais_mouth,talk_f10",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_anais_mouth,talk_f11",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_anais_mouth,talk_f12",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_anais_mouth,talk_f13",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_anais_mouth,talk_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_anais_mouth,talk_f15",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_anais_mouth,talk_f16",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_mouth,talk_f17",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_anais_mouth,talk_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_anais_mouth,talk_f19",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_anais_mouth,talk_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_anais_mouth,talk_f21",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_anais_mouth,talk_f22",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_anais_mouth,talk_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_anais_mouth,talk_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 25,
						classname: "_anais_mouth,talk_f25",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_anais_mouth,talk_f26",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_mouth,talk_f11",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.7, ty: -95.7},
						transform: [10.7, -95.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_mouth,talk_f13",
						instancename: "",
						matrix: {a: 0.999, b: 0.038, c: -0.038, d: 0.999, tx: 10.9, ty: -92.1},
						transform: [10.9, -92.1, 1, 1, -0.038, 0.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 30,
						classname: "_anais_mouth,talk_f14",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -93.35},
						transform: [7.7, -93.35, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 31,
						to: 32,
						classname: "_anais_mouth,talk_f15",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: 7.7, ty: -94.05},
						transform: [7.7, -94.05, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 33,
						to: 33,
						classname: "_anais_mouth,talk_f17",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 34,
						to: 34,
						classname: "_anais_mouth,talk_f18",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 35,
						to: 35,
						classname: "_anais_mouth,talk_f19",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 36,
						classname: "_anais_mouth,talk_f20",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 37,
						classname: "_anais_mouth,talk_f21",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_mouth,talk_f22",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 39,
						classname: "_anais_mouth,talk_f23",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 40,
						classname: "_anais_mouth,talk_f24",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 41,
						classname: "_anais_mouth,talk_f25",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 42,
						to: 42,
						classname: "_anais_mouth,talk_f26",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 43,
						to: 43,
						classname: "_anais_mouth,talk_f27",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 44,
						to: 44,
						classname: "_anais_mouth,talk_f0",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 45,
						to: 45,
						classname: "_anais_mouth,talk_f1",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 46,
						classname: "_anais_mouth,talk_f2",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 47,
						to: 47,
						classname: "_anais_mouth,talk_f3",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 48,
						classname: "_anais_mouth,talk_f4",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 49,
						to: 49,
						classname: "_anais_mouth,talk_f5",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 50,
						to: 50,
						classname: "_anais_mouth,talk_f6",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 51,
						to: 51,
						classname: "_anais_mouth,talk_f7",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 52,
						classname: "_anais_mouth,talk_f8",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 53,
						to: 53,
						classname: "_anais_mouth,talk_f9",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_mouth,talk_f10",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -94.85},
						transform: [7.7, -94.85, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_mouth,talk_f14",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.007, d: 1, tx: 7.7, ty: -93.35},
						transform: [7.7, -93.35, 1, 1, -0.007, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_band",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.989, b: 0.148, c: -0.146, d: 1.014, tx: -60.45, ty: -130.2},
						transform: [-60.45, -130.2, 1, 1.025, -0.143, 0.149, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 3,
						to: 26,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.11, c: -0.107, d: 1.019, tx: -62.9, ty: -133.55},
						transform: [-62.9, -133.55, 1, 1.025, -0.105, 0.11, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 28,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.11, c: -0.107, d: 1.019, tx: -62.9, ty: -133.55},
						transform: [-62.9, -133.55, 1, 1.025, -0.105, 0.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 29,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.989, b: 0.148, c: -0.146, d: 1.014, tx: -61.2, ty: -132.7},
						transform: [-61.2, -132.7, 1, 1.025, -0.143, 0.149, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 32,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.992, b: 0.132, c: -0.13, d: 1.016, tx: -64.75, ty: -132.4},
						transform: [-64.75, -132.4, 1, 1.025, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 33,
						to: 54,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.992, b: 0.132, c: -0.13, d: 1.016, tx: -65, ty: -133.9},
						transform: [-65, -133.9, 1, 1.025, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.992, b: 0.132, c: -0.13, d: 1.016, tx: -64.75, ty: -132.4},
						transform: [-64.75, -132.4, 1, 1.025, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.08, b: -0.995, c: -0.995, d: -0.08, tx: -18.35, ty: -78.7},
						transform: [-18.35, -78.7, 0.998, 0.998, -1.651, -1.49, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.171, b: -0.984, c: -0.984, d: 0.171, tx: -35.3, ty: -78.6},
						transform: [-35.3, -78.6, 0.998, 0.998, -1.399, -1.743, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.256, b: -0.965, c: -0.965, d: 0.256, tx: -41.1, ty: -76.8},
						transform: [-41.1, -76.8, 0.998, 0.998, -1.312, -1.83, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 28,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.218, b: -0.974, c: -0.974, d: 0.218, tx: -38.35, ty: -77.2},
						transform: [-38.35, -77.2, 0.998, 0.998, -1.35, -1.791, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 30,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: -0.136, b: -0.989, c: -0.989, d: 0.136, tx: -36.9, ty: -78.25},
						transform: [-36.9, -78.25, 0.998, 0.998, -1.434, -1.708, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.191, b: -0.98, c: -0.98, d: -0.191, tx: -15.8, ty: -79.15},
						transform: [-15.8, -79.15, 0.998, 0.998, -1.763, -1.379, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.644, b: -0.763, c: -0.763, d: -0.644, tx: 16.75, ty: -64.45},
						transform: [16.75, -64.45, 0.998, 0.998, -2.271, -0.87, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 34,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.804, b: -0.593, c: -0.593, d: -0.804, tx: 26, ty: -52.7},
						transform: [26, -52.7, 0.998, 0.998, -2.506, -0.635, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 35,
						to: 53,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.76, b: -0.647, c: -0.647, d: -0.76, tx: 22.5, ty: -56.35},
						transform: [22.5, -56.35, 0.998, 0.998, -2.437, -0.705, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.644, b: -0.763, c: -0.763, d: -0.644, tx: 16.75, ty: -64.45},
						transform: [16.75, -64.45, 0.998, 0.998, -2.271, -0.87, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.102, b: -0.993, c: -0.993, d: -0.102, tx: -16.8, ty: -78.45},
						transform: [-16.8, -78.45, 0.998, 0.998, -1.673, -1.469, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 31,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: -0.658, b: -0.646, c: 0.724, d: -0.69, tx: 37.95, ty: -51.75},
						transform: [37.95, -51.75, 0.922, 1, 2.332, -2.365, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 32,
						to: 32,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: -0.809, b: -0.587, c: 0.587, d: -0.809, tx: 28.55, ty: -59.95},
						transform: [28.55, -59.95, 1, 1, 2.514, -2.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 34,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: -0.6, b: -0.8, c: 0.8, d: -0.6, tx: 38.55, ty: -51},
						transform: [38.55, -51, 1, 1, 2.214, -2.214, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 35,
						to: 53,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: -0.693, b: -0.721, c: 0.721, d: -0.693, tx: 36.3, ty: -55.75},
						transform: [36.3, -55.75, 1, 1, 2.336, -2.336, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: -0.809, b: -0.587, c: 0.587, d: -0.809, tx: 26.3, ty: -57.7},
						transform: [26.3, -57.7, 1, 1, 2.514, -2.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: 0.996, b: -0.086, c: 0.169, d: 0.891, tx: 32.55, ty: -50.25},
						transform: [32.55, -50.25, 1, 0.907, 0.187, -0.086, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: 0.856, b: -0.451, c: 0.488, d: 0.91, tx: -30.7, ty: -51.85},
						transform: [-30.7, -51.85, 0.968, 1.033, 0.492, -0.485, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.728, b: -0.832, c: 0.586, d: 1.122, tx: -40, ty: -51.5},
						transform: [-40, -51.5, 1.106, 1.266, 0.481, -0.852, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 4,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.779, b: -0.753, c: 0.556, d: 1.137, tx: -44.1, ty: -50.6},
						transform: [-44.1, -50.6, 1.084, 1.266, 0.455, -0.768, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 28,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.876, b: -0.637, c: 0.393, d: 1.203, tx: -42.8, ty: -52.6},
						transform: [-42.8, -52.6, 1.084, 1.266, 0.316, -0.629, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 30,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.865, b: -0.652, c: 0.414, d: 1.197, tx: -43.05, ty: -52.55},
						transform: [-43.05, -52.55, 1.084, 1.266, 0.333, -0.646, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 1.044, b: -0.292, c: -0.051, d: 1.265, tx: -28.8, ty: -62.05},
						transform: [-28.8, -62.05, 1.084, 1.266, -0.04, -0.273, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: 0.967, b: -0.048, c: 0.059, d: 1.031, tx: -7.1, ty: -47.8},
						transform: [-7.1, -47.8, 0.968, 1.033, 0.057, -0.05, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 34,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: 0.966, b: 0.061, c: -0.058, d: 1.031, tx: -0.8, ty: -42.85},
						transform: [-0.8, -42.85, 0.968, 1.033, -0.056, 0.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 35,
						to: 53,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: 0.959, b: 0.133, c: -0.134, d: 1.024, tx: -3.05, ty: -46.55},
						transform: [-3.05, -46.55, 0.968, 1.033, -0.13, 0.138, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 54,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: 0.943, b: -0.219, c: 0.241, d: 1.005, tx: -7.15, ty: -47.8},
						transform: [-7.15, -47.8, 0.968, 1.033, 0.235, -0.228, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_anais_anais_hand2_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.305, c: 0.34, d: 0.978, tx: -27.1, ty: -54.35},
						transform: [-27.1, -54.35, 0.966, 1.036, 0.335, -0.321, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_anais_anais_idle_explore": {
		type: "movieclip",
		fps: 30,
		totalFrames: 105,
		labels: {loop: {from:8, to:104}, },
		layers: [
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_hosepipe_u4_x_f0",
						instancename: "",
						matrix: {a: 1.035, b: -0.026, c: 0, d: 0.912, tx: -46.6, ty: -23.25},
						transform: [-46.6, -23.25, 1.035, 0.912, 0, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_hosepipe_u4_x_f0",
						instancename: "",
						matrix: {a: 1.122, b: -0.054, c: 0, d: 0.772, tx: -49.35, ty: -21},
						transform: [-49.35, -21, 1.123, 0.772, 0, -0.048, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -46.55, ty: -24.5},
						transform: [-46.55, -24.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: -0.019, c: 0.072, d: 0.826, tx: -47.7, ty: -21.85},
						transform: [-47.7, -21.85, 0.999, 0.83, 0.087, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.015, b: -0.02, c: -0.002, d: 0.828, tx: -45.95, ty: -21.85},
						transform: [-45.95, -21.85, 1.015, 0.828, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 22,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.049, b: -0.02, c: -0.002, d: 0.828, tx: -44.8, ty: -21.85},
						transform: [-44.8, -21.85, 1.049, 0.828, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 37,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.007, b: -0.019, c: -0.002, d: 0.864, tx: -46.2, ty: -22.45},
						transform: [-46.2, -22.45, 1.007, 0.864, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.599, 0], [0.483, 0.92], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.049, b: -0.02, c: -0.002, d: 0.828, tx: -44.8, ty: -21.85},
						transform: [-44.8, -21.85, 1.049, 0.828, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 53,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.049, b: -0.02, c: -0.002, d: 0.828, tx: -44.8, ty: -21.85},
						transform: [-44.8, -21.85, 1.049, 0.828, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 68,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.007, b: -0.019, c: -0.002, d: 0.864, tx: -46.2, ty: -22.45},
						transform: [-46.2, -22.45, 1.007, 0.864, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.599, 0], [0.483, 0.92], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.049, b: -0.02, c: -0.002, d: 0.828, tx: -44.8, ty: -21.85},
						transform: [-44.8, -21.85, 1.049, 0.828, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 84,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.049, b: -0.02, c: -0.002, d: 0.828, tx: -44.8, ty: -21.85},
						transform: [-44.8, -21.85, 1.049, 0.828, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 85,
						to: 103,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.007, b: -0.019, c: -0.002, d: 0.864, tx: -46.2, ty: -22.45},
						transform: [-46.2, -22.45, 1.007, 0.864, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.599, 0], [0.483, 0.92], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_hosepipe_u4b_x_f0",
						instancename: "",
						matrix: {a: 1.049, b: -0.02, c: -0.002, d: 0.828, tx: -44.8, ty: -21.85},
						transform: [-44.8, -21.85, 1.049, 0.828, -0.002, -0.019, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_leg",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: -0.52, c: -0.413, d: 0.873, tx: -34.3, ty: -81.05},
						transform: [-34.3, -81.05, 1.153, 0.966, -0.442, -2.673, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.931, b: -0.378, c: -0.413, d: 0.986, tx: -41.85, ty: -76.1},
						transform: [-41.85, -76.1, 1.005, 1.069, -0.397, -2.756, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.364, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 22,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.897, b: -0.454, c: -0.52, d: 0.88, tx: -40.95, ty: -77.95},
						transform: [-40.95, -77.95, 1.005, 1.022, -0.533, -2.673, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.346, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 37,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.924, b: -0.396, c: -0.402, d: 0.937, tx: -43.4, ty: -79.05},
						transform: [-43.4, -79.05, 1.005, 1.02, -0.405, -2.737, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.527, 0], [0.379, 0.938], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.896, b: -0.453, c: -0.519, d: 0.879, tx: -41.05, ty: -77.9},
						transform: [-41.05, -77.9, 1.004, 1.02, -0.533, -2.674, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.659], [0.653, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 53,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.897, b: -0.454, c: -0.52, d: 0.88, tx: -40.95, ty: -77.95},
						transform: [-40.95, -77.95, 1.005, 1.022, -0.533, -2.673, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.346, 1], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 68,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.924, b: -0.396, c: -0.402, d: 0.937, tx: -43.4, ty: -79.05},
						transform: [-43.4, -79.05, 1.005, 1.02, -0.405, -2.737, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.527, 0], [0.379, 0.938], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.896, b: -0.453, c: -0.519, d: 0.879, tx: -41.05, ty: -77.9},
						transform: [-41.05, -77.9, 1.004, 1.02, -0.533, -2.674, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.659], [0.653, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 84,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.897, b: -0.454, c: -0.52, d: 0.88, tx: -40.95, ty: -77.95},
						transform: [-40.95, -77.95, 1.005, 1.022, -0.533, -2.673, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.346, 1], [1, 1], ],
						}
					},
					{
						from: 85,
						to: 103,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.924, b: -0.396, c: -0.402, d: 0.937, tx: -43.4, ty: -79.05},
						transform: [-43.4, -79.05, 1.005, 1.02, -0.405, -2.737, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.511, 0], [0.346, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_ear_x_f0",
						instancename: "",
						matrix: {a: -0.896, b: -0.452, c: -0.516, d: 0.88, tx: -40.9, ty: -77.9},
						transform: [-40.9, -77.9, 1.004, 1.02, -0.53, -2.674, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.314, 0.655], [0.647, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.947, b: -0.168, c: -0.136, d: 0.883, tx: -38.45, ty: -61.75},
						transform: [-38.45, -61.75, 0.962, 0.894, -0.153, -2.967, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.947, b: -0.168, c: -0.136, d: 0.883, tx: -36.45, ty: -54.75},
						transform: [-36.45, -54.75, 0.962, 0.894, -0.153, -2.967, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.183, 0.791], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.947, b: -0.168, c: -0.136, d: 0.883, tx: -39.3, ty: -60.35},
						transform: [-39.3, -60.35, 0.962, 0.894, -0.153, -2.967, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 21,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.169, c: -0.137, d: 0.884, tx: -40.2, ty: -57.3},
						transform: [-40.2, -57.3, 0.963, 0.894, -0.154, -2.965, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 37,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.141, c: -0.122, d: 0.888, tx: -40.2, ty: -60.45},
						transform: [-40.2, -60.45, 0.961, 0.896, -0.137, -2.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.599, 0], [0.483, 0.92], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.947, b: -0.168, c: -0.136, d: 0.884, tx: -40.2, ty: -57.25},
						transform: [-40.2, -57.25, 0.962, 0.894, -0.153, -2.967, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.318, 0.567], [0.651, 0.906], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 52,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.169, c: -0.137, d: 0.884, tx: -40.2, ty: -57.3},
						transform: [-40.2, -57.3, 0.963, 0.894, -0.154, -2.965, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 68,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.141, c: -0.122, d: 0.888, tx: -40.2, ty: -60.45},
						transform: [-40.2, -60.45, 0.961, 0.896, -0.137, -2.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.599, 0], [0.483, 0.92], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.947, b: -0.168, c: -0.136, d: 0.884, tx: -40.2, ty: -57.25},
						transform: [-40.2, -57.25, 0.962, 0.894, -0.153, -2.967, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.318, 0.567], [0.651, 0.906], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 83,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.169, c: -0.137, d: 0.884, tx: -40.2, ty: -57.3},
						transform: [-40.2, -57.3, 0.963, 0.894, -0.154, -2.965, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 84,
						to: 103,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.141, c: -0.122, d: 0.888, tx: -40.2, ty: -60.45},
						transform: [-40.2, -60.45, 0.961, 0.896, -0.137, -2.994, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_hose_1_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.169, c: -0.137, d: 0.884, tx: -40.2, ty: -57.3},
						transform: [-40.2, -57.3, 0.963, 0.894, -0.154, -2.965, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "backpack",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.004, c: -0.023, d: 1.038, tx: -15.1, ty: -62.35},
						transform: [-15.1, -62.35, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.122, 0.582], [0.558, 0.864], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 3,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.004, c: -0.023, d: 1.038, tx: -13.3, ty: -56.15},
						transform: [-13.3, -56.15, 0.961, 1.038, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.413, 1], [0.831, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.004, c: -0.023, d: 1.038, tx: -13.1, ty: -55.35},
						transform: [-13.1, -55.35, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.183, 0.791], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.004, c: -0.023, d: 1.038, tx: -16.3, ty: -58.35},
						transform: [-16.3, -58.35, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 21,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.024, d: 1.038, tx: -16.85, ty: -57.85},
						transform: [-16.85, -57.85, 0.961, 1.039, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 37,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: 0.023, c: -0.006, d: 1.039, tx: -16.85, ty: -61.7},
						transform: [-16.85, -61.7, 0.961, 1.039, -0.006, 3.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.599, 0], [0.483, 0.92], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.004, c: -0.023, d: 1.038, tx: -16.8, ty: -57.85},
						transform: [-16.8, -57.85, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.318, 0.567], [0.651, 0.906], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 52,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.024, d: 1.038, tx: -16.85, ty: -57.85},
						transform: [-16.85, -57.85, 0.961, 1.039, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 68,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: 0.023, c: -0.006, d: 1.039, tx: -16.85, ty: -61.7},
						transform: [-16.85, -61.7, 0.961, 1.039, -0.006, 3.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.599, 0], [0.483, 0.92], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.004, c: -0.023, d: 1.038, tx: -16.8, ty: -57.85},
						transform: [-16.8, -57.85, 0.961, 1.039, -0.022, -3.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.318, 0.567], [0.651, 0.906], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 83,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.024, d: 1.038, tx: -16.85, ty: -57.85},
						transform: [-16.85, -57.85, 0.961, 1.039, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 84,
						to: 103,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: 0.023, c: -0.006, d: 1.039, tx: -16.85, ty: -61.7},
						transform: [-16.85, -61.7, 0.961, 1.039, -0.006, 3.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.585, 0], [0.445, 0.986], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.005, c: -0.024, d: 1.038, tx: -16.85, ty: -57.85},
						transform: [-16.85, -57.85, 0.961, 1.039, -0.023, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_foot",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.921, b: 0, c: 0.167, d: 1.038, tx: 7.35, ty: -33.8},
						transform: [7.35, -33.8, 0.921, 1.051, 0.159, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.967, b: 0, c: 0.086, d: 0.875, tx: 4.15, ty: -29.9},
						transform: [4.15, -29.9, 0.967, 0.879, 0.097, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.12, d: 1.007, tx: 4.75, ty: -33.1},
						transform: [4.75, -33.1, 0.907, 1.014, 0.119, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 20,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.136, d: 0.981, tx: 4.5, ty: -32.45},
						transform: [4.5, -32.45, 0.907, 0.991, 0.137, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 37,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.149, d: 1.076, tx: 4.2, ty: -34.7},
						transform: [4.2, -34.7, 0.907, 1.086, 0.137, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.134, d: 0.981, tx: 4.5, ty: -32.45},
						transform: [4.5, -32.45, 0.907, 0.99, 0.136, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 51,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.136, d: 0.981, tx: 4.5, ty: -32.45},
						transform: [4.5, -32.45, 0.907, 0.991, 0.137, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 68,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.149, d: 1.076, tx: 4.2, ty: -34.7},
						transform: [4.2, -34.7, 0.907, 1.086, 0.137, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.134, d: 0.981, tx: 4.5, ty: -32.45},
						transform: [4.5, -32.45, 0.907, 0.99, 0.136, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 82,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.136, d: 0.981, tx: 4.5, ty: -32.45},
						transform: [4.5, -32.45, 0.907, 0.991, 0.137, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 103,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.149, d: 1.076, tx: 4.2, ty: -34.7},
						transform: [4.2, -34.7, 0.907, 1.086, 0.137, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_leg3_x_f0",
						instancename: "",
						matrix: {a: 0.907, b: 0, c: 0.136, d: 0.981, tx: 4.5, ty: -32.45},
						transform: [4.5, -32.45, 0.907, 0.991, 0.137, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.176, 0.382], [0.384, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_foreleg",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.916, b: 0, c: -0.005, d: 1.023, tx: -10.35, ty: -33.4},
						transform: [-10.35, -33.4, 0.916, 1.023, -0.005, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.945, b: 0, c: 0.051, d: 0.887, tx: -11.4, ty: -30.2},
						transform: [-11.4, -30.2, 0.945, 0.888, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.036, d: 1.002, tx: -11.8, ty: -32.85},
						transform: [-11.8, -32.85, 0.907, 1.002, 0.035, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 20,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.056, d: 0.981, tx: -12.2, ty: -32.45},
						transform: [-12.2, -32.45, 0.907, 0.983, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 37,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.06, d: 1.053, tx: -12.3, ty: -34.15},
						transform: [-12.3, -34.15, 0.907, 1.055, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.056, d: 0.981, tx: -12.25, ty: -32.45},
						transform: [-12.25, -32.45, 0.907, 0.983, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 51,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.056, d: 0.981, tx: -12.2, ty: -32.45},
						transform: [-12.2, -32.45, 0.907, 0.983, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 68,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.06, d: 1.053, tx: -12.3, ty: -34.15},
						transform: [-12.3, -34.15, 0.907, 1.055, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.056, d: 0.981, tx: -12.25, ty: -32.45},
						transform: [-12.25, -32.45, 0.907, 0.983, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 82,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.056, d: 0.981, tx: -12.2, ty: -32.45},
						transform: [-12.2, -32.45, 0.907, 0.983, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 103,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.06, d: 1.053, tx: -12.3, ty: -34.15},
						transform: [-12.3, -34.15, 0.907, 1.055, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_leg5_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0, c: 0.056, d: 0.981, tx: -12.2, ty: -32.45},
						transform: [-12.2, -32.45, 0.907, 0.983, 0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.176, 0.382], [0.384, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_arm_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.752, b: 0.568, c: -0.506, d: 0.617, tx: 8.65, ty: -53.6},
						transform: [8.65, -53.6, 0.942, 0.798, -0.686, 0.647, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.712, b: 0.65, c: -0.613, d: 0.538, tx: 12.1, ty: -51.45},
						transform: [12.1, -51.45, 0.964, 0.816, -0.85, 0.74, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.805, b: 0.534, c: -0.494, d: 0.63, tx: 10.25, ty: -56.6},
						transform: [10.25, -56.6, 0.966, 0.801, -0.665, 0.586, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 20,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.819, b: 0.531, c: -0.504, d: 0.627, tx: 10.5, ty: -55.5},
						transform: [10.5, -55.5, 0.976, 0.805, -0.677, 0.575, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 37,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.667, b: 0.713, c: -0.641, d: 0.487, tx: 10.95, ty: -62.5},
						transform: [10.95, -62.5, 0.976, 0.805, -0.921, 0.819, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.819, b: 0.529, c: -0.504, d: 0.626, tx: 10.5, ty: -55.45},
						transform: [10.5, -55.45, 0.975, 0.803, -0.678, 0.574, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 51,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.819, b: 0.531, c: -0.504, d: 0.627, tx: 10.5, ty: -55.5},
						transform: [10.5, -55.5, 0.976, 0.805, -0.677, 0.575, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 68,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.667, b: 0.713, c: -0.641, d: 0.487, tx: 10.95, ty: -62.5},
						transform: [10.95, -62.5, 0.976, 0.805, -0.921, 0.819, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.819, b: 0.529, c: -0.504, d: 0.626, tx: 10.5, ty: -55.45},
						transform: [10.5, -55.45, 0.975, 0.803, -0.678, 0.574, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 82,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.819, b: 0.531, c: -0.504, d: 0.627, tx: 10.5, ty: -55.5},
						transform: [10.5, -55.5, 0.976, 0.805, -0.677, 0.575, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 103,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.667, b: 0.713, c: -0.641, d: 0.487, tx: 10.95, ty: -62.5},
						transform: [10.95, -62.5, 0.976, 0.805, -0.921, 0.819, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_anais_arm_x",
						instancename: "",
						matrix: {a: 0.819, b: 0.531, c: -0.504, d: 0.627, tx: 10.5, ty: -55.5},
						transform: [10.5, -55.5, 0.976, 0.805, -0.677, 0.575, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_skirt",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.978, b: -0.056, c: 0.12, d: 1.052, tx: -5.7, ty: -57.85},
						transform: [-5.7, -57.85, 0.98, 1.059, 0.114, -0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 1.048, b: -0.033, c: 0.068, d: 0.921, tx: -5.1, ty: -51.45},
						transform: [-5.1, -51.45, 1.049, 0.923, 0.074, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.972, b: -0.06, c: 0.1, d: 1.026, tx: -7.2, ty: -58.7},
						transform: [-7.2, -58.7, 0.974, 1.03, 0.097, -0.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 20,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.06, c: 0.091, d: 0.988, tx: -7.7, ty: -54.6},
						transform: [-7.7, -54.6, 0.979, 0.992, 0.092, -0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 37,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.973, b: -0.08, c: 0.142, d: 1.052, tx: -9.2, ty: -59.75},
						transform: [-9.2, -59.75, 0.977, 1.062, 0.134, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.06, c: 0.091, d: 0.988, tx: -7.75, ty: -54.55},
						transform: [-7.75, -54.55, 0.979, 0.992, 0.092, -0.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 51,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.06, c: 0.091, d: 0.988, tx: -7.7, ty: -54.6},
						transform: [-7.7, -54.6, 0.979, 0.992, 0.092, -0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 68,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.973, b: -0.08, c: 0.142, d: 1.052, tx: -9.2, ty: -59.75},
						transform: [-9.2, -59.75, 0.977, 1.062, 0.134, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.06, c: 0.091, d: 0.988, tx: -7.75, ty: -54.55},
						transform: [-7.75, -54.55, 0.979, 0.992, 0.092, -0.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 82,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.06, c: 0.091, d: 0.988, tx: -7.7, ty: -54.6},
						transform: [-7.7, -54.6, 0.979, 0.992, 0.092, -0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 103,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.973, b: -0.08, c: 0.142, d: 1.052, tx: -9.2, ty: -59.75},
						transform: [-9.2, -59.75, 0.977, 1.062, 0.134, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_body3_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: -0.06, c: 0.091, d: 0.988, tx: -7.7, ty: -54.6},
						transform: [-7.7, -54.6, 0.979, 0.992, 0.092, -0.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_forearm_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.707, b: -0.022, c: -0.154, d: -0.808, tx: 22.1, ty: -43.1},
						transform: [22.1, -43.1, 0.707, 0.823, -2.953, -3.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.737, b: -0.114, c: -0.055, d: -0.808, tx: 25.15, ty: -40.1},
						transform: [25.15, -40.1, 0.745, 0.81, -3.074, -2.988, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.734, b: 0, c: -0.198, d: -0.793, tx: 24.6, ty: -46.55},
						transform: [24.6, -46.55, 0.734, 0.817, -2.897, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 20,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.745, b: 0.002, c: -0.202, d: -0.789, tx: 25.05, ty: -45.5},
						transform: [25.05, -45.5, 0.745, 0.815, -2.891, 3.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 37,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.691, b: -0.281, c: 0.112, d: -0.807, tx: 22.55, ty: -49.25},
						transform: [22.55, -49.25, 0.745, 0.815, 3.004, -2.756, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.745, b: 0, c: -0.201, d: -0.789, tx: 25.1, ty: -45.45},
						transform: [25.1, -45.45, 0.745, 0.814, -2.892, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 51,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.745, b: 0.002, c: -0.202, d: -0.789, tx: 25.05, ty: -45.5},
						transform: [25.05, -45.5, 0.745, 0.815, -2.891, 3.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 68,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.691, b: -0.281, c: 0.112, d: -0.807, tx: 22.55, ty: -49.25},
						transform: [22.55, -49.25, 0.745, 0.815, 3.004, -2.756, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.745, b: 0, c: -0.201, d: -0.789, tx: 25.1, ty: -45.45},
						transform: [25.1, -45.45, 0.745, 0.814, -2.892, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 82,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.745, b: 0.002, c: -0.202, d: -0.789, tx: 25.05, ty: -45.5},
						transform: [25.05, -45.5, 0.745, 0.815, -2.891, 3.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 103,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.691, b: -0.281, c: 0.112, d: -0.807, tx: 22.55, ty: -49.25},
						transform: [22.55, -49.25, 0.745, 0.815, 3.004, -2.756, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_anais_forearm_x",
						instancename: "",
						matrix: {a: -0.745, b: 0.002, c: -0.202, d: -0.789, tx: 25.05, ty: -45.5},
						transform: [25.05, -45.5, 0.745, 0.815, -2.891, 3.139, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "tube_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.931, b: -0.226, c: 0.235, d: 0.97, tx: -7.1, ty: -37.9},
						transform: [-7.1, -37.9, 0.958, 0.998, 0.238, -0.238, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.946, b: -0.265, c: 0.27, d: 0.961, tx: -9.35, ty: -33.55},
						transform: [-9.35, -33.55, 0.983, 0.998, 0.273, -0.273, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.927, b: -0.326, c: 0.331, d: 0.942, tx: -11.15, ty: -37.8},
						transform: [-11.15, -37.8, 0.983, 0.998, 0.338, -0.338, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 20,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.935, b: -0.302, c: 0.307, d: 0.95, tx: -10.75, ty: -36},
						transform: [-10.75, -36, 0.983, 0.998, 0.312, -0.312, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 37,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.896, b: -0.402, c: 0.409, d: 0.911, tx: -14.25, ty: -42.75},
						transform: [-14.25, -42.75, 0.983, 0.998, 0.422, -0.422, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.36, 0], [0.288, 0.905], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.935, b: -0.302, c: 0.307, d: 0.95, tx: -10.75, ty: -36},
						transform: [-10.75, -36, 0.983, 0.998, 0.312, -0.312, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.323, 0.443], [0.656, 0.779], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 51,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.935, b: -0.302, c: 0.307, d: 0.95, tx: -10.75, ty: -36},
						transform: [-10.75, -36, 0.983, 0.998, 0.312, -0.312, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 68,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.896, b: -0.402, c: 0.409, d: 0.911, tx: -14.25, ty: -42.75},
						transform: [-14.25, -42.75, 0.983, 0.998, 0.422, -0.422, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.935, b: -0.302, c: 0.307, d: 0.95, tx: -10.75, ty: -36},
						transform: [-10.75, -36, 0.983, 0.998, 0.312, -0.312, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 82,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.935, b: -0.302, c: 0.307, d: 0.95, tx: -10.75, ty: -36},
						transform: [-10.75, -36, 0.983, 0.998, 0.312, -0.312, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 103,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.896, b: -0.402, c: 0.409, d: 0.911, tx: -14.25, ty: -42.75},
						transform: [-14.25, -42.75, 0.983, 0.998, 0.422, -0.422, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 0.935, b: -0.302, c: 0.307, d: 0.95, tx: -10.75, ty: -36},
						transform: [-10.75, -36, 0.983, 0.998, 0.312, -0.312, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.979, b: -0.2, c: -0.201, d: 1.004, tx: 2.9, ty: -68.45},
						transform: [2.9, -68.45, 0.999, 1.024, -0.197, -2.941, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.258, 0.75], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.967, b: -0.255, c: -0.26, d: 0.991, tx: 2, ty: -64.1},
						transform: [2, -64.1, 1, 1.025, -0.256, -2.884, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.967, b: -0.255, c: -0.26, d: 0.991, tx: 2, ty: -72.05},
						transform: [2, -72.05, 1, 1.025, -0.256, -2.884, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 21,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.967, b: -0.255, c: -0.26, d: 0.991, tx: 2, ty: -69.3},
						transform: [2, -69.3, 1, 1.025, -0.256, -2.884, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 37,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.988, b: -0.157, c: -0.16, d: 1.012, tx: 1.75, ty: -78.35},
						transform: [1.75, -78.35, 1, 1.025, -0.157, -2.984, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.523, 0], [0.297, 0.905], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.967, b: -0.251, c: -0.257, d: 0.991, tx: 1.95, ty: -69.35},
						transform: [1.95, -69.35, 0.999, 1.024, -0.254, -2.887, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.321, 0.444], [0.654, 0.779], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 52,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.967, b: -0.255, c: -0.26, d: 0.991, tx: 2, ty: -69.3},
						transform: [2, -69.3, 1, 1.025, -0.256, -2.884, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 68,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.988, b: -0.157, c: -0.16, d: 1.012, tx: 1.75, ty: -78.35},
						transform: [1.75, -78.35, 1, 1.025, -0.157, -2.984, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.523, 0], [0.297, 0.905], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.967, b: -0.251, c: -0.257, d: 0.991, tx: 1.95, ty: -69.35},
						transform: [1.95, -69.35, 0.999, 1.024, -0.254, -2.887, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.321, 0.444], [0.654, 0.779], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 83,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.967, b: -0.255, c: -0.26, d: 0.991, tx: 2, ty: -69.3},
						transform: [2, -69.3, 1, 1.025, -0.256, -2.884, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 84,
						to: 103,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.988, b: -0.157, c: -0.16, d: 1.012, tx: 1.75, ty: -78.35},
						transform: [1.75, -78.35, 1, 1.025, -0.157, -2.984, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.628, 0], [0.568, 0.646], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_anais_head_mad_x_f14",
						instancename: "",
						matrix: {a: -0.967, b: -0.251, c: -0.257, d: 0.991, tx: 2, ty: -69.25},
						transform: [2, -69.25, 0.999, 1.024, -0.254, -2.887, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_hand_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.319, b: 0.849, c: -1.068, d: 0.304, tx: 3.75, ty: -52.3},
						transform: [3.75, -52.3, 0.907, 1.111, -1.294, 1.211, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.125, b: 0.893, c: -1.167, d: 0.018, tx: 3.05, ty: -47.95},
						transform: [3.05, -47.95, 0.901, 1.167, -1.555, 1.432, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.463, b: 0.784, c: -1.045, d: 0.455, tx: 3.45, ty: -54},
						transform: [3.45, -54, 0.911, 1.139, -1.16, 1.037, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 20,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.472, b: 0.781, c: -1.062, d: 0.454, tx: 3.6, ty: -52.95},
						transform: [3.6, -52.95, 0.913, 1.155, -1.167, 1.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 37,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.472, b: 0.781, c: -1.062, d: 0.454, tx: 1.6, ty: -60.55},
						transform: [1.6, -60.55, 0.913, 1.155, -1.167, 1.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.471, b: 0.78, c: -1.062, d: 0.452, tx: 3.6, ty: -52.9},
						transform: [3.6, -52.9, 0.911, 1.154, -1.168, 1.028, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 51,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.472, b: 0.781, c: -1.062, d: 0.454, tx: 3.6, ty: -52.95},
						transform: [3.6, -52.95, 0.913, 1.155, -1.167, 1.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 68,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.472, b: 0.781, c: -1.062, d: 0.454, tx: 1.6, ty: -60.55},
						transform: [1.6, -60.55, 0.913, 1.155, -1.167, 1.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.471, b: 0.78, c: -1.062, d: 0.452, tx: 3.6, ty: -52.9},
						transform: [3.6, -52.9, 0.911, 1.154, -1.168, 1.028, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 82,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.472, b: 0.781, c: -1.062, d: 0.454, tx: 3.6, ty: -52.95},
						transform: [3.6, -52.95, 0.913, 1.155, -1.167, 1.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 103,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.472, b: 0.781, c: -1.062, d: 0.454, tx: 1.6, ty: -60.55},
						transform: [1.6, -60.55, 0.913, 1.155, -1.167, 1.027, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_anais_hand_2_x",
						instancename: "",
						matrix: {a: 0.472, b: 0.781, c: -1.062, d: 0.454, tx: 3.6, ty: -52.95},
						transform: [3.6, -52.95, 0.913, 1.155, -1.167, 1.027, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_arm",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.857, b: -0.459, c: 0.338, d: 0.81, tx: -18.85, ty: -55.45},
						transform: [-18.85, -55.45, 0.972, 0.878, 0.395, -0.491, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 1], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.951, b: -0.351, c: 0.258, d: 0.732, tx: -19.55, ty: -47.85},
						transform: [-19.55, -47.85, 1.014, 0.776, 0.339, -0.354, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.827, b: -0.544, c: 0.449, d: 0.791, tx: -20.45, ty: -56.6},
						transform: [-20.45, -56.6, 0.99, 0.91, 0.517, -0.582, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 20,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.842, b: -0.541, c: 0.459, d: 0.788, tx: -20.7, ty: -55.55},
						transform: [-20.7, -55.55, 1.001, 0.912, 0.527, -0.572, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 37,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.784, b: -0.623, c: 0.535, d: 0.738, tx: -21.45, ty: -61.45},
						transform: [-21.45, -61.45, 1.001, 0.912, 0.627, -0.671, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.84, b: -0.542, c: 0.457, d: 0.788, tx: -20.7, ty: -55.6},
						transform: [-20.7, -55.6, 0.999, 0.91, 0.525, -0.573, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 51,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.842, b: -0.541, c: 0.459, d: 0.788, tx: -20.7, ty: -55.55},
						transform: [-20.7, -55.55, 1.001, 0.912, 0.527, -0.572, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 52,
						to: 68,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.784, b: -0.623, c: 0.535, d: 0.738, tx: -21.45, ty: -61.45},
						transform: [-21.45, -61.45, 1.001, 0.912, 0.627, -0.671, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.348, 0], [0.267, 0.952], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.84, b: -0.542, c: 0.457, d: 0.788, tx: -20.7, ty: -55.6},
						transform: [-20.7, -55.6, 0.999, 0.91, 0.525, -0.573, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.661], [0.657, 1], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 82,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.842, b: -0.541, c: 0.459, d: 0.788, tx: -20.7, ty: -55.55},
						transform: [-20.7, -55.55, 1.001, 0.912, 0.527, -0.572, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 103,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.784, b: -0.623, c: 0.535, d: 0.738, tx: -21.45, ty: -61.45},
						transform: [-21.45, -61.45, 1.001, 0.912, 0.627, -0.671, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.337, 0], [0.248, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_arm_9_x_f0",
						instancename: "",
						matrix: {a: 0.842, b: -0.541, c: 0.459, d: 0.788, tx: -20.7, ty: -55.55},
						transform: [-20.7, -55.55, 1.001, 0.912, 0.527, -0.572, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.21, 0.539], [0.507, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "anais_band",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.927, b: 0.375, c: -0.368, d: 0.92, tx: -53.05, ty: -145.55},
						transform: [-53.05, -145.55, 1, 0.991, -0.38, 0.385, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.8], [0.825, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.906, b: 0.423, c: -0.37, d: 0.803, tx: -50.2, ty: -142.55},
						transform: [-50.2, -142.55, 1, 0.885, -0.432, 0.437, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47619], [0.666, 0.8091900000000001], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.998, b: 0.066, c: -0.063, d: 1.023, tx: -50.9, ty: -146.95},
						transform: [-50.9, -146.95, 1, 1.024, -0.061, 0.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.995, b: 0.102, c: -0.099, d: 1.02, tx: -50.3, ty: -146.55},
						transform: [-50.3, -146.55, 1, 1.025, -0.097, 0.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 22,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: 0.015, c: -0.01, d: 1.025, tx: -54.3, ty: -149.75},
						transform: [-54.3, -149.75, 1, 1.025, -0.01, 0.015, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 31,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.985, b: 0.175, c: -0.174, d: 1.01, tx: -58.3, ty: -150.95},
						transform: [-58.3, -150.95, 1, 1.025, -0.171, 0.176, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.6, 0.579], [1, 1], ],
						}
					},
					{
						from: 32,
						to: 37,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.983, b: 0.187, c: -0.187, d: 1.008, tx: -51.5, ty: -147.35},
						transform: [-51.5, -147.35, 1, 1.025, -0.183, 0.188, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 0.172], [0.492, 0.69], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.109, c: -0.104, d: 1.019, tx: -50.4, ty: -146.6},
						transform: [-50.4, -146.6, 1, 1.024, -0.101, 0.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.361], [0.658, 0.697], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 43,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.995, b: 0.102, c: -0.099, d: 1.02, tx: -50.3, ty: -146.55},
						transform: [-50.3, -146.55, 1, 1.025, -0.097, 0.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 44,
						to: 53,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: 0.015, c: -0.01, d: 1.025, tx: -54.3, ty: -149.75},
						transform: [-54.3, -149.75, 1, 1.025, -0.01, 0.015, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 54,
						to: 62,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.985, b: 0.175, c: -0.174, d: 1.01, tx: -58.3, ty: -150.95},
						transform: [-58.3, -150.95, 1, 1.025, -0.171, 0.176, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.6, 0.579], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 68,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.983, b: 0.187, c: -0.187, d: 1.008, tx: -51.5, ty: -147.35},
						transform: [-51.5, -147.35, 1, 1.025, -0.183, 0.188, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.118, 0.172], [0.492, 0.69], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.109, c: -0.104, d: 1.019, tx: -50.4, ty: -146.6},
						transform: [-50.4, -146.6, 1, 1.024, -0.101, 0.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.324, 0.361], [0.658, 0.697], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 74,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.995, b: 0.102, c: -0.099, d: 1.02, tx: -50.3, ty: -146.55},
						transform: [-50.3, -146.55, 1, 1.025, -0.097, 0.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 75,
						to: 84,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: 0.015, c: -0.01, d: 1.025, tx: -54.3, ty: -149.75},
						transform: [-54.3, -149.75, 1, 1.025, -0.01, 0.015, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 85,
						to: 93,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.985, b: 0.175, c: -0.174, d: 1.01, tx: -58.3, ty: -150.95},
						transform: [-58.3, -150.95, 1, 1.025, -0.171, 0.176, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.6, 0.579], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 103,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.983, b: 0.187, c: -0.187, d: 1.008, tx: -51.5, ty: -147.35},
						transform: [-51.5, -147.35, 1, 1.025, -0.183, 0.188, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.112, 0.175], [0.492, 0.736], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.995, b: 0.102, c: -0.099, d: 1.02, tx: -50.3, ty: -146.55},
						transform: [-50.3, -146.55, 1, 1.025, -0.097, 0.102, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.256, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "pupila",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.003, b: 0.149, c: -0.149, d: 1.003, tx: -5.85, ty: -111.75},
						transform: [-5.85, -111.75, 1.014, 1.014, -0.147, 0.147, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: -1.234, b: -0.154, c: -0.071, d: 0.573, tx: 31.4, ty: -92},
						transform: [31.4, -92, 1.244, 0.577, -0.124, -3.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: -0.914, b: -0.79, c: -0.619, d: 0.716, tx: 25.65, ty: -98.05},
						transform: [25.65, -98.05, 1.209, 0.946, -0.713, -2.429, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.952, b: 0.129, c: -0.129, d: 0.952, tx: -32.65, ty: -111.35},
						transform: [-32.65, -111.35, 0.961, 0.961, -0.134, 0.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47286000000000006], [0.666, 0.80586], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.948, b: 0.158, c: -0.158, d: 0.948, tx: -32.85, ty: -121.8},
						transform: [-32.85, -121.8, 0.961, 0.961, -0.165, 0.165, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 21,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.938, b: 0.206, c: -0.206, d: 0.938, tx: -32.7, ty: -120},
						transform: [-32.7, -120, 0.961, 0.961, -0.216, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 37,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.953, b: 0.124, c: -0.124, d: 0.953, tx: -37.15, ty: -127.15},
						transform: [-37.15, -127.15, 0.961, 0.961, -0.13, 0.13, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.523, 0], [0.297, 0.905], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.938, b: 0.204, c: -0.204, d: 0.938, tx: -32.8, ty: -120},
						transform: [-32.8, -120, 0.96, 0.96, -0.214, 0.214, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.321, 0.444], [0.654, 0.779], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 52,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.938, b: 0.206, c: -0.206, d: 0.938, tx: -32.7, ty: -120},
						transform: [-32.7, -120, 0.961, 0.961, -0.216, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 68,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.953, b: 0.124, c: -0.124, d: 0.953, tx: -37.15, ty: -127.15},
						transform: [-37.15, -127.15, 0.961, 0.961, -0.13, 0.13, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.523, 0], [0.297, 0.905], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.938, b: 0.204, c: -0.204, d: 0.938, tx: -32.8, ty: -120},
						transform: [-32.8, -120, 0.96, 0.96, -0.214, 0.214, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.321, 0.444], [0.654, 0.779], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 70,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.215, b: 0.266, c: -0.124, d: 0.564, tx: -20.4, ty: -107},
						transform: [-20.4, -107, 1.244, 0.577, -0.216, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 71,
						to: 71,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.161, b: -0.338, c: 0.264, d: 0.908, tx: -8.35, ty: -112.6},
						transform: [-8.35, -112.6, 1.209, 0.946, 0.283, -0.283, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 72,
						to: 84,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.991, b: 0.211, c: -0.211, d: 0.991, tx: -4.05, ty: -114.85},
						transform: [-4.05, -114.85, 1.013, 1.013, -0.21, 0.21, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.21], [0.286, 1], [1, 1], ],
						}
					},
					{
						from: 85,
						to: 95,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.009, b: 0.105, c: -0.105, d: 1.009, tx: -8.15, ty: -121.1},
						transform: [-8.15, -121.1, 1.014, 1.014, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.628, 0], [0.568, 0.646], [1, 1], ],
						}
					},
					{
						from: 96,
						to: 96,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.007, b: 0.117, c: -0.117, d: 1.007, tx: -7.05, ty: -116.2},
						transform: [-7.05, -116.2, 1.014, 1.014, -0.116, 0.116, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 97,
						to: 97,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.005, b: 0.136, c: -0.136, d: 1.005, tx: -10.65, ty: -112.7},
						transform: [-10.65, -112.7, 1.014, 1.014, -0.135, 0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 98,
						to: 98,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: -1.235, b: -0.144, c: -0.067, d: 0.573, tx: 29.85, ty: -101.3},
						transform: [29.85, -101.3, 1.244, 0.577, -0.116, -3.025, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 99,
						to: 99,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: -0.657, b: -1.015, c: -0.794, d: 0.514, tx: 23.2, ty: -109.3},
						transform: [23.2, -109.3, 1.209, 0.946, -0.996, -2.145, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 100,
						to: 103,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.945, b: 0.172, c: -0.172, d: 0.945, tx: -33.9, ty: -121.1},
						transform: [-33.9, -121.1, 0.961, 0.961, -0.18, 0.18, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 0.938, b: 0.206, c: -0.206, d: 0.938, tx: -32.7, ty: -120},
						transform: [-32.7, -120, 0.961, 0.961, -0.216, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "pupila",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.031, b: 0.153, c: -0.153, d: 1.031, tx: 44.8, ty: -104},
						transform: [44.8, -104, 1.042, 1.042, -0.147, 0.147, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: -1.307, b: -0.163, c: -0.081, d: 0.648, tx: -19.05, ty: -101.2},
						transform: [-19.05, -101.2, 1.317, 0.653, -0.124, -3.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: -0.92, b: -0.814, c: -0.618, d: 0.698, tx: -28.5, ty: -107.05},
						transform: [-28.5, -107.05, 1.228, 0.932, -0.724, -2.417, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 4,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.033, b: 0.14, c: -0.14, d: 1.033, tx: 21.5, ty: -104.05},
						transform: [21.5, -104.05, 1.042, 1.042, -0.134, 0.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47286000000000006], [0.666, 0.80586], [1, 1]],
						}
					},
					{
						from: 5,
						to: 7,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.028, b: 0.171, c: -0.171, d: 1.028, tx: 21.05, ty: -112.85},
						transform: [21.05, -112.85, 1.042, 1.042, -0.165, 0.165, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0.1], [0.565, 0.973], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 21,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.018, b: 0.223, c: -0.223, d: 1.018, tx: 20.65, ty: -108.3},
						transform: [20.65, -108.3, 1.042, 1.042, -0.216, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 37,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.033, b: 0.135, c: -0.135, d: 1.033, tx: 16.95, ty: -120.05},
						transform: [16.95, -120.05, 1.042, 1.042, -0.13, 0.13, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.523, 0], [0.297, 0.905], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 38,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.017, b: 0.221, c: -0.221, d: 1.017, tx: 20.65, ty: -108.35},
						transform: [20.65, -108.35, 1.041, 1.041, -0.214, 0.214, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.321, 0.444], [0.654, 0.779], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 52,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.018, b: 0.223, c: -0.223, d: 1.018, tx: 20.65, ty: -108.3},
						transform: [20.65, -108.3, 1.042, 1.042, -0.216, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 68,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.033, b: 0.135, c: -0.135, d: 1.033, tx: 16.95, ty: -120.05},
						transform: [16.95, -120.05, 1.042, 1.042, -0.13, 0.13, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.523, 0], [0.297, 0.905], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.017, b: 0.221, c: -0.221, d: 1.017, tx: 20.65, ty: -108.35},
						transform: [20.65, -108.35, 1.041, 1.041, -0.214, 0.214, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.321, 0.444], [0.654, 0.779], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 70,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.286, b: 0.282, c: -0.14, d: 0.638, tx: 30.25, ty: -98.85},
						transform: [30.25, -98.85, 1.317, 0.653, -0.216, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 71,
						to: 71,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.2, b: -0.259, c: 0.198, d: 0.919, tx: 41.85, ty: -102.35},
						transform: [41.85, -102.35, 1.228, 0.94, 0.212, -0.213, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 72,
						to: 84,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.018, b: 0.217, c: -0.217, d: 1.018, tx: 46, ty: -103.9},
						transform: [46, -103.9, 1.041, 1.041, -0.21, 0.21, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.21], [0.286, 1], [1, 1], ],
						}
					},
					{
						from: 85,
						to: 95,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.036, b: 0.108, c: -0.108, d: 1.036, tx: 42.75, ty: -115.55},
						transform: [42.75, -115.55, 1.042, 1.042, -0.103, 0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.628, 0], [0.568, 0.646], [1, 1], ],
						}
					},
					{
						from: 96,
						to: 96,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.035, b: 0.121, c: -0.121, d: 1.035, tx: 43.8, ty: -110.05},
						transform: [43.8, -110.05, 1.042, 1.042, -0.116, 0.116, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 97,
						to: 97,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.032, b: 0.14, c: -0.14, d: 1.032, tx: 40.1, ty: -105.6},
						transform: [40.1, -105.6, 1.042, 1.042, -0.135, 0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 98,
						to: 98,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: -1.296, b: -0.232, c: -0.115, d: 0.643, tx: -23.65, ty: -109.15},
						transform: [-23.65, -109.15, 1.317, 0.653, -0.177, -2.965, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 99,
						to: 99,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: -0.713, b: -1, c: -0.759, d: 0.542, tx: -31, ty: -118.3},
						transform: [-31, -118.3, 1.228, 0.932, -0.951, -2.191, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 100,
						to: 103,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.025, b: 0.187, c: -0.187, d: 1.025, tx: 19.9, ty: -111.25},
						transform: [19.9, -111.25, 1.042, 1.042, -0.18, 0.18, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
					{
						from: 104,
						to: 104,
						classname: "_anais_pupila_f0",
						instancename: "",
						matrix: {a: 1.018, b: 0.223, c: -0.223, d: 1.018, tx: 20.65, ty: -108.3},
						transform: [20.65, -108.3, 1.042, 1.042, -0.216, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.392, 0], [0.287, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 104,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 104,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 104,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 103,
					},
					{
						from: 104,
						to: 104,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_anais_ear_x_f0": {
		type: "bitmap",
		asset: "_anais_ear_x_f0",
		scale: 1,
		position: [-27.8, -46.8],
	},
	"_anais_hose_1_f0": {
		type: "bitmap",
		asset: "_anais_hose_1_f0",
		scale: 1,
		position: [-20.15, -47.9],
	},
	"_anais_hosepipe_n2_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_n2_x_f0",
		scale: 1,
		position: [-18.95, -52.4],
	},
	"_anais_hosepipe_n2b_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_n2b_x_f0",
		scale: 1,
		position: [-18.1, -42.05],
	},
	"_anais_backpack_x_f0": {
		type: "bitmap",
		asset: "_anais_backpack_x_f0",
		scale: 1,
		position: [-32.6, -39.4],
	},
	"_anais_leg2_x_f0": {
		type: "bitmap",
		asset: "_anais_leg2_x_f0",
		scale: 1,
		position: [-11.5, -8.6],
	},
	"_anais_leg3_x_f0": {
		type: "bitmap",
		asset: "_anais_leg3_x_f0",
		scale: 1,
		position: [-11.7, -14.8],
	},
	"_anais_leg1_x_f0": {
		type: "bitmap",
		asset: "_anais_leg1_x_f0",
		scale: 1,
		position: [-9.75, -11.5],
	},
	"_anais_leg4_x_f0": {
		type: "bitmap",
		asset: "_anais_leg4_x_f0",
		scale: 1,
		position: [-22.45, -11.75],
	},
	"_anais_anais_arm_2_x": {
		type: "bitmap",
		asset: "_anais_anais_arm_2_x",
		scale: 1,
		position: [-6.65, -13.8],
	},
	"_anais_anais_arm_x": {
		type: "bitmap",
		asset: "_anais_anais_arm_x",
		scale: 1,
		position: [-6.65, -11.4],
	},
	"_anais_body_x_f0": {
		type: "bitmap",
		asset: "_anais_body_x_f0",
		scale: 1,
		position: [-38.95, -12.95],
	},
	"_anais_body2_x_f0": {
		type: "bitmap",
		asset: "_anais_body2_x_f0",
		scale: 1,
		position: [-28.8, -11.9],
	},
	"_anais_head_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 108,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.413, 0.054], [0.719, 0.458], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.257, 0.372], [0.461, 0.96], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 16,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.55, ty: 3.05},
						transform: [1.55, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 24,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 34,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.55, ty: 3.05},
						transform: [1.55, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 42,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 52,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.55, ty: 3.05},
						transform: [1.55, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 60,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 70,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.55, ty: 3.05},
						transform: [1.55, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 71,
						to: 71,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 72,
						to: 78,
						classname: "_anais_anais_head_mad_x_f17",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 79,
						to: 88,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.55, ty: 3.05},
						transform: [1.55, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 89,
						to: 89,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 90,
						to: 96,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 97,
						to: 106,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.55, ty: 3.05},
						transform: [1.55, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 107,
						to: 107,
						classname: "_anais_anais_head_mad_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.45, ty: -0.95},
						transform: [-0.45, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 7,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.16, c: 0.16, d: 0.987, tx: 70.75, ty: -60.95},
						transform: [70.75, -60.95, 1, 1, 0.16, -0.16, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 18,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.053, c: 0.05, d: 0.935, tx: 71.75, ty: -56.8},
						transform: [71.75, -56.8, 1, 0.937, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 25,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.16, c: 0.16, d: 0.987, tx: 70.75, ty: -60.95},
						transform: [70.75, -60.95, 1, 1, 0.16, -0.16, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 36,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.053, c: 0.05, d: 0.935, tx: 71.75, ty: -56.8},
						transform: [71.75, -56.8, 1, 0.937, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 37,
						to: 43,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.973, b: -0.232, c: 0.232, d: 0.973, tx: 70.75, ty: -60.95},
						transform: [70.75, -60.95, 1, 1, 0.234, -0.234, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 54,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.053, c: 0.05, d: 0.935, tx: 71.75, ty: -56.8},
						transform: [71.75, -56.8, 1, 0.937, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 61,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.953, b: -0.304, c: 0.304, d: 0.953, tx: 70.75, ty: -60.95},
						transform: [70.75, -60.95, 1, 1, 0.309, -0.309, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 72,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.053, c: 0.05, d: 0.935, tx: 71.75, ty: -56.8},
						transform: [71.75, -56.8, 1, 0.937, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 79,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.946, b: -0.324, c: 0.324, d: 0.946, tx: 70.75, ty: -60.95},
						transform: [70.75, -60.95, 1, 1, 0.33, -0.33, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 80,
						to: 90,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.053, c: 0.05, d: 0.935, tx: 71.75, ty: -56.8},
						transform: [71.75, -56.8, 1, 0.937, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 91,
						to: 97,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.92, b: -0.393, c: 0.393, d: 0.92, tx: 70.75, ty: -60.95},
						transform: [70.75, -60.95, 1, 1, 0.404, -0.404, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.388, 0.041], [0.447, 0.956], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 106,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.053, c: 0.05, d: 0.935, tx: 71.75, ty: -56.8},
						transform: [71.75, -56.8, 1, 0.937, 0.053, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.404, 0.039], [0.487, 0.858], [1, 1], ],
						}
					},
					{
						from: 107,
						to: 107,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.157, c: 0.157, d: 0.986, tx: 70.75, ty: -60.9},
						transform: [70.75, -60.9, 0.999, 0.998, 0.157, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.315, 0.507], [0.647, 0.848], [1, 1], ],
						}
					},
				]
			},
		]
	},
	"_anais_head_idle_up": {
		type: "movieclip",
		fps: 30,
		totalFrames: 126,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.445, 0.085], [0.744, 0.479], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.1, ty: -0.05},
						transform: [0.1, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.243, 0.362], [0.391, 0.932], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 16,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 3.05},
						transform: [0.85, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 24,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 34,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 3.05},
						transform: [0.85, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 39,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.39, 0.127], [0.716, 0.482], [1, 1], ],
						}
					},
					{
						from: 40,
						to: 42,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: 0.4},
						transform: [0.2, 0.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.378, 0.263], [0.701, 0.608], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 52,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 3.05},
						transform: [0.85, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 60,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 70,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 3.05},
						transform: [0.85, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 71,
						to: 71,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 72,
						to: 78,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 79,
						to: 88,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 3.05},
						transform: [0.85, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 89,
						to: 89,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 90,
						to: 96,
						classname: "_anais_anais_head_mad2_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 97,
						to: 106,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 3.05},
						transform: [0.85, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 107,
						to: 107,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 114,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 115,
						to: 124,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.85, ty: 3.05},
						transform: [0.85, 3.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 125,
						to: 125,
						classname: "_anais_anais_head_mad2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 65.9, ty: -75.25},
						transform: [65.9, -75.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 17,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 67.3, ty: -72.1},
						transform: [67.3, -72.1, 1, 1, 0.483, -0.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 24,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 65.9, ty: -75.25},
						transform: [65.9, -75.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 35,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 67.3, ty: -72.1},
						transform: [67.3, -72.1, 1, 1, 0.483, -0.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 42,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 65.9, ty: -75.25},
						transform: [65.9, -75.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 53,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 67.3, ty: -72.1},
						transform: [67.3, -72.1, 1, 1, 0.483, -0.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 60,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 65.9, ty: -75.25},
						transform: [65.9, -75.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 71,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 67.3, ty: -72.1},
						transform: [67.3, -72.1, 1, 1, 0.483, -0.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 78,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 65.9, ty: -75.25},
						transform: [65.9, -75.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 79,
						to: 89,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 67.3, ty: -72.1},
						transform: [67.3, -72.1, 1, 1, 0.483, -0.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 90,
						to: 96,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 65.9, ty: -75.25},
						transform: [65.9, -75.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 97,
						to: 107,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 67.3, ty: -72.1},
						transform: [67.3, -72.1, 1, 1, 0.483, -0.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 108,
						to: 114,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 65.9, ty: -75.25},
						transform: [65.9, -75.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 115,
						to: 124,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.885, b: -0.465, c: 0.465, d: 0.885, tx: 67.3, ty: -72.1},
						transform: [67.3, -72.1, 1, 1, 0.483, -0.483, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.065], [0.381, 0.925], [1, 1], ],
						}
					},
					{
						from: 125,
						to: 125,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.401, c: 0.401, d: 0.916, tx: 65.9, ty: -75.25},
						transform: [65.9, -75.25, 1, 1, 0.413, -0.413, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_anais_hosepipe_n_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_n_x_f0",
		scale: 1,
		position: [-6.2, -25.85],
	},
	"_anais_hosepipe_nd_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_nd_x_f0",
		scale: 1,
		position: [-6.25, -24.95],
	},
	"_anais_hosepipe_nc_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_nc_x_f0",
		scale: 1,
		position: [-6.65, -25.8],
	},
	"_anais_hosepipe_nf_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_nf_x_f0",
		scale: 1,
		position: [-6.15, -36.85],
	},
	"_anais_cone": {
		type: "movieclip",
		fps: 30,
		totalFrames: 7,
		labels: {cone_15: {from:0, to:0}, cone_20: {from:1, to:1}, cone_25: {from:2, to:2}, cone_30: {from:3, to:3}, cone_35: {from:4, to:4}, cone_40: {from:5, to:5}, cone_45: {from:6, to:6}, },
		layers: [
			{
				name: "mc",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_cone_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.9, ty: 0.5},
						transform: [-11.9, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_cone_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.362, tx: -3.45, ty: 0},
						transform: [-3.45, 0, 1, 1.362, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_cone_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.724, tx: -1.55, ty: 0.05},
						transform: [-1.55, 0.05, 1, 1.724, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_cone_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 2.068, tx: 0, ty: 0},
						transform: [0, 0, 1, 2.068, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_cone_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 2.439, tx: 9.2, ty: 0},
						transform: [9.2, 0, 1, 2.439, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_cone_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 2.801, tx: 15.7, ty: 0},
						transform: [15.7, 0, 1, 2.801, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_anais_cone_15_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 3.154, tx: 19.15, ty: 0},
						transform: [19.15, 0, 1, 3.154, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "helpers",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 6,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 4,
					},
					{
						from: 5,
						to: 5,
					},
					{
						from: 6,
						to: 6,
					},
				]
			},
		]
	},
	"_anais_tube_x": {
		type: "bitmap",
		asset: "_anais_tube_x",
		scale: 1,
		position: [-77.1, -12.05],
	},
	"_anais_anais_forearm_x": {
		type: "bitmap",
		asset: "_anais_anais_forearm_x",
		scale: 1,
		position: [-10.8, -14.35],
	},
	"_anais_anais_forearm2_x": {
		type: "bitmap",
		asset: "_anais_anais_forearm2_x",
		scale: 1,
		position: [-26.95, -12.85],
	},
	"_anais_anais_hand_x": {
		type: "bitmap",
		asset: "_anais_anais_hand_x",
		scale: 1,
		position: [-8.65, -10.25],
	},
	"_anais_anais_hand_2_x": {
		type: "bitmap",
		asset: "_anais_anais_hand_2_x",
		scale: 1,
		position: [-7.25, -10.45],
	},
	"_anais_box": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
		]
	},
	"_anais_head_shoot": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_head_mad_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.45, ty: 0.05},
						transform: [-2.45, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_anais_anais_head_mad_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.55, ty: 0.05},
						transform: [2.55, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_anais_anais_head_mad_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.45, ty: 0.05},
						transform: [-2.45, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_anais_anais_head_mad_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.45, ty: 0.05},
						transform: [-2.45, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_anais_anais_head_mad_x_f1",
						instancename: "",
						matrix: {a: 0.999, b: -0.04, c: 0.04, d: 0.999, tx: 1.35, ty: -2.2},
						transform: [1.35, -2.2, 1, 1, 0.04, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_anais_head_mad_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.45, ty: 0.05},
						transform: [-2.45, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 68.8, ty: -60.45},
						transform: [68.8, -60.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47286000000000006], [0.666, 0.80586], [1, 1]],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.995, b: 0.1, c: -0.159, d: 0.989, tx: 73.3, ty: -60.45},
						transform: [73.3, -60.45, 1, 1.002, -0.159, 0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47286000000000006], [0.666, 0.80586], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1.173, b: -0.479, c: 0.41, d: 0.912, tx: 71.05, ty: -60.95},
						transform: [71.05, -60.95, 1.267, 1, 0.422, -0.388, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47286000000000006], [0.666, 0.80586], [1, 1]],
						}
					},
					{
						from: 9,
						to: 11,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1.212, b: -0.113, c: 0.126, d: 0.993, tx: 70.2, ty: -60.45},
						transform: [70.2, -60.45, 1.217, 1.001, 0.126, -0.093, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47286000000000006], [0.666, 0.80586], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.992, b: 0.125, c: -0.178, d: 0.985, tx: 70.3, ty: -66.95},
						transform: [70.3, -66.95, 1, 1.001, -0.179, 0.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.47286000000000006], [0.666, 0.80586], [1, 1]],
						}
					},
					{
						from: 15,
						to: 16,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1.058, b: 0.224, c: 0.181, d: 0.983, tx: 69.2, ty: -62.45},
						transform: [69.2, -62.45, 1.081, 1, 0.182, 0.209, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 68.8, ty: -60.45},
						transform: [68.8, -60.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_anais_head_shoot_up": {
		type: "movieclip",
		fps: 30,
		totalFrames: 18,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_anais_head_mad2_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_anais_anais_head_mad2_x_f1",
						instancename: "",
						matrix: {a: 1, b: -0.008, c: 0.008, d: 1, tx: -0.15, ty: 1.55},
						transform: [-0.15, 1.55, 1, 1, 0.008, -0.008, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_anais_anais_head_mad2_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_anais_anais_head_mad2_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 16,
						classname: "_anais_anais_head_mad2_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0.006, c: -0.006, d: 1, tx: -1.15, ty: -0.45},
						transform: [-1.15, -0.45, 1, 1, -0.006, 0.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_anais_head_mad2_x_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.15, ty: -0.95},
						transform: [-0.15, -0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.954, b: -0.3, c: 0.3, d: 0.954, tx: 68.15, ty: -77.15},
						transform: [68.15, -77.15, 1, 1, 0.305, -0.305, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.831, b: -0.8, c: 0.56, d: 0.787, tx: 67.5, ty: -76.5},
						transform: [67.5, -76.5, 1.153, 0.966, 0.618, -0.766, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 1.043, b: -0.017, c: 0.3, d: 0.954, tx: 68.15, ty: -77.15},
						transform: [68.15, -77.15, 1.043, 1, 0.305, -0.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 16,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.909, b: -0.932, c: 0.449, d: 0.856, tx: 69.15, ty: -77.15},
						transform: [69.15, -77.15, 1.302, 0.966, 0.483, -0.798, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.25, 0], [0.463, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_anais_band_f0",
						instancename: "",
						matrix: {a: 0.954, b: -0.3, c: 0.3, d: 0.954, tx: 68.15, ty: -77.15},
						transform: [68.15, -77.15, 1, 1, 0.305, -0.305, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_anais_tube_anim": {
		type: "movieclip",
		fps: 30,
		totalFrames: 6,
		labels: {},
		layers: [
			{
				name: "tube_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 1},
						transform: [0, 1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -1},
						transform: [0, -1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 1},
						transform: [0, 1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2, ty: 0},
						transform: [2, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_anais_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1, ty: 0},
						transform: [-1, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_anais_hosepipev_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipev_x_f0",
		scale: 1,
		position: [-24.85, -27.65],
	},
	"_anais_leg5_x_f0": {
		type: "bitmap",
		asset: "_anais_leg5_x_f0",
		scale: 1,
		position: [-10.45, -14.75],
	},
	"_anais_anais_arm_3_x": {
		type: "bitmap",
		asset: "_anais_anais_arm_3_x",
		scale: 1,
		position: [-6.65, -18.05],
	},
	"_anais_body3_x_f0": {
		type: "bitmap",
		asset: "_anais_body3_x_f0",
		scale: 1,
		position: [-28.8, -12.1],
	},
	"_anais_pollaroid_button_x_f0": {
		type: "bitmap",
		asset: "_anais_pollaroid_button_x_f0",
		scale: 1,
		position: [-12.15, -8.65],
	},
	"_anais_pollaroid_x_f0": {
		type: "bitmap",
		asset: "_anais_pollaroid_x_f0",
		scale: 1,
		position: [-46.1, -29.9],
	},
	"_anais_anais_head_mad_x_f2": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f2",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_arm_4_x": {
		type: "bitmap",
		asset: "_anais_anais_arm_4_x",
		scale: 1,
		position: [-9.8, -14.65],
	},
	"_anais_band_f0": {
		type: "bitmap",
		asset: "_anais_band_f0",
		scale: 1,
		position: [-13.25, -10.85],
	},
	"_anais_fx_flash_f0": {
		type: "bitmap",
		asset: "_anais_fx_flash_f0",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_anais_fx_flash_f1": {
		type: "bitmap",
		asset: "_anais_fx_flash_f1",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_anais_fx_flash_f2": {
		type: "bitmap",
		asset: "_anais_fx_flash_f2",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_anais_fx_flash_f3": {
		type: "bitmap",
		asset: "_anais_fx_flash_f3",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_anais_anais_run_leg_10_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_10_x_f0",
		scale: 1,
		position: [-9.4, -8.6],
	},
	"_anais_anais_run_leg_6_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_6_x_f0",
		scale: 1,
		position: [-12.75, -7.5],
	},
	"_anais_anais_run_leg_11_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_11_x_f0",
		scale: 1,
		position: [-15, -14.1],
	},
	"_anais_anais_run_leg_1_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_1_x_f0",
		scale: 1,
		position: [-11.95, -13.85],
	},
	"_anais_anais_run_leg_9_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_9_x_f0",
		scale: 1,
		position: [-39, -7.3],
	},
	"_anais_anais_run_leg_2_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_2_x_f0",
		scale: 1,
		position: [-13.2, -7.75],
	},
	"_anais_anais_run_leg_3_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_3_x_f0",
		scale: 1,
		position: [-25.4, -8],
	},
	"_anais_anais_run_leg_4_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_4_x_f0",
		scale: 1,
		position: [-12.2, -13.6],
	},
	"_anais_anais_run_leg_5_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_run_leg_5_x_f0",
		scale: 1,
		position: [-37.5, -11.65],
	},
	"_anais_body_side_x_f0": {
		type: "bitmap",
		asset: "_anais_body_side_x_f0",
		scale: 1,
		position: [-34.55, -12.95],
	},
	"_anais_body_side2_x_f0": {
		type: "bitmap",
		asset: "_anais_body_side2_x_f0",
		scale: 1,
		position: [-36.1, -13.9],
	},
	"_anais_hosepipe_s_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_s_x_f0",
		scale: 1,
		position: [-32.3, -24.6],
	},
	"_anais_anais_arm_6_x": {
		type: "bitmap",
		asset: "_anais_anais_arm_6_x",
		scale: 1,
		position: [-10.4, -35.05],
	},
	"_anais_anais_arm_5_x": {
		type: "bitmap",
		asset: "_anais_anais_arm_5_x",
		scale: 1,
		position: [-3.6, -10.95],
	},
	"_anais_anais_head_mad_x_f3": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f3",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_hosepipe_u_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_u_x_f0",
		scale: 1,
		position: [-23.15, -22.7],
	},
	"_anais_anais_arm_9_x": {
		type: "bitmap",
		asset: "_anais_anais_arm_9_x",
		scale: 1,
		position: [-11.25, -43.15],
	},
	"_anais_anais_head_mad_x_f12": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f12",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_head_mad_x_f13": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f13",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_head_mad_x_f11": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f11",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_arm_8_x": {
		type: "bitmap",
		asset: "_anais_anais_arm_8_x",
		scale: 1,
		position: [-11.6, -38.3],
	},
	"_anais_hosepipe_u2_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_u2_x_f0",
		scale: 1,
		position: [-31.55, -20.1],
	},
	"_anais_hosepipe_c_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_c_x_f0",
		scale: 1,
		position: [-33.9, -30.75],
	},
	"_anais_hosepipe_c2_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_c2_x_f0",
		scale: 1,
		position: [-14.3, -26.35],
	},
	"_anais_hosepipe_u3_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_u3_x_f0",
		scale: 1,
		position: [-15.4, -26.5],
	},
	"_anais_leg6_x_f0": {
		type: "bitmap",
		asset: "_anais_leg6_x_f0",
		scale: 1,
		position: [-11.5, -8.6],
	},
	"_anais_body_side3_x_f0": {
		type: "bitmap",
		asset: "_anais_body_side3_x_f0",
		scale: 1,
		position: [-30.85, -13.9],
	},
	"_anais_arms_die_x_f0": {
		type: "bitmap",
		asset: "_anais_arms_die_x_f0",
		scale: 1,
		position: [-27.55, -28.1],
	},
	"_anais_anais_head_mad_x_f6": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f6",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_head_mad_x_f10": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f10",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_band1_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_band1_x_f0",
		scale: 1,
		position: [-30.25, -9.3],
	},
	"_anais_anais_arm_8_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_arm_8_x_f0",
		scale: 1,
		position: [-11.6, -38.3],
	},
	"_anais_hosepipe_u5_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_u5_x_f0",
		scale: 1,
		position: [-37.65, -23.55],
	},
	"_anais_hosepipe_u6_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_u6_x_f0",
		scale: 1,
		position: [-37.1, -24],
	},
	"_anais_anais_arm_9_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_arm_9_x_f0",
		scale: 1,
		position: [-11.25, -43.15],
	},
	"_anais_anais_head_mad_x_f8": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f8",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_backpack_back_x_f0": {
		type: "bitmap",
		asset: "_anais_backpack_back_x_f0",
		scale: 1,
		position: [-39.85, -37.05],
	},
	"_anais_ear2_x_f0": {
		type: "bitmap",
		asset: "_anais_ear2_x_f0",
		scale: 1,
		position: [-34.35, -24.05],
	},
	"_anais_anais_arm_6_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_arm_6_x_f0",
		scale: 1,
		position: [-10.4, -35.05],
	},
	"_anais_anais_head_mad_x_f9": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f9",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_blackout": {
		type: "movieclip",
		fps: 30,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_anais_blackout_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_anais_hosepipe_c3_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_c3_x_f0",
		scale: 1,
		position: [-28.15, -21.9],
	},
	"_anais_anais_head_mad_x_f15": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f15",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_pupila_f0": {
		type: "bitmap",
		asset: "_anais_pupila_f0",
		scale: 1,
		position: [-13.5, -13.5],
	},
	"_anais_hosepipe_floor_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_floor_x_f0",
		scale: 1,
		position: [-20.05, -24.95],
	},
	"_anais_anais_arm3_x": {
		type: "bitmap",
		asset: "_anais_anais_arm3_x",
		scale: 1,
		position: [-10.25, -27.25],
	},
	"_anais_anais_head_mad_x_f4": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f4",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_mouth,talk_f0": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f0",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f3": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f3",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f4": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f4",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f5": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f5",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f6": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f6",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f7": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f7",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f8": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f8",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f9": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f9",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f10": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f10",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f11": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f11",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f12": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f12",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f13": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f13",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f14": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f14",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f15": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f15",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f16": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f16",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f17": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f17",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f18": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f18",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f19": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f19",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f20": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f20",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f21": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f21",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f22": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f22",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f23": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f23",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f24": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f24",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f25": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f25",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f26": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f26",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f27": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f27",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f1": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f1",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_mouth,talk_f2": {
		type: "bitmap",
		asset: "_anais_mouth,talk_f2",
		scale: 1,
		position: [-24.45, -12.5],
	},
	"_anais_anais_hand2_x": {
		type: "bitmap",
		asset: "_anais_anais_hand2_x",
		scale: 1,
		position: [-8.4, -11.7],
	},
	"_anais_hosepipe_u4_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_u4_x_f0",
		scale: 1,
		position: [-31.75, -23.1],
	},
	"_anais_hosepipe_u4b_x_f0": {
		type: "bitmap",
		asset: "_anais_hosepipe_u4b_x_f0",
		scale: 1,
		position: [-38.6, -23.1],
	},
	"_anais_anais_head_mad_x_f14": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f14",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_arm_9_x_f0": {
		type: "bitmap",
		asset: "_anais_arm_9_x_f0",
		scale: 1,
		position: [-25.55, -10.5],
	},
	"_anais_anais_head_mad_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f0",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_head_mad_x_f17": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f17",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_head_mad2_x_f0": {
		type: "bitmap",
		asset: "_anais_anais_head_mad2_x_f0",
		scale: 1,
		position: [-201.25, -251.5],
	},
	"_anais_anais_head_mad2_x_f2": {
		type: "bitmap",
		asset: "_anais_anais_head_mad2_x_f2",
		scale: 1,
		position: [-201.25, -251.5],
	},
	"_anais_cone_15_x": {
		type: "bitmap",
		asset: "_anais_cone_15_x",
		scale: 1,
		position: [-5, -116],
	},
	"_anais_anais_head_mad_x_f1": {
		type: "bitmap",
		asset: "_anais_anais_head_mad_x_f1",
		scale: 1,
		position: [-103.55, -142.7],
	},
	"_anais_anais_head_mad2_x_f1": {
		type: "bitmap",
		asset: "_anais_anais_head_mad2_x_f1",
		scale: 1,
		position: [-201.25, -251.5],
	},
	"_anais_blackout_x": {
		type: "bitmap",
		asset: "_anais_blackout_x",
		scale: 1,
		position: [-105, -95],
	},
};
