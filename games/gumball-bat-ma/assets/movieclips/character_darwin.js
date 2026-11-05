export const character_darwin = {
	"darwin": {
		type: "movieclip",
		fps: 30,
		totalFrames: 162,
		labels: {idle: {from:0, to:19}, shoot: {from:20, to:33}, flash: {from:34, to:49}, run: {from:50, to:64}, hit: {from:65, to:78}, die: {from:79, to:107}, enter_door: {from:108, to:120}, exit_door: {from:121, to:132}, talk: {from:133, to:145}, idle_explore: {from:146, to:161}, },
		layers: [
			{
				name: "anim",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_darwin_darwin_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 19.5, ty: 1},
						transform: [19.5, 1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 33,
						classname: "_darwin_darwin_shoot",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 19.5, ty: 0},
						transform: [19.5, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 34,
						to: 49,
						classname: "_darwin_darwin_flash",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 50,
						to: 64,
						classname: "_darwin_darwin_run",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10, ty: -1.05},
						transform: [10, -1.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 65,
						to: 78,
						classname: "_darwin_darwin_hit",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -22, ty: 0},
						transform: [-22, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 79,
						to: 107,
						classname: "_darwin_darwin_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 108,
						to: 120,
						classname: "_darwin_darwin_enterdoor",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1, ty: 7},
						transform: [1, 7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 121,
						to: 132,
						classname: "_darwin_darwin_exitdoor",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 6, ty: 5},
						transform: [6, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 133,
						to: 145,
						classname: "_darwin_darwinl_talk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 6.5},
						transform: [0, 6.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 146,
						to: 161,
						classname: "_darwin_darwinl_idle_explore",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.6, ty: 6.05},
						transform: [0.6, 6.05, 1, 1, 0, 0, 0],
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
						to: 19,
					},
					{
						from: 20,
						to: 33,
					},
					{
						from: 34,
						to: 49,
					},
					{
						from: 50,
						to: 64,
					},
					{
						from: 65,
						to: 78,
					},
					{
						from: 79,
						to: 107,
					},
					{
						from: 108,
						to: 120,
					},
					{
						from: 121,
						to: 132,
					},
					{
						from: 133,
						to: 145,
					},
					{
						from: 146,
						to: 161,
					},
				]
			},
		]
	},
	"_darwin_darwin_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 181,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.927, b: -0.261, c: -0.223, d: 0.866, tx: -117.2, ty: -107.8},
						transform: [-117.2, -107.8, 0.963, 0.894, -0.252, -2.867, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.945, b: 0.183, c: 0.19, d: 0.874, tx: -120.2, ty: -84.3},
						transform: [-120.2, -84.3, 0.963, 0.894, 0.214, 2.95, NaN],
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
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: 0.361, c: 0.413, d: 0.835, tx: -114.75, ty: -53.15},
						transform: [-114.75, -53.15, 1.058, 0.932, 0.459, 2.793, NaN],
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
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: 0.361, c: 0.375, d: 0.849, tx: -129.9, ty: -62.55},
						transform: [-129.9, -62.55, 1.058, 0.928, 0.416, 2.793, NaN],
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
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.045, b: -0.935, c: -0.934, d: 0.029, tx: 5.05, ty: -155.65},
						transform: [5.05, -155.65, 0.936, 0.934, -1.54, -1.523, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 63,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.361, b: -0.944, c: -0.706, d: -0.154, tx: 34.1, ty: -164.75},
						transform: [34.1, -164.75, 1.011, 0.722, -1.786, -1.205, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 64,
						to: 88,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.033, b: -1.052, c: -0.993, d: -0.093, tx: 17.65, ty: -167.75},
						transform: [17.65, -167.75, 1.053, 0.997, -1.664, -1.54, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.295, b: -1.016, c: -0.855, d: 0.377, tx: 1.3, ty: -168.95},
						transform: [1.3, -168.95, 1.058, 0.934, -1.156, -1.854, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.295, b: -1.016, c: -0.855, d: 0.377, tx: -16.7, ty: -176.45},
						transform: [-16.7, -176.45, 1.058, 0.934, -1.156, -1.854, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.211, b: -1.036, c: -0.932, d: -0.064, tx: 11.25, ty: -153.25},
						transform: [11.25, -153.25, 1.058, 0.934, -1.639, -1.37, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.43, b: -0.966, c: -0.896, d: -0.264, tx: 49.25, ty: -113.7},
						transform: [49.25, -113.7, 1.058, 0.934, -1.857, -1.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 122,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.707, b: -0.787, c: -0.771, d: -0.527, tx: 67.7, ty: -106.2},
						transform: [67.7, -106.2, 1.058, 0.934, -2.171, -0.839, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 123,
						to: 150,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.587, b: -0.869, c: -0.771, d: -0.527, tx: 63.6, ty: -107.85},
						transform: [63.6, -107.85, 1.048, 0.934, -2.171, -0.977, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.115, b: -1.042, c: -0.946, d: 0.053, tx: 44.45, ty: -138.05},
						transform: [44.45, -138.05, 1.048, 0.947, -1.515, -1.461, NaN],
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
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.544, b: -0.883, c: -0.957, d: 0.491, tx: 22.1, ty: -169.15},
						transform: [22.1, -169.15, 1.037, 1.075, -1.097, -2.123, NaN],
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
				name: "bota3_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 0.99, b: 0, c: -0.13, d: 1.042, tx: 38.2, ty: -41.7},
						transform: [38.2, -41.7, 0.99, 1.05, -0.124, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 0.995, b: 0, c: -0.134, d: 1.036, tx: 40.65, ty: -41.8},
						transform: [40.65, -41.8, 0.995, 1.045, -0.129, 0, NaN],
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
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: 0, c: -0.058, d: 1.03, tx: 39.55, ty: -41.95},
						transform: [39.55, -41.95, 0.999, 1.031, -0.056, 0, NaN],
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
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.176, d: 1.075, tx: 44.4, ty: -43.75},
						transform: [44.4, -43.75, 1, 1.09, -0.162, 0, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.376, d: 0.855, tx: 1.2, ty: -38.95},
						transform: [1.2, -38.95, 1, 0.934, 0.414, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.178, d: 0.915, tx: -7, ty: -41.75},
						transform: [-7, -41.75, 1, 0.932, 0.192, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.236, d: 0.95, tx: -9.75, ty: -43.4},
						transform: [-9.75, -43.4, 1, 0.978, 0.243, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.24, d: 0.922, tx: -9.95, ty: -42.1},
						transform: [-9.95, -42.1, 1, 0.953, 0.254, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.22, d: 0.886, tx: -12, ty: -40.4},
						transform: [-12, -40.4, 1, 0.913, 0.243, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.266, d: 0.922, tx: -15.35, ty: -42.1},
						transform: [-15.35, -42.1, 1, 0.96, 0.281, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.265, d: 0.922, tx: -15.15, ty: -42.1},
						transform: [-15.15, -42.1, 1, 0.959, 0.28, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.247, d: 0.938, tx: -12.3, ty: -42.9},
						transform: [-12.3, -42.9, 1, 0.97, 0.258, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.231, d: 0.922, tx: -9.5, ty: -42.1},
						transform: [-9.5, -42.1, 1, 0.951, 0.246, 3.142, NaN],
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
				name: "leg_rect_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.869, b: -0.429, c: 0.558, d: 0.735, tx: 7.5, ty: -85.6},
						transform: [7.5, -85.6, 0.969, 0.923, 0.649, -0.459, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.873, b: -0.446, c: 0.627, d: 0.761, tx: 4.8, ty: -87.45},
						transform: [4.8, -87.45, 0.981, 0.986, 0.689, -0.473, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.842, b: -0.466, c: 0.762, d: 0.78, tx: -4.9, ty: -89.2},
						transform: [-4.9, -89.2, 0.962, 1.09, 0.774, -0.505, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.771, b: -0.548, c: 0.83, d: 0.695, tx: -3.3, ty: -86.85},
						transform: [-3.3, -86.85, 0.946, 1.083, 0.874, -0.618, NaN],
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
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.925, b: 0.191, c: 0.284, d: 0.86, tx: -19.6, ty: -93.7},
						transform: [-19.6, -93.7, 0.945, 0.906, 0.319, 2.938, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.002, b: 0.03, c: -0.037, d: 0.991, tx: -10.45, ty: -108.1},
						transform: [-10.45, -108.1, 1.002, 0.992, -0.037, 3.112, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.031, c: 0.026, d: 1.029, tx: -17.4, ty: -112.3},
						transform: [-17.4, -112.3, 1, 1.029, 0.025, 3.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.03, c: 0.03, d: 1, tx: -17.85, ty: -109.05},
						transform: [-17.85, -109.05, 1, 1, 0.03, 3.111, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.031, c: -0.031, d: 1, tx: -16.4, ty: -107.55},
						transform: [-16.4, -107.55, 1, 1, -0.031, -3.111, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.902, b: -0.456, c: -0.316, d: 0.949, tx: -7.5, ty: -101.95},
						transform: [-7.5, -101.95, 1.011, 1, -0.321, -2.674, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.833, b: -0.554, c: -0.554, d: 0.833, tx: 6.5, ty: -96.65},
						transform: [6.5, -96.65, 1, 1, -0.587, -2.555, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.905, b: -0.426, c: -0.426, d: 0.905, tx: -0.45, ty: -101.35},
						transform: [-0.45, -101.35, 1, 1, -0.44, -2.702, NaN],
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
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: -0.358, c: -0.358, d: 0.934, tx: 0.05, ty: -101.55},
						transform: [0.05, -101.55, 1, 1, -0.366, -2.776, NaN],
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
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.089, d: 0.928, tx: -60.8, ty: -42.15},
						transform: [-60.8, -42.15, 1, 0.932, -0.095, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.032, d: 0.966, tx: -65.55, ty: -43.6},
						transform: [-65.55, -43.6, 1, 0.966, 0.033, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.114, d: 0.894, tx: -69.1, ty: -40.75},
						transform: [-69.1, -40.75, 1, 0.901, 0.127, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.101, d: 0.85, tx: -68.3, ty: -38.7},
						transform: [-68.3, -38.7, 1, 0.856, 0.118, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.056, d: 0.855, tx: -52.7, ty: -38.95},
						transform: [-52.7, -38.95, 1, 0.857, -0.065, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.049, d: 0.915, tx: -46.1, ty: -41.75},
						transform: [-46.1, -41.75, 1, 0.916, -0.054, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.009, d: 0.95, tx: -48.85, ty: -43.4},
						transform: [-48.85, -43.4, 1, 0.95, 0.009, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.012, d: 0.923, tx: -49.05, ty: -42.1},
						transform: [-49.05, -42.1, 1, 0.923, 0.014, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.109, d: 0.922, tx: -53.2, ty: -42.1},
						transform: [-53.2, -42.1, 1, 0.929, -0.118, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: -0.949, b: 0.044, c: 0.389, d: 0.945, tx: -68.25, ty: -40.7},
						transform: [-68.25, -40.7, 0.95, 1.022, 0.391, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: -0.967, b: 0, c: 0.378, d: 0.922, tx: -72.65, ty: -37.1},
						transform: [-72.65, -37.1, 0.967, 0.997, 0.389, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: -0.967, b: 0, c: 0.36, d: 0.939, tx: -72.05, ty: -37.8},
						transform: [-72.05, -37.8, 0.967, 1.005, 0.366, 3.142, NaN],
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
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: -0.967, b: 0, c: 0.346, d: 0.922, tx: -71.4, ty: -37.1},
						transform: [-71.4, -37.1, 0.967, 0.985, 0.359, 3.142, NaN],
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
				name: "leg_30_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.554, b: -0.834, c: -0.799, d: 0.603, tx: -31.05, ty: -87.95},
						transform: [-31.05, -87.95, 1.001, 1.001, -0.924, -2.158, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.66, b: -0.751, c: -0.751, d: 0.66, tx: -39.8, ty: -88.8},
						transform: [-39.8, -88.8, 1, 1, -0.85, -2.292, NaN],
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
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.66, b: -0.751, c: -0.751, d: 0.66, tx: -44.55, ty: -86.55},
						transform: [-44.55, -86.55, 1, 1, -0.85, -2.292, NaN],
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
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.663, b: -0.746, c: -0.755, d: 0.659, tx: -41.9, ty: -84.5},
						transform: [-41.9, -84.5, 0.998, 1.002, -0.853, -2.297, NaN],
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
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1.003, b: 0.098, c: -0.11, d: 0.85, tx: -41.6, ty: -93.85},
						transform: [-41.6, -93.85, 1.008, 0.857, -0.128, 0.097, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.067, d: 0.992, tx: -38.15, ty: -107.05},
						transform: [-38.15, -107.05, 1, 0.994, -0.068, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.004, d: 1.03, tx: -45.05, ty: -111.2},
						transform: [-45.05, -111.2, 1, 1.03, -0.004, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -45.5, ty: -107.95},
						transform: [-45.5, -107.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.99, b: 0.154, c: -0.209, d: 0.978, tx: -37.3, ty: -104.75},
						transform: [-37.3, -104.75, 1.002, 1, -0.21, 0.155, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.701, b: -0.57, c: -0.589, d: 0.739, tx: -33.95, ty: -90.35},
						transform: [-33.95, -90.35, 0.903, 0.945, -0.673, -2.459, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.8, b: -0.623, c: -0.612, d: 0.802, tx: -34, ty: -90.05},
						transform: [-34, -90.05, 1.014, 1.009, -0.652, -2.48, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.818, b: -0.658, c: -0.643, d: 0.842, tx: -31.6, ty: -93.85},
						transform: [-31.6, -93.85, 1.05, 1.06, -0.652, -2.464, NaN],
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
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.846, b: -0.622, c: -0.606, d: 0.869, tx: -33.6, ty: -95.35},
						transform: [-33.6, -95.35, 1.05, 1.06, -0.609, -2.507, NaN],
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
				name: "hosepipe_n2_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: 0.199, c: -0.213, d: 1.121, tx: -105.6, ty: -58.8},
						transform: [-105.6, -58.8, 1.003, 1.141, -0.188, 0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.88, b: 0.084, c: 0.059, d: 1.279, tx: -95.5, ty: -36.45},
						transform: [-95.5, -36.45, 0.884, 1.281, 0.046, 0.095, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 1.006, b: -0.171, c: 0.28, d: 1.25, tx: -85.75, ty: -23.5},
						transform: [-85.75, -23.5, 1.02, 1.281, 0.22, -0.168, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.919, b: 0.207, c: -0.051, d: 1.295, tx: -109.4, ty: -41.85},
						transform: [-109.4, -41.85, 0.942, 1.296, -0.039, 0.221, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.897, b: 0.374, c: -0.191, d: 1.137, tx: -86.6, ty: -63.55},
						transform: [-86.6, -63.55, 0.972, 1.153, -0.166, 0.395, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.843, b: 0.651, c: -0.241, d: 1.11, tx: -78.65, ty: -74.35},
						transform: [-78.65, -74.35, 1.065, 1.136, -0.214, 0.657, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 1.11, b: 0.037, c: 0.443, d: 1.2, tx: -54.15, ty: -55.4},
						transform: [-54.15, -55.4, 1.11, 1.279, 0.353, 0.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 117,
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 1.15, b: -0.128, c: 0.694, d: 1.185, tx: -34.2, ty: -38.4},
						transform: [-34.2, -38.4, 1.157, 1.373, 0.529, -0.111, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 1.089, b: -0.143, c: 0.719, d: 1.156, tx: -31.8, ty: -34.35},
						transform: [-31.8, -34.35, 1.098, 1.361, 0.556, -0.131, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.75, b: -0.056, c: 0.141, d: 1.152, tx: 13.4, ty: -33.1},
						transform: [13.4, -33.1, 0.752, 1.161, 0.121, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 149,
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.743, b: 0.166, c: -0.127, d: 1.146, tx: 7.35, ty: -30.4},
						transform: [7.35, -30.4, 0.761, 1.153, -0.11, 0.22, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.564, b: -0.24, c: 0.43, d: 1.242, tx: 41.1, ty: -48.5},
						transform: [41.1, -48.5, 0.613, 1.314, 0.333, -0.402, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.557, b: -0.287, c: 0.749, d: 1.179, tx: 56.45, ty: -73.55},
						transform: [56.45, -73.55, 0.627, 1.397, 0.566, -0.475, NaN],
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
				name: "gumball_backpack_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: -0.987, b: 0.147, c: 0.147, d: 0.987, tx: -78, ty: -106.15},
						transform: [-78, -106.15, 0.998, 0.998, 0.148, 2.993, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: -0.865, b: 0.496, c: 0.496, d: 0.865, tx: -83.25, ty: -95.4},
						transform: [-83.25, -95.4, 0.997, 0.997, 0.521, 2.62, NaN],
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
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: -0.632, b: 0.773, c: 0.773, d: 0.632, tx: -88.2, ty: -80.05},
						transform: [-88.2, -80.05, 0.998, 0.998, 0.886, 2.256, NaN],
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
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: -0.782, b: 0.622, c: 0.622, d: 0.782, tx: -97.3, ty: -80.55},
						transform: [-97.3, -80.55, 0.999, 0.999, 0.672, 2.469, NaN],
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
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.944, b: 0.325, c: -0.325, d: 0.944, tx: 8.4, ty: -122.65},
						transform: [8.4, -122.65, 0.999, 0.999, -0.332, 0.332, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 63,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.943, b: 0.326, c: -0.326, d: 0.943, tx: 26.75, ty: -125.5},
						transform: [26.75, -125.5, 0.997, 0.997, -0.333, 0.333, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 64,
						to: 88,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.963, b: 0.26, c: -0.26, d: 0.963, tx: 25.25, ty: -126.5},
						transform: [25.25, -126.5, 0.997, 0.997, -0.264, 0.264, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.994, b: 0.084, c: -0.084, d: 0.994, tx: 13.35, ty: -142.35},
						transform: [13.35, -142.35, 0.997, 0.997, -0.085, 0.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.992, b: -0.11, c: 0.11, d: 0.992, tx: 1.1, ty: -145.45},
						transform: [1.1, -145.45, 0.998, 0.998, 0.11, -0.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.942, b: 0.33, c: -0.33, d: 0.942, tx: 12.9, ty: -117.8},
						transform: [12.9, -117.8, 0.999, 0.999, -0.337, 0.337, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.678, b: 0.733, c: -0.733, d: 0.678, tx: 39.35, ty: -85.3},
						transform: [39.35, -85.3, 0.999, 0.999, -0.824, 0.824, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 121,
						to: 122,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.662, b: 0.745, c: -0.745, d: 0.662, tx: 48.75, ty: -72.45},
						transform: [48.75, -72.45, 0.997, 0.997, -0.844, 0.844, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 123,
						to: 150,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.662, b: 0.745, c: -0.745, d: 0.662, tx: 50.25, ty: -72.45},
						transform: [50.25, -72.45, 0.997, 0.997, -0.844, 0.844, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.901, b: 0.426, c: -0.426, d: 0.901, tx: 44.95, ty: -107.65},
						transform: [44.95, -107.65, 0.996, 0.996, -0.441, 0.441, NaN],
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
						classname: "_darwin_backpack_idle",
						instancename: "",
						matrix: {a: 0.997, b: 0.051, c: -0.051, d: 0.997, tx: 39.85, ty: -141.7},
						transform: [39.85, -141.7, 0.999, 0.999, -0.051, 0.051, NaN],
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
				name: "Layer 15",
				keys: [
					{
						from: 0,
						to: 180,
					},
				]
			},
			{
				name: "arm_curve_x",
				keys: [
					{
						from: 0,
						to: 28,
					},
					{
						from: 29,
						to: 59,
					},
					{
						from: 60,
						to: 61,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.848, b: -0.338, c: 0.699, d: 0.916, tx: -59.05, ty: -96.2},
						transform: [-59.05, -96.2, 0.913, 1.152, 0.652, -0.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.875, b: -0.256, c: 0.611, d: 0.975, tx: -53.8, ty: -109.4},
						transform: [-53.8, -109.4, 0.912, 1.151, 0.56, -0.285, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.798, b: -0.439, c: 0.767, d: 0.839, tx: -54.25, ty: -101.6},
						transform: [-54.25, -101.6, 0.91, 1.137, 0.741, -0.503, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.684, b: -0.603, c: 0.966, d: 0.624, tx: -57.2, ty: -92.5},
						transform: [-57.2, -92.5, 0.911, 1.15, 0.997, -0.722, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.88, b: -0.244, c: 0.595, d: 0.987, tx: -52.35, ty: -94.05},
						transform: [-52.35, -94.05, 0.913, 1.152, 0.542, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 119,
						to: 120,
					},
					{
						from: 121,
						to: 150,
					},
					{
						from: 151,
						to: 179,
					},
					{
						from: 180,
						to: 180,
					},
				]
			},
			{
				name: "Layer 13",
				keys: [
					{
						from: 0,
						to: 180,
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_head_idle",
						instancename: "",
						matrix: {a: -1, b: 0.005, c: 0.005, d: 1, tx: -20.6, ty: -85.6},
						transform: [-20.6, -85.6, 1, 1, 0.005, 3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_head_idle",
						instancename: "",
						matrix: {a: -0.942, b: 0.33, c: 0.33, d: 0.942, tx: -24.55, ty: -93.85},
						transform: [-24.55, -93.85, 0.998, 0.998, 0.337, 2.805, NaN],
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
						classname: "_darwin_head_idle",
						instancename: "",
						matrix: {a: -0.789, b: 0.611, c: 0.611, d: 0.789, tx: -28.35, ty: -96.9},
						transform: [-28.35, -96.9, 0.997, 0.997, 0.659, 2.483, NaN],
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
						classname: "_darwin_head_idle",
						instancename: "",
						matrix: {a: -0.902, b: 0.43, c: 0.43, d: 0.902, tx: -34.15, ty: -85.7},
						transform: [-34.15, -85.7, 0.999, 0.999, 0.445, 2.697, NaN],
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
						classname: "_darwin_head_idle_up",
						instancename: "",
						matrix: {a: 0.992, b: 0.104, c: -0.104, d: 0.992, tx: -40.65, ty: -100.9},
						transform: [-40.65, -100.9, 0.997, 0.997, -0.104, 0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_head_idle_up",
						instancename: "",
						matrix: {a: 0.978, b: 0.191, c: -0.191, d: 0.978, tx: -35.35, ty: -112.35},
						transform: [-35.35, -112.35, 0.997, 0.997, -0.192, 0.192, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_head_idle_up",
						instancename: "",
						matrix: {a: 0.987, b: -0.139, c: 0.139, d: 0.987, tx: -38.7, ty: -111.3},
						transform: [-38.7, -111.3, 0.996, 0.996, 0.14, -0.14, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_head_idle_up",
						instancename: "",
						matrix: {a: 0.939, b: -0.333, c: 0.333, d: 0.939, tx: -45.55, ty: -103.05},
						transform: [-45.55, -103.05, 0.996, 0.996, 0.341, -0.341, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_head_idle_up",
						instancename: "",
						matrix: {a: 0.991, b: 0.109, c: -0.109, d: 0.991, tx: -37.25, ty: -98.5},
						transform: [-37.25, -98.5, 0.997, 0.997, -0.11, 0.11, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_head_idle",
						instancename: "",
						matrix: {a: 0.825, b: 0.561, c: -0.561, d: 0.825, tx: -16.95, ty: -96.25},
						transform: [-16.95, -96.25, 0.997, 0.997, -0.597, 0.597, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_head_idle",
						instancename: "",
						matrix: {a: 0.812, b: 0.576, c: -0.576, d: 0.812, tx: -10.55, ty: -88.95},
						transform: [-10.55, -88.95, 0.996, 0.996, -0.617, 0.617, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_head_idle",
						instancename: "",
						matrix: {a: 0.974, b: 0.208, c: -0.208, d: 0.974, tx: -11.9, ty: -98.45},
						transform: [-11.9, -98.45, 0.996, 0.996, -0.211, 0.211, NaN],
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
						classname: "_darwin_head_idle",
						instancename: "",
						matrix: {a: 0.982, b: -0.175, c: 0.175, d: 0.982, tx: -13.25, ty: -107.65},
						transform: [-13.25, -107.65, 0.997, 0.997, 0.176, -0.176, NaN],
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
				name: "Layer 14",
				keys: [
					{
						from: 0,
						to: 180,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: -0.13, c: -0.13, d: 0.991, tx: -53.5, ty: -75.5},
						transform: [-53.5, -75.5, 1, 1, -0.131, -3.011, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.948, b: 0.198, c: 0.247, d: 1.003, tx: -45.1, ty: -69.3},
						transform: [-45.1, -69.3, 0.969, 1.033, 0.241, 2.935, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.808, b: 0.481, c: 0.607, d: 0.877, tx: -42.4, ty: -67.15},
						transform: [-42.4, -67.15, 0.94, 1.066, 0.605, 2.605, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -1.045, b: 0.16, c: 0.123, d: 0.806, tx: -64.1, ty: -61.45},
						transform: [-64.1, -61.45, 1.057, 0.815, 0.152, 2.99, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.915, b: 0.397, c: -0.397, d: 0.915, tx: -3.8, ty: -96.7},
						transform: [-3.8, -96.7, 0.997, 0.997, -0.409, 0.409, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.967, b: 0.241, c: -0.24, d: 0.963, tx: -0.5, ty: -101.7},
						transform: [-0.5, -101.7, 0.997, 0.992, -0.244, 0.244, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.995, b: -0.048, c: 0.045, d: 0.928, tx: -4.2, ty: -105.25},
						transform: [-4.2, -105.25, 0.996, 0.929, 0.048, -0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: -0.161, c: 0.14, d: 0.856, tx: -9.3, ty: -105.7},
						transform: [-9.3, -105.7, 0.996, 0.867, 0.162, -0.162, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.953, b: 0.291, c: -0.252, d: 0.825, tx: -3.5, ty: -84.85},
						transform: [-3.5, -84.85, 0.997, 0.863, -0.297, 0.297, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.24, b: 0.353, c: -0.197, d: 0.692, tx: 5.2, ty: -69.35},
						transform: [5.2, -69.35, 1.289, 0.72, -0.277, 0.277, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.181, b: 0.515, c: -0.287, d: 0.659, tx: 8.85, ty: -62.3},
						transform: [8.85, -62.3, 1.288, 0.719, -0.411, 0.411, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.289, b: 0.007, c: -0.004, d: 0.719, tx: 26.9, ty: -83.15},
						transform: [26.9, -83.15, 1.289, 0.719, -0.005, 0.005, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.197, b: -0.48, c: 0.268, d: 0.668, tx: 28.25, ty: -107},
						transform: [28.25, -107, 1.289, 0.72, 0.382, -0.382, NaN],
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
				name: "arm_curve_x",
				keys: [
					{
						from: 0,
						to: 28,
					},
					{
						from: 29,
						to: 88,
					},
					{
						from: 89,
						to: 118,
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.105, b: -0.74, c: -0.923, d: -0.016, tx: -26.15, ty: -89.9},
						transform: [-26.15, -89.9, 0.748, 0.923, -1.589, -1.43, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.094, b: -0.897, c: -0.922, d: 0.009, tx: -35.15, ty: -104.65},
						transform: [-35.15, -104.65, 0.902, 0.922, -1.561, -1.466, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.34, b: -0.756, c: -0.809, d: 0.392, tx: -34.35, ty: -98.8},
						transform: [-34.35, -98.8, 0.829, 0.899, -1.12, -1.993, NaN],
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
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.737, b: -0.526, c: -0.561, d: 0.677, tx: -31.85, ty: -89.9},
						transform: [-31.85, -89.9, 0.905, 0.88, -0.692, -2.521, NaN],
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
				name: "hosepipe_n_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.132, c: -0.147, d: 1.154, tx: -106.5, ty: -58.35},
						transform: [-106.5, -58.35, 1.003, 1.163, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.864, b: 0.006, c: 0.144, d: 1.306, tx: -96.25, ty: -36},
						transform: [-96.25, -36, 0.864, 1.314, 0.11, 0.007, NaN],
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
						classname: "_darwin_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 1.052, b: -0.332, c: 0.369, d: 1.261, tx: -85.4, ty: -22.7},
						transform: [-85.4, -22.7, 1.103, 1.314, 0.284, -0.306, NaN],
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
						classname: "_darwin_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: 0.07, c: 0.024, d: 1.339, tx: -109.35, ty: -40.95},
						transform: [-109.35, -40.95, 1, 1.339, 0.018, 0.07, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.955, b: 0.32, c: -0.194, d: 1.156, tx: -87.1, ty: -63.2},
						transform: [-87.1, -63.2, 1.007, 1.172, -0.166, 0.324, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.79, b: 0.42, c: -0.245, d: 1.128, tx: -78.3, ty: -73.4},
						transform: [-78.3, -73.4, 0.894, 1.154, -0.214, 0.488, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.89, b: -0.173, c: 0.565, d: 1.089, tx: -52.5, ty: -54.4},
						transform: [-52.5, -54.4, 0.907, 1.227, 0.479, -0.192, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 117,
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.68, b: -0.136, c: 0.733, d: 1.089, tx: -31.65, ty: -37.65},
						transform: [-31.65, -37.65, 0.694, 1.313, 0.593, -0.198, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.717, b: -0.098, c: 0.687, d: 1.12, tx: -31.2, ty: -33.75},
						transform: [-31.2, -33.75, 0.724, 1.314, 0.55, -0.136, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: -1.07, b: -0.139, c: -0.141, d: 1.085, tx: 15.65, ty: -32.9},
						transform: [15.65, -32.9, 1.079, 1.094, -0.129, -3.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 149,
						classname: "_darwin_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: -1.01, b: -0.447, c: -0.385, d: 0.998, tx: 9.5, ty: -29.55},
						transform: [9.5, -29.55, 1.104, 1.07, -0.368, -2.725, NaN],
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
						classname: "_darwin_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: -0.933, b: -0.06, c: 0.174, d: 1.177, tx: 40.75, ty: -48.6},
						transform: [40.75, -48.6, 0.935, 1.189, 0.147, -3.078, NaN],
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
						classname: "_darwin_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: -1.026, b: 0.027, c: 0.456, d: 1.139, tx: 56.25, ty: -73.95},
						transform: [56.25, -73.95, 1.026, 1.227, 0.381, 3.116, NaN],
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
				name: "cone",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 25.6, ty: -80.25},
						transform: [25.6, -80.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.873, b: -0.481, c: 0.481, d: 0.873, tx: 12.2, ty: -103.25},
						transform: [12.2, -103.25, 0.997, 0.997, 0.503, -0.503, NaN],
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
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: -2, ty: -125.6},
						transform: [-2, -125.6, 0.997, 0.997, 0.994, -0.994, NaN],
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
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: -2.3, ty: -126.8},
						transform: [-2.3, -126.8, 0.999, 0.999, 1.029, -1.029, NaN],
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
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: -7, ty: -127.75},
						transform: [-7, -127.75, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: -3.85, ty: -140.7},
						transform: [-3.85, -140.7, 0.995, 0.995, 1.081, -1.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.018, b: -0.996, c: 0.996, d: 0.018, tx: -24.7, ty: -132.65},
						transform: [-24.7, -132.65, 0.996, 0.996, 1.553, -1.553, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -43.6, ty: -121.25},
						transform: [-43.6, -121.25, 0.997, 0.997, 2.039, -2.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -44.55, ty: -118.25},
						transform: [-44.55, -118.25, 0.999, 0.999, 2.074, -2.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -41.85, ty: -116.2},
						transform: [-41.85, -116.2, 0.997, 0.997, 2.091, -2.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -44.05, ty: -117.65},
						transform: [-44.05, -117.65, 0.996, 0.996, 2.126, -2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -45.65, ty: -104.25},
						transform: [-45.65, -104.25, 0.997, 0.997, 2.617, -2.617, NaN],
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
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -31.55, ty: -89.85},
						transform: [-31.55, -89.85, 1, 1, 3.142, 3.142, 3.142],
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
						to: 28,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 23.6, ty: -79.25},
						transform: [23.6, -79.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: 0.872, b: -0.48, c: 0.48, d: 0.872, tx: 12, ty: -102},
						transform: [12, -102, 0.996, 0.996, 0.503, -0.503, NaN],
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
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: 0.543, b: -0.833, c: 0.833, d: 0.543, tx: 0.8, ty: -128.85},
						transform: [0.8, -128.85, 0.994, 0.994, 0.994, -0.994, NaN],
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
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: 0.514, b: -0.853, c: 0.853, d: 0.514, tx: -4.7, ty: -123.6},
						transform: [-4.7, -123.6, 0.996, 0.996, 1.029, -1.029, NaN],
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
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: 0.498, b: -0.861, c: 0.861, d: 0.498, tx: -5.05, ty: -133.2},
						transform: [-5.05, -133.2, 0.994, 0.994, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: 0.467, b: -0.876, c: 0.876, d: 0.467, tx: -2.3, ty: -142.9},
						transform: [-2.3, -142.9, 0.993, 0.993, 1.081, -1.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: 0.018, b: -0.994, c: 0.994, d: 0.018, tx: -25.4, ty: -137.4},
						transform: [-25.4, -137.4, 0.994, 0.994, 1.553, -1.553, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: -0.433, b: -0.896, c: 0.896, d: -0.433, tx: -48.6, ty: -131.85},
						transform: [-48.6, -131.85, 0.996, 0.996, 2.021, -2.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: -0.465, b: -0.882, c: 0.882, d: -0.465, tx: -44.95, ty: -120.45},
						transform: [-44.95, -120.45, 0.997, 0.997, 2.056, -2.056, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -41.55, ty: -115.25},
						transform: [-41.55, -115.25, 0.999, 0.999, 2.074, -2.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: -0.511, b: -0.856, c: 0.856, d: -0.511, tx: -43.45, ty: -117.3},
						transform: [-43.45, -117.3, 0.997, 0.997, 2.109, -2.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: -0.872, b: -0.484, c: 0.484, d: -0.872, tx: -42.45, ty: -103.35},
						transform: [-42.45, -103.35, 0.997, 0.997, 2.634, -2.634, NaN],
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
						classname: "_darwin_tube_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -41.55, ty: -89.85},
						transform: [-41.55, -89.85, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: -0.13, c: -0.13, d: 0.991, tx: -53, ty: -76.5},
						transform: [-53, -76.5, 1, 1, -0.131, -3.011, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.948, b: 0.198, c: 0.247, d: 1.003, tx: -45.1, ty: -68.15},
						transform: [-45.1, -68.15, 0.969, 1.033, 0.241, 2.935, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.808, b: 0.481, c: 0.607, d: 0.877, tx: -40.9, ty: -65.65},
						transform: [-40.9, -65.65, 0.94, 1.066, 0.605, 2.605, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: -0.097, c: -0.097, d: 0.994, tx: -59.3, ty: -68.35},
						transform: [-59.3, -68.35, 0.998, 0.998, -0.098, -3.044, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.997, b: -0.031, c: 0.031, d: 0.997, tx: -3.95, ty: -101.8},
						transform: [-3.95, -101.8, 0.997, 0.997, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.966, b: 0.245, c: -0.245, d: 0.966, tx: -0.6, ty: -101.7},
						transform: [-0.6, -101.7, 0.997, 0.997, -0.248, 0.248, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.997, b: -0.014, c: 0.014, d: 0.997, tx: -5.25, ty: -104},
						transform: [-5.25, -104, 0.997, 0.997, 0.014, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.992, b: -0.1, c: 0.1, d: 0.992, tx: -11.35, ty: -103.5},
						transform: [-11.35, -103.5, 0.997, 0.997, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.974, b: 0.212, c: -0.212, d: 0.974, tx: -4.15, ty: -85.25},
						transform: [-4.15, -85.25, 0.997, 0.997, -0.214, 0.214, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: 0.197, c: -0.073, d: 1.002, tx: 2.6, ty: -75.1},
						transform: [2.6, -75.1, 0.997, 1.005, -0.073, 0.199, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.941, b: 0.325, c: -0.205, d: 0.983, tx: 8.85, ty: -66.2},
						transform: [8.85, -66.2, 0.996, 1.004, -0.206, 0.332, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.841, b: -0.534, c: 0.641, d: 0.773, tx: 20.1, ty: -92.65},
						transform: [20.1, -92.65, 0.996, 1.004, 0.692, -0.565, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.448, b: -0.891, c: 0.948, d: 0.335, tx: 17.75, ty: -110.6},
						transform: [17.75, -110.6, 0.997, 1.005, 1.231, -1.105, NaN],
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
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.992, b: -0.128, c: 0.128, d: 0.992, tx: 10.45, ty: -87.85},
						transform: [10.45, -87.85, 1, 1, 0.129, -0.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.814, b: -0.576, c: 0.576, d: 0.814, tx: 2.55, ty: -105.8},
						transform: [2.55, -105.8, 0.997, 0.997, 0.616, -0.616, NaN],
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
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.465, b: -0.882, c: 0.882, d: 0.465, tx: -3.4, ty: -133.25},
						transform: [-3.4, -133.25, 0.997, 0.997, 1.085, -1.085, NaN],
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
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.534, b: -0.844, c: 0.844, d: 0.534, tx: -18.25, ty: -112.15},
						transform: [-18.25, -112.15, 0.998, 0.998, 1.007, -1.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 117,
					},
					{
						from: 118,
						to: 118,
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.968, b: -0.238, c: -0.065, d: 1.121, tx: -56.9, ty: -104},
						transform: [-56.9, -104, 0.997, 1.123, -0.058, -2.9, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.984, b: 0.137, c: 0.36, d: 1.062, tx: -67.8, ty: -117.6},
						transform: [-67.8, -117.6, 0.994, 1.121, 0.327, 3.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.929, b: 0.216, c: 0.533, d: 0.947, tx: -69.9, ty: -100},
						transform: [-69.9, -100, 0.953, 1.087, 0.512, 2.914, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.725, b: 0.56, c: 0.908, d: 0.541, tx: -66.85, ty: -76.7},
						transform: [-66.85, -76.7, 0.916, 1.057, 1.033, 2.484, NaN],
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
				name: "absorb_point",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 57.1, ty: -79.35},
						transform: [57.1, -79.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 41.1, ty: -118.35},
						transform: [41.1, -118.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 19.1, ty: -157.35},
						transform: [19.1, -157.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 12.1, ty: -152.35},
						transform: [12.1, -152.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 12.1, ty: -162.35},
						transform: [12.1, -162.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 13.1, ty: -172.35},
						transform: [13.1, -172.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -23.9, ty: -170.35},
						transform: [-23.9, -170.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -62.9, ty: -162.35},
						transform: [-62.9, -162.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -60.9, ty: -150.35},
						transform: [-60.9, -150.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -57.9, ty: -144.35},
						transform: [-57.9, -144.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -59.9, ty: -146.35},
						transform: [-59.9, -146.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -70.9, ty: -120.35},
						transform: [-70.9, -120.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -73.9, ty: -90.35},
						transform: [-73.9, -90.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
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
						to: 180,
					},
				]
			},
		]
	},
	"_darwin_darwin_shoot": {
		type: "movieclip",
		fps: 30,
		totalFrames: 181,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.927, b: -0.261, c: -0.223, d: 0.866, tx: -117.2, ty: -99.8},
						transform: [-117.2, -99.8, 0.963, 0.894, -0.252, -2.867, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.945, b: 0.183, c: 0.19, d: 0.874, tx: -120.2, ty: -76.3},
						transform: [-120.2, -76.3, 0.963, 0.894, 0.214, 2.95, NaN],
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
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: 0.361, c: 0.413, d: 0.835, tx: -114.75, ty: -45.15},
						transform: [-114.75, -45.15, 1.058, 0.932, 0.459, 2.793, NaN],
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
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: 0.361, c: 0.375, d: 0.849, tx: -129.9, ty: -54.55},
						transform: [-129.9, -54.55, 1.058, 0.928, 0.416, 2.793, NaN],
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
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.045, b: -0.935, c: -0.934, d: 0.029, tx: 5.05, ty: -147.65},
						transform: [5.05, -147.65, 0.936, 0.934, -1.54, -1.523, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 63,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.361, b: -0.944, c: -0.706, d: -0.154, tx: 34.1, ty: -156.75},
						transform: [34.1, -156.75, 1.011, 0.722, -1.786, -1.205, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 64,
						to: 88,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.033, b: -1.052, c: -0.993, d: -0.093, tx: 17.65, ty: -160.75},
						transform: [17.65, -160.75, 1.053, 0.997, -1.664, -1.54, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.295, b: -1.016, c: -0.963, d: 0.261, tx: -3.3, ty: -165.9},
						transform: [-3.3, -165.9, 1.058, 0.997, -1.306, -1.854, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.295, b: -1.016, c: -0.855, d: 0.377, tx: -18.7, ty: -167.45},
						transform: [-18.7, -167.45, 1.058, 0.934, -1.156, -1.854, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.211, b: -1.036, c: -0.932, d: -0.064, tx: 10.25, ty: -147.25},
						transform: [10.25, -147.25, 1.058, 0.934, -1.639, -1.37, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.43, b: -0.966, c: -0.896, d: -0.264, tx: 49.25, ty: -106.7},
						transform: [49.25, -106.7, 1.058, 0.934, -1.857, -1.152, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 122,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.707, b: -0.787, c: -0.771, d: -0.527, tx: 67.7, ty: -98.2},
						transform: [67.7, -98.2, 1.058, 0.934, -2.171, -0.839, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 123,
						to: 150,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.587, b: -0.869, c: -0.771, d: -0.527, tx: 63.6, ty: -99.85},
						transform: [63.6, -99.85, 1.048, 0.934, -2.171, -0.977, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: 0.115, b: -1.042, c: -0.946, d: 0.053, tx: 42.45, ty: -131.05},
						transform: [42.45, -131.05, 1.048, 0.947, -1.515, -1.461, NaN],
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
						classname: "_darwin_hose_1_ini_x_f0",
						instancename: "",
						matrix: {a: -0.544, b: -0.883, c: -0.957, d: 0.491, tx: 21.1, ty: -161.15},
						transform: [21.1, -161.15, 1.037, 1.075, -1.097, -2.123, NaN],
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
				name: "bota3_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 1.019, b: 0, c: -0.133, d: 0.991, tx: 39.7, ty: -39.55},
						transform: [39.7, -39.55, 1.019, 1, -0.134, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 1.024, b: 0, c: -0.138, d: 0.985, tx: 42.25, ty: -39.65},
						transform: [42.25, -39.65, 1.024, 0.995, -0.139, 0, NaN],
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
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: -0.059, d: 0.979, tx: 41.1, ty: -39.8},
						transform: [41.1, -39.8, 1.029, 0.981, -0.06, 0, NaN],
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
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: -0.181, d: 1.023, tx: 46.1, ty: -41.5},
						transform: [46.1, -41.5, 1.029, 1.038, -0.175, 0, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.387, d: 0.813, tx: 1.65, ty: -36.95},
						transform: [1.65, -36.95, 1.029, 0.9, 0.444, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.183, d: 0.87, tx: -6.8, ty: -39.6},
						transform: [-6.8, -39.6, 1.029, 0.889, 0.207, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.255, d: 0.903, tx: -10.25, ty: -41.15},
						transform: [-10.25, -41.15, 1.029, 0.938, 0.275, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.247, d: 0.877, tx: -9.85, ty: -39.95},
						transform: [-9.85, -39.95, 1.029, 0.911, 0.274, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.227, d: 0.843, tx: -11.95, ty: -38.3},
						transform: [-11.95, -38.3, 1.029, 0.873, 0.263, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.274, d: 0.877, tx: -15.4, ty: -39.95},
						transform: [-15.4, -39.95, 1.029, 0.919, 0.303, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.272, d: 0.876, tx: -15.2, ty: -39.95},
						transform: [-15.2, -39.95, 1.029, 0.918, 0.301, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.254, d: 0.892, tx: -12.25, ty: -40.7},
						transform: [-12.25, -40.7, 1.029, 0.928, 0.278, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.238, d: 0.877, tx: -9.4, ty: -39.95},
						transform: [-9.4, -39.95, 1.029, 0.909, 0.265, 3.142, NaN],
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
				name: "leg_rect_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.894, b: -0.408, c: 0.574, d: 0.699, tx: 8.1, ty: -81.3},
						transform: [8.1, -81.3, 0.983, 0.904, 0.688, -0.428, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.899, b: -0.425, c: 0.645, d: 0.724, tx: 5.35, ty: -83.05},
						transform: [5.35, -83.05, 0.994, 0.97, 0.728, -0.441, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.866, b: -0.443, c: 0.784, d: 0.742, tx: -4.65, ty: -84.75},
						transform: [-4.65, -84.75, 0.973, 1.079, 0.813, -0.473, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.793, b: -0.521, c: 0.854, d: 0.661, tx: -3, ty: -82.5},
						transform: [-3, -82.5, 0.949, 1.08, 0.912, -0.582, NaN],
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
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.952, b: 0.182, c: 0.292, d: 0.818, tx: -19.75, ty: -89},
						transform: [-19.75, -89, 0.969, 0.869, 0.343, 2.953, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.031, b: 0.029, c: -0.038, d: 0.943, tx: -10.35, ty: -102.7},
						transform: [-10.35, -102.7, 1.031, 0.943, -0.04, 3.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.028, b: 0.03, c: 0.04, d: 0.979, tx: -19, ty: -106.7},
						transform: [-19, -106.7, 1.029, 0.979, 0.041, 3.113, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0.029, c: 0.031, d: 0.951, tx: -17.95, ty: -103.6},
						transform: [-17.95, -103.6, 1.029, 0.951, 0.033, 3.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: -0.029, c: -0.031, d: 0.951, tx: -16.5, ty: -102.2},
						transform: [-16.5, -102.2, 1.029, 0.951, -0.033, -3.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.928, b: -0.434, c: -0.325, d: 0.902, tx: -7.3, ty: -96.85},
						transform: [-7.3, -96.85, 1.025, 0.959, -0.345, -2.705, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.857, b: -0.527, c: -0.57, d: 0.792, tx: 7.1, ty: -91.8},
						transform: [7.1, -91.8, 1.006, 0.976, -0.624, -2.59, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.931, b: -0.405, c: -0.438, d: 0.861, tx: -0.05, ty: -96.3},
						transform: [-0.05, -96.3, 1.015, 0.966, -0.471, -2.732, NaN],
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
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: -0.34, c: -0.368, d: 0.888, tx: 0.45, ty: -96.5},
						transform: [0.45, -96.5, 1.019, 0.961, -0.393, -2.801, NaN],
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
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: -0.091, d: 0.882, tx: -62.15, ty: -40},
						transform: [-62.15, -40, 1.029, 0.887, -0.103, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.033, d: 0.918, tx: -67.05, ty: -41.35},
						transform: [-67.05, -41.35, 1.029, 0.919, 0.035, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.117, d: 0.85, tx: -70.7, ty: -38.65},
						transform: [-70.7, -38.65, 1.029, 0.858, 0.137, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.029, b: 0, c: 0.104, d: 0.808, tx: -69.9, ty: -36.7},
						transform: [-69.9, -36.7, 1.029, 0.815, 0.128, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: -0.058, d: 0.813, tx: -53.85, ty: -36.95},
						transform: [-53.85, -36.95, 1.029, 0.815, -0.071, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: -0.051, d: 0.87, tx: -47.05, ty: -39.6},
						transform: [-47.05, -39.6, 1.029, 0.871, -0.058, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: 0.021, d: 0.903, tx: -50.5, ty: -41.15},
						transform: [-50.5, -41.15, 1.029, 0.903, 0.023, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: 0.013, d: 0.877, tx: -50.1, ty: -39.95},
						transform: [-50.1, -39.95, 1.029, 0.877, 0.015, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: -0.112, d: 0.877, tx: -54.35, ty: -39.95},
						transform: [-54.35, -39.95, 1.029, 0.884, -0.127, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: -0.977, b: 0.042, c: 0.401, d: 0.899, tx: -69.85, ty: -38.6},
						transform: [-69.85, -38.6, 0.977, 0.984, 0.419, 3.098, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: -0.995, b: 0, c: 0.389, d: 0.877, tx: -74.35, ty: -35.2},
						transform: [-74.35, -35.2, 0.995, 0.959, 0.417, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: -0.995, b: 0, c: 0.37, d: 0.893, tx: -73.75, ty: -35.85},
						transform: [-73.75, -35.85, 0.995, 0.966, 0.393, 3.142, NaN],
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
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: -0.995, b: 0, c: 0.356, d: 0.877, tx: -73.1, ty: -35.2},
						transform: [-73.1, -35.2, 0.995, 0.947, 0.386, 3.142, NaN],
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
				name: "leg_30_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.57, b: -0.793, c: -0.822, d: 0.573, tx: -31.55, ty: -83.55},
						transform: [-31.55, -83.55, 0.977, 1.002, -0.962, -2.194, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.679, b: -0.714, c: -0.773, d: 0.628, tx: -40.55, ty: -84.35},
						transform: [-40.55, -84.35, 0.986, 0.996, -0.889, -2.331, NaN],
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
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.679, b: -0.714, c: -0.773, d: 0.628, tx: -45.45, ty: -82.2},
						transform: [-45.45, -82.2, 0.986, 0.996, -0.889, -2.331, NaN],
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
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.682, b: -0.709, c: -0.777, d: 0.627, tx: -42.7, ty: -80.25},
						transform: [-42.7, -80.25, 0.984, 0.998, -0.892, -2.337, NaN],
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
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1.033, b: 0.093, c: -0.113, d: 0.808, tx: -42.4, ty: -89.15},
						transform: [-42.4, -89.15, 1.037, 0.816, -0.139, 0.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: -0.069, d: 0.943, tx: -38.85, ty: -101.7},
						transform: [-38.85, -101.7, 1.029, 0.946, -0.073, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: 0.009, d: 0.979, tx: -47.45, ty: -105.65},
						transform: [-47.45, -105.65, 1.029, 0.979, 0.009, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1.029, b: 0, c: 0, d: 0.951, tx: -46.45, ty: -102.55},
						transform: [-46.45, -102.55, 1.029, 0.951, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1.018, b: 0.147, c: -0.215, d: 0.93, tx: -38, ty: -99.5},
						transform: [-38, -99.5, 1.029, 0.955, -0.227, 0.143, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.721, b: -0.542, c: -0.606, d: 0.703, tx: -34.55, ty: -85.8},
						transform: [-34.55, -85.8, 0.902, 0.928, -0.712, -2.497, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.824, b: -0.592, c: -0.63, d: 0.763, tx: -34.6, ty: -85.55},
						transform: [-34.6, -85.55, 1.015, 0.989, -0.69, -2.518, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.842, b: -0.626, c: -0.662, d: 0.801, tx: -32.1, ty: -89.15},
						transform: [-32.1, -89.15, 1.049, 1.039, -0.691, -2.502, NaN],
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
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.87, b: -0.592, c: -0.624, d: 0.827, tx: -34.2, ty: -90.6},
						transform: [-34.2, -90.6, 1.053, 1.036, -0.646, -2.545, NaN],
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
				name: "hosepipe_n2_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: 0.199, c: -0.213, d: 1.121, tx: -105.6, ty: -58.8},
						transform: [-105.6, -58.8, 1.003, 1.141, -0.188, 0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.88, b: 0.084, c: 0.059, d: 1.279, tx: -95.5, ty: -36.45},
						transform: [-95.5, -36.45, 0.884, 1.281, 0.046, 0.095, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 1.006, b: -0.171, c: 0.28, d: 1.25, tx: -85.75, ty: -23.5},
						transform: [-85.75, -23.5, 1.02, 1.281, 0.22, -0.168, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.919, b: 0.207, c: -0.051, d: 1.295, tx: -109.4, ty: -41.85},
						transform: [-109.4, -41.85, 0.942, 1.296, -0.039, 0.221, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.897, b: 0.374, c: -0.191, d: 1.137, tx: -86.6, ty: -63.55},
						transform: [-86.6, -63.55, 0.972, 1.153, -0.166, 0.395, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 0.843, b: 0.651, c: -0.241, d: 1.11, tx: -78.65, ty: -74.35},
						transform: [-78.65, -74.35, 1.065, 1.136, -0.214, 0.657, NaN],
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
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 1.11, b: 0.037, c: 0.443, d: 1.2, tx: -54.15, ty: -55.4},
						transform: [-54.15, -55.4, 1.11, 1.279, 0.353, 0.033, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 117,
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 1.15, b: -0.128, c: 0.694, d: 1.185, tx: -34.2, ty: -38.4},
						transform: [-34.2, -38.4, 1.157, 1.373, 0.529, -0.111, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_hosepipe_n2b_x_f0",
						instancename: "",
						matrix: {a: 1.089, b: -0.143, c: 0.719, d: 1.156, tx: -31.8, ty: -34.35},
						transform: [-31.8, -34.35, 1.098, 1.361, 0.556, -0.131, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.75, b: -0.056, c: 0.141, d: 1.152, tx: 13.4, ty: -33.1},
						transform: [13.4, -33.1, 0.752, 1.161, 0.121, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 149,
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.743, b: 0.166, c: -0.127, d: 1.146, tx: 7.35, ty: -30.4},
						transform: [7.35, -30.4, 0.761, 1.153, -0.11, 0.22, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.564, b: -0.24, c: 0.43, d: 1.242, tx: 41.1, ty: -48.5},
						transform: [41.1, -48.5, 0.613, 1.314, 0.333, -0.402, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.557, b: -0.287, c: 0.749, d: 1.179, tx: 56.45, ty: -73.55},
						transform: [56.45, -73.55, 0.627, 1.397, 0.566, -0.475, NaN],
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
				name: "gumball_backpack_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: -0.987, b: 0.147, c: 0.147, d: 0.987, tx: -78, ty: -99.15},
						transform: [-78, -99.15, 0.998, 0.998, 0.148, 2.993, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: -0.865, b: 0.496, c: 0.496, d: 0.865, tx: -83.25, ty: -88.4},
						transform: [-83.25, -88.4, 0.997, 0.997, 0.521, 2.62, NaN],
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
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: -0.632, b: 0.773, c: 0.773, d: 0.632, tx: -88.2, ty: -73.05},
						transform: [-88.2, -73.05, 0.998, 0.998, 0.886, 2.256, NaN],
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
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: -0.782, b: 0.622, c: 0.622, d: 0.782, tx: -97.3, ty: -73.55},
						transform: [-97.3, -73.55, 0.999, 0.999, 0.672, 2.469, NaN],
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
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.944, b: 0.325, c: -0.325, d: 0.944, tx: 8.4, ty: -115.65},
						transform: [8.4, -115.65, 0.999, 0.999, -0.332, 0.332, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 63,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.943, b: 0.326, c: -0.326, d: 0.943, tx: 31.75, ty: -116.5},
						transform: [31.75, -116.5, 0.997, 0.997, -0.333, 0.333, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 64,
						to: 88,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.963, b: 0.26, c: -0.26, d: 0.963, tx: 25.25, ty: -119.5},
						transform: [25.25, -119.5, 0.997, 0.997, -0.264, 0.264, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.994, b: 0.084, c: -0.084, d: 0.994, tx: 13.35, ty: -135.35},
						transform: [13.35, -135.35, 0.997, 0.997, -0.085, 0.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.992, b: -0.11, c: 0.11, d: 0.992, tx: 1.1, ty: -138.45},
						transform: [1.1, -138.45, 0.998, 0.998, 0.11, -0.11, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.942, b: 0.33, c: -0.33, d: 0.942, tx: 12.9, ty: -110.8},
						transform: [12.9, -110.8, 0.999, 0.999, -0.337, 0.337, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.678, b: 0.733, c: -0.733, d: 0.678, tx: 39.35, ty: -78.3},
						transform: [39.35, -78.3, 0.999, 0.999, -0.824, 0.824, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 121,
						to: 122,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.662, b: 0.745, c: -0.745, d: 0.662, tx: 51.25, ty: -62.45},
						transform: [51.25, -62.45, 0.997, 0.997, -0.844, 0.844, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 123,
						to: 150,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.662, b: 0.745, c: -0.745, d: 0.662, tx: 50.25, ty: -65.45},
						transform: [50.25, -65.45, 0.997, 0.997, -0.844, 0.844, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.901, b: 0.426, c: -0.426, d: 0.901, tx: 44.95, ty: -100.65},
						transform: [44.95, -100.65, 0.996, 0.996, -0.441, 0.441, NaN],
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
						classname: "_darwin_backpack_attack",
						instancename: "",
						matrix: {a: 0.997, b: 0.051, c: -0.051, d: 0.997, tx: 39.85, ty: -134.7},
						transform: [39.85, -134.7, 0.999, 0.999, -0.051, 0.051, NaN],
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
				name: "Layer 15",
				keys: [
					{
						from: 0,
						to: 180,
					},
				]
			},
			{
				name: "arm_curve_x",
				keys: [
					{
						from: 0,
						to: 28,
					},
					{
						from: 29,
						to: 59,
					},
					{
						from: 60,
						to: 61,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.848, b: -0.338, c: 0.699, d: 0.916, tx: -59.05, ty: -93.7},
						transform: [-59.05, -93.7, 0.913, 1.152, 0.652, -0.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.875, b: -0.256, c: 0.611, d: 0.975, tx: -53.8, ty: -106.9},
						transform: [-53.8, -106.9, 0.912, 1.151, 0.56, -0.285, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.798, b: -0.439, c: 0.767, d: 0.839, tx: -54.25, ty: -99.1},
						transform: [-54.25, -99.1, 0.91, 1.137, 0.741, -0.503, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.684, b: -0.603, c: 0.966, d: 0.624, tx: -57.2, ty: -92.5},
						transform: [-57.2, -92.5, 0.911, 1.15, 0.997, -0.722, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.88, b: -0.244, c: 0.595, d: 0.987, tx: -52.35, ty: -94.05},
						transform: [-52.35, -94.05, 0.913, 1.152, 0.542, -0.27, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 119,
						to: 120,
					},
					{
						from: 121,
						to: 150,
					},
					{
						from: 151,
						to: 179,
					},
					{
						from: 180,
						to: 180,
					},
				]
			},
			{
				name: "Layer 13",
				keys: [
					{
						from: 0,
						to: 180,
					},
				]
			},
			{
				name: "anais_head",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_head_attack",
						instancename: "",
						matrix: {a: -1, b: 0.005, c: 0.005, d: 1, tx: -20.6, ty: -78.6},
						transform: [-20.6, -78.6, 1, 1, 0.005, 3.137, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_head_attack",
						instancename: "",
						matrix: {a: -0.942, b: 0.33, c: 0.33, d: 0.942, tx: -24.55, ty: -86.85},
						transform: [-24.55, -86.85, 0.998, 0.998, 0.337, 2.805, NaN],
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
						classname: "_darwin_head_attack_f2",
						instancename: "",
						matrix: {a: -0.789, b: 0.611, c: 0.611, d: 0.789, tx: -28.35, ty: -89.9},
						transform: [-28.35, -89.9, 0.997, 0.997, 0.659, 2.483, NaN],
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
						classname: "_darwin_head_attack_f2",
						instancename: "",
						matrix: {a: -0.902, b: 0.43, c: 0.43, d: 0.902, tx: -34.15, ty: -78.7},
						transform: [-34.15, -78.7, 0.999, 0.999, 0.445, 2.697, NaN],
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
						classname: "_darwin_head_attack_up_f24",
						instancename: "",
						matrix: {a: 0.992, b: 0.104, c: -0.104, d: 0.992, tx: -40.65, ty: -93.9},
						transform: [-40.65, -93.9, 0.997, 0.997, -0.104, 0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_head_attack_up",
						instancename: "",
						matrix: {a: 0.978, b: 0.191, c: -0.191, d: 0.978, tx: -35.35, ty: -105.35},
						transform: [-35.35, -105.35, 0.997, 0.997, -0.192, 0.192, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_head_attack_up",
						instancename: "",
						matrix: {a: 0.987, b: -0.139, c: 0.139, d: 0.987, tx: -38.7, ty: -104.3},
						transform: [-38.7, -104.3, 0.996, 0.996, 0.14, -0.14, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_head_attack_up",
						instancename: "",
						matrix: {a: 0.939, b: -0.333, c: 0.333, d: 0.939, tx: -45.55, ty: -96.05},
						transform: [-45.55, -96.05, 0.996, 0.996, 0.341, -0.341, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_head_attack_up_f24",
						instancename: "",
						matrix: {a: 0.991, b: 0.109, c: -0.109, d: 0.991, tx: -37.25, ty: -91.5},
						transform: [-37.25, -91.5, 0.997, 0.997, -0.11, 0.11, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_head_attack_f2",
						instancename: "",
						matrix: {a: 0.825, b: 0.561, c: -0.561, d: 0.825, tx: -16.95, ty: -89.25},
						transform: [-16.95, -89.25, 0.997, 0.997, -0.597, 0.597, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_head_attack",
						instancename: "",
						matrix: {a: 0.812, b: 0.576, c: -0.576, d: 0.812, tx: -10.55, ty: -81.95},
						transform: [-10.55, -81.95, 0.996, 0.996, -0.617, 0.617, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_head_attack",
						instancename: "",
						matrix: {a: 0.974, b: 0.208, c: -0.208, d: 0.974, tx: -11.9, ty: -91.45},
						transform: [-11.9, -91.45, 0.996, 0.996, -0.211, 0.211, NaN],
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
						classname: "_darwin_head_attack",
						instancename: "",
						matrix: {a: 0.982, b: -0.175, c: 0.175, d: 0.982, tx: -13.25, ty: -100.65},
						transform: [-13.25, -100.65, 0.997, 0.997, 0.176, -0.176, NaN],
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
				name: "Layer 14",
				keys: [
					{
						from: 0,
						to: 180,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: -0.13, c: -0.13, d: 0.991, tx: -53.5, ty: -73},
						transform: [-53.5, -73, 1, 1, -0.131, -3.011, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.948, b: 0.198, c: 0.247, d: 1.003, tx: -45.1, ty: -66.8},
						transform: [-45.1, -66.8, 0.969, 1.033, 0.241, 2.935, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.808, b: 0.481, c: 0.607, d: 0.877, tx: -42.4, ty: -62.15},
						transform: [-42.4, -62.15, 0.94, 1.066, 0.605, 2.605, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -1.18, b: 0.181, c: 0.123, d: 0.806, tx: -63.8, ty: -59},
						transform: [-63.8, -59, 1.194, 0.815, 0.152, 2.99, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.733, b: 0.744, c: -0.488, d: 0.481, tx: -4.15, ty: -90.15},
						transform: [-4.15, -90.15, 1.045, 0.685, -0.792, 0.792, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.733, b: 0.744, c: -0.488, d: 0.481, tx: -1.9, ty: -94.9},
						transform: [-1.9, -94.9, 1.045, 0.685, -0.792, 0.792, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.995, b: -0.048, c: 0.045, d: 0.928, tx: -4.2, ty: -102.75},
						transform: [-4.2, -102.75, 0.996, 0.929, 0.048, -0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: -0.161, c: 0.14, d: 0.856, tx: -9.3, ty: -103.2},
						transform: [-9.3, -103.2, 0.996, 0.867, 0.162, -0.162, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.953, b: 0.291, c: -0.252, d: 0.825, tx: -3.5, ty: -79.85},
						transform: [-3.5, -79.85, 0.997, 0.863, -0.297, 0.297, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.082, b: 0.541, c: -0.433, d: 0.517, tx: 7.3, ty: -64.75},
						transform: [7.3, -64.75, 1.21, 0.674, -0.697, 0.464, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 133,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.026, b: 0.642, c: -0.48, d: 0.473, tx: 8.65, ty: -56.35},
						transform: [8.65, -56.35, 1.21, 0.674, -0.793, 0.559, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 134,
						to: 150,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.18, b: 0.39, c: -0.302, d: 0.624, tx: 20.45, ty: -64.95},
						transform: [20.45, -64.95, 1.243, 0.693, -0.451, 0.319, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.289, b: 0.007, c: -0.004, d: 0.719, tx: 30.4, ty: -81.4},
						transform: [30.4, -81.4, 1.289, 0.719, -0.005, 0.005, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.016, b: -0.408, c: 0.268, d: 0.668, tx: 34.7, ty: -105.8},
						transform: [34.7, -105.8, 1.095, 0.72, 0.382, -0.382, NaN],
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
				name: "arm_curve_x",
				keys: [
					{
						from: 0,
						to: 28,
					},
					{
						from: 29,
						to: 88,
					},
					{
						from: 89,
						to: 118,
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.105, b: -0.74, c: -0.923, d: -0.016, tx: -26.15, ty: -89.9},
						transform: [-26.15, -89.9, 0.748, 0.923, -1.589, -1.43, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.094, b: -0.897, c: -0.922, d: 0.009, tx: -35.15, ty: -104.65},
						transform: [-35.15, -104.65, 0.902, 0.922, -1.561, -1.466, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.34, b: -0.756, c: -0.809, d: 0.392, tx: -34.35, ty: -98.8},
						transform: [-34.35, -98.8, 0.829, 0.899, -1.12, -1.993, NaN],
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
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.737, b: -0.526, c: -0.561, d: 0.677, tx: -31.85, ty: -89.9},
						transform: [-31.85, -89.9, 0.905, 0.88, -0.692, -2.521, NaN],
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
				name: "hosepipe_n_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.132, c: -0.147, d: 1.154, tx: -106.5, ty: -58.35},
						transform: [-106.5, -58.35, 1.003, 1.163, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.864, b: 0.006, c: 0.144, d: 1.306, tx: -96.25, ty: -36},
						transform: [-96.25, -36, 0.864, 1.314, 0.11, 0.007, NaN],
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
						classname: "_darwin_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 1.052, b: -0.332, c: 0.369, d: 1.261, tx: -85.4, ty: -22.7},
						transform: [-85.4, -22.7, 1.103, 1.314, 0.284, -0.306, NaN],
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
						classname: "_darwin_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: 0.07, c: 0.024, d: 1.339, tx: -109.35, ty: -40.95},
						transform: [-109.35, -40.95, 1, 1.339, 0.018, 0.07, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.955, b: 0.32, c: -0.194, d: 1.156, tx: -87.1, ty: -63.2},
						transform: [-87.1, -63.2, 1.007, 1.172, -0.166, 0.324, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.79, b: 0.42, c: -0.245, d: 1.128, tx: -78.3, ty: -73.4},
						transform: [-78.3, -73.4, 0.894, 1.154, -0.214, 0.488, NaN],
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
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.89, b: -0.173, c: 0.565, d: 1.089, tx: -52.5, ty: -54.4},
						transform: [-52.5, -54.4, 0.907, 1.227, 0.479, -0.192, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 117,
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.68, b: -0.136, c: 0.733, d: 1.089, tx: -31.65, ty: -37.65},
						transform: [-31.65, -37.65, 0.694, 1.313, 0.593, -0.198, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_hosepipe_nf_x_f0",
						instancename: "",
						matrix: {a: 0.717, b: -0.098, c: 0.687, d: 1.12, tx: -31.2, ty: -33.75},
						transform: [-31.2, -33.75, 0.724, 1.314, 0.55, -0.136, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: -1.07, b: -0.139, c: -0.141, d: 1.085, tx: 15.65, ty: -32.9},
						transform: [15.65, -32.9, 1.079, 1.094, -0.129, -3.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 149,
						classname: "_darwin_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: -1.01, b: -0.447, c: -0.385, d: 0.998, tx: 9.5, ty: -29.55},
						transform: [9.5, -29.55, 1.104, 1.07, -0.368, -2.725, NaN],
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
						classname: "_darwin_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: -0.933, b: -0.06, c: 0.174, d: 1.177, tx: 40.75, ty: -48.6},
						transform: [40.75, -48.6, 0.935, 1.189, 0.147, -3.078, NaN],
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
						classname: "_darwin_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: -1.026, b: 0.027, c: 0.456, d: 1.139, tx: 56.25, ty: -73.95},
						transform: [56.25, -73.95, 1.026, 1.227, 0.381, 3.116, NaN],
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
				name: "cone",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 25.6, ty: -80.25},
						transform: [25.6, -80.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.873, b: -0.481, c: 0.481, d: 0.873, tx: 12.2, ty: -103.25},
						transform: [12.2, -103.25, 0.997, 0.997, 0.503, -0.503, NaN],
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
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: -2, ty: -125.6},
						transform: [-2, -125.6, 0.997, 0.997, 0.994, -0.994, NaN],
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
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: -2.3, ty: -126.8},
						transform: [-2.3, -126.8, 0.999, 0.999, 1.029, -1.029, NaN],
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
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: -7, ty: -127.75},
						transform: [-7, -127.75, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: -3.85, ty: -140.7},
						transform: [-3.85, -140.7, 0.995, 0.995, 1.081, -1.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: 0.018, b: -0.996, c: 0.996, d: 0.018, tx: -24.7, ty: -132.65},
						transform: [-24.7, -132.65, 0.996, 0.996, 1.553, -1.553, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -43.6, ty: -121.25},
						transform: [-43.6, -121.25, 0.997, 0.997, 2.039, -2.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -44.55, ty: -118.25},
						transform: [-44.55, -118.25, 0.999, 0.999, 2.074, -2.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -41.85, ty: -116.2},
						transform: [-41.85, -116.2, 0.997, 0.997, 2.091, -2.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -44.05, ty: -117.65},
						transform: [-44.05, -117.65, 0.996, 0.996, 2.126, -2.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -45.65, ty: -104.25},
						transform: [-45.65, -104.25, 0.997, 0.997, 2.617, -2.617, NaN],
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
						classname: "_darwin_cone",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -31.55, ty: -89.85},
						transform: [-31.55, -89.85, 1, 1, 3.142, 3.142, 3.142],
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
						to: 28,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 23.6, ty: -79.25},
						transform: [23.6, -79.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: 0.872, b: -0.48, c: 0.48, d: 0.872, tx: 12, ty: -102},
						transform: [12, -102, 0.996, 0.996, 0.503, -0.503, NaN],
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
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: 0.543, b: -0.833, c: 0.833, d: 0.543, tx: 0.8, ty: -128.85},
						transform: [0.8, -128.85, 0.994, 0.994, 0.994, -0.994, NaN],
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
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: 0.514, b: -0.853, c: 0.853, d: 0.514, tx: -4.7, ty: -123.6},
						transform: [-4.7, -123.6, 0.996, 0.996, 1.029, -1.029, NaN],
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
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: 0.498, b: -0.861, c: 0.861, d: 0.498, tx: -5.05, ty: -133.2},
						transform: [-5.05, -133.2, 0.994, 0.994, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: 0.467, b: -0.876, c: 0.876, d: 0.467, tx: -2.3, ty: -142.9},
						transform: [-2.3, -142.9, 0.993, 0.993, 1.081, -1.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: 0.018, b: -0.994, c: 0.994, d: 0.018, tx: -25.4, ty: -137.4},
						transform: [-25.4, -137.4, 0.994, 0.994, 1.553, -1.553, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: -0.433, b: -0.896, c: 0.896, d: -0.433, tx: -48.6, ty: -131.85},
						transform: [-48.6, -131.85, 0.996, 0.996, 2.021, -2.021, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: -0.465, b: -0.882, c: 0.882, d: -0.465, tx: -44.95, ty: -120.45},
						transform: [-44.95, -120.45, 0.997, 0.997, 2.056, -2.056, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -41.55, ty: -115.25},
						transform: [-41.55, -115.25, 0.999, 0.999, 2.074, -2.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: -0.511, b: -0.856, c: 0.856, d: -0.511, tx: -43.45, ty: -117.3},
						transform: [-43.45, -117.3, 0.997, 0.997, 2.109, -2.109, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: -0.872, b: -0.484, c: 0.484, d: -0.872, tx: -42.45, ty: -103.35},
						transform: [-42.45, -103.35, 0.997, 0.997, 2.634, -2.634, NaN],
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
						classname: "_darwin_tube_anim",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -41.55, ty: -89.85},
						transform: [-41.55, -89.85, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_1_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: -0.13, c: -0.13, d: 0.991, tx: -53, ty: -74},
						transform: [-53, -74, 1, 1, -0.131, -3.011, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.948, b: 0.198, c: 0.247, d: 1.003, tx: -45.1, ty: -68.15},
						transform: [-45.1, -68.15, 0.969, 1.033, 0.241, 2.935, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.808, b: 0.481, c: 0.607, d: 0.877, tx: -40.9, ty: -65.65},
						transform: [-40.9, -65.65, 0.94, 1.066, 0.605, 2.605, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: -0.097, c: -0.097, d: 0.994, tx: -59.05, ty: -65.1},
						transform: [-59.05, -65.1, 0.998, 0.998, -0.098, -3.044, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.997, b: -0.031, c: 0.031, d: 0.997, tx: -3.95, ty: -101.8},
						transform: [-3.95, -101.8, 0.997, 0.997, 0.031, -0.031, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.966, b: 0.245, c: -0.245, d: 0.966, tx: -0.6, ty: -101.7},
						transform: [-0.6, -101.7, 0.997, 0.997, -0.248, 0.248, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.997, b: -0.014, c: 0.014, d: 0.997, tx: -5.25, ty: -104},
						transform: [-5.25, -104, 0.997, 0.997, 0.014, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 116,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.992, b: -0.1, c: 0.1, d: 0.992, tx: -11.35, ty: -103.5},
						transform: [-11.35, -103.5, 0.997, 0.997, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 117,
						to: 117,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.997, b: 0.014, c: -0.014, d: 0.997, tx: -6.25, ty: -93.8},
						transform: [-6.25, -93.8, 0.997, 0.997, -0.014, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.988, b: 0.135, c: -0.135, d: 0.988, tx: -4.35, ty: -85.4},
						transform: [-4.35, -85.4, 0.997, 0.997, -0.136, 0.136, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.977, b: 0.197, c: -0.073, d: 1.002, tx: 2.85, ty: -73.85},
						transform: [2.85, -73.85, 0.997, 1.005, -0.073, 0.199, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 133,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.941, b: 0.325, c: -0.205, d: 0.983, tx: 9.6, ty: -62.4},
						transform: [9.6, -62.4, 0.996, 1.004, -0.206, 0.332, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 134,
						to: 150,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.995, b: -0.053, c: 0.183, d: 0.987, tx: 20.4, ty: -72.25},
						transform: [20.4, -72.25, 0.996, 1.004, 0.183, -0.053, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.841, b: -0.534, c: 0.641, d: 0.773, tx: 22.85, ty: -90.4},
						transform: [22.85, -90.4, 0.996, 1.004, 0.692, -0.565, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.448, b: -0.891, c: 0.878, d: 0.472, tx: 26.25, ty: -110.65},
						transform: [26.25, -110.65, 0.997, 0.997, 1.077, -1.105, NaN],
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
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.992, b: -0.128, c: 0.128, d: 0.992, tx: 10.45, ty: -87.85},
						transform: [10.45, -87.85, 1, 1, 0.129, -0.129, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.814, b: -0.576, c: 0.576, d: 0.814, tx: 2.55, ty: -105.8},
						transform: [2.55, -105.8, 0.997, 0.997, 0.616, -0.616, NaN],
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
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.465, b: -0.882, c: 0.882, d: 0.465, tx: -3.4, ty: -133.25},
						transform: [-3.4, -133.25, 0.997, 0.997, 1.085, -1.085, NaN],
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
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.534, b: -0.844, c: 0.844, d: 0.534, tx: -18.25, ty: -112.15},
						transform: [-18.25, -112.15, 0.998, 0.998, 1.007, -1.007, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 117,
					},
					{
						from: 118,
						to: 118,
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.968, b: -0.238, c: -0.065, d: 1.121, tx: -56.9, ty: -104},
						transform: [-56.9, -104, 0.997, 1.123, -0.058, -2.9, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.984, b: 0.137, c: 0.36, d: 1.062, tx: -67.8, ty: -117.6},
						transform: [-67.8, -117.6, 0.994, 1.121, 0.327, 3.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.929, b: 0.216, c: 0.533, d: 0.947, tx: -69.9, ty: -100},
						transform: [-69.9, -100, 0.953, 1.087, 0.512, 2.914, NaN],
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
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.725, b: 0.56, c: 0.908, d: 0.541, tx: -66.85, ty: -76.7},
						transform: [-66.85, -76.7, 0.916, 1.057, 1.033, 2.484, NaN],
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
				name: "absorb_point",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 57.1, ty: -79.35},
						transform: [57.1, -79.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 29,
						to: 56,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 41.1, ty: -118.35},
						transform: [41.1, -118.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 19.1, ty: -157.35},
						transform: [19.1, -157.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 12.1, ty: -152.35},
						transform: [12.1, -152.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 61,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 12.1, ty: -162.35},
						transform: [12.1, -162.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 62,
						to: 88,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 13.1, ty: -172.35},
						transform: [13.1, -172.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 115,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -23.9, ty: -170.35},
						transform: [-23.9, -170.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 116,
						to: 117,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -62.9, ty: -162.35},
						transform: [-62.9, -162.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 118,
						to: 118,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -60.9, ty: -150.35},
						transform: [-60.9, -150.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 119,
						to: 120,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -57.9, ty: -144.35},
						transform: [-57.9, -144.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 121,
						to: 150,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -59.9, ty: -146.35},
						transform: [-59.9, -146.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 151,
						to: 179,
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -70.9, ty: -120.35},
						transform: [-70.9, -120.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_darwin_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -73.9, ty: -90.35},
						transform: [-73.9, -90.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
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
						to: 180,
					},
				]
			},
		]
	},
	"_darwin_darwin_flash": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {exec_flash: {from:2, to:2}, end: {from:14, to:14}, },
		layers: [
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_fx_flash_f0",
						instancename: "",
						matrix: {a: -0.713, b: 0.394, c: 0.45, d: 0.816, tx: 68.75, ty: -117.05},
						transform: [68.75, -117.05, 0.815, 0.932, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_fx_flash_f1",
						instancename: "",
						matrix: {a: -0.713, b: 0.394, c: 0.45, d: 0.816, tx: 68.75, ty: -117.05},
						transform: [68.75, -117.05, 0.815, 0.932, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_fx_flash_f2",
						instancename: "",
						matrix: {a: -0.713, b: 0.394, c: 0.45, d: 0.816, tx: 68.75, ty: -117.05},
						transform: [68.75, -117.05, 0.815, 0.932, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
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
						classname: "_darwin_fx_flash_f0",
						instancename: "",
						matrix: {a: 1.248, b: 0, c: 0, d: 1.124, tx: 89.15, ty: -121.1},
						transform: [89.15, -121.1, 1.248, 1.124, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_fx_flash_f1",
						instancename: "",
						matrix: {a: 1.248, b: 0, c: 0, d: 1.124, tx: 89.15, ty: -121.1},
						transform: [89.15, -121.1, 1.248, 1.124, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_fx_flash_f2",
						instancename: "",
						matrix: {a: 1.248, b: 0, c: 0, d: 1.124, tx: 89.15, ty: -121.1},
						transform: [89.15, -121.1, 1.248, 1.124, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
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
						classname: "_darwin_fx_flash_f0",
						instancename: "",
						matrix: {a: 0.061, b: 1.097, c: -0.866, d: 0.048, tx: 114.35, ty: -102.3},
						transform: [114.35, -102.3, 1.098, 0.868, -1.516, 1.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_fx_flash_f1",
						instancename: "",
						matrix: {a: 0.061, b: 1.097, c: -0.866, d: 0.048, tx: 114.35, ty: -102.3},
						transform: [114.35, -102.3, 1.098, 0.868, -1.516, 1.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_fx_flash_f2",
						instancename: "",
						matrix: {a: 0.061, b: 1.097, c: -0.866, d: 0.048, tx: 114.35, ty: -102.3},
						transform: [114.35, -102.3, 1.098, 0.868, -1.516, 1.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
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
						classname: "_darwin_fx_flash_f0",
						instancename: "",
						matrix: {a: -0.829, b: -0.627, c: -0.642, d: 0.849, tx: 105.2, ty: -116.45},
						transform: [105.2, -116.45, 1.04, 1.065, -0.647, -2.494, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_fx_flash_f1",
						instancename: "",
						matrix: {a: -0.829, b: -0.627, c: -0.642, d: 0.849, tx: 105.2, ty: -116.45},
						transform: [105.2, -116.45, 1.04, 1.065, -0.647, -2.494, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_fx_flash_f2",
						instancename: "",
						matrix: {a: -0.829, b: -0.627, c: -0.642, d: 0.849, tx: 105.2, ty: -116.45},
						transform: [105.2, -116.45, 1.04, 1.065, -0.647, -2.494, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 14,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.927, b: -0.261, c: -0.223, d: 0.866, tx: -109.15, ty: -96.4},
						transform: [-109.15, -96.4, 0.963, 0.894, -0.252, -2.867, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.157, c: -0.125, d: 0.886, tx: -116.5, ty: -101.4},
						transform: [-116.5, -101.4, 0.963, 0.894, -0.141, -2.978, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.931, b: -0.246, c: -0.209, d: 0.87, tx: -115.15, ty: -101.7},
						transform: [-115.15, -101.7, 0.963, 0.894, -0.236, -2.883, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_backpack_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: -0.141, c: -0.141, d: 0.99, tx: -80.95, ty: -92.2},
						transform: [-80.95, -92.2, 1, 1, -0.142, -3, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.03, c: -0.03, d: 1, tx: -88.05, ty: -100.5},
						transform: [-88.05, -100.5, 1, 1, -0.03, -3.111, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: -0.125, c: -0.125, d: 0.992, tx: -86.85, ty: -98},
						transform: [-86.85, -98, 1, 1, -0.125, -3.016, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota4_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_bota4_x_f0",
						instancename: "",
						matrix: {a: -0.234, b: 0.833, c: -1.006, d: -0.235, tx: -61.25, ty: -10.35},
						transform: [-61.25, -10.35, 0.865, 1.033, -1.8, 1.845, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_bota4_x_f0",
						instancename: "",
						matrix: {a: -0.284, b: 0.959, c: -0.963, d: -0.271, tx: -63.35, ty: -12.05},
						transform: [-63.35, -12.05, 1, 1, -1.845, 1.859, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_bota4_x_f0",
						instancename: "",
						matrix: {a: -0.271, b: 0.963, c: -0.963, d: -0.271, tx: -62.65, ty: -11.65},
						transform: [-62.65, -11.65, 1, 1, -1.845, 1.845, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.246, d: 0.922, tx: 66.9, ty: -43.7},
						transform: [66.9, -43.7, 1, 0.954, -0.261, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.04, d: 0.939, tx: 52, ty: -44.8},
						transform: [52, -44.8, 1, 0.94, -0.043, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.19, d: 0.922, tx: 60, ty: -44},
						transform: [60, -44, 1, 0.941, -0.204, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_90_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.114, b: -0.889, c: 0.97, d: -0.02, tx: 20.2, ty: -54.45},
						transform: [20.2, -54.45, 0.896, 0.97, 1.592, -1.699, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.119, b: -0.912, c: 0.966, d: 0.135, tx: 10.2, ty: -68.3},
						transform: [10.2, -68.3, 0.92, 0.975, 1.432, -1.701, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.114, b: -0.889, c: 0.97, d: -0.02, tx: 16.9, ty: -57.8},
						transform: [16.9, -57.8, 0.896, 0.97, 1.592, -1.699, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_90_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.966, b: 0.121, c: -0.21, d: 0.891, tx: -32.85, ty: -46.9},
						transform: [-32.85, -46.9, 0.973, 0.915, -0.232, 0.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.895, b: 0.038, c: -0.11, d: 0.961, tx: -39.9, ty: -52.5},
						transform: [-39.9, -52.5, 0.896, 0.967, -0.114, 0.042, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.895, b: 0.038, c: -0.144, d: 0.959, tx: -37.95, ty: -52.4},
						transform: [-37.95, -52.4, 0.896, 0.97, -0.149, 0.042, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_head_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_darwin_head_x_f19",
						instancename: "",
						matrix: {a: -0.982, b: -0.189, c: -0.189, d: 0.982, tx: -29.05, ty: -55.8},
						transform: [-29.05, -55.8, 1, 1, -0.19, -2.951, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_darwin_head_x_f19",
						instancename: "",
						matrix: {a: -0.997, b: -0.079, c: -0.079, d: 0.997, tx: -32.4, ty: -70.1},
						transform: [-32.4, -70.1, 1, 1, -0.079, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_darwin_head_x_f19",
						instancename: "",
						matrix: {a: -0.985, b: -0.173, c: -0.173, d: 0.985, tx: -34.4, ty: -62.5},
						transform: [-34.4, -62.5, 1, 1, -0.174, -2.968, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.832, b: -0.689, c: -0.551, d: 0.888, tx: -66.05, ty: -59.4},
						transform: [-66.05, -59.4, 1.08, 1.045, -0.556, -2.45, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.287, 0.496], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -1.081, b: -0.039, c: -0.039, d: 1.081, tx: -70.6, ty: -65.7},
						transform: [-70.6, -65.7, 1.081, 1.081, -0.036, -3.106, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.858, b: -0.549, c: -0.534, d: 0.945, tx: -73.6, ty: -59.7},
						transform: [-73.6, -59.7, 1.019, 1.086, -0.514, -2.572, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_hand_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.357, b: 0.934, c: -0.934, d: 0.357, tx: -64.1, ty: -62.8},
						transform: [-64.1, -62.8, 1, 1, -1.206, 1.206, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.443, 0.017], [0.726, 0.505], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.771, b: -0.755, c: -0.62, d: 0.933, tx: -64.2, ty: -61.55},
						transform: [-64.2, -61.55, 1.08, 1.12, -0.586, -2.367, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.287, 0.496], [0.563, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -1.065, b: -0.189, c: -0.189, d: 1.065, tx: -70.15, ty: -66.85},
						transform: [-70.15, -66.85, 1.081, 1.081, -0.175, -2.966, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.809, b: -0.77, c: -0.527, d: 0.945, tx: -72.1, ty: -62.3},
						transform: [-72.1, -62.3, 1.117, 1.081, -0.509, -2.381, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hand_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.202, c: 0.202, d: 0.979, tx: 52.55, ty: -99.5},
						transform: [52.55, -99.5, 1, 1, 0.203, -0.203, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_hand_x_f0",
						instancename: "",
						matrix: {a: 0.976, b: -0.218, c: 0.218, d: 0.976, tx: 46.5, ty: -116.9},
						transform: [46.5, -116.9, 1, 1, 0.22, -0.22, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.435, 0.023], [0.744, 0.432], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 4,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.102, b: -0.995, c: 0.995, d: -0.102, tx: 24.35, ty: -108.55},
						transform: [24.35, -108.55, 1, 1, 1.673, -1.673, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.313, 0.372], [0.468, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.243, b: -0.97, c: 0.97, d: -0.243, tx: 30.45, ty: -116.95},
						transform: [30.45, -116.95, 1, 1, 1.817, -1.817, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 22",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_blanket1_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.017, c: -0.017, d: 1, tx: -38, ty: -116.4},
						transform: [-38, -116.4, 1, 1, -0.017, 0.017, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_blanket2_x_f0",
						instancename: "",
						matrix: {a: 0.984, b: -0.094, c: 0.117, d: 0.912, tx: -46.4, ty: -119.95},
						transform: [-46.4, -119.95, 0.989, 0.92, 0.128, -0.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_blanket2_x_f0",
						instancename: "",
						matrix: {a: 0.956, b: -0.091, c: 0.137, d: 1.066, tx: -50.05, ty: -117.5},
						transform: [-50.05, -117.5, 0.96, 1.075, 0.128, -0.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_blanket2_x_f0",
						instancename: "",
						matrix: {a: 1.033, b: 0, c: 0, d: 0.955, tx: -47.5, ty: -117.65},
						transform: [-47.5, -117.65, 1.033, 0.955, 0, 0, 0],
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
					},
					{
						from: 3,
						to: 4,
						classname: "_darwin_pollaroid_button_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 46.9, ty: -113.95},
						transform: [46.9, -113.95, 1, 1, 0, 0, 0],
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
						classname: "_darwin_pollaroid_button_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 46.9, ty: -112.35},
						transform: [46.9, -112.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tube_tripod_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 0.905, b: 0.373, c: -0.426, d: 0.794, tx: 66.8, ty: -51.9},
						transform: [66.8, -51.9, 0.979, 0.901, -0.492, 0.391, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 0.92, b: 0.186, c: -0.175, d: 0.982, tx: 67.25, ty: -64.3},
						transform: [67.25, -64.3, 0.939, 0.998, -0.176, 0.2, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 0.964, b: 0.267, c: -0.267, d: 0.964, tx: 66.8, ty: -63.1},
						transform: [66.8, -63.1, 1, 1, -0.27, 0.27, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tube_tripod_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 0.905, b: -0.374, c: 0.426, d: 0.794, tx: 79.35, ty: -52.45},
						transform: [79.35, -52.45, 0.979, 0.901, 0.493, -0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 0.916, b: -0.205, c: 0.192, d: 0.979, tx: 79, ty: -64.35},
						transform: [79, -64.35, 0.939, 0.997, 0.193, -0.22, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 0.967, b: -0.255, c: 0.255, d: 0.967, tx: 79.35, ty: -63.75},
						transform: [79.35, -63.75, 1, 1, 0.258, -0.258, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tube_tripod_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.007, c: -0.008, d: 0.814, tx: 73.15, ty: -52.75},
						transform: [73.15, -52.75, 1, 0.814, -0.009, 0.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 0.936, b: 0.008, c: -0.008, d: 1.004, tx: 73.2, ty: -65.25},
						transform: [73.2, -65.25, 0.936, 1.004, -0.008, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_tube_tripod_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.008, c: -0.008, d: 1, tx: 73.15, ty: -64.05},
						transform: [73.15, -64.05, 1, 1, -0.008, 0.008, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pollaroid_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_pollaroid_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 73.25, ty: -74.95},
						transform: [73.25, -74.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.017], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_pollaroid_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 73.25, ty: -89.35},
						transform: [73.25, -89.35, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.017], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_darwin_pollaroid_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 73.25, ty: -86.95},
						transform: [73.25, -86.95, 1, 1, 0, 0, 0],
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
				name: "Layer 10",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 2,
					},
					{
						from: 3,
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
	"_darwin_darwin_run": {
		type: "movieclip",
		fps: 30,
		totalFrames: 16,
		labels: {},
		layers: [
			{
				name: "bota_flex",
				keys: [
					{
						from: 0,
						to: 14,
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: 0.205, b: 0.837, c: -0.703, d: 0.363, tx: -2, ty: -50.05},
						transform: [-2, -50.05, 0.862, 0.791, -1.094, 1.33, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_relax",
				keys: [
					{
						from: 0,
						to: 14,
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.633, b: -0.549, c: 0.612, d: 0.694, tx: -16.2, ty: -89.5},
						transform: [-16.2, -89.5, 0.838, 0.925, 0.723, -0.714, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.959, b: 0.536, c: -0.882, d: 0.502, tx: 20.85, ty: -44.65},
						transform: [20.85, -44.65, 1.098, 1.015, -1.054, 0.51, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.808, b: 0.569, c: -0.812, d: 0.609, tx: 41, ty: -52.75},
						transform: [41, -52.75, 0.988, 1.015, -0.927, 0.614, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 5,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.861, b: 0.512, c: -0.577, d: 0.765, tx: 75.55, ty: -75.85},
						transform: [75.55, -75.85, 1.002, 0.958, -0.646, 0.537, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 1], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.963, b: 0.313, c: -0.458, d: 0.842, tx: 104.9, ty: -127.85},
						transform: [104.9, -127.85, 1.013, 0.958, -0.498, 0.314, NaN],
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
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.975, b: -0.287, c: 0.109, d: 0.993, tx: 79.15, ty: -63.8},
						transform: [79.15, -63.8, 1.017, 0.999, 0.109, -0.287, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: 1.002, b: 0.025, c: 0.183, d: 0.974, tx: 35.5, ty: -44.9},
						transform: [35.5, -44.9, 1.002, 0.991, 0.185, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: 0.025, c: 0.071, d: 0.974, tx: 23.9, ty: -44.9},
						transform: [23.9, -44.9, 0.999, 0.977, 0.073, 0.025, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.002, b: 0.023, c: -0.048, d: 0.848, tx: 29.25, ty: -38.95},
						transform: [29.25, -38.95, 1.002, 0.85, -0.057, 0.023, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.037, b: 0.023, c: -0.167, d: 0.858, tx: 20.55, ty: -38.95},
						transform: [20.55, -38.95, 1.038, 0.874, -0.192, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.073, b: 0.024, c: -0.29, d: 0.851, tx: 11.75, ty: -39},
						transform: [11.75, -39, 1.073, 0.899, -0.329, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_45",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.608, b: -0.653, c: 0.674, d: 0.698, tx: 2.35, ty: -87.55},
						transform: [2.35, -87.55, 0.892, 0.97, 0.767, -0.821, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.521, b: -0.724, c: 0.756, d: 0.608, tx: 17.2, ty: -92.9},
						transform: [17.2, -92.9, 0.892, 0.97, 0.894, -0.947, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 5,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.327, b: -0.83, c: 0.883, d: 0.403, tx: 45.35, ty: -112.25},
						transform: [45.35, -112.25, 0.892, 0.97, 1.142, -1.196, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.242, 1], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.131, b: -0.881, c: 0.96, d: -0.142, tx: 63.9, ty: -139.9},
						transform: [63.9, -139.9, 0.891, 0.97, 1.718, -1.719, NaN],
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
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.564, b: -0.632, c: 0.672, d: 0.732, tx: 45, ty: -116.1},
						transform: [45, -116.1, 0.848, 0.994, 0.742, -0.842, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.903, b: -0.025, c: 0.185, d: 0.925, tx: 24.6, ty: -99.75},
						transform: [24.6, -99.75, 0.903, 0.943, 0.198, -0.027, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.906, b: -0.025, c: 0.079, d: 0.925, tx: 19.3, ty: -99.75},
						transform: [19.3, -99.75, 0.906, 0.928, 0.085, -0.027, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.795, b: -0.374, c: 0.337, d: 0.812, tx: 20.35, ty: -91.65},
						transform: [20.35, -91.65, 0.879, 0.879, 0.393, -0.44, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.803, b: -0.397, c: 0.453, d: 0.798, tx: 6.1, ty: -91.1},
						transform: [6.1, -91.1, 0.896, 0.918, 0.516, -0.459, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.812, b: -0.424, c: 0.574, d: 0.77, tx: -8.35, ty: -90.55},
						transform: [-8.35, -90.55, 0.916, 0.96, 0.641, -0.481, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.19, d: 0.922, tx: -6, ty: -41.9},
						transform: [-6, -41.9, 1, 0.941, -0.204, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.239, d: 0.961, tx: -3.65, ty: -43.75},
						transform: [-3.65, -43.75, 1, 0.991, -0.244, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.1, d: 0.977, tx: -21.8, ty: -44.5},
						transform: [-21.8, -44.5, 1, 0.982, -0.102, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.485, b: 0.893, c: -0.949, d: 0.315, tx: -27.2, ty: -61.6},
						transform: [-27.2, -61.6, 1.017, 0.999, -1.251, 1.073, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: -0.379, b: 0.896, c: -0.898, d: -0.191, tx: -39.2, ty: -79.05},
						transform: [-39.2, -79.05, 0.973, 0.918, -1.78, 1.97, NaN],
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
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: -0.841, b: 0.489, c: -0.483, d: -0.762, tx: -49.5, ty: -90.3},
						transform: [-49.5, -90.3, 0.973, 0.902, -2.577, 2.615, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: -0.692, b: 0.684, c: -0.757, d: -0.519, tx: -45.15, ty: -80.6},
						transform: [-45.15, -80.6, 0.973, 0.918, -2.172, 2.362, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0], [0.725, 0.309], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: -0.245, b: 0.938, c: -0.914, d: -0.069, tx: -34.4, ty: -54.4},
						transform: [-34.4, -54.4, 0.97, 0.917, -1.646, 1.826, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.375, 0.265], [0.71, 0.596], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: -0.3, b: 0.92, c: -0.907, d: -0.136, tx: -25.85, ty: -45.35},
						transform: [-25.85, -45.35, 0.967, 0.917, -1.719, 1.886, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.372, 0.298], [0.706, 0.631], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: -0.111, b: 0.969, c: -0.911, d: 0.068, tx: -15.45, ty: -45.7},
						transform: [-15.45, -45.7, 0.975, 0.914, -1.496, 1.685, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.364, 0.314], [0.698, 0.647], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
					},
				]
			},
			{
				name: "leg_relax",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.702, b: -0.475, c: 0.417, d: 0.812, tx: -20.85, ty: -94.3},
						transform: [-20.85, -94.3, 0.848, 0.913, 0.475, -0.596, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.727, b: -0.496, c: 0.374, d: 0.846, tx: -15.75, ty: -98.35},
						transform: [-15.75, -98.35, 0.88, 0.925, 0.416, -0.598, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.828, b: 0.179, c: -0.337, d: 0.901, tx: -0.75, ty: -98.55},
						transform: [-0.75, -98.55, 0.848, 0.962, -0.358, 0.213, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.882, b: 0.268, c: -0.301, d: 0.953, tx: 0.9, ty: -115.15},
						transform: [0.9, -115.15, 0.922, 1, -0.306, 0.295, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.804, b: 0.253, c: -0.324, d: 0.853, tx: -9.1, ty: -110.45},
						transform: [-9.1, -110.45, 0.843, 0.913, -0.363, 0.305, NaN],
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
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.66, b: 0.523, c: -0.5, d: 0.778, tx: -18.85, ty: -113.4},
						transform: [-18.85, -113.4, 0.842, 0.925, -0.571, 0.67, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 9,
						to: 10,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.709, b: 0.455, c: -0.42, d: 0.824, tx: -13.95, ty: -108.3},
						transform: [-13.95, -108.3, 0.842, 0.925, -0.471, 0.57, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0], [0.725, 0.309], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.85, b: -0.052, c: -0.11, d: 0.917, tx: -13.2, ty: -95.2},
						transform: [-13.2, -95.2, 0.852, 0.924, -0.119, -0.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.375, 0.265], [0.71, 0.596], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.836, b: 0.081, c: -0.033, d: 0.924, tx: -10, ty: -83.4},
						transform: [-10, -83.4, 0.84, 0.924, -0.035, 0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.372, 0.298], [0.706, 0.631], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.823, b: -0.161, c: 0.216, d: 0.898, tx: -10.15, ty: -84.9},
						transform: [-10.15, -84.9, 0.839, 0.924, 0.236, -0.193, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.364, 0.314], [0.698, 0.647], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.153, c: -0.122, d: 0.886, tx: -95.2, ty: -110.25},
						transform: [-95.2, -110.25, 0.963, 0.894, -0.137, -2.982, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.122], [0.366, 0.229], [0.648, 0.623], [0.699, 0.694], [1, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.153, c: -0.122, d: 0.886, tx: -77.3, ty: -146.35},
						transform: [-77.3, -146.35, 0.963, 0.894, -0.137, -2.982, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.956], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.959, b: -0.086, c: -0.06, d: 0.892, tx: -76.95, ty: -151.25},
						transform: [-76.95, -151.25, 0.963, 0.894, -0.067, -3.052, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.703, 0], [0.984, 0.555], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.153, c: -0.122, d: 0.886, tx: -89.8, ty: -125.35},
						transform: [-89.8, -125.35, 0.963, 0.894, -0.137, -2.982, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.285, 0.441], [0.626, 0.764], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.151, c: -0.121, d: 0.885, tx: -92.8, ty: -119.15},
						transform: [-92.8, -119.15, 0.962, 0.894, -0.136, -2.984, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.315, 0.462], [0.654, 0.781], [1, 1], ],
						}
					},
				]
			},
			{
				name: "gumball_backpack_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.026, c: -0.026, d: 1, tx: -66.25, ty: -109},
						transform: [-66.25, -109, 1, 1, -0.026, -3.115, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.283, 0.122], [0.366, 0.229], [0.648, 0.623], [0.699, 0.694], [1, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 8,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.026, c: -0.026, d: 1, tx: -48.85, ty: -145.6},
						transform: [-48.85, -145.6, 1, 1, -0.026, -3.115, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.956], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.043, c: 0.043, d: 0.999, tx: -48.05, ty: -152.6},
						transform: [-48.05, -152.6, 1, 1, 0.043, 3.098, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.703, 0], [0.984, 0.555], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.026, c: -0.026, d: 1, tx: -60.85, ty: -124.6},
						transform: [-60.85, -124.6, 1, 1, -0.026, -3.115, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.285, 0.441], [0.626, 0.764], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.026, c: -0.026, d: 0.999, tx: -63.8, ty: -118.4},
						transform: [-63.8, -118.4, 1, 1, -0.026, -3.115, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.315, 0.462], [0.654, 0.781], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: 0.209, c: 0.211, d: 1.002, tx: 36.15, ty: -76.25},
						transform: [36.15, -76.25, 1.012, 1.024, 0.207, 2.934, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: 0.209, c: 0.211, d: 1.002, tx: 52.95, ty: -107.45},
						transform: [52.95, -107.45, 1.012, 1.024, 0.207, 2.934, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.956], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.006, c: -0.006, d: 1.024, tx: 56.15, ty: -119.55},
						transform: [56.15, -119.55, 1.012, 1.024, -0.006, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.944, b: 0.366, c: 0.37, d: 0.955, tx: 54.75, ty: -116.6},
						transform: [54.75, -116.6, 1.012, 1.024, 0.37, 2.771, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.691, 0.151], [0.98, 0.615], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: 0.209, c: 0.211, d: 1.002, tx: 40.95, ty: -86.45},
						transform: [40.95, -86.45, 1.012, 1.024, 0.207, 2.934, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.276, 0.481], [0.622, 0.795], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: 0.206, c: 0.209, d: 1.001, tx: 37.35, ty: -79},
						transform: [37.35, -79, 1.011, 1.023, 0.206, 2.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.54], [0.66, 0.838], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: 0.207, c: 0.209, d: 1.002, tx: 36.3, ty: -76.7},
						transform: [36.3, -76.7, 1.012, 1.023, 0.206, 2.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.343, 0.861], [0.684, 1], [1, 1], ],
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
						classname: "_darwin_darwin_head_x_f7",
						instancename: "",
						matrix: {a: -0.997, b: -0.075, c: -0.075, d: 0.997, tx: -10, ty: -84.2},
						transform: [-10, -84.2, 1, 1, -0.075, -3.067, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 7,
						classname: "_darwin_darwin_head_x_f7",
						instancename: "",
						matrix: {a: -0.997, b: -0.075, c: -0.075, d: 0.997, tx: 6.8, ty: -115.4},
						transform: [6.8, -115.4, 1, 1, -0.075, -3.067, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.956], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 12,
						classname: "_darwin_darwin_head_x_f7",
						instancename: "",
						matrix: {a: -1, b: -0.005, c: -0.005, d: 1, tx: 9.6, ty: -126.35},
						transform: [9.6, -126.35, 1, 1, -0.005, -3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.703, 0], [0.984, 0.555], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_darwin_head_x_f7",
						instancename: "",
						matrix: {a: -0.997, b: -0.075, c: -0.075, d: 0.997, tx: -5.2, ty: -94.4},
						transform: [-5.2, -94.4, 1, 1, -0.075, -3.067, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.276, 0.481], [0.622, 0.795], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_darwin_head_x_f7",
						instancename: "",
						matrix: {a: -0.997, b: -0.074, c: -0.074, d: 0.997, tx: -8.7, ty: -87.05},
						transform: [-8.7, -87.05, 1, 1, -0.074, -3.067, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.54], [0.66, 0.838], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_darwin_head_x_f7",
						instancename: "",
						matrix: {a: -0.997, b: -0.074, c: -0.074, d: 0.997, tx: -9.8, ty: -84.7},
						transform: [-9.8, -84.7, 1, 1, -0.074, -3.067, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.343, 0.861], [0.684, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_scared_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.009, b: -0.081, c: -0.082, d: 1.021, tx: -35.75, ty: -79.45},
						transform: [-35.75, -79.45, 1.012, 1.024, -0.08, -3.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.009, b: -0.081, c: -0.082, d: 1.021, tx: -18.95, ty: -110.65},
						transform: [-18.95, -110.65, 1.012, 1.024, -0.08, -3.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.956], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.956, b: -0.341, c: -0.27, d: 0.988, tx: -17.05, ty: -117.5},
						transform: [-17.05, -117.5, 1.015, 1.024, -0.267, -2.8, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.372, 0], [0.704, 0.359], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.008, b: 0.107, c: 0.043, d: 1.022, tx: -17.65, ty: -117.25},
						transform: [-17.65, -117.25, 1.014, 1.023, 0.042, 3.036, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.691, 0.151], [0.98, 0.615], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.009, b: -0.081, c: -0.082, d: 1.021, tx: -30.95, ty: -89.65},
						transform: [-30.95, -89.65, 1.012, 1.024, -0.08, -3.062, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.276, 0.481], [0.622, 0.795], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.009, b: -0.08, c: -0.081, d: 1.021, tx: -34.45, ty: -82.2},
						transform: [-34.45, -82.2, 1.012, 1.024, -0.079, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.54], [0.66, 0.838], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.009, b: -0.08, c: -0.081, d: 1.021, tx: -35.6, ty: -79.9},
						transform: [-35.6, -79.9, 1.012, 1.024, -0.079, -3.063, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.343, 0.861], [0.684, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "arm_scared_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: 0.209, c: 0.211, d: 1.002, tx: 36.15, ty: -76.25},
						transform: [36.15, -76.25, 1.012, 1.024, 0.207, 2.934, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: 0.209, c: 0.211, d: 1.002, tx: 52.95, ty: -107.45},
						transform: [52.95, -107.45, 1.012, 1.024, 0.207, 2.934, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.266, 0.956], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -1.017, b: -0.006, c: 0.088, d: 1.02, tx: 55.5, ty: -116.3},
						transform: [55.5, -116.3, 1.017, 1.024, 0.086, -3.135, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -0.893, b: 0.477, c: 0.452, d: 0.919, tx: 54.7, ty: -114.05},
						transform: [54.7, -114.05, 1.013, 1.024, 0.457, 2.651, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.691, 0.151], [0.98, 0.615], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: 0.209, c: 0.211, d: 1.002, tx: 40.95, ty: -86.45},
						transform: [40.95, -86.45, 1.012, 1.024, 0.207, 2.934, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.276, 0.481], [0.622, 0.795], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: 0.206, c: 0.209, d: 1.001, tx: 37.35, ty: -79},
						transform: [37.35, -79, 1.011, 1.023, 0.206, 2.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.319, 0.54], [0.66, 0.838], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: 0.207, c: 0.209, d: 1.002, tx: 36.3, ty: -76.7},
						transform: [36.3, -76.7, 1.012, 1.023, 0.206, 2.936, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.343, 0.861], [0.684, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 12,
						to: 12,
					},
					{
						from: 13,
						to: 15,
					},
				]
			},
		]
	},
	"_darwin_darwin_hit": {
		type: "movieclip",
		fps: 30,
		totalFrames: 22,
		labels: {end: {from:21, to:21}, },
		layers: [
			{
				name: "v",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.871, b: 0.425, c: 0.327, d: 0.952, tx: -86.95, ty: -100.4},
						transform: [-86.95, -100.4, 0.969, 1.007, 0.331, 2.687, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.966, b: 0.165, c: 0.323, d: 0.886, tx: -95.85, ty: -109.05},
						transform: [-95.85, -109.05, 0.98, 0.943, 0.349, 2.973, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: 0.115, c: 0.139, d: 0.883, tx: -86.9, ty: -111.3},
						transform: [-86.9, -111.3, 0.962, 0.894, 0.156, 3.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.961, b: 0.048, c: 0.01, d: 0.894, tx: -81.95, ty: -121.45},
						transform: [-81.95, -121.45, 0.962, 0.894, 0.011, 3.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.152, 0.767], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.962, b: -0.027, c: -0.06, d: 0.892, tx: -81.25, ty: -120.4},
						transform: [-81.25, -120.4, 0.962, 0.894, -0.067, -3.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: 0.099, c: 0.056, d: 0.892, tx: -83.65, ty: -121.5},
						transform: [-83.65, -121.5, 0.962, 0.894, 0.063, 3.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0.024], [0.392, 0.938], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: 0.074, c: 0.033, d: 0.893, tx: -74.65, ty: -120.5},
						transform: [-74.65, -120.5, 0.962, 0.894, 0.037, 3.065, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.935, b: 0.226, c: 0.176, d: 0.876, tx: -90.75, ty: -129.2},
						transform: [-90.75, -129.2, 0.962, 0.894, 0.198, 2.904, NaN],
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
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.928, b: 0.255, c: 0.202, d: 0.87, tx: -87.15, ty: -124},
						transform: [-87.15, -124, 0.962, 0.894, 0.228, 2.874, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_c_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 5,
					},
					{
						from: 6,
						to: 6,
					},
					{
						from: 7,
						to: 7,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.637, b: -0.838, c: 0.796, d: 0.605, tx: 71.45, ty: -84.85},
						transform: [71.45, -84.85, 1.052, 1, 0.921, -0.921, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 1.049, b: -0.083, c: 0.079, d: 0.997, tx: 41.2, ty: -70.4},
						transform: [41.2, -70.4, 1.052, 1, 0.079, -0.079, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.913, b: 0.523, c: 0.497, d: 0.868, tx: 42.4, ty: -71.3},
						transform: [42.4, -71.3, 1.052, 1, 0.52, 2.621, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.363, b: 0.988, c: 0.938, d: 0.345, tx: 72.35, ty: -85.1},
						transform: [72.35, -85.1, 1.052, 1, 1.218, 1.923, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: 0.116, b: -1.048, c: 1.07, d: 0.043, tx: 69.7, ty: -89.4},
						transform: [69.7, -89.4, 1.055, 1.071, 1.53, -1.461, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.07, b: -1.053, c: 1.061, d: -0.145, tx: 71.1, ty: -95.75},
						transform: [71.1, -95.75, 1.055, 1.071, 1.706, -1.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.978, b: -0.715, c: 0.529, d: 0.724, tx: 72.9, ty: -85.55},
						transform: [72.9, -85.55, 1.212, 0.896, 0.631, -0.631, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.112, b: -0.482, c: 0.357, d: 0.822, tx: 82.85, ty: -78.35},
						transform: [82.85, -78.35, 1.212, 0.896, 0.409, -0.409, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
					},
				]
			},
			{
				name: "Layer 20",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_arm_fx_x_f0",
						instancename: "",
						matrix: {a: 0.038, b: 0.852, c: 1.105, d: -0.05, tx: 71.05, ty: -139.5},
						transform: [71.05, -139.5, 0.853, 1.106, 1.616, 1.526, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_arm_fx_x_f0",
						instancename: "",
						matrix: {a: 0.189, b: 0.831, c: 1.079, d: -0.246, tx: 63.1, ty: -161.45},
						transform: [63.1, -161.45, 0.853, 1.106, 1.795, 1.347, NaN],
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
					},
					{
						from: 4,
						to: 6,
					},
					{
						from: 7,
						to: 7,
						classname: "_darwin_arm_fx_x_f0",
						instancename: "",
						matrix: {a: -0.319, b: -0.873, c: 1.039, d: -0.379, tx: 82.35, ty: -111.85},
						transform: [82.35, -111.85, 0.929, 1.106, 1.921, -1.921, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
					},
					{
						from: 9,
						to: 9,
					},
					{
						from: 10,
						to: 11,
					},
					{
						from: 12,
						to: 21,
					},
				]
			},
			{
				name: "arm_curve_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.671, b: 0.741, c: 0.741, d: -0.671, tx: 61.05, ty: -154.2},
						transform: [61.05, -154.2, 1, 1, 2.307, 0.835, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.902, b: 0.433, c: 0.433, d: -0.902, tx: 41.45, ty: -176.45},
						transform: [41.45, -176.45, 1, 1, 2.694, 0.448, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 5,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -1.047, b: -0.232, c: 0.398, d: -0.918, tx: 44.1, ty: -170.25},
						transform: [44.1, -170.25, 1.072, 1, 2.733, -2.924, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.914, b: -0.521, c: 0.495, d: -0.869, tx: 62.8, ty: -153.7},
						transform: [62.8, -153.7, 1.052, 1, 2.623, -2.623, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
					},
					{
						from: 10,
						to: 11,
					},
					{
						from: 12,
						to: 15,
					},
					{
						from: 16,
						to: 17,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.527, b: -0.929, c: 0.941, d: 0.338, tx: 53.75, ty: -121.15},
						transform: [53.75, -121.15, 1.068, 1, 1.226, -1.054, NaN],
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
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.757, b: -0.732, c: 0.695, d: 0.719, tx: 52.95, ty: -108.65},
						transform: [52.95, -108.65, 1.052, 1, 0.769, -0.769, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.714, b: 0.638, c: -0.351, d: 0.745, tx: 42.55, ty: -52.45},
						transform: [42.55, -52.45, 0.957, 0.824, -0.44, 0.729, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.43, b: 0.819, c: -0.674, d: 0.474, tx: 36.2, ty: -66.5},
						transform: [36.2, -66.5, 0.925, 0.824, -0.958, 1.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.717, b: 0.578, c: -0.441, d: 0.699, tx: 38.5, ty: -44.85},
						transform: [38.5, -44.85, 0.921, 0.826, -0.563, 0.678, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: -0.01, c: 0.09, d: 0.767, tx: 22.45, ty: -35.25},
						transform: [22.45, -35.25, 0.983, 0.772, 0.116, -0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.152, 0.767], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: -0.01, c: -0.051, d: 0.686, tx: 29.1, ty: -31.4},
						transform: [29.1, -31.4, 0.983, 0.688, -0.074, -0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.961, b: -0.01, c: 0.029, d: 0.786, tx: 24.85, ty: -36.1},
						transform: [24.85, -36.1, 0.961, 0.786, 0.037, -0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0.024], [0.392, 0.938], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.962, b: -0.01, c: -0.114, d: 0.787, tx: 31.7, ty: -36.2},
						transform: [31.7, -36.2, 0.962, 0.795, -0.144, -0.01, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.022, d: 0.864, tx: 13, ty: -39.15},
						transform: [13, -39.15, 1, 0.865, 0.026, 0, NaN],
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
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.022, d: 0.791, tx: 13, ty: -35.7},
						transform: [13, -35.7, 1, 0.791, 0.028, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_90_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.581, b: -0.767, c: 0.703, d: 0.723, tx: 26.95, ty: -97.5},
						transform: [26.95, -97.5, 0.963, 1.008, 0.771, -0.922, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.754, b: -0.583, c: 0.658, d: 0.764, tx: 23.3, ty: -108.8},
						transform: [23.3, -108.8, 0.953, 1.008, 0.71, -0.658, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.457, c: 0.569, d: 0.805, tx: 24.3, ty: -90.9},
						transform: [24.3, -90.9, 0.899, 0.986, 0.615, -0.533, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.922, b: -0.416, c: 0.296, d: 0.783, tx: 17.9, ty: -87.5},
						transform: [17.9, -87.5, 1.011, 0.837, 0.362, -0.424, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.152, 0.767], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.783, b: -0.403, c: 0.432, d: 0.716, tx: 16.35, ty: -78},
						transform: [16.35, -78, 0.881, 0.837, 0.543, -0.476, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.778, b: -0.43, c: 0.332, d: 0.761, tx: 15.75, ty: -85.3},
						transform: [15.75, -85.3, 0.889, 0.83, 0.411, -0.505, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0.024], [0.392, 0.938], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.791, b: -0.43, c: 0.334, d: 0.748, tx: 23.1, ty: -85.45},
						transform: [23.1, -85.45, 0.9, 0.819, 0.42, -0.498, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.855, b: -0.001, c: 0.015, d: 0.904, tx: 11.7, ty: -93.15},
						transform: [11.7, -93.15, 0.855, 0.904, 0.017, -0.001, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.934, b: -0.001, c: 0.017, d: 0.832, tx: 12.65, ty: -86.25},
						transform: [12.65, -86.25, 0.934, 0.832, 0.02, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.011, d: 0.928, tx: -24.4, ty: -42.15},
						transform: [-24.4, -42.15, 1, 0.928, -0.012, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.075, d: 0.928, tx: -21.35, ty: -42.15},
						transform: [-21.35, -42.15, 1, 0.931, -0.081, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.117, d: 0.864, tx: -30.45, ty: -39.15},
						transform: [-30.45, -39.15, 1, 0.872, 0.134, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.007, d: 0.791, tx: -24.6, ty: -35.7},
						transform: [-24.6, -35.7, 1, 0.791, -0.009, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.152, 0.767], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.161, d: 0.791, tx: -32.55, ty: -35.7},
						transform: [-32.55, -35.7, 1, 0.807, 0.201, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.021, d: 0.791, tx: -23.95, ty: -35.7},
						transform: [-23.95, -35.7, 1, 0.791, -0.026, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0.024], [0.392, 0.938], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.145, d: 0.791, tx: -18.1, ty: -35.7},
						transform: [-18.1, -35.7, 1, 0.804, -0.182, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.029, d: 0.864, tx: -9.5, ty: -39.15},
						transform: [-9.5, -39.15, 1, 0.865, -0.033, 3.142, NaN],
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
						classname: "_darwin_bota_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.029, d: 0.791, tx: -9.5, ty: -35.7},
						transform: [-9.5, -35.7, 1, 0.791, -0.036, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_45_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.784, b: -0.587, c: -0.438, d: 0.858, tx: -8.3, ty: -97.5},
						transform: [-8.3, -97.5, 0.98, 0.963, -0.472, -2.499, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.86, b: -0.469, c: -0.248, d: 0.946, tx: -16.65, ty: -104.5},
						transform: [-16.65, -104.5, 0.98, 0.978, -0.256, -2.642, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.765, b: -0.611, c: -0.447, d: 0.751, tx: -13.25, ty: -89.2},
						transform: [-13.25, -89.2, 0.98, 0.874, -0.537, -2.468, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.859, b: -0.446, c: -0.41, d: 0.71, tx: -12.75, ty: -85.1},
						transform: [-12.75, -85.1, 0.968, 0.82, -0.524, -2.663, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.152, 0.767], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.73, b: -0.605, c: -0.488, d: 0.659, tx: -14.15, ty: -81.35},
						transform: [-14.15, -81.35, 0.948, 0.82, -0.637, -2.45, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: -0.347, c: -0.313, d: 0.758, tx: -14.5, ty: -84.9},
						transform: [-14.5, -84.9, 0.947, 0.82, -0.392, -2.766, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0.024], [0.392, 0.938], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.848, b: -0.396, c: -0.378, d: 0.739, tx: -3.95, ty: -85.1},
						transform: [-3.95, -85.1, 0.936, 0.83, -0.472, -2.705, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: -0.855, b: 0.038, c: -0.029, d: 0.905, tx: -8.65, ty: -93.15},
						transform: [-8.65, -93.15, 0.856, 0.906, -0.032, 3.097, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: 0.035, c: -0.032, d: 0.833, tx: -9.55, ty: -86.25},
						transform: [-9.55, -86.25, 0.935, 0.833, -0.038, 3.104, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_backpack_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.947, b: 0.317, c: 0.317, d: 0.947, tx: -64.9, ty: -114.9},
						transform: [-64.9, -114.9, 0.998, 0.998, 0.324, 2.818, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.917, b: 0.394, c: 0.394, d: 0.917, tx: -70.55, ty: -119.4},
						transform: [-70.55, -119.4, 0.998, 0.998, 0.406, 2.736, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.966, b: 0.251, c: 0.251, d: 0.966, tx: -59.65, ty: -118.6},
						transform: [-59.65, -118.6, 0.998, 0.998, 0.254, 2.887, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.995, b: 0.078, c: 0.078, d: 0.995, tx: -53.1, ty: -123.05},
						transform: [-53.1, -123.05, 0.998, 0.998, 0.078, 3.063, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.152, 0.767], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.998, b: 0, c: 0, d: 0.998, tx: -51.85, ty: -119.7},
						transform: [-51.85, -119.7, 0.998, 0.998, 0, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: 0.113, c: 0.113, d: 0.992, tx: -55.95, ty: -125.75},
						transform: [-55.95, -125.75, 0.998, 0.998, 0.113, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.49, 0.024], [0.392, 0.938], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.995, b: 0.083, c: 0.083, d: 0.995, tx: -44.05, ty: -120.4},
						transform: [-44.05, -120.4, 0.998, 0.998, 0.084, 3.058, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.946, b: 0.32, c: 0.32, d: 0.946, tx: -61.35, ty: -137.55},
						transform: [-61.35, -137.55, 0.998, 0.998, 0.327, 2.815, NaN],
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
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.956, b: 0.288, c: 0.288, d: 0.956, tx: -59.5, ty: -131.8},
						transform: [-59.5, -131.8, 0.998, 0.998, 0.292, 2.849, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_head_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_darwin_darwin_head_x_f12",
						instancename: "",
						matrix: {a: -0.984, b: 0.179, c: 0.179, d: 0.984, tx: -4.7, ty: -104.7},
						transform: [-4.7, -104.7, 1, 1, 0.18, 2.962, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.193, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_darwin_darwin_head_x_f12",
						instancename: "",
						matrix: {a: -0.966, b: 0.259, c: 0.259, d: 0.966, tx: -9.75, ty: -114.2},
						transform: [-9.75, -114.2, 1, 1, 0.262, 2.879, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_darwin_head_x_f12",
						instancename: "",
						matrix: {a: -0.997, b: 0.079, c: 0.079, d: 0.997, tx: -0.15, ty: -100.2},
						transform: [-0.15, -100.2, 1, 1, 0.079, 3.063, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_darwin_head_x_f14",
						instancename: "",
						matrix: {a: -0.98, b: -0.2, c: -0.2, d: 0.98, tx: -3.4, ty: -88.1},
						transform: [-3.4, -88.1, 1, 1, -0.201, -2.94, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.152, 0.767], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_darwin_darwin_head_x_f14",
						instancename: "",
						matrix: {a: -0.961, b: -0.275, c: -0.275, d: 0.961, tx: -5.05, ty: -81},
						transform: [-5.05, -81, 1, 1, -0.279, -2.863, NaN],
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
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: -0.975, b: -0.217, c: -0.217, d: 0.975, tx: -5.1, ty: -87.85},
						transform: [-5.1, -87.85, 0.999, 0.999, -0.219, -2.922, NaN],
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
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: -0.986, b: -0.165, c: -0.165, d: 0.986, tx: -5.1, ty: -92.6},
						transform: [-5.1, -92.6, 1, 1, -0.166, -2.976, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.427, 0.042], [0.743, 0.424], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: -0.986, b: -0.166, c: -0.166, d: 0.986, tx: -3.7, ty: -91.7},
						transform: [-3.7, -91.7, 0.999, 0.999, -0.167, -2.975, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.408, 0.252], [0.67, 0.638], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 15,
						classname: "_darwin_darwin_head_x_f22",
						instancename: "",
						matrix: {a: -0.983, b: -0.179, c: -0.179, d: 0.983, tx: 1.25, ty: -88.55},
						transform: [1.25, -88.55, 0.999, 0.999, -0.18, -2.962, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.208, 0.489], [0.47, 0.936], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_darwin_head_x_f22",
						instancename: "",
						matrix: {a: -0.981, b: -0.194, c: -0.194, d: 0.981, tx: 5.8, ty: -85.75},
						transform: [5.8, -85.75, 1, 1, -0.196, -2.946, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_darwin_head_x_f16",
						instancename: "",
						matrix: {a: -0.999, b: 0.047, c: 0.047, d: 0.999, tx: -4.6, ty: -116},
						transform: [-4.6, -116, 1, 1, 0.047, 3.094, NaN],
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
						classname: "_darwin_darwin_head_x_f16",
						instancename: "",
						matrix: {a: -1, b: 0.013, c: 0.013, d: 1, tx: -3.5, ty: -108.3},
						transform: [-3.5, -108.3, 1, 1, 0.013, 3.129, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart1_x",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 5,
					},
					{
						from: 6,
						to: 6,
					},
					{
						from: 7,
						to: 15,
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_heart1_x_f0",
						instancename: "",
						matrix: {a: 1.028, b: 0.203, c: -0.313, d: 1.137, tx: 106.75, ty: -116.65},
						transform: [106.75, -116.65, 1.048, 1.179, -0.269, 0.195, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 19,
						classname: "_darwin_heart2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 110.55, ty: -138.4},
						transform: [110.55, -138.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
						classname: "_darwin_heart3_x_f0",
						instancename: "",
						matrix: {a: 0.914, b: -0.406, c: 0.406, d: 0.914, tx: 106, ty: -150.35},
						transform: [106, -150.35, 1, 1, 0.418, -0.418, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.828, b: -0.561, c: -0.561, d: 0.828, tx: -38, ty: -91.7},
						transform: [-38, -91.7, 1, 1, -0.596, -2.545, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.857, b: -0.201, c: -0.193, d: 0.982, tx: -46.95, ty: -96.6},
						transform: [-46.95, -96.6, 0.88, 1.001, -0.194, -2.911, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.087, b: -0.765, c: -0.785, d: 0.19, tx: -42.1, ty: -103.2},
						transform: [-42.1, -103.2, 0.77, 0.808, -1.333, -1.458, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.096, b: -0.842, c: -1.036, d: -0.04, tx: -48.15, ty: -104.4},
						transform: [-48.15, -104.4, 0.848, 1.037, -1.609, -1.458, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
					},
					{
						from: 7,
						to: 9,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.097, b: 1.051, c: -1.08, d: -0.07, tx: -37.95, ty: -92.55},
						transform: [-37.95, -92.55, 1.055, 1.082, -1.636, 1.478, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.949, b: 0.522, c: -0.596, d: 0.857, tx: -35.9, ty: -83.6},
						transform: [-35.9, -83.6, 1.083, 1.044, -0.608, 0.503, NaN],
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
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.984, b: 0.46, c: -0.535, d: 0.896, tx: -36.9, ty: -87.9},
						transform: [-36.9, -87.9, 1.086, 1.043, -0.539, 0.438, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: 0.394, c: -0.331, d: 1.019, tx: -39.4, ty: -88.25},
						transform: [-39.4, -88.25, 1.055, 1.071, -0.314, 0.383, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.44622000000000006], [0.666, 0.77922], [1, 1]],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: 0.826, b: 0.654, c: -0.604, d: 0.883, tx: -36.65, ty: -87.7},
						transform: [-36.65, -87.7, 1.053, 1.07, -0.599, 0.669, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: 0.493, b: 0.933, c: -0.91, d: 0.565, tx: -32.65, ty: -86.95},
						transform: [-32.65, -86.95, 1.055, 1.071, -1.015, 1.084, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 20,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: 0.964, b: 0.429, c: -0.367, d: 1.006, tx: -39.3, ty: -106.7},
						transform: [-39.3, -106.7, 1.055, 1.071, -0.35, 0.419, NaN],
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
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: 1.053, b: 0.06, c: 0.013, d: 1.071, tx: -38.7, ty: -100.25},
						transform: [-38.7, -100.25, 1.055, 1.071, 0.012, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_hand_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.946, b: -0.642, c: -0.642, d: 0.946, tx: -37.95, ty: -93.85},
						transform: [-37.95, -93.85, 1.144, 1.144, -0.596, -2.545, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.768, b: -0.848, c: -0.848, d: 0.768, tx: -44.45, ty: -98.15},
						transform: [-44.45, -98.15, 1.144, 1.144, -0.835, -2.307, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_tween,7_f0",
						instancename: "",
						matrix: {a: 0.974, b: -0.227, c: 0.317, d: 0.952, tx: -56.45, ty: -98.25},
						transform: [-56.45, -98.25, 1, 1.004, 0.321, -0.229, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_darwin_tween,7_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -71.95, ty: -108.75},
						transform: [-71.95, -108.75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.14, b: -1.04, c: -1.059, d: 0.09, tx: -46.15, ty: -101.05},
						transform: [-46.15, -101.05, 1.049, 1.062, -1.486, -1.704, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.152, 0.767], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.332, b: -0.995, c: -1.023, d: 0.286, tx: -38.75, ty: -95.8},
						transform: [-38.75, -95.8, 1.049, 1.062, -1.298, -1.892, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 11,
					},
					{
						from: 12,
						to: 13,
					},
					{
						from: 14,
						to: 15,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.995, b: -0.634, c: 0.736, d: 0.912, tx: 72.15, ty: -82.95},
						transform: [72.15, -82.95, 1.179, 1.172, 0.679, -0.567, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 1.11, b: -0.399, c: 0.518, d: 1.051, tx: 79.5, ty: -80.5},
						transform: [79.5, -80.5, 1.179, 1.172, 0.458, -0.345, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 19,
					},
					{
						from: 20,
						to: 21,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_v_f0",
						instancename: "",
						matrix: {a: 0.926, b: 0.378, c: -0.378, d: 0.926, tx: 92.9, ty: -135.85},
						transform: [92.9, -135.85, 1, 1, -0.387, 0.387, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_v_f2",
						instancename: "",
						matrix: {a: 0.994, b: -0.109, c: 0.109, d: 0.994, tx: 88.9, ty: -162.65},
						transform: [88.9, -162.65, 1, 1, 0.109, -0.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 21,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 8,
						classname: "_darwin_dust_step_x_f0",
						instancename: "",
						matrix: {a: -0.981, b: 0, c: 0, d: 1, tx: 44.05, ty: -2.25},
						transform: [44.05, -2.25, 0.981, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_dust_step2_x_f0",
						instancename: "",
						matrix: {a: -0.975, b: 0, c: 0, d: 0.981, tx: 48.7, ty: -2.2},
						transform: [48.7, -2.2, 0.975, 0.981, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_dust_step2_x_f0",
						instancename: "",
						matrix: {a: -1.027, b: 0, c: 0, d: 1.144, tx: 48.7, ty: -2.6},
						transform: [48.7, -2.6, 1.027, 1.144, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_dust_step3_x_f0",
						instancename: "",
						matrix: {a: -0.952, b: 0, c: 0, d: 0.931, tx: 53.65, ty: -2.1},
						transform: [53.65, -2.1, 0.952, 0.931, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 15,
						classname: "_darwin_dust_step3_x_f0",
						instancename: "",
						matrix: {a: -1.01, b: 0, c: 0, d: 0.952, tx: 55.25, ty: -2.15},
						transform: [55.25, -2.15, 1.01, 0.952, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_darwin_dust_step4_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 54.9, ty: -2.25},
						transform: [54.9, -2.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 21,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 20,
					},
					{
						from: 21,
						to: 21,
						actions: function(self){self.stop();
},
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 20,
					},
					{
						from: 21,
						to: 21,
					},
				]
			},
		]
	},
	"_darwin_darwin_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 62,
		labels: {loop: {from:33, to:61}, },
		layers: [
			{
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: 0.065, c: 0.08, d: 0.891, tx: -70.9, ty: -140.95},
						transform: [-70.9, -140.95, 0.963, 0.894, 0.09, 3.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.966, b: 0.065, c: 0.203, d: 0.884, tx: -92.7, ty: -147.7},
						transform: [-92.7, -147.7, 0.968, 0.907, 0.226, 3.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -1.022, b: -0.036, c: 0.237, d: 0.904, tx: -94.1, ty: -157.35},
						transform: [-94.1, -157.35, 1.023, 0.935, 0.257, -3.107, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.956, b: 0.3, c: 0.365, d: 0.861, tx: -100.7, ty: -146.9},
						transform: [-100.7, -146.9, 1.002, 0.935, 0.401, 2.838, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.912, b: 0.507, c: 0.54, d: 0.824, tx: -98.05, ty: -145.2},
						transform: [-98.05, -145.2, 1.044, 0.985, 0.581, 2.634, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -1.27, b: -0.167, c: 0.473, d: 0.892, tx: -95.2, ty: -125},
						transform: [-95.2, -125, 1.281, 1.01, 0.488, -3.011, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -1.075, b: -0.705, c: -0.39, d: 0.908, tx: 16.4, ty: -127.85},
						transform: [16.4, -127.85, 1.286, 0.988, -0.405, -2.561, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.697, b: -0.808, c: 0.316, d: 0.949, tx: 28.3, ty: -102.95},
						transform: [28.3, -102.95, 1.067, 1, 0.322, -0.859, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 1.057, b: 0.14, c: 0.083, d: 0.997, tx: 5.6, ty: -70.55},
						transform: [5.6, -70.55, 1.066, 1, 0.083, 0.131, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 1.113, b: 0.26, c: 0.048, d: 1.013, tx: 12.55, ty: -94.95},
						transform: [12.55, -94.95, 1.143, 1.014, 0.048, 0.229, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.65601], [0.666, 0.9890100000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.969, b: -0.246, c: 0.246, d: 0.969, tx: 28.35, ty: -104.9},
						transform: [28.35, -104.9, 1, 1, 0.248, -0.248, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.969, b: -0.246, c: 0.246, d: 0.969, tx: 34.85, ty: -112.4},
						transform: [34.85, -112.4, 1, 1, 0.248, -0.248, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.969, b: -0.246, c: 0.246, d: 0.969, tx: 37.35, ty: -104.9},
						transform: [37.35, -104.9, 1, 1, 0.248, -0.248, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.969, b: -0.246, c: 0.246, d: 0.969, tx: 34.85, ty: -112.4},
						transform: [34.85, -112.4, 1, 1, 0.248, -0.248, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 0.446, b: 0.851, c: -0.853, d: 0.2, tx: 33.9, ty: -65.1},
						transform: [33.9, -65.1, 0.961, 0.876, -1.341, 1.088, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 0.51, b: 0.891, c: -0.873, d: 0.072, tx: 48.8, ty: -79.15},
						transform: [48.8, -79.15, 1.027, 0.876, -1.489, 1.051, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.635, b: 0.691, c: -0.369, d: 0.789, tx: 36.1, ty: -98.55},
						transform: [36.1, -98.55, 0.939, 0.871, -0.437, 0.828, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.717, b: 0.516, c: -0.369, d: 0.789, tx: 44.55, ty: -110.45},
						transform: [44.55, -110.45, 0.883, 0.871, -0.437, 0.625, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.778, b: 0.419, c: -0.263, d: 0.83, tx: 49.6, ty: -124.35},
						transform: [49.6, -124.35, 0.883, 0.871, -0.307, 0.494, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.019979999999999998], [0.666, 0.35298], [1, 1]],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.725, b: 0.504, c: -0.355, d: 0.795, tx: 45.6, ty: -87.05},
						transform: [45.6, -87.05, 0.883, 0.871, -0.42, 0.607, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.883, b: 0.033, c: -0.002, d: 0.856, tx: 51.05, ty: -38.3},
						transform: [51.05, -38.3, 0.883, 0.856, -0.003, 0.037, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.321, b: 0.784, c: 0.851, d: -0.231, tx: -43.7, ty: -13.5},
						transform: [-43.7, -13.5, 0.847, 0.882, 1.836, 1.182, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.423, b: 0.756, c: 0.851, d: -0.231, tx: -55.05, ty: -12.6},
						transform: [-55.05, -12.6, 0.867, 0.882, 1.836, 1.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.361, b: 0.767, c: 0.839, d: -0.271, tx: -50, ty: -12.25},
						transform: [-50, -12.25, 0.848, 0.882, 1.883, 1.13, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.357, b: 0.768, c: 0.839, d: -0.271, tx: -47.3, ty: -12.3},
						transform: [-47.3, -12.3, 0.847, 0.882, 1.883, 1.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.328, b: 0.778, c: 0.839, d: -0.271, tx: -46.4, ty: -12.6},
						transform: [-46.4, -12.6, 0.844, 0.882, 1.883, 1.172, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.288, b: 0.791, c: 0.839, d: -0.271, tx: -45.1, ty: -13},
						transform: [-45.1, -13, 0.841, 0.882, 1.883, 1.221, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.328, b: 0.778, c: 0.839, d: -0.271, tx: -46.4, ty: -12.6},
						transform: [-46.4, -12.6, 0.844, 0.882, 1.883, 1.172, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_90_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: 0.736, b: -0.605, c: 0.603, d: 0.808, tx: 15.9, ty: -115.05},
						transform: [15.9, -115.05, 0.953, 1.008, 0.641, -0.688, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: 0.629, b: -0.725, c: 0.843, d: 0.553, tx: 16, ty: -116.6},
						transform: [16, -116.6, 0.96, 1.008, 0.99, -0.856, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.574, b: -0.818, c: 0.763, d: 0.585, tx: 13.75, ty: -138.55},
						transform: [13.75, -138.55, 0.999, 0.961, 0.917, -0.958, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.388, b: -0.927, c: 0.924, d: 0.265, tx: 13.85, ty: -138.6},
						transform: [13.85, -138.6, 1.005, 0.961, 1.291, -1.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.264, b: -0.97, c: 0.95, d: 0.143, tx: 15.5, ty: -148.3},
						transform: [15.5, -148.3, 1.005, 0.961, 1.422, -1.305, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.019979999999999998], [0.666, 0.35298], [1, 1]],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.467, b: -0.89, c: 0.828, d: 0.477, tx: 19.15, ty: -122.35},
						transform: [19.15, -122.35, 1.005, 0.955, 1.048, -1.087, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.218, b: -0.981, c: 0.924, d: 0.243, tx: 17.7, ty: -68.25},
						transform: [17.7, -68.25, 1.005, 0.955, 1.313, -1.353, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.971, b: -0.044, c: -0.301, d: 0.858, tx: -51.2, ty: -47.75},
						transform: [-51.2, -47.75, 0.972, 0.909, -0.337, -3.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.962, b: 0.202, c: -0.023, d: 0.755, tx: -72.85, ty: -41.15},
						transform: [-72.85, -41.15, 0.983, 0.755, -0.031, 2.935, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -1.004, b: 0.102, c: 0.086, d: 0.835, tx: -72.75, ty: -45.25},
						transform: [-72.75, -45.25, 1.009, 0.839, 0.103, 3.041, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -1.004, b: 0.102, c: -0.106, d: 0.854, tx: -62.1, ty: -46.35},
						transform: [-62.1, -46.35, 1.009, 0.861, -0.123, 3.041, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -1.004, b: 0.102, c: -0.194, d: 0.863, tx: -57.15, ty: -46.8},
						transform: [-57.15, -46.8, 1.009, 0.885, -0.221, 3.041, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -1.004, b: 0.102, c: -0.26, d: 0.87, tx: -53.45, ty: -47.2},
						transform: [-53.45, -47.2, 1.009, 0.908, -0.291, 3.041, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -1.004, b: 0.102, c: -0.194, d: 0.863, tx: -57.15, ty: -46.8},
						transform: [-57.15, -46.8, 1.009, 0.885, -0.221, 3.041, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 0.272, b: 0.949, c: -0.962, d: 0.21, tx: 3.6, ty: -64.1},
						transform: [3.6, -64.1, 0.987, 0.985, -1.356, 1.291, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_bota3_x_f0",
						instancename: "",
						matrix: {a: 0.391, b: 0.961, c: -0.983, d: 0.066, tx: 15.15, ty: -74.7},
						transform: [15.15, -74.7, 1.038, 0.985, -1.504, 1.185, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.719, b: 0.76, c: -0.255, d: 0.874, tx: 10.65, ty: -92.1},
						transform: [10.65, -92.1, 1.046, 0.911, -0.283, 0.813, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.688, b: 0.684, c: -0.362, d: 0.836, tx: 18.95, ty: -101.05},
						transform: [18.95, -101.05, 0.97, 0.911, -0.409, 0.782, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.801, b: 0.482, c: -0.251, d: 0.876, tx: 27.25, ty: -116.1},
						transform: [27.25, -116.1, 0.935, 0.911, -0.279, 0.541, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.893, b: 0.263, c: -0.242, d: 0.858, tx: 11.45, ty: -80.9},
						transform: [11.45, -80.9, 0.931, 0.892, -0.275, 0.286, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: -0.683, b: 0.58, c: 0.584, d: 0.674, tx: -16.45, ty: -55.5},
						transform: [-16.45, -55.5, 0.896, 0.892, 0.714, 2.438, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.358, b: 0.768, c: 0.881, d: -0.285, tx: -50.35, ty: -8.6},
						transform: [-50.35, -8.6, 0.847, 0.926, 1.884, 1.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.248, b: 0.805, c: 0.866, d: -0.318, tx: -7.35, ty: -11.65},
						transform: [-7.35, -11.65, 0.842, 0.922, 1.922, 1.271, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.504, b: 0.711, c: 0.866, d: -0.318, tx: -15.65, ty: -8.6},
						transform: [-15.65, -8.6, 0.871, 0.922, 1.922, 0.954, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.449, b: 0.731, c: 0.866, d: -0.318, tx: -12.85, ty: -9.25},
						transform: [-12.85, -9.25, 0.858, 0.922, 1.922, 1.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.435, b: 0.736, c: 0.828, d: -0.304, tx: -10.25, ty: -10.2},
						transform: [-10.25, -10.2, 0.855, 0.882, 1.922, 1.037, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.388, b: 0.754, c: 0.828, d: -0.304, tx: -8.7, ty: -10.8},
						transform: [-8.7, -10.8, 0.847, 0.882, 1.922, 1.096, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.359, b: 0.764, c: 0.828, d: -0.304, tx: -7.8, ty: -11.15},
						transform: [-7.8, -11.15, 0.844, 0.882, 1.922, 1.131, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.388, b: 0.754, c: 0.828, d: -0.304, tx: -8.7, ty: -10.8},
						transform: [-8.7, -10.8, 0.847, 0.882, 1.922, 1.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_90_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: 0.799, b: -0.518, c: 0.531, d: 0.856, tx: -13.25, ty: -113.45},
						transform: [-13.25, -113.45, 0.953, 1.007, 0.556, -0.575, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: 0.766, b: -0.585, c: 0.728, d: 0.696, tx: -8.7, ty: -119.45},
						transform: [-8.7, -119.45, 0.964, 1.007, 0.808, -0.652, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.542, b: -0.848, c: 0.735, d: 0.638, tx: -9.95, ty: -134.2},
						transform: [-9.95, -134.2, 1.006, 0.973, 0.856, -1.003, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.464, b: -0.881, c: 0.868, d: 0.441, tx: -9.9, ty: -134.2},
						transform: [-9.9, -134.2, 0.996, 0.973, 1.1, -1.086, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.346, b: -0.934, c: 0.968, d: 0.159, tx: -7.6, ty: -140.9},
						transform: [-7.6, -140.9, 0.996, 0.981, 1.408, -1.216, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.934, b: -0.344, c: 0.509, d: 0.839, tx: -8.2, ty: -135.85},
						transform: [-8.2, -135.85, 0.996, 0.981, 0.545, -0.353, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.843, b: -0.363, c: -0.354, d: 0.928, tx: -14.5, ty: -110},
						transform: [-14.5, -110, 0.918, 0.994, -0.364, -2.735, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.929, b: -0.285, c: -0.586, d: 0.731, tx: -39.55, ty: -43.45},
						transform: [-39.55, -43.45, 0.972, 0.937, -0.675, -2.844, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.972, b: 0.006, c: -0.186, d: 0.872, tx: -16.6, ty: -48.6},
						transform: [-16.6, -48.6, 0.972, 0.892, -0.21, 3.135, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: 0.164, c: 0.128, d: 0.734, tx: -36.4, ty: -38.5},
						transform: [-36.4, -38.5, 0.969, 0.745, 0.173, 2.971, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.997, b: 0.103, c: -0.006, d: 0.85, tx: -29.85, ty: -45.5},
						transform: [-29.85, -45.5, 1.002, 0.85, -0.007, 3.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.997, b: 0.103, c: -0.131, d: 0.859, tx: -22.9, ty: -46},
						transform: [-22.9, -46, 1.002, 0.869, -0.151, 3.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.997, b: 0.103, c: -0.153, d: 0.865, tx: -21.7, ty: -46.35},
						transform: [-21.7, -46.35, 1.002, 0.878, -0.175, 3.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.997, b: 0.103, c: -0.25, d: 0.875, tx: -16.25, ty: -46.9},
						transform: [-16.25, -46.9, 1.002, 0.91, -0.279, 3.039, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -0.997, b: 0.103, c: -0.153, d: 0.865, tx: -21.7, ty: -46.35},
						transform: [-21.7, -46.35, 1.002, 0.878, -0.175, 3.039, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_curve_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.895, b: 0.056, c: -0.067, d: 1.071, tx: 49.95, ty: -102.1},
						transform: [49.95, -102.1, 0.896, 1.073, -0.062, 0.062, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.918, b: 0.193, c: -0.035, d: 1.002, tx: 60.55, ty: -140.3},
						transform: [60.55, -140.3, 0.938, 1.002, -0.035, 0.207, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.681, b: 0.7, c: 0.818, d: -0.499, tx: 65.45, ty: -181.15},
						transform: [65.45, -181.15, 0.977, 0.958, 2.118, 0.799, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.862, b: 0.258, c: 0.367, d: -0.819, tx: 39.2, ty: -209.7},
						transform: [39.2, -209.7, 0.9, 0.898, 2.72, 0.291, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.872, b: 0.221, c: 0.332, d: -0.834, tx: 37.55, ty: -215.8},
						transform: [37.55, -215.8, 0.9, 0.898, 2.763, 0.248, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.849, b: -0.479, c: -0.174, d: -0.846, tx: 34.05, ty: -204.7},
						transform: [34.05, -204.7, 0.974, 0.863, -2.939, -0.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.886, b: -0.078, c: -0.089, d: -1.125, tx: 36.75, ty: -188.55},
						transform: [36.75, -188.55, 0.889, 1.129, -3.063, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.511, b: 0.738, c: -0.934, d: 0.607, tx: -75.55, ty: -45.05},
						transform: [-75.55, -45.05, 0.898, 1.113, -0.994, 0.965, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.313, b: -0.919, c: -1.062, d: 0.381, tx: -94.45, ty: -18.65},
						transform: [-94.45, -18.65, 0.97, 1.128, -1.226, -1.899, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.204, b: -0.949, c: -1.099, d: 0.255, tx: -116.55, ty: -15.4},
						transform: [-116.55, -15.4, 0.97, 1.128, -1.343, -1.782, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -1.04, b: -0.016, c: -0.583, d: 0.931, tx: -108.1, ty: -28.85},
						transform: [-108.1, -28.85, 1.04, 1.098, -0.56, -3.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -1.04, b: -0.016, c: -0.133, d: 0.938, tx: -90.45, ty: -28.55},
						transform: [-90.45, -28.55, 1.04, 0.947, -0.141, -3.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -1.04, b: -0.016, c: -0.053, d: 1.058, tx: -85, ty: -32.35},
						transform: [-85, -32.35, 1.04, 1.059, -0.05, -3.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -1.04, b: -0.016, c: -0.133, d: 0.938, tx: -82.45, ty: -28.55},
						transform: [-82.45, -28.55, 1.04, 0.947, -0.141, -3.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -1.04, b: -0.016, c: -0.053, d: 1.058, tx: -85, ty: -32.35},
						transform: [-85, -32.35, 1.04, 1.059, -0.05, -3.126, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_backpack_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.996, b: 0.061, c: 0.061, d: 0.996, tx: -45.3, ty: -142.2},
						transform: [-45.3, -142.2, 0.998, 0.998, 0.061, 3.08, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: 0.119, c: 0.119, d: 0.991, tx: -70.4, ty: -150.45},
						transform: [-70.4, -150.45, 0.998, 0.998, 0.12, 3.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.96, b: 0.276, c: 0.276, d: 0.96, tx: -67.55, ty: -163.05},
						transform: [-67.55, -163.05, 0.998, 0.998, 0.28, 2.862, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: 0.418, c: 0.418, d: 0.907, tx: -75.35, ty: -157.8},
						transform: [-75.35, -157.8, 0.998, 0.998, 0.432, 2.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.888, b: 0.457, c: 0.457, d: 0.888, tx: -74.6, ty: -158.95},
						transform: [-74.6, -158.95, 0.998, 0.998, 0.475, 2.667, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.06326999999999999], [0.666, 0.39627], [1, 1]],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.934, b: 0.354, c: 0.354, d: 0.934, tx: -69.65, ty: -130.2},
						transform: [-69.65, -130.2, 0.998, 0.998, 0.362, 2.779, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.95, b: -0.308, c: 0.308, d: 0.95, tx: 36.8, ty: -110.1},
						transform: [36.8, -110.1, 0.998, 0.998, 0.313, -0.313, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.904, b: -0.425, c: 0.425, d: 0.904, tx: 5.85, ty: -93.1},
						transform: [5.85, -93.1, 0.998, 0.998, 0.439, -0.439, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.952, b: -0.299, c: 0.299, d: 0.952, tx: -16.35, ty: -70.15},
						transform: [-16.35, -70.15, 0.998, 0.998, 0.305, -0.305, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.902, b: -0.429, c: 0.429, d: 0.902, tx: -5.2, ty: -96.6},
						transform: [-5.2, -96.6, 0.998, 0.998, 0.444, -0.444, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.929, b: -0.365, c: 0.365, d: 0.929, tx: 4.65, ty: -97.6},
						transform: [4.65, -97.6, 0.998, 0.998, 0.374, -0.374, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.929, b: -0.365, c: 0.365, d: 0.929, tx: 9.65, ty: -105.4},
						transform: [9.65, -105.4, 0.998, 0.998, 0.374, -0.374, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.929, b: -0.365, c: 0.365, d: 0.929, tx: 12.65, ty: -97.6},
						transform: [12.65, -97.6, 0.998, 0.998, 0.374, -0.374, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.929, b: -0.365, c: 0.365, d: 0.929, tx: 9.65, ty: -105.4},
						transform: [9.65, -105.4, 0.998, 0.998, 0.374, -0.374, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_head_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_darwin_head_x_f14",
						instancename: "",
						matrix: {a: -0.957, b: -0.291, c: -0.291, d: 0.957, tx: -4.25, ty: -118.3},
						transform: [-4.25, -118.3, 1, 1, -0.295, -2.846, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_darwin_head_x_f14",
						instancename: "",
						matrix: {a: -1, b: -0.009, c: -0.009, d: 1, tx: -5.6, ty: -128.6},
						transform: [-5.6, -128.6, 1, 1, -0.009, -3.133, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_darwin_head_x_f12",
						instancename: "",
						matrix: {a: -0.991, b: 0.136, c: 0.136, d: 0.991, tx: -4.95, ty: -140.7},
						transform: [-4.95, -140.7, 1, 1, 0.136, 3.005, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_darwin_head_x_f12",
						instancename: "",
						matrix: {a: -0.959, b: 0.284, c: 0.284, d: 0.959, tx: -10.1, ty: -145.15},
						transform: [-10.1, -145.15, 1, 1, 0.288, 2.854, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 9,
						classname: "_darwin_darwin_head_x_f12",
						instancename: "",
						matrix: {a: -0.946, b: 0.325, c: 0.325, d: 0.946, tx: -8.9, ty: -149.15},
						transform: [-8.9, -149.15, 1, 1, 0.331, 2.81, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.06326999999999999], [0.666, 0.39627], [1, 1]],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_darwin_head_x_f12",
						instancename: "",
						matrix: {a: -0.976, b: 0.217, c: 0.217, d: 0.976, tx: -9.15, ty: -122.4},
						transform: [-9.15, -122.4, 1, 1, 0.219, 2.923, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_darwin_head_x_f12",
						instancename: "",
						matrix: {a: 0.897, b: -0.441, c: 0.441, d: 0.897, tx: -5.6, ty: -66.2},
						transform: [-5.6, -66.2, 1, 1, 0.457, -0.457, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_darwin_head_x_f25",
						instancename: "",
						matrix: {a: 0.835, b: -0.55, c: 0.55, d: 0.835, tx: -30.7, ty: -44.15},
						transform: [-30.7, -44.15, 1, 1, 0.583, -0.583, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_darwin_head_x_f25",
						instancename: "",
						matrix: {a: 0.923, b: -0.389, c: 0.433, d: 0.901, tx: -59.05, ty: -26.6},
						transform: [-59.05, -26.6, 1.001, 1, 0.448, -0.399, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_darwin_head_x_f25",
						instancename: "",
						matrix: {a: 0.832, b: -0.554, c: 0.554, d: 0.832, tx: -41.5, ty: -47.5},
						transform: [-41.5, -47.5, 1, 1, 0.587, -0.587, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_darwin_head_x_f26",
						instancename: "",
						matrix: {a: 0.869, b: -0.495, c: 0.495, d: 0.869, tx: -35, ty: -51.1},
						transform: [-35, -51.1, 1, 1, 0.518, -0.518, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_darwin_head_x_f26",
						instancename: "",
						matrix: {a: 0.869, b: -0.495, c: 0.495, d: 0.869, tx: -30, ty: -58.9},
						transform: [-30, -58.9, 1, 1, 0.518, -0.518, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_darwin_head_x_f26",
						instancename: "",
						matrix: {a: 0.869, b: -0.495, c: 0.495, d: 0.869, tx: -27, ty: -51.1},
						transform: [-27, -51.1, 1, 1, 0.518, -0.518, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_darwin_head_x_f26",
						instancename: "",
						matrix: {a: 0.869, b: -0.495, c: 0.495, d: 0.869, tx: -30, ty: -58.9},
						transform: [-30, -58.9, 1, 1, 0.518, -0.518, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_x",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 18,
					},
					{
						from: 19,
						to: 22,
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_mouth_x_f0",
						instancename: "",
						matrix: {a: 0.929, b: -0.371, c: 0.371, d: 0.929, tx: -60.95, ty: -54.65},
						transform: [-60.95, -54.65, 1, 1, 0.38, -0.38, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_mouth_x_f0",
						instancename: "",
						matrix: {a: 1.147, b: -0.458, c: 0.426, d: 1.068, tx: -54.9, ty: -63.6},
						transform: [-54.9, -63.6, 1.235, 1.15, 0.38, -0.38, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_mouth_x_f0",
						instancename: "",
						matrix: {a: 0.929, b: -0.371, c: 0.371, d: 0.929, tx: -52.95, ty: -54.65},
						transform: [-52.95, -54.65, 1, 1, 0.38, -0.38, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_mouth_x_f0",
						instancename: "",
						matrix: {a: 1.147, b: -0.458, c: 0.426, d: 1.068, tx: -54.9, ty: -63.6},
						transform: [-54.9, -63.6, 1.235, 1.15, 0.38, -0.38, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -0.04, b: -0.999, c: -0.999, d: 0.04, tx: -38.9, ty: -122.85},
						transform: [-38.9, -122.85, 1, 1, -1.531, -1.611, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.173, b: -0.985, c: -0.985, d: -0.173, tx: -42.55, ty: -128.15},
						transform: [-42.55, -128.15, 1, 1, -1.745, -1.397, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
					},
					{
						from: 4,
						to: 4,
					},
					{
						from: 5,
						to: 9,
					},
					{
						from: 10,
						to: 11,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_arm_fx_x_f0",
						instancename: "",
						matrix: {a: -0.291, b: -0.79, c: 0.813, d: -0.536, tx: 43.65, ty: -122.65},
						transform: [43.65, -122.65, 0.842, 0.974, 2.154, -1.924, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
					},
					{
						from: 19,
						to: 22,
					},
					{
						from: 23,
						to: 32,
					},
					{
						from: 33,
						to: 44,
					},
					{
						from: 45,
						to: 60,
					},
					{
						from: 61,
						to: 61,
					},
				]
			},
			{
				name: "arm_scared_2_x",
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
						classname: "_darwin_arm_fx_x_f0",
						instancename: "",
						matrix: {a: -0.047, b: 0.841, c: 0.842, d: 0.022, tx: 79.05, ty: -163.9},
						transform: [79.05, -163.9, 0.842, 0.842, 1.545, 1.627, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_arm_fx_x_f0",
						instancename: "",
						matrix: {a: 0.725, b: 0.429, c: 0.407, d: -0.737, tx: 70.65, ty: -199.85},
						transform: [70.65, -199.85, 0.842, 0.842, 2.637, 0.535, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
					},
					{
						from: 5,
						to: 61,
					},
				]
			},
			{
				name: "arm_hand_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: -0.046, b: -1.143, c: -1.143, d: 0.046, tx: -37.2, ty: -124.05},
						transform: [-37.2, -124.05, 1.144, 1.144, -1.531, -1.611, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_arm_hand_1_x_f0",
						instancename: "",
						matrix: {a: 0.198, b: -1.126, c: -1.126, d: -0.198, tx: -44.55, ty: -128.4},
						transform: [-44.55, -128.4, 1.144, 1.144, -1.745, -1.397, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 3,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.413, b: 0.787, c: -0.756, d: 0.575, tx: -52.3, ty: -138.6},
						transform: [-52.3, -138.6, 0.889, 0.949, -0.921, 1.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 7,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.124, b: 0.88, c: -1.128, d: 0.031, tx: -56.25, ty: -135.6},
						transform: [-56.25, -135.6, 0.889, 1.129, -1.544, 1.711, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.262, 0.86], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.086, b: 0.885, c: -1.126, d: 0.08, tx: -54.6, ty: -137.65},
						transform: [-54.6, -137.65, 0.889, 1.129, -1.5, 1.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.796, b: 0.395, c: -0.663, d: -0.913, tx: -54.1, ty: -135.65},
						transform: [-54.1, -135.65, 0.889, 1.129, -2.514, 2.681, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.839, b: 0.294, c: -0.545, d: -0.988, tx: -56.55, ty: -122.4},
						transform: [-56.55, -122.4, 0.889, 1.129, -2.638, 2.805, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 13,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.102, b: -0.974, c: 1.094, d: -0.216, tx: 39.8, ty: -95.4},
						transform: [39.8, -95.4, 0.979, 1.115, 1.766, -1.675, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 17,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.726, b: 0.552, c: -0.315, d: -0.781, tx: 7.45, ty: -76.9},
						transform: [7.45, -76.9, 0.912, 0.842, -2.758, 2.491, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.843], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.266, b: 0.872, c: -1.107, d: -0.231, tx: -21.8, ty: -47.5},
						transform: [-21.8, -47.5, 0.912, 1.131, -1.777, 1.867, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 22,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.986, b: -0.11, c: -0.355, d: 1.071, tx: -7.35, ty: -66.85},
						transform: [-7.35, -66.85, 0.992, 1.128, -0.32, -3.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 23,
						to: 32,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: 0.267, c: 0.072, d: 1.126, tx: 0.3, ty: -68.15},
						transform: [0.3, -68.15, 0.992, 1.128, 0.064, 2.869, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 33,
						to: 44,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: 0.267, c: 0.072, d: 1.126, tx: 5.3, ty: -75.95},
						transform: [5.3, -75.95, 0.992, 1.128, 0.064, 2.869, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 45,
						to: 60,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: 0.267, c: 0.072, d: 1.126, tx: 8.3, ty: -68.15},
						transform: [8.3, -68.15, 0.992, 1.128, 0.064, 2.869, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.484, 0], [0.457, 1], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 61,
						classname: "_darwin_arm_hang_x_f0",
						instancename: "",
						matrix: {a: -0.955, b: 0.267, c: 0.072, d: 1.126, tx: 5.3, ty: -75.95},
						transform: [5.3, -75.95, 0.992, 1.128, 0.064, 2.869, NaN],
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
						to: 11,
					},
					{
						from: 12,
						to: 61,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 32,
					},
					{
						from: 33,
						to: 61,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 60,
					},
					{
						from: 61,
						to: 61,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_darwin_darwin_enterdoor": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.963, b: 0.018, c: 0.035, d: 0.894, tx: -107.4, ty: -112.05},
						transform: [-107.4, -112.05, 0.963, 0.894, 0.039, 3.123, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.394, 0], [0.442, 0.693], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.963, b: 0.017, c: 0.035, d: 0.893, tx: -75.75, ty: -155.05},
						transform: [-75.75, -155.05, 0.963, 0.894, 0.039, 3.124, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.295, 0.41], [0.626, 0.752], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 19,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.959, b: 0.536, c: -0.882, d: 0.502, tx: 18.85, ty: -55.9},
						transform: [18.85, -55.9, 1.098, 1.015, -1.054, 0.51, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.454, 0], [0.678, 0.476], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.903, b: 0.512, c: -0.826, d: 0.619, tx: 33.65, ty: -62.25},
						transform: [33.65, -62.25, 1.038, 1.032, -0.927, 0.516, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.237, 0.362], [0.527, 0.748], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_bota2_x_f0",
						instancename: "",
						matrix: {a: 0.844, b: 0.488, c: -0.748, d: 0.738, tx: 49.4, ty: -69},
						transform: [49.4, -69, 0.975, 1.051, -0.792, 0.524, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.267, 0.528], [0.593, 0.897], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
					},
					{
						from: 7,
						to: 7,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.07, b: 0.235, c: -0.08, d: 0.934, tx: 22.3, ty: -61.9},
						transform: [22.3, -61.9, 1.096, 0.938, -0.085, 0.216, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.255, 0.456], [0.607, 0.777], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 10,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: -0.041, d: 0.865, tx: 19.6, ty: -47.2},
						transform: [19.6, -47.2, 1.097, 0.866, -0.048, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.318, 0.777], [0.691, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: -0.128, d: 0.865, tx: 23.7, ty: -47.2},
						transform: [23.7, -47.2, 1.097, 0.874, -0.147, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 18,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: -0.175, d: 0.902, tx: 25.9, ty: -48.95},
						transform: [25.9, -48.95, 1.097, 0.919, -0.192, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.376, 0.158], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: 0.009, d: 1.049, tx: 17.2, ty: -55.9},
						transform: [17.2, -55.9, 1.097, 1.049, 0.008, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_relax_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.608, b: -0.653, c: 0.674, d: 0.698, tx: 0.35, ty: -98.8},
						transform: [0.35, -98.8, 0.892, 0.97, 0.767, -0.821, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.454, 0], [0.678, 0.476], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.619, b: -0.682, c: 0.626, d: 0.659, tx: 19.05, ty: -104.4},
						transform: [19.05, -104.4, 0.921, 0.909, 0.76, -0.834, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.279, 0.337], [0.595, 0.687], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: 0.795, b: -0.507, c: 0.555, d: 0.648, tx: 29.05, ty: -108.05},
						transform: [29.05, -108.05, 0.943, 0.853, 0.708, -0.568, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.224, 0.514], [0.531, 0.925], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_darwin_leg_30_b_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.266, c: 0.165, d: 0.797, tx: 33.05, ty: -107.4},
						transform: [33.05, -107.4, 1.035, 0.814, 0.205, 2.881, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_leg_30_b_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.17, c: 0.153, d: 0.816, tx: 4.9, ty: -108.85},
						transform: [4.9, -108.85, 1.013, 0.83, 0.186, 2.973, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.88, b: -0.312, c: 0.438, d: 0.753, tx: 6.65, ty: -110.6},
						transform: [6.65, -110.6, 0.934, 0.871, 0.527, -0.34, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.255, 0.456], [0.607, 0.777], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 10,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.82, b: -0.422, c: 0.408, d: 0.821, tx: 6.9, ty: -101.65},
						transform: [6.9, -101.65, 0.922, 0.917, 0.461, -0.475, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.318, 0.777], [0.691, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.874, b: -0.33, c: 0.453, d: 0.824, tx: 7.05, ty: -97.7},
						transform: [7.05, -97.7, 0.934, 0.94, 0.503, -0.361, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 14,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.961, b: -0.377, c: 0.142, d: 0.933, tx: 29.25, ty: -107.55},
						transform: [29.25, -107.55, 1.032, 0.944, 0.151, -0.374, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.368, 0.161], [0.691, 0.549], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 1.024, b: -0.393, c: -0.052, d: 1.002, tx: 36.4, ty: -114.95},
						transform: [36.4, -114.95, 1.097, 1.003, -0.051, -0.367, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.339, 0.321], [0.669, 0.666], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 1.009, b: 0.122, c: -0.247, d: 0.881, tx: 38.55, ty: -104.25},
						transform: [38.55, -104.25, 1.017, 0.915, -0.273, 0.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.306, 0.524], [0.615, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.922, b: 0.111, c: -0.302, d: 1.001, tx: 37.7, ty: -114.1},
						transform: [37.7, -114.1, 0.929, 1.046, -0.293, 0.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.066, b: 0, c: -0.237, d: 0.873, tx: -14.25, ty: -47.65},
						transform: [-14.25, -47.65, 1.066, 0.905, -0.265, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.394, 0], [0.442, 0.693], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.053, b: 0, c: -0.098, d: 0.969, tx: -20.6, ty: -52.15},
						transform: [-20.6, -52.15, 1.053, 0.974, -0.101, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.267, 0.528], [0.593, 0.897], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.051, b: 0, c: -0.349, d: 0.981, tx: -2.15, ty: -52.7},
						transform: [-2.15, -52.7, 1.051, 1.042, -0.342, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.051, b: 0, c: -0.143, d: 0.981, tx: -11.5, ty: -52.7},
						transform: [-11.5, -52.7, 1.051, 0.992, -0.145, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.097, b: 0, c: -0.022, d: 0.929, tx: -18, ty: -50.25},
						transform: [-18, -50.25, 1.097, 0.929, -0.023, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.815], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.097, b: 0, c: 0.134, d: 0.865, tx: -25.3, ty: -47.2},
						transform: [-25.3, -47.2, 1.097, 0.875, 0.153, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -0.997, b: 0.301, c: 0.08, d: 0.881, tx: -27.5, ty: -57.85},
						transform: [-27.5, -57.85, 1.041, 0.885, 0.09, 2.849, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 18,
						classname: "_darwin_leg_30_b_x_f0",
						instancename: "",
						matrix: {a: -0.641, b: -0.817, c: -0.575, d: 0.568, tx: -4.25, ty: -109.4},
						transform: [-4.25, -109.4, 1.038, 0.808, -0.792, -2.236, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.319, 0.438], [0.607, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_leg_30_b_x_f0",
						instancename: "",
						matrix: {a: -0.78, b: -0.57, c: -0.576, d: 0.568, tx: -2.9, ty: -123.8},
						transform: [-2.9, -123.8, 0.966, 0.809, -0.793, -2.51, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_backpack_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.991, b: 0.132, c: 0.132, d: 0.991, tx: -78.35, ty: -114.45},
						transform: [-78.35, -114.45, 1, 1, 0.132, 3.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.394, 0], [0.442, 0.693], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.039, c: -0.039, d: 0.999, tx: -48.75, ty: -153.4},
						transform: [-48.75, -153.4, 1, 1, -0.039, -3.102, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.267, 0.528], [0.593, 0.897], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
					},
					{
						from: 6,
						to: 6,
					},
					{
						from: 7,
						to: 10,
					},
					{
						from: 11,
						to: 11,
					},
					{
						from: 12,
						to: 18,
					},
					{
						from: 19,
						to: 19,
					},
				]
			},
			{
				name: "leg_relax_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.87, b: -0.365, c: 0.311, d: 0.805, tx: -22.45, ty: -97.45},
						transform: [-22.45, -97.45, 0.944, 0.862, 0.369, -0.397, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.454, 0], [0.678, 0.476], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.973, b: -0.38, c: 0.161, d: 0.872, tx: -14.15, ty: -105.2},
						transform: [-14.15, -105.2, 1.044, 0.887, 0.183, -0.372, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.279, 0.337], [0.595, 0.687], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.912, b: 0.237, c: -0.257, d: 0.925, tx: -1.35, ty: -104.05},
						transform: [-1.35, -104.05, 0.943, 0.96, -0.271, 0.254, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.224, 0.514], [0.531, 0.925], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: -1.034, b: 0.127, c: -0.071, d: 0.894, tx: -1.65, ty: -105.05},
						transform: [-1.65, -105.05, 1.042, 0.897, -0.079, 3.019, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: -0.995, b: 0.127, c: 0.203, d: 0.894, tx: -26.35, ty: -105.05},
						transform: [-26.35, -105.05, 1.003, 0.917, 0.223, 3.015, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -1.05, b: -0.407, c: -0.088, d: 0.89, tx: -23.3, ty: -107.85},
						transform: [-23.3, -107.85, 1.126, 0.894, -0.099, -2.771, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.815], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.876, b: -0.33, c: -0.448, d: 0.824, tx: -8.9, ty: -97.7},
						transform: [-8.9, -97.7, 0.936, 0.938, -0.498, -2.781, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.736, b: -0.408, c: -0.524, d: 0.742, tx: -6.75, ty: -105.75},
						transform: [-6.75, -105.75, 0.841, 0.909, -0.615, -2.635, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 18,
						classname: "_darwin_foot_back_x_f0",
						instancename: "",
						matrix: {a: -0.876, b: 0.467, c: 0.496, d: 0.761, tx: -24, ty: -67.85},
						transform: [-24, -67.85, 0.993, 0.909, 0.578, 2.652, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.319, 0.438], [0.607, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_foot_back_x_f0",
						instancename: "",
						matrix: {a: -0.73, b: 0.674, c: 0.684, d: 0.553, tx: -20.9, ty: -87.6},
						transform: [-20.9, -87.6, 0.994, 0.879, 0.891, 2.396, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "foot_back_x",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 5,
						classname: "_darwin_foot_back_x_f0",
						instancename: "",
						matrix: {a: 0.115, b: 0.98, c: 0.997, d: -0.197, tx: 56.7, ty: -71.1},
						transform: [56.7, -71.1, 0.987, 1.016, 1.766, 1.454, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_foot_back_x_f0",
						instancename: "",
						matrix: {a: -0.097, b: 0.998, c: 0.985, d: 0.173, tx: 28.2, ty: -67.85},
						transform: [28.2, -67.85, 1.003, 1, 1.396, 1.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
					},
					{
						from: 11,
						to: 11,
					},
					{
						from: 12,
						to: 18,
					},
					{
						from: 19,
						to: 19,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.007, b: 0.107, c: -0.108, d: 1.018, tx: 15.25, ty: -88.5},
						transform: [15.25, -88.5, 1.012, 1.024, -0.106, 0.106, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.394, 0], [0.442, 0.693], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.988, b: 0.215, c: -0.218, d: 1, tx: 60, ty: -108.7},
						transform: [60, -108.7, 1.012, 1.023, -0.214, 0.215, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.267, 0.528], [0.593, 0.897], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_darwin_arm_curve_back_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: 0.327, c: 0.329, d: 0.95, tx: -20.9, ty: -119.95},
						transform: [-20.9, -119.95, 1.004, 1.006, 0.333, 2.81, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_arm_curve_back_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.141, c: -0.046, d: 1.005, tx: -54.75, ty: -117.45},
						transform: [-54.75, -117.45, 1.009, 1.006, -0.046, -3.002, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -0.639, b: -0.752, c: -0.676, d: 0.765, tx: -48.65, ty: -111.95},
						transform: [-48.65, -111.95, 0.987, 1.021, -0.724, -2.275, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.815], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: -1.091, b: 0.146, c: -0.058, d: 1.019, tx: -40.35, ty: -83.65},
						transform: [-40.35, -83.65, 1.101, 1.021, -0.057, 3.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 14,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.995, b: 0.03, c: -0.039, d: 1.02, tx: 50.6, ty: -100},
						transform: [50.6, -100, 0.996, 1.021, -0.039, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.368, 0.161], [0.691, 0.549], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.971, b: -0.238, c: 0.19, d: 0.897, tx: 52.75, ty: -107.75},
						transform: [52.75, -107.75, 1, 0.917, 0.209, -0.24, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.339, 0.321], [0.669, 0.666], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_darwin_arm_curve_back_x_f0",
						instancename: "",
						matrix: {a: 0.959, b: 0.54, c: -0.386, d: 0.929, tx: 63.15, ty: -113.2},
						transform: [63.15, -113.2, 1.101, 1.006, -0.394, 0.513, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.306, 0.524], [0.615, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_arm_curve_back_x_f0",
						instancename: "",
						matrix: {a: 1.002, b: -0.115, c: 0.02, d: 1.006, tx: 57.4, ty: -123.7},
						transform: [57.4, -123.7, 1.009, 1.006, 0.02, -0.114, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_head_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: -0.999, b: 0.036, c: 0.036, d: 0.999, tx: -19.4, ty: -98.05},
						transform: [-19.4, -98.05, 1, 1, 0.036, 3.105, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.394, 0], [0.442, 0.693], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: -0.994, b: -0.109, c: -0.109, d: 0.994, tx: 7.15, ty: -120.8},
						transform: [7.15, -120.8, 1, 1, -0.109, -3.032, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.267, 0.528], [0.593, 0.897], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_darwin_darwin_head_x_f29",
						instancename: "",
						matrix: {a: 0.998, b: 0.062, c: -0.062, d: 0.998, tx: 15.4, ty: -125.55},
						transform: [15.4, -125.55, 1, 1, -0.062, 0.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_darwin_head_x_f29",
						instancename: "",
						matrix: {a: 1, b: -0.016, c: 0.016, d: 1, tx: -17.45, ty: -120.3},
						transform: [-17.45, -120.3, 1, 1, 0.016, -0.016, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_darwin_darwin_head_x_f29",
						instancename: "",
						matrix: {a: 0.995, b: -0.099, c: 0.099, d: 0.995, tx: -8.9, ty: -119.15},
						transform: [-8.9, -119.15, 1, 1, 0.099, -0.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.815], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_darwin_head_x_f29",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 4.05, ty: -98.1},
						transform: [4.05, -98.1, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 18,
						classname: "_darwin_darwin_head_x_f29",
						instancename: "",
						matrix: {a: -0.956, b: -0.295, c: -0.295, d: 0.956, tx: 14.35, ty: -113.65},
						transform: [14.35, -113.65, 1, 1, -0.299, -2.843, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.376, 0.158], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_darwin_head_x_f29",
						instancename: "",
						matrix: {a: -0.945, b: -0.327, c: -0.327, d: 0.945, tx: 16.75, ty: -133.8},
						transform: [16.75, -133.8, 1, 1, -0.333, -2.808, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_backpack_back_x",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 5,
						classname: "_darwin_darwin_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 0.997, b: 0.094, c: -0.148, d: 0.989, tx: 49.4, ty: -140.4},
						transform: [49.4, -140.4, 1.002, 1, -0.149, 0.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_darwin_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.062, c: -0.118, d: 0.993, tx: 20.7, ty: -136.45},
						transform: [20.7, -136.45, 1.002, 1, -0.118, 0.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 10,
						classname: "_darwin_darwin_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.073, c: 0.016, d: 1, tx: 29.95, ty: -145.1},
						transform: [29.95, -145.1, 1.002, 1, 0.016, -0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0.815], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_darwin_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 0.991, b: -0.143, c: 0.086, d: 0.996, tx: 40.95, ty: -126.65},
						transform: [40.95, -126.65, 1.002, 1, 0.086, -0.143, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 18,
						classname: "_darwin_darwin_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.965, b: -0.27, c: -0.215, d: 0.977, tx: -17, ty: -142},
						transform: [-17, -142, 1.002, 1, -0.216, -2.869, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.376, 0.158], [0.611, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_darwin_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.965, b: -0.27, c: -0.215, d: 0.977, tx: -14.35, ty: -164.5},
						transform: [-14.35, -164.5, 1.002, 1, -0.216, -2.869, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.932, b: -0.395, c: -0.4, d: 0.943, tx: -43, ty: -88.4},
						transform: [-43, -88.4, 1.012, 1.024, -0.401, -2.741, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.394, 0], [0.442, 0.693], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.937, b: -0.38, c: -0.384, d: 0.948, tx: -17.5, ty: -114.75},
						transform: [-17.5, -114.75, 1.011, 1.023, -0.385, -2.757, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.267, 0.528], [0.593, 0.897], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
					},
					{
						from: 7,
						to: 10,
					},
					{
						from: 11,
						to: 11,
					},
					{
						from: 12,
						to: 19,
					},
				]
			},
			{
				name: "arm_scared_1_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 1.007, b: 0.107, c: -0.108, d: 1.018, tx: 15.25, ty: -88.5},
						transform: [15.25, -88.5, 1.012, 1.024, -0.106, 0.106, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.454, 0], [0.678, 0.476], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.922, b: 0.098, c: -0.108, d: 1.018, tx: 40.9, ty: -99.35},
						transform: [40.9, -99.35, 0.928, 1.024, -0.106, 0.106, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.279, 0.337], [0.595, 0.687], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.186, c: -0.035, d: 1.019, tx: 32.6, ty: -106.1},
						transform: [32.6, -106.1, 1.016, 1.02, -0.034, -2.958, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.224, 0.514], [0.531, 0.925], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 6,
					},
					{
						from: 7,
						to: 10,
					},
					{
						from: 11,
						to: 11,
					},
					{
						from: 12,
						to: 19,
					},
				]
			},
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5, ty: -96},
						transform: [-5, -96, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 18,
						classname: "_darwin_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.25, ty: -96},
						transform: [2.25, -96, 1, 1, 0, 0, 0],
						alpha: 0.13,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 5, ty: -96},
						transform: [5, -96, 1, 1, 0, 0, 0],
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
						to: 7,
					},
					{
						from: 8,
						to: 8,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 9,
						to: 9,
					},
					{
						from: 10,
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
	"_darwin_darwin_exitdoor": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.96, b: 0.076, c: -0.09, d: 0.89, tx: 95.65, ty: -146.65},
						transform: [95.65, -146.65, 0.963, 0.894, -0.101, 0.079, NaN],
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
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.962, b: -0.044, c: 0.022, d: 0.894, tx: 69.7, ty: -152.3},
						transform: [69.7, -152.3, 0.963, 0.894, 0.025, -0.046, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.958, b: -0.093, c: 0.068, d: 0.892, tx: 85.9, ty: -140.35},
						transform: [85.9, -140.35, 0.963, 0.894, 0.076, -0.097, NaN],
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
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: 0.947, b: -0.172, c: 0.142, d: 0.883, tx: 85.95, ty: -139.8},
						transform: [85.95, -139.8, 0.963, 0.894, 0.159, -0.18, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.944, b: -0.189, c: -0.157, d: 0.88, tx: -70.85, ty: -156.05},
						transform: [-70.85, -156.05, 0.963, 0.894, -0.177, -2.944, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.907, b: -0.322, c: -0.281, d: 0.849, tx: -55.1, ty: -185.9},
						transform: [-55.1, -185.9, 0.963, 0.894, -0.32, -2.801, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.944, b: -0.189, c: -0.157, d: 0.88, tx: -70.85, ty: -161.05},
						transform: [-70.85, -161.05, 0.963, 0.894, -0.177, -2.944, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.963, b: -0.012, c: 0.007, d: 0.894, tx: -89.55, ty: -126.85},
						transform: [-89.55, -126.85, 0.963, 0.894, 0.008, -3.129, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_backpack_back_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.989, b: 0.158, c: -0.212, d: 0.977, tx: 66.1, ty: -151.1},
						transform: [66.1, -151.1, 1.002, 1, -0.214, 0.159, NaN],
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
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.001, b: 0.034, c: -0.088, d: 0.996, tx: 39.85, ty: -152.95},
						transform: [39.85, -152.95, 1.002, 1, -0.089, 0.034, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 1.001, b: -0.018, c: -0.037, d: 0.999, tx: 56.1, ty: -139.45},
						transform: [56.1, -139.45, 1.002, 1, -0.037, -0.018, NaN],
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
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.996, b: -0.101, c: 0.046, d: 0.999, tx: 56.35, ty: -136.45},
						transform: [56.35, -136.45, 1.002, 1, 0.046, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: -0.119, c: -0.064, d: 0.998, tx: -41.3, ty: -152.15},
						transform: [-41.3, -152.15, 1.002, 1, -0.064, -3.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.967, b: -0.259, c: -0.205, d: 0.979, tx: -26.4, ty: -177.85},
						transform: [-26.4, -177.85, 1.002, 1, -0.206, -2.88, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: -0.119, c: -0.064, d: 0.998, tx: -41.3, ty: -157.15},
						transform: [-41.3, -157.15, 1.002, 1, -0.064, -3.023, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.067, c: 0.121, d: 0.993, tx: -59.7, ty: -128.5},
						transform: [-59.7, -128.5, 1.001, 1, 0.121, 3.075, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_foot_front_x_f0",
						instancename: "",
						matrix: {a: 0.311, b: 0.97, c: 0.953, d: -0.243, tx: 50.75, ty: -72.25},
						transform: [50.75, -72.25, 1.019, 0.983, 1.82, 1.261, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 1,
						to: 2,
						classname: "_darwin_foot_front_x_f0",
						instancename: "",
						matrix: {a: -0.182, b: 0.983, c: 0.983, d: 0.182, tx: 32.5, ty: -65.3},
						transform: [32.5, -65.3, 0.999, 0.999, 1.387, 1.754, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_foot_front_x_f0",
						instancename: "",
						matrix: {a: -0.503, b: 0.865, c: 0.865, d: 0.503, tx: 14.2, ty: -59.75},
						transform: [14.2, -59.75, 1, 1, 1.044, 2.097, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: -0.005, d: 0.929, tx: 17.9, ty: -50.25},
						transform: [17.9, -50.25, 1.097, 0.929, -0.005, 0, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: -0.128, d: 0.929, tx: 23.7, ty: -50.25},
						transform: [23.7, -50.25, 1.097, 0.938, -0.137, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: -0.109, d: 0.929, tx: 22.75, ty: -50.25},
						transform: [22.75, -50.25, 1.097, 0.935, -0.117, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: 0.037, d: 1.049, tx: 15.9, ty: -55.9},
						transform: [15.9, -55.9, 1.097, 1.049, 0.035, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.097, b: 0, c: -0.109, d: 0.929, tx: 22.75, ty: -50.25},
						transform: [22.75, -50.25, 1.097, 0.935, -0.117, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.066, b: 0, c: -0.237, d: 0.873, tx: 20.75, ty: -47.65},
						transform: [20.75, -47.65, 1.066, 0.905, -0.265, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.051, b: 0, c: -0.286, d: 0.999, tx: 0.45, ty: -53.55},
						transform: [0.45, -53.55, 1.051, 1.04, -0.279, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.051, b: 0, c: -0.143, d: 0.981, tx: -11.5, ty: -52.7},
						transform: [-11.5, -52.7, 1.051, 0.992, -0.145, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.097, b: 0, c: -0.022, d: 0.929, tx: -17.95, ty: -50.25},
						transform: [-17.95, -50.25, 1.097, 0.929, -0.023, 3.142, NaN],
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
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.097, b: 0, c: 0.134, d: 0.929, tx: -25.3, ty: -50.25},
						transform: [-25.3, -50.25, 1.097, 0.939, 0.143, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_darwin_foot_front_x_f0",
						instancename: "",
						matrix: {a: -0.859, b: 0.501, c: 0.514, d: 0.769, tx: -25.45, ty: -65.65},
						transform: [-25.45, -65.65, 0.994, 0.925, 0.589, 2.614, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_foot_front_x_f0",
						instancename: "",
						matrix: {a: -0.859, b: 0.501, c: 0.514, d: 0.769, tx: -23.05, ty: -85.8},
						transform: [-23.05, -85.8, 0.994, 0.925, 0.589, 2.614, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_foot_front_x_f0",
						instancename: "",
						matrix: {a: -0.859, b: 0.501, c: 0.514, d: 0.769, tx: -25.45, ty: -65.65},
						transform: [-25.45, -65.65, 0.994, 0.925, 0.589, 2.614, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_foot_front_x_f0",
						instancename: "",
						matrix: {a: 0.632, b: 0.826, c: -0.869, d: 0.317, tx: -16.2, ty: -45.85},
						transform: [-16.2, -45.85, 1.04, 0.925, -1.221, 0.917, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_relax_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: -1.027, b: -0.043, c: -0.082, d: 0.888, tx: 1, ty: -107.7},
						transform: [1, -107.7, 1.028, 0.892, -0.092, -3.1, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: -0.995, b: 0.127, c: 0.203, d: 0.894, tx: -26.35, ty: -105.05},
						transform: [-26.35, -105.05, 1.003, 0.917, 0.223, 3.015, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.83, b: -0.44, c: -0.354, d: 0.859, tx: -7.5, ty: -106.95},
						transform: [-7.5, -106.95, 0.94, 0.929, -0.39, -2.654, NaN],
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
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: -0.876, b: -0.33, c: -0.448, d: 0.824, tx: -8.9, ty: -97.7},
						transform: [-8.9, -97.7, 0.936, 0.938, -0.498, -2.781, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.718, b: -0.631, c: -0.471, d: 0.587, tx: -11.8, ty: -104.8},
						transform: [-11.8, -104.8, 0.956, 0.753, -0.676, -2.42, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.718, b: -0.631, c: -0.576, d: 0.568, tx: -2.9, ty: -123.8},
						transform: [-2.9, -123.8, 0.956, 0.809, -0.793, -2.42, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -0.718, b: -0.631, c: -0.515, d: 0.642, tx: -9.1, ty: -108.15},
						transform: [-9.1, -108.15, 0.956, 0.823, -0.676, -2.42, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: 0.783, b: -0.442, c: 0.36, d: 0.901, tx: -17.05, ty: -94.8},
						transform: [-17.05, -94.8, 0.899, 0.97, 0.38, -0.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_relax_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: 0.013, c: 0.083, d: 0.83, tx: 27.25, ty: -108.25},
						transform: [27.25, -108.25, 1.012, 0.834, 0.1, 3.129, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_leg_90_x_f0",
						instancename: "",
						matrix: {a: -1.021, b: -0.147, c: 0.037, d: 0.829, tx: 7, ty: -107.25},
						transform: [7, -107.25, 1.031, 0.83, 0.045, -2.999, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -1.035, b: -0.076, c: 0.082, d: 0.818, tx: -3.2, ty: -107.6},
						transform: [-3.2, -107.6, 1.038, 0.822, 0.1, -3.068, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_leg_30_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: 0.043, c: 0.05, d: 0.829, tx: -6.65, ty: -106.7},
						transform: [-6.65, -106.7, 1.013, 0.83, 0.06, 3.099, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.825, b: -0.448, c: 0.356, d: 0.86, tx: 6.8, ty: -106.55},
						transform: [6.8, -106.55, 0.939, 0.931, 0.392, -0.497, NaN],
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
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.874, b: -0.33, c: 0.453, d: 0.824, tx: 7.05, ty: -97.7},
						transform: [7.05, -97.7, 0.934, 0.94, 0.503, -0.361, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.941, b: -0.468, c: 0.2, d: 0.911, tx: 22.2, ty: -108.8},
						transform: [22.2, -108.8, 1.051, 0.932, 0.216, -0.461, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 1.016, b: -0.438, c: 0.034, d: 0.972, tx: 28.1, ty: -115.25},
						transform: [28.1, -115.25, 1.106, 0.973, 0.035, -0.407, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.98, b: 0.118, c: -0.178, d: 0.875, tx: 31, ty: -106.45},
						transform: [31, -106.45, 0.987, 0.893, -0.201, 0.12, NaN],
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
						classname: "_darwin_leg_rect_x_f0",
						instancename: "",
						matrix: {a: 0.922, b: 0.111, c: -0.223, d: 0.972, tx: 31.4, ty: -112.85},
						transform: [31.4, -112.85, 0.929, 0.997, -0.226, 0.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.941, b: -0.468, c: 0.2, d: 0.911, tx: 22.2, ty: -108.8},
						transform: [22.2, -108.8, 1.051, 0.932, 0.216, -0.461, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_leg_45_x_f0",
						instancename: "",
						matrix: {a: 0.87, b: -0.365, c: 0.311, d: 0.805, tx: 12.55, ty: -97.45},
						transform: [12.55, -97.45, 0.944, 0.862, 0.369, -0.397, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -1.009, b: -0.087, c: -0.088, d: 1.02, tx: -31.55, ty: -122.45},
						transform: [-31.55, -122.45, 1.012, 1.024, -0.086, -3.055, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -1.011, b: 0.049, c: 0.049, d: 1.023, tx: -61.95, ty: -112.25},
						transform: [-61.95, -112.25, 1.012, 1.024, 0.048, 3.093, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -1.01, b: 0.075, c: 0.076, d: 1.021, tx: -38.55, ty: -95.3},
						transform: [-38.55, -95.3, 1.012, 1.024, 0.074, 3.068, NaN],
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
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.158, c: 0.16, d: 1.012, tx: -34.3, ty: -84.6},
						transform: [-34.3, -84.6, 1.012, 1.024, 0.157, 2.985, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.991, b: -0.106, c: -0.015, d: 1.021, tx: 46.75, ty: -115.4},
						transform: [46.75, -115.4, 0.997, 1.021, -0.014, -0.107, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.169, c: 0.054, d: 1.019, tx: 60, ty: -124.05},
						transform: [60, -124.05, 1.014, 1.021, 0.053, 0.167, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.991, b: -0.106, c: -0.015, d: 1.021, tx: 46.75, ty: -120.4},
						transform: [46.75, -120.4, 0.997, 1.021, -0.014, -0.107, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.991, b: 0.205, c: -0.208, d: 1.003, tx: 41.65, ty: -88.9},
						transform: [41.65, -88.9, 1.012, 1.024, -0.204, 0.204, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_head_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 0.992, b: 0.127, c: -0.127, d: 0.992, tx: 9.9, ty: -126.3},
						transform: [9.9, -126.3, 1, 1, -0.127, 0.127, NaN],
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
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: -0.016, c: 0.016, d: 1, tx: -17.45, ty: -120.3},
						transform: [-17.45, -120.3, 1, 1, 0.016, -0.016, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 0.996, b: -0.086, c: 0.086, d: 0.996, tx: 0.85, ty: -105.55},
						transform: [0.85, -105.55, 1, 1, 0.086, -0.086, NaN],
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
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 0.986, b: -0.168, c: 0.168, d: 0.986, tx: 4.05, ty: -98.1},
						transform: [4.05, -98.1, 1, 1, 0.169, -0.169, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 11,
						classname: "_darwin_darwin_head_x_f6",
						instancename: "",
						matrix: {a: -0.988, b: -0.156, c: -0.156, d: 0.988, tx: 8.35, ty: -110.6},
						transform: [8.35, -110.6, 1, 1, -0.156, -2.985, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_darwin_head_x_f6",
						instancename: "",
						matrix: {a: -0.945, b: -0.327, c: -0.327, d: 0.945, tx: 16.75, ty: -133.8},
						transform: [16.75, -133.8, 1, 1, -0.333, -2.808, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_darwin_head_x_f6",
						instancename: "",
						matrix: {a: -0.988, b: -0.156, c: -0.156, d: 0.988, tx: 8.35, ty: -115.6},
						transform: [8.35, -115.6, 1, 1, -0.156, -2.985, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_darwin_head_x_f6",
						instancename: "",
						matrix: {a: -0.998, b: -0.062, c: -0.062, d: 0.998, tx: -7.9, ty: -100.05},
						transform: [-7.9, -100.05, 1, 1, -0.062, -3.079, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: 1.011, b: -0.054, c: 0.054, d: 1.023, tx: 37.4, ty: -114.75},
						transform: [37.4, -114.75, 1.012, 1.024, 0.053, -0.053, NaN],
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
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: 1.001, b: 0.149, c: -0.151, d: 1.013, tx: 7.2, ty: -113.8},
						transform: [7.2, -113.8, 1.012, 1.024, -0.148, 0.148, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: 0.979, b: -0.256, c: 0.259, d: 0.991, tx: 27.75, ty: -102.7},
						transform: [27.75, -102.7, 1.012, 1.024, 0.256, -0.256, NaN],
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
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: 0.955, b: -0.337, c: 0.341, d: 0.966, tx: 31.1, ty: -97.45},
						transform: [31.1, -97.45, 1.012, 1.024, 0.339, -0.339, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: -0.498, c: -0.504, d: 0.892, tx: -25.85, ty: -112.6},
						transform: [-25.85, -112.6, 1.012, 1.024, -0.514, -2.627, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 11,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 1.012, b: -0.105, c: -0.133, d: 1.012, tx: -20.5, ty: -127.95},
						transform: [-20.5, -127.95, 1.017, 1.021, -0.131, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.58941], [0.666, 0.9224100000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_arm_curve_x_f0",
						instancename: "",
						matrix: {a: 0.127, b: 0.982, c: -1.01, d: 0.149, tx: -21.85, ty: -147.05},
						transform: [-21.85, -147.05, 0.99, 1.021, -1.425, 1.442, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.881, b: -0.498, c: -0.504, d: 0.892, tx: -25.85, ty: -117.6},
						transform: [-25.85, -117.6, 1.012, 1.024, -0.514, -2.627, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.889, b: -0.485, c: -0.491, d: 0.899, tx: -32.35, ty: -92.8},
						transform: [-32.35, -92.8, 1.012, 1.024, -0.5, -2.642, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -1.009, b: -0.087, c: -0.088, d: 1.02, tx: -31.55, ty: -122.45},
						transform: [-31.55, -122.45, 1.012, 1.024, -0.086, -3.055, NaN],
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
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -1.011, b: 0.049, c: 0.049, d: 1.023, tx: -61.95, ty: -112.25},
						transform: [-61.95, -112.25, 1.012, 1.024, 0.048, 3.093, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 6,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -1.01, b: 0.075, c: 0.076, d: 1.021, tx: -38.55, ty: -95.3},
						transform: [-38.55, -95.3, 1.012, 1.024, 0.074, 3.068, NaN],
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
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.158, c: 0.16, d: 1.012, tx: -34.3, ty: -84.6},
						transform: [-34.3, -84.6, 1.012, 1.024, 0.157, 2.985, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 13,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.892, b: 0.185, c: -0.231, d: 0.998, tx: 46.8, ty: -87.45},
						transform: [46.8, -87.45, 0.911, 1.024, -0.228, 0.204, NaN],
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
						classname: "_darwin_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 15, ty: -95.5},
						transform: [15, -95.5, 1, 1, 0, 0, 0],
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
						classname: "_darwin_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.95, ty: -95.5},
						transform: [-1.95, -95.5, 1, 1, 0, 0, 0],
						alpha: 0.86,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -10.4, ty: -95.5},
						transform: [-10.4, -95.5, 1, 1, 0, 0, 0],
						alpha: 0.71,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 6,
						classname: "_darwin_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -15.05, ty: -95.5},
						transform: [-15.05, -95.5, 1, 1, 0, 0, 0],
						alpha: 0.57,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_darwin_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1.3, ty: -95.4},
						transform: [1.3, -95.4, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 14,
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
						to: 5,
					},
					{
						from: 6,
						to: 13,
					},
					{
						from: 14,
						to: 14,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_darwin_darwinl_talk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 54,
		labels: {},
		layers: [
			{
				name: "bota_flex",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.117, d: 0.924, tx: 25.1, ty: -49.7},
						transform: [25.1, -49.7, 1, 0.931, 0.126, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.075, d: 1.027, tx: 22.05, ty: -54.85},
						transform: [22.05, -54.85, 1, 1.03, 0.073, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.23, d: 0.976, tx: 12.95, ty: -52.25},
						transform: [12.95, -52.25, 1, 1.003, 0.231, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.352, d: 1.027, tx: 13.7, ty: -54.85},
						transform: [13.7, -54.85, 1, 1.086, 0.33, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_relax",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.107, b: 0.01, c: 0.192, d: 0.899, tx: 10.15, ty: -108.75},
						transform: [10.15, -108.75, 1.107, 0.919, 0.21, 3.133, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.972, b: 0.108, c: 0.151, d: 0.999, tx: 9.8, ty: -120.5},
						transform: [9.8, -120.5, 0.978, 1.011, 0.15, 3.031, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.984, b: 0.051, c: 0.141, d: 0.907, tx: -0.3, ty: -110.35},
						transform: [-0.3, -110.35, 0.985, 0.918, 0.154, 3.089, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: 0.152, c: 0.351, d: 0.941, tx: -11.9, ty: -114.7},
						transform: [-11.9, -114.7, 0.969, 1.005, 0.357, 2.984, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.204, d: 0.952, tx: -20.25, ty: -50},
						transform: [-20.25, -50, 0.989, 0.974, -0.211, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.162, d: 1.001, tx: -19.25, ty: -52.3},
						transform: [-19.25, -52.3, 0.989, 1.014, -0.16, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.057, c: -0.076, d: 0.912, tx: -24.25, ty: -48},
						transform: [-24.25, -48, 0.989, 0.915, -0.084, 0.057, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.155, d: 0.955, tx: -22.55, ty: -50.15},
						transform: [-22.55, -50.15, 0.989, 0.968, -0.161, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_relax",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.108, d: 0.92, tx: -22.95, ty: -111.25},
						transform: [-22.95, -111.25, 0.89, 0.926, 0.117, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1.041, b: 0.057, c: -0.119, d: 0.864, tx: -8.3, ty: -110.55},
						transform: [-8.3, -110.55, 1.043, 0.872, -0.137, 0.055, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.98, b: 0.009, c: 0.055, d: 0.905, tx: -22.65, ty: -108.35},
						transform: [-22.65, -108.35, 0.98, 0.906, 0.06, 0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.297, d: 0.906, tx: -35.55, ty: -110.3},
						transform: [-35.55, -110.3, 0.89, 0.954, 0.317, -0.075, NaN],
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
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.996, b: 0.092, c: 0.092, d: 0.996, tx: -94.5, ty: -132.8},
						transform: [-94.5, -132.8, 1, 1, 0.092, 3.049, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.964, b: 0.267, c: 0.267, d: 0.964, tx: -90.85, ty: -130.05},
						transform: [-90.85, -130.05, 1, 1, 0.27, 2.872, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: 0.113, c: 0.113, d: 0.994, tx: -97.45, ty: -128.55},
						transform: [-97.45, -128.55, 1, 1, 0.113, 3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -105.8, ty: -132.05},
						transform: [-105.8, -132.05, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_backpack_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.031, c: 0.031, d: 0.999, tx: -67.05, ty: -135.4},
						transform: [-67.05, -135.4, 1, 1, 0.031, 3.111, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.978, b: 0.207, c: 0.207, d: 0.978, tx: -64.3, ty: -137.45},
						transform: [-64.3, -137.45, 1, 1, 0.208, 2.933, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.052, c: 0.052, d: 0.999, tx: -70.1, ty: -131.7},
						transform: [-70.1, -131.7, 1, 1, 0.052, 3.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -78.3, ty: -133.2},
						transform: [-78.3, -133.2, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.01, b: -0.071, c: 0.072, d: 1.022, tx: 41.4, ty: -101.75},
						transform: [41.4, -101.75, 1.012, 1.024, 0.07, -0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.981, b: -0.248, c: 0.251, d: 0.993, tx: 48.4, ty: -123.45},
						transform: [48.4, -123.45, 1.012, 1.024, 0.248, -0.248, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.916, b: 0.432, c: -0.437, d: 0.926, tx: 16.85, ty: -92.5},
						transform: [16.85, -92.5, 1.012, 1.024, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -87.75},
						transform: [5.55, -87.75, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_head_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_darwin_head_x_f11",
						instancename: "",
						matrix: {a: -1, b: -0.023, c: -0.023, d: 1, tx: -10.55, ty: -106.1},
						transform: [-10.55, -106.1, 1, 1, -0.023, -3.118, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_darwin_head_x_f11",
						instancename: "",
						matrix: {a: -0.988, b: 0.154, c: 0.154, d: 0.988, tx: -3.45, ty: -118.55},
						transform: [-3.45, -118.55, 1, 1, 0.154, 2.987, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_darwin_head_x_f3",
						instancename: "",
						matrix: {a: -1, b: -0.002, c: -0.002, d: 1, tx: -12.9, ty: -103.55},
						transform: [-12.9, -103.55, 1, 1, -0.002, -3.139, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_darwin_head_x_f3",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -23.35, ty: -100.95},
						transform: [-23.35, -100.95, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_talking",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_mouth_talking_f17",
						instancename: "",
						matrix: {a: 0.998, b: -0.061, c: 0.061, d: 0.998, tx: 14.6, ty: -123.85},
						transform: [14.6, -123.85, 1, 1, 0.061, -0.061, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.264, 0.482], [0.614, 0.796], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_mouth_talking_f18",
						instancename: "",
						matrix: {a: 0.982, b: -0.187, c: 0.187, d: 0.982, tx: 17.1, ty: -135.95},
						transform: [17.1, -135.95, 0.999, 0.999, 0.188, -0.188, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.317, 0.535], [0.66, 0.834], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_darwin_mouth_talking_f19",
						instancename: "",
						matrix: {a: 0.973, b: -0.226, c: 0.226, d: 0.973, tx: 17.95, ty: -139.8},
						transform: [17.95, -139.8, 0.999, 0.999, 0.228, -0.228, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.344, 0.844], [0.687, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_darwin_mouth_talking_f20",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_darwin_mouth_talking_f21",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_darwin_mouth_talking_f22",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_darwin_mouth_talking_f23",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_darwin_mouth_talking_f24",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_darwin_mouth_talking_f25",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_darwin_mouth_talking_f26",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_darwin_mouth_talking_f27",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_darwin_mouth_talking_f28",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_darwin_mouth_talking_f29",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_mouth_talking_f30",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_darwin_mouth_talking_f31",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_mouth_talking_f32",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_darwin_mouth_talking_f33",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_darwin_mouth_talking_f34",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_darwin_mouth_talking_f35",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_darwin_mouth_talking_f36",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_darwin_mouth_talking_f37",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_darwin_mouth_talking_f38",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_darwin_mouth_talking_f39",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_darwin_mouth_talking_f0",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_darwin_mouth_talking_f1",
						instancename: "",
						matrix: {a: 0.972, b: -0.237, c: 0.237, d: 0.972, tx: 18.1, ty: -140.5},
						transform: [18.1, -140.5, 1, 1, 0.239, -0.239, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 25,
						classname: "_darwin_mouth_talking_f2",
						instancename: "",
						matrix: {a: 0.997, b: -0.082, c: 0.082, d: 0.997, tx: 11.75, ty: -121.85},
						transform: [11.75, -121.85, 1, 1, 0.082, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.316, 0.429], [0.653, 0.756], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_darwin_mouth_talking_f3",
						instancename: "",
						matrix: {a: 0.999, b: -0.036, c: 0.036, d: 0.999, tx: 6.1, ty: -119.05},
						transform: [6.1, -119.05, 1, 1, 0.036, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.328, 0.474], [0.664, 0.796], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_darwin_mouth_talking_f4",
						instancename: "",
						matrix: {a: 1, b: -0.014, c: 0.014, d: 1, tx: 3.35, ty: -117.75},
						transform: [3.35, -117.75, 1, 1, 0.014, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.337, 0.704], [0.673, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 28,
						classname: "_darwin_mouth_talking_f5",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 29,
						classname: "_darwin_mouth_talking_f6",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 30,
						classname: "_darwin_mouth_talking_f7",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 31,
						classname: "_darwin_mouth_talking_f8",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_darwin_mouth_talking_f9",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 33,
						classname: "_darwin_mouth_talking_f10",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 34,
						to: 34,
						classname: "_darwin_mouth_talking_f11",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 35,
						to: 35,
						classname: "_darwin_mouth_talking_f12",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 36,
						classname: "_darwin_mouth_talking_f13",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 37,
						classname: "_darwin_mouth_talking_f14",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 38,
						to: 38,
						classname: "_darwin_mouth_talking_f15",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 39,
						classname: "_darwin_mouth_talking_f16",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 40,
						classname: "_darwin_mouth_talking_f17",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 41,
						classname: "_darwin_mouth_talking_f18",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 42,
						to: 42,
						classname: "_darwin_mouth_talking_f19",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 43,
						to: 43,
						classname: "_darwin_mouth_talking_f20",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 44,
						to: 44,
						classname: "_darwin_mouth_talking_f21",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 45,
						to: 45,
						classname: "_darwin_mouth_talking_f22",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 46,
						classname: "_darwin_mouth_talking_f23",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 47,
						to: 47,
						classname: "_darwin_mouth_talking_f24",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 48,
						classname: "_darwin_mouth_talking_f25",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 49,
						to: 49,
						classname: "_darwin_mouth_talking_f26",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 50,
						to: 50,
						classname: "_darwin_mouth_talking_f27",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 51,
						to: 51,
						classname: "_darwin_mouth_talking_f28",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 52,
						classname: "_darwin_mouth_talking_f29",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 53,
						to: 53,
						classname: "_darwin_mouth_talking_f30",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 2.6, ty: -117.4},
						transform: [2.6, -117.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.953, b: -0.341, c: -0.345, d: 0.964, tx: -39.2, ty: -101.75},
						transform: [-39.2, -101.75, 1.012, 1.024, -0.343, -2.798, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: -0.167, c: -0.169, d: 1.01, tx: -30.9, ty: -109.25},
						transform: [-30.9, -109.25, 1.012, 1.024, -0.165, -2.976, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.01, b: 0.066, c: 0.067, d: 1.022, tx: -39.15, ty: -99.45},
						transform: [-39.15, -99.45, 1.012, 1.024, 0.066, 3.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -49.8, ty: -98.8},
						transform: [-49.8, -98.8, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 1.01, b: -0.071, c: 0.072, d: 1.022, tx: 42.15, ty: -99.05},
						transform: [42.15, -99.05, 1.012, 1.024, 0.07, -0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.234, 0.928], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 24,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.981, b: -0.248, c: 0.251, d: 0.993, tx: 49.65, ty: -120.95},
						transform: [49.65, -120.95, 1.012, 1.024, 0.248, -0.248, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 27,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.916, b: 0.432, c: -0.437, d: 0.926, tx: 17.8, ty: -86.55},
						transform: [17.8, -86.55, 1.012, 1.024, -0.441, 0.441, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 53,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -82.95},
						transform: [5.55, -82.95, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_darwin_darwinl_idle_explore": {
		type: "movieclip",
		fps: 30,
		totalFrames: 168,
		labels: {loop: {from:15, to:167}, },
		layers: [
			{
				name: "bota_flex",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.118, b: 0, c: 0.221, d: 0.882, tx: 18.4, ty: -47.5},
						transform: [18.4, -47.5, 1.118, 0.91, 0.246, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 7,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1.118, b: 0, c: 0.298, d: 0.855, tx: 13.3, ty: -46.2},
						transform: [13.3, -46.2, 1.118, 0.905, 0.335, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0.027], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 14,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.352, d: 1.1, tx: 13.7, ty: -58.45},
						transform: [13.7, -58.45, 1, 1.155, 0.31, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0.127], [0.293, 0.928], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 32,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.352, d: 1.027, tx: 13.7, ty: -54.85},
						transform: [13.7, -54.85, 1, 1.086, 0.33, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 52,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.288, d: 1.027, tx: 16.75, ty: -54.85},
						transform: [16.75, -54.85, 1, 1.067, 0.273, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 70,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.352, d: 1.027, tx: 13.7, ty: -54.85},
						transform: [13.7, -54.85, 1, 1.086, 0.33, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 71,
						to: 90,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.288, d: 1.027, tx: 16.75, ty: -54.85},
						transform: [16.75, -54.85, 1, 1.067, 0.273, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 91,
						to: 108,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.352, d: 1.027, tx: 13.7, ty: -54.85},
						transform: [13.7, -54.85, 1, 1.086, 0.33, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 128,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.288, d: 1.027, tx: 16.75, ty: -54.85},
						transform: [16.75, -54.85, 1, 1.067, 0.273, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 146,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.352, d: 1.027, tx: 13.7, ty: -54.85},
						transform: [13.7, -54.85, 1, 1.086, 0.33, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.288, d: 1.027, tx: 16.75, ty: -54.85},
						transform: [16.75, -54.85, 1, 1.067, 0.273, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.352, d: 1.027, tx: 13.7, ty: -54.85},
						transform: [13.7, -54.85, 1, 1.086, 0.33, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_relax",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.072, b: 0.065, c: 0.141, d: 0.836, tx: 4.7, ty: -103.45},
						transform: [4.7, -103.45, 1.074, 0.847, 0.167, 3.081, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 7,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.148, b: 0.048, c: 0.15, d: 0.773, tx: -0.15, ty: -93.45},
						transform: [-0.15, -93.45, 1.149, 0.788, 0.192, 3.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0.027], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 14,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: 0.163, c: 0.351, d: 1.008, tx: -11.9, ty: -122.55},
						transform: [-11.9, -122.55, 0.97, 1.067, 0.335, 2.973, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0.127], [0.293, 0.928], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 32,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: 0.152, c: 0.351, d: 0.941, tx: -11.9, ty: -114.7},
						transform: [-11.9, -114.7, 0.969, 1.005, 0.357, 2.984, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 52,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.089, b: -0.018, c: 0.261, d: 0.984, tx: -5.55, ty: -121.8},
						transform: [-5.55, -121.8, 1.089, 1.018, 0.259, -3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 70,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: 0.152, c: 0.351, d: 0.941, tx: -11.9, ty: -114.7},
						transform: [-11.9, -114.7, 0.969, 1.005, 0.357, 2.984, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 71,
						to: 90,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.089, b: -0.018, c: 0.261, d: 0.984, tx: -5.55, ty: -121.8},
						transform: [-5.55, -121.8, 1.089, 1.018, 0.259, -3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 91,
						to: 108,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: 0.152, c: 0.351, d: 0.941, tx: -11.9, ty: -114.7},
						transform: [-11.9, -114.7, 0.969, 1.005, 0.357, 2.984, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 128,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.089, b: -0.018, c: 0.261, d: 0.984, tx: -5.55, ty: -121.8},
						transform: [-5.55, -121.8, 1.089, 1.018, 0.259, -3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 146,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: 0.152, c: 0.351, d: 0.941, tx: -11.9, ty: -114.7},
						transform: [-11.9, -114.7, 0.969, 1.005, 0.357, 2.984, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -1.089, b: -0.018, c: 0.261, d: 0.984, tx: -5.55, ty: -121.8},
						transform: [-5.55, -121.8, 1.089, 1.018, 0.259, -3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: 0.152, c: 0.351, d: 0.941, tx: -11.9, ty: -114.7},
						transform: [-11.9, -114.7, 0.969, 1.005, 0.357, 2.984, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bota_flex",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.013, b: 0.055, c: -0.198, d: 0.856, tx: -24, ty: -45.45},
						transform: [-24, -45.45, 1.014, 0.879, -0.227, 0.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 7,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 1.082, b: 0.051, c: -0.211, d: 0.792, tx: -22.85, ty: -42.3},
						transform: [-22.85, -42.3, 1.084, 0.82, -0.261, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0.027], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 14,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.064, c: -0.155, d: 1.022, tx: -22.55, ty: -53.4},
						transform: [-22.55, -53.4, 0.989, 1.034, -0.151, 0.065, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0.127], [0.293, 0.928], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 32,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.155, d: 0.955, tx: -22.55, ty: -50.15},
						transform: [-22.55, -50.15, 0.989, 0.968, -0.161, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 52,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.097, d: 0.997, tx: -25.3, ty: -52.15},
						transform: [-25.3, -52.15, 0.989, 1.002, -0.097, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 70,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.155, d: 0.955, tx: -22.55, ty: -50.15},
						transform: [-22.55, -50.15, 0.989, 0.968, -0.161, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 71,
						to: 90,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.097, d: 0.997, tx: -25.3, ty: -52.15},
						transform: [-25.3, -52.15, 0.989, 1.002, -0.097, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 91,
						to: 108,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.155, d: 0.955, tx: -22.55, ty: -50.15},
						transform: [-22.55, -50.15, 0.989, 0.968, -0.161, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 128,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.097, d: 0.997, tx: -25.3, ty: -52.15},
						transform: [-25.3, -52.15, 0.989, 1.002, -0.097, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 146,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.155, d: 0.955, tx: -22.55, ty: -50.15},
						transform: [-22.55, -50.15, 0.989, 0.968, -0.161, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.097, d: 0.997, tx: -25.3, ty: -52.15},
						transform: [-25.3, -52.15, 0.989, 1.002, -0.097, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_bota_flex_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: 0.06, c: -0.155, d: 0.955, tx: -22.55, ty: -50.15},
						transform: [-22.55, -50.15, 0.989, 0.968, -0.161, 0.06, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "leg_relax",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.056, c: 0.108, d: 0.828, tx: -24.05, ty: -100.8},
						transform: [-24.05, -100.8, 1.001, 0.835, 0.13, -0.056, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 7,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 1.068, b: -0.051, c: 0.116, d: 0.766, tx: -22.9, ty: -91},
						transform: [-22.9, -91, 1.069, 0.775, 0.15, -0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0.027], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 14,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.071, c: 0.297, d: 0.97, tx: -35.55, ty: -117.8},
						transform: [-35.55, -117.8, 0.891, 1.014, 0.298, -0.08, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0.127], [0.293, 0.928], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 32,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.297, d: 0.906, tx: -35.55, ty: -110.3},
						transform: [-35.55, -110.3, 0.89, 0.954, 0.317, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 52,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.169, d: 0.963, tx: -30.3, ty: -116.6},
						transform: [-30.3, -116.6, 0.89, 0.977, 0.173, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 70,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.297, d: 0.906, tx: -35.55, ty: -110.3},
						transform: [-35.55, -110.3, 0.89, 0.954, 0.317, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 71,
						to: 90,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.169, d: 0.963, tx: -30.3, ty: -116.6},
						transform: [-30.3, -116.6, 0.89, 0.977, 0.173, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 91,
						to: 108,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.297, d: 0.906, tx: -35.55, ty: -110.3},
						transform: [-35.55, -110.3, 0.89, 0.954, 0.317, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 109,
						to: 128,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.169, d: 0.963, tx: -30.3, ty: -116.6},
						transform: [-30.3, -116.6, 0.89, 0.977, 0.173, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 146,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.297, d: 0.906, tx: -35.55, ty: -110.3},
						transform: [-35.55, -110.3, 0.89, 0.954, 0.317, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.169, d: 0.963, tx: -30.3, ty: -116.6},
						transform: [-30.3, -116.6, 0.89, 0.977, 0.173, -0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.038], [0.5, 1], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_leg_relax_x_f0",
						instancename: "",
						matrix: {a: 0.888, b: -0.066, c: 0.297, d: 0.906, tx: -35.55, ty: -110.3},
						transform: [-35.55, -110.3, 0.89, 0.954, 0.317, -0.075, NaN],
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
						to: 1,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.044, c: 0.044, d: 0.999, tx: -94.15, ty: -135.05},
						transform: [-94.15, -135.05, 1, 1, 0.044, 3.098, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.044, c: 0.044, d: 0.999, tx: -94.15, ty: -120.05},
						transform: [-94.15, -120.05, 1, 1, 0.044, 3.098, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -105.3, ty: -139.55},
						transform: [-105.3, -139.55, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 34,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -105.8, ty: -132.05},
						transform: [-105.8, -132.05, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 54,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -102.8, ty: -141.55},
						transform: [-102.8, -141.55, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 72,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -105.8, ty: -132.05},
						transform: [-105.8, -132.05, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 92,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -102.8, ty: -141.55},
						transform: [-102.8, -141.55, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 110,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -105.8, ty: -132.05},
						transform: [-105.8, -132.05, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 111,
						to: 130,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -102.8, ty: -141.55},
						transform: [-102.8, -141.55, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 131,
						to: 146,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -105.8, ty: -132.05},
						transform: [-105.8, -132.05, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -102.8, ty: -141.55},
						transform: [-102.8, -141.55, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_hose_1_x_f0",
						instancename: "",
						matrix: {a: -0.999, b: 0.04, c: 0.04, d: 0.999, tx: -105.8, ty: -132.05},
						transform: [-105.8, -132.05, 1, 1, 0.04, 3.102, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_backpack_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.018, c: -0.018, d: 1, tx: -66.7, ty: -136.3},
						transform: [-66.7, -136.3, 1, 1, -0.018, -3.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.018, c: -0.018, d: 1, tx: -66.7, ty: -121.3},
						transform: [-66.7, -121.3, 1, 1, -0.018, -3.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -77.8, ty: -140.7},
						transform: [-77.8, -140.7, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 34,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -78.3, ty: -133.2},
						transform: [-78.3, -133.2, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 54,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -75.3, ty: -142.7},
						transform: [-75.3, -142.7, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 72,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -78.3, ty: -133.2},
						transform: [-78.3, -133.2, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 73,
						to: 92,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -75.3, ty: -142.7},
						transform: [-75.3, -142.7, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 93,
						to: 110,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -78.3, ty: -133.2},
						transform: [-78.3, -133.2, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 111,
						to: 130,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -75.3, ty: -142.7},
						transform: [-75.3, -142.7, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 131,
						to: 146,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -78.3, ty: -133.2},
						transform: [-78.3, -133.2, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -75.3, ty: -142.7},
						transform: [-75.3, -142.7, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.022, c: -0.022, d: 1, tx: -78.3, ty: -133.2},
						transform: [-78.3, -133.2, 1, 1, -0.022, -3.12, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.006, b: 0.115, c: -0.116, d: 1.018, tx: 17.25, ty: -90.25},
						transform: [17.25, -90.25, 1.012, 1.024, -0.114, 0.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 1.006, b: 0.115, c: -0.116, d: 1.018, tx: 17.25, ty: -75.25},
						transform: [17.25, -75.25, 1.012, 1.024, -0.114, 0.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 6.05, ty: -95.25},
						transform: [6.05, -95.25, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 33,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -87.75},
						transform: [5.55, -87.75, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 53,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 8.55, ty: -97.25},
						transform: [8.55, -97.25, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 71,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -87.75},
						transform: [5.55, -87.75, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 91,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 8.55, ty: -97.25},
						transform: [8.55, -97.25, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 92,
						to: 109,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -87.75},
						transform: [5.55, -87.75, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 129,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 8.55, ty: -97.25},
						transform: [8.55, -97.25, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 146,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -87.75},
						transform: [5.55, -87.75, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 8.55, ty: -97.25},
						transform: [8.55, -97.25, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_arm_scared_2_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -87.75},
						transform: [5.55, -87.75, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "darwin_head_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.072, c: -0.072, d: 0.997, tx: -11.55, ty: -104.25},
						transform: [-11.55, -104.25, 1, 1, -0.072, -3.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.072, c: -0.072, d: 0.997, tx: -11.55, ty: -89.25},
						transform: [-11.55, -89.25, 1, 1, -0.072, -3.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -22.85, ty: -108.45},
						transform: [-22.85, -108.45, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 33,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -23.35, ty: -100.95},
						transform: [-23.35, -100.95, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 53,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -20.35, ty: -110.45},
						transform: [-20.35, -110.45, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 71,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -23.35, ty: -100.95},
						transform: [-23.35, -100.95, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 91,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -20.35, ty: -110.45},
						transform: [-20.35, -110.45, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 92,
						to: 109,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -23.35, ty: -100.95},
						transform: [-23.35, -100.95, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 129,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -20.35, ty: -110.45},
						transform: [-20.35, -110.45, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 146,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -23.35, ty: -100.95},
						transform: [-23.35, -100.95, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -20.35, ty: -110.45},
						transform: [-20.35, -110.45, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_darwin_head_x_f27",
						instancename: "",
						matrix: {a: -0.997, b: -0.076, c: -0.076, d: 0.997, tx: -23.35, ty: -100.95},
						transform: [-23.35, -100.95, 1, 1, -0.076, -3.066, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mouth_talking",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_darwin_mouth_scared_f0",
						instancename: "",
						matrix: {a: -1, b: -0.013, c: -0.01, d: 0.764, tx: 3.75, ty: -111.3},
						transform: [3.75, -111.3, 1, 0.764, -0.013, -3.128, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.305, 0.76], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_darwin_mouth_scared_f0",
						instancename: "",
						matrix: {a: -1, b: -0.013, c: -0.006, d: 0.48, tx: 2.75, ty: -107.3},
						transform: [2.75, -107.3, 1, 0.48, -0.013, -3.128, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.01, d: 0.764, tx: 6.25, ty: -101.8},
						transform: [6.25, -101.8, 1, 0.764, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 0.929, b: -0.012, c: 0.015, d: 1.106, tx: -5.75, ty: -118.3},
						transform: [-5.75, -118.3, 0.929, 1.106, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 33,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.01, d: 0.764, tx: -5.25, ty: -112.3},
						transform: [-5.25, -112.3, 1, 0.764, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 53,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 0.947, b: -0.013, c: 0.014, d: 1.085, tx: -2.25, ty: -120.55},
						transform: [-2.25, -120.55, 0.947, 1.085, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 71,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.01, d: 0.764, tx: -5.25, ty: -112.3},
						transform: [-5.25, -112.3, 1, 0.764, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 91,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 0.947, b: -0.013, c: 0.014, d: 1.085, tx: -2.25, ty: -120.55},
						transform: [-2.25, -120.55, 0.947, 1.085, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 92,
						to: 109,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.01, d: 0.764, tx: -5.25, ty: -112.3},
						transform: [-5.25, -112.3, 1, 0.764, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 129,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 0.947, b: -0.013, c: 0.014, d: 1.085, tx: -2.25, ty: -120.55},
						transform: [-2.25, -120.55, 0.947, 1.085, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 146,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.01, d: 0.764, tx: -5.25, ty: -112.3},
						transform: [-5.25, -112.3, 1, 0.764, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 0.947, b: -0.013, c: 0.014, d: 1.085, tx: -2.25, ty: -120.55},
						transform: [-2.25, -120.55, 0.947, 1.085, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_mouth_open2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.013, c: 0.01, d: 0.764, tx: -5.25, ty: -112.3},
						transform: [-5.25, -112.3, 1, 0.764, 0.013, -0.013, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.92, b: -0.422, c: -0.427, d: 0.931, tx: -38.8, ty: -98.55},
						transform: [-38.8, -98.55, 1.012, 1.024, -0.43, -2.712, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -0.92, b: -0.422, c: -0.427, d: 0.931, tx: -38.8, ty: -83.55},
						transform: [-38.8, -83.55, 1.012, 1.024, -0.43, -2.712, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -49.3, ty: -106.3},
						transform: [-49.3, -106.3, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 33,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -49.8, ty: -98.8},
						transform: [-49.8, -98.8, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 53,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -46.8, ty: -108.3},
						transform: [-46.8, -108.3, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 71,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -49.8, ty: -98.8},
						transform: [-49.8, -98.8, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 91,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -46.8, ty: -108.3},
						transform: [-46.8, -108.3, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 92,
						to: 109,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -49.8, ty: -98.8},
						transform: [-49.8, -98.8, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 129,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -46.8, ty: -108.3},
						transform: [-46.8, -108.3, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 146,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -49.8, ty: -98.8},
						transform: [-49.8, -98.8, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -46.8, ty: -108.3},
						transform: [-46.8, -108.3, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_arm_scared_x_f0",
						instancename: "",
						matrix: {a: -1.012, b: -0.008, c: -0.008, d: 1.024, tx: -49.8, ty: -98.8},
						transform: [-49.8, -98.8, 1.012, 1.024, -0.008, -3.134, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "arm_scared_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 1.006, b: 0.115, c: -0.116, d: 1.018, tx: 20.05, ty: -84.9},
						transform: [20.05, -84.9, 1.012, 1.024, -0.114, 0.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 1.006, b: 0.115, c: -0.116, d: 1.018, tx: 20.05, ty: -69.9},
						transform: [20.05, -69.9, 1.012, 1.024, -0.114, 0.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 6.05, ty: -90.45},
						transform: [6.05, -90.45, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 33,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -82.95},
						transform: [5.55, -82.95, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 53,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 8.55, ty: -92.45},
						transform: [8.55, -92.45, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 71,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -82.95},
						transform: [5.55, -82.95, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 91,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 8.55, ty: -92.45},
						transform: [8.55, -92.45, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 92,
						to: 109,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -82.95},
						transform: [5.55, -82.95, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 129,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 8.55, ty: -92.45},
						transform: [8.55, -92.45, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 146,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -82.95},
						transform: [5.55, -82.95, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 166,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 8.55, ty: -92.45},
						transform: [8.55, -92.45, 1.012, 1.024, -0.514, 0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_arm_scared_1_x_f0",
						instancename: "",
						matrix: {a: 0.881, b: 0.498, c: -0.504, d: 0.892, tx: 5.55, ty: -82.95},
						transform: [5.55, -82.95, 1.012, 1.024, -0.514, 0.514, NaN],
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
						to: 1,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.744, b: -0.055, c: 0.055, d: 0.74, tx: 10.55, ty: -148.5},
						transform: [10.55, -148.5, 0.746, 0.742, 0.074, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.078, c: 0.077, d: 0.738, tx: 27, ty: -131.15},
						transform: [27, -131.15, 0.746, 0.742, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.075, d: 0.738, tx: 23, ty: -157.45},
						transform: [23, -157.45, 0.746, 0.742, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 33,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.075, d: 0.738, tx: 22.5, ty: -149.95},
						transform: [22.5, -149.95, 0.746, 0.742, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 53,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.075, d: 0.738, tx: 25.5, ty: -159.45},
						transform: [25.5, -159.45, 0.746, 0.742, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 71,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.075, d: 0.738, tx: 22.5, ty: -149.95},
						transform: [22.5, -149.95, 0.746, 0.742, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 91,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.075, d: 0.738, tx: 25.5, ty: -159.45},
						transform: [25.5, -159.45, 0.746, 0.742, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 92,
						to: 93,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.075, d: 0.738, tx: 22.5, ty: -149.95},
						transform: [22.5, -149.95, 0.746, 0.742, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.352, 0.065], [0.685, 0.41], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 94,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.738, tx: 16.35, ty: -140.15},
						transform: [16.35, -140.15, 0.746, 0.742, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.344, 0.273], [0.677, 0.608], [1, 1], ],
						}
					},
					{
						from: 95,
						to: 95,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.737, tx: 12.45, ty: -137.75},
						transform: [12.45, -137.75, 0.746, 0.741, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.344, 0.29], [0.677, 0.625], [1, 1], ],
						}
					},
					{
						from: 96,
						to: 96,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.737, tx: 6.95, ty: -138},
						transform: [6.95, -138, 0.746, 0.741, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.345, 0.3], [0.678, 0.634], [1, 1], ],
						}
					},
					{
						from: 97,
						to: 109,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.738, tx: 0.05, ty: -142.6},
						transform: [0.05, -142.6, 0.746, 0.741, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.493, 0.252], [0.648, 0.929], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 129,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.738, tx: 2.55, ty: -152.1},
						transform: [2.55, -152.1, 0.746, 0.741, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 146,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.738, tx: -0.95, ty: -144.1},
						transform: [-0.95, -144.1, 0.746, 0.741, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 161,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.738, tx: 2.55, ty: -152.1},
						transform: [2.55, -152.1, 0.746, 0.741, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.555, 0.013], [0.767, 0.638], [1, 1], ],
						}
					},
					{
						from: 162,
						to: 162,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.737, tx: -0.25, ty: -145.7},
						transform: [-0.25, -145.7, 0.745, 0.741, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.329, 0.361], [0.661, 0.696], [1, 1], ],
						}
					},
					{
						from: 163,
						to: 163,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.074, d: 0.737, tx: 3.3, ty: -144.05},
						transform: [3.3, -144.05, 0.745, 0.741, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.325, 0.375], [0.657, 0.711], [1, 1], ],
						}
					},
					{
						from: 164,
						to: 164,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 1.049, b: -0.142, c: 0.1, d: 0.734, tx: 11.75, ty: -142.95},
						transform: [11.75, -142.95, 1.058, 0.741, 0.135, -0.135, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.373], [0.659, 0.708], [1, 1], ],
						}
					},
					{
						from: 165,
						to: 165,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.762, b: -0.418, c: 0.338, d: 0.615, tx: 18.7, ty: -146.15},
						transform: [18.7, -146.15, 0.87, 0.702, 0.502, -0.502, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.318, 0.472], [0.649, 0.813], [1, 1], ],
						}
					},
					{
						from: 166,
						to: 166,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.075, d: 0.738, tx: 21, ty: -148.35},
						transform: [21, -148.35, 0.746, 0.742, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.352, 0.065], [0.685, 0.41], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.742, b: -0.075, c: 0.075, d: 0.738, tx: 22.5, ty: -149.95},
						transform: [22.5, -149.95, 0.746, 0.742, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.352, 0.065], [0.685, 0.41], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.755, b: -0.056, c: 0.056, d: 0.755, tx: -34.85, ty: -146},
						transform: [-34.85, -146, 0.757, 0.757, 0.074, -0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 2,
						to: 8,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.753, b: -0.079, c: 0.079, d: 0.753, tx: -15.3, ty: -127.3},
						transform: [-15.3, -127.3, 0.757, 0.757, 0.104, -0.104, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.301, 0], [0.683, 0.9], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 14,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -20.2, ty: -154},
						transform: [-20.2, -154, 0.779, 0.779, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.622, 0], [0.575, 0.877], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 33,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -20.7, ty: -146.5},
						transform: [-20.7, -146.5, 0.779, 0.779, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 53,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -17.7, ty: -156},
						transform: [-17.7, -156, 0.779, 0.779, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 71,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -20.7, ty: -146.5},
						transform: [-20.7, -146.5, 0.779, 0.779, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 72,
						to: 91,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -17.7, ty: -156},
						transform: [-17.7, -156, 0.779, 0.779, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 92,
						to: 93,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -20.7, ty: -146.5},
						transform: [-20.7, -146.5, 0.779, 0.779, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.352, 0.065], [0.685, 0.41], [1, 1], ],
						}
					},
					{
						from: 94,
						to: 94,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -26.9, ty: -136.15},
						transform: [-26.9, -136.15, 0.779, 0.779, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.344, 0.273], [0.677, 0.608], [1, 1], ],
						}
					},
					{
						from: 95,
						to: 95,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.774, b: -0.078, c: 0.078, d: 0.774, tx: -31, ty: -133.75},
						transform: [-31, -133.75, 0.778, 0.778, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.344, 0.29], [0.677, 0.625], [1, 1], ],
						}
					},
					{
						from: 96,
						to: 96,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -36.85, ty: -134},
						transform: [-36.85, -134, 0.778, 0.778, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.345, 0.3], [0.678, 0.634], [1, 1], ],
						}
					},
					{
						from: 97,
						to: 109,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -44.25, ty: -138.6},
						transform: [-44.25, -138.6, 0.779, 0.779, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.493, 0.252], [0.648, 0.929], [1, 1], ],
						}
					},
					{
						from: 110,
						to: 129,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -41.75, ty: -148.1},
						transform: [-41.75, -148.1, 0.779, 0.779, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 146,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -45.25, ty: -140.1},
						transform: [-45.25, -140.1, 0.779, 0.779, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.591, 0.014], [0.689, 0.921], [1, 1], ],
						}
					},
					{
						from: 147,
						to: 161,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -41.75, ty: -148.1},
						transform: [-41.75, -148.1, 0.779, 0.779, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.555, 0.013], [0.767, 0.638], [1, 1], ],
						}
					},
					{
						from: 162,
						to: 162,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.774, b: -0.078, c: 0.078, d: 0.774, tx: -44.55, ty: -141.7},
						transform: [-44.55, -141.7, 0.778, 0.778, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.329, 0.361], [0.661, 0.696], [1, 1], ],
						}
					},
					{
						from: 163,
						to: 163,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.774, b: -0.078, c: 0.078, d: 0.774, tx: -41, ty: -140.15},
						transform: [-41, -140.15, 0.778, 0.778, 0.1, -0.1, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.325, 0.375], [0.657, 0.711], [1, 1], ],
						}
					},
					{
						from: 164,
						to: 164,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 1.086, b: -0.071, c: 0.047, d: 0.722, tx: -32.2, ty: -138.3},
						transform: [-32.2, -138.3, 1.089, 0.723, 0.066, -0.066, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.373], [0.659, 0.708], [1, 1], ],
						}
					},
					{
						from: 165,
						to: 165,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.851, b: -0.348, c: 0.287, d: 0.703, tx: -24.55, ty: -141.3},
						transform: [-24.55, -141.3, 0.919, 0.759, 0.388, -0.388, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.318, 0.472], [0.649, 0.813], [1, 1], ],
						}
					},
					{
						from: 166,
						to: 166,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -22.2, ty: -144.9},
						transform: [-22.2, -144.9, 0.779, 0.779, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.352, 0.065], [0.685, 0.41], [1, 1], ],
						}
					},
					{
						from: 167,
						to: 167,
						classname: "_darwin_pupila_f0",
						instancename: "",
						matrix: {a: 0.775, b: -0.078, c: 0.078, d: 0.775, tx: -20.7, ty: -146.5},
						transform: [-20.7, -146.5, 0.779, 0.779, 0.101, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.352, 0.065], [0.685, 0.41], [1, 1], ],
						}
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 14,
					},
					{
						from: 15,
						to: 167,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 166,
					},
					{
						from: 167,
						to: 167,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_darwin_hose_1_ini_x_f0": {
		type: "bitmap",
		asset: "_darwin_hose_1_ini_x_f0",
		scale: 1,
		position: [-30.9, -47.9],
	},
	"_darwin_bota3_x_f0": {
		type: "bitmap",
		asset: "_darwin_bota3_x_f0",
		scale: 1,
		position: [-12.3, -13.05],
	},
	"_darwin_bota_flex_x_f0": {
		type: "bitmap",
		asset: "_darwin_bota_flex_x_f0",
		scale: 1,
		position: [-27.15, -12.2],
	},
	"_darwin_leg_rect_x_f0": {
		type: "bitmap",
		asset: "_darwin_leg_rect_x_f0",
		scale: 1,
		position: [-18.45, -26.65],
	},
	"_darwin_leg_relax_x_f0": {
		type: "bitmap",
		asset: "_darwin_leg_relax_x_f0",
		scale: 1,
		position: [-20.35, -12.5],
	},
	"_darwin_leg_45_x_f0": {
		type: "bitmap",
		asset: "_darwin_leg_45_x_f0",
		scale: 1,
		position: [-24.25, -16.55],
	},
	"_darwin_leg_30_x_f0": {
		type: "bitmap",
		asset: "_darwin_leg_30_x_f0",
		scale: 1,
		position: [-26.8, -20],
	},
	"_darwin_hosepipe_n2b_x_f0": {
		type: "bitmap",
		asset: "_darwin_hosepipe_n2b_x_f0",
		scale: 1,
		position: [-18.1, -55],
	},
	"_darwin_hosepipe_nf_x_f0": {
		type: "bitmap",
		asset: "_darwin_hosepipe_nf_x_f0",
		scale: 1,
		position: [-6.15, -36.85],
	},
	"_darwin_backpack_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 26,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -0.05},
						transform: [0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 24,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.3, ty: 4.45},
						transform: [-3.3, 4.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -0.05},
						transform: [0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
				]
			},
		]
	},
	"_darwin_arm_curve_x_f0": {
		type: "bitmap",
		asset: "_darwin_arm_curve_x_f0",
		scale: 1,
		position: [-12.65, -7.45],
	},
	"_darwin_head_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 182,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 9,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 24,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.5, ty: 0.5},
						transform: [-1.5, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 35,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 50,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.5, ty: 0.5},
						transform: [-1.5, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 51,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 54,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.422, 0.108], [0.73, 0.497], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 61,
						classname: "_darwin_darwin_head_x_f10",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.05, ty: -2.95},
						transform: [0.05, -2.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.309, 0.324], [0.535, 0.788], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 63,
						classname: "_darwin_darwin_head_x_f10",
						instancename: "",
						matrix: {a: 0.999, b: -0.043, c: 0.043, d: 0.999, tx: -1.5, ty: 2.5},
						transform: [-1.5, 2.5, 1, 1, 0.043, -0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.369, 0.173], [0.699, 0.519], [1, 1], ],
						}
					},
					{
						from: 64,
						to: 76,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.4, ty: 0.25},
						transform: [-1.4, 0.25, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.358, 0.224], [0.452, 0.929], [1, 1], ],
						}
					},
					{
						from: 77,
						to: 77,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 78,
						to: 87,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 102,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.5, ty: 0.5},
						transform: [-1.5, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 103,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 104,
						to: 113,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 114,
						to: 128,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.5, ty: 0.5},
						transform: [-1.5, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 129,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 130,
						to: 139,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 140,
						to: 154,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.5, ty: 0.5},
						transform: [-1.5, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 155,
						to: 155,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 156,
						to: 165,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 166,
						to: 171,
						classname: "_darwin_darwin_head_x_f10",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.5, ty: 0.5},
						transform: [-1.5, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.453, 0.091], [0.73, 0.52], [1, 1], ],
						}
					},
					{
						from: 172,
						to: 180,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.7, ty: -1.3},
						transform: [-0.7, -1.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.246, 0.433], [0.483, 0.928], [1, 1], ],
						}
					},
					{
						from: 181,
						to: 181,
						classname: "_darwin_darwin_head_x_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_darwin_head_idle_up": {
		type: "movieclip",
		fps: 30,
		totalFrames: 260,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.422, 0.108], [0.73, 0.497], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 9,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -3},
						transform: [0.5, -3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.276, 0.366], [0.46, 0.931], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 24,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 35,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 36,
						to: 50,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 51,
						to: 51,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 61,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 62,
						to: 76,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 77,
						to: 77,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 78,
						to: 87,
						classname: "_darwin_darwin_head_x_f25",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 88,
						to: 102,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 103,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 104,
						to: 113,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 114,
						to: 128,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 129,
						to: 129,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 130,
						to: 139,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 140,
						to: 154,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 155,
						to: 155,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 156,
						to: 165,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 166,
						to: 180,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 181,
						to: 181,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 182,
						to: 191,
						classname: "_darwin_darwin_head_x_f10",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 192,
						to: 206,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 207,
						to: 207,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 208,
						to: 217,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 218,
						to: 232,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 233,
						to: 233,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 234,
						to: 243,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.429, 0.086], [0.463, 0.925], [1, 1], ],
						}
					},
					{
						from: 244,
						to: 251,
						classname: "_darwin_darwin_head_x_f10",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: 0.3},
						transform: [0.5, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.411, 0.116], [0.726, 0.495], [1, 1], ],
						}
					},
					{
						from: 252,
						to: 258,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -0.5},
						transform: [0.5, -0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.29, 0.341], [0.455, 0.931], [1, 1], ],
						}
					},
					{
						from: 259,
						to: 259,
						classname: "_darwin_darwin_head_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.5, ty: -4},
						transform: [0.5, -4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_darwin_arm_scared_2_x_f0": {
		type: "bitmap",
		asset: "_darwin_arm_scared_2_x_f0",
		scale: 1,
		position: [-21.75, -10.4],
	},
	"_darwin_hosepipe_ng_x_f0": {
		type: "bitmap",
		asset: "_darwin_hosepipe_ng_x_f0",
		scale: 1,
		position: [-6.15, -34.5],
	},
	"_darwin_hosepipe_nc_x_f0": {
		type: "bitmap",
		asset: "_darwin_hosepipe_nc_x_f0",
		scale: 1,
		position: [-6.65, -25.8],
	},
	"_darwin_cone": {
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
						classname: "_darwin_cone_15_x",
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
						classname: "_darwin_cone_15_x",
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
						classname: "_darwin_cone_15_x",
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
						classname: "_darwin_cone_15_x",
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
						classname: "_darwin_cone_15_x",
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
						classname: "_darwin_cone_15_x",
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
						classname: "_darwin_cone_15_x",
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
	"_darwin_tube_x": {
		type: "bitmap",
		asset: "_darwin_tube_x",
		scale: 1,
		position: [-77.1, -12.05],
	},
	"_darwin_arm_hand_1_x_f0": {
		type: "bitmap",
		asset: "_darwin_arm_hand_1_x_f0",
		scale: 1,
		position: [-28.65, -14.45],
	},
	"_darwin_hand_x_f0": {
		type: "bitmap",
		asset: "_darwin_hand_x_f0",
		scale: 1,
		position: [-13.4, -14.5],
	},
	"_darwin_box": {
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
	"_darwin_backpack_attack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 14,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -0.05},
						transform: [0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0.041], [0.691, 0.952], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 12,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.2, ty: 0.95},
						transform: [2.2, 0.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.488, 0.041], [0.691, 0.952], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_darwin_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0.2, ty: -0.05},
						transform: [0.2, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_darwin_head_attack": {
		type: "movieclip",
		fps: 30,
		totalFrames: 84,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.472, 0.056], [0.757, 0.481], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.65},
						transform: [0, 0.65, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.267, 0.409], [0.457, 0.94], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 12,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: 2},
						transform: [2.7, 2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 18,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 26,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: 2},
						transform: [2.7, 2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 32,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 33,
						to: 40,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: 2},
						transform: [2.7, 2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 41,
						to: 41,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 42,
						to: 46,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 47,
						to: 54,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: 2},
						transform: [2.7, 2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 60,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 61,
						to: 68,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: 2},
						transform: [2.7, 2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 70,
						to: 74,
						classname: "_darwin_darwin_head_x_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.5, 0.048], [0.476, 0.935], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 77,
						classname: "_darwin_darwin_head_x_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.7, ty: 2},
						transform: [2.7, 2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.539, 0.044], [0.698, 0.609], [1, 1], ],
						}
					},
					{
						from: 78,
						to: 82,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.25, ty: 0.55},
						transform: [-0.25, 0.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.516], [0.544, 0.921], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 83,
						classname: "_darwin_darwin_head_x_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_darwin_head_attack_f2": {
		type: "bitmap",
		asset: "_darwin_head_attack_f2",
		scale: 1,
		position: [-86.1, -107.8],
	},
	"_darwin_head_attack_up_f24": {
		type: "bitmap",
		asset: "_darwin_head_attack_up_f24",
		scale: 1,
		position: [-86.1, -107.8],
	},
	"_darwin_head_attack_up": {
		type: "movieclip",
		fps: 30,
		totalFrames: 192,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 14,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 21,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 30,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 37,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 46,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 47,
						to: 47,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 53,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 62,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 69,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 70,
						to: 78,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 79,
						to: 79,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 80,
						to: 85,
						classname: "_darwin_darwin_head_x_f5",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 86,
						to: 94,
						classname: "_darwin_darwin_head_x_f5",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 95,
						to: 95,
						classname: "_darwin_darwin_head_x_f30",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 96,
						to: 101,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 110,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 111,
						to: 111,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 112,
						to: 117,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 118,
						to: 126,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 127,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 128,
						to: 133,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 134,
						to: 142,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 143,
						to: 143,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 144,
						to: 149,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 150,
						to: 158,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 159,
						to: 159,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 160,
						to: 165,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 166,
						to: 174,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 175,
						to: 175,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 176,
						to: 181,
						classname: "_darwin_darwin_head_x_f30",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 182,
						to: 190,
						classname: "_darwin_darwin_head_x_f30",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 5},
						transform: [-1.3, 5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.47, 0.127], [0.5, 0.9], [1, 1], ],
						}
					},
					{
						from: 191,
						to: 191,
						classname: "_darwin_darwin_head_x_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.3, ty: 0},
						transform: [-1.3, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_darwin_tube_anim": {
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
						classname: "_darwin_tube_x",
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
						classname: "_darwin_tube_x",
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
						classname: "_darwin_tube_x",
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
						classname: "_darwin_tube_x",
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
						classname: "_darwin_tube_x",
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
						classname: "_darwin_tube_x",
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
	"_darwin_fx_flash_f0": {
		type: "bitmap",
		asset: "_darwin_fx_flash_f0",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_darwin_fx_flash_f1": {
		type: "bitmap",
		asset: "_darwin_fx_flash_f1",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_darwin_fx_flash_f2": {
		type: "bitmap",
		asset: "_darwin_fx_flash_f2",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_darwin_hose_1_x_f0": {
		type: "bitmap",
		asset: "_darwin_hose_1_x_f0",
		scale: 1,
		position: [-20.75, -49.15],
	},
	"_darwin_darwin_backpack_x_f0": {
		type: "bitmap",
		asset: "_darwin_darwin_backpack_x_f0",
		scale: 1,
		position: [-32.6, -39.4],
	},
	"_darwin_bota4_x_f0": {
		type: "bitmap",
		asset: "_darwin_bota4_x_f0",
		scale: 1,
		position: [-20, -14.7],
	},
	"_darwin_leg_90_x_f0": {
		type: "bitmap",
		asset: "_darwin_leg_90_x_f0",
		scale: 1,
		position: [-24.85, -20.25],
	},
	"_darwin_darwin_head_x_f19": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f19",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_blanket1_x_f0": {
		type: "bitmap",
		asset: "_darwin_blanket1_x_f0",
		scale: 1,
		position: [-90.45, -54.75],
	},
	"_darwin_blanket2_x_f0": {
		type: "bitmap",
		asset: "_darwin_blanket2_x_f0",
		scale: 1,
		position: [-94.75, -57.25],
	},
	"_darwin_pollaroid_button_x_f0": {
		type: "bitmap",
		asset: "_darwin_pollaroid_button_x_f0",
		scale: 1,
		position: [-12.15, -8.65],
	},
	"_darwin_tube_tripod_x_f0": {
		type: "bitmap",
		asset: "_darwin_tube_tripod_x_f0",
		scale: 1,
		position: [-8.7, -9.8],
	},
	"_darwin_pollaroid_x_f0": {
		type: "bitmap",
		asset: "_darwin_pollaroid_x_f0",
		scale: 1,
		position: [-46.1, -29.9],
	},
	"_darwin_bota_x_f0": {
		type: "bitmap",
		asset: "_darwin_bota_x_f0",
		scale: 1,
		position: [-16.6, -12.2],
	},
	"_darwin_bota2_x_f0": {
		type: "bitmap",
		asset: "_darwin_bota2_x_f0",
		scale: 1,
		position: [-16.6, -14.7],
	},
	"_darwin_darwin_head_x_f7": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f7",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_arm_scared_x_f0": {
		type: "bitmap",
		asset: "_darwin_arm_scared_x_f0",
		scale: 1,
		position: [-31.05, -15.2],
	},
	"_darwin_arm_scared_1_x_f0": {
		type: "bitmap",
		asset: "_darwin_arm_scared_1_x_f0",
		scale: 1,
		position: [-32.8, -15.65],
	},
	"_darwin_arm_hang_x_f0": {
		type: "bitmap",
		asset: "_darwin_arm_hang_x_f0",
		scale: 1,
		position: [-14.05, -12.15],
	},
	"_darwin_arm_fx_x_f0": {
		type: "bitmap",
		asset: "_darwin_arm_fx_x_f0",
		scale: 1,
		position: [-9.7, -9.2],
	},
	"_darwin_darwin_head_x_f12": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f12",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f14": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f14",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f4": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f4",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f22": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f22",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f16": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f16",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_heart1_x_f0": {
		type: "bitmap",
		asset: "_darwin_heart1_x_f0",
		scale: 1,
		position: [-26.15, -20.3],
	},
	"_darwin_heart2_x_f0": {
		type: "bitmap",
		asset: "_darwin_heart2_x_f0",
		scale: 1,
		position: [-23.15, -16.95],
	},
	"_darwin_heart3_x_f0": {
		type: "bitmap",
		asset: "_darwin_heart3_x_f0",
		scale: 1,
		position: [-12.85, -10.5],
	},
	"_darwin_tween,7_f0": {
		type: "bitmap",
		asset: "_darwin_tween,7_f0",
		scale: 1,
		position: [-21.95, -33.85],
	},
	"_darwin_v_f0": {
		type: "bitmap",
		asset: "_darwin_v_f0",
		scale: 1,
		position: [-8.4, -24.4],
	},
	"_darwin_v_f2": {
		type: "bitmap",
		asset: "_darwin_v_f2",
		scale: 1,
		position: [-8.4, -24.4],
	},
	"_darwin_dust_step_x_f0": {
		type: "bitmap",
		asset: "_darwin_dust_step_x_f0",
		scale: 1,
		position: [-19.6, -7.65],
	},
	"_darwin_dust_step2_x_f0": {
		type: "bitmap",
		asset: "_darwin_dust_step2_x_f0",
		scale: 1,
		position: [-19.1, -10.2],
	},
	"_darwin_dust_step3_x_f0": {
		type: "bitmap",
		asset: "_darwin_dust_step3_x_f0",
		scale: 1,
		position: [-16.4, -13.35],
	},
	"_darwin_dust_step4_x_f0": {
		type: "bitmap",
		asset: "_darwin_dust_step4_x_f0",
		scale: 1,
		position: [-17.1, -14.85],
	},
	"_darwin_darwin_head_x_f25": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f25",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f26": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f26",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_mouth_x_f0": {
		type: "bitmap",
		asset: "_darwin_mouth_x_f0",
		scale: 1,
		position: [-30.05, -21.25],
	},
	"_darwin_leg_30_b_x_f0": {
		type: "bitmap",
		asset: "_darwin_leg_30_b_x_f0",
		scale: 1,
		position: [-24.9, -20],
	},
	"_darwin_foot_back_x_f0": {
		type: "bitmap",
		asset: "_darwin_foot_back_x_f0",
		scale: 1,
		position: [-18.5, -14.8],
	},
	"_darwin_arm_curve_back_x_f0": {
		type: "bitmap",
		asset: "_darwin_arm_curve_back_x_f0",
		scale: 1,
		position: [-11.65, -8.4],
	},
	"_darwin_darwin_head_x_f29": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f29",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_backpack_back_x_f0": {
		type: "bitmap",
		asset: "_darwin_darwin_backpack_back_x_f0",
		scale: 1,
		position: [-44.2, -69.85],
	},
	"_darwin_blackout": {
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
						classname: "_darwin_blackout_x",
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
	"_darwin_foot_front_x_f0": {
		type: "bitmap",
		asset: "_darwin_foot_front_x_f0",
		scale: 1,
		position: [-18.5, -14.8],
	},
	"_darwin_darwin_head_x_f6": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f6",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f11": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f11",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f3": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f3",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_mouth_talking_f17": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f17",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f18": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f18",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f19": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f19",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f20": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f20",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f21": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f21",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f22": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f22",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f23": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f23",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f24": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f24",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f25": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f25",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f26": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f26",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f27": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f27",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f28": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f28",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f29": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f29",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f30": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f30",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f31": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f31",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f32": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f32",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f33": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f33",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f34": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f34",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f35": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f35",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f36": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f36",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f37": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f37",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f38": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f38",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f39": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f39",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f0": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f0",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f1": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f1",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f2": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f2",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f3": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f3",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f4": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f4",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f5": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f5",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f6": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f6",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f7": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f7",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f8": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f8",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f9": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f9",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f10": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f10",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f11": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f11",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f12": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f12",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f13": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f13",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f14": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f14",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f15": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f15",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_mouth_talking_f16": {
		type: "bitmap",
		asset: "_darwin_mouth_talking_f16",
		scale: 1,
		position: [-81.45, -81.45],
	},
	"_darwin_darwin_head_x_f27": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f27",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_mouth_scared_f0": {
		type: "bitmap",
		asset: "_darwin_mouth_scared_f0",
		scale: 1,
		position: [-29.45, -29.6],
	},
	"_darwin_mouth_open2_x_f0": {
		type: "bitmap",
		asset: "_darwin_mouth_open2_x_f0",
		scale: 1,
		position: [-32.3, -18.15],
	},
	"_darwin_pupila_f0": {
		type: "bitmap",
		asset: "_darwin_pupila_f0",
		scale: 1,
		position: [-13.5, -13.5],
	},
	"_darwin_darwin_head_x_f10": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f10",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f23": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f23",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_cone_15_x": {
		type: "bitmap",
		asset: "_darwin_cone_15_x",
		scale: 1,
		position: [-5, -116],
	},
	"_darwin_darwin_head_x_f2": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f2",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f20": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f20",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f24": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f24",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f5": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f5",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_darwin_head_x_f30": {
		type: "bitmap",
		asset: "_darwin_darwin_head_x_f30",
		scale: 1,
		position: [-83.5, -107.8],
	},
	"_darwin_blackout_x": {
		type: "bitmap",
		asset: "_darwin_blackout_x",
		scale: 1,
		position: [-88.05, -155.95],
	},
};
