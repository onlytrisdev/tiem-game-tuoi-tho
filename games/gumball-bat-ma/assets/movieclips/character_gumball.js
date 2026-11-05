export const character_gumball = {
	"gumball": {
		type: "movieclip",
		fps: 30,
		totalFrames: 333,
		labels: {idle: {from:0, to:138}, shoot: {from:139, to:222}, flash: {from:223, to:238}, run: {from:239, to:253}, hit: {from:254, to:272}, die: {from:273, to:285}, enter_door: {from:286, to:297}, exit_door: {from:298, to:304}, talk: {from:305, to:317}, idle_explore: {from:318, to:332}, },
		layers: [
			{
				name: "anim",
				keys: [
					{
						from: 0,
						to: 138,
						classname: "_gumball_gumball_idle",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 19.5, ty: 2},
						transform: [19.5, 2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 139,
						to: 222,
						classname: "_gumball_gumball_shoot",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 19.5, ty: 2},
						transform: [19.5, 2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 223,
						to: 238,
						classname: "_gumball_gumball_flash",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 239,
						to: 253,
						classname: "_gumball_gumball_run",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10, ty: 0},
						transform: [10, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 254,
						to: 272,
						classname: "_gumball_gumball_hit",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 8, ty: -2.4},
						transform: [8, -2.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 273,
						to: 285,
						classname: "_gumball_gumball_die",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 286,
						to: 297,
						classname: "_gumball_gumball_enterdoor",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.5},
						transform: [0, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 298,
						to: 304,
						classname: "_gumball_gumball_exitdoor",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.3},
						transform: [0, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 305,
						to: 317,
						classname: "_gumball_gumball_talk",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 1.3},
						transform: [0, 1.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 318,
						to: 332,
						classname: "_gumball_gumball_idle_explore",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 1.3},
						transform: [0, 1.3, 1, 1, 0, 0, 0],
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
						to: 138,
					},
					{
						from: 139,
						to: 222,
					},
					{
						from: 223,
						to: 238,
					},
					{
						from: 239,
						to: 253,
					},
					{
						from: 254,
						to: 272,
					},
					{
						from: 273,
						to: 285,
					},
					{
						from: 286,
						to: 297,
					},
					{
						from: 298,
						to: 304,
					},
					{
						from: 305,
						to: 317,
					},
					{
						from: 318,
						to: 332,
					},
				]
			},
		]
	},
	"_gumball_gumball_idle": {
		type: "movieclip",
		fps: 30,
		totalFrames: 181,
		labels: {},
		layers: [
			{
				name: "hosepipe_n2_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_gumball_hosepipe_n2bb_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: 0.199, c: -0.213, d: 1.121, tx: -70.5, ty: -50.9},
						transform: [-70.5, -50.9, 1.003, 1.141, -0.188, 0.2, NaN],
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
						classname: "_gumball_hosepipe_n2bb_x_f0",
						instancename: "",
						matrix: {a: 0.886, b: 0.427, c: -0.391, d: 1.115, tx: -84.25, ty: -44.95},
						transform: [-84.25, -44.95, 0.984, 1.182, -0.337, 0.449, NaN],
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
						classname: "_gumball_hosepipe_n2bb_x_f0",
						instancename: "",
						matrix: {a: 1.031, b: 0.036, c: 0.255, d: 1.255, tx: -61.85, ty: -21.25},
						transform: [-61.85, -21.25, 1.031, 1.281, 0.2, 0.035, NaN],
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
						classname: "_gumball_hosepipe_n2bb_x_f0",
						instancename: "",
						matrix: {a: 0.937, b: 0.315, c: -0.253, d: 1.19, tx: -75.45, ty: -28.95},
						transform: [-75.45, -28.95, 0.989, 1.217, -0.209, 0.324, NaN],
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
						classname: "_gumball_hosepipe_n2bb3_x_f0",
						instancename: "",
						matrix: {a: -0.609, b: 0.793, c: 0.793, d: 0.609, tx: 31.85, ty: -45},
						transform: [31.85, -45, 1, 1, 0.915, 2.226, NaN],
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
						classname: "_gumball_hosepipe_n2bb3_x_f0",
						instancename: "",
						matrix: {a: -0.741, b: 0.672, c: 0.672, d: 0.741, tx: 39.95, ty: -43},
						transform: [39.95, -43, 1, 1, 0.737, 2.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 90,
						classname: "_gumball_hosepipe_n2bb3_x_f0",
						instancename: "",
						matrix: {a: -0.393, b: 1.007, c: 0.81, d: 0.472, tx: 47.1, ty: -47.3},
						transform: [47.1, -47.3, 1.08, 0.937, 1.043, 1.943, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 91,
						to: 116,
						classname: "_gumball_hosepipe_n2bb2_x_f0",
						instancename: "",
						matrix: {a: -0.375, b: 1.013, c: 0.744, d: 0.33, tx: 47.3, ty: -46.8},
						transform: [47.3, -46.8, 1.08, 0.814, 1.153, 1.925, NaN],
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
						classname: "_gumball_hosepipe_n2bb2_x_f0",
						instancename: "",
						matrix: {a: 0.031, b: 1.018, c: 0.955, d: 0.253, tx: 56.8, ty: -76.95},
						transform: [56.8, -76.95, 1.018, 0.988, 1.311, 1.54, NaN],
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
						classname: "_gumball_hosepipe_n2bb3_x_f0",
						instancename: "",
						matrix: {a: 0.056, b: 1.122, c: 0.883, d: 0.421, tx: 58.5, ty: -63.1},
						transform: [58.5, -63.1, 1.124, 0.978, 1.126, 1.521, NaN],
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
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.844, b: -0.537, c: -0.666, d: 0.761, tx: 28.15, ty: -30.05},
						transform: [28.15, -30.05, 1, 1.012, -0.719, -2.575, NaN],
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
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.601, b: -0.791, c: -0.665, d: 0.681, tx: 24.4, ty: -32.6},
						transform: [24.4, -32.6, 0.993, 0.951, -0.774, -2.221, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 154,
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.565, b: -0.805, c: -0.698, d: 0.357, tx: 35.15, ty: -39.45},
						transform: [35.15, -39.45, 0.984, 0.784, -1.098, -2.183, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 155,
						to: 162,
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.649, b: -0.737, c: -0.678, d: 0.531, tx: 37, ty: -45.35},
						transform: [37, -45.35, 0.982, 0.862, -0.906, -2.293, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 163,
						to: 169,
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.794, b: -0.586, c: -0.485, d: 0.703, tx: 38.8, ty: -53.65},
						transform: [38.8, -53.65, 0.987, 0.854, -0.603, -2.506, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 170,
						to: 179,
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.964, b: -0.247, c: -0.285, d: 0.813, tx: 41.15, ty: -61.15},
						transform: [41.15, -61.15, 0.996, 0.862, -0.337, -2.891, NaN],
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
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.054, c: 0.041, d: 0.947, tx: 42.5, ty: -72.9},
						transform: [42.5, -72.9, 1.002, 0.948, 0.043, 3.088, NaN],
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
						to: 56,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.981, b: 0.194, c: 0.194, d: 0.981, tx: -36.95, ty: -64.5},
						transform: [-36.95, -64.5, 1, 1, 0.195, 2.947, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.93, b: 0.368, c: 0.368, d: 0.93, tx: -44.1, ty: -56.5},
						transform: [-44.1, -56.5, 1, 1, 0.377, 2.765, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.93, b: 0.368, c: 0.368, d: 0.93, tx: -44.1, ty: -56.5},
						transform: [-44.1, -56.5, 1, 1, 0.377, 2.765, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 62,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.02, c: 0.02, d: 1, tx: -5.2, ty: -60.8},
						transform: [-5.2, -60.8, 1, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 63,
						to: 65,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.98, b: -0.2, c: 0.2, d: 0.98, tx: 6.8, ty: -62.8},
						transform: [6.8, -62.8, 1, 1, 0.201, -0.201, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 66,
						to: 116,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.99, b: -0.14, c: 0.14, d: 0.99, tx: 4.3, ty: -58.8},
						transform: [4.3, -58.8, 1, 1, 0.14, -0.14, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.909, b: -0.416, c: 0.416, d: 0.909, tx: 1.75, ty: -60.85},
						transform: [1.75, -60.85, 1, 1, 0.429, -0.429, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.988, b: -0.148, c: 0.148, d: 0.988, tx: -1.6, ty: -60.5},
						transform: [-1.6, -60.5, 1, 1, 0.149, -0.149, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: -3.4, ty: -58.4},
						transform: [-3.4, -58.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 123,
						to: 179,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: 0.065, c: -0.065, d: 0.998, tx: 5.1, ty: -63.75},
						transform: [5.1, -63.75, 1, 1, -0.065, 0.065, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.971, b: -0.238, c: 0.238, d: 0.971, tx: -10.55, ty: -67.85},
						transform: [-10.55, -67.85, 1, 1, 0.24, -0.24, NaN],
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
						to: 56,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.298, b: -0.955, c: 0.955, d: 0.298, tx: -33.25, ty: -46.5},
						transform: [-33.25, -46.5, 1, 1, 1.268, -1.268, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.377, b: -0.926, c: 0.926, d: -0.377, tx: -33.2, ty: -41.05},
						transform: [-33.2, -41.05, 1, 1, 1.957, -1.957, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.095, b: -0.996, c: 0.996, d: -0.095, tx: -30.2, ty: -41.05},
						transform: [-30.2, -41.05, 1, 1, 1.666, -1.666, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 62,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.755, b: -0.655, c: -0.598, d: -0.689, tx: 12.25, ty: -34.95},
						transform: [12.25, -34.95, 1, 0.913, -2.427, -0.714, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 63,
						to: 116,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.242, b: -0.97, c: -0.885, d: -0.221, tx: 16.7, ty: -37.25},
						transform: [16.7, -37.25, 1, 0.913, -1.816, -1.326, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.055, b: -0.998, c: -0.911, d: 0.05, tx: 20.75, ty: -39.2},
						transform: [20.75, -39.2, 1, 0.913, -1.515, -1.626, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.211, b: -0.977, c: -0.892, d: 0.193, tx: 14.8, ty: -39.7},
						transform: [14.8, -39.7, 1, 0.913, -1.358, -1.784, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.036, b: 0.999, c: -0.941, d: 0.033, tx: 4.25, ty: -43.15},
						transform: [4.25, -43.15, 1, 0.941, -1.535, 1.535, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.074, b: 0.997, c: -0.978, d: 0.072, tx: 9.6, ty: -44.6},
						transform: [9.6, -44.6, 1, 0.981, -1.497, 1.497, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.465, b: 0.885, c: -0.868, d: 0.456, tx: 2.1, ty: -46.1},
						transform: [2.1, -46.1, 1, 0.981, -1.087, 1.087, NaN],
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
				name: "gumball_leg_2_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.9, ty: -40.95},
						transform: [-4.9, -40.95, 1, 1, 0, 0, 0],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.098, d: 0.987, tx: -8.7, ty: -40.5},
						transform: [-8.7, -40.5, 1, 0.992, 0.099, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.057, d: 0.882, tx: -2.65, ty: -36.45},
						transform: [-2.65, -36.45, 1, 0.884, -0.064, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 180,
					},
				]
			},
			{
				name: "gumball_arm_back_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.402, c: 0.402, d: 0.916, tx: -16.75, ty: -89.1},
						transform: [-16.75, -89.1, 1, 1, 0.414, -0.414, NaN],
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
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: 0.321, b: -1.009, c: 1.234, d: 0.143, tx: -23.75, ty: -88.35},
						transform: [-23.75, -88.35, 1.059, 1.242, 1.455, -1.263, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: 0.206, b: -1.02, c: 1.02, d: 0.243, tx: -14.75, ty: -83.45},
						transform: [-14.75, -83.45, 1.04, 1.049, 1.337, -1.372, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.949, b: 0.363, c: 0.259, d: 0.679, tx: 8.75, ty: -81.2},
						transform: [8.75, -81.2, 1.016, 0.727, 0.365, 2.777, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -1.005, b: 0.149, c: 0.106, d: 0.719, tx: 11.25, ty: -88.45},
						transform: [11.25, -88.45, 1.016, 0.727, 0.147, 2.995, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.864, b: 0.534, c: 0.29, d: 0.469, tx: 16.6, ty: -91.45},
						transform: [16.6, -91.45, 1.016, 0.551, 0.553, 2.588, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -1.005, b: 0.149, c: 0.106, d: 0.719, tx: 11.25, ty: -88.45},
						transform: [11.25, -88.45, 1.016, 0.727, 0.147, 2.995, NaN],
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
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: -0.92, b: 0.101, c: 0.574, d: 0.867, tx: 6.05, ty: -83.4},
						transform: [6.05, -83.4, 0.926, 1.039, 0.585, 3.032, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: -1.08, b: 0.265, c: 0.682, d: 0.782, tx: 8.6, ty: -83.6},
						transform: [8.6, -83.6, 1.112, 1.038, 0.718, 2.901, NaN],
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
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: -1.196, b: 0.214, c: 0.684, d: 0.782, tx: 1.6, ty: -97.85},
						transform: [1.6, -97.85, 1.215, 1.039, 0.719, 2.965, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 59,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 1, b: 0.263, c: -0.262, d: 0.844, tx: -27, ty: -70.25},
						transform: [-27, -70.25, 1.033, 0.883, -0.301, 0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 1.021, b: 0.161, c: -0.176, d: 0.866, tx: -24.45, ty: -81.25},
						transform: [-24.45, -81.25, 1.033, 0.883, -0.201, 0.157, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.479, c: 0.421, d: 0.821, tx: -26.6, ty: -69.85},
						transform: [-26.6, -69.85, 1.033, 0.923, 0.474, -0.482, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.974, b: -0.345, c: 0.207, d: 0.676, tx: -22.85, ty: -73.25},
						transform: [-22.85, -73.25, 1.033, 0.707, 0.297, -0.341, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.376, b: -1.073, c: -0.534, d: 0.189, tx: -20.2, ty: -91.2},
						transform: [-20.2, -91.2, 1.137, 0.566, -1.23, -1.907, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.238, b: -1.111, c: -0.748, d: 0.164, tx: -13.95, ty: -91.1},
						transform: [-13.95, -91.1, 1.136, 0.765, -1.355, -1.782, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: -0.27, c: -0.198, d: 0.788, tx: -38.15, ty: -80.7},
						transform: [-38.15, -80.7, 1.137, 0.812, -0.247, -2.902, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_torso_side_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 0.977, b: -0.215, c: 0.215, d: 0.977, tx: -26.2, ty: -64.25},
						transform: [-26.2, -64.25, 1, 1, 0.217, -0.217, NaN],
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
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 0.839, b: -0.547, c: 0.668, d: 0.828, tx: -24.95, ty: -60.15},
						transform: [-24.95, -60.15, 1.002, 1.064, 0.679, -0.578, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 0.942, b: -0.341, c: 0.418, d: 0.869, tx: -19.95, ty: -59.4},
						transform: [-19.95, -59.4, 1.002, 0.964, 0.449, -0.347, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.082, b: -0.101, c: -0.231, d: 1.047, tx: -12.2, ty: -52.55},
						transform: [-12.2, -52.55, 1.087, 1.072, -0.217, -3.049, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.056, b: -0.06, c: -0.105, d: 1.115, tx: -6.8, ty: -53.7},
						transform: [-6.8, -53.7, 1.057, 1.12, -0.094, -3.085, NaN],
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
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.054, b: 0.077, c: 0.134, d: 1.047, tx: -3.9, ty: -52.5},
						transform: [-3.9, -52.5, 1.057, 1.055, 0.128, 3.069, NaN],
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
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.056, b: -0.06, c: -0.105, d: 1.115, tx: -6.8, ty: -53.7},
						transform: [-6.8, -53.7, 1.057, 1.12, -0.094, -3.085, NaN],
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
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 1.016, b: 0.104, c: -0.178, d: 0.997, tx: -12.95, ty: -57.1},
						transform: [-12.95, -57.1, 1.021, 1.013, -0.177, 0.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 1.014, b: 0.121, c: -0.205, d: 1.05, tx: -7.15, ty: -59.55},
						transform: [-7.15, -59.55, 1.021, 1.07, -0.193, 0.119, NaN],
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
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 1.005, b: -0.181, c: 0.186, d: 1.069, tx: -16.2, ty: -60.2},
						transform: [-16.2, -60.2, 1.021, 1.085, 0.172, -0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_waist_side_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.402, c: 0.402, d: 0.916, tx: -17.9, ty: -48.15},
						transform: [-17.9, -48.15, 1, 1, 0.413, -0.413, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.443, c: 0.518, d: 0.838, tx: -20.95, ty: -43.15},
						transform: [-20.95, -43.15, 0.969, 0.985, 0.554, -0.475, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.899, b: -0.363, c: 0.44, d: 0.881, tx: -17.95, ty: -42.3},
						transform: [-17.95, -42.3, 0.969, 0.985, 0.463, -0.384, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.039, b: 0.07, c: -0.057, d: 0.944, tx: -7.75, ty: -36.25},
						transform: [-7.75, -36.25, 1.041, 0.945, -0.06, 3.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.047, c: 0.047, d: 0.999, tx: -1.75, ty: -36.6},
						transform: [-1.75, -36.6, 1, 1, 0.047, 3.094, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.985, b: 0.173, c: 0.173, d: 0.985, tx: 4, ty: -37.55},
						transform: [4, -37.55, 1, 1, 0.174, 2.968, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.047, c: 0.047, d: 0.999, tx: -1.75, ty: -36.6},
						transform: [-1.75, -36.6, 1, 1, 0.047, 3.094, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.04, b: 0.017, c: 0.049, d: 0.999, tx: -13.35, ty: -39.95},
						transform: [-13.35, -39.95, 1.04, 1.001, 0.049, 3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.039, b: -0.016, c: -0.031, d: 1.001, tx: -8, ty: -42.05},
						transform: [-8, -42.05, 1.039, 1.001, -0.031, -3.126, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.031, b: 0.139, c: 0.166, d: 0.987, tx: -13.35, ty: -41.95},
						transform: [-13.35, -41.95, 1.04, 1.001, 0.167, 3.008, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_2_x",
				keys: [
					{
						from: 0,
						to: 59,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.108, c: 0.113, d: 0.995, tx: 6.3, ty: -37.95},
						transform: [6.3, -37.95, 0.999, 1.001, 0.114, -0.108, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.092, d: 1, tx: 7.05, ty: -38.15},
						transform: [7.05, -38.15, 1, 1.004, -0.092, 0, NaN],
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
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.218, d: 0.949, tx: 11.75, ty: -36.2},
						transform: [11.75, -36.2, 1, 0.973, -0.226, 0, NaN],
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
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.092, d: 1, tx: 7.05, ty: -38.15},
						transform: [7.05, -38.15, 1, 1.004, -0.092, 0, NaN],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.399, d: 0.787, tx: 2.35, ty: -32.75},
						transform: [2.35, -32.75, 1, 0.883, -0.469, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.492, d: 0.84, tx: 6, ty: -34.7},
						transform: [6, -34.7, 1, 0.973, -0.53, 0, NaN],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.359, d: 0.839, tx: 0.8, ty: -34.75},
						transform: [0.8, -34.75, 1, 0.913, -0.404, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_1_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -24.45, ty: -37.45},
						transform: [-24.45, -37.45, 1, 1, 0, 0, 0],
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
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.057, d: 0.868, tx: -26.5, ty: -32.75},
						transform: [-26.5, -32.75, 1, 0.87, 0.066, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.019, d: 0.868, tx: -23.75, ty: -32.75},
						transform: [-23.75, -32.75, 1, 0.868, -0.022, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_leg_8_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.266, d: 0.876, tx: -21.5, ty: -33},
						transform: [-21.5, -33, 1, 0.915, 0.295, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_leg_8_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.099, d: 0.921, tx: -13.25, ty: -34.6},
						transform: [-13.25, -34.6, 1, 0.927, -0.107, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_8_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.189, d: 0.883, tx: -10.05, ty: -33.25},
						transform: [-10.05, -33.25, 1, 0.903, -0.21, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_8_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.099, d: 0.921, tx: -13.25, ty: -34.6},
						transform: [-13.25, -34.6, 1, 0.927, -0.107, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: -1.021, b: 0, c: 0.443, d: 0.797, tx: -29.05, ty: -33.1},
						transform: [-29.05, -33.1, 1.021, 0.912, 0.507, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: -1.021, b: 0, c: 0.078, d: 0.849, tx: -24.5, ty: -35.15},
						transform: [-24.5, -35.15, 1.021, 0.853, 0.092, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: -1.021, b: 0, c: 0.182, d: 0.839, tx: -28.5, ty: -34.75},
						transform: [-28.5, -34.75, 1.021, 0.859, 0.214, 3.142, NaN],
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
						classname: "_gumball_head_idle",
						instancename: "",
						matrix: {a: -0.988, b: -0.152, c: -0.152, d: 0.988, tx: -29.1, ty: -110.8},
						transform: [-29.1, -110.8, 1, 1, -0.153, -2.989, NaN],
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
						classname: "_gumball_head_idle",
						instancename: "",
						matrix: {a: -0.825, b: 0.563, c: 0.563, d: 0.825, tx: -42.1, ty: -105.55},
						transform: [-42.1, -105.55, 0.999, 0.999, 0.599, 2.543, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_head_idle",
						instancename: "",
						matrix: {a: -0.943, b: 0.327, c: 0.327, d: 0.943, tx: -27.3, ty: -102.75},
						transform: [-27.3, -102.75, 0.999, 0.999, 0.334, 2.808, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 62,
						classname: "_gumball_head_idle_up",
						instancename: "",
						matrix: {a: -0.959, b: 0.278, c: 0.278, d: 0.959, tx: -17.95, ty: -96.2},
						transform: [-17.95, -96.2, 0.998, 0.998, 0.283, 2.859, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 63,
						to: 116,
						classname: "_gumball_head_idle_up",
						instancename: "",
						matrix: {a: -0.959, b: 0.278, c: 0.278, d: 0.959, tx: -5.2, ty: -96.95},
						transform: [-5.2, -96.95, 0.998, 0.998, 0.283, 2.859, NaN],
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
						classname: "_gumball_head_idle_up",
						instancename: "",
						matrix: {a: -0.784, b: 0.618, c: 0.618, d: 0.784, tx: -23.2, ty: -96.95},
						transform: [-23.2, -96.95, 0.999, 0.999, 0.668, 2.474, NaN],
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
						classname: "_gumball_head_idle_up",
						instancename: "",
						matrix: {a: -0.97, b: 0.237, c: 0.237, d: 0.97, tx: -14.7, ty: -93.2},
						transform: [-14.7, -93.2, 0.999, 0.999, 0.24, 2.902, NaN],
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
						classname: "_gumball_head_idle",
						instancename: "",
						matrix: {a: 0.887, b: 0.462, c: -0.462, d: 0.887, tx: -0.9, ty: -105.05},
						transform: [-0.9, -105.05, 1, 1, -0.48, 0.48, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 123,
						to: 179,
						classname: "_gumball_head_idle",
						instancename: "",
						matrix: {a: 0.834, b: 0.551, c: -0.551, d: 0.834, tx: 4.1, ty: -111.55},
						transform: [4.1, -111.55, 1, 1, -0.584, 0.584, NaN],
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
						classname: "_gumball_head_idle",
						instancename: "",
						matrix: {a: 0.999, b: -0.035, c: 0.035, d: 0.999, tx: -33.4, ty: -110.15},
						transform: [-33.4, -110.15, 1, 1, 0.035, -0.035, NaN],
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
						to: 21,
						classname: "_gumball_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.132, c: -0.147, d: 1.154, tx: -69.9, ty: -49.95},
						transform: [-69.9, -49.95, 1.003, 1.163, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.96, b: 0.363, c: -0.531, d: 1.027, tx: -81, ty: -45.95},
						transform: [-81, -45.95, 1.027, 1.157, -0.477, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 23,
						to: 26,
						classname: "_gumball_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.597, b: 0.505, c: -0.446, d: 1.027, tx: -82.25, ty: -46.25},
						transform: [-82.25, -46.25, 0.781, 1.12, -0.409, 0.702, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.639, b: 0.54, c: -0.47, d: 1.007, tx: -84.65, ty: -45.9},
						transform: [-84.65, -45.9, 0.837, 1.111, -0.437, 0.702, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 28,
						to: 56,
						classname: "_gumball_hosepipe_ncc_x_f0",
						instancename: "",
						matrix: {a: 0.519, b: 0.486, c: -0.458, d: 0.988, tx: -84.4, ty: -45.05},
						transform: [-84.4, -45.05, 0.711, 1.089, -0.434, 0.752, NaN],
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
						classname: "_gumball_hosepipe_ncc_x_f0",
						instancename: "",
						matrix: {a: 0.845, b: 0.182, c: 0.01, d: 1.069, tx: -62.2, ty: -20.45},
						transform: [-62.2, -20.45, 0.865, 1.069, 0.009, 0.212, NaN],
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
						classname: "_gumball_hosepipe_ncc_x_f0",
						instancename: "",
						matrix: {a: 0.678, b: 0.474, c: -0.423, d: 1.033, tx: -76, ty: -28.8},
						transform: [-76, -28.8, 0.828, 1.117, -0.388, 0.61, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.82, b: 0.573, c: 0.573, d: 0.82, tx: 28.55, ty: -40.35},
						transform: [28.55, -40.35, 1, 1, 0.61, 2.531, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.947, b: 0.513, c: 0.563, d: 0.898, tx: 35.95, ty: -38.45},
						transform: [35.95, -38.45, 1.076, 1.06, 0.56, 2.645, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.558, b: 0.778, c: 0.671, d: 0.808, tx: 45.4, ty: -42.3},
						transform: [45.4, -42.3, 0.958, 1.05, 0.693, 2.193, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.021, b: 1.092, c: 0.88, d: 0.573, tx: 57.5, ty: -71.8},
						transform: [57.5, -71.8, 1.092, 1.05, 0.994, 1.59, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.1, b: 0.861, c: 0.88, d: 0.789, tx: 58.7, ty: -60.1},
						transform: [58.7, -60.1, 0.867, 1.182, 0.84, 1.686, NaN],
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
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.708, b: -0.707, c: -0.707, d: 0.708, tx: 28.4, ty: -29.85},
						transform: [28.4, -29.85, 1, 1, -0.785, -2.357, NaN],
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
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.704, b: -0.914, c: -0.678, d: 0.691, tx: 24.85, ty: -31.95},
						transform: [24.85, -31.95, 1.154, 0.968, -0.776, -2.227, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 154,
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.641, b: -1.098, c: -0.72, d: 0.577, tx: 36.05, ty: -38.5},
						transform: [36.05, -38.5, 1.271, 0.923, -0.895, -2.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 155,
						to: 162,
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.786, b: -0.94, c: -0.638, d: 0.682, tx: 38, ty: -43.8},
						transform: [38, -43.8, 1.225, 0.934, -0.752, -2.267, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 163,
						to: 169,
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.952, b: -0.657, c: -0.475, d: 0.829, tx: 40.55, ty: -52.65},
						transform: [40.55, -52.65, 1.157, 0.955, -0.52, -2.537, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 170,
						to: 179,
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -1.023, b: -0.394, c: -0.305, d: 0.924, tx: 42.15, ty: -60.9},
						transform: [42.15, -60.9, 1.096, 0.973, -0.319, -2.774, NaN],
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
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -1.011, b: -0.036, c: -0.032, d: 0.999, tx: 43.4, ty: -72.85},
						transform: [43.4, -72.85, 1.011, 1, -0.032, -3.106, NaN],
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
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 180,
					},
				]
			},
			{
				name: "cone",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 38.6, ty: -74.25},
						transform: [38.6, -74.25, 1, 1, 0, 0, 0],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: 15, ty: -113.6},
						transform: [15, -113.6, 0.997, 0.997, 0.994, -0.994, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: 9.7, ty: -107.8},
						transform: [9.7, -107.8, 0.999, 0.999, 1.029, -1.029, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: 15, ty: -118.75},
						transform: [15, -118.75, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: 16.15, ty: -122.7},
						transform: [16.15, -122.7, 0.995, 0.995, 1.081, -1.081, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -11.6, ty: -124.25},
						transform: [-11.6, -124.25, 0.997, 0.997, 2.039, -2.039, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -8.55, ty: -118.25},
						transform: [-8.55, -118.25, 0.999, 0.999, 2.074, -2.074, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -10.85, ty: -118.2},
						transform: [-10.85, -118.2, 0.997, 0.997, 2.091, -2.091, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -14.05, ty: -121.65},
						transform: [-14.05, -121.65, 0.996, 0.996, 2.126, -2.126, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -25.65, ty: -106.25},
						transform: [-25.65, -106.25, 0.997, 0.997, 2.617, -2.617, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -46.55, ty: -89.85},
						transform: [-46.55, -89.85, 1, 1, 3.142, 3.142, 3.142],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 38.6, ty: -74.25},
						transform: [38.6, -74.25, 1, 1, 0, 0, 0],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: 15, ty: -113.6},
						transform: [15, -113.6, 0.997, 0.997, 0.994, -0.994, NaN],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: 9.7, ty: -107.8},
						transform: [9.7, -107.8, 0.999, 0.999, 1.029, -1.029, NaN],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: 15, ty: -118.75},
						transform: [15, -118.75, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: 16.15, ty: -122.7},
						transform: [16.15, -122.7, 0.995, 0.995, 1.081, -1.081, NaN],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -11.6, ty: -124.25},
						transform: [-11.6, -124.25, 0.997, 0.997, 2.039, -2.039, NaN],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -8.55, ty: -118.25},
						transform: [-8.55, -118.25, 0.999, 0.999, 2.074, -2.074, NaN],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -10.85, ty: -118.2},
						transform: [-10.85, -118.2, 0.997, 0.997, 2.091, -2.091, NaN],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -14.05, ty: -121.65},
						transform: [-14.05, -121.65, 0.996, 0.996, 2.126, -2.126, NaN],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -25.65, ty: -106.25},
						transform: [-25.65, -106.25, 0.997, 0.997, 2.617, -2.617, NaN],
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
						classname: "_gumball_tube_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -46.55, ty: -89.85},
						transform: [-46.55, -89.85, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.841, b: 0.541, c: -0.541, d: 0.841, tx: -41.6, ty: -87.75},
						transform: [-41.6, -87.75, 1, 1, -0.571, 0.571, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.052, c: -0.046, d: 0.88, tx: -46.55, ty: -80.7},
						transform: [-46.55, -80.7, 1, 0.881, -0.052, 0.052, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.928, b: -0.373, c: 0.355, d: 0.884, tx: -50.75, ty: -73.55},
						transform: [-50.75, -73.55, 1, 0.952, 0.382, -0.382, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.082, c: 0.078, d: 0.949, tx: -46.5, ty: -74.6},
						transform: [-46.5, -74.6, 1, 0.952, 0.082, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 180,
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.263, b: -0.965, c: 0.965, d: -0.263, tx: -59.5, ty: -62.55},
						transform: [-59.5, -62.55, 1, 1, 1.837, -1.837, NaN],
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
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.675, b: -0.738, c: 0.738, d: -0.675, tx: -41.6, ty: -45.6},
						transform: [-41.6, -45.6, 1, 1, 2.312, -2.312, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.417, b: -0.909, c: 0.909, d: -0.417, tx: -47, ty: -45.15},
						transform: [-47, -45.15, 1, 1, 2.001, -2.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -0.831, b: -0.557, c: 0.663, d: -0.78, tx: -36.35, ty: -39.5},
						transform: [-36.35, -39.5, 1, 1.024, 2.437, -2.551, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -0.831, b: -0.557, c: 0.663, d: -0.78, tx: -32.35, ty: -47},
						transform: [-32.35, -47, 1, 1.024, 2.437, -2.551, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -0.662, b: -0.749, c: 0.928, d: -0.649, tx: -15.1, ty: -42.25},
						transform: [-15.1, -42.25, 1, 1.132, 2.181, -2.295, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -0.572, b: -0.82, c: 0.975, d: -0.526, tx: -20.3, ty: -51},
						transform: [-20.3, -51, 1, 1.108, 2.066, -2.18, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -1.089, b: -0.322, c: 0.57, d: -1.061, tx: -32.1, ty: -80.45},
						transform: [-32.1, -80.45, 1.135, 1.204, 2.649, -2.854, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -1.08, b: -0.347, c: 0.552, d: -1.09, tx: -33.3, ty: -81.75},
						transform: [-33.3, -81.75, 1.134, 1.222, 2.673, -2.83, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -1.12, b: 0.183, c: -0.006, d: -1.031, tx: -40.95, ty: -54.1},
						transform: [-40.95, -54.1, 1.135, 1.031, -3.136, 2.98, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 18",
				keys: [
					{
						from: 0,
						to: 59,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: 0.713, b: -0.814, c: -0.631, d: -0.563, tx: 22.55, ty: -61.1},
						transform: [22.55, -61.1, 1.082, 0.845, -2.299, -0.852, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: 0.936, b: -0.542, c: -0.34, d: -0.78, tx: 16.45, ty: -65.1},
						transform: [16.45, -65.1, 1.082, 0.851, -2.73, -0.525, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: 0.36, b: -1.02, c: -0.765, d: -0.373, tx: 31.2, ty: -82},
						transform: [31.2, -82, 1.082, 0.851, -2.024, -1.231, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: 0.569, b: -0.917, c: -0.68, d: -0.512, tx: 34.4, ty: -67.6},
						transform: [34.4, -67.6, 1.079, 0.851, -2.216, -1.015, NaN],
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
					},
					{
						from: 122,
						to: 180,
					},
				]
			},
			{
				name: "gumball_hand_grab_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.088, b: -0.996, c: 0.996, d: -0.088, tx: -34.85, ty: -67.45},
						transform: [-34.85, -67.45, 1, 1, 1.659, -1.659, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.36, b: -0.933, c: 0.933, d: -0.36, tx: -21.8, ty: -60.6},
						transform: [-21.8, -60.6, 1, 1, 1.939, -1.939, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.36, b: -0.933, c: 0.933, d: -0.36, tx: -24.6, ty: -53.4},
						transform: [-24.6, -53.4, 1, 1, 1.939, -1.939, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.251, b: -0.968, c: 0.88, d: -0.228, tx: -20.8, ty: -65.2},
						transform: [-20.8, -65.2, 1, 0.909, 1.824, -1.824, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.251, b: -0.968, c: 0.88, d: -0.228, tx: -16.8, ty: -72.7},
						transform: [-16.8, -72.7, 1, 0.909, 1.824, -1.824, NaN],
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
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.942, b: -0.334, c: 0.304, d: -0.856, tx: 5.7, ty: -65.45},
						transform: [5.7, -65.45, 1, 0.909, 2.801, -2.801, NaN],
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
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.31, b: -0.951, c: 0.864, d: -0.281, tx: 3.65, ty: -72},
						transform: [3.65, -72, 1, 0.909, 1.886, -1.886, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.831, b: -0.801, c: 0.738, d: -0.766, tx: -20.5, ty: -112.35},
						transform: [-20.5, -112.35, 1.154, 1.063, 2.375, -2.375, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.823, b: -0.806, c: 0.742, d: -0.758, tx: -21.6, ty: -115.1},
						transform: [-21.6, -115.1, 1.152, 1.061, 2.367, -2.367, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -1.129, b: 0.239, c: -0.22, d: -1.04, tx: -46.45, ty: -78.35},
						transform: [-46.45, -78.35, 1.154, 1.063, -2.933, 2.933, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_hand_closed_x",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.954, b: -0.299, c: 0.299, d: -0.954, tx: 5.4, ty: -66.7},
						transform: [5.4, -66.7, 1, 1, 2.838, -2.838, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.988, b: 0.148, c: -0.148, d: -0.988, tx: 11.8, ty: -79.15},
						transform: [11.8, -79.15, 0.999, 0.999, -2.993, 2.993, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.864, b: 0.504, c: -0.504, d: -0.864, tx: 14.2, ty: -99.9},
						transform: [14.2, -99.9, 1, 1, -2.614, 2.614, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.864, b: 0.504, c: -0.504, d: -0.864, tx: 11.4, ty: -92.7},
						transform: [11.4, -92.7, 1, 1, -2.614, 2.614, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: 0.615, b: -0.67, c: -0.736, d: -0.676, tx: 6.85, ty: -81.8},
						transform: [6.85, -81.8, 0.909, 1, -2.314, -0.828, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: 0.615, b: -0.67, c: -0.736, d: -0.676, tx: 10.85, ty: -89.3},
						transform: [10.85, -89.3, 0.909, 1, -2.314, -0.828, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.038, b: -0.908, c: -0.999, d: 0.041, tx: 12.25, ty: -97.65},
						transform: [12.25, -97.65, 0.909, 1, -1.529, -1.612, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: 0.183, b: -0.89, c: -0.979, d: -0.201, tx: 15.1, ty: -87.8},
						transform: [15.1, -87.8, 0.909, 1, -1.774, -1.368, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: 0.305, b: 0.952, c: -0.952, d: 0.305, tx: 21.4, ty: -71.7},
						transform: [21.4, -71.7, 1, 1, -1.261, 1.261, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: 0.338, b: 0.94, c: -0.94, d: 0.338, tx: 18.65, ty: -78.05},
						transform: [18.65, -78.05, 0.999, 0.999, -1.226, 1.226, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: 0.741, b: 0.669, c: -0.669, d: 0.741, tx: 25.95, ty: -85.7},
						transform: [25.95, -85.7, 0.998, 0.998, -0.735, 0.735, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: 0.979, b: 0.204, c: -0.204, d: 0.979, tx: 9, ty: -98.7},
						transform: [9, -98.7, 1, 1, -0.206, 0.206, NaN],
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
						to: 28,
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 70.1, ty: -74.35},
						transform: [70.1, -74.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 55.1, ty: -110.35},
						transform: [55.1, -110.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 33.1, ty: -141.35},
						transform: [33.1, -141.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 27.1, ty: -135.35},
						transform: [27.1, -135.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 32.1, ty: -147.35},
						transform: [32.1, -147.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 31.1, ty: -152.35},
						transform: [31.1, -152.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 3.1, ty: -155.35},
						transform: [3.1, -155.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -24.9, ty: -153.35},
						transform: [-24.9, -153.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -25.9, ty: -150.35},
						transform: [-25.9, -150.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -23.9, ty: -147.35},
						transform: [-23.9, -147.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -28.9, ty: -148.35},
						transform: [-28.9, -148.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -54.9, ty: -121.35},
						transform: [-54.9, -121.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -77.9, ty: -90.35},
						transform: [-77.9, -90.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gumball_gumball_shoot": {
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
						to: 0,
					},
				]
			},
			{
				name: "hosepipe_n2_x",
				keys: [
					{
						from: 0,
						to: 28,
						classname: "_gumball_hosepipe_n2bb_x_f0",
						instancename: "",
						matrix: {a: 0.983, b: 0.199, c: -0.204, d: 1.073, tx: -70.55, ty: -50.75},
						transform: [-70.55, -50.75, 1.003, 1.092, -0.188, 0.2, NaN],
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
						classname: "_gumball_hosepipe_n2bb_x_f0",
						instancename: "",
						matrix: {a: 0.886, b: 0.427, c: -0.418, d: 1.052, tx: -84.1, ty: -44.7},
						transform: [-84.1, -44.7, 0.984, 1.132, -0.378, 0.449, NaN],
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
						classname: "_gumball_hosepipe_n2bb_x_f0",
						instancename: "",
						matrix: {a: 1.031, b: 0.036, c: 0.255, d: 1.255, tx: -61.85, ty: -21.25},
						transform: [-61.85, -21.25, 1.031, 1.281, 0.2, 0.035, NaN],
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
						classname: "_gumball_hosepipe_n2bb_x_f0",
						instancename: "",
						matrix: {a: 0.937, b: 0.315, c: -0.253, d: 1.19, tx: -75.45, ty: -28.95},
						transform: [-75.45, -28.95, 0.989, 1.217, -0.209, 0.324, NaN],
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
						classname: "_gumball_hosepipe_n2bb3_x_f0",
						instancename: "",
						matrix: {a: -0.609, b: 0.793, c: 0.793, d: 0.609, tx: 31.85, ty: -45},
						transform: [31.85, -45, 1, 1, 0.915, 2.226, NaN],
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
						classname: "_gumball_hosepipe_n2bb3_x_f0",
						instancename: "",
						matrix: {a: -0.741, b: 0.672, c: 0.672, d: 0.741, tx: 39.95, ty: -43},
						transform: [39.95, -43, 1, 1, 0.737, 2.405, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 90,
						classname: "_gumball_hosepipe_n2bb3_x_f0",
						instancename: "",
						matrix: {a: -0.393, b: 1.007, c: 0.81, d: 0.472, tx: 47.1, ty: -47.3},
						transform: [47.1, -47.3, 1.08, 0.937, 1.043, 1.943, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 91,
						to: 116,
						classname: "_gumball_hosepipe_n2bb2_x_f0",
						instancename: "",
						matrix: {a: -0.375, b: 1.013, c: 0.744, d: 0.33, tx: 47.3, ty: -46.8},
						transform: [47.3, -46.8, 1.08, 0.814, 1.153, 1.925, NaN],
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
						classname: "_gumball_hosepipe_n2bb2_x_f0",
						instancename: "",
						matrix: {a: 0.031, b: 1.018, c: 0.955, d: 0.253, tx: 56.8, ty: -76.95},
						transform: [56.8, -76.95, 1.018, 0.988, 1.311, 1.54, NaN],
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
						classname: "_gumball_hosepipe_n2bb3_x_f0",
						instancename: "",
						matrix: {a: 0.056, b: 1.122, c: 0.883, d: 0.421, tx: 58.5, ty: -63.1},
						transform: [58.5, -63.1, 1.124, 0.978, 1.126, 1.521, NaN],
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
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.844, b: -0.537, c: -0.666, d: 0.761, tx: 28.15, ty: -30.05},
						transform: [28.15, -30.05, 1, 1.012, -0.719, -2.575, NaN],
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
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.601, b: -0.685, c: -0.665, d: 0.59, tx: 26.8, ty: -34.9},
						transform: [26.8, -34.9, 0.911, 0.888, -0.845, -2.291, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 154,
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.789, b: -0.588, c: -0.551, d: 0.558, tx: 36.8, ty: -53.65},
						transform: [36.8, -53.65, 0.984, 0.784, -0.779, -2.501, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 155,
						to: 162,
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.911, b: -0.367, c: -0.367, d: 0.78, tx: 42, ty: -54.85},
						transform: [42, -54.85, 0.982, 0.862, -0.44, -2.759, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 163,
						to: 169,
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.938, b: -0.309, c: -0.241, d: 0.819, tx: 41.05, ty: -62.4},
						transform: [41.05, -62.4, 0.987, 0.854, -0.286, -2.824, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 170,
						to: 179,
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.984, b: 0.153, c: 0.059, d: 0.86, tx: 42.4, ty: -70.8},
						transform: [42.4, -70.8, 0.996, 0.862, 0.069, 2.987, NaN],
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
						classname: "_gumball_hosepipe_n2_x_f0",
						instancename: "",
						matrix: {a: -0.972, b: 0.24, c: 0.217, d: 0.923, tx: 38.6, ty: -77.9},
						transform: [38.6, -77.9, 1.002, 0.948, 0.231, 2.9, NaN],
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
						to: 56,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.981, b: 0.194, c: 0.194, d: 0.981, tx: -36.95, ty: -62.5},
						transform: [-36.95, -62.5, 1, 1, 0.195, 2.947, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.93, b: 0.368, c: 0.368, d: 0.93, tx: -44.1, ty: -54.5},
						transform: [-44.1, -54.5, 1, 1, 0.377, 2.765, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.93, b: 0.368, c: 0.368, d: 0.93, tx: -44.1, ty: -54.5},
						transform: [-44.1, -54.5, 1, 1, 0.377, 2.765, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 62,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.02, c: 0.02, d: 1, tx: -5.2, ty: -58.8},
						transform: [-5.2, -58.8, 1, 1, 0.02, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 63,
						to: 65,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.98, b: -0.2, c: 0.2, d: 0.98, tx: 6.8, ty: -60.8},
						transform: [6.8, -60.8, 1, 1, 0.201, -0.201, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.4, 0], [0.634, 1], [1, 1], ],
						}
					},
					{
						from: 66,
						to: 116,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.99, b: -0.14, c: 0.14, d: 0.99, tx: 4.3, ty: -56.8},
						transform: [4.3, -56.8, 1, 1, 0.14, -0.14, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.909, b: -0.416, c: 0.416, d: 0.909, tx: 1.75, ty: -58.85},
						transform: [1.75, -58.85, 1, 1, 0.429, -0.429, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.988, b: -0.148, c: 0.148, d: 0.988, tx: -1.6, ty: -58.5},
						transform: [-1.6, -58.5, 1, 1, 0.149, -0.149, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: -3.4, ty: -56.4},
						transform: [-3.4, -56.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 123,
						to: 179,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: 0.065, c: -0.065, d: 0.998, tx: 5.1, ty: -61.75},
						transform: [5.1, -61.75, 1, 1, -0.065, 0.065, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.971, b: -0.238, c: 0.238, d: 0.971, tx: -10.55, ty: -65.85},
						transform: [-10.55, -65.85, 1, 1, 0.24, -0.24, NaN],
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
						to: 56,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.298, b: -0.932, c: 0.955, d: 0.291, tx: -33.25, ty: -45.4},
						transform: [-33.25, -45.4, 0.978, 0.998, 1.275, -1.261, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.377, b: -0.904, c: 0.926, d: -0.368, tx: -33.2, ty: -40.05},
						transform: [-33.2, -40.05, 0.98, 0.997, 1.949, -1.966, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.095, b: -0.972, c: 0.996, d: -0.092, tx: -30.2, ty: -40.05},
						transform: [-30.2, -40.05, 0.976, 1, 1.663, -1.668, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 62,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.755, b: -0.64, c: -0.598, d: -0.673, tx: 12.25, ty: -34.1},
						transform: [12.25, -34.1, 0.99, 0.9, -2.415, -0.703, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 63,
						to: 116,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.242, b: -0.947, c: -0.885, d: -0.216, tx: 16.7, ty: -36.35},
						transform: [16.7, -36.35, 0.977, 0.911, -1.81, -1.32, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.055, b: -0.975, c: -0.911, d: 0.049, tx: 20.75, ty: -38.25},
						transform: [20.75, -38.25, 0.976, 0.912, -1.517, -1.627, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.211, b: -0.954, c: -0.892, d: 0.188, tx: 14.8, ty: -38.75},
						transform: [14.8, -38.75, 0.977, 0.912, -1.363, -1.789, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.036, b: 0.975, c: -0.941, d: 0.033, tx: 4.25, ty: -42.1},
						transform: [4.25, -42.1, 0.976, 0.941, -1.536, 1.534, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.074, b: 0.973, c: -0.978, d: 0.071, tx: 9.6, ty: -43.55},
						transform: [9.6, -43.55, 0.976, 0.981, -1.499, 1.495, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.465, b: 0.864, c: -0.868, d: 0.445, tx: 2.1, ty: -45},
						transform: [2.1, -45, 0.981, 0.976, -1.097, 1.077, NaN],
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
				name: "gumball_leg_2_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.976, tx: -4.9, ty: -39.95},
						transform: [-4.9, -39.95, 1, 0.976, 0, 0, 0],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.098, d: 0.964, tx: -8.7, ty: -39.55},
						transform: [-8.7, -39.55, 1, 0.969, 0.101, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.057, d: 0.861, tx: -2.65, ty: -35.6},
						transform: [-2.65, -35.6, 1, 0.863, -0.066, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 180,
					},
				]
			},
			{
				name: "gumball_arm_back_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.402, c: 0.402, d: 0.916, tx: -16.75, ty: -89.1},
						transform: [-16.75, -89.1, 1, 1, 0.414, -0.414, NaN],
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
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: 0.321, b: -1.009, c: 1.234, d: 0.143, tx: -23.75, ty: -88.35},
						transform: [-23.75, -88.35, 1.059, 1.242, 1.455, -1.263, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: 0.206, b: -1.02, c: 1.02, d: 0.243, tx: -14.75, ty: -83.45},
						transform: [-14.75, -83.45, 1.04, 1.049, 1.337, -1.372, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.949, b: 0.363, c: 0.259, d: 0.679, tx: 8.75, ty: -81.2},
						transform: [8.75, -81.2, 1.016, 0.727, 0.365, 2.777, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -1.005, b: 0.149, c: 0.106, d: 0.719, tx: 11.25, ty: -88.45},
						transform: [11.25, -88.45, 1.016, 0.727, 0.147, 2.995, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.864, b: 0.534, c: 0.29, d: 0.469, tx: 16.6, ty: -91.45},
						transform: [16.6, -91.45, 1.016, 0.551, 0.553, 2.588, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -1.005, b: 0.149, c: 0.106, d: 0.719, tx: 11.25, ty: -88.45},
						transform: [11.25, -88.45, 1.016, 0.727, 0.147, 2.995, NaN],
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
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: -0.92, b: 0.101, c: 0.574, d: 0.867, tx: 6.05, ty: -83.4},
						transform: [6.05, -83.4, 0.926, 1.039, 0.585, 3.032, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: -1.08, b: 0.265, c: 0.682, d: 0.782, tx: 8.6, ty: -83.6},
						transform: [8.6, -83.6, 1.112, 1.038, 0.718, 2.901, NaN],
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
						classname: "_gumball_gumball_arm_back_x",
						instancename: "",
						matrix: {a: -1.196, b: 0.214, c: 0.684, d: 0.782, tx: 1.6, ty: -97.85},
						transform: [1.6, -97.85, 1.215, 1.039, 0.719, 2.965, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 59,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 1, b: 0.263, c: -0.262, d: 0.844, tx: -27, ty: -70.25},
						transform: [-27, -70.25, 1.033, 0.883, -0.301, 0.257, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 1.021, b: 0.161, c: -0.176, d: 0.866, tx: -24.45, ty: -81.25},
						transform: [-24.45, -81.25, 1.033, 0.883, -0.201, 0.157, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.479, c: 0.421, d: 0.821, tx: -26.6, ty: -69.85},
						transform: [-26.6, -69.85, 1.033, 0.923, 0.474, -0.482, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.974, b: -0.345, c: 0.207, d: 0.676, tx: -22.85, ty: -73.25},
						transform: [-22.85, -73.25, 1.033, 0.707, 0.297, -0.341, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.376, b: -1.073, c: -0.534, d: 0.189, tx: -20.2, ty: -91.2},
						transform: [-20.2, -91.2, 1.137, 0.566, -1.23, -1.907, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.238, b: -1.111, c: -0.748, d: 0.164, tx: -13.95, ty: -91.1},
						transform: [-13.95, -91.1, 1.136, 0.765, -1.355, -1.782, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: -0.27, c: -0.198, d: 0.788, tx: -38.15, ty: -80.7},
						transform: [-38.15, -80.7, 1.137, 0.812, -0.247, -2.902, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_torso_side_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 0.977, b: -0.21, c: 0.215, d: 0.953, tx: -26.2, ty: -62.7},
						transform: [-26.2, -62.7, 0.999, 0.977, 0.222, -0.212, NaN],
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
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 0.839, b: -0.534, c: 0.605, d: 0.733, tx: -24.5, ty: -58.15},
						transform: [-24.5, -58.15, 0.994, 0.95, 0.69, -0.567, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 0.942, b: -0.333, c: 0.418, d: 0.848, tx: -19.95, ty: -58},
						transform: [-19.95, -58, 0.999, 0.945, 0.458, -0.34, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.082, b: -0.099, c: -0.231, d: 1.022, tx: -12.2, ty: -51.3},
						transform: [-12.2, -51.3, 1.086, 1.047, -0.222, -3.051, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.056, b: -0.059, c: -0.105, d: 1.088, tx: -6.8, ty: -52.4},
						transform: [-6.8, -52.4, 1.057, 1.094, -0.096, -3.086, NaN],
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
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.054, b: 0.075, c: 0.134, d: 1.022, tx: -3.9, ty: -51.25},
						transform: [-3.9, -51.25, 1.057, 1.03, 0.131, 3.07, NaN],
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
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.056, b: -0.059, c: -0.105, d: 1.088, tx: -6.8, ty: -52.4},
						transform: [-6.8, -52.4, 1.057, 1.094, -0.096, -3.086, NaN],
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
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 1.016, b: 0.101, c: -0.178, d: 0.973, tx: -12.95, ty: -55.75},
						transform: [-12.95, -55.75, 1.021, 0.989, -0.181, 0.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 1.014, b: 0.118, c: -0.205, d: 1.025, tx: -7.15, ty: -58.1},
						transform: [-7.15, -58.1, 1.021, 1.045, -0.197, 0.116, NaN],
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
						classname: "_gumball_gumball_torso_side_x",
						instancename: "",
						matrix: {a: 1.005, b: -0.176, c: 0.168, d: 0.972, tx: -16.05, ty: -58.25},
						transform: [-16.05, -58.25, 1.021, 0.986, 0.171, -0.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_waist_side_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.916, b: -0.392, c: 0.402, d: 0.894, tx: -17.9, ty: -47},
						transform: [-17.9, -47, 0.996, 0.98, 0.422, -0.404, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.433, c: 0.518, d: 0.818, tx: -20.95, ty: -42.1},
						transform: [-20.95, -42.1, 0.964, 0.968, 0.565, -0.465, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.899, b: -0.354, c: 0.44, d: 0.86, tx: -17.95, ty: -41.3},
						transform: [-17.95, -41.3, 0.966, 0.967, 0.473, -0.376, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.039, b: 0.068, c: -0.057, d: 0.921, tx: -7.75, ty: -35.4},
						transform: [-7.75, -35.4, 1.041, 0.923, -0.062, 3.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.046, c: 0.047, d: 0.975, tx: -1.75, ty: -35.7},
						transform: [-1.75, -35.7, 1, 0.976, 0.048, 3.095, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.985, b: 0.169, c: 0.173, d: 0.961, tx: 4, ty: -36.65},
						transform: [4, -36.65, 0.999, 0.977, 0.178, 2.972, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.999, b: 0.046, c: 0.047, d: 0.975, tx: -1.75, ty: -35.7},
						transform: [-1.75, -35.7, 1, 0.976, 0.048, 3.095, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.04, b: 0.017, c: 0.049, d: 0.976, tx: -13.35, ty: -39},
						transform: [-13.35, -39, 1.04, 0.977, 0.05, 3.125, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.039, b: -0.016, c: -0.031, d: 0.977, tx: -8, ty: -41.05},
						transform: [-8, -41.05, 1.039, 0.977, -0.032, -3.127, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.031, b: 0.136, c: 0.166, d: 0.963, tx: -13.35, ty: -40.95},
						transform: [-13.35, -40.95, 1.04, 0.977, 0.171, 3.011, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_2_x",
				keys: [
					{
						from: 0,
						to: 59,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: 0.993, b: -0.105, c: 0.195, d: 0.903, tx: 3.25, ty: -34.45},
						transform: [3.25, -34.45, 0.998, 0.924, 0.212, -0.105, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.099, d: 0.937, tx: 7.35, ty: -35.8},
						transform: [7.35, -35.8, 1, 0.942, -0.106, 0, NaN],
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
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.26, d: 0.944, tx: 13.35, ty: -36.05},
						transform: [13.35, -36.05, 1, 0.979, -0.269, 0, NaN],
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
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.108, d: 0.926, tx: 7.65, ty: -35.35},
						transform: [7.65, -35.35, 1, 0.932, -0.116, 0, NaN],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.413, d: 0.796, tx: 2.9, ty: -33.05},
						transform: [2.9, -33.05, 1, 0.897, -0.479, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.492, d: 0.819, tx: 6, ty: -33.85},
						transform: [6, -33.85, 1, 0.956, -0.54, 0, NaN],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.38, d: 0.819, tx: 1.6, ty: -33.9},
						transform: [1.6, -33.9, 1, 0.903, -0.434, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_1_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.976, tx: -24.45, ty: -36.55},
						transform: [-24.45, -36.55, 1, 0.976, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 57,
						to: 57,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.057, d: 0.847, tx: -26.5, ty: -31.95},
						transform: [-26.5, -31.95, 1, 0.849, 0.068, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 58,
						to: 58,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.037, d: 0.848, tx: -25.8, ty: -31.95},
						transform: [-25.8, -31.95, 1, 0.848, 0.044, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.019, d: 0.847, tx: -23.75, ty: -31.95},
						transform: [-23.75, -31.95, 1, 0.847, -0.023, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_leg_8_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.266, d: 0.855, tx: -21.5, ty: -32.2},
						transform: [-21.5, -32.2, 1, 0.895, 0.301, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_leg_8_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.099, d: 0.899, tx: -13.25, ty: -33.75},
						transform: [-13.25, -33.75, 1, 0.905, -0.109, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_8_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.189, d: 0.862, tx: -10.05, ty: -32.45},
						transform: [-10.05, -32.45, 1, 0.882, -0.215, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_8_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.099, d: 0.899, tx: -13.25, ty: -33.75},
						transform: [-13.25, -33.75, 1, 0.905, -0.109, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: -1.021, b: 0, c: 0.398, d: 0.778, tx: -27.3, ty: -32.3},
						transform: [-27.3, -32.3, 1.021, 0.874, 0.473, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: -1.021, b: 0, c: 0.078, d: 0.829, tx: -24.5, ty: -34.3},
						transform: [-24.5, -34.3, 1.021, 0.833, 0.094, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: -1.021, b: 0, c: 0.169, d: 0.779, tx: -28, ty: -32.35},
						transform: [-28, -32.35, 1.021, 0.798, 0.213, 3.142, NaN],
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
						classname: "_gumball_head_shoot",
						instancename: "",
						matrix: {a: -0.988, b: -0.152, c: -0.152, d: 0.988, tx: -30.6, ty: -101.8},
						transform: [-30.6, -101.8, 1, 1, -0.153, -2.989, NaN],
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
						classname: "_gumball_head_shoot",
						instancename: "",
						matrix: {a: -0.825, b: 0.563, c: 0.563, d: 0.825, tx: -41.6, ty: -98.55},
						transform: [-41.6, -98.55, 0.999, 0.999, 0.599, 2.543, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_head_shoot",
						instancename: "",
						matrix: {a: -0.943, b: 0.327, c: 0.327, d: 0.943, tx: -28.8, ty: -95.75},
						transform: [-28.8, -95.75, 0.999, 0.999, 0.334, 2.808, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 62,
						classname: "_gumball_head_shoot_up",
						instancename: "",
						matrix: {a: -0.959, b: 0.278, c: 0.278, d: 0.959, tx: -20.95, ty: -90.2},
						transform: [-20.95, -90.2, 0.998, 0.998, 0.283, 2.859, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 63,
						to: 116,
						classname: "_gumball_head_shoot_up",
						instancename: "",
						matrix: {a: -0.959, b: 0.278, c: 0.278, d: 0.959, tx: -8.2, ty: -90.45},
						transform: [-8.2, -90.45, 0.998, 0.998, 0.283, 2.859, NaN],
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
						classname: "_gumball_head_shoot_up",
						instancename: "",
						matrix: {a: -0.742, b: 0.668, c: 0.668, d: 0.742, tx: -26.7, ty: -86.95},
						transform: [-26.7, -86.95, 0.999, 0.999, 0.732, 2.409, NaN],
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
						classname: "_gumball_head_shoot_up",
						instancename: "",
						matrix: {a: -0.97, b: 0.237, c: 0.237, d: 0.97, tx: -17.7, ty: -85.7},
						transform: [-17.7, -85.7, 0.999, 0.999, 0.24, 2.902, NaN],
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
						classname: "_gumball_head_shoot",
						instancename: "",
						matrix: {a: 0.887, b: 0.462, c: -0.462, d: 0.887, tx: 0.1, ty: -98.55},
						transform: [0.1, -98.55, 1, 1, -0.48, 0.48, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 123,
						to: 179,
						classname: "_gumball_head_shoot",
						instancename: "",
						matrix: {a: 0.834, b: 0.551, c: -0.551, d: 0.834, tx: 4.6, ty: -105.05},
						transform: [4.6, -105.05, 1, 1, -0.584, 0.584, NaN],
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
						classname: "_gumball_head_shoot",
						instancename: "",
						matrix: {a: 0.999, b: -0.035, c: 0.035, d: 0.999, tx: -31.4, ty: -104.65},
						transform: [-31.4, -104.65, 1, 1, 0.035, -0.035, NaN],
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
						to: 21,
						classname: "_gumball_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.994, b: 0.132, c: -0.147, d: 1.154, tx: -69.9, ty: -49.95},
						transform: [-69.9, -49.95, 1.003, 1.163, -0.127, 0.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_hosepipe_ng_x_f0",
						instancename: "",
						matrix: {a: 0.96, b: 0.363, c: -0.531, d: 1.027, tx: -81, ty: -45.95},
						transform: [-81, -45.95, 1.027, 1.157, -0.477, 0.362, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 23,
						to: 26,
						classname: "_gumball_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.597, b: 0.505, c: -0.446, d: 1.027, tx: -82.25, ty: -46.25},
						transform: [-82.25, -46.25, 0.781, 1.12, -0.409, 0.702, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_hosepipe_nc_x_f0",
						instancename: "",
						matrix: {a: 0.639, b: 0.54, c: -0.47, d: 1.007, tx: -84.65, ty: -45.9},
						transform: [-84.65, -45.9, 0.837, 1.111, -0.437, 0.702, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 28,
						to: 56,
						classname: "_gumball_hosepipe_ncc_x_f0",
						instancename: "",
						matrix: {a: 0.519, b: 0.486, c: -0.458, d: 0.988, tx: -84.4, ty: -45.05},
						transform: [-84.4, -45.05, 0.711, 1.089, -0.434, 0.752, NaN],
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
						classname: "_gumball_hosepipe_ncc_x_f0",
						instancename: "",
						matrix: {a: 0.845, b: 0.182, c: 0.01, d: 1.069, tx: -62.2, ty: -20.45},
						transform: [-62.2, -20.45, 0.865, 1.069, 0.009, 0.212, NaN],
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
						classname: "_gumball_hosepipe_ncc_x_f0",
						instancename: "",
						matrix: {a: 0.678, b: 0.474, c: -0.423, d: 1.033, tx: -76, ty: -28.8},
						transform: [-76, -28.8, 0.828, 1.117, -0.388, 0.61, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.82, b: 0.573, c: 0.573, d: 0.82, tx: 28.55, ty: -40.35},
						transform: [28.55, -40.35, 1, 1, 0.61, 2.531, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.947, b: 0.513, c: 0.563, d: 0.898, tx: 35.95, ty: -38.45},
						transform: [35.95, -38.45, 1.076, 1.06, 0.56, 2.645, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.558, b: 0.778, c: 0.671, d: 0.808, tx: 45.4, ty: -42.3},
						transform: [45.4, -42.3, 0.958, 1.05, 0.693, 2.193, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.021, b: 1.092, c: 0.88, d: 0.573, tx: 57.5, ty: -71.8},
						transform: [57.5, -71.8, 1.092, 1.05, 0.994, 1.59, NaN],
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
						classname: "_gumball_hosepipe_nf3_x_f0",
						instancename: "",
						matrix: {a: -0.1, b: 0.861, c: 0.88, d: 0.789, tx: 58.7, ty: -60.1},
						transform: [58.7, -60.1, 0.867, 1.182, 0.84, 1.686, NaN],
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
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.708, b: -0.707, c: -0.707, d: 0.708, tx: 28.4, ty: -29.85},
						transform: [28.4, -29.85, 1, 1, -0.785, -2.357, NaN],
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
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.704, b: -0.792, c: -0.678, d: 0.599, tx: 27.25, ty: -34.3},
						transform: [27.25, -34.3, 1.059, 0.904, -0.847, -2.297, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 150,
						to: 154,
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -0.952, b: -0.843, c: -0.504, d: 0.774, tx: 37.95, ty: -53.05},
						transform: [37.95, -53.05, 1.271, 0.923, -0.577, -2.417, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 155,
						to: 162,
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -1.125, b: -0.487, c: -0.263, d: 0.896, tx: 43.6, ty: -53.9},
						transform: [43.6, -53.9, 1.225, 0.934, -0.286, -2.733, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 163,
						to: 169,
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -1.11, b: -0.327, c: -0.193, d: 0.936, tx: 43, ty: -62},
						transform: [43, -62, 1.157, 0.955, -0.203, -2.855, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 170,
						to: 179,
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -1.095, b: 0.042, c: 0.084, d: 0.969, tx: 43.45, ty: -70.95},
						transform: [43.45, -70.95, 1.096, 0.973, 0.087, 3.104, NaN],
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
						classname: "_gumball_hosepipe_n_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.153, c: 0.155, d: 0.988, tx: 39.5, ty: -78},
						transform: [39.5, -78, 1.011, 1, 0.156, 2.989, NaN],
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
						to: 56,
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 38.6, ty: -74.25},
						transform: [38.6, -74.25, 1, 1, 0, 0, 0],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: 15, ty: -113.6},
						transform: [15, -113.6, 0.997, 0.997, 0.994, -0.994, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: 9.7, ty: -107.8},
						transform: [9.7, -107.8, 0.999, 0.999, 1.029, -1.029, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: 15, ty: -118.75},
						transform: [15, -118.75, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: 16.15, ty: -122.7},
						transform: [16.15, -122.7, 0.995, 0.995, 1.081, -1.081, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -11.6, ty: -124.25},
						transform: [-11.6, -124.25, 0.997, 0.997, 2.039, -2.039, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -8.55, ty: -118.25},
						transform: [-8.55, -118.25, 0.999, 0.999, 2.074, -2.074, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -10.85, ty: -118.2},
						transform: [-10.85, -118.2, 0.997, 0.997, 2.091, -2.091, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -14.05, ty: -121.65},
						transform: [-14.05, -121.65, 0.996, 0.996, 2.126, -2.126, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -25.65, ty: -106.25},
						transform: [-25.65, -106.25, 0.997, 0.997, 2.617, -2.617, NaN],
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
						classname: "_gumball_cone",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -46.55, ty: -89.85},
						transform: [-46.55, -89.85, 1, 1, 3.142, 3.142, 3.142],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 38.6, ty: -74.25},
						transform: [38.6, -74.25, 1, 1, 0, 0, 0],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: 0.544, b: -0.836, c: 0.836, d: 0.544, tx: 15, ty: -113.6},
						transform: [15, -113.6, 0.997, 0.997, 0.994, -0.994, NaN],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: 0.515, b: -0.855, c: 0.855, d: 0.515, tx: 9.7, ty: -107.8},
						transform: [9.7, -107.8, 0.999, 0.999, 1.029, -1.029, NaN],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: 0.499, b: -0.863, c: 0.863, d: 0.499, tx: 15, ty: -118.75},
						transform: [15, -118.75, 0.997, 0.997, 1.046, -1.046, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: 0.468, b: -0.878, c: 0.878, d: 0.468, tx: 16.15, ty: -122.7},
						transform: [16.15, -122.7, 0.995, 0.995, 1.081, -1.081, NaN],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: -0.45, b: -0.89, c: 0.89, d: -0.45, tx: -11.6, ty: -124.25},
						transform: [-11.6, -124.25, 0.997, 0.997, 2.039, -2.039, NaN],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: -0.482, b: -0.875, c: 0.875, d: -0.482, tx: -8.55, ty: -118.25},
						transform: [-8.55, -118.25, 0.999, 0.999, 2.074, -2.074, NaN],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: -0.496, b: -0.865, c: 0.865, d: -0.496, tx: -10.85, ty: -118.2},
						transform: [-10.85, -118.2, 0.997, 0.997, 2.091, -2.091, NaN],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: -0.525, b: -0.846, c: 0.846, d: -0.525, tx: -14.05, ty: -121.65},
						transform: [-14.05, -121.65, 0.996, 0.996, 2.126, -2.126, NaN],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: -0.863, b: -0.5, c: 0.5, d: -0.863, tx: -25.65, ty: -106.25},
						transform: [-25.65, -106.25, 0.997, 0.997, 2.617, -2.617, NaN],
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
						classname: "_gumball_tube_anim",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: -1, tx: -46.55, ty: -89.85},
						transform: [-46.55, -89.85, 1, 1, 3.142, 3.142, 3.142],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.841, b: 0.541, c: -0.541, d: 0.841, tx: -41.6, ty: -87.75},
						transform: [-41.6, -87.75, 1, 1, -0.571, 0.571, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.052, c: -0.046, d: 0.88, tx: -46.55, ty: -80.7},
						transform: [-46.55, -80.7, 1, 0.881, -0.052, 0.052, NaN],
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
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.928, b: -0.373, c: 0.355, d: 0.884, tx: -50.75, ty: -73.55},
						transform: [-50.75, -73.55, 1, 0.952, 0.382, -0.382, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.082, c: 0.078, d: 0.949, tx: -46.5, ty: -74.6},
						transform: [-46.5, -74.6, 1, 0.952, 0.082, -0.082, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 180,
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.263, b: -0.965, c: 0.965, d: -0.263, tx: -59.5, ty: -62.55},
						transform: [-59.5, -62.55, 1, 1, 1.837, -1.837, NaN],
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
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.675, b: -0.738, c: 0.738, d: -0.675, tx: -41.6, ty: -45.6},
						transform: [-41.6, -45.6, 1, 1, 2.312, -2.312, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.417, b: -0.909, c: 0.909, d: -0.417, tx: -47, ty: -45.15},
						transform: [-47, -45.15, 1, 1, 2.001, -2.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -0.831, b: -0.557, c: 0.663, d: -0.78, tx: -36.35, ty: -39.5},
						transform: [-36.35, -39.5, 1, 1.024, 2.437, -2.551, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -0.831, b: -0.557, c: 0.663, d: -0.78, tx: -32.35, ty: -47},
						transform: [-32.35, -47, 1, 1.024, 2.437, -2.551, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -0.662, b: -0.749, c: 0.928, d: -0.649, tx: -15.1, ty: -42.25},
						transform: [-15.1, -42.25, 1, 1.132, 2.181, -2.295, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -0.572, b: -0.82, c: 0.975, d: -0.526, tx: -20.3, ty: -51},
						transform: [-20.3, -51, 1, 1.108, 2.066, -2.18, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -1.089, b: -0.322, c: 0.57, d: -1.061, tx: -32.1, ty: -80.45},
						transform: [-32.1, -80.45, 1.135, 1.204, 2.649, -2.854, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -1.08, b: -0.347, c: 0.552, d: -1.09, tx: -33.3, ty: -81.75},
						transform: [-33.3, -81.75, 1.134, 1.222, 2.673, -2.83, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: -1.12, b: 0.183, c: -0.006, d: -1.031, tx: -40.95, ty: -54.1},
						transform: [-40.95, -54.1, 1.135, 1.031, -3.136, 2.98, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 18",
				keys: [
					{
						from: 0,
						to: 59,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: 0.713, b: -0.814, c: -0.631, d: -0.563, tx: 22.55, ty: -61.1},
						transform: [22.55, -61.1, 1.082, 0.845, -2.299, -0.852, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: 0.936, b: -0.542, c: -0.34, d: -0.78, tx: 16.45, ty: -65.1},
						transform: [16.45, -65.1, 1.082, 0.851, -2.73, -0.525, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: 0.36, b: -1.02, c: -0.765, d: -0.373, tx: 31.2, ty: -82},
						transform: [31.2, -82, 1.082, 0.851, -2.024, -1.231, NaN],
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
						classname: "_gumball_gumball_arm_rect2_x",
						instancename: "",
						matrix: {a: 0.569, b: -0.917, c: -0.68, d: -0.512, tx: 34.4, ty: -67.6},
						transform: [34.4, -67.6, 1.079, 0.851, -2.216, -1.015, NaN],
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
					},
					{
						from: 122,
						to: 180,
					},
				]
			},
			{
				name: "gumball_hand_grab_x",
				keys: [
					{
						from: 0,
						to: 56,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.088, b: -0.996, c: 0.996, d: -0.088, tx: -34.85, ty: -67.45},
						transform: [-34.85, -67.45, 1, 1, 1.659, -1.659, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.36, b: -0.933, c: 0.933, d: -0.36, tx: -21.8, ty: -60.6},
						transform: [-21.8, -60.6, 1, 1, 1.939, -1.939, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.36, b: -0.933, c: 0.933, d: -0.36, tx: -24.6, ty: -53.4},
						transform: [-24.6, -53.4, 1, 1, 1.939, -1.939, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.251, b: -0.968, c: 0.88, d: -0.228, tx: -20.8, ty: -65.2},
						transform: [-20.8, -65.2, 1, 0.909, 1.824, -1.824, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.251, b: -0.968, c: 0.88, d: -0.228, tx: -16.8, ty: -72.7},
						transform: [-16.8, -72.7, 1, 0.909, 1.824, -1.824, NaN],
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
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.942, b: -0.334, c: 0.304, d: -0.856, tx: 5.7, ty: -65.45},
						transform: [5.7, -65.45, 1, 0.909, 2.801, -2.801, NaN],
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
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.31, b: -0.951, c: 0.864, d: -0.281, tx: 3.65, ty: -72},
						transform: [3.65, -72, 1, 0.909, 1.886, -1.886, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.831, b: -0.801, c: 0.738, d: -0.766, tx: -20.5, ty: -112.35},
						transform: [-20.5, -112.35, 1.154, 1.063, 2.375, -2.375, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 179,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.823, b: -0.806, c: 0.742, d: -0.758, tx: -21.6, ty: -115.1},
						transform: [-21.6, -115.1, 1.152, 1.061, 2.367, -2.367, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -1.129, b: 0.239, c: -0.22, d: -1.04, tx: -46.45, ty: -78.35},
						transform: [-46.45, -78.35, 1.154, 1.063, -2.933, 2.933, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_hand_closed_x",
				keys: [
					{
						from: 0,
						to: 30,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.954, b: -0.299, c: 0.299, d: -0.954, tx: 5.4, ty: -66.7},
						transform: [5.4, -66.7, 1, 1, 2.838, -2.838, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.988, b: 0.148, c: -0.148, d: -0.988, tx: 11.8, ty: -79.15},
						transform: [11.8, -79.15, 0.999, 0.999, -2.993, 2.993, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.864, b: 0.504, c: -0.504, d: -0.864, tx: 14.2, ty: -99.9},
						transform: [14.2, -99.9, 1, 1, -2.614, 2.614, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.864, b: 0.504, c: -0.504, d: -0.864, tx: 11.4, ty: -92.7},
						transform: [11.4, -92.7, 1, 1, -2.614, 2.614, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 61,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: 0.615, b: -0.67, c: -0.736, d: -0.676, tx: 6.85, ty: -81.8},
						transform: [6.85, -81.8, 0.909, 1, -2.314, -0.828, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 62,
						to: 116,
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: 0.615, b: -0.67, c: -0.736, d: -0.676, tx: 10.85, ty: -89.3},
						transform: [10.85, -89.3, 0.909, 1, -2.314, -0.828, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: -0.038, b: -0.908, c: -0.999, d: 0.041, tx: 12.25, ty: -97.65},
						transform: [12.25, -97.65, 0.909, 1, -1.529, -1.612, NaN],
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
						classname: "_gumball_gumball_hand_grab_x",
						instancename: "",
						matrix: {a: 0.183, b: -0.89, c: -0.979, d: -0.201, tx: 15.1, ty: -87.8},
						transform: [15.1, -87.8, 0.909, 1, -1.774, -1.368, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: 0.305, b: 0.952, c: -0.952, d: 0.305, tx: 21.4, ty: -71.7},
						transform: [21.4, -71.7, 1, 1, -1.261, 1.261, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 122,
						to: 149,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: 0.338, b: 0.94, c: -0.94, d: 0.338, tx: 18.65, ty: -78.05},
						transform: [18.65, -78.05, 0.999, 0.999, -1.226, 1.226, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: 0.741, b: 0.669, c: -0.669, d: 0.741, tx: 25.95, ty: -85.7},
						transform: [25.95, -85.7, 0.998, 0.998, -0.735, 0.735, NaN],
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
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: 0.979, b: 0.204, c: -0.204, d: 0.979, tx: 9, ty: -98.7},
						transform: [9, -98.7, 1, 1, -0.206, 0.206, NaN],
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
						to: 28,
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 70.1, ty: -74.35},
						transform: [70.1, -74.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 55.1, ty: -110.35},
						transform: [55.1, -110.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 33.1, ty: -141.35},
						transform: [33.1, -141.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 27.1, ty: -135.35},
						transform: [27.1, -135.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 32.1, ty: -147.35},
						transform: [32.1, -147.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 31.1, ty: -152.35},
						transform: [31.1, -152.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: 3.1, ty: -155.35},
						transform: [3.1, -155.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -24.9, ty: -153.35},
						transform: [-24.9, -153.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -25.9, ty: -150.35},
						transform: [-25.9, -150.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -23.9, ty: -147.35},
						transform: [-23.9, -147.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -28.9, ty: -148.35},
						transform: [-28.9, -148.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -54.9, ty: -121.35},
						transform: [-54.9, -121.35, 0.56, 0.56, 0, 0, 0],
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
						classname: "_gumball_box",
						instancename: "",
						matrix: {a: 0.56, b: 0, c: 0, d: 0.56, tx: -77.9, ty: -90.35},
						transform: [-77.9, -90.35, 0.56, 0.56, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gumball_gumball_flash": {
		type: "movieclip",
		fps: 30,
		totalFrames: 15,
		labels: {exec_flash: {from:3, to:3}, end: {from:14, to:14}, },
		layers: [
			{
				name: "gumball_backpack_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: 0.872, b: -0.407, c: 0.36, d: 0.819, tx: 31.25, ty: -68.25},
						transform: [31.25, -68.25, 0.963, 0.894, 0.414, -0.437, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: 0.825, b: -0.495, c: 0.443, d: 0.777, tx: 28.25, ty: -82.25},
						transform: [28.25, -82.25, 0.963, 0.894, 0.518, -0.54, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 14,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: 0.856, b: -0.441, c: 0.391, d: 0.804, tx: 29.25, ty: -74.75},
						transform: [29.25, -74.75, 0.963, 0.894, 0.453, -0.476, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_backpack_x copy",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.942, b: -0.336, c: 0.336, d: 0.942, tx: 8, ty: -62.75},
						transform: [8, -62.75, 1, 1, 0.342, -0.342, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.928, b: -0.336, c: 0.374, d: 0.942, tx: 4.7, ty: -72.25},
						transform: [4.7, -72.25, 0.987, 1.013, 0.378, -0.347, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 14,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.942, b: -0.336, c: 0.336, d: 0.942, tx: 7.5, ty: -67.25},
						transform: [7.5, -67.25, 1, 1, 0.342, -0.342, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.36, b: -0.933, c: -1.016, d: -0.393, tx: 14.1, ty: -36.75},
						transform: [14.1, -36.75, 1, 1.089, -1.94, -1.202, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.467, b: -0.865, c: -0.964, d: -0.547, tx: 14.2, ty: -50.25},
						transform: [14.2, -50.25, 0.983, 1.108, -2.087, -1.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.202, b: -0.979, c: -1.067, d: -0.22, tx: 16.6, ty: -43.75},
						transform: [16.6, -43.75, 1, 1.089, -1.774, -1.368, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.109, d: 0.778, tx: -12.05, ty: -29.65},
						transform: [-12.05, -29.65, 1.105, 0.786, -0.139, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -0.921, b: 0, c: -0.153, d: 1.21, tx: -7.75, ty: -45.05},
						transform: [-7.75, -45.05, 0.921, 1.219, -0.126, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.099, d: 1, tx: -11, ty: -37.55},
						transform: [-11, -37.55, 1, 1.005, -0.098, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.809, b: -0.538, c: -0.601, d: 0.838, tx: -36.1, ty: -63.45},
						transform: [-36.1, -63.45, 0.971, 1.031, -0.622, -2.555, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.838, b: -0.579, c: -0.547, d: 0.815, tx: -37.75, ty: -79.2},
						transform: [-37.75, -79.2, 1.019, 0.981, -0.591, -2.537, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.877, b: -0.48, c: -0.48, d: 0.877, tx: -34.65, ty: -74.2},
						transform: [-34.65, -74.2, 1, 1, -0.501, -2.641, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -1.101, b: 0.277, c: 0.248, d: 0.763, tx: -13.05, ty: -46.55},
						transform: [-13.05, -46.55, 1.135, 0.802, 0.314, 2.895, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -0.99, b: 0.2, c: 0.236, d: 0.963, tx: -10.95, ty: -59.3},
						transform: [-10.95, -59.3, 1.01, 0.991, 0.24, 2.942, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -0.97, b: 0.244, c: 0.31, d: 0.953, tx: -11.45, ty: -54.65},
						transform: [-11.45, -54.65, 1, 1.002, 0.314, 2.895, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_head_scared_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_head_scared_x_f4",
						instancename: "",
						matrix: {a: 0.963, b: -0.271, c: 0.271, d: 0.963, tx: -38.1, ty: -78.5},
						transform: [-38.1, -78.5, 1, 1, 0.275, -0.275, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_head_scared_x_f4",
						instancename: "",
						matrix: {a: 0.963, b: -0.271, c: 0.271, d: 0.963, tx: -30.1, ty: -103},
						transform: [-30.1, -103, 1, 1, 0.275, -0.275, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.059], [0.756, 0.458], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_head_scared_x_f4",
						instancename: "",
						matrix: {a: 0.963, b: -0.271, c: 0.271, d: 0.963, tx: -36.6, ty: -92.5},
						transform: [-36.6, -92.5, 1, 1, 0.275, -0.275, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hand_beboteo",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_hand_beboteo",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.069, d: 1, tx: -59.15, ty: -63.2},
						transform: [-59.15, -63.2, 1, 1.002, -0.069, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_hand_beboteo",
						instancename: "",
						matrix: {a: 0.997, b: -0.078, c: 0.078, d: 0.997, tx: -58.05, ty: -77.2},
						transform: [-58.05, -77.2, 1, 1, 0.078, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_hand_beboteo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -55.55, ty: -72.2},
						transform: [-55.55, -72.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 1.059, b: 0.105, c: -0.209, d: -1.017, tx: -53.45, ty: -34.25},
						transform: [-53.45, -34.25, 1.064, 1.038, -2.939, 0.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 1.012, b: -0.068, c: -0.232, d: -0.973, tx: -51.65, ty: -49.9},
						transform: [-51.65, -49.9, 1.014, 1, -2.908, -0.067, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 1.009, b: -0.102, c: -0.265, d: -0.964, tx: -48.35, ty: -44.9},
						transform: [-48.35, -44.9, 1.014, 1, -2.874, -0.101, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_stretched_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.176, b: -0.984, c: 0.879, d: 0.158, tx: -6.1, ty: -75.05},
						transform: [-6.1, -75.05, 1, 0.893, 1.393, -1.393, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.451, b: -0.893, c: 0.797, d: 0.403, tx: -2.05, ty: -91.7},
						transform: [-2.05, -91.7, 1, 0.893, 1.103, -1.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.278, b: -0.961, c: 0.858, d: 0.248, tx: -5.05, ty: -83.2},
						transform: [-5.05, -83.2, 1, 0.893, 1.289, -1.289, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_waist_side2_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: -0.983, b: 0.225, c: 0.345, d: 0.939, tx: -2.6, ty: -34.5},
						transform: [-2.6, -34.5, 1.008, 1, 0.352, 2.916, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: -0.937, b: 0.378, c: 0.453, d: 0.885, tx: -0.7, ty: -48.75},
						transform: [-0.7, -48.75, 1.01, 0.994, 0.473, 2.758, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: -0.983, b: 0.225, c: 0.345, d: 0.939, tx: -0.6, ty: -41.5},
						transform: [-0.6, -41.5, 1.008, 1, 0.352, 2.916, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_1_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: 0.012, d: 0.778, tx: 3.1, ty: -29.65},
						transform: [3.1, -29.65, 1.105, 0.778, 0.016, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -0.921, b: 0, c: -0.111, d: 1.21, tx: 8.2, ty: -45.05},
						transform: [8.2, -45.05, 0.921, 1.215, -0.092, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 4.5, ty: -37.55},
						transform: [4.5, -37.55, 1, 1, 0, 3.142, NaN],
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
						to: 1,
						classname: "_gumball_pollaroid_button_x_f0",
						instancename: "",
						matrix: {a: 1.095, b: 0.029, c: -0.029, d: 1.095, tx: 70.15, ty: -88.7},
						transform: [70.15, -88.7, 1.095, 1.095, -0.026, 0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_pollaroid_button_x_f0",
						instancename: "",
						matrix: {a: 1.082, b: 0.17, c: -0.17, d: 1.082, tx: 73.5, ty: -94.15},
						transform: [73.5, -94.15, 1.095, 1.095, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_pollaroid_button_x_f0",
						instancename: "",
						matrix: {a: 1.089, b: 0.119, c: -0.119, d: 1.089, tx: 72.35, ty: -93.95},
						transform: [72.35, -93.95, 1.095, 1.095, -0.109, 0.109, NaN],
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
						to: 1,
						classname: "_gumball_pollaroid,back_x_f0",
						instancename: "",
						matrix: {a: 1.095, b: 0.029, c: -0.029, d: 1.095, tx: 39.9, ty: -60.9},
						transform: [39.9, -60.9, 1.095, 1.095, -0.026, 0.026, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_pollaroid,back_x_f0",
						instancename: "",
						matrix: {a: 1.082, b: 0.17, c: -0.17, d: 1.082, tx: 39.9, ty: -70.45},
						transform: [39.9, -70.45, 1.095, 1.095, -0.156, 0.156, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_pollaroid,back_x_f0",
						instancename: "",
						matrix: {a: 1.089, b: 0.119, c: -0.119, d: 1.089, tx: 39.9, ty: -68.75},
						transform: [39.9, -68.75, 1.095, 1.095, -0.109, 0.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_hand_closed_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.815, b: 0.955, c: -0.955, d: -0.815, tx: 84.7, ty: -52.55},
						transform: [84.7, -52.55, 1.255, 1.255, -2.277, 2.277, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.205, 0.966], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 4,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.931, b: 0.841, c: -0.841, d: -0.931, tx: 83.3, ty: -56.45},
						transform: [83.3, -56.45, 1.255, 1.255, -2.407, 2.407, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.529, 0.045], [0.461, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 14,
						classname: "_gumball_gumball_hand_closed_x",
						instancename: "",
						matrix: {a: -0.89, b: 0.884, c: -0.884, d: -0.89, tx: 83.9, ty: -56.75},
						transform: [83.9, -56.75, 1.255, 1.255, -2.36, 2.36, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 30",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_pic_x_f1",
						instancename: "",
						matrix: {a: 0.72, b: -0.021, c: 0.008, d: 0.294, tx: 53.3, ty: -100.5},
						transform: [53.3, -100.5, 0.72, 0.294, 0.029, -0.029, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_gumball_pic_x_f1",
						instancename: "",
						matrix: {a: 1.136, b: -0.251, c: 0.234, d: 1.059, tx: 132.7, ty: -211.95},
						transform: [132.7, -211.95, 1.163, 1.084, 0.217, -0.217, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 6,
						to: 9,
						classname: "_gumball_pic_x_f1",
						instancename: "",
						matrix: {a: 0.328, b: -0.595, c: 0.628, d: 0.971, tx: 106.4, ty: -247.25},
						transform: [106.4, -247.25, 0.68, 1.157, 0.574, -1.067, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 14,
						classname: "_gumball_pic_x_f1",
						instancename: "",
						matrix: {a: -0.126, b: -0.34, c: 0.628, d: 0.971, tx: 106.1, ty: -247},
						transform: [106.1, -247, 0.362, 1.157, 0.574, -1.925, NaN],
						alpha: 0,
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
						classname: "_gumball_pic_x_f0",
						instancename: "",
						matrix: {a: 0.617, b: 0.047, c: -0.022, d: 0.293, tx: 49.3, ty: -98.5},
						transform: [49.3, -98.5, 0.619, 0.294, -0.076, 0.076, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 4,
						to: 6,
						classname: "_gumball_pic_x_f0",
						instancename: "",
						matrix: {a: 1.175, b: 0.568, c: -0.509, d: 1.145, tx: 228.6, ty: -189.65},
						transform: [228.6, -189.65, 1.306, 1.253, -0.418, 0.45, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_gumball_pic_x_f0",
						instancename: "",
						matrix: {a: 0.147, b: 0.532, c: -1.004, d: 0.686, tx: 271.6, ty: -48.7},
						transform: [271.6, -48.7, 0.552, 1.216, -0.971, 1.302, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.55278], [0.666, 0.88578], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_gumball_pic_x_f0",
						instancename: "",
						matrix: {a: -0.024, b: -0.065, c: -0.697, d: 0.288, tx: 280.5, ty: -2.7},
						transform: [280.5, -2.7, 0.069, 0.754, -1.18, -1.93, NaN],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 31",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_gumball_pic_x_f0",
						instancename: "",
						matrix: {a: 0.622, b: 0.046, c: -0.019, d: 0.254, tx: 51.3, ty: -97.5},
						transform: [51.3, -97.5, 0.624, 0.255, -0.074, 0.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_gumball_pic_x_f0",
						instancename: "",
						matrix: {a: 1.087, b: 0.536, c: -0.515, d: 1.044, tx: 119.65, ty: -180.35},
						transform: [119.65, -180.35, 1.212, 1.164, -0.458, 0.458, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 14,
						classname: "_gumball_pic_x_f0",
						instancename: "",
						matrix: {a: 0.367, b: 0.181, c: -0.016, d: 0.033, tx: 108.65, ty: -170.45},
						transform: [108.65, -170.45, 0.409, 0.037, -0.458, 0.458, NaN],
						alpha: 0,
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
						to: 7,
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_fx_flash_f0",
						instancename: "",
						matrix: {a: -0.899, b: 0.35, c: -0.276, d: -0.71, tx: 118.95, ty: -145.3},
						transform: [118.95, -145.3, 0.965, 0.762, -2.771, 2.771, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_gumball_fx_flash_f1",
						instancename: "",
						matrix: {a: -0.899, b: 0.35, c: -0.276, d: -0.71, tx: 118.95, ty: -145.3},
						transform: [118.95, -145.3, 0.965, 0.762, -2.771, 2.771, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 14,
					},
				]
			},
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_fx_flash_f0",
						instancename: "",
						matrix: {a: 0.053, b: -0.912, c: -0.764, d: -0.044, tx: 153.25, ty: -172.7},
						transform: [153.25, -172.7, 0.913, 0.765, -1.629, -1.513, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_gumball_fx_flash_f1",
						instancename: "",
						matrix: {a: 0.053, b: -0.912, c: -0.764, d: -0.044, tx: 153.25, ty: -172.7},
						transform: [153.25, -172.7, 0.913, 0.765, -1.629, -1.513, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 14,
					},
				]
			},
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_fx_flash_f0",
						instancename: "",
						matrix: {a: -0.627, b: 0.346, c: 0.395, d: 0.717, tx: 74.65, ty: -200.5},
						transform: [74.65, -200.5, 0.716, 0.818, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_gumball_fx_flash_f1",
						instancename: "",
						matrix: {a: -0.627, b: 0.346, c: 0.395, d: 0.717, tx: 74.65, ty: -200.5},
						transform: [74.65, -200.5, 0.716, 0.818, 0.504, 2.637, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 14,
					},
				]
			},
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_fx_flash_f0",
						instancename: "",
						matrix: {a: 0.805, b: 0.078, c: -0.053, d: 0.545, tx: 115.35, ty: -198.35},
						transform: [115.35, -198.35, 0.809, 0.548, -0.096, 0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_gumball_fx_flash_f1",
						instancename: "",
						matrix: {a: 0.805, b: 0.078, c: -0.053, d: 0.545, tx: 115.35, ty: -198.35},
						transform: [115.35, -198.35, 0.809, 0.548, -0.096, 0.096, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 14,
					},
				]
			},
			{
				name: "fx_flash",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_fx_flash_f0",
						instancename: "",
						matrix: {a: 0.864, b: 0.295, c: 0.179, d: -0.523, tx: 97.55, ty: -154.55},
						transform: [97.55, -154.55, 0.913, 0.552, 2.813, 0.329, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 10,
						classname: "_gumball_fx_flash_f1",
						instancename: "",
						matrix: {a: 0.864, b: 0.295, c: 0.179, d: -0.523, tx: 97.55, ty: -154.55},
						transform: [97.55, -154.55, 0.913, 0.552, 2.813, 0.329, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 14,
					},
				]
			},
			{
				name: "Layer 11",
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
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 2,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
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
	"_gumball_gumball_run": {
		type: "movieclip",
		fps: 30,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.779, b: -0.566, c: -0.509, d: 0.735, tx: -32.2, ty: -80.5},
						transform: [-32.2, -80.5, 0.963, 0.894, -0.606, -2.513, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.016649999999999998], [0.666, 0.34965], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.791, b: -0.549, c: -0.577, d: 0.688, tx: -24.35, ty: -95.4},
						transform: [-24.35, -95.4, 0.963, 0.898, -0.698, -2.535, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.751, b: -0.602, c: -0.623, d: 0.646, tx: -16.5, ty: -108.05},
						transform: [-16.5, -108.05, 0.963, 0.898, -0.767, -2.466, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.697, 0.333], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.789, b: -0.507, c: -0.508, d: 0.765, tx: -21.55, ty: -89.75},
						transform: [-21.55, -89.75, 0.938, 0.918, -0.586, -2.57, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.846, b: -0.456, c: -0.409, d: 0.832, tx: -25.8, ty: -79.55},
						transform: [-25.8, -79.55, 0.961, 0.927, -0.457, -2.647, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.854, b: -0.445, c: -0.395, d: 0.802, tx: -33.65, ty: -72.1},
						transform: [-33.65, -72.1, 0.963, 0.894, -0.457, -2.662, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.854, b: -0.445, c: -0.395, d: 0.802, tx: -45.45, ty: -66.6},
						transform: [-45.45, -66.6, 0.963, 0.894, -0.457, -2.662, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_backpack_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.899, b: -0.44, c: -0.475, d: 0.88, tx: -11.9, ty: -69.85},
						transform: [-11.9, -69.85, 1.001, 1, -0.496, -2.686, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.016649999999999998], [0.666, 0.34965], [1, 1]],
						}
					},
					{
						from: 3,
						to: 5,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.89, b: -0.456, c: -0.547, d: 0.843, tx: -3.8, ty: -85.2},
						transform: [-3.8, -85.2, 1, 1.005, -0.576, -2.668, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.856, b: -0.516, c: -0.604, d: 0.803, tx: 3.35, ty: -96.4},
						transform: [3.35, -96.4, 1, 1.005, -0.645, -2.599, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.697, 0.333], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.911, b: -0.412, c: -0.412, d: 0.911, tx: 2.2, ty: -80.3},
						transform: [2.2, -80.3, 1, 1, -0.424, -2.717, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.935, b: -0.347, c: -0.417, d: 0.952, tx: -3.2, ty: -70.3},
						transform: [-3.2, -70.3, 0.997, 1.039, -0.413, -2.786, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.94, b: -0.34, c: -0.34, d: 0.94, tx: -11.9, ty: -64.5},
						transform: [-11.9, -64.5, 1, 1, -0.347, -2.795, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.94, b: -0.34, c: -0.34, d: 0.94, tx: -23.7, ty: -59},
						transform: [-23.7, -59, 1, 1, -0.347, -2.795, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.441, b: 0.919, c: 0.982, d: 0.471, tx: -20.65, ty: -56.5},
						transform: [-20.65, -56.5, 1.019, 1.089, 1.124, 2.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 2,
						to: 5,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.805, b: 0.625, c: 0.668, d: 0.86, tx: -17.45, ty: -73.6},
						transform: [-17.45, -73.6, 1.019, 1.089, 0.66, 2.481, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.918], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.865, b: 0.538, c: 0.575, d: 0.925, tx: -16.15, ty: -77.8},
						transform: [-16.15, -77.8, 1.019, 1.089, 0.556, 2.585, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.697, 0.333], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.905, b: 0.458, c: 0.498, d: 0.944, tx: -15.5, ty: -71.3},
						transform: [-15.5, -71.3, 1.015, 1.067, 0.485, 2.673, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.263], [0.65, 0.596], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.945, b: 0.438, c: 0.402, d: 0.988, tx: -7.95, ty: -61.2},
						transform: [-7.95, -61.2, 1.042, 1.067, 0.387, 2.707, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.809, b: 0.659, c: 0.662, d: 0.88, tx: -10.45, ty: -52},
						transform: [-10.45, -52, 1.043, 1.101, 0.645, 2.459, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.725, b: 0.716, c: 0.766, d: 0.775, tx: -20.95, ty: -47},
						transform: [-20.95, -47, 1.019, 1.089, 0.779, 2.362, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.565, b: 0.848, c: 0.906, d: 0.604, tx: -32.45, ty: -44.2},
						transform: [-32.45, -44.2, 1.019, 1.089, 0.983, 2.159, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_stretched_run2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: 0.161, b: -0.991, c: 0.714, d: 0.047, tx: 37.4, ty: -93.95},
						transform: [37.4, -93.95, 1.004, 0.715, 1.505, -1.41, NaN],
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
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: 0.217, b: -0.981, c: 0.71, d: 0.087, tx: 42.4, ty: -101.45},
						transform: [42.4, -101.45, 1.004, 0.715, 1.449, -1.353, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 5,
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: 0.259, b: -0.971, c: 0.706, d: 0.117, tx: 43.8, ty: -106.25},
						transform: [43.8, -106.25, 1.004, 0.715, 1.406, -1.31, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.918], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: 0.254, b: -0.972, c: 0.706, d: 0.114, tx: 44.6, ty: -109.45},
						transform: [44.6, -109.45, 1.004, 0.715, 1.41, -1.315, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.697, 0.333], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: 0.25, b: -0.98, c: 0.711, d: 0.072, tx: 45.4, ty: -103.75},
						transform: [45.4, -103.75, 1.012, 0.715, 1.469, -1.321, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.263], [0.65, 0.596], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: 0.242, b: -0.992, c: 0.715, d: 0.025, tx: 46.2, ty: -95.45},
						transform: [46.2, -95.45, 1.021, 0.715, 1.535, -1.331, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: -0.016, b: -1, c: 0.715, d: -0.012, tx: 33.85, ty: -92.3},
						transform: [33.85, -92.3, 1, 0.715, 1.587, -1.587, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: -0.003, b: -1.004, c: 0.712, d: -0.071, tx: 33.5, ty: -85.55},
						transform: [33.5, -85.55, 1.004, 0.715, 1.67, -1.574, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_arm_stretched_run2_x",
						instancename: "",
						matrix: {a: 0.036, b: -1.004, c: 0.714, d: -0.043, tx: 28.7, ty: -81.55},
						transform: [28.7, -81.55, 1.004, 0.715, 1.63, -1.535, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_3_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_gumball_leg_4_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.502, c: 0.657, d: 0.754, tx: 3.7, ty: -38.8},
						transform: [3.7, -38.8, 1.021, 1, 0.716, -0.514, NaN],
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
						classname: "_gumball_gumball_leg_4_x",
						instancename: "",
						matrix: {a: 0.731, b: -0.691, c: 0.761, d: 0.649, tx: 10.7, ty: -44.8},
						transform: [10.7, -44.8, 1.006, 1, 0.864, -0.757, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 5,
						classname: "_gumball_gumball_leg_5_x",
						instancename: "",
						matrix: {a: 0.505, b: -0.87, c: 0.855, d: 0.508, tx: 9.8, ty: -56.15},
						transform: [9.8, -56.15, 1.006, 0.994, 1.035, -1.045, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.918], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_gumball_gumball_leg_5_x",
						instancename: "",
						matrix: {a: 0.259, b: -0.972, c: 0.988, d: 0.152, tx: 13.6, ty: -62.4},
						transform: [13.6, -62.4, 1.006, 1, 1.418, -1.311, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_gumball_leg_4_x",
						instancename: "",
						matrix: {a: 0.259, b: -0.972, c: 0.917, d: 0.422, tx: 11.95, ty: -60},
						transform: [11.95, -60, 1.006, 1.009, 1.14, -1.311, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.402, 0], [0.667, 0.333], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_leg_3_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.15, c: -0.043, d: 0.999, tx: -4.4, ty: -37.55},
						transform: [-4.4, -37.55, 1.006, 1, -0.043, 0.15, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_leg_3_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.144, c: -0.043, d: 0.959, tx: -16.2, ty: -36.05},
						transform: [-16.2, -36.05, 1.005, 0.96, -0.045, 0.144, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.987, b: 0.172, c: -0.295, d: 1.101, tx: 3.75, ty: -59.2},
						transform: [3.75, -59.2, 1.002, 1.139, -0.262, 0.173, NaN],
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
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.975, b: 0.185, c: -0.369, d: 1.182, tx: 9.45, ty: -65.55},
						transform: [9.45, -65.55, 0.992, 1.239, -0.302, 0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 5,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.227, c: -0.474, d: 0.927, tx: 9.25, ty: -75.55},
						transform: [9.25, -75.55, 0.993, 1.041, -0.472, 0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.918], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.967, b: 0.227, c: -0.474, d: 0.927, tx: 10.55, ty: -79.75},
						transform: [10.55, -79.75, 0.993, 1.041, -0.472, 0.231, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.697, 0.333], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.973, b: 0.194, c: -0.435, d: 0.92, tx: 10.4, ty: -73.2},
						transform: [10.4, -73.2, 0.992, 1.017, -0.442, 0.197, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.263], [0.65, 0.596], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.987, b: 0.185, c: -0.209, d: 1.046, tx: 15.1, ty: -64.5},
						transform: [15.1, -64.5, 1.004, 1.067, -0.197, 0.186, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.044, c: -0.13, d: 1.057, tx: 12.85, ty: -58.2},
						transform: [12.85, -58.2, 0.999, 1.064, -0.122, 0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.08, c: -0.162, d: 1, tx: 3.5, ty: -51.1},
						transform: [3.5, -51.1, 0.994, 1.013, -0.16, 0.08, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.157, c: -0.162, d: 0.947, tx: -8.3, ty: -46.4},
						transform: [-8.3, -46.4, 1.003, 0.96, -0.169, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_waist_side2_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.955, b: 0.334, c: -0.523, d: 0.916, tx: -6.6, ty: -48.15},
						transform: [-6.6, -48.15, 1.011, 1.055, -0.519, 0.336, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.932, b: 0.359, c: -0.584, d: 0.985, tx: -1.65, ty: -53.65},
						transform: [-1.65, -53.65, 0.999, 1.145, -0.536, 0.367, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 5,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.224, c: -0.532, d: 0.891, tx: -2.15, ty: -65.35},
						transform: [-2.15, -65.35, 1.014, 1.038, -0.538, 0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.918], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.224, c: -0.532, d: 0.891, tx: -0.85, ty: -69.55},
						transform: [-0.85, -69.55, 1.014, 1.038, -0.538, 0.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.697, 0.333], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.989, b: 0.216, c: -0.53, d: 0.87, tx: -0.85, ty: -63.2},
						transform: [-0.85, -63.2, 1.012, 1.019, -0.547, 0.215, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.263], [0.65, 0.596], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.984, b: 0.251, c: -0.323, d: 1.006, tx: 6.45, ty: -53},
						transform: [6.45, -53, 1.016, 1.056, -0.31, 0.25, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 1.001, b: 0.109, c: -0.246, d: 1.033, tx: 5.15, ty: -45.8},
						transform: [5.15, -45.8, 1.006, 1.062, -0.234, 0.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.972, b: 0.206, c: -0.474, d: 0.928, tx: -6.45, ty: -40.7},
						transform: [-6.45, -40.7, 0.993, 1.043, -0.472, 0.209, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.972, b: 0.277, c: -0.474, d: 0.852, tx: -18.25, ty: -37.2},
						transform: [-18.25, -37.2, 1.01, 0.975, -0.508, 0.278, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_3_x",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_leg_3_x",
						instancename: "",
						matrix: {a: 0.735, b: 0.669, c: -0.844, d: 0.593, tx: -9.15, ty: -47.5},
						transform: [-9.15, -47.5, 0.994, 1.031, -0.958, 0.739, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_leg_3_x",
						instancename: "",
						matrix: {a: 1.054, b: 0.233, c: -0.584, d: 0.853, tx: -8.45, ty: -37.65},
						transform: [-8.45, -37.65, 1.079, 1.034, -0.601, 0.218, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 12,
					},
				]
			},
			{
				name: "gumball_leg_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_gumball_leg_stretched_x",
						instancename: "",
						matrix: {a: 0.853, b: 0.522, c: -0.433, d: 0.771, tx: -19.55, ty: -43.4},
						transform: [-19.55, -43.4, 1, 0.884, -0.512, 0.549, NaN],
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
						classname: "_gumball_gumball_leg_stretched_x",
						instancename: "",
						matrix: {a: 0.853, b: 0.522, c: -0.562, d: 0.828, tx: -15.25, ty: -47.35},
						transform: [-15.25, -47.35, 1, 1.001, -0.596, 0.549, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 5,
						classname: "_gumball_gumball_leg_stretched2_x",
						instancename: "",
						matrix: {a: 0.842, b: 0.686, c: -0.884, d: 0.468, tx: -13.6, ty: -63.9},
						transform: [-13.6, -63.9, 1.086, 1, -1.084, 0.683, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.918], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_gumball_gumball_leg_stretched2_x",
						instancename: "",
						matrix: {a: 0.196, b: 0.981, c: -0.981, d: 0.196, tx: -12.15, ty: -69.15},
						transform: [-12.15, -69.15, 1, 1, -1.374, 1.374, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.697, 0.333], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_gumball_leg_stretched2_x",
						instancename: "",
						matrix: {a: 0.456, b: 0.874, c: -0.96, d: 0.289, tx: -12.15, ty: -62.8},
						transform: [-12.15, -62.8, 0.985, 1.002, -1.278, 1.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.263], [0.65, 0.596], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 0.863, b: -0.42, c: 0.392, d: 0.771, tx: 16.25, ty: -46.8},
						transform: [16.25, -46.8, 0.96, 0.865, 0.471, -0.453, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_leg_2_x",
						instancename: "",
						matrix: {a: 0.895, b: -0.01, c: -0.677, d: 0.969, tx: 16.5, ty: -37.15},
						transform: [16.5, -37.15, 0.895, 1.182, -0.61, -0.011, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1.064, tx: -13.25, ty: -37.9},
						transform: [-13.25, -37.9, 1, 1.064, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 0.994, tx: -25.05, ty: -35.35},
						transform: [-25.05, -35.35, 1, 0.994, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "anais_head copy",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_head_scared_x_f11",
						instancename: "",
						matrix: {a: -0.998, b: -0.056, c: -0.056, d: 0.998, tx: 57.55, ty: -101.2},
						transform: [57.55, -101.2, 1, 1, -0.056, -3.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.11988000000000001], [0.666, 0.45288000000000006], [1, 1]],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_gumball_gumball_head_scared_x_f11",
						instancename: "",
						matrix: {a: -0.998, b: -0.056, c: -0.056, d: 0.998, tx: 61.55, ty: -111.2},
						transform: [61.55, -111.2, 1, 1, -0.056, -3.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_head_scared_x_f11",
						instancename: "",
						matrix: {a: -0.998, b: -0.056, c: -0.056, d: 0.998, tx: 62.35, ty: -115.05},
						transform: [62.35, -115.05, 1, 1, -0.056, -3.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.571, 0], [0.755, 0.561], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_gumball_gumball_head_scared_x_f11",
						instancename: "",
						matrix: {a: -0.998, b: -0.053, c: -0.053, d: 0.998, tx: 52.8, ty: -104},
						transform: [52.8, -104, 1, 1, -0.053, -3.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.49617], [0.666, 0.8291700000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_head_scared_x_f11",
						instancename: "",
						matrix: {a: -0.998, b: -0.056, c: -0.056, d: 0.998, tx: 37.95, ty: -89.4},
						transform: [37.95, -89.4, 1, 1, -0.056, -3.085, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_arm_stretched_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.2, b: -0.983, c: 0.711, d: 0.081, tx: 11.8, ty: -85},
						transform: [11.8, -85, 1.003, 0.716, 1.457, -1.37, NaN],
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
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.276, b: -0.964, c: 0.703, d: 0.136, tx: 18.8, ty: -93},
						transform: [18.8, -93, 1.003, 0.716, 1.379, -1.292, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 5,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.321, b: -0.95, c: 0.695, d: 0.169, tx: 20.2, ty: -98.3},
						transform: [20.2, -98.3, 1.003, 0.716, 1.332, -1.246, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.23, 0.918], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 7,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.341, b: -0.943, c: 0.692, d: 0.184, tx: 21.5, ty: -103},
						transform: [21.5, -103, 1.003, 0.716, 1.31, -1.223, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.392, 0], [0.697, 0.333], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.312, b: -0.958, c: 0.703, d: 0.131, tx: 20.45, ty: -96.6},
						transform: [20.45, -96.6, 1.008, 0.715, 1.387, -1.256, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.263], [0.65, 0.596], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.231, b: -0.994, c: 0.715, d: 0.02, tx: 21.65, ty: -89.45},
						transform: [21.65, -89.45, 1.021, 0.715, 1.544, -1.342, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: -0.007, b: -1, c: 0.715, d: -0.005, tx: 14, ty: -79.45},
						transform: [14, -79.45, 1, 0.715, 1.578, -1.578, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.014, b: -1.003, c: 0.714, d: -0.053, tx: 8.7, ty: -75.55},
						transform: [8.7, -75.55, 1.003, 0.716, 1.645, -1.557, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.075, b: -1, c: 0.716, d: -0.009, tx: -3.6, ty: -68.5},
						transform: [-3.6, -68.5, 1.003, 0.716, 1.583, -1.496, NaN],
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
						to: 9,
					},
					{
						from: 10,
						to: 10,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 11,
						to: 12,
					},
				]
			},
		]
	},
	"_gumball_gumball_hit": {
		type: "movieclip",
		fps: 30,
		totalFrames: 20,
		labels: {end: {from:19, to:19}, },
		layers: [
			{
				name: "v",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_fxv_x_f0",
						instancename: "",
						matrix: {a: 0.995, b: -0.095, c: 0.095, d: 0.995, tx: 34.4, ty: -56.85},
						transform: [34.4, -56.85, 1, 1, 0.095, -0.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_gumball_fxv_x_f1",
						instancename: "",
						matrix: {a: 0.995, b: -0.095, c: 0.095, d: 0.995, tx: 34.4, ty: -56.85},
						transform: [34.4, -56.85, 1, 1, 0.095, -0.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_gumball_fxv_x_f2",
						instancename: "",
						matrix: {a: 0.995, b: -0.095, c: 0.095, d: 0.995, tx: 34.4, ty: -56.85},
						transform: [34.4, -56.85, 1, 1, 0.095, -0.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 18,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_fxv_x_f0",
						instancename: "",
						matrix: {a: 0.568, b: -0.029, c: 0.031, d: 0.607, tx: 26.8, ty: -53.3},
						transform: [26.8, -53.3, 0.569, 0.608, 0.051, -0.051, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_gumball_fxv_x_f1",
						instancename: "",
						matrix: {a: 0.568, b: -0.029, c: 0.031, d: 0.607, tx: 26.8, ty: -53.3},
						transform: [26.8, -53.3, 0.569, 0.608, 0.051, -0.051, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_gumball_fxv_x_f2",
						instancename: "",
						matrix: {a: 0.568, b: -0.029, c: 0.031, d: 0.607, tx: 26.8, ty: -53.3},
						transform: [26.8, -53.3, 0.569, 0.608, 0.051, -0.051, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
					},
					{
						from: 4,
						to: 18,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.893, b: 0.333, c: 0.407, d: 0.967, tx: -48.45, ty: -60.15},
						transform: [-48.45, -60.15, 0.953, 1.049, 0.398, 2.785, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.908, b: 0.32, c: 0.316, d: 0.837, tx: -63.1, ty: -84},
						transform: [-63.1, -84, 0.963, 0.894, 0.361, 2.803, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -1.032, b: -0.14, c: 0.002, d: 0.859, tx: -60.1, ty: -76},
						transform: [-60.1, -76, 1.041, 0.859, 0.002, -3.007, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -51.2, ty: -54.25},
						transform: [-51.2, -54.25, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.996, b: -0.087, c: -0.087, d: 0.996, tx: -47.3, ty: -62.35},
						transform: [-47.3, -62.35, 1, 1, -0.087, -3.054, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.91, b: -0.289, c: -0.307, d: 0.836, tx: -41.9, ty: -56.05},
						transform: [-41.9, -56.05, 0.954, 0.891, -0.352, -2.834, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.869, b: -0.377, c: -0.374, d: 0.829, tx: -41.15, ty: -69.4},
						transform: [-41.15, -69.4, 0.947, 0.909, -0.424, -2.732, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_backpack_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.888, b: 0.436, c: 0.461, d: 0.943, tx: -32.35, ty: -77.25},
						transform: [-32.35, -77.25, 0.99, 1.05, 0.455, 2.685, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.908, b: 0.42, c: 0.42, d: 0.908, tx: -43.85, ty: -96.4},
						transform: [-43.85, -96.4, 1, 1, 0.433, 2.709, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.923, b: 0.384, c: 0.384, d: 0.923, tx: -37.8, ty: -77.45},
						transform: [-37.8, -77.45, 1, 1, 0.394, 2.747, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.943, b: 0.334, c: 0.334, d: 0.943, tx: -28.75, ty: -53.6},
						transform: [-28.75, -53.6, 1, 1, 0.34, 2.801, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.976, b: -0.153, c: -0.198, d: 0.994, tx: -24.65, ty: -64.05},
						transform: [-24.65, -64.05, 0.988, 1.013, -0.197, -2.986, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.975, b: -0.212, c: -0.275, d: 0.953, tx: -18, ty: -53.5},
						transform: [-18, -53.5, 0.998, 0.991, -0.281, -2.928, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.94, b: -0.304, c: -0.351, d: 0.951, tx: -17.9, ty: -64.65},
						transform: [-17.9, -64.65, 0.988, 1.013, -0.354, -2.829, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.873, b: -0.488, c: 0.532, d: -0.951, tx: -32.1, ty: -58.35},
						transform: [-32.1, -58.35, 1, 1.089, 2.632, -2.632, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.873, b: -0.488, c: 0.532, d: -0.951, tx: -33.1, ty: -70.35},
						transform: [-33.1, -70.35, 1, 1.089, 2.632, -2.632, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.077, b: -0.997, c: 1.086, d: -0.084, tx: -28.85, ty: -51.45},
						transform: [-28.85, -51.45, 1, 1.089, 1.648, -1.648, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.312, b: -0.95, c: 1.035, d: 0.34, tx: -24.25, ty: -37.05},
						transform: [-24.25, -37.05, 1, 1.089, 1.253, -1.253, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.495, b: -0.886, c: 0.958, d: 0.486, tx: -26.1, ty: -43.85},
						transform: [-26.1, -43.85, 1.014, 1.075, 1.101, -1.061, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.028, b: -0.991, c: 1.085, d: 0.013, tx: -23.4, ty: -41.3},
						transform: [-23.4, -41.3, 0.991, 1.085, 1.558, -1.542, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.375, b: -0.943, c: 1.014, d: 0.357, tx: -25.05, ty: -42.35},
						transform: [-25.05, -42.35, 1.014, 1.075, 1.232, -1.192, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: 0.235, b: -1.072, c: 0.786, d: 0.668, tx: -3.55, ty: -71.55},
						transform: [-3.55, -71.55, 1.097, 1.032, 0.866, -1.355, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: 0.439, b: -0.898, c: 0.943, d: 0.349, tx: -5.3, ty: -87.6},
						transform: [-5.3, -87.6, 1, 1.005, 1.216, -1.116, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: 0.364, b: -0.939, c: 0.915, d: 0.385, tx: -4.05, ty: -62.15},
						transform: [-4.05, -62.15, 1.008, 0.993, 1.173, -1.201, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: 0.596, b: -0.803, c: 0.71, d: 0.722, tx: 1.75, ty: -39.3},
						transform: [1.75, -39.3, 1, 1.012, 0.777, -0.932, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1.018, b: 0, c: 0.224, d: 1.025, tx: -1.8, ty: -34.55},
						transform: [-1.8, -34.55, 1.018, 1.049, 0.215, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1.032, b: 0, c: 0.16, d: 0.937, tx: 0.5, ty: -31.5},
						transform: [0.5, -31.5, 1.032, 0.951, 0.169, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1.018, b: 0, c: 0.158, d: 0.963, tx: 0.5, ty: -32.4},
						transform: [0.5, -32.4, 1.018, 0.976, 0.163, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_stretched_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.001, b: -1, c: 0.986, d: 0.019, tx: -19.35, ty: -116.4},
						transform: [-19.35, -116.4, 1, 0.986, 1.552, -1.57, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.433, b: -0.901, c: 0.844, d: -0.469, tx: -20.6, ty: -128},
						transform: [-20.6, -128, 1, 0.966, 2.078, -2.019, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_arm_painback_x",
						instancename: "",
						matrix: {a: -0.481, b: -0.877, c: 0.947, d: -0.519, tx: -36.5, ty: -100.1},
						transform: [-36.5, -100.1, 1, 1.08, 2.072, -2.072, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_arm_painback_x",
						instancename: "",
						matrix: {a: -0.156, b: -0.989, c: 1.074, d: -0.116, tx: -28.35, ty: -80.75},
						transform: [-28.35, -80.75, 1.001, 1.08, 1.679, -1.727, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_gumball_gumball_arm_painback_x",
						instancename: "",
						matrix: {a: 0.012, b: -1, c: 1.08, d: 0.013, tx: -10.45, ty: -81.95},
						transform: [-10.45, -81.95, 1, 1.08, 1.559, -1.559, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_arm_painback_x",
						instancename: "",
						matrix: {a: 0.171, b: -0.959, c: 1.08, d: 0.177, tx: -1.1, ty: -77.9},
						transform: [-1.1, -77.9, 0.975, 1.094, 1.408, -1.395, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_arm_quick_x_f4",
						instancename: "",
						matrix: {a: 0.797, b: -0.575, c: 0.652, d: 0.835, tx: 1.15, ty: -82.5},
						transform: [1.15, -82.5, 0.982, 1.06, 0.663, -0.625, NaN],
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
						classname: "_gumball_gumball_arm_quick_x_f0",
						instancename: "",
						matrix: {a: 0.803, b: -0.57, c: 0.641, d: 0.848, tx: 2.05, ty: -83.9},
						transform: [2.05, -83.9, 0.985, 1.063, 0.647, -0.617, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 13,
						to: 13,
						classname: "_gumball_gumball_arm_quick_x_f1",
						instancename: "",
						matrix: {a: 0.826, b: -0.564, c: 0.609, d: 0.892, tx: 4.75, ty: -88.45},
						transform: [4.75, -88.45, 1, 1.08, 0.599, -0.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_gumball_gumball_arm_quick_x_f2",
						instancename: "",
						matrix: {a: 0.826, b: -0.564, c: 0.609, d: 0.892, tx: 4.75, ty: -88.45},
						transform: [4.75, -88.45, 1, 1.08, 0.599, -0.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_gumball_gumball_arm_quick_x_f3",
						instancename: "",
						matrix: {a: 0.826, b: -0.564, c: 0.609, d: 0.892, tx: 4.75, ty: -88.45},
						transform: [4.75, -88.45, 1, 1.08, 0.599, -0.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_gumball_gumball_arm_quick_x_f4",
						instancename: "",
						matrix: {a: 0.826, b: -0.564, c: 0.609, d: 0.892, tx: 4.75, ty: -88.45},
						transform: [4.75, -88.45, 1, 1.08, 0.599, -0.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_gumball_gumball_arm_quick_x_f0",
						instancename: "",
						matrix: {a: 0.826, b: -0.564, c: 0.609, d: 0.892, tx: 4.75, ty: -88.45},
						transform: [4.75, -88.45, 1, 1.08, 0.599, -0.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_gumball_gumball_arm_quick_x_f1",
						instancename: "",
						matrix: {a: 0.826, b: -0.564, c: 0.609, d: 0.892, tx: 4.75, ty: -88.45},
						transform: [4.75, -88.45, 1, 1.08, 0.599, -0.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_arm_quick_x_f2",
						instancename: "",
						matrix: {a: 0.826, b: -0.564, c: 0.609, d: 0.892, tx: 4.75, ty: -88.45},
						transform: [4.75, -88.45, 1, 1.08, 0.599, -0.599, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.915, b: -0.651, c: 0.728, d: 0.786, tx: -22.15, ty: -86.2},
						transform: [-22.15, -86.2, 1.123, 1.071, 0.747, -0.618, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.944, b: -0.626, c: 0.693, d: 0.756, tx: -24.95, ty: -99.7},
						transform: [-24.95, -99.7, 1.133, 1.026, 0.742, -0.586, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_torso_sidemore_stretch_x",
						instancename: "",
						matrix: {a: 0.991, b: -0.602, c: 0.635, d: 0.802, tx: -17.7, ty: -72.85},
						transform: [-17.7, -72.85, 1.159, 1.023, 0.669, -0.546, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_torso_sidemore_stretch_x",
						instancename: "",
						matrix: {a: 1.071, b: -0.39, c: 0.643, d: 0.904, tx: -12.95, ty: -54.1},
						transform: [-12.95, -54.1, 1.14, 1.109, 0.619, -0.35, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 1.132, b: 0.034, c: 0.104, d: 0.977, tx: -4.45, ty: -54.8},
						transform: [-4.45, -54.8, 1.132, 0.983, 0.106, 0.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 1.128, b: 0.205, c: -0.051, d: 0.955, tx: 0.6, ty: -50.9},
						transform: [0.6, -50.9, 1.146, 0.957, -0.053, 0.18, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 1.112, b: 0.211, c: -0.05, d: 0.981, tx: 0.6, ty: -52.35},
						transform: [0.6, -52.35, 1.132, 0.983, -0.051, 0.187, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_waist_side2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.822, b: -0.555, c: 0.477, d: 0.994, tx: -16.75, ty: -68.7},
						transform: [-16.75, -68.7, 0.992, 1.102, 0.448, -0.593, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.847, b: -0.534, c: 0.433, d: 0.956, tx: -20.3, ty: -82.85},
						transform: [-20.3, -82.85, 1.001, 1.05, 0.426, -0.562, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.887, b: -0.511, c: 0.36, d: 0.996, tx: -14.35, ty: -55.45},
						transform: [-14.35, -55.45, 1.024, 1.059, 0.347, -0.523, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.954, b: -0.324, c: 0.199, d: 0.98, tx: -11.4, ty: -37.05},
						transform: [-11.4, -37.05, 1.008, 1, 0.201, -0.327, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.105, c: -0.114, d: 0.993, tx: -13.3, ty: -38.6},
						transform: [-13.3, -38.6, 1, 1, -0.115, 0.105, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 1.008, b: 0.102, c: -0.438, d: 0.934, tx: -9.95, ty: -37.05},
						transform: [-9.95, -37.05, 1.014, 1.032, -0.439, 0.101, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.994, b: 0.105, c: -0.432, d: 0.96, tx: -9.8, ty: -38.1},
						transform: [-9.8, -38.1, 1, 1.053, -0.423, 0.105, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_head_scared_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_head_scared_x_f13",
						instancename: "",
						matrix: {a: -0.926, b: 0.378, c: 0.378, d: 0.926, tx: -44.95, ty: -125.7},
						transform: [-44.95, -125.7, 1, 1, 0.388, 2.754, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_head_scared_x_f13",
						instancename: "",
						matrix: {a: -0.896, b: 0.445, c: 0.445, d: 0.896, tx: -45.95, ty: -137.7},
						transform: [-45.95, -137.7, 1, 1, 0.461, 2.681, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: -0.922, b: 0.386, c: 0.386, d: 0.922, tx: -37.05, ty: -118.2},
						transform: [-37.05, -118.2, 1, 1, 0.397, 2.745, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: -0.927, b: 0.376, c: 0.376, d: 0.927, tx: -29.3, ty: -100.65},
						transform: [-29.3, -100.65, 1, 1, 0.386, 2.756, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 10,
						classname: "_gumball_gumball_head_scared_x_f15",
						instancename: "",
						matrix: {a: -0.986, b: -0.168, c: -0.168, d: 0.986, tx: 0.55, ty: -99},
						transform: [0.55, -99, 1, 1, -0.168, -2.973, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 13,
						classname: "_gumball_gumball_head_scared_x_f15",
						instancename: "",
						matrix: {a: -0.947, b: -0.32, c: -0.32, d: 0.947, tx: 12.95, ty: -87.2},
						transform: [12.95, -87.2, 1, 1, -0.325, -2.816, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.5994], [0.666, 0.9324000000000001], [1, 1]],
						}
					},
					{
						from: 14,
						to: 19,
						classname: "_gumball_gumball_head_scared_x_f15",
						instancename: "",
						matrix: {a: -0.947, b: -0.32, c: -0.32, d: 0.947, tx: 12.45, ty: -95.2},
						transform: [12.45, -95.2, 1, 1, -0.325, -2.816, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.584, b: -0.812, c: -0.76, d: 0.582, tx: -53, ty: -102.45},
						transform: [-53, -102.45, 1, 0.957, -0.917, -2.194, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.386, b: -0.922, c: -0.91, d: 0.304, tx: -53.95, ty: -114.5},
						transform: [-53.95, -114.5, 1, 0.96, -1.249, -1.968, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_arm_pain_x",
						instancename: "",
						matrix: {a: -0.481, b: -0.877, c: 0.947, d: -0.519, tx: -36.5, ty: -100.1},
						transform: [-36.5, -100.1, 1, 1.08, 2.072, -2.072, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_arm_pain_x",
						instancename: "",
						matrix: {a: -0.156, b: -0.989, c: 1.074, d: -0.116, tx: -28.35, ty: -80.75},
						transform: [-28.35, -80.75, 1.001, 1.08, 1.679, -1.727, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_gumball_gumball_arm_pain_x",
						instancename: "",
						matrix: {a: 0.012, b: -1, c: 1.08, d: 0.013, tx: -10.45, ty: -81.95},
						transform: [-10.45, -81.95, 1, 1.08, 1.559, -1.559, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_arm_pain_x",
						instancename: "",
						matrix: {a: 0.171, b: -0.959, c: 1.08, d: 0.177, tx: -1.1, ty: -77.9},
						transform: [-1.1, -77.9, 0.975, 1.094, 1.408, -1.395, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.013, b: -1, c: -0.901, d: -0.055, tx: -12.45, ty: -77.5},
						transform: [-12.45, -77.5, 1, 0.903, -1.632, -1.584, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.013, b: -1, c: -0.901, d: -0.055, tx: -12.45, ty: -82.5},
						transform: [-12.45, -82.5, 1, 0.903, -1.632, -1.584, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_leg_stretched_x",
						instancename: "",
						matrix: {a: 1.067, b: -0.4, c: 0.192, d: 0.878, tx: -21.5, ty: -56.3},
						transform: [-21.5, -56.3, 1.14, 0.898, 0.215, -0.359, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.884], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_leg_stretched_x",
						instancename: "",
						matrix: {a: 1.067, b: -0.4, c: 0.181, d: 0.854, tx: -23.55, ty: -70.9},
						transform: [-23.55, -70.9, 1.14, 0.873, 0.209, -0.359, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 0.865, b: 0.032, c: 0.077, d: 1.187, tx: -18.85, ty: -46.3},
						transform: [-18.85, -46.3, 0.866, 1.189, 0.064, 0.037, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1.018, b: 0, c: 0.056, d: 0.829, tx: -14.9, ty: -27.6},
						transform: [-14.9, -27.6, 1.018, 0.831, 0.067, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1.018, b: 0, c: 0.173, d: 1, tx: -18.95, ty: -33.65},
						transform: [-18.95, -33.65, 1.018, 1.015, 0.171, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.218, 0.945], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 12,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1.032, b: 0, c: 0.111, d: 0.915, tx: -16.95, ty: -30.65},
						transform: [-16.95, -30.65, 1.032, 0.921, 0.12, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 13,
						to: 19,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1.018, b: 0, c: 0.109, d: 0.94, tx: -16.7, ty: -31.55},
						transform: [-16.7, -31.55, 1.018, 0.946, 0.116, 0, NaN],
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
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();
},
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 18,
					},
					{
						from: 19,
						to: 19,
					},
				]
			},
		]
	},
	"_gumball_gumball_die": {
		type: "movieclip",
		fps: 30,
		totalFrames: 64,
		labels: {loop: {from:35, to:63}, },
		layers: [
			{
				name: "v",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_fxv_x_f0",
						instancename: "",
						matrix: {a: 0.975, b: 0.207, c: -0.191, d: 0.994, tx: 76.15, ty: -32.4},
						transform: [76.15, -32.4, 0.997, 1.013, -0.19, 0.209, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.106, 0.56], [0.482, 0.85], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_gumball_fxv_x_f2",
						instancename: "",
						matrix: {a: 0.989, b: -0.135, c: 0.142, d: 0.973, tx: 81.6, ty: -66.9},
						transform: [81.6, -66.9, 0.998, 0.983, 0.145, -0.136, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.446], [0.646, 0.768], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 63,
					},
				]
			},
			{
				name: "v",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_fxv_x_f0",
						instancename: "",
						matrix: {a: 0.55, b: 0.142, c: -0.142, d: 0.598, tx: 67.95, ty: -31.2},
						transform: [67.95, -31.2, 0.568, 0.615, -0.233, 0.253, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.106, 0.56], [0.482, 0.85], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_gumball_fxv_x_f2",
						instancename: "",
						matrix: {a: 0.566, b: -0.052, c: 0.06, d: 0.594, tx: 74.4, ty: -63.2},
						transform: [74.4, -63.2, 0.568, 0.597, 0.101, -0.092, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.31, 0.446], [0.646, 0.768], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 63,
					},
				]
			},
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.87, b: 0.374, c: 0.469, d: 0.958, tx: 2.25, ty: -51.65},
						transform: [2.25, -51.65, 0.947, 1.066, 0.456, 2.736, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.854, b: 0.414, c: 0.505, d: 0.9, tx: -5.15, ty: -67.25},
						transform: [-5.15, -67.25, 0.949, 1.032, 0.512, 2.69, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.924, b: 0.234, c: 0.3, d: 1.005, tx: -19, ty: -62},
						transform: [-19, -62, 0.953, 1.049, 0.29, 2.893, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.902, b: -0.308, c: -0.296, d: 1.006, tx: -24.25, ty: -74.6},
						transform: [-24.25, -74.6, 0.953, 1.049, -0.287, -2.813, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 19,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.659, b: -0.688, c: -0.726, d: 0.757, tx: -11.5, ty: -62.65},
						transform: [-11.5, -62.65, 0.953, 1.049, -0.765, -2.335, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.919, b: -0.252, c: -0.235, d: 1.022, tx: -47.5, ty: -58.4},
						transform: [-47.5, -58.4, 0.953, 1.049, -0.226, -2.874, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.898, b: -0.319, c: -0.309, d: 1.002, tx: -34.9, ty: -60.55},
						transform: [-34.9, -60.55, 0.953, 1.049, -0.299, -2.8, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.927, b: -0.232, c: -0.201, d: 1.027, tx: -40.5, ty: -57.65},
						transform: [-40.5, -57.65, 0.956, 1.046, -0.194, -2.896, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.943, b: -0.319, c: -0.273, d: 0.956, tx: -36.65, ty: -58.4},
						transform: [-36.65, -58.4, 0.995, 0.994, -0.278, -2.816, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.927, b: -0.232, c: -0.201, d: 1.027, tx: -40.5, ty: -57.65},
						transform: [-40.5, -57.65, 0.956, 1.046, -0.194, -2.896, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "gumball_backpack_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.858, b: 0.478, c: 0.522, d: 0.932, tx: 14.75, ty: -72.8},
						transform: [14.75, -72.8, 0.982, 1.068, 0.511, 2.633, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.838, b: 0.514, c: 0.557, d: 0.871, tx: 9.05, ty: -85.55},
						transform: [9.05, -85.55, 0.983, 1.034, 0.569, 2.591, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.93, b: 0.338, c: 0.357, d: 0.988, tx: 3.95, ty: -71.6},
						transform: [3.95, -71.6, 0.99, 1.05, 0.347, 2.793, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.95, b: -0.278, c: -0.297, d: 1.007, tx: 3.3, ty: -67.45},
						transform: [3.3, -67.45, 0.99, 1.05, -0.286, -2.857, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 19,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.758, b: -0.636, c: -0.676, d: 0.803, tx: 6.45, ty: -47.2},
						transform: [6.45, -47.2, 0.99, 1.05, -0.7, -2.443, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.948, b: -0.283, c: -0.302, d: 1.006, tx: -21.7, ty: -52.25},
						transform: [-21.7, -52.25, 0.99, 1.05, -0.291, -2.852, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.925, b: -0.352, c: -0.375, d: 0.981, tx: -8.85, ty: -52.4},
						transform: [-8.85, -52.4, 0.99, 1.05, -0.365, -2.778, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.958, b: -0.262, c: -0.269, d: 1.012, tx: -13.8, ty: -52.05},
						transform: [-13.8, -52.05, 0.993, 1.047, -0.26, -2.874, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.972, b: -0.35, c: -0.342, d: 0.934, tx: -9.4, ty: -50.25},
						transform: [-9.4, -50.25, 1.034, 0.995, -0.351, -2.796, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.958, b: -0.262, c: -0.269, d: 1.012, tx: -13.8, ty: -52.05},
						transform: [-13.8, -52.05, 0.993, 1.047, -0.26, -2.874, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.903, b: -0.454, c: 0.468, d: -0.982, tx: 16.25, ty: -53.7},
						transform: [16.25, -53.7, 1.011, 1.088, 2.697, -2.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.406, b: -0.91, c: 0.983, d: -0.421, tx: 11.35, ty: -69.15},
						transform: [11.35, -69.15, 0.997, 1.069, 1.975, -1.991, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.181, b: -0.983, c: 1.071, d: -0.198, tx: 2.2, ty: -57.25},
						transform: [2.2, -57.25, 1, 1.089, 1.753, -1.753, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.317, b: -0.929, c: 0.961, d: 0.395, tx: -7.75, ty: -42.85},
						transform: [-7.75, -42.85, 0.982, 1.039, 1.181, -1.242, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.016, b: -0.982, c: 1.036, d: 0.08, tx: -17.6, ty: -45.65},
						transform: [-17.6, -45.65, 0.982, 1.039, 1.493, -1.555, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.462, b: -0.887, c: 0.966, d: -0.503, tx: -10.3, ty: -33.35},
						transform: [-10.3, -33.35, 1, 1.089, 2.051, -2.051, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.599, b: -0.801, c: 0.872, d: -0.653, tx: -15.9, ty: -33.85},
						transform: [-15.9, -33.85, 1, 1.089, 2.213, -2.213, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.303, b: -0.864, c: 1.052, d: -0.465, tx: -23.25, ty: -25.85},
						transform: [-23.25, -25.85, 0.915, 1.15, 1.987, -1.909, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.443, b: -0.896, c: 0.977, d: -0.483, tx: -25.2, ty: -22.65},
						transform: [-25.2, -22.65, 1, 1.089, 2.03, -2.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.443, b: -0.896, c: 0.977, d: -0.483, tx: -25.2, ty: -22.65},
						transform: [-25.2, -22.65, 1, 1.089, 2.03, -2.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.498, b: -0.872, c: 0.944, d: -0.532, tx: -25.8, ty: -22.6},
						transform: [-25.8, -22.6, 1.005, 1.084, 2.084, -2.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.515, b: -0.835, c: 0.976, d: -0.509, tx: -23.25, ty: -20.7},
						transform: [-23.25, -20.7, 0.981, 1.101, 2.052, -2.124, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.498, b: -0.872, c: 0.944, d: -0.532, tx: -25.8, ty: -22.6},
						transform: [-25.8, -22.6, 1.005, 1.084, 2.084, -2.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_die2_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_arm_die2_x",
						instancename: "",
						matrix: {a: 0.934, b: -0.336, c: 0.326, d: 0.949, tx: 24.3, ty: -107.25},
						transform: [24.3, -107.25, 0.992, 1.003, 0.331, -0.346, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_arm_die2_x",
						instancename: "",
						matrix: {a: 0.837, b: -0.535, c: 0.525, d: 0.817, tx: 12.55, ty: -126.45},
						transform: [12.55, -126.45, 0.993, 0.972, 0.571, -0.569, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_arm_die2_x",
						instancename: "",
						matrix: {a: 0.933, b: -0.359, c: 0.338, d: 0.927, tx: 15.75, ty: -115.35},
						transform: [15.75, -115.35, 1, 0.986, 0.349, -0.367, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.799, b: 0.167, c: 0.183, d: 0.76, tx: 28.4, ty: -71.9},
						transform: [28.4, -71.9, 0.816, 0.782, 0.237, 2.935, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.979, b: 0.63, c: 0.783, d: 0.602, tx: 58.45, ty: -29.8},
						transform: [58.45, -29.8, 1.164, 0.987, 0.915, 2.57, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.289, 0.418], [0.628, 0.745], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.431, b: -0.941, c: 0.719, d: 0.122, tx: 90.85, ty: -20.05},
						transform: [90.85, -20.05, 1.035, 0.73, 1.403, -1.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.299, 0.908], [0.682, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.43, b: -0.962, c: 0.761, d: 0.073, tx: 97.7, ty: -14.85},
						transform: [97.7, -14.85, 1.054, 0.765, 1.475, -1.15, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.267, b: -0.981, c: 0.713, d: 0.057, tx: 86.6, ty: -12.6},
						transform: [86.6, -12.6, 1.017, 0.716, 1.491, -1.305, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.826, b: 0.342, c: 0.4, d: 0.851, tx: 21.9, ty: -61.15},
						transform: [21.9, -61.15, 0.894, 0.941, 0.439, 2.749, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.16, 0.557], [0.443, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.976, b: -0.247, c: -0.154, d: 0.756, tx: 13.3, ty: -64.25},
						transform: [13.3, -64.25, 1.007, 0.772, -0.201, -2.893, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.16, 0.557], [0.443, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.356, b: 0.776, c: -0.626, d: 0.693, tx: 14.85, ty: -72.35},
						transform: [14.85, -72.35, 0.854, 0.934, -0.734, 1.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.16, 0.557], [0.443, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.784, b: -0.016, c: 0.035, d: 0.933, tx: 15.15, ty: -72.4},
						transform: [15.15, -72.4, 0.785, 0.934, 0.037, -0.02, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.206, 0.423], [0.512, 0.791], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 63,
					},
				]
			},
			{
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.871, b: -0.696, c: 0.777, d: 0.761, tx: 24.4, ty: -82.25},
						transform: [24.4, -82.25, 1.115, 1.088, 0.796, -0.674, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.842, b: -0.726, c: 0.806, d: 0.691, tx: 18.3, ty: -95.25},
						transform: [18.3, -95.25, 1.112, 1.061, 0.862, -0.711, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.548, c: 0.639, d: 0.86, tx: 15.1, ty: -79.3},
						transform: [15.1, -79.3, 1.123, 1.071, 0.639, -0.51, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 1.1, b: 0.225, c: -0.078, d: 1.068, tx: 11.2, ty: -53.65},
						transform: [11.2, -53.65, 1.123, 1.071, -0.073, 0.202, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
					},
					{
						from: 16,
						to: 19,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 1.06, b: 0.439, c: -0.622, d: 0.784, tx: 11.1, ty: -34.8},
						transform: [11.1, -34.8, 1.147, 1.001, -0.671, 0.392, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 1.207, b: 0.107, c: 0.02, d: 1.105, tx: -7.75, ty: -41.3},
						transform: [-7.75, -41.3, 1.211, 1.105, 0.018, 0.089, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 1.112, b: 0.335, c: -0.36, d: 1.089, tx: 1.35, ty: -39.3},
						transform: [1.35, -39.3, 1.162, 1.147, -0.32, 0.293, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 1.165, b: 0.088, c: -0.092, d: 1.136, tx: -1.5, ty: -40.65},
						transform: [-1.5, -40.65, 1.168, 1.14, -0.081, 0.075, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 1.202, b: 0.173, c: -0.13, d: 1.077, tx: 1.15, ty: -37.4},
						transform: [1.15, -37.4, 1.215, 1.085, -0.12, 0.143, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_torso_side_more_x",
						instancename: "",
						matrix: {a: 1.165, b: 0.088, c: -0.092, d: 1.136, tx: -1.5, ty: -40.65},
						transform: [-1.5, -40.65, 1.168, 1.14, -0.081, 0.075, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_waist_side_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.784, b: -0.595, c: 0.541, d: 0.982, tx: 30.95, ty: -64.9},
						transform: [30.95, -64.9, 0.984, 1.121, 0.504, -0.649, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.76, b: -0.623, c: 0.578, d: 0.919, tx: 25.5, ty: -78.85},
						transform: [25.5, -78.85, 0.983, 1.086, 0.562, -0.687, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.877, b: -0.463, c: 0.367, d: 1.039, tx: 18.65, ty: -61.4},
						transform: [18.65, -61.4, 0.992, 1.102, 0.34, -0.485, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.125, c: -0.094, d: 1.222, tx: 7.1, ty: -37.45},
						transform: [7.1, -37.45, 1.005, 1.225, -0.077, 0.125, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_waist_die_x",
						instancename: "",
						matrix: {a: 0.777, b: 0.668, c: -0.58, d: 1.08, tx: -4.2, ty: -32.75},
						transform: [-4.2, -32.75, 1.024, 1.225, -0.493, 0.71, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_waist_die_x",
						instancename: "",
						matrix: {a: 0.709, b: 0.586, c: -0.817, d: 0.948, tx: 1.55, ty: -27.7},
						transform: [1.55, -27.7, 0.92, 1.251, -0.711, 0.691, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_waist_die_x",
						instancename: "",
						matrix: {a: 0.772, b: 0.613, c: -0.716, d: 0.992, tx: -2.35, ty: -29.4},
						transform: [-2.35, -29.4, 0.986, 1.223, -0.625, 0.672, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.936, b: 0.292, c: -0.69, d: 0.951, tx: -4.55, ty: -22.7},
						transform: [-4.55, -22.7, 0.981, 1.175, -0.627, 0.303, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.998, b: 0.047, c: -0.268, d: 1.071, tx: -17.15, ty: -24.55},
						transform: [-17.15, -24.55, 0.999, 1.104, -0.245, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.991, b: 0.047, c: -0.434, d: 1.071, tx: -11.25, ty: -24.15},
						transform: [-11.25, -24.15, 0.992, 1.156, -0.385, 0.047, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.004, c: -0.351, d: 1.092, tx: -12.45, ty: -24.8},
						transform: [-12.45, -24.8, 0.992, 1.147, -0.311, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 1.026, b: 0.072, c: -0.396, d: 1.016, tx: -10.6, ty: -23.15},
						transform: [-10.6, -23.15, 1.028, 1.09, -0.372, 0.07, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.992, b: -0.004, c: -0.351, d: 1.092, tx: -12.45, ty: -24.8},
						transform: [-12.45, -24.8, 0.992, 1.147, -0.311, -0.004, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_6_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: -0.141, b: -1.072, c: 0.922, d: 0.556, tx: 46.55, ty: -67.05},
						transform: [46.55, -67.05, 1.081, 1.077, 1.028, -1.701, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: -0.777, b: -0.631, c: 0.873, d: -0.55, tx: 33.45, ty: -83.05},
						transform: [33.45, -83.05, 1.001, 1.032, 2.133, -2.46, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: -0.122, b: -1.09, c: 0.96, d: 0.38, tx: 31.25, ty: -64.85},
						transform: [31.25, -64.85, 1.097, 1.032, 1.194, -1.682, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: -0.925, b: 0.096, c: 0.021, d: 0.747, tx: 13.95, ty: -30.65},
						transform: [13.95, -30.65, 0.93, 0.748, 0.028, 3.038, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: 0.825, b: -0.312, c: 0.196, d: 0.919, tx: 11.45, ty: -24.8},
						transform: [11.45, -24.8, 0.882, 0.94, 0.211, -0.361, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: 0.983, b: -0.257, c: 0.002, d: 0.756, tx: 19.1, ty: -18.8},
						transform: [19.1, -18.8, 1.016, 0.756, 0.003, -0.255, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: 0.911, b: -0.287, c: 0.129, d: 0.844, tx: 13.65, ty: -22.05},
						transform: [13.65, -22.05, 0.955, 0.854, 0.151, -0.305, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -0.937, b: -0.053, c: -0.218, d: 0.804, tx: 22.45, ty: -28.6},
						transform: [22.45, -28.6, 0.939, 0.833, -0.264, -3.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -0.962, b: -0.055, c: 0.214, d: 0.85, tx: 5.45, ty: -30.45},
						transform: [5.45, -30.45, 0.963, 0.877, 0.247, -3.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -0.953, b: -0.055, c: 0.082, d: 0.85, tx: 10.65, ty: -30.45},
						transform: [10.65, -30.45, 0.955, 0.854, 0.096, -3.084, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -0.954, b: -0.055, c: 0.094, d: 0.85, tx: 10.2, ty: -30.45},
						transform: [10.2, -30.45, 0.956, 0.855, 0.11, -3.084, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -1.048, b: -0.056, c: 0.101, d: 0.804, tx: 13.1, ty: -28.5},
						transform: [13.1, -28.5, 1.05, 0.811, 0.125, -3.089, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -0.954, b: -0.055, c: 0.094, d: 0.85, tx: 10.2, ty: -30.45},
						transform: [10.2, -30.45, 0.956, 0.855, 0.11, -3.084, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 18",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 10,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_torso_back_more_x",
						instancename: "",
						matrix: {a: 0.407, b: 1.115, c: -0.881, d: 0.482, tx: 37.2, ty: -29.5},
						transform: [37.2, -29.5, 1.186, 1.004, -1.07, 1.221, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_torso_back_more_x",
						instancename: "",
						matrix: {a: 0.155, b: 1.101, c: -1.183, d: 0.192, tx: 43.4, ty: -11.9},
						transform: [43.4, -11.9, 1.112, 1.199, -1.41, 1.431, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_torso_back_more_x",
						instancename: "",
						matrix: {a: 0.024, b: 1.123, c: -1.059, d: 0.16, tx: 33.1, ty: -13.15},
						transform: [33.1, -13.15, 1.123, 1.071, -1.421, 1.549, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 63,
					},
				]
			},
			{
				name: "Layer 19",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 10,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_backpackside_x_f0",
						instancename: "",
						matrix: {a: 0.083, b: -0.977, c: -0.983, d: -0.132, tx: 24.75, ty: -55.65},
						transform: [24.75, -55.65, 0.981, 0.992, -1.704, -1.486, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_backpackside_x_f0",
						instancename: "",
						matrix: {a: 0.272, b: -0.951, c: -1.009, d: -0.291, tx: 39.35, ty: -37.3},
						transform: [39.35, -37.3, 0.99, 1.05, -1.851, -1.292, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_backpackside_x_f0",
						instancename: "",
						matrix: {a: 0.401, b: -0.905, c: -0.96, d: -0.427, tx: 31.35, ty: -40.5},
						transform: [31.35, -40.5, 0.99, 1.05, -1.989, -1.154, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 63,
					},
				]
			},
			{
				name: "gumball_leg_6_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: -0.029, b: -1.111, c: 0.924, d: 0.61, tx: 28.15, ty: -61.25},
						transform: [28.15, -61.25, 1.112, 1.107, 0.988, -1.597, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: -0.648, b: -0.813, c: 0.834, d: -0.274, tx: 22.25, ty: -80.25},
						transform: [22.25, -80.25, 1.04, 0.878, 1.888, -2.244, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_leg_6_x",
						instancename: "",
						matrix: {a: -0.345, b: -1.041, c: 1.017, d: 0.173, tx: 15.7, ty: -61.7},
						transform: [15.7, -61.7, 1.097, 1.032, 1.403, -1.891, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: -0.986, b: 0.109, c: -0.075, d: 0.83, tx: -2.15, ty: -34.7},
						transform: [-2.15, -34.7, 0.991, 0.834, -0.09, 3.032, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: -1.032, b: -0.065, c: 0.174, d: 1.026, tx: -10.4, ty: -37.05},
						transform: [-10.4, -37.05, 1.034, 1.041, 0.168, -3.078, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: -1.122, b: -0.054, c: -0.026, d: 0.845, tx: -2.9, ty: -28.95},
						transform: [-2.9, -28.95, 1.124, 0.845, -0.031, -3.094, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_leg_knee_x",
						instancename: "",
						matrix: {a: -1.098, b: -0.06, c: 0.096, d: 0.943, tx: -8.6, ty: -33.3},
						transform: [-8.6, -33.3, 1.1, 0.947, 0.101, -3.087, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -1.092, b: -0.058, c: -0.3, d: 0.923, tx: 7.05, ty: -32.55},
						transform: [7.05, -32.55, 1.094, 0.971, -0.315, -3.088, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -1.107, b: -0.06, c: 0.242, d: 0.943, tx: -14.2, ty: -33.3},
						transform: [-14.2, -33.3, 1.109, 0.973, 0.251, -3.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -1.098, b: -0.06, c: 0.096, d: 0.943, tx: -8.6, ty: -33.3},
						transform: [-8.6, -33.3, 1.1, 0.947, 0.101, -3.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -1.099, b: -0.06, c: 0.109, d: 0.943, tx: -9.1, ty: -33.3},
						transform: [-9.1, -33.3, 1.101, 0.949, 0.115, -3.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -1.136, b: -0.057, c: 0.05, d: 0.899, tx: -6.4, ty: -31.6},
						transform: [-6.4, -31.6, 1.138, 0.9, 0.055, -3.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_leg_knee2_x",
						instancename: "",
						matrix: {a: -1.099, b: -0.06, c: 0.109, d: 0.943, tx: -9.1, ty: -33.3},
						transform: [-9.1, -33.3, 1.101, 0.949, 0.115, -3.087, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 23",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 63,
					},
				]
			},
			{
				name: "Layer 24",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.767, b: -0.025, c: -0.083, d: -0.862, tx: 70.45, ty: -6.95},
						transform: [70.45, -6.95, 0.767, 0.866, -3.045, -3.109, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.562, 0], [0.803, 0.412], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.742, b: -0.189, c: 0.121, d: -0.856, tx: 56.95, ty: -8.55},
						transform: [56.95, -8.55, 0.766, 0.865, 3.001, -2.893, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.236, 0.286], [0.411, 0.674], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 25,
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.334, b: -0.687, c: 0.772, d: -0.385, tx: 15.25, ty: -22.3},
						transform: [15.25, -22.3, 0.764, 0.862, 2.034, -2.024, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.464, b: -0.607, c: 0.68, d: -0.53, tx: 15.55, ty: -23.25},
						transform: [15.55, -23.25, 0.764, 0.862, 2.233, -2.224, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.531, b: -0.582, c: 0.616, d: -0.565, tx: 14, ty: -22.9},
						transform: [14, -22.9, 0.788, 0.836, 2.313, -2.31, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.573, b: -0.558, c: 0.614, d: -0.541, tx: 17.5, ty: -18.75},
						transform: [17.5, -18.75, 0.799, 0.818, 2.293, -2.37, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.531, b: -0.582, c: 0.616, d: -0.565, tx: 14, ty: -22.9},
						transform: [14, -22.9, 0.788, 0.836, 2.313, -2.31, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.674, b: -0.458, c: 0.421, d: 0.509, tx: 44.35, ty: -42.5},
						transform: [44.35, -42.5, 0.815, 0.661, 0.691, -0.597, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.562, 0], [0.803, 0.412], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.746, b: -0.318, c: 0.334, d: 0.625, tx: 37.2, ty: -50.45},
						transform: [37.2, -50.45, 0.811, 0.709, 0.491, -0.404, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.34, 0.307], [0.654, 0.645], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 25,
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.8, b: 0.011, c: 0.027, d: 0.663, tx: 14, ty: -68.05},
						transform: [14, -68.05, 0.8, 0.664, 0.04, 0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.816, b: 0.274, c: -0.166, d: 0.602, tx: 29.25, ty: -62.65},
						transform: [29.25, -62.65, 0.861, 0.624, -0.269, 0.324, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.843, b: 0.232, c: -0.097, d: 0.609, tx: 23.1, ty: -62.95},
						transform: [23.1, -62.95, 0.875, 0.617, -0.157, 0.268, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.864, b: 0.289, c: -0.121, d: 0.574, tx: 28.45, ty: -55.8},
						transform: [28.45, -55.8, 0.911, 0.586, -0.208, 0.323, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.843, b: 0.232, c: -0.097, d: 0.609, tx: 23.1, ty: -62.95},
						transform: [23.1, -62.95, 0.875, 0.617, -0.157, 0.268, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 21",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.854, b: 0.007, c: -0.023, d: -0.963, tx: 47.5, ty: -6.25},
						transform: [47.5, -6.25, 0.854, 0.963, -3.117, 3.133, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.562, 0], [0.803, 0.412], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
					},
					{
						from: 22,
						to: 25,
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.566, b: -0.642, c: 0.767, d: -0.582, tx: -4.6, ty: -19.1},
						transform: [-4.6, -19.1, 0.856, 0.963, 2.22, -2.293, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.566, b: -0.642, c: 0.767, d: -0.582, tx: -4.6, ty: -19.1},
						transform: [-4.6, -19.1, 0.856, 0.963, 2.22, -2.293, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.614, b: -0.576, c: 0.711, d: -0.672, tx: -5.9, ty: -18.2},
						transform: [-5.9, -18.2, 0.842, 0.978, 2.328, -2.388, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.654, b: -0.557, c: 0.713, d: -0.637, tx: -4.6, ty: -17.25},
						transform: [-4.6, -17.25, 0.859, 0.956, 2.301, -2.437, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.614, b: -0.576, c: 0.711, d: -0.672, tx: -5.9, ty: -18.2},
						transform: [-5.9, -18.2, 0.842, 0.978, 2.328, -2.388, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_head_scared_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 0.966, b: -0.257, c: 0.263, d: 0.991, tx: -2, ty: -112.75},
						transform: [-2, -112.75, 1, 1.025, 0.259, -0.26, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 0.88, b: -0.476, c: 0.487, d: 0.902, tx: -13.05, ty: -131.35},
						transform: [-13.05, -131.35, 1, 1.025, 0.495, -0.496, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 0.903, b: -0.429, c: 0.439, d: 0.926, tx: -11.75, ty: -123},
						transform: [-11.75, -123, 1, 1.025, 0.443, -0.444, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 0.954, b: 0.299, c: -0.307, d: 0.978, tx: 26.85, ty: -98.65},
						transform: [26.85, -98.65, 1, 1.025, -0.304, 0.303, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_head_scared_x_f15",
						instancename: "",
						matrix: {a: -0.943, b: -0.3, c: -0.299, d: 0.98, tx: 84.85, ty: -36.55},
						transform: [84.85, -36.55, 0.99, 1.024, -0.296, -2.834, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.244, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_head_scared_x_f15",
						instancename: "",
						matrix: {a: -1.025, b: -0.115, c: -0.128, d: 0.983, tx: 100.45, ty: -25.2},
						transform: [100.45, -25.2, 1.031, 0.991, -0.129, -3.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_head_scared_x_f15",
						instancename: "",
						matrix: {a: -0.959, b: -0.242, c: -0.239, d: 0.996, tx: 85.45, ty: -23.4},
						transform: [85.45, -23.4, 0.99, 1.024, -0.236, -2.895, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.244, 0.925], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_head_scared_x_f12",
						instancename: "",
						matrix: {a: -0.854, b: -0.52, c: -0.532, d: 0.876, tx: 41.1, ty: -59},
						transform: [41.1, -59, 1, 1.025, -0.546, -2.595, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_head_scared_x_f12",
						instancename: "",
						matrix: {a: -0.989, b: -0.145, c: -0.148, d: 1.014, tx: 2.95, ty: -88},
						transform: [2.95, -88, 1, 1.025, -0.145, -2.996, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_head_scared_x_f12",
						instancename: "",
						matrix: {a: -0.957, b: -0.29, c: -0.297, d: 0.981, tx: 30.35, ty: -75.1},
						transform: [30.35, -75.1, 1, 1.025, -0.294, -2.847, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_head_scared_x_f12",
						instancename: "",
						matrix: {a: -0.977, b: -0.212, c: -0.216, d: 1.002, tx: 23.15, ty: -80.95},
						transform: [23.15, -80.95, 1, 1.025, -0.212, -2.928, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0.293, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_head_scared_x_f12",
						instancename: "",
						matrix: {a: -0.936, b: -0.353, c: -0.361, d: 0.959, tx: 30.65, ty: -71.45},
						transform: [30.65, -71.45, 1, 1.025, -0.36, -2.781, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0.293, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_head_scared_x_f12",
						instancename: "",
						matrix: {a: -0.977, b: -0.212, c: -0.216, d: 1.002, tx: 23.15, ty: -80.95},
						transform: [23.15, -80.95, 1, 1.025, -0.212, -2.928, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 20",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 10,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.979, b: 0.63, c: 0.783, d: 0.602, tx: 46.45, ty: -29.8},
						transform: [46.45, -29.8, 1.164, 0.987, 0.915, 2.57, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.289, 0.418], [0.628, 0.745], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 15,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.405, b: -0.938, c: 0.716, d: 0.14, tx: 48.3, ty: -20.7},
						transform: [48.3, -20.7, 1.022, 0.73, 1.378, -1.163, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.299, 0.908], [0.682, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.304, b: -0.983, c: 0.761, d: 0.045, tx: 52.4, ty: -10.1},
						transform: [52.4, -10.1, 1.029, 0.762, 1.511, -1.271, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_arm_stretched_run_x",
						instancename: "",
						matrix: {a: 0.273, b: -0.98, c: 0.713, d: 0.061, tx: 40.8, ty: -12.35},
						transform: [40.8, -12.35, 1.017, 0.716, 1.485, -1.299, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.802, b: -0.558, c: 0.451, d: 0.578, tx: 19.9, ty: -47},
						transform: [19.9, -47, 0.977, 0.733, 0.663, -0.608, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.562, 0], [0.803, 0.412], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.869, b: 0.212, c: 0.252, d: 0.854, tx: 17.8, ty: -48.5},
						transform: [17.8, -48.5, 0.894, 0.891, 0.287, 2.902, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.16, 0.557], [0.443, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.887, b: 0.062, c: 0.134, d: 0.927, tx: 2.9, ty: -59.9},
						transform: [2.9, -59.9, 0.89, 0.936, 0.143, 3.071, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.16, 0.557], [0.443, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.705, b: 0.392, c: -0.251, d: 0.9, tx: -3.95, ty: -60.95},
						transform: [-3.95, -60.95, 0.807, 0.934, -0.272, 0.508, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.16, 0.557], [0.443, 1], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.413, b: 0.756, c: -0.668, d: 0.71, tx: -6.15, ty: -69.25},
						transform: [-6.15, -69.25, 0.861, 0.975, -0.756, 1.071, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.16, 0.557], [0.443, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.904, b: -0.206, c: -0.138, d: 0.815, tx: -7.05, ty: -66.05},
						transform: [-7.05, -66.05, 0.927, 0.827, -0.168, -2.918, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.16, 0.557], [0.443, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.936, b: -0.002, c: 0.044, d: 0.777, tx: -5.55, ty: -72.55},
						transform: [-5.55, -72.55, 0.936, 0.779, 0.057, -0.002, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 34,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.922, b: 0.323, c: -0.204, d: 0.704, tx: 12.25, ty: -65.3},
						transform: [12.25, -65.3, 0.977, 0.733, -0.283, 0.338, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 47,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.159, c: -0.099, d: 0.735, tx: 3.85, ty: -67.45},
						transform: [3.85, -67.45, 1.006, 0.742, -0.134, -0.158, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 62,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 1.009, b: 0.064, c: -0.14, d: 0.692, tx: 8.35, ty: -61.85},
						transform: [8.35, -61.85, 1.011, 0.706, -0.2, 0.064, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.327, 0], [0, 1], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_arm_stretched_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.159, c: -0.099, d: 0.735, tx: 3.85, ty: -67.45},
						transform: [3.85, -67.45, 1.006, 0.742, -0.134, -0.158, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_die_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_arm_die_x",
						instancename: "",
						matrix: {a: -0.854, b: 0.506, c: 0.515, d: 0.826, tx: -4.9, ty: -91.8},
						transform: [-4.9, -91.8, 0.993, 0.973, 0.558, 2.607, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.073, 1], [0.533, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 8,
						classname: "_gumball_gumball_arm_die_x",
						instancename: "",
						matrix: {a: -0.722, b: 0.676, c: 0.683, d: 0.657, tx: -13.25, ty: -108.15},
						transform: [-13.25, -108.15, 0.989, 0.948, 0.805, 2.389, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.713, 0], [1, 0.449], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_gumball_arm_die_x",
						instancename: "",
						matrix: {a: -0.852, b: 0.524, c: 0.526, d: 0.8, tx: -13.4, ty: -102.5},
						transform: [-13.4, -102.5, 1, 0.957, 0.582, 2.59, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.889, b: 0.17, c: -0.188, d: 0.846, tx: 0.9, ty: -83.6},
						transform: [0.9, -83.6, 0.905, 0.866, -0.219, 0.189, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
					},
					{
						from: 16,
						to: 19,
					},
					{
						from: 20,
						to: 63,
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 19,
					},
					{
						from: 20,
						to: 25,
					},
					{
						from: 26,
						to: 26,
						classname: "_gumball_tears_f0",
						instancename: "",
						matrix: {a: 1.137, b: 0.343, c: -0.395, d: 1.307, tx: -37.95, ty: -106.8},
						transform: [-37.95, -106.8, 1.188, 1.365, -0.293, 0.293, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_tears_f1",
						instancename: "",
						matrix: {a: 1.12, b: 0.392, c: -0.451, d: 1.287, tx: -27.55, ty: -104.3},
						transform: [-27.55, -104.3, 1.187, 1.364, -0.337, 0.337, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 28,
						classname: "_gumball_tears_f2",
						instancename: "",
						matrix: {a: 1.094, b: 0.46, c: -0.528, d: 1.257, tx: -13.45, ty: -100.95},
						transform: [-13.45, -100.95, 1.186, 1.364, -0.398, 0.398, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 29,
						classname: "_gumball_tears_f3",
						instancename: "",
						matrix: {a: 1.085, b: 0.479, c: -0.551, d: 1.247, tx: -8.85, ty: -99.9},
						transform: [-8.85, -99.9, 1.186, 1.364, -0.416, 0.416, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 30,
						classname: "_gumball_tears_f4",
						instancename: "",
						matrix: {a: 1.081, b: 0.489, c: -0.562, d: 1.243, tx: -7, ty: -99.45},
						transform: [-7, -99.45, 1.186, 1.364, -0.425, 0.425, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 31,
						classname: "_gumball_tears_f5",
						instancename: "",
						matrix: {a: 1.081, b: 0.493, c: -0.567, d: 1.242, tx: -6.5, ty: -99.3},
						transform: [-6.5, -99.3, 1.188, 1.365, -0.428, 0.428, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_gumball_tears_f6",
						instancename: "",
						matrix: {a: 1.098, b: 0.451, c: -0.518, d: 1.262, tx: -11.3, ty: -101.05},
						transform: [-11.3, -101.05, 1.186, 1.364, -0.389, 0.389, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 33,
						classname: "_gumball_tears_f7",
						instancename: "",
						matrix: {a: 1.109, b: 0.422, c: -0.485, d: 1.275, tx: -14.8, ty: -102.2},
						transform: [-14.8, -102.2, 1.186, 1.364, -0.363, 0.363, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 34,
						to: 34,
						classname: "_gumball_tears_f8",
						instancename: "",
						matrix: {a: 1.113, b: 0.412, c: -0.474, d: 1.279, tx: -15.85, ty: -102.5},
						transform: [-15.85, -102.5, 1.187, 1.364, -0.355, 0.355, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 35,
						to: 35,
						classname: "_gumball_tears_f9",
						instancename: "",
						matrix: {a: 1.114, b: 0.413, c: -0.475, d: 1.28, tx: -16.1, ty: -102.55},
						transform: [-16.1, -102.55, 1.188, 1.365, -0.355, 0.355, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 36,
						classname: "_gumball_tears_f10",
						instancename: "",
						matrix: {a: 1.112, b: 0.412, c: -0.474, d: 1.279, tx: -15.9, ty: -102.55},
						transform: [-15.9, -102.55, 1.186, 1.364, -0.355, 0.355, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 37,
						classname: "_gumball_tears_f11",
						instancename: "",
						matrix: {a: 1.105, b: 0.431, c: -0.495, d: 1.27, tx: -14.85, ty: -102.15},
						transform: [-14.85, -102.15, 1.186, 1.363, -0.372, 0.372, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 38,
						to: 38,
						classname: "_gumball_tears_f0",
						instancename: "",
						matrix: {a: 1.091, b: 0.464, c: -0.534, d: 1.254, tx: -12.55, ty: -101.3},
						transform: [-12.55, -101.3, 1.185, 1.363, -0.402, 0.402, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 39,
						classname: "_gumball_tears_f1",
						instancename: "",
						matrix: {a: 1.08, b: 0.488, c: -0.561, d: 1.241, tx: -11, ty: -100.7},
						transform: [-11, -100.7, 1.185, 1.362, -0.424, 0.424, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 40,
						classname: "_gumball_tears_f2",
						instancename: "",
						matrix: {a: 1.074, b: 0.503, c: -0.578, d: 1.235, tx: -10.05, ty: -100.3},
						transform: [-10.05, -100.3, 1.186, 1.364, -0.438, 0.438, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 41,
						classname: "_gumball_tears_f3",
						instancename: "",
						matrix: {a: 1.062, b: 0.525, c: -0.604, d: 1.221, tx: -8.4, ty: -99.75},
						transform: [-8.4, -99.75, 1.185, 1.362, -0.459, 0.459, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 42,
						to: 42,
						classname: "_gumball_tears_f4",
						instancename: "",
						matrix: {a: 1.056, b: 0.539, c: -0.62, d: 1.213, tx: -7.25, ty: -99.3},
						transform: [-7.25, -99.3, 1.185, 1.363, -0.473, 0.472, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 43,
						to: 43,
						classname: "_gumball_tears_f5",
						instancename: "",
						matrix: {a: 1.051, b: 0.549, c: -0.631, d: 1.208, tx: -6.4, ty: -99},
						transform: [-6.4, -99, 1.186, 1.363, -0.482, 0.482, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 44,
						to: 44,
						classname: "_gumball_tears_f6",
						instancename: "",
						matrix: {a: 1.046, b: 0.558, c: -0.642, d: 1.203, tx: -5.75, ty: -98.8},
						transform: [-5.75, -98.8, 1.186, 1.363, -0.49, 0.49, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 45,
						to: 45,
						classname: "_gumball_tears_f7",
						instancename: "",
						matrix: {a: 1.044, b: 0.563, c: -0.647, d: 1.2, tx: -5.35, ty: -98.65},
						transform: [-5.35, -98.65, 1.186, 1.363, -0.495, 0.495, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 46,
						classname: "_gumball_tears_f8",
						instancename: "",
						matrix: {a: 1.042, b: 0.567, c: -0.652, d: 1.197, tx: -5.1, ty: -98.55},
						transform: [-5.1, -98.55, 1.186, 1.363, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 47,
						to: 47,
						classname: "_gumball_tears_f9",
						instancename: "",
						matrix: {a: 1.041, b: 0.568, c: -0.653, d: 1.197, tx: -5, ty: -98.45},
						transform: [-5, -98.45, 1.186, 1.363, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 48,
						classname: "_gumball_tears_f10",
						instancename: "",
						matrix: {a: 1.041, b: 0.572, c: -0.657, d: 1.197, tx: -4.9, ty: -98.45},
						transform: [-4.9, -98.45, 1.188, 1.365, -0.502, 0.502, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 49,
						to: 49,
						classname: "_gumball_tears_f11",
						instancename: "",
						matrix: {a: 1.041, b: 0.568, c: -0.652, d: 1.197, tx: -5.1, ty: -98.5},
						transform: [-5.1, -98.5, 1.186, 1.363, -0.499, 0.499, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 50,
						to: 50,
						classname: "_gumball_tears_f0",
						instancename: "",
						matrix: {a: 1.046, b: 0.559, c: -0.642, d: 1.203, tx: -5.65, ty: -98.8},
						transform: [-5.65, -98.8, 1.186, 1.363, -0.49, 0.49, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 51,
						to: 51,
						classname: "_gumball_tears_f1",
						instancename: "",
						matrix: {a: 1.056, b: 0.539, c: -0.619, d: 1.214, tx: -7.35, ty: -99.45},
						transform: [-7.35, -99.45, 1.185, 1.363, -0.472, 0.472, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 52,
						to: 52,
						classname: "_gumball_tears_f2",
						instancename: "",
						matrix: {a: 1.067, b: 0.516, c: -0.593, d: 1.226, tx: -9.05, ty: -100},
						transform: [-9.05, -100, 1.185, 1.362, -0.45, 0.45, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 53,
						to: 53,
						classname: "_gumball_tears_f3",
						instancename: "",
						matrix: {a: 1.074, b: 0.503, c: -0.578, d: 1.235, tx: -10.05, ty: -100.3},
						transform: [-10.05, -100.3, 1.186, 1.364, -0.438, 0.438, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 54,
						classname: "_gumball_tears_f4",
						instancename: "",
						matrix: {a: 1.086, b: 0.474, c: -0.545, d: 1.249, tx: -11.85, ty: -101},
						transform: [-11.85, -101, 1.185, 1.362, -0.412, 0.412, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_gumball_tears_f5",
						instancename: "",
						matrix: {a: 1.095, b: 0.455, c: -0.523, d: 1.258, tx: -13.1, ty: -101.45},
						transform: [-13.1, -101.45, 1.186, 1.363, -0.394, 0.394, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 56,
						classname: "_gumball_tears_f6",
						instancename: "",
						matrix: {a: 1.099, b: 0.445, c: -0.511, d: 1.264, tx: -14, ty: -101.75},
						transform: [-14, -101.75, 1.186, 1.363, -0.385, 0.384, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 57,
						classname: "_gumball_tears_f7",
						instancename: "",
						matrix: {a: 1.105, b: 0.431, c: -0.496, d: 1.27, tx: -14.65, ty: -102.05},
						transform: [-14.65, -102.05, 1.186, 1.363, -0.372, 0.372, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 58,
						to: 58,
						classname: "_gumball_tears_f8",
						instancename: "",
						matrix: {a: 1.107, b: 0.426, c: -0.49, d: 1.273, tx: -15.15, ty: -102.2},
						transform: [-15.15, -102.2, 1.186, 1.364, -0.367, 0.367, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_tears_f9",
						instancename: "",
						matrix: {a: 1.109, b: 0.421, c: -0.484, d: 1.275, tx: -15.55, ty: -102.4},
						transform: [-15.55, -102.4, 1.186, 1.364, -0.363, 0.363, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 60,
						classname: "_gumball_tears_f10",
						instancename: "",
						matrix: {a: 1.111, b: 0.416, c: -0.479, d: 1.277, tx: -15.85, ty: -102.5},
						transform: [-15.85, -102.5, 1.186, 1.364, -0.359, 0.359, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 61,
						to: 61,
						classname: "_gumball_tears_f11",
						instancename: "",
						matrix: {a: 1.113, b: 0.412, c: -0.474, d: 1.279, tx: -16, ty: -102.5},
						transform: [-16, -102.5, 1.186, 1.364, -0.355, 0.355, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 62,
						classname: "_gumball_tears_f0",
						instancename: "",
						matrix: {a: 1.113, b: 0.412, c: -0.473, d: 1.279, tx: -16.1, ty: -102.55},
						transform: [-16.1, -102.55, 1.186, 1.364, -0.354, 0.354, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_tears_f1",
						instancename: "",
						matrix: {a: 1.114, b: 0.413, c: -0.475, d: 1.28, tx: -16.1, ty: -102.55},
						transform: [-16.1, -102.55, 1.188, 1.365, -0.355, 0.355, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 34,
					},
					{
						from: 35,
						to: 63,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 62,
					},
					{
						from: 63,
						to: 63,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_gumball_gumball_enterdoor": {
		type: "movieclip",
		fps: 30,
		totalFrames: 28,
		labels: {},
		layers: [
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.883, b: -0.383, c: -0.338, d: 0.828, tx: -43.3, ty: -77.05},
						transform: [-43.3, -77.05, 0.963, 0.894, -0.388, -2.732, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.888, b: -0.372, c: -0.327, d: 0.833, tx: -37.45, ty: -60.6},
						transform: [-37.45, -60.6, 0.963, 0.895, -0.374, -2.746, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_backpack_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.962, b: -0.273, c: -0.274, d: 0.961, tx: -14.8, ty: -69.15},
						transform: [-14.8, -69.15, 1, 1, -0.278, -2.865, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.966, b: -0.26, c: -0.261, d: 0.966, tx: -12.15, ty: -57},
						transform: [-12.15, -57, 1, 1.001, -0.264, -2.879, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.982, b: -0.068, c: 0.152, d: 0.995, tx: 19.9, ty: -82.65},
						transform: [19.9, -82.65, 0.984, 1.007, 0.152, -0.069, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.6327], [0.666, 0.9657], [1, 1]],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.931, b: -0.32, c: 0.405, d: 0.922, tx: 20.85, ty: -70.65},
						transform: [20.85, -70.65, 0.984, 1.007, 0.413, -0.331, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.874, b: -0.68, c: 0.623, d: -0.89, tx: 21.9, ty: -50.25},
						transform: [21.9, -50.25, 1.107, 1.086, 2.531, -2.48, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.6327], [0.666, 0.9657], [1, 1]],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -1.02, b: -0.431, c: 0.372, d: -1.02, tx: 31.15, ty: -39.85},
						transform: [31.15, -39.85, 1.107, 1.086, 2.792, -2.742, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_hand_grab2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.152, b: -1.035, c: 1.067, d: -0.079, tx: 42, ty: -73.75},
						transform: [42, -73.75, 1.046, 1.07, 1.645, -1.717, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.6327], [0.666, 0.9657], [1, 1]],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.415, b: -0.96, c: 1.01, d: -0.352, tx: 44.5, ty: -67.75},
						transform: [44.5, -67.75, 1.046, 1.07, 1.906, -1.979, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.202, b: -0.979, c: 1.067, d: -0.22, tx: -19.1, ty: -41.8},
						transform: [-19.1, -41.8, 1, 1.089, 1.774, -1.774, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.202, b: -0.951, c: 1.067, d: -0.213, tx: -19.1, ty: -37.35},
						transform: [-19.1, -37.35, 0.972, 1.088, 1.768, -1.78, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_leg_rect_x",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.143, d: 1, tx: 6.1, ty: -35.6},
						transform: [6.1, -35.6, 1, 1.01, 0.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.317, 0.54], [0.659, 0.853], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 0.663, b: -0.727, c: 0.741, d: 0.52, tx: -1.6, ty: -37.35},
						transform: [-1.6, -37.35, 0.984, 0.905, 0.959, -0.831, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 5,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 0.615, b: -0.768, c: 0.773, d: 0.471, tx: 1.65, ty: -35.4},
						transform: [1.65, -35.4, 0.984, 0.905, 1.023, -0.896, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.05, c: -0.018, d: 1.002, tx: -0.35, ty: -56.55},
						transform: [-0.35, -56.55, 1, 1.002, -0.018, -0.05, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.049, c: -0.018, d: 0.973, tx: -0.35, ty: -51.7},
						transform: [-0.35, -51.7, 1, 0.973, -0.019, -0.049, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_waist_side2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 1.008, b: 0.029, c: -0.043, d: 0.991, tx: -7, ty: -41.6},
						transform: [-7, -41.6, 1.008, 0.992, -0.043, 0.029, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 1.008, b: 0.028, c: -0.043, d: 0.962, tx: -7, ty: -37.2},
						transform: [-7, -37.2, 1.008, 0.963, -0.044, 0.028, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_leg_1_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.143, d: 1, tx: -12.1, ty: -35.6},
						transform: [-12.1, -35.6, 1, 1.01, 0.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.127, d: 0.863, tx: -11.55, ty: -30.65},
						transform: [-11.55, -30.65, 1, 0.872, 0.146, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.814, b: -0.597, c: -0.632, d: 0.845, tx: -14.25, ty: -85.2},
						transform: [-14.25, -85.2, 1.009, 1.055, -0.642, -2.509, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.569, b: -0.814, c: -0.877, d: 0.562, tx: -14.05, ty: -79.95},
						transform: [-14.05, -79.95, 0.994, 1.042, -1.001, -2.181, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -0.954, b: -0.3, c: -0.3, d: 0.954, tx: 9.3, ty: -101.3},
						transform: [9.3, -101.3, 1, 1, -0.305, -2.836, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -0.929, b: -0.369, c: -0.369, d: 0.929, tx: 6.45, ty: -87.25},
						transform: [6.45, -87.25, 1, 1, -0.378, -2.763, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 12,
					},
					{
						from: 13,
						to: 23,
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 1.097, b: -0.16, c: -0.091, d: -1.167, tx: -32.2, ty: -56.05},
						transform: [-32.2, -56.05, 1.109, 1.171, -3.064, -0.145, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 1.107, b: -0.04, c: 0.025, d: -1.137, tx: -40.6, ty: -59.15},
						transform: [-40.6, -59.15, 1.108, 1.137, 3.119, -0.036, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_hand_grab2_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: 0.652, b: -0.882, c: -0.882, d: -0.652, tx: -37.8, ty: -88.95},
						transform: [-37.8, -88.95, 1.097, 1.097, -2.208, -0.934, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: 0.412, b: -0.982, c: -1.019, d: -0.406, tx: -43, ty: -90.65},
						transform: [-43, -90.65, 1.065, 1.097, -1.95, -1.174, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "Layer 5",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_mouth_x_f0",
						instancename: "",
						matrix: {a: 0.962, b: 0.271, c: -0.271, d: 0.962, tx: 23.3, ty: -130.75},
						transform: [23.3, -130.75, 1, 1, -0.275, 0.275, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.315, 0.73], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 5,
						classname: "_gumball_mouth_x_f0",
						instancename: "",
						matrix: {a: 0.916, b: 0.401, c: -0.401, d: 0.916, tx: 22.6, ty: -113.85},
						transform: [22.6, -113.85, 1, 1, -0.413, 0.413, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 23,
					},
				]
			},
			{
				name: "gumball_leg_rect_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 10,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.057, d: 0.76, tx: 18.8, ty: -41.55},
						transform: [18.8, -41.55, 1, 0.763, -0.075, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.082, d: 0.85, tx: 20.15, ty: -46.35},
						transform: [20.15, -46.35, 1, 0.854, -0.096, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -0.944, b: 0, c: -0.238, d: 0.952, tx: -11.6, ty: -33.9},
						transform: [-11.6, -33.9, 0.944, 0.981, -0.245, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.216, d: 0.864, tx: -13.45, ty: -30.95},
						transform: [-13.45, -30.95, 1, 0.89, -0.245, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 21,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.015, d: 0.82, tx: -17.5, ty: -44.75},
						transform: [-17.5, -44.75, 1, 0.82, 0.018, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.057, d: 0.853, tx: -19.8, ty: -46.5},
						transform: [-19.8, -46.5, 1, 0.855, 0.067, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.244, d: 0.93, tx: 13.6, ty: -33.85},
						transform: [13.6, -33.85, 1, 0.961, 0.257, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.174, d: 0.831, tx: 16.1, ty: -30.15},
						transform: [16.1, -30.15, 1, 0.849, 0.207, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_curved_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 10,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.383, b: -0.845, c: 0.941, d: 0.539, tx: 13.3, ty: -87.1},
						transform: [13.3, -87.1, 0.927, 1.084, 1.051, -1.145, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.001, b: -1, c: 1.08, d: 0.072, tx: 30.35, ty: -104.8},
						transform: [30.35, -104.8, 1, 1.082, 1.504, -1.57, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.432, b: 0.655, c: -0.795, d: 0.484, tx: -11.2, ty: -75.9},
						transform: [-11.2, -75.9, 0.785, 0.93, -1.024, 0.988, NaN],
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
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.441, c: -0.55, d: 0.751, tx: -11.15, ty: -71.9},
						transform: [-11.15, -71.9, 0.785, 0.93, -0.632, 0.596, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 21,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.994, b: -0.282, c: -0.35, d: 0.812, tx: -36.25, ty: -81.2},
						transform: [-36.25, -81.2, 1.033, 0.884, -0.406, -2.865, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.724, b: -0.768, c: -0.81, d: 0.509, tx: -36.25, ty: -78.3},
						transform: [-36.25, -78.3, 1.056, 0.957, -1.01, -2.326, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: -0.043, b: 0.82, c: 0.874, d: 0.319, tx: 9.1, ty: -75.6},
						transform: [9.1, -75.6, 0.821, 0.93, 1.22, 1.623, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: -0.65, b: 0.441, c: 0.55, d: 0.751, tx: 12.3, ty: -71.9},
						transform: [12.3, -71.9, 0.785, 0.93, 0.632, 2.545, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_curved_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 10,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.809, b: -0.532, c: -0.543, d: 0.74, tx: -3.15, ty: -80.1},
						transform: [-3.15, -80.1, 0.968, 0.918, -0.633, -2.56, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.462, b: -0.887, c: -0.835, d: 0.468, tx: -3.7, ty: -94.85},
						transform: [-3.7, -94.85, 1, 0.957, -1.06, -2.051, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.131, b: 0.866, c: 0.913, d: 0.23, tx: 15.05, ty: -81.4},
						transform: [15.05, -81.4, 0.876, 0.942, 1.324, 1.721, NaN],
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
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.645, b: 0.693, c: 0.64, d: 0.574, tx: 10.9, ty: -73.65},
						transform: [10.9, -73.65, 0.947, 0.859, 0.84, 2.32, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 21,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.478, b: -0.94, c: 0.689, d: 0.497, tx: -4.7, ty: -82.95},
						transform: [-4.7, -82.95, 1.054, 0.85, 0.946, -1.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.009, b: -1.05, c: 0.914, d: 0.086, tx: -1.85, ty: -85.35},
						transform: [-1.85, -85.35, 1.05, 0.918, 1.477, -1.579, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.446, b: 0.764, c: -0.877, d: 0.325, tx: -19.85, ty: -79.3},
						transform: [-19.85, -79.3, 0.885, 0.935, -1.216, 1.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.81, b: 0.526, c: -0.573, d: 0.616, tx: -12.6, ty: -74.25},
						transform: [-12.6, -74.25, 0.966, 0.841, -0.749, 0.576, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 10,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.922, b: -0.333, c: 0.442, d: 0.845, tx: 11.6, ty: -59.85},
						transform: [11.6, -59.85, 0.98, 0.954, 0.482, -0.347, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.933, b: -0.372, c: 0.335, d: 1.038, tx: 14.05, ty: -66.75},
						transform: [14.05, -66.75, 1.005, 1.09, 0.312, -0.38, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.933, b: -0.348, c: 0.335, d: 0.971, tx: 3.75, ty: -56.2},
						transform: [3.75, -56.2, 0.996, 1.027, 0.332, -0.357, NaN],
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
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.933, b: -0.348, c: 0.335, d: 0.971, tx: 3.75, ty: -52.2},
						transform: [3.75, -52.2, 0.996, 1.027, 0.332, -0.357, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 21,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -0.997, b: -0.027, c: -0.169, d: 0.998, tx: -19.2, ty: -62.5},
						transform: [-19.2, -62.5, 0.998, 1.012, -0.167, -3.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -0.997, b: -0.027, c: -0.198, d: 0.998, tx: -17.35, ty: -62.5},
						transform: [-17.35, -62.5, 0.997, 1.017, -0.196, -3.114, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -0.945, b: -0.316, c: -0.301, d: 0.982, tx: -5.35, ty: -55.35},
						transform: [-5.35, -55.35, 0.996, 1.027, -0.298, -2.819, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -0.933, b: -0.348, c: -0.335, d: 0.971, tx: -2.6, ty: -52.2},
						transform: [-2.6, -52.2, 0.996, 1.027, -0.332, -2.784, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_head_scared_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 10,
						classname: "_gumball_gumball_head_scared_x_f19",
						instancename: "",
						matrix: {a: 0.995, b: -0.095, c: 0.095, d: 0.995, tx: 11.35, ty: -97.45},
						transform: [11.35, -97.45, 1, 1, 0.095, -0.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_head_scared_x_f19",
						instancename: "",
						matrix: {a: 0.978, b: -0.207, c: 0.207, d: 0.978, tx: 7.4, ty: -114.2},
						transform: [7.4, -114.2, 1, 1, 0.208, -0.208, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_head_scared_x_f19",
						instancename: "",
						matrix: {a: 0.987, b: -0.16, c: 0.16, d: 0.987, tx: 1.65, ty: -94.95},
						transform: [1.65, -94.95, 1, 1, 0.161, -0.161, NaN],
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
						classname: "_gumball_gumball_head_scared_x_f19",
						instancename: "",
						matrix: {a: 0.987, b: -0.16, c: 0.16, d: 0.987, tx: 1.65, ty: -90.95},
						transform: [1.65, -90.95, 1, 1, 0.161, -0.161, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 21,
						classname: "_gumball_gumball_head_scared_x_f19",
						instancename: "",
						matrix: {a: -0.999, b: 0.042, c: 0.042, d: 0.999, tx: -22.5, ty: -96.05},
						transform: [-22.5, -96.05, 1, 1, 0.042, 3.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_gumball_gumball_head_scared_x_f19",
						instancename: "",
						matrix: {a: -0.98, b: 0.197, c: 0.197, d: 0.98, tx: -26.6, ty: -102.3},
						transform: [-26.6, -102.3, 1, 1, 0.199, 2.943, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_gumball_head_scared_x_f19",
						instancename: "",
						matrix: {a: -0.992, b: -0.126, c: -0.126, d: 0.992, tx: -4.6, ty: -94.2},
						transform: [-4.6, -94.2, 1, 1, -0.126, -3.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_head_scared_x_f19",
						instancename: "",
						matrix: {a: -0.987, b: -0.16, c: -0.16, d: 0.987, tx: -0.5, ty: -90.95},
						transform: [-0.5, -90.95, 1, 1, -0.161, -2.981, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_waist_side2_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 10,
						classname: "_gumball_gumball_waist_back_x",
						instancename: "",
						matrix: {a: 0.997, b: -0.078, c: 0.151, d: 0.991, tx: 9.05, ty: -45.45},
						transform: [9.05, -45.45, 1, 1.003, 0.151, -0.078, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_waist_back_x",
						instancename: "",
						matrix: {a: 0.994, b: -0.113, c: 0.185, d: 0.985, tx: 11.7, ty: -49.85},
						transform: [11.7, -49.85, 1, 1.003, 0.186, -0.113, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_waist_back_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: -0.008, d: 1.003, tx: -1.2, ty: -40.3},
						transform: [-1.2, -40.3, 1, 1.003, -0.008, 3.077, NaN],
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
						classname: "_gumball_gumball_waist_back_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: -0.008, d: 1.003, tx: -1.2, ty: -36.3},
						transform: [-1.2, -36.3, 1, 1.003, -0.008, 3.077, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 21,
						classname: "_gumball_gumball_waist_back_x",
						instancename: "",
						matrix: {a: -1, b: 0.249, c: 0.132, d: 0.989, tx: -11.75, ty: -47.6},
						transform: [-11.75, -47.6, 1.031, 0.998, 0.133, 2.898, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_gumball_gumball_waist_back_x",
						instancename: "",
						matrix: {a: -0.992, b: 0.192, c: 0.111, d: 0.992, tx: -11.1, ty: -47.2},
						transform: [-11.1, -47.2, 1.01, 0.998, 0.111, 2.95, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_gumball_waist_back_x",
						instancename: "",
						matrix: {a: 1.013, b: 0.018, c: 0.055, d: 1.002, tx: 0.35, ty: -39.25},
						transform: [0.35, -39.25, 1.014, 1.004, 0.055, 0.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_waist_back_x",
						instancename: "",
						matrix: {a: 1.012, b: 0.053, c: 0.021, d: 1.004, tx: 2.55, ty: -35.85},
						transform: [2.55, -35.85, 1.014, 1.004, 0.021, 0.052, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumbal_leg_back_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 9,
						classname: "_gumball_gumball_leg_back_x_f0",
						instancename: "",
						matrix: {a: 0.906, b: 0.348, c: -0.414, d: 0.864, tx: 0, ty: -38.4},
						transform: [0, -38.4, 0.971, 0.958, -0.447, 0.366, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.4], [0.909, 0.572], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_gumball_leg_back_x_f0",
						instancename: "",
						matrix: {a: 0.613, b: 0.818, c: -0.79, d: 0.636, tx: -3.85, ty: -43.65},
						transform: [-3.85, -43.65, 1.023, 1.014, -0.893, 0.928, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -0.781, b: -0.647, c: -0.606, d: 0.602, tx: -2.35, ty: -47.2},
						transform: [-2.35, -47.2, 1.014, 0.854, -0.788, -2.449, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -0.74, b: -0.693, c: -0.641, d: 0.564, tx: -2.35, ty: -47.2},
						transform: [-2.35, -47.2, 1.014, 0.854, -0.849, -2.389, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_leg_9_x_f0",
						instancename: "",
						matrix: {a: 0.942, b: -0.332, c: 0.286, d: 0.869, tx: 12.05, ty: -39},
						transform: [12.05, -39, 0.999, 0.915, 0.318, -0.339, NaN],
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
						classname: "_gumball_gumball_leg_9_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.049, d: 0.86, tx: 11.45, ty: -35.95},
						transform: [11.45, -35.95, 1, 0.861, 0.057, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 20,
						classname: "_gumball_gumball_leg_back_x_f0",
						instancename: "",
						matrix: {a: -0.512, b: 0.906, c: 0.844, d: 0.458, tx: 4.65, ty: -45.35},
						transform: [4.65, -45.35, 1.041, 0.961, 1.074, 2.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.4], [0.909, 0.572], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_gumball_gumball_leg_back_x_f0",
						instancename: "",
						matrix: {a: -0.101, b: 1.048, c: 0.931, d: 0.236, tx: 3.95, ty: -45.55},
						transform: [3.95, -45.55, 1.053, 0.961, 1.323, 1.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 0.472, b: -0.934, c: 0.728, d: 0.379, tx: 2.8, ty: -48.7},
						transform: [2.8, -48.7, 1.046, 0.82, 1.09, -1.102, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 0.411, b: -0.963, c: 0.751, d: 0.331, tx: 2.8, ty: -48.75},
						transform: [2.8, -48.75, 1.046, 0.82, 1.156, -1.167, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -0.89, b: 0.039, c: -0.238, d: 0.952, tx: -14.05, ty: -34.25},
						transform: [-14.05, -34.25, 0.891, 0.981, -0.245, 3.098, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 25,
						to: 26,
						classname: "_gumball_gumball_leg_9_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0.005, c: -0.042, d: 0.86, tx: -10.85, ty: -36.7},
						transform: [-10.85, -36.7, 1, 0.861, -0.048, 3.136, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_leg_9_x_f0",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.049, d: 0.86, tx: -10.3, ty: -35.95},
						transform: [-10.3, -35.95, 1, 0.861, -0.057, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 10,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.744, b: 0.598, c: -0.728, d: -0.771, tx: 19.8, ty: -42.4},
						transform: [19.8, -42.4, 0.955, 1.061, -2.385, 2.465, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 12,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.683, b: 0.73, c: -0.795, d: -0.745, tx: 21.6, ty: -46.9},
						transform: [21.6, -46.9, 1, 1.089, -2.323, 2.323, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.938, b: -0.26, c: 0.213, d: -1.027, tx: -4, ty: -35.15},
						transform: [-4, -35.15, 0.974, 1.049, 2.937, -2.872, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.708, b: -0.668, c: 0.668, d: -0.809, tx: -6.4, ty: -31.55},
						transform: [-6.4, -31.55, 0.974, 1.049, 2.451, -2.385, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 21,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.868, b: 0.422, c: 0.533, d: -0.996, tx: -17.3, ty: -39.9},
						transform: [-17.3, -39.9, 0.965, 1.13, 2.65, 0.453, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 23,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.749, b: 0.587, c: 0.752, d: -0.864, tx: -20.1, ty: -39.6},
						transform: [-20.1, -39.6, 0.952, 1.146, 2.425, 0.665, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.831, b: 0.507, c: 0.604, d: -0.858, tx: -3.75, ty: -35.5},
						transform: [-3.75, -35.5, 0.974, 1.049, 2.528, 0.548, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.937, b: 0.263, c: 0.349, d: -0.989, tx: -1.25, ty: -31.95},
						transform: [-1.25, -31.95, 0.974, 1.049, 2.802, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_backpack_back_x",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 9,
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: -0.062, c: 0.063, d: 0.998, tx: 22.95, ty: -66.25},
						transform: [22.95, -66.25, 1, 1, 0.063, -0.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.219, 0.622], [0.613, 0.892], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 11,
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 0.988, b: -0.153, c: 0.153, d: 0.987, tx: 23.3, ty: -76.25},
						transform: [23.3, -76.25, 1, 0.999, 0.154, -0.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.347, 0.755], [0.691, 1], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.161, c: 0.162, d: 0.986, tx: 23.25, ty: -76.95},
						transform: [23.25, -76.95, 1, 1, 0.163, -0.161, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 15,
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.045, d: 0.999, tx: 14.65, ty: -66.9},
						transform: [14.65, -66.9, 1, 1, 0.045, -0.044, NaN],
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
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.045, d: 0.999, tx: 11.85, ty: -60.5},
						transform: [11.85, -60.5, 1, 1, 0.045, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 22,
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.998, b: 0.132, c: 0.103, d: 0.988, tx: -22.1, ty: -65.35},
						transform: [-22.1, -65.35, 1.007, 0.993, 0.104, 3.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.985, b: 0.184, c: 0.176, d: 0.982, tx: -28.25, ty: -72.7},
						transform: [-28.25, -72.7, 1.002, 0.998, 0.177, 2.957, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -1, b: -0.01, c: -0.011, d: 1, tx: -14.95, ty: -65},
						transform: [-14.95, -65, 1, 1, -0.011, -3.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_backpack_back_x_f0",
						instancename: "",
						matrix: {a: -0.996, b: -0.091, c: -0.093, d: 0.995, tx: -5.9, ty: -62.95},
						transform: [-5.9, -62.95, 1, 1, -0.093, -3.05, NaN],
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
						to: 12,
					},
					{
						from: 13,
						to: 16,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.15, ty: -108.65},
						transform: [-9.15, -108.65, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 17,
						to: 22,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -46.75, ty: -108.85},
						transform: [-46.75, -108.85, 1, 1, 0, 0, 0],
						alpha: 0.29,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -54.7, ty: -109.1},
						transform: [-54.7, -109.1, 1, 1, 0, 0, 0],
						alpha: 0.71,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 24,
						to: 26,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -25.45, ty: -109.15},
						transform: [-25.45, -109.15, 1, 1, 0, 0, 0],
						alpha: 0.79,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -21.6, ty: -109.15},
						transform: [-21.6, -109.15, 1, 1, 0, 0, 0],
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
						to: 12,
					},
					{
						from: 13,
						to: 13,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 14,
						to: 14,
					},
					{
						from: 15,
						to: 26,
					},
					{
						from: 27,
						to: 27,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gumball_gumball_exitdoor": {
		type: "movieclip",
		fps: 30,
		totalFrames: 23,
		labels: {},
		layers: [
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: 0.962, b: -0.046, c: 0.024, d: 0.894, tx: 48.85, ty: -68.4},
						transform: [48.85, -68.4, 0.963, 0.894, 0.027, -0.048, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: 0.96, b: -0.08, c: 0.055, d: 0.893, tx: 48.95, ty: -83.35},
						transform: [48.95, -83.35, 0.963, 0.894, 0.062, -0.083, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: 0.96, b: -0.08, c: 0.055, d: 0.893, tx: 44.55, ty: -71.35},
						transform: [44.55, -71.35, 0.963, 0.894, 0.062, -0.083, NaN],
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
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: 0.963, b: -0.013, c: -0.006, d: 0.894, tx: 38.7, ty: -64.65},
						transform: [38.7, -64.65, 0.963, 0.894, -0.007, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 11,
						to: 16,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.935, b: 0.218, c: 0.195, d: 0.876, tx: -42.7, ty: -60},
						transform: [-42.7, -60, 0.96, 0.897, 0.219, 2.913, NaN],
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
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.956, b: 0.111, c: 0.122, d: 0.886, tx: -58.7, ty: -70.5},
						transform: [-58.7, -70.5, 0.963, 0.894, 0.137, 3.026, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -1.06, b: -0.118, c: -0.08, d: 0.891, tx: -40.3, ty: -76.65},
						transform: [-40.3, -76.65, 1.066, 0.894, -0.09, -3.03, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.904, b: -0.333, c: -0.291, d: 0.846, tx: -35.65, ty: -59.8},
						transform: [-35.65, -59.8, 0.963, 0.895, -0.331, -2.788, NaN],
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
				name: "gumball_backpack_back_x",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: -0.062, c: 0.063, d: 0.998, tx: 22.95, ty: -66.25},
						transform: [22.95, -66.25, 1, 1, 0.063, -0.062, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 6,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.987, b: -0.161, c: 0.162, d: 0.986, tx: 23.25, ty: -76.95},
						transform: [23.25, -76.95, 1, 1, 0.163, -0.161, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.045, d: 0.999, tx: 14.65, ty: -66.9},
						transform: [14.65, -66.9, 1, 1, 0.045, -0.044, NaN],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.044, c: 0.045, d: 0.999, tx: 11.85, ty: -60.5},
						transform: [11.85, -60.5, 1, 1, 0.045, -0.044, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 16,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.998, b: 0.132, c: 0.103, d: 0.988, tx: -22.1, ty: -65.35},
						transform: [-22.1, -65.35, 1.007, 0.993, 0.104, 3.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.985, b: 0.184, c: 0.176, d: 0.982, tx: -28.25, ty: -72.7},
						transform: [-28.25, -72.7, 1.002, 0.998, 0.177, 2.957, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.962, b: -0.273, c: -0.274, d: 0.961, tx: -14.8, ty: -69.15},
						transform: [-14.8, -69.15, 1, 1, -0.278, -2.865, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.966, b: -0.26, c: -0.261, d: 0.966, tx: -12.15, ty: -57},
						transform: [-12.15, -57, 1, 1.001, -0.264, -2.879, NaN],
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
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.744, b: 0.598, c: -0.728, d: -0.771, tx: 19.8, ty: -42.4},
						transform: [19.8, -42.4, 0.955, 1.061, -2.385, 2.465, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.683, b: 0.73, c: -0.795, d: -0.745, tx: 21.6, ty: -46.9},
						transform: [21.6, -46.9, 1, 1.089, -2.323, 2.323, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.938, b: -0.26, c: 0.213, d: -1.027, tx: -4, ty: -35.15},
						transform: [-4, -35.15, 0.974, 1.049, 2.937, -2.872, NaN],
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
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.708, b: -0.668, c: 0.668, d: -0.809, tx: -6.4, ty: -31.55},
						transform: [-6.4, -31.55, 0.974, 1.049, 2.451, -2.385, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.868, b: 0.422, c: 0.533, d: -0.996, tx: -17.3, ty: -39.9},
						transform: [-17.3, -39.9, 0.965, 1.13, 2.65, 0.453, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: 0.749, b: 0.587, c: 0.752, d: -0.864, tx: -20.5, ty: -44.8},
						transform: [-20.5, -44.8, 0.952, 1.146, 2.425, 0.665, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.202, b: -0.979, c: 1.067, d: -0.22, tx: -19.1, ty: -41.8},
						transform: [-19.1, -41.8, 1, 1.089, 1.774, -1.774, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.202, b: -0.951, c: 1.067, d: -0.213, tx: -19.1, ty: -37.35},
						transform: [-19.1, -37.35, 0.972, 1.088, 1.768, -1.78, NaN],
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
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 17,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.508, b: 0.843, c: 0.697, d: 0.502, tx: 18.75, ty: -82.2},
						transform: [18.75, -82.2, 0.984, 0.859, 0.947, 2.112, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.554, b: 0.781, c: 0.64, d: 0.538, tx: 16.65, ty: -65.65},
						transform: [16.65, -65.65, 0.958, 0.836, 0.872, 2.187, NaN],
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
				name: "gumball_arm_curved_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.383, b: -0.845, c: 0.941, d: 0.539, tx: 13.3, ty: -87.1},
						transform: [13.3, -87.1, 0.927, 1.084, 1.051, -1.145, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.001, b: -1, c: 1.08, d: 0.072, tx: 26.35, ty: -103.4},
						transform: [26.35, -103.4, 1, 1.082, 1.504, -1.57, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.131, b: 0.866, c: 0.913, d: 0.23, tx: 15.05, ty: -81.4},
						transform: [15.05, -81.4, 0.876, 0.942, 1.324, 1.721, NaN],
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
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.645, b: 0.693, c: 0.612, d: 0.549, tx: 10.7, ty: -73.8},
						transform: [10.7, -73.8, 0.947, 0.822, 0.84, 2.32, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.889, b: -0.466, c: -0.427, d: 0.753, tx: -32.45, ty: -81.4},
						transform: [-32.45, -81.4, 1.003, 0.866, -0.515, -2.659, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.588, b: -0.783, c: -0.764, d: 0.48, tx: -30.9, ty: -90},
						transform: [-30.9, -90, 0.98, 0.902, -1.01, -2.215, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.925, b: -0.212, c: -0.254, d: 0.896, tx: 40.75, ty: -71.85},
						transform: [40.75, -71.85, 0.95, 0.931, -0.276, -2.916, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.366, b: -0.848, c: -0.849, d: 0.316, tx: 39.05, ty: -53.05},
						transform: [39.05, -53.05, 0.924, 0.906, -1.214, -1.978, NaN],
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
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.922, b: -0.333, c: 0.391, d: 0.864, tx: 11.6, ty: -59.85},
						transform: [11.6, -59.85, 0.98, 0.948, 0.425, -0.347, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.971, b: -0.255, c: 0.32, d: 0.992, tx: 13.5, ty: -69.8},
						transform: [13.5, -69.8, 1.004, 1.042, 0.312, -0.257, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.933, b: -0.348, c: 0.335, d: 0.971, tx: 3.75, ty: -56.2},
						transform: [3.75, -56.2, 0.996, 1.027, 0.332, -0.357, NaN],
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
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.933, b: -0.348, c: 0.335, d: 0.971, tx: 3.75, ty: -52.2},
						transform: [3.75, -52.2, 0.996, 1.027, 0.332, -0.357, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -0.997, b: -0.027, c: -0.169, d: 0.998, tx: -19.2, ty: -62.5},
						transform: [-19.2, -62.5, 0.998, 1.012, -0.167, -3.114, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: -0.997, b: -0.027, c: -0.198, d: 0.998, tx: -17.75, ty: -67.7},
						transform: [-17.75, -67.7, 0.997, 1.017, -0.196, -3.114, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.05, c: -0.018, d: 1.002, tx: -0.35, ty: -56.55},
						transform: [-0.35, -56.55, 1, 1.002, -0.018, -0.05, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.049, c: -0.018, d: 0.973, tx: -0.35, ty: -51.7},
						transform: [-0.35, -51.7, 1, 0.973, -0.019, -0.049, NaN],
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
				name: "gumball_waist_side2_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.978, b: -0.201, c: 0.237, d: 0.974, tx: 9.5, ty: -47.35},
						transform: [9.5, -47.35, 0.998, 1.003, 0.239, -0.202, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: 0.98, b: -0.187, c: 0.185, d: 0.985, tx: 11.65, ty: -52.45},
						transform: [11.65, -52.45, 0.997, 1.003, 0.186, -0.188, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: -0.008, d: 1.003, tx: -1.2, ty: -40.7},
						transform: [-1.2, -40.7, 1, 1.003, -0.008, 3.077, NaN],
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
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.998, b: 0.065, c: -0.008, d: 1.003, tx: -1.2, ty: -37.9},
						transform: [-1.2, -37.9, 1, 1.003, -0.008, 3.077, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -1.023, b: 0.121, c: 0.13, d: 0.984, tx: -12.35, ty: -49.35},
						transform: [-12.35, -49.35, 1.03, 0.993, 0.131, 3.023, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_gumball_gumball_waist_side_x",
						instancename: "",
						matrix: {a: -0.992, b: 0.192, c: 0.111, d: 0.992, tx: -11.5, ty: -52.4},
						transform: [-11.5, -52.4, 1.01, 0.998, 0.111, 2.95, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 1.008, b: 0.029, c: -0.043, d: 0.991, tx: -7, ty: -41.6},
						transform: [-7, -41.6, 1.008, 0.992, -0.043, 0.029, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 1.008, b: 0.028, c: -0.043, d: 0.962, tx: -7, ty: -37.2},
						transform: [-7, -37.2, 1.008, 0.963, -0.044, 0.028, NaN],
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
				name: "gumbal_leg_back_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_leg_front_x_f0",
						instancename: "",
						matrix: {a: 0.906, b: 0.348, c: -0.414, d: 0.864, tx: 0, ty: -38.4},
						transform: [0, -38.4, 0.971, 0.958, -0.447, 0.366, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.2, 0.4], [0.909, 0.572], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_leg_front_x_f0",
						instancename: "",
						matrix: {a: 0.613, b: 0.818, c: -0.79, d: 0.636, tx: -2.25, ty: -46.45},
						transform: [-2.25, -46.45, 1.023, 1.014, -0.893, 0.928, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -0.781, b: -0.647, c: -0.606, d: 0.602, tx: -2.35, ty: -47.2},
						transform: [-2.35, -47.2, 1.014, 0.854, -0.788, -2.449, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -0.74, b: -0.693, c: -0.641, d: 0.564, tx: -2.35, ty: -47.2},
						transform: [-2.35, -47.2, 1.014, 0.854, -0.849, -2.389, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_leg_9_x_f0",
						instancename: "",
						matrix: {a: 0.942, b: -0.332, c: 0.286, d: 0.869, tx: 12.05, ty: -39},
						transform: [12.05, -39, 0.999, 0.915, 0.318, -0.339, NaN],
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
						classname: "_gumball_gumball_leg_9_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.049, d: 0.86, tx: 11.45, ty: -35.95},
						transform: [11.45, -35.95, 1, 0.861, 0.057, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 14,
						classname: "_gumball_gumball_leg_front_x_f0",
						instancename: "",
						matrix: {a: -0.512, b: 0.906, c: 0.844, d: 0.458, tx: 1.85, ty: -46.35},
						transform: [1.85, -46.35, 1.041, 0.961, 1.074, 2.085, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.274, 0.545], [0.8, 0.938], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_gumball_gumball_leg_front_x_f0",
						instancename: "",
						matrix: {a: -0.101, b: 1.048, c: 0.931, d: 0.236, tx: 1.35, ty: -51.95},
						transform: [1.35, -51.95, 1.053, 0.961, 1.323, 1.667, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 0.472, b: -0.934, c: 0.728, d: 0.379, tx: 2.4, ty: -53.9},
						transform: [2.4, -53.9, 1.046, 0.82, 1.09, -1.102, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 0.44, b: -0.95, c: 0.74, d: 0.354, tx: 1.6, ty: -54.35},
						transform: [1.6, -54.35, 1.047, 0.82, 1.125, -1.137, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 0.818, b: -0.659, c: 0.599, d: 0.576, tx: 0.2, ty: -41},
						transform: [0.2, -41, 1.05, 0.831, 0.805, -0.678, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 0.862, b: -0.507, c: 0.579, d: 0.725, tx: 1.5, ty: -37.95},
						transform: [1.5, -37.95, 1, 0.928, 0.674, -0.532, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 21,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.143, d: 1, tx: 6.1, ty: -35.6},
						transform: [6.1, -35.6, 1, 1.01, 0.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.13, d: 0.911, tx: 6.55, ty: -32.45},
						transform: [6.55, -32.45, 1, 0.92, 0.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_hand_grab2_x",
				keys: [
					{
						from: 0,
						to: 17,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.99, b: -0.21, c: -0.125, d: 0.909, tx: 34.65, ty: -46.4},
						transform: [34.65, -46.4, 1.012, 0.917, -0.137, -2.933, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: -0.554, b: -0.814, c: -0.699, d: 0.554, tx: 15.7, ty: -43.25},
						transform: [15.7, -43.25, 0.985, 0.892, -0.901, -2.168, NaN],
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
				name: "gumball_leg_rect_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.057, d: 0.76, tx: 18.8, ty: -41.55},
						transform: [18.8, -41.55, 1, 0.763, -0.075, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: -0.082, d: 0.85, tx: 20.15, ty: -46.35},
						transform: [20.15, -46.35, 1, 0.854, -0.096, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -0.944, b: 0, c: -0.238, d: 0.952, tx: -11.6, ty: -33.9},
						transform: [-11.6, -33.9, 0.944, 0.981, -0.245, 3.142, NaN],
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
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: -0.216, d: 0.864, tx: -13.45, ty: -30.95},
						transform: [-13.45, -30.95, 1, 0.89, -0.245, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.102, d: 0.755, tx: -22.25, ty: -41.25},
						transform: [-22.25, -41.25, 1, 0.762, 0.135, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0.093, d: 0.818, tx: -21.7, ty: -44.6},
						transform: [-21.7, -44.6, 1, 0.823, 0.113, 3.141, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.143, d: 1, tx: -12.1, ty: -35.6},
						transform: [-12.1, -35.6, 1, 1.01, 0.142, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_leg_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0.127, d: 0.863, tx: -11.55, ty: -30.65},
						transform: [-11.55, -30.65, 1, 0.872, 0.146, 0, NaN],
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
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 17,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.287, b: 1.064, c: -0.917, d: 0.237, tx: -13.4, ty: -84.55},
						transform: [-13.4, -84.55, 1.102, 0.947, -1.317, 1.307, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.502, b: 0.914, c: -0.79, d: 0.424, tx: -17.75, ty: -76.25},
						transform: [-17.75, -76.25, 1.043, 0.897, -1.078, 1.068, NaN],
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
				name: "gumball_arm_curved_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.809, b: -0.532, c: -0.474, d: 0.646, tx: -12.65, ty: -77.95},
						transform: [-12.65, -77.95, 0.968, 0.801, -0.633, -2.56, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.211, 0.846], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 6,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.462, b: -0.887, c: -0.835, d: 0.468, tx: -7.7, ty: -92.85},
						transform: [-7.7, -92.85, 1, 0.957, -1.06, -2.051, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.432, b: 0.655, c: -0.795, d: 0.484, tx: -17.2, ty: -73.9},
						transform: [-17.2, -73.9, 0.785, 0.93, -1.024, 0.988, NaN],
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
						classname: "_gumball_gumball_arm_curved2_x",
						instancename: "",
						matrix: {a: 0.65, b: 0.441, c: -0.55, d: 0.751, tx: -17.15, ty: -69.9},
						transform: [-17.15, -69.9, 0.785, 0.93, -0.632, 0.596, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 15,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: 0.466, b: -0.915, c: 0.658, d: 0.474, tx: -1.9, ty: -84.95},
						transform: [-1.9, -84.95, 1.027, 0.811, 0.946, -1.1, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 17,
						classname: "_gumball_gumball_arm_curved_x",
						instancename: "",
						matrix: {a: -0.009, b: -1.05, c: 0.914, d: 0.086, tx: 0.75, ty: -93.55},
						transform: [0.75, -93.55, 1.05, 0.918, 1.477, -1.579, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.952, b: -0.098, c: 0.237, d: 1.146, tx: -41.9, ty: -82},
						transform: [-41.9, -82, 0.957, 1.17, 0.204, -0.103, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.753, b: -0.504, c: 0.706, d: 0.853, tx: -43.35, ty: -67.5},
						transform: [-43.35, -67.5, 0.906, 1.107, 0.691, -0.59, NaN],
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
				name: "gumball_hand_grab2_x",
				keys: [
					{
						from: 0,
						to: 17,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: 0.999, b: -0.309, c: 0.429, d: 0.904, tx: -35.35, ty: -50.55},
						transform: [-35.35, -50.55, 1.046, 1.001, 0.443, -0.3, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_hand_grab2_x",
						instancename: "",
						matrix: {a: 0.341, b: -0.929, c: 0.926, d: 0.196, tx: -23.55, ty: -45.1},
						transform: [-23.55, -45.1, 0.989, 0.947, 1.362, -1.219, NaN],
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
				name: "gumball_head_scared_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: 0.995, b: -0.095, c: 0.095, d: 0.995, tx: 11.35, ty: -99.85},
						transform: [11.35, -99.85, 1, 1, 0.095, -0.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.214, 0.7], [0.629, 0.936], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: 0.978, b: -0.204, c: 0.204, d: 0.978, tx: 7.45, ty: -114.35},
						transform: [7.45, -114.35, 0.999, 0.999, 0.205, -0.205, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.347, 0.727], [0.684, 1], [1, 1], ],
						}
					},
					{
						from: 5,
						to: 5,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 0.978, b: -0.207, c: 0.207, d: 0.978, tx: 7.4, ty: -117.8},
						transform: [7.4, -117.8, 1, 1, 0.208, -0.208, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 0.978, b: -0.207, c: 0.207, d: 0.978, tx: 7.4, ty: -118.6},
						transform: [7.4, -118.6, 1, 1, 0.208, -0.208, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 9,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 0.995, b: -0.099, c: 0.099, d: 0.995, tx: 1.65, ty: -100.15},
						transform: [1.65, -100.15, 1, 1, 0.1, -0.1, NaN],
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
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 0.997, b: -0.082, c: 0.082, d: 0.997, tx: 1.65, ty: -96.55},
						transform: [1.65, -96.55, 1, 1, 0.083, -0.083, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 16,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: -0.999, b: 0.042, c: 0.042, d: 0.999, tx: -22.5, ty: -98.45},
						transform: [-22.5, -98.45, 1, 1, 0.042, 3.099, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.15, 0.812], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 17,
						to: 17,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: -0.98, b: 0.197, c: 0.197, d: 0.98, tx: -26.6, ty: -109.9},
						transform: [-26.6, -109.9, 1, 1, 0.199, 2.943, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -0.954, b: -0.3, c: -0.3, d: 0.954, tx: 9.3, ty: -101.3},
						transform: [9.3, -101.3, 1, 1, -0.305, -2.836, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -0.929, b: -0.369, c: -0.369, d: 0.929, tx: 6.45, ty: -87.25},
						transform: [6.45, -87.25, 1, 1, -0.378, -2.763, NaN],
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
						to: 3,
						classname: "_gumball_mouth_x_f0",
						instancename: "",
						matrix: {a: -0.992, b: 0.125, c: 0.125, d: 0.992, tx: 4.25, ty: -131.05},
						transform: [4.25, -131.05, 1, 1, 0.126, 3.016, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.171, 0.558], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_mouth_x_f0",
						instancename: "",
						matrix: {a: -0.987, b: 0.16, c: 0.16, d: 0.987, tx: -0.75, ty: -145.35},
						transform: [-0.75, -145.35, 1, 1, 0.16, 2.981, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 17,
					},
					{
						from: 18,
						to: 21,
						classname: "_gumball_mouth_x_f0",
						instancename: "",
						matrix: {a: 0.962, b: 0.271, c: -0.271, d: 0.962, tx: 23.3, ty: -130.75},
						transform: [23.3, -130.75, 1, 1, -0.275, 0.275, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_mouth_x_f0",
						instancename: "",
						matrix: {a: 0.916, b: 0.401, c: -0.401, d: 0.916, tx: 22.6, ty: -113.85},
						transform: [22.6, -113.85, 1, 1, -0.413, 0.413, NaN],
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
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2, ty: -108.85},
						transform: [-2, -108.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 2,
						to: 2,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -9.3, ty: -108.8},
						transform: [-9.3, -108.8, 1, 1, 0, 0, 0],
						alpha: 0.87,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 3,
						to: 3,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -12.95, ty: -108.8},
						transform: [-12.95, -108.8, 1, 1, 0, 0, 0],
						alpha: 0.8,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -10.5, ty: -108.7},
						transform: [-10.5, -108.7, 1, 1, 0, 0, 0],
						alpha: 0.73,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 9,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.95, ty: -108.7},
						transform: [-11.95, -108.7, 1, 1, 0, 0, 0],
						alpha: 0.67,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -19, ty: -108.45},
						transform: [-19, -108.45, 1, 1, 0, 0, 0],
						alpha: 0.34,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 11,
						to: 14,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -47.25, ty: -108.45},
						transform: [-47.25, -108.45, 1, 1, 0, 0, 0],
						alpha: 0.27,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_gumball_blackout",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -48, ty: -108.15},
						transform: [-48, -108.15, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 22,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 7,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 8,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){soundmanager.player_step();},
					},
					{
						from: 21,
						to: 21,
					},
					{
						from: 22,
						to: 22,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gumball_gumball_talk": {
		type: "movieclip",
		fps: 30,
		totalFrames: 66,
		labels: {},
		layers: [
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.954, b: -0.155, c: -0.122, d: 0.889, tx: -39.65, ty: -74.3},
						transform: [-39.65, -74.3, 0.967, 0.897, -0.137, -2.98, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 4,
						to: 19,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.94, b: -0.225, c: -0.187, d: 0.878, tx: -39.1, ty: -74.25},
						transform: [-39.1, -74.25, 0.967, 0.897, -0.21, -2.907, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 26,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.94, b: -0.225, c: -0.187, d: 0.878, tx: -39.1, ty: -74.25},
						transform: [-39.1, -74.25, 0.967, 0.897, -0.21, -2.907, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 47,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.967, b: -0.009, c: 0.013, d: 0.897, tx: -39.05, ty: -66.4},
						transform: [-39.05, -66.4, 0.967, 0.897, 0.015, -3.132, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 53,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.967, b: -0.009, c: 0.013, d: 0.897, tx: -39.05, ty: -66.4},
						transform: [-39.05, -66.4, 0.967, 0.897, 0.015, -3.132, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 54,
						to: 65,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.954, b: -0.155, c: -0.122, d: 0.889, tx: -39.65, ty: -74.3},
						transform: [-39.65, -74.3, 0.967, 0.897, -0.137, -2.98, NaN],
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
						to: 3,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: -0.08, c: -0.105, d: 1.033, tx: -8.65, ty: -76.65},
						transform: [-8.65, -76.65, 0.961, 1.039, -0.101, -3.058, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 4,
						to: 19,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.949, b: -0.15, c: -0.18, d: 1.023, tx: -8, ty: -74.4},
						transform: [-8, -74.4, 0.961, 1.039, -0.174, -2.985, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 26,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.949, b: -0.15, c: -0.18, d: 1.023, tx: -8, ty: -74.4},
						transform: [-8, -74.4, 0.961, 1.039, -0.174, -2.985, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 47,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.958, b: 0.065, c: 0.053, d: 1.037, tx: -8.75, ty: -73.4},
						transform: [-8.75, -73.4, 0.961, 1.039, 0.051, 3.074, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 53,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.958, b: 0.065, c: 0.053, d: 1.037, tx: -8.75, ty: -73.4},
						transform: [-8.75, -73.4, 0.961, 1.039, 0.051, 3.074, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 54,
						to: 65,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.957, b: -0.08, c: -0.105, d: 1.033, tx: -8.65, ty: -76.65},
						transform: [-8.65, -76.65, 0.961, 1.039, -0.101, -3.058, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.939, b: -0.542, c: 0.544, d: -0.944, tx: -14.8, ty: -47.3},
						transform: [-14.8, -47.3, 1.084, 1.089, 2.618, -2.618, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.79, b: -0.742, c: 0.746, d: -0.794, tx: -13.35, ty: -45},
						transform: [-13.35, -45, 1.084, 1.089, 2.388, -2.388, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.79, b: -0.742, c: 0.746, d: -0.794, tx: -13.35, ty: -45},
						transform: [-13.35, -45, 1.084, 1.089, 2.388, -2.388, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.875, b: -0.64, c: 0.643, d: -0.879, tx: -11.6, ty: -45},
						transform: [-11.6, -45, 1.084, 1.089, 2.51, -2.51, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.875, b: -0.64, c: 0.643, d: -0.879, tx: -11.6, ty: -45},
						transform: [-11.6, -45, 1.084, 1.089, 2.51, -2.51, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.939, b: -0.542, c: 0.544, d: -0.944, tx: -14.8, ty: -47.3},
						transform: [-14.8, -47.3, 1.084, 1.089, 2.618, -2.618, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.73, b: -0.462, c: 0.396, d: 0.79, tx: 14.15, ty: -91.2},
						transform: [14.15, -91.2, 0.863, 0.883, 0.465, -0.564, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.753, b: -0.423, c: 0.355, d: 0.809, tx: 20.75, ty: -82.85},
						transform: [20.75, -82.85, 0.863, 0.883, 0.413, -0.513, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.753, b: -0.423, c: 0.355, d: 0.809, tx: 20.75, ty: -82.85},
						transform: [20.75, -82.85, 0.863, 0.883, 0.413, -0.513, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.596, b: -0.625, c: 0.576, d: 0.67, tx: 10.25, ty: -92.65},
						transform: [10.25, -92.65, 0.863, 0.883, 0.709, -0.809, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.596, b: -0.625, c: 0.576, d: 0.67, tx: 10.25, ty: -92.65},
						transform: [10.25, -92.65, 0.863, 0.883, 0.709, -0.809, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.73, b: -0.462, c: 0.396, d: 0.79, tx: 14.15, ty: -91.2},
						transform: [14.15, -91.2, 0.863, 0.883, 0.465, -0.564, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.495, b: -0.764, c: 0.767, d: -0.541, tx: 23.45, ty: -64.85},
						transform: [23.45, -64.85, 0.91, 0.939, 2.185, -2.145, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.733, b: -0.541, c: 0.527, d: -0.777, tx: 28.7, ty: -56},
						transform: [28.7, -56, 0.91, 0.939, 2.546, -2.506, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.733, b: -0.541, c: 0.527, d: -0.777, tx: 28.7, ty: -56},
						transform: [28.7, -56, 0.91, 0.939, 2.546, -2.506, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.803, b: -0.43, c: 0.409, d: -0.845, tx: 25.7, ty: -69.4},
						transform: [25.7, -69.4, 0.91, 0.939, 2.69, -2.65, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.803, b: -0.43, c: 0.409, d: -0.845, tx: 25.7, ty: -69.4},
						transform: [25.7, -69.4, 0.91, 0.939, 2.69, -2.65, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.495, b: -0.764, c: 0.767, d: -0.541, tx: 23.45, ty: -64.85},
						transform: [23.45, -64.85, 0.91, 0.939, 2.185, -2.145, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_hand_palm_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.955, b: 0.296, c: 0.296, d: 0.955, tx: 42.1, ty: -77.75},
						transform: [42.1, -77.75, 1, 1, 0.301, 2.841, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.999, b: -0.052, c: -0.052, d: 0.999, tx: 42.3, ty: -76.35},
						transform: [42.3, -76.35, 1, 1, -0.052, -3.09, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.999, b: -0.052, c: -0.052, d: 0.999, tx: 42.3, ty: -76.35},
						transform: [42.3, -76.35, 1, 1, -0.052, -3.09, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.996, b: 0.092, c: 0.092, d: 0.996, tx: 36.25, ty: -91.4},
						transform: [36.25, -91.4, 1, 1, 0.093, 3.049, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.996, b: 0.092, c: 0.092, d: 0.996, tx: 36.25, ty: -91.4},
						transform: [36.25, -91.4, 1, 1, 0.093, 3.049, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.955, b: 0.296, c: 0.296, d: 0.955, tx: 42.1, ty: -77.75},
						transform: [42.1, -77.75, 1, 1, 0.301, 2.841, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.929, b: -0.068, c: 0.205, d: 0.813, tx: 4.1, ty: -66.8},
						transform: [4.1, -66.8, 0.931, 0.839, 0.247, -0.073, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.93, b: 0.02, c: 0.084, d: 0.784, tx: 6.2, ty: -63.95},
						transform: [6.2, -63.95, 0.93, 0.788, 0.107, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.93, b: 0.02, c: 0.084, d: 0.784, tx: 6.2, ty: -63.95},
						transform: [6.2, -63.95, 0.93, 0.788, 0.107, 0.022, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.941, b: -0.149, c: 0.439, d: 0.803, tx: 5.75, ty: -67.15},
						transform: [5.75, -67.15, 0.952, 0.915, 0.501, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.941, b: -0.149, c: 0.439, d: 0.803, tx: 5.75, ty: -67.15},
						transform: [5.75, -67.15, 0.952, 0.915, 0.501, -0.157, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.929, b: -0.068, c: 0.205, d: 0.813, tx: 4.1, ty: -66.8},
						transform: [4.1, -66.8, 0.931, 0.839, 0.247, -0.073, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_waist_side2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: 0.007, c: 0.007, d: 0.978, tx: 0.15, ty: -51.05},
						transform: [0.15, -51.05, 0.818, 0.978, 0.007, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.815, b: 0.075, c: -0.096, d: 0.974, tx: -0.9, ty: -48.4},
						transform: [-0.9, -48.4, 0.818, 0.978, -0.098, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.815, b: 0.075, c: -0.096, d: 0.974, tx: -0.9, ty: -48.4},
						transform: [-0.9, -48.4, 0.818, 0.978, -0.098, 0.091, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: -0.033, c: 0.007, d: 0.978, tx: 2.55, ty: -51.05},
						transform: [2.55, -51.05, 0.819, 0.978, 0.007, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: -0.033, c: 0.007, d: 0.978, tx: 2.55, ty: -51.05},
						transform: [2.55, -51.05, 0.819, 0.978, 0.007, -0.04, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: 0.007, c: 0.007, d: 0.978, tx: 0.15, ty: -51.05},
						transform: [0.15, -51.05, 0.818, 0.978, 0.007, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.913, b: -0.331, c: -0.343, d: 0.849, tx: -17.95, ty: -91.6},
						transform: [-17.95, -91.6, 0.971, 0.916, -0.384, -2.793, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.854, b: -0.462, c: -0.464, d: 0.79, tx: -11.85, ty: -85.45},
						transform: [-11.85, -85.45, 0.971, 0.916, -0.531, -2.646, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.854, b: -0.462, c: -0.464, d: 0.79, tx: -11.85, ty: -85.45},
						transform: [-11.85, -85.45, 0.971, 0.916, -0.531, -2.646, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.97, b: -0.038, c: -0.067, d: 0.902, tx: -21.2, ty: -87.2},
						transform: [-21.2, -87.2, 0.971, 0.904, -0.074, -3.102, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.97, b: -0.038, c: -0.067, d: 0.902, tx: -21.2, ty: -87.2},
						transform: [-21.2, -87.2, 0.971, 0.904, -0.074, -3.102, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.913, b: -0.331, c: -0.343, d: 0.849, tx: -17.95, ty: -91.6},
						transform: [-17.95, -91.6, 0.971, 0.916, -0.384, -2.793, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.847, b: -0.57, c: -0.63, d: -0.757, tx: -24.65, ty: -62.25},
						transform: [-24.65, -62.25, 1.021, 0.984, -2.447, -0.592, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.502, c: -0.569, d: -0.804, tx: -22.7, ty: -59.1},
						transform: [-22.7, -59.1, 1.021, 0.984, -2.526, -0.514, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.889, b: -0.502, c: -0.569, d: -0.804, tx: -22.7, ty: -59.1},
						transform: [-22.7, -59.1, 1.021, 0.984, -2.526, -0.514, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.797, b: -0.638, c: -0.69, d: -0.702, tx: -20.85, ty: -58.4},
						transform: [-20.85, -58.4, 1.021, 0.984, -2.365, -0.675, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.797, b: -0.638, c: -0.69, d: -0.702, tx: -20.85, ty: -58.4},
						transform: [-20.85, -58.4, 1.021, 0.984, -2.365, -0.675, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.847, b: -0.57, c: -0.63, d: -0.757, tx: -24.65, ty: -62.25},
						transform: [-24.65, -62.25, 1.021, 0.984, -2.447, -0.592, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_hand_palm_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -40.7, ty: -83.15},
						transform: [-40.7, -83.15, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -36.9, ty: -81.1},
						transform: [-36.9, -81.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -36.9, ty: -81.1},
						transform: [-36.9, -81.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.291, c: 0.291, d: 0.957, tx: -38.3, ty: -77.1},
						transform: [-38.3, -77.1, 1, 1, 0.295, -0.295, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.957, b: -0.291, c: 0.291, d: 0.957, tx: -38.3, ty: -77.1},
						transform: [-38.3, -77.1, 1, 1, 0.295, -0.295, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.963, b: 0.271, c: -0.271, d: 0.963, tx: -40.7, ty: -83.15},
						transform: [-40.7, -83.15, 1, 1, -0.274, 0.274, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.129, d: 0.816, tx: 8, ty: -44.95},
						transform: [8, -44.95, 1.105, 0.827, 0.157, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.155, d: 0.778, tx: 6.65, ty: -42.9},
						transform: [6.65, -42.9, 1.105, 0.793, 0.197, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.155, d: 0.778, tx: 6.65, ty: -42.9},
						transform: [6.65, -42.9, 1.105, 0.793, 0.197, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.082, d: 0.816, tx: 10.55, ty: -44.95},
						transform: [10.55, -44.95, 1.105, 0.82, 0.1, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.082, d: 0.816, tx: 10.55, ty: -44.95},
						transform: [10.55, -44.95, 1.105, 0.82, 0.1, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.129, d: 0.816, tx: 8, ty: -44.95},
						transform: [8, -44.95, 1.105, 0.827, 0.157, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_leg_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.129, d: 0.809, tx: -8.85, ty: -44.6},
						transform: [-8.85, -44.6, 1.105, 0.82, -0.158, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 3,
						to: 19,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.103, d: 0.771, tx: -10.25, ty: -42.55},
						transform: [-10.25, -42.55, 1.105, 0.778, -0.133, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 25,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.103, d: 0.771, tx: -10.25, ty: -42.55},
						transform: [-10.25, -42.55, 1.105, 0.778, -0.133, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 47,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.176, d: 0.809, tx: -6.3, ty: -44.6},
						transform: [-6.3, -44.6, 1.105, 0.828, -0.214, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.176, d: 0.809, tx: -6.3, ty: -44.6},
						transform: [-6.3, -44.6, 1.105, 0.828, -0.214, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 65,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.129, d: 0.809, tx: -8.85, ty: -44.6},
						transform: [-8.85, -44.6, 1.105, 0.82, -0.158, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "gumball_head_scared_x",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -0.993, b: -0.114, c: -0.115, d: 1.018, tx: -0.3, ty: -107.75},
						transform: [-0.3, -107.75, 1, 1.025, -0.113, -3.028, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 4,
						to: 19,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -0.999, b: 0.031, c: 0.032, d: 1.024, tx: 8.2, ty: -105.25},
						transform: [8.2, -105.25, 1, 1.025, 0.032, 3.111, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 26,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -0.999, b: 0.031, c: 0.032, d: 1.024, tx: 8.2, ty: -105.25},
						transform: [8.2, -105.25, 1, 1.025, 0.032, 3.111, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.278, 0.8], [0.667, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 47,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -1, b: 0.021, c: 0.023, d: 1.025, tx: -10.3, ty: -111.25},
						transform: [-10.3, -111.25, 1, 1.025, 0.022, 3.121, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 53,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -1, b: 0.021, c: 0.023, d: 1.025, tx: -9.3, ty: -111.25},
						transform: [-9.3, -111.25, 1, 1.025, 0.022, 3.121, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 54,
						to: 65,
						classname: "_gumball_gumball_head_scared_x_f10",
						instancename: "",
						matrix: {a: -0.993, b: -0.114, c: -0.115, d: 1.018, tx: -0.3, ty: -107.75},
						transform: [-0.3, -107.75, 1, 1.025, -0.113, -3.028, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 17",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gumball_mouth_talking_f0",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
					{
						from: 1,
						to: 1,
						classname: "_gumball_mouth_talking_f1",
						instancename: "",
						matrix: {a: 0.993, b: 0.113, c: -0.113, d: 0.993, tx: 4.7, ty: -122.5},
						transform: [4.7, -122.5, 1, 1, -0.114, 0.114, NaN],
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
						classname: "_gumball_mouth_talking_f2",
						instancename: "",
						matrix: {a: 0.998, b: 0.061, c: -0.061, d: 0.998, tx: 7.25, ty: -122.4},
						transform: [7.25, -122.4, 1, 1, -0.062, 0.062, NaN],
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
						classname: "_gumball_mouth_talking_f3",
						instancename: "",
						matrix: {a: 1, b: 0.023, c: -0.023, d: 1, tx: 9.2, ty: -122.25},
						transform: [9.2, -122.25, 1, 1, -0.023, 0.023, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 4,
						to: 4,
						classname: "_gumball_mouth_talking_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_gumball_mouth_talking_f5",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_gumball_mouth_talking_f6",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_mouth_talking_f7",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_gumball_mouth_talking_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_gumball_mouth_talking_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gumball_mouth_talking_f10",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gumball_mouth_talking_f11",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_gumball_mouth_talking_f12",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_gumball_mouth_talking_f13",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_gumball_mouth_talking_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_gumball_mouth_talking_f15",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_gumball_mouth_talking_f16",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_gumball_mouth_talking_f17",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_gumball_mouth_talking_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_gumball_mouth_talking_f19",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_gumball_mouth_talking_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 10.5, ty: -122.2},
						transform: [10.5, -122.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.315, 0.377], [0.65, 0.709], [1, 1], ],
						}
					},
					{
						from: 21,
						to: 21,
						classname: "_gumball_mouth_talking_f21",
						instancename: "",
						matrix: {a: 1, b: 0.001, c: -0.001, d: 1, tx: 3.55, ty: -123.85},
						transform: [3.55, -123.85, 1, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.322, 0.381], [0.656, 0.712], [1, 1], ],
						}
					},
					{
						from: 22,
						to: 22,
						classname: "_gumball_mouth_talking_f22",
						instancename: "",
						matrix: {a: 1, b: 0.005, c: -0.005, d: 1, tx: -1.25, ty: -125.05},
						transform: [-1.25, -125.05, 1, 1, -0.005, 0.005, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.326, 0.387], [0.661, 0.718], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_gumball_mouth_talking_f23",
						instancename: "",
						matrix: {a: 1, b: 0.009, c: -0.009, d: 1, tx: -4.7, ty: -125.85},
						transform: [-4.7, -125.85, 1, 1, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.33, 0.398], [0.664, 0.728], [1, 1], ],
						}
					},
					{
						from: 24,
						to: 24,
						classname: "_gumball_mouth_talking_f24",
						instancename: "",
						matrix: {a: 1, b: 0.009, c: -0.009, d: 1, tx: -7.05, ty: -126.4},
						transform: [-7.05, -126.4, 1, 1, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.418], [0.667, 0.747], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_gumball_mouth_talking_f25",
						instancename: "",
						matrix: {a: 1, b: 0.009, c: -0.009, d: 1, tx: -8.6, ty: -126.8},
						transform: [-8.6, -126.8, 1, 1, -0.009, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.336, 0.465], [0.67, 0.79], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_gumball_mouth_talking_f26",
						instancename: "",
						matrix: {a: 1, b: 0.01, c: -0.01, d: 1, tx: -9.45, ty: -127},
						transform: [-9.45, -127, 1, 1, -0.01, 0.01, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.339, 0.695], [0.673, 1], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_mouth_talking_f27",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 28,
						classname: "_gumball_mouth_talking_f28",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 29,
						classname: "_gumball_mouth_talking_f29",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 30,
						classname: "_gumball_mouth_talking_f30",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 31,
						classname: "_gumball_mouth_talking_f31",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_gumball_mouth_talking_f32",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 33,
						to: 33,
						classname: "_gumball_mouth_talking_f33",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 34,
						to: 34,
						classname: "_gumball_mouth_talking_f34",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 35,
						to: 35,
						classname: "_gumball_mouth_talking_f35",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 36,
						to: 36,
						classname: "_gumball_mouth_talking_f36",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 37,
						to: 37,
						classname: "_gumball_mouth_talking_f37",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 38,
						to: 38,
						classname: "_gumball_mouth_talking_f38",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 39,
						to: 39,
						classname: "_gumball_mouth_talking_f39",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 40,
						classname: "_gumball_mouth_talking_f40",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 41,
						to: 41,
						classname: "_gumball_mouth_talking_f41",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 42,
						to: 42,
						classname: "_gumball_mouth_talking_f42",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 43,
						to: 43,
						classname: "_gumball_mouth_talking_f43",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 44,
						to: 44,
						classname: "_gumball_mouth_talking_f44",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 45,
						to: 45,
						classname: "_gumball_mouth_talking_f45",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 46,
						to: 46,
						classname: "_gumball_mouth_talking_f46",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 47,
						to: 47,
						classname: "_gumball_mouth_talking_f47",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 48,
						classname: "_gumball_mouth_talking_f48",
						instancename: "",
						matrix: {a: 1, b: 0.012, c: -0.012, d: 1, tx: -9.75, ty: -127.05},
						transform: [-9.75, -127.05, 1, 1, -0.012, 0.012, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 49,
						to: 49,
						classname: "_gumball_mouth_talking_f49",
						instancename: "",
						matrix: {a: 0.998, b: 0.062, c: -0.062, d: 0.998, tx: -6.35, ty: -125.65},
						transform: [-6.35, -125.65, 1, 1, -0.062, 0.062, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 50,
						to: 50,
						classname: "_gumball_mouth_talking_f50",
						instancename: "",
						matrix: {a: 0.995, b: 0.101, c: -0.101, d: 0.995, tx: -3.55, ty: -124.6},
						transform: [-3.55, -124.6, 1, 1, -0.101, 0.101, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 51,
						to: 51,
						classname: "_gumball_mouth_talking_f51",
						instancename: "",
						matrix: {a: 0.99, b: 0.135, c: -0.135, d: 0.99, tx: -1.4, ty: -123.7},
						transform: [-1.4, -123.7, 1, 1, -0.136, 0.136, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 52,
						to: 52,
						classname: "_gumball_mouth_talking_f52",
						instancename: "",
						matrix: {a: 0.987, b: 0.157, c: -0.157, d: 0.987, tx: 0.15, ty: -123.15},
						transform: [0.15, -123.15, 0.999, 0.999, -0.158, 0.158, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_gumball_mouth_talking_f53",
						instancename: "",
						matrix: {a: 0.985, b: 0.17, c: -0.17, d: 0.985, tx: 1.05, ty: -122.75},
						transform: [1.05, -122.75, 0.999, 0.999, -0.171, 0.171, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 54,
						to: 54,
						classname: "_gumball_mouth_talking_f54",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 55,
						to: 55,
						classname: "_gumball_mouth_talking_f55",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 56,
						classname: "_gumball_mouth_talking_f56",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 57,
						to: 57,
						classname: "_gumball_mouth_talking_f57",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 58,
						to: 58,
						classname: "_gumball_mouth_talking_f58",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 59,
						to: 59,
						classname: "_gumball_mouth_talking_f59",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 60,
						to: 60,
						classname: "_gumball_mouth_talking_f60",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 61,
						to: 61,
						classname: "_gumball_mouth_talking_f61",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 62,
						to: 62,
						classname: "_gumball_mouth_talking_f62",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_mouth_talking_f63",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 64,
						classname: "_gumball_mouth_talking_f64",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 65,
						to: 65,
						classname: "_gumball_mouth_talking_f65",
						instancename: "",
						matrix: {a: 0.984, b: 0.177, c: -0.177, d: 0.984, tx: 1.4, ty: -122.65},
						transform: [1.4, -122.65, 1, 1, -0.178, 0.178, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gumball_gumball_idle_explore": {
		type: "movieclip",
		fps: 30,
		totalFrames: 103,
		labels: {loop: {from:8, to:102}, },
		layers: [
			{
				name: "hose_1",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.966, b: 0.045, c: 0.064, d: 0.895, tx: -39.15, ty: -67.7},
						transform: [-39.15, -67.7, 0.967, 0.897, 0.071, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.966, b: 0.045, c: 0.064, d: 0.895, tx: -38.65, ty: -76.8},
						transform: [-38.65, -76.8, 0.967, 0.897, 0.071, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 29,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.966, b: 0.045, c: 0.064, d: 0.895, tx: -39.15, ty: -71.3},
						transform: [-39.15, -71.3, 0.967, 0.897, 0.071, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 30,
						to: 55,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.965, b: 0.053, c: 0.071, d: 0.895, tx: -36.9, ty: -76.75},
						transform: [-36.9, -76.75, 0.967, 0.897, 0.079, 3.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 76,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.966, b: 0.045, c: 0.064, d: 0.895, tx: -39.15, ty: -71.3},
						transform: [-39.15, -71.3, 0.967, 0.897, 0.071, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 77,
						to: 101,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.965, b: 0.053, c: 0.071, d: 0.895, tx: -36.9, ty: -76.75},
						transform: [-36.9, -76.75, 0.967, 0.897, 0.079, 3.087, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_hose_1_f0",
						instancename: "",
						matrix: {a: -0.966, b: 0.045, c: 0.064, d: 0.895, tx: -39.15, ty: -71.3},
						transform: [-39.15, -71.3, 0.967, 0.897, 0.071, 3.095, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
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
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.953, b: 0.119, c: 0.111, d: 1.033, tx: -11.75, ty: -68.8},
						transform: [-11.75, -68.8, 0.961, 1.039, 0.107, 3.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.953, b: 0.119, c: 0.111, d: 1.033, tx: -11.75, ty: -75.4},
						transform: [-11.75, -75.4, 0.961, 1.039, 0.107, 3.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 28,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.953, b: 0.119, c: 0.111, d: 1.033, tx: -11.75, ty: -72.4},
						transform: [-11.75, -72.4, 0.961, 1.039, 0.107, 3.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 55,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.952, b: 0.127, c: 0.119, d: 1.032, tx: -9.55, ty: -78.1},
						transform: [-9.55, -78.1, 0.961, 1.039, 0.115, 3.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 75,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.953, b: 0.119, c: 0.111, d: 1.033, tx: -11.75, ty: -72.4},
						transform: [-11.75, -72.4, 0.961, 1.039, 0.107, 3.018, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 76,
						to: 101,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.952, b: 0.127, c: 0.119, d: 1.032, tx: -9.55, ty: -78.1},
						transform: [-9.55, -78.1, 0.961, 1.039, 0.115, 3.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_backpack_x_f0",
						instancename: "",
						matrix: {a: -0.953, b: 0.119, c: 0.111, d: 1.033, tx: -11.75, ty: -72.4},
						transform: [-11.75, -72.4, 0.961, 1.039, 0.107, 3.018, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_tail_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.788, b: -0.73, c: 0.797, d: -0.728, tx: -11.2, ty: -45.7},
						transform: [-11.2, -45.7, 1.074, 1.08, 2.311, -2.394, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.724, b: -0.788, c: 0.733, d: -0.787, tx: -10.2, ty: -51.75},
						transform: [-10.2, -51.75, 1.07, 1.075, 2.392, -2.314, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.764, b: -0.769, c: 0.773, d: -0.768, tx: -10.8, ty: -48.1},
						transform: [-10.8, -48.1, 1.084, 1.089, 2.353, -2.353, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.622, b: -0.888, c: 0.892, d: -0.626, tx: -9.3, ty: -55.6},
						transform: [-9.3, -55.6, 1.084, 1.089, 2.182, -2.182, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.764, b: -0.769, c: 0.773, d: -0.768, tx: -10.8, ty: -48.1},
						transform: [-10.8, -48.1, 1.084, 1.089, 2.353, -2.353, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.622, b: -0.888, c: 0.892, d: -0.626, tx: -9.3, ty: -55.6},
						transform: [-9.3, -55.6, 1.084, 1.089, 2.182, -2.182, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_tail_x",
						instancename: "",
						matrix: {a: -0.764, b: -0.769, c: 0.773, d: -0.768, tx: -10.8, ty: -48.1},
						transform: [-10.8, -48.1, 1.084, 1.089, 2.353, -2.353, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.56, b: 0.547, c: 0.584, d: 0.491, tx: 13.65, ty: -87.5},
						transform: [13.65, -87.5, 0.783, 0.763, 0.872, 2.368, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.515, b: 0.69, c: 0.537, d: 0.427, tx: 12.65, ty: -94.25},
						transform: [12.65, -94.25, 0.861, 0.686, 0.899, 2.211, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.543, b: 0.577, c: 0.566, d: 0.517, tx: 13.3, ty: -92.2},
						transform: [13.3, -92.2, 0.792, 0.767, 0.831, 2.326, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.485, b: 0.608, c: 0.57, d: 0.482, tx: 12.25, ty: -98.5},
						transform: [12.25, -98.5, 0.778, 0.747, 0.868, 2.244, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.543, b: 0.577, c: 0.566, d: 0.517, tx: 13.3, ty: -92.2},
						transform: [13.3, -92.2, 0.792, 0.767, 0.831, 2.326, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.485, b: 0.608, c: 0.57, d: 0.482, tx: 12.25, ty: -98.5},
						transform: [12.25, -98.5, 0.778, 0.747, 0.868, 2.244, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: -0.543, b: 0.577, c: 0.566, d: 0.517, tx: 13.3, ty: -92.2},
						transform: [13.3, -92.2, 0.792, 0.767, 0.831, 2.326, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.571, b: -0.541, c: -0.643, d: 0.572, tx: 33.2, ty: -74.3},
						transform: [33.2, -74.3, 0.787, 0.86, -0.844, -2.383, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.525, b: -0.484, c: -0.591, d: 0.731, tx: 30.6, ty: -83.4},
						transform: [30.6, -83.4, 0.714, 0.94, -0.68, -2.397, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.554, b: -0.57, c: -0.624, d: 0.602, tx: 32.25, ty: -78.25},
						transform: [32.25, -78.25, 0.795, 0.867, -0.803, -2.341, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.561, b: -0.536, c: -0.56, d: 0.639, tx: 31.1, ty: -85.75},
						transform: [31.1, -85.75, 0.776, 0.85, -0.72, -2.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.554, b: -0.57, c: -0.624, d: 0.602, tx: 32.25, ty: -78.25},
						transform: [32.25, -78.25, 0.795, 0.867, -0.803, -2.341, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.561, b: -0.536, c: -0.56, d: 0.639, tx: 31.1, ty: -85.75},
						transform: [31.1, -85.75, 0.776, 0.85, -0.72, -2.379, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: -0.554, b: -0.57, c: -0.624, d: 0.602, tx: 32.25, ty: -78.25},
						transform: [32.25, -78.25, 0.795, 0.867, -0.803, -2.341, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_hand_palm_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.441, b: -0.617, c: 0.831, d: -0.503, tx: 17.15, ty: -60.3},
						transform: [17.15, -60.3, 0.758, 0.971, 2.115, -2.192, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.405, b: -0.588, c: 0.763, d: -0.69, tx: 15.9, ty: -65.45},
						transform: [15.9, -65.45, 0.714, 1.029, 2.306, -2.174, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.428, b: -0.65, c: 0.805, d: -0.53, tx: 16.7, ty: -63.5},
						transform: [16.7, -63.5, 0.778, 0.964, 2.153, -2.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.369, b: -0.685, c: 0.849, d: -0.457, tx: 16.9, ty: -69.75},
						transform: [16.9, -69.75, 0.778, 0.964, 2.065, -2.065, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.428, b: -0.65, c: 0.805, d: -0.53, tx: 16.7, ty: -63.5},
						transform: [16.7, -63.5, 0.778, 0.964, 2.153, -2.153, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.369, b: -0.685, c: 0.849, d: -0.457, tx: 16.9, ty: -69.75},
						transform: [16.9, -69.75, 0.778, 0.964, 2.065, -2.065, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: -0.428, b: -0.65, c: 0.805, d: -0.53, tx: 16.7, ty: -63.5},
						transform: [16.7, -63.5, 0.778, 0.964, 2.153, -2.153, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_torso_side_stretch_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.94, b: -0.182, c: 0.416, d: 0.811, tx: 10.5, ty: -64.85},
						transform: [10.5, -64.85, 0.957, 0.911, 0.475, -0.191, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.864, b: -0.197, c: 0.383, d: 0.876, tx: 9.75, ty: -69.95},
						transform: [9.75, -69.95, 0.886, 0.956, 0.412, -0.224, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.911, b: -0.192, c: 0.404, d: 0.854, tx: 10.25, ty: -68.3},
						transform: [10.25, -68.3, 0.931, 0.945, 0.442, -0.208, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.896, b: -0.254, c: 0.461, d: 0.856, tx: 11.2, ty: -73.35},
						transform: [11.2, -73.35, 0.932, 0.972, 0.494, -0.276, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.911, b: -0.192, c: 0.404, d: 0.854, tx: 10.25, ty: -68.3},
						transform: [10.25, -68.3, 0.931, 0.945, 0.442, -0.208, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.896, b: -0.254, c: 0.461, d: 0.856, tx: 11.2, ty: -73.35},
						transform: [11.2, -73.35, 0.932, 0.972, 0.494, -0.276, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_torso_side_stretch_x",
						instancename: "",
						matrix: {a: 0.911, b: -0.192, c: 0.404, d: 0.854, tx: 10.25, ty: -68.3},
						transform: [10.25, -68.3, 0.931, 0.945, 0.442, -0.208, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_hand_palm_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.479, b: -0.626, c: -0.775, d: -0.463, tx: -12.8, ty: -58.85},
						transform: [-12.8, -58.85, 0.789, 0.902, -2.109, -0.918, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.44, b: -0.635, c: -0.712, d: -0.567, tx: -11.65, ty: -65.25},
						transform: [-11.65, -65.25, 0.773, 0.91, -2.244, -0.964, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.465, b: -0.66, c: -0.751, d: -0.488, tx: -12.35, ty: -62},
						transform: [-12.35, -62, 0.807, 0.896, -2.147, -0.958, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.347, b: -0.729, c: -0.822, d: -0.355, tx: -11.3, ty: -66.75},
						transform: [-11.3, -66.75, 0.807, 0.896, -1.978, -1.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.465, b: -0.66, c: -0.751, d: -0.488, tx: -12.35, ty: -62},
						transform: [-12.35, -62, 0.807, 0.896, -2.147, -0.958, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.347, b: -0.729, c: -0.822, d: -0.355, tx: -11.3, ty: -66.75},
						transform: [-11.3, -66.75, 0.807, 0.896, -1.978, -1.126, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_hand_palm_x",
						instancename: "",
						matrix: {a: 0.465, b: -0.66, c: -0.751, d: -0.488, tx: -12.35, ty: -62},
						transform: [-12.35, -62, 0.807, 0.896, -2.147, -0.958, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_waist_side2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.843, b: 0.007, c: -0.094, d: 0.963, tx: 5.35, ty: -50.35},
						transform: [5.35, -50.35, 0.843, 0.968, -0.098, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.775, b: 0.008, c: -0.087, d: 1.04, tx: 5.05, ty: -54.3},
						transform: [5.05, -54.3, 0.775, 1.044, -0.083, 0.01, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: 0.008, c: -0.092, d: 1.015, tx: 5.25, ty: -53},
						transform: [5.25, -53, 0.818, 1.019, -0.09, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: -0.012, c: -0.077, d: 1.141, tx: 6.05, ty: -56.85},
						transform: [6.05, -56.85, 0.818, 1.143, -0.068, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: 0.008, c: -0.092, d: 1.015, tx: 5.25, ty: -53},
						transform: [5.25, -53, 0.818, 1.019, -0.09, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: -0.012, c: -0.077, d: 1.141, tx: 6.05, ty: -56.85},
						transform: [6.05, -56.85, 0.818, 1.143, -0.068, -0.014, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_waist_side2_x",
						instancename: "",
						matrix: {a: 0.818, b: 0.008, c: -0.092, d: 1.015, tx: 5.25, ty: -53},
						transform: [5.25, -53, 0.818, 1.019, -0.09, 0.009, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_leg_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.14, b: 0, c: 0.049, d: 0.804, tx: 12.85, ty: -44.35},
						transform: [12.85, -44.35, 1.14, 0.805, 0.061, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.048, b: 0, c: 0.045, d: 0.868, tx: 11.9, ty: -47.8},
						transform: [11.9, -47.8, 1.048, 0.869, 0.052, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.048, d: 0.847, tx: 12.5, ty: -46.7},
						transform: [12.5, -46.7, 1.105, 0.848, 0.056, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.036, d: 0.904, tx: 13.15, ty: -49.75},
						transform: [13.15, -49.75, 1.105, 0.905, 0.039, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.048, d: 0.847, tx: 12.5, ty: -46.7},
						transform: [12.5, -46.7, 1.105, 0.848, 0.056, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.036, d: 0.904, tx: 13.15, ty: -49.75},
						transform: [13.15, -49.75, 1.105, 0.905, 0.039, 0, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: 1.105, b: 0, c: 0.048, d: 0.847, tx: 12.5, ty: -46.7},
						transform: [12.5, -46.7, 1.105, 0.848, 0.056, 0, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_leg_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.14, b: 0, c: -0.217, d: 0.797, tx: -4.65, ty: -43.95},
						transform: [-4.65, -43.95, 1.14, 0.826, -0.266, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.048, b: 0, c: -0.199, d: 0.861, tx: -4.15, ty: -47.35},
						transform: [-4.15, -47.35, 1.048, 0.883, -0.228, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.21, d: 0.84, tx: -4.45, ty: -46.25},
						transform: [-4.45, -46.25, 1.105, 0.866, -0.245, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.245, d: 0.9, tx: -2.6, ty: -49.5},
						transform: [-2.6, -49.5, 1.105, 0.933, -0.265, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.21, d: 0.84, tx: -4.45, ty: -46.25},
						transform: [-4.45, -46.25, 1.105, 0.866, -0.245, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.245, d: 0.9, tx: -2.6, ty: -49.5},
						transform: [-2.6, -49.5, 1.105, 0.933, -0.265, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_leg_rect_x",
						instancename: "",
						matrix: {a: -1.105, b: 0, c: -0.21, d: 0.84, tx: -4.45, ty: -46.25},
						transform: [-4.45, -46.25, 1.105, 0.866, -0.245, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_head_scared_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_head_scared_x_f0",
						instancename: "",
						matrix: {a: -0.994, b: 0.112, c: 0.116, d: 1.018, tx: -0.25, ty: -106.2},
						transform: [-0.25, -106.2, 1, 1.025, 0.114, 3.029, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_head_scared_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: 0.142, c: 0.147, d: 1.014, tx: 0.9, ty: -113.85},
						transform: [0.9, -113.85, 1, 1.025, 0.144, 2.999, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 28,
						classname: "_gumball_gumball_head_scared_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: 0.142, c: 0.147, d: 1.014, tx: 0.9, ty: -111.35},
						transform: [0.9, -111.35, 1, 1.025, 0.144, 2.999, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 55,
						classname: "_gumball_gumball_head_scared_x_f0",
						instancename: "",
						matrix: {a: -0.986, b: 0.168, c: 0.173, d: 1.01, tx: 0.4, ty: -117.65},
						transform: [0.4, -117.65, 1, 1.025, 0.17, 2.973, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 56,
						to: 75,
						classname: "_gumball_gumball_head_scared_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: 0.142, c: 0.147, d: 1.014, tx: 0.9, ty: -111.35},
						transform: [0.9, -111.35, 1, 1.025, 0.144, 2.999, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 76,
						to: 101,
						classname: "_gumball_gumball_head_scared_x_f0",
						instancename: "",
						matrix: {a: -0.986, b: 0.168, c: 0.173, d: 1.01, tx: 0.4, ty: -117.65},
						transform: [0.4, -117.65, 1, 1.025, 0.17, 2.973, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_head_scared_x_f0",
						instancename: "",
						matrix: {a: -0.99, b: 0.142, c: 0.147, d: 1.014, tx: 0.9, ty: -111.35},
						transform: [0.9, -111.35, 1, 1.025, 0.144, 2.999, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "iris1_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: -34.2, ty: -153.95},
						transform: [-34.2, -153.95, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.001, c: -0.001, d: 1, tx: -53.2, ty: -158.55},
						transform: [-53.2, -158.55, 1, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.001, c: -0.001, d: 1, tx: -53.2, ty: -156.05},
						transform: [-53.2, -156.05, 1, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 48,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.025, d: 1, tx: -53.9, ty: -159.95},
						transform: [-53.9, -159.95, 1, 1, 0.025, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0.05], [0.565, 0.68], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 53,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.001, c: 0.001, d: 1, tx: -53.3, ty: -156.7},
						transform: [-53.3, -156.7, 1, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.311, 0.363], [0.643, 0.699], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 57,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.043, c: 0.043, d: 0.999, tx: -34.5, ty: -158.2},
						transform: [-34.5, -158.2, 1, 1, 0.043, -0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.312, 0.43], [0.644, 0.767], [1, 1], ],
						}
					},
					{
						from: 58,
						to: 74,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: -31, ty: -159.7},
						transform: [-31, -159.7, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.225], [0.359, 0.937], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 99,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: -31.85, ty: -164.15},
						transform: [-31.85, -164.15, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0.052], [0.446, 0.814], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 101,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: -31, ty: -159.7},
						transform: [-31, -159.7, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.225], [0.359, 0.937], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_iris1_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: -50, ty: -155.7},
						transform: [-50, -155.7, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.225], [0.359, 0.937], [1, 1], ],
						}
					},
				]
			},
			{
				name: "iris2_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.009, c: 0.009, d: 1, tx: 23.75, ty: -163.4},
						transform: [23.75, -163.4, 1, 1, 0.009, -0.009, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.001, c: -0.001, d: 1, tx: 4.8, ty: -167.35},
						transform: [4.8, -167.35, 1, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 1, b: 0.001, c: -0.001, d: 1, tx: 4.8, ty: -164.85},
						transform: [4.8, -164.85, 1, 1, -0.001, 0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 48,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.025, c: 0.025, d: 1, tx: 3.9, ty: -170.25},
						transform: [3.9, -170.25, 1, 1, 0.025, -0.025, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.51, 0.05], [0.565, 0.68], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 53,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.001, c: 0.001, d: 1, tx: 4.65, ty: -165.7},
						transform: [4.65, -165.7, 1, 1, 0.001, -0.001, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.311, 0.363], [0.643, 0.699], [1, 1], ],
						}
					},
					{
						from: 54,
						to: 57,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 0.999, b: -0.043, c: 0.043, d: 0.999, tx: 20.25, ty: -169.3},
						transform: [20.25, -169.3, 1, 1, 0.043, -0.043, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.312, 0.43], [0.644, 0.767], [1, 1], ],
						}
					},
					{
						from: 58,
						to: 74,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: 23.05, ty: -169.3},
						transform: [23.05, -169.3, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.225], [0.359, 0.937], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 99,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 0.998, b: -0.059, c: 0.059, d: 0.998, tx: 21.1, ty: -176.2},
						transform: [21.1, -176.2, 1, 1, 0.059, -0.059, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.471, 0.052], [0.446, 0.814], [1, 1], ],
						}
					},
					{
						from: 100,
						to: 101,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: 23.05, ty: -169.3},
						transform: [23.05, -169.3, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.225], [0.359, 0.937], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_iris2_x_f0",
						instancename: "",
						matrix: {a: 1, b: -0.017, c: 0.017, d: 1, tx: 6.55, ty: -165.8},
						transform: [6.55, -165.8, 1, 1, 0.017, -0.017, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.225], [0.359, 0.937], [1, 1], ],
						}
					},
				]
			},
			{
				name: "gumball_arm1_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.647, b: 0.63, c: -0.565, d: 0.442, tx: -11.8, ty: -85.25},
						transform: [-11.8, -85.25, 0.903, 0.717, -0.907, 0.772, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.595, b: 0.737, c: -0.519, d: 0.428, tx: -10.75, ty: -93.65},
						transform: [-10.75, -93.65, 0.947, 0.673, -0.881, 0.892, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.628, b: 0.664, c: -0.548, d: 0.466, tx: -11.4, ty: -89.8},
						transform: [-11.4, -89.8, 0.914, 0.719, -0.866, 0.814, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.631, b: 0.625, c: -0.491, d: 0.498, tx: -11.55, ty: -94.65},
						transform: [-11.55, -94.65, 0.888, 0.699, -0.779, 0.781, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.628, b: 0.664, c: -0.548, d: 0.466, tx: -11.4, ty: -89.8},
						transform: [-11.4, -89.8, 0.914, 0.719, -0.866, 0.814, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.631, b: 0.625, c: -0.491, d: 0.498, tx: -11.55, ty: -94.65},
						transform: [-11.55, -94.65, 0.888, 0.699, -0.779, 0.781, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_arm1_rect_x",
						instancename: "",
						matrix: {a: 0.628, b: 0.664, c: -0.548, d: 0.466, tx: -11.4, ty: -89.8},
						transform: [-11.4, -89.8, 0.914, 0.719, -0.866, 0.814, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "gumball_arm_rect_x",
				keys: [
					{
						from: 0,
						to: 2,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.606, b: -0.553, c: 0.682, d: 0.584, tx: -31.15, ty: -74.55},
						transform: [-31.15, -74.55, 0.82, 0.898, 0.863, -0.74, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.222, 0], [0.38, 0.911], [1, 1], ],
						}
					},
					{
						from: 3,
						to: 7,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.557, b: -0.544, c: 0.627, d: 0.69, tx: -28.55, ty: -83.8},
						transform: [-28.55, -83.8, 0.779, 0.932, 0.738, -0.774, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.389, 0], [0.433, 0.952], [1, 1], ],
						}
					},
					{
						from: 8,
						to: 27,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.588, b: -0.583, c: 0.662, d: 0.615, tx: -30.15, ty: -78.55},
						transform: [-30.15, -78.55, 0.828, 0.903, 0.822, -0.781, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 28,
						to: 54,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.522, b: -0.617, c: 0.66, d: 0.575, tx: -28.65, ty: -82.3},
						transform: [-28.65, -82.3, 0.808, 0.875, 0.854, -0.869, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 74,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.588, b: -0.583, c: 0.662, d: 0.615, tx: -30.15, ty: -78.55},
						transform: [-30.15, -78.55, 0.828, 0.903, 0.822, -0.781, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 75,
						to: 101,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.522, b: -0.617, c: 0.66, d: 0.575, tx: -28.65, ty: -82.3},
						transform: [-28.65, -82.3, 0.808, 0.875, 0.854, -0.869, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.439, 0.055], [0.372, 0.932], [1, 1], ],
						}
					},
					{
						from: 102,
						to: 102,
						classname: "_gumball_gumball_arm_rect_x",
						instancename: "",
						matrix: {a: 0.588, b: -0.583, c: 0.662, d: 0.615, tx: -30.15, ty: -78.55},
						transform: [-30.15, -78.55, 0.828, 0.903, 0.822, -0.781, NaN],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.52947], [0.666, 0.8624700000000001], [1, 1]],
						}
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
						to: 102,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 101,
					},
					{
						from: 102,
						to: 102,
						actions: function(self){self.gotoAndPlay("loop");},
					},
				]
			},
		]
	},
	"_gumball_hosepipe_n2bb_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_n2bb_x_f0",
		scale: 1,
		position: [-20.3, -45.45],
	},
	"_gumball_hosepipe_n2bb3_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_n2bb3_x_f0",
		scale: 1,
		position: [-19.6, -48.05],
	},
	"_gumball_hosepipe_n2bb2_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_n2bb2_x_f0",
		scale: 1,
		position: [-22.35, -49.45],
	},
	"_gumball_hosepipe_n2_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_n2_x_f0",
		scale: 1,
		position: [-17.8, -50.15],
	},
	"_gumball_gumball_backpack_x_f0": {
		type: "bitmap",
		asset: "_gumball_gumball_backpack_x_f0",
		scale: 1,
		position: [-32.6, -39.4],
	},
	"_gumball_gumball_tail_x": {
		type: "bitmap",
		asset: "_gumball_gumball_tail_x",
		scale: 1,
		position: [-10.4, -32.45],
	},
	"_gumball_gumball_leg_2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_2_x",
		scale: 1,
		position: [-16.35, -11.55],
	},
	"_gumball_gumball_arm_back_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_back_x",
		scale: 1,
		position: [-12.05, -11.55],
	},
	"_gumball_gumball_arm1_rect_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm1_rect_x",
		scale: 1,
		position: [-14.25, -12.1],
	},
	"_gumball_gumball_torso_side_x": {
		type: "bitmap",
		asset: "_gumball_gumball_torso_side_x",
		scale: 1,
		position: [-22.65, -41.4],
	},
	"_gumball_gumball_torso_side_stretch_x": {
		type: "bitmap",
		asset: "_gumball_gumball_torso_side_stretch_x",
		scale: 1,
		position: [-24.65, -40.85],
	},
	"_gumball_gumball_waist_side_x": {
		type: "bitmap",
		asset: "_gumball_gumball_waist_side_x",
		scale: 1,
		position: [-24.35, -19.4],
	},
	"_gumball_gumball_leg_knee_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_knee_x",
		scale: 1,
		position: [-17.25, -5.05],
	},
	"_gumball_gumball_leg_1_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_1_x",
		scale: 1,
		position: [-23.45, -9.95],
	},
	"_gumball_gumball_leg_8_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_8_x",
		scale: 1,
		position: [-12.35, -8.05],
	},
	"_gumball_head_idle": {
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
						to: 9,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.9, ty: -0.7},
						transform: [-3.9, -0.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 26,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: 4.95},
						transform: [-5.35, 4.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 27,
						to: 27,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.9, ty: -0.7},
						transform: [-3.9, -0.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 37,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.9, ty: -0.7},
						transform: [-3.9, -0.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 43,
						classname: "_gumball_gumball_head_scared_x_f22",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: 4.95},
						transform: [-5.35, 4.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.384, 0.105], [0.71, 0.474], [1, 1], ],
						}
					},
					{
						from: 44,
						to: 48,
						classname: "_gumball_gumball_head_scared_x_f22",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.85, ty: 2.15},
						transform: [-4.85, 2.15, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.386, 0.251], [0.679, 0.65], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 54,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.3, ty: 0.5},
						transform: [-4.3, 0.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.273, 0.504], [0.571, 0.935], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.9, ty: -0.7},
						transform: [-3.9, -0.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 65,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.9, ty: -0.7},
						transform: [-3.9, -0.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 66,
						to: 82,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -5.35, ty: 4.95},
						transform: [-5.35, 4.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 83,
						to: 83,
						classname: "_gumball_gumball_head_scared_x_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.9, ty: -0.7},
						transform: [-3.9, -0.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gumball_head_idle_up": {
		type: "movieclip",
		fps: 30,
		totalFrames: 81,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 10,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.9, ty: -0.85},
						transform: [-0.9, -0.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 11,
						to: 25,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.5, ty: -4.3},
						transform: [-3.5, -4.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 26,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.9, ty: -0.85},
						transform: [-0.9, -0.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 37,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.9, ty: -0.85},
						transform: [-0.9, -0.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 38,
						to: 42,
						classname: "_gumball_gumball_head_scared_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.5, ty: -4.3},
						transform: [-3.5, -4.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.409, 0.083], [0.723, 0.48], [1, 1], ],
						}
					},
					{
						from: 43,
						to: 47,
						classname: "_gumball_gumball_head_scared_x_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.9, ty: -3.5},
						transform: [-2.9, -3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.356, 0.303], [0.649, 0.697], [1, 1], ],
						}
					},
					{
						from: 48,
						to: 52,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -1.55, ty: -1.7},
						transform: [-1.55, -1.7, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.277, 0.525], [0.591, 0.925], [1, 1], ],
						}
					},
					{
						from: 53,
						to: 53,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.9, ty: -0.85},
						transform: [-0.9, -0.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 54,
						to: 64,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.9, ty: -0.85},
						transform: [-0.9, -0.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 65,
						to: 79,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -3.5, ty: -4.3},
						transform: [-3.5, -4.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.45, 0.065], [0.557, 0.942], [1, 1], ],
						}
					},
					{
						from: 80,
						to: 80,
						classname: "_gumball_gumball_head_scared_x_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.9, ty: -0.85},
						transform: [-0.9, -0.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gumball_hosepipe_ng_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_ng_x_f0",
		scale: 1,
		position: [-6.15, -34.5],
	},
	"_gumball_hosepipe_nc_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_nc_x_f0",
		scale: 1,
		position: [-5.15, -43.85],
	},
	"_gumball_hosepipe_ncc_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_ncc_x_f0",
		scale: 1,
		position: [-5.15, -51.4],
	},
	"_gumball_hosepipe_nf3_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_nf3_x_f0",
		scale: 1,
		position: [-12.45, -51.7],
	},
	"_gumball_hosepipe_n_x_f0": {
		type: "bitmap",
		asset: "_gumball_hosepipe_n_x_f0",
		scale: 1,
		position: [-6.2, -25.85],
	},
	"_gumball_cone": {
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
						classname: "_gumball_cone_15_x",
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
						classname: "_gumball_cone_15_x",
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
						classname: "_gumball_cone_15_x",
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
						classname: "_gumball_cone_15_x",
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
						classname: "_gumball_cone_15_x",
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
						classname: "_gumball_cone_15_x",
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
						classname: "_gumball_cone_15_x",
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
	"_gumball_tube_x": {
		type: "bitmap",
		asset: "_gumball_tube_x",
		scale: 1,
		position: [-77.1, -12.05],
	},
	"_gumball_gumball_arm_rect_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_rect_x",
		scale: 1,
		position: [-13.2, -6.5],
	},
	"_gumball_gumball_arm_rect2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_rect2_x",
		scale: 1,
		position: [-10.8, -8.4],
	},
	"_gumball_gumball_hand_grab_x": {
		type: "bitmap",
		asset: "_gumball_gumball_hand_grab_x",
		scale: 1,
		position: [-14.5, -8.8],
	},
	"_gumball_gumball_hand_grab2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_hand_grab2_x",
		scale: 1,
		position: [-14.05, -11.1],
	},
	"_gumball_gumball_hand_closed_x": {
		type: "bitmap",
		asset: "_gumball_gumball_hand_closed_x",
		scale: 1,
		position: [-14.45, -10.15],
	},
	"_gumball_box": {
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
	"_gumball_head_shoot": {
		type: "movieclip",
		fps: 30,
		totalFrames: 88,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 14,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 25,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 33,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 38,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 41,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 42,
						to: 46,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 47,
						to: 47,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 49,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 54,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 57,
						classname: "_gumball_gumball_head_scared_x_f21",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 58,
						to: 62,
						classname: "_gumball_gumball_head_scared_x_f21",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 65,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 66,
						to: 70,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 71,
						to: 71,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 72,
						to: 73,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 74,
						to: 78,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 79,
						to: 79,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 80,
						to: 81,
						classname: "_gumball_gumball_head_scared_x_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 82,
						to: 86,
						classname: "_gumball_gumball_head_scared_x_f21",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.1, ty: 0.3},
						transform: [2.1, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 87,
						to: 87,
						classname: "_gumball_gumball_head_scared_x_f21",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -2.1, ty: -0.3},
						transform: [-2.1, -0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gumball_head_shoot_up": {
		type: "movieclip",
		fps: 30,
		totalFrames: 152,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 2,
						to: 6,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 7,
						to: 7,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 9,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 14,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 15,
						to: 15,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 17,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 18,
						to: 22,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 23,
						to: 23,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 25,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 26,
						to: 30,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 33,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 38,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 41,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 42,
						to: 46,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 47,
						to: 47,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 48,
						to: 49,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 50,
						to: 54,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 55,
						to: 55,
						classname: "_gumball_gumball_head_scared_x_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 56,
						to: 57,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 58,
						to: 62,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 63,
						to: 63,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 64,
						to: 65,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 66,
						to: 70,
						classname: "_gumball_gumball_head_scared_x_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 71,
						to: 71,
						classname: "_gumball_gumball_head_scared_x_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 72,
						to: 73,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 74,
						to: 78,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 79,
						to: 79,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 80,
						to: 81,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 82,
						to: 86,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 87,
						to: 87,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 88,
						to: 89,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 90,
						to: 94,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 95,
						to: 95,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 96,
						to: 97,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 98,
						to: 102,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 103,
						to: 103,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 104,
						to: 105,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 106,
						to: 110,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 111,
						to: 111,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 112,
						to: 113,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 114,
						to: 118,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 119,
						to: 119,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 120,
						to: 121,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 122,
						to: 126,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 127,
						to: 127,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 128,
						to: 129,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 130,
						to: 134,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 135,
						to: 135,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 136,
						to: 137,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 138,
						to: 142,
						classname: "_gumball_gumball_head_scared_x_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 143,
						to: 143,
						classname: "_gumball_gumball_head_scared_x_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 144,
						to: 145,
						classname: "_gumball_gumball_head_scared_x_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 146,
						to: 150,
						classname: "_gumball_gumball_head_scared_x_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 2.15, ty: 3.5},
						transform: [2.15, 3.5, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.075, 0], [0.45, 0.966], [1, 1], ],
						}
					},
					{
						from: 151,
						to: 151,
						classname: "_gumball_gumball_head_scared_x_f20",
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
	"_gumball_tube_anim": {
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
						classname: "_gumball_tube_x",
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
						classname: "_gumball_tube_x",
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
						classname: "_gumball_tube_x",
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
						classname: "_gumball_tube_x",
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
						classname: "_gumball_tube_x",
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
						classname: "_gumball_tube_x",
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
	"_gumball_hose_1_f0": {
		type: "bitmap",
		asset: "_gumball_hose_1_f0",
		scale: 1,
		position: [-20.15, -47.9],
	},
	"_gumball_gumball_head_scared_x_f4": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f4",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_hand_beboteo": {
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
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
		]
	},
	"_gumball_gumball_arm_stretched_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_stretched_x",
		scale: 1,
		position: [-13.25, -12.85],
	},
	"_gumball_gumball_waist_side2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_waist_side2_x",
		scale: 1,
		position: [-24.75, -18.8],
	},
	"_gumball_pollaroid_button_x_f0": {
		type: "bitmap",
		asset: "_gumball_pollaroid_button_x_f0",
		scale: 1,
		position: [-12.15, -8.65],
	},
	"_gumball_pollaroid,back_x_f0": {
		type: "bitmap",
		asset: "_gumball_pollaroid,back_x_f0",
		scale: 1,
		position: [-46.15, -29.9],
	},
	"_gumball_pic_x_f1": {
		type: "bitmap",
		asset: "_gumball_pic_x_f1",
		scale: 1,
		position: [-104.95, -76.85],
	},
	"_gumball_pic_x_f0": {
		type: "bitmap",
		asset: "_gumball_pic_x_f0",
		scale: 1,
		position: [-104.95, -76.85],
	},
	"_gumball_fx_flash_f0": {
		type: "bitmap",
		asset: "_gumball_fx_flash_f0",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_gumball_fx_flash_f1": {
		type: "bitmap",
		asset: "_gumball_fx_flash_f1",
		scale: 1,
		position: [-9.55, -54.25],
	},
	"_gumball_gumball_arm_stretched_run2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_stretched_run2_x",
		scale: 1,
		position: [-13.25, -13.3],
	},
	"_gumball_gumball_leg_4_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_4_x",
		scale: 1,
		position: [-35.7, -12.55],
	},
	"_gumball_gumball_leg_5_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_5_x",
		scale: 1,
		position: [-30.6, -10.25],
	},
	"_gumball_gumball_leg_3_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_3_x",
		scale: 1,
		position: [-26.35, -10.75],
	},
	"_gumball_gumball_torso_side_more_x": {
		type: "bitmap",
		asset: "_gumball_gumball_torso_side_more_x",
		scale: 1,
		position: [-21.6, -40.8],
	},
	"_gumball_gumball_leg_stretched_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_stretched_x",
		scale: 1,
		position: [-17.05, -12.1],
	},
	"_gumball_gumball_leg_stretched2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_stretched2_x",
		scale: 1,
		position: [-29.95, -7.2],
	},
	"_gumball_gumball_leg_rect_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_rect_x",
		scale: 1,
		position: [-19.45, -8.65],
	},
	"_gumball_gumball_head_scared_x_f11": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f11",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_arm_stretched_run_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_stretched_run_x",
		scale: 1,
		position: [-13.25, -13.3],
	},
	"_gumball_fxv_x_f0": {
		type: "bitmap",
		asset: "_gumball_fxv_x_f0",
		scale: 1,
		position: [-8.4, -24.4],
	},
	"_gumball_fxv_x_f1": {
		type: "bitmap",
		asset: "_gumball_fxv_x_f1",
		scale: 1,
		position: [-8.4, -24.4],
	},
	"_gumball_fxv_x_f2": {
		type: "bitmap",
		asset: "_gumball_fxv_x_f2",
		scale: 1,
		position: [-8.4, -24.4],
	},
	"_gumball_gumball_leg_6_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_6_x",
		scale: 1,
		position: [-36.1, -12.6],
	},
	"_gumball_gumball_arm_curved_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_curved_x",
		scale: 1,
		position: [-29.9, -12.2],
	},
	"_gumball_gumball_arm_painback_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_painback_x",
		scale: 1,
		position: [-46.15, 5.15],
	},
	"_gumball_gumball_arm_quick_x_f4": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_quick_x_f4",
		scale: 1,
		position: [-145.5, -145.5],
	},
	"_gumball_gumball_arm_quick_x_f0": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_quick_x_f0",
		scale: 1,
		position: [-145.5, -145.5],
	},
	"_gumball_gumball_arm_quick_x_f1": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_quick_x_f1",
		scale: 1,
		position: [-145.5, -145.5],
	},
	"_gumball_gumball_arm_quick_x_f2": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_quick_x_f2",
		scale: 1,
		position: [-145.5, -145.5],
	},
	"_gumball_gumball_arm_quick_x_f3": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_quick_x_f3",
		scale: 1,
		position: [-145.5, -145.5],
	},
	"_gumball_gumball_torso_sidemore_stretch_x": {
		type: "bitmap",
		asset: "_gumball_gumball_torso_sidemore_stretch_x",
		scale: 1,
		position: [-21.6, -43.8],
	},
	"_gumball_gumball_head_scared_x_f13": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f13",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_head_scared_x_f14": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f14",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_head_scared_x_f15": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f15",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_arm_pain_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_pain_x",
		scale: 1,
		position: [-44.95, -10.95],
	},
	"_gumball_gumball_arm_die2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_die2_x",
		scale: 1,
		position: [-11.7, -9.8],
	},
	"_gumball_gumball_arm_curved2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_curved2_x",
		scale: 1,
		position: [-15.75, -14.1],
	},
	"_gumball_gumball_waist_die_x": {
		type: "bitmap",
		asset: "_gumball_gumball_waist_die_x",
		scale: 1,
		position: [-24.4, -17.6],
	},
	"_gumball_gumball_leg_knee2_x": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_knee2_x",
		scale: 1,
		position: [-17.05, 0.15000000000000036],
	},
	"_gumball_gumball_torso_back_more_x": {
		type: "bitmap",
		asset: "_gumball_gumball_torso_back_more_x",
		scale: 1,
		position: [-37.8, -33.4],
	},
	"_gumball_gumball_backpackside_x_f0": {
		type: "bitmap",
		asset: "_gumball_gumball_backpackside_x_f0",
		scale: 1,
		position: [-19.75, -44.6],
	},
	"_gumball_gumball_hand_palm_x": {
		type: "bitmap",
		asset: "_gumball_gumball_hand_palm_x",
		scale: 1,
		position: [-24.2, -12.95],
	},
	"_gumball_gumball_head_scared_x_f12": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f12",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_arm_die_x": {
		type: "bitmap",
		asset: "_gumball_gumball_arm_die_x",
		scale: 1,
		position: [-34.8, -12.35],
	},
	"_gumball_tears_f0": {
		type: "bitmap",
		asset: "_gumball_tears_f0",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f1": {
		type: "bitmap",
		asset: "_gumball_tears_f1",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f2": {
		type: "bitmap",
		asset: "_gumball_tears_f2",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f3": {
		type: "bitmap",
		asset: "_gumball_tears_f3",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f4": {
		type: "bitmap",
		asset: "_gumball_tears_f4",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f5": {
		type: "bitmap",
		asset: "_gumball_tears_f5",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f6": {
		type: "bitmap",
		asset: "_gumball_tears_f6",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f7": {
		type: "bitmap",
		asset: "_gumball_tears_f7",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f8": {
		type: "bitmap",
		asset: "_gumball_tears_f8",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f9": {
		type: "bitmap",
		asset: "_gumball_tears_f9",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f10": {
		type: "bitmap",
		asset: "_gumball_tears_f10",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_tears_f11": {
		type: "bitmap",
		asset: "_gumball_tears_f11",
		scale: 1,
		position: [-19.9, -22],
	},
	"_gumball_gumball_head_scared_x_f10": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f10",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_mouth_x_f0": {
		type: "bitmap",
		asset: "_gumball_mouth_x_f0",
		scale: 1,
		position: [-25.25, -10.7],
	},
	"_gumball_gumball_head_scared_x_f19": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f19",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_waist_back_x": {
		type: "bitmap",
		asset: "_gumball_gumball_waist_back_x",
		scale: 1,
		position: [-24.75, -18.95],
	},
	"_gumball_gumball_leg_back_x_f0": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_back_x_f0",
		scale: 1,
		position: [-15.05, -11.75],
	},
	"_gumball_gumball_leg_9_x_f0": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_9_x_f0",
		scale: 1,
		position: [-20.25, -9.75],
	},
	"_gumball_gumball_backpack_back_x_f0": {
		type: "bitmap",
		asset: "_gumball_gumball_backpack_back_x_f0",
		scale: 1,
		position: [-39.85, -60.35],
	},
	"_gumball_blackout": {
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
						classname: "_gumball_blackout_x",
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
	"_gumball_gumball_leg_front_x_f0": {
		type: "bitmap",
		asset: "_gumball_gumball_leg_front_x_f0",
		scale: 1,
		position: [-15.05, -11.75],
	},
	"_gumball_gumball_head_scared_x_f9": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f9",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_head_scared_x_f3": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f3",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_mouth_talking_f0": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f0",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f1": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f1",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f2": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f2",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f3": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f3",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f4": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f4",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f5": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f5",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f6": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f6",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f7": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f7",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f8": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f8",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f9": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f9",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f10": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f10",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f11": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f11",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f12": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f12",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f13": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f13",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f14": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f14",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f15": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f15",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f16": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f16",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f17": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f17",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f18": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f18",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f19": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f19",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f20": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f20",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f21": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f21",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f22": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f22",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f23": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f23",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f24": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f24",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f25": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f25",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f26": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f26",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f27": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f27",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f28": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f28",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f29": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f29",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f30": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f30",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f31": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f31",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f32": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f32",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f33": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f33",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f34": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f34",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f35": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f35",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f36": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f36",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f37": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f37",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f38": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f38",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f39": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f39",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f40": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f40",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f41": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f41",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f42": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f42",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f43": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f43",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f44": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f44",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f45": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f45",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f46": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f46",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f47": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f47",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f48": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f48",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f49": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f49",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f50": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f50",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f51": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f51",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f52": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f52",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f53": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f53",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f54": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f54",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f55": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f55",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f56": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f56",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f57": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f57",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f58": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f58",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f59": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f59",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f60": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f60",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f61": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f61",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f62": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f62",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f63": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f63",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f64": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f64",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_mouth_talking_f65": {
		type: "bitmap",
		asset: "_gumball_mouth_talking_f65",
		scale: 1,
		position: [-28.15, -31.45],
	},
	"_gumball_gumball_head_scared_x_f0": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f0",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_iris1_x_f0": {
		type: "bitmap",
		asset: "_gumball_iris1_x_f0",
		scale: 1,
		position: [-13.55, -11.7],
	},
	"_gumball_iris2_x_f0": {
		type: "bitmap",
		asset: "_gumball_iris2_x_f0",
		scale: 1,
		position: [-13.5, -11.6],
	},
	"_gumball_gumball_head_scared_x_f22": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f22",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_head_scared_x_f23": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f23",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_cone_15_x": {
		type: "bitmap",
		asset: "_gumball_cone_15_x",
		scale: 1,
		position: [-5, -116],
	},
	"_gumball_gumball_head_scared_x_f18": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f18",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_head_scared_x_f21": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f21",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_head_scared_x_f8": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f8",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_gumball_head_scared_x_f20": {
		type: "bitmap",
		asset: "_gumball_gumball_head_scared_x_f20",
		scale: 1,
		position: [-162.85, -162.85],
	},
	"_gumball_blackout_x": {
		type: "bitmap",
		asset: "_gumball_blackout_x",
		scale: 1,
		position: [-74.05, -131],
	},
};
