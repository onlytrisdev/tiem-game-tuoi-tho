export const gui = {
	"ghost_healthbars": {
		type: "movieclip",
		fps: 24,
		totalFrames: 20,
		labels: {idle: {from:0, to:1}, in: {from:2, to:9}, out: {from:10, to:14}, drop: {from:15, to:19}, },
		layers: [
			{
				name: "clock",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_ghost_healthbar_big_timer_clock_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 8,
						classname: "_gui_ghost_healthbar_big_timer_clock_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_gui_ghost_healthbar_big_timer_clock_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
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
						classname: "_gui_ghost_healthbar_big_timer_clock_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 15,
						to: 19,
						classname: "_gui_ghost_healthbar_big_timer_clock_anim_empty",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "script",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						actions: function(self){self.stop();},
					},
					{
						from: 2,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						actions: function(self){self.stop();},
					},
					{
						from: 10,
						to: 13,
					},
					{
						from: 14,
						to: 14,
						actions: function(self){self.stop();},
					},
					{
						from: 15,
						to: 18,
					},
					{
						from: 19,
						to: 19,
						actions: function(self){self.stop();},
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 9,
					},
					{
						from: 10,
						to: 14,
					},
					{
						from: 15,
						to: 19,
					},
				]
			},
		]
	},
	"_gui_ghost_healthbar_big_timer_clock_anim": {
		type: "movieclip",
		fps: 24,
		totalFrames: 33,
		labels: {},
		layers: [
			{
				name: "shadow_clock",
				keys: [
					{
						from: 0,
						to: 32,
						classname: "_gui_ghost_healthbar_big_timer_clock_shadow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mask_clock",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f32",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f31",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f30",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f29",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f28",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f27",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f26",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f25",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f22",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f21",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f19",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f17",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f16",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f15",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f13",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f12",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f11",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f10",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 25,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f7",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f6",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 27,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f5",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 28,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 29,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 30,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 31,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_gui_ghost_healthbar_big_reverse_clock_mask_f0",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 32,
					},
				]
			},
		]
	},
	"_gui_ghost_healthbar_big_timer_clock_anim_empty": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "shadow_clock",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_ghost_healthbar_big_timer_clock_shadow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 0.3},
						transform: [-0.35, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mask_clock",
				keys: [
					{
						from: 0,
						to: 0,
					},
				]
			},
		]
	},
	"_gui_ghost_healthbar_big_timer_clock_shadow_x": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_timer_clock_shadow_x",
		scale: 1,
		position: [-69.35, -69],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f32": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f32",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f31": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f31",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f30": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f30",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f29": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f29",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f28": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f28",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f27": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f27",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f26": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f26",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f25": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f25",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f24": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f24",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f23": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f23",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f22": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f22",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f21": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f21",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f20": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f20",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f19": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f19",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f18": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f18",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f17": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f17",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f16": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f16",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f15": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f15",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f14": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f14",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f13": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f13",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f12": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f12",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f11": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f11",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f10": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f10",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f9": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f9",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f8": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f8",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f7": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f7",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f6": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f6",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f5": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f5",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f4": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f4",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f3": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f3",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f2": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f2",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f1": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f1",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_big_reverse_clock_mask_f0": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_big_reverse_clock_mask_f0",
		scale: 1,
		position: [-133, -133],
	},
	"gui": {
		type: "movieclip",
		fps: 24,
		totalFrames: 2,
		labels: {},
		layers: [
			{
				name: "ghosts_ui",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "empty",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "health",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_health_element",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "pause",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_pause",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1280, ty: 0},
						transform: [1280, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "polaroid",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_polaroid",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 1280, ty: 720},
						transform: [1280, 720, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "characters",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_characters",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 720},
						transform: [0, 720, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "dialog_box",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_dialog_box_dialog_box",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640, ty: 0},
						transform: [640, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tutorial_hand",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_hand_tutorial_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 753.9, ty: -395.2},
						transform: [753.9, -395.2, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "tutorial_input",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "tutorial_input_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640, ty: 800},
						transform: [640, 800, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "title",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_title_title_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 640, ty: 0},
						transform: [640, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mute",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_mute",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "borders",
				keys: [
					{
						from: 0,
						to: 1,
					},
				]
			},
		]
	},
	"empty": {
		type: "movieclip",
		fps: 24,
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
	"_gui_health_element": {
		type: "movieclip",
		fps: 24,
		totalFrames: 36,
		labels: {in: {from:6, to:20}, out: {from:21, to:35}, },
		layers: [
			{
				name: "healthbar",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gui_player_healthbar_life_bar",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: -86.9},
						transform: [60, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 15,
						classname: "_gui_player_healthbar_life_bar",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: -86.9},
						transform: [60, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_gui_player_healthbar_life_bar",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 81.4},
						transform: [60, 81.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_gui_player_healthbar_life_bar",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 59.4},
						transform: [60, 59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 24,
						classname: "_gui_player_healthbar_life_bar",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 59.4},
						transform: [60, 59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 34,
						classname: "_gui_player_healthbar_life_bar",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 83},
						transform: [60, 83, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_gui_player_healthbar_life_bar",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: -86.9},
						transform: [60, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 20,
					},
					{
						from: 21,
						to: 35,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 5,
						actions: function(self){self.stop();},
					},
					{
						from: 6,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){self.stop();},
					},
					{
						from: 21,
						to: 34,
					},
					{
						from: 35,
						to: 35,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gui_pause": {
		type: "movieclip",
		fps: 24,
		totalFrames: 36,
		labels: {in: {from:6, to:20}, out: {from:21, to:35}, },
		layers: [
			{
				name: "button",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gui_buttons_pause_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -59.6, ty: -86.9},
						transform: [-59.6, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 15,
						classname: "_gui_buttons_pause_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -60, ty: -86.9},
						transform: [-60, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_gui_buttons_pause_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -60, ty: 81.4},
						transform: [-60, 81.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_gui_buttons_pause_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -60, ty: 59.4},
						transform: [-60, 59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 24,
						classname: "_gui_buttons_pause_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -60, ty: 59.4},
						transform: [-60, 59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 34,
						classname: "_gui_buttons_pause_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -60, ty: 83},
						transform: [-60, 83, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_gui_buttons_pause_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -60, ty: -86.9},
						transform: [-60, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 20,
					},
					{
						from: 21,
						to: 35,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 5,
						actions: function(self){self.stop();},
					},
					{
						from: 6,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){self.stop();},
					},
					{
						from: 21,
						to: 34,
					},
					{
						from: 35,
						to: 35,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gui_polaroid": {
		type: "movieclip",
		fps: 24,
		totalFrames: 36,
		labels: {in: {from:6, to:20}, out: {from:21, to:35}, },
		layers: [
			{
				name: "button",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gui_buttons_camera_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -80, ty: 86.9},
						transform: [-80, 86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 15,
						classname: "_gui_buttons_camera_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -80, ty: 86.9},
						transform: [-80, 86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_gui_buttons_camera_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -80, ty: -81.4},
						transform: [-80, -81.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_gui_buttons_camera_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -80, ty: -59.4},
						transform: [-80, -59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 24,
						classname: "_gui_buttons_camera_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -80, ty: -59.4},
						transform: [-80, -59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 34,
						classname: "_gui_buttons_camera_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -80, ty: -83},
						transform: [-80, -83, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_gui_buttons_camera_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -80, ty: 86.9},
						transform: [-80, 86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 20,
					},
					{
						from: 21,
						to: 35,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 5,
						actions: function(self){self.stop();},
					},
					{
						from: 6,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){self.stop();},
					},
					{
						from: 21,
						to: 34,
					},
					{
						from: 35,
						to: 35,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gui_characters": {
		type: "movieclip",
		fps: 24,
		totalFrames: 36,
		labels: {in: {from:6, to:20}, out: {from:21, to:35}, },
		layers: [
			{
				name: "button",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_gui_buttons_change_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80, ty: 86.9},
						transform: [80, 86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 15,
						classname: "_gui_buttons_change_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80, ty: 86.9},
						transform: [80, 86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_gui_buttons_change_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80, ty: -81.4},
						transform: [80, -81.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_gui_buttons_change_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80, ty: -59.4},
						transform: [80, -59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 24,
						classname: "_gui_buttons_change_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80, ty: -59.4},
						transform: [80, -59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 34,
						classname: "_gui_buttons_change_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80, ty: -83},
						transform: [80, -83, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_gui_buttons_change_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 80, ty: 86.9},
						transform: [80, 86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 20,
					},
					{
						from: 21,
						to: 35,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 5,
						actions: function(self){self.stop();},
					},
					{
						from: 6,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){self.stop();},
					},
					{
						from: 21,
						to: 34,
					},
					{
						from: 35,
						to: 35,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gui_dialog_box_dialog_box": {
		type: "movieclip",
		fps: 24,
		totalFrames: 26,
		labels: {in: {from:2, to:16}, out: {from:17, to:25}, },
		layers: [
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 25,
						classname: "_gui_box_x",
						instancename: "",
						matrix: {a: 16.388, b: 0, c: 0, d: 8.236, tx: 0, ty: 359.95},
						transform: [0, 359.95, 16.388, 8.236, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "box",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_dialog_box_dialog_box_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -126.95},
						transform: [0, -126.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 8,
						classname: "_gui_dialog_box_dialog_box_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -126.95},
						transform: [0, -126.95, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 9,
						to: 12,
						classname: "_gui_dialog_box_dialog_box_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 142.55},
						transform: [0, 142.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 13,
						to: 15,
						classname: "_gui_dialog_box_dialog_box_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 122.55},
						transform: [0, 122.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.343, 0], [0.653, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 16,
						classname: "_gui_dialog_box_dialog_box_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 142.55},
						transform: [0, 142.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 19,
						classname: "_gui_dialog_box_dialog_box_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 142.55},
						transform: [0, 142.55, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.0033299999999999996], [0.666, 0.33633], [1, 1]],
						}
					},
					{
						from: 20,
						to: 24,
						classname: "_gui_dialog_box_dialog_box_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 164},
						transform: [0, 164, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.0033299999999999996], [0.666, 0.33633], [1, 1]],
						}
					},
					{
						from: 25,
						to: 25,
						classname: "_gui_dialog_box_dialog_box_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -126.95},
						transform: [0, -126.95, 1, 1, 0, 0, 0],
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
						to: 15,
					},
					{
						from: 16,
						to: 17,
						classname: "shadow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -67.3, ty: 258.45},
						transform: [-67.3, 258.45, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 25,
					},
				]
			},
			{
				name: "text",
				keys: [
					{
						from: 0,
						to: 15,
						classname: "_gui_dialog_box_dialog_text",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -235, ty: 294},
						transform: [-235, 294, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_gui_dialog_box_dialog_text",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -235, ty: 294},
						transform: [-235, 294, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_gui_dialog_box_dialog_text",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -235, ty: 294},
						transform: [-235, 294, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 25,
						classname: "_gui_dialog_box_dialog_text",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -235, ty: 294},
						transform: [-235, 294, 1, 1, 0, 0, 0],
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
						to: 1,
					},
					{
						from: 2,
						to: 16,
					},
					{
						from: 17,
						to: 25,
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
						to: 1,
						actions: function(self){self.stop();},
					},
					{
						from: 2,
						to: 15,
					},
					{
						from: 16,
						to: 16,
						actions: function(self){self.stop();},
					},
					{
						from: 17,
						to: 24,
					},
					{
						from: 25,
						to: 25,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gui_hand_tutorial_anim": {
		type: "movieclip",
		fps: 24,
		totalFrames: 20,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_gui_tutorial_hand_x",
						instancename: "",
						matrix: {a: 0, b: 1, c: -1, d: 0, tx: 156.45, ty: 30.7},
						transform: [156.45, 30.7, 1, 1, -1.571, 1.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.778, 0], [0.333, 1], [1, 1], ],
						}
					},
					{
						from: 9,
						to: 18,
						classname: "_gui_tutorial_hand_x",
						instancename: "",
						matrix: {a: 0, b: 1, c: -1, d: 0, tx: 98.5, ty: 30.7},
						transform: [98.5, 30.7, 1, 1, -1.571, 1.571, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.7, 0], [0.3, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gui_tutorial_hand_x",
						instancename: "",
						matrix: {a: 0, b: 1, c: -1, d: 0, tx: 156.45, ty: 30.7},
						transform: [156.45, 30.7, 1, 1, -1.571, 1.571, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"tutorial_input_anim": {
		type: "movieclip",
		fps: 24,
		totalFrames: 20,
		labels: {in: {from:1, to:9}, out: {from:10, to:19}, },
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_tutorial2,copy",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: false,
						tween: false,
						easing: {
							all: [[0, 0], [0.667, 0], [0.333, 1], [1, 1], ],
						}
					},
					{
						from: 1,
						to: 9,
						classname: "_gui_tutorial2,copy",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.667, 0], [0.333, 1], [1, 1], ],
						}
					},
					{
						from: 10,
						to: 18,
						classname: "_gui_tutorial2,copy",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -171.4},
						transform: [0, -171.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.7, 0], [0.3, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 19,
						classname: "_gui_tutorial2,copy",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: false,
						tween: false,
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
					{
						from: 1,
						to: 9,
					},
					{
						from: 10,
						to: 19,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 9,
					},
					{
						from: 10,
						to: 10,
						actions: function(self){self.stop();},
					},
					{
						from: 11,
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
	"_title_title_anim": {
		type: "movieclip",
		fps: 24,
		totalFrames: 70,
		labels: {in: {from:2, to:39}, out: {from:40, to:68}, out_end: {from:69, to:69}, },
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 69,
						classname: "_gui_box_x",
						instancename: "",
						matrix: {a: 16.388, b: 0, c: 0, d: 8.236, tx: 0, ty: 359.95},
						transform: [0, 359.95, 16.388, 8.236, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "blackout",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 52,
						classname: "_title_title_blackout_x",
						instancename: "",
						matrix: {a: 6.123, b: 0, c: 0, d: 3.812, tx: 0, ty: 447.85},
						transform: [0, 447.85, 6.123, 3.812, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: false,
					},
					{
						from: 53,
						to: 68,
						classname: "_title_title_blackout_x",
						instancename: "",
						matrix: {a: 6.123, b: 0, c: 0, d: 3.812, tx: 0, ty: 447.85},
						transform: [0, 447.85, 6.123, 3.812, 0, 0, 0],
						alpha: 0.5,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 69,
						to: 69,
						classname: "_title_title_blackout_x",
						instancename: "",
						matrix: {a: 6.123, b: 0, c: 0, d: 3.812, tx: 0, ty: 447.85},
						transform: [0, 447.85, 6.123, 3.812, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "game_title",
				keys: [
					{
						from: 0,
						to: 22,
						classname: "_title_title_compo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 231.3},
						transform: [0, 231.3, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 38,
						classname: "_title_title_compo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 231.3},
						transform: [0, 231.3, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_title_title_compo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 231.3},
						transform: [0, 231.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 48,
						classname: "_title_title_compo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 231.3},
						transform: [0, 231.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 49,
						to: 69,
						classname: "_title_title_compo",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 231.3},
						transform: [0, 231.3, 1, 1, 0, 0, 0],
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
						to: 1,
					},
					{
						from: 2,
						to: 11,
						classname: "_title_the_amazing_world_of_gumball_logo_lines_x",
						instancename: "",
						matrix: {a: 3.047, b: 0, c: 0, d: 3.047, tx: 0, ty: 110.1},
						transform: [0, 110.1, 3.047, 3.047, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 12,
						to: 18,
						classname: "_title_the_amazing_world_of_gumball_logo_lines_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 110.1},
						transform: [0, 110.1, 1, 1, 0, 0, 0],
						alpha: 0.59,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 69,
					},
				]
			},
			{
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 3,
					},
					{
						from: 4,
						to: 13,
						classname: "_title_the_amazing_world_of_gumball_logo_lines_x",
						instancename: "",
						matrix: {a: 3.047, b: 0, c: 0, d: 3.047, tx: 0, ty: 110.1},
						transform: [0, 110.1, 3.047, 3.047, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 14,
						to: 18,
						classname: "_title_the_amazing_world_of_gumball_logo_lines_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 110.1},
						transform: [0, 110.1, 1, 1, 0, 0, 0],
						alpha: 0.59,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 69,
					},
				]
			},
			{
				name: "Layer 7",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 15,
						classname: "_title_the_amazing_world_of_gumball_logo_lines_x",
						instancename: "",
						matrix: {a: 3.047, b: 0, c: 0, d: 3.047, tx: 0, ty: 110.1},
						transform: [0, 110.1, 3.047, 3.047, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 16,
						to: 18,
						classname: "_title_the_amazing_world_of_gumball_logo_lines_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 110.1},
						transform: [0, 110.1, 1, 1, 0, 0, 0],
						alpha: 0.59,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 69,
					},
				]
			},
			{
				name: "Layer 8",
				keys: [
					{
						from: 0,
						to: 7,
					},
					{
						from: 8,
						to: 17,
						classname: "_title_the_amazing_world_of_gumball_logo_lines_x",
						instancename: "",
						matrix: {a: 3.047, b: 0, c: 0, d: 3.047, tx: 0, ty: 110.1},
						transform: [0, 110.1, 3.047, 3.047, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 18,
						to: 18,
						classname: "_title_the_amazing_world_of_gumball_logo_lines_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 110.1},
						transform: [0, 110.1, 1, 1, 0, 0, 0],
						alpha: 0.59,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 69,
					},
				]
			},
			{
				name: "Layer 10",
				keys: [
					{
						from: 0,
						to: 17,
					},
					{
						from: 18,
						to: 22,
						classname: "_title_the_amazing_world_of_gumball_logo_white_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 110.1},
						transform: [0, 110.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 57,
					},
					{
						from: 58,
						to: 58,
					},
					{
						from: 59,
						to: 69,
					},
				]
			},
			{
				name: "Layer 11",
				keys: [
					{
						from: 0,
						to: 17,
					},
					{
						from: 18,
						to: 22,
						classname: "_title_the_amazing_world_of_gumball_logo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 110.1},
						transform: [0, 110.1, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 23,
						to: 49,
						classname: "_title_the_amazing_world_of_gumball_logo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 110.1},
						transform: [0, 110.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 50,
						to: 52,
						classname: "_title_the_amazing_world_of_gumball_logo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 110.1},
						transform: [0, 110.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 53,
						to: 56,
						classname: "_title_the_amazing_world_of_gumball_logo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 130.1},
						transform: [0, 130.1, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 57,
						to: 57,
						classname: "_title_the_amazing_world_of_gumball_logo_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -79.9},
						transform: [0, -79.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 58,
						to: 69,
					},
				]
			},
			{
				name: "Layer 4",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 39,
					},
					{
						from: 40,
						to: 68,
					},
					{
						from: 69,
						to: 69,
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
						to: 1,
						actions: function(self){self.stop();},
					},
					{
						from: 2,
						to: 38,
					},
					{
						from: 39,
						to: 39,
						actions: function(self){self.stop();},
					},
					{
						from: 40,
						to: 68,
					},
					{
						from: 69,
						to: 69,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gui_mute": {
		type: "movieclip",
		fps: 24,
		totalFrames: 36,
		labels: {in: {from:6, to:20}, out: {from:21, to:35}, },
		layers: [
			{
				name: "button",
				keys: [
					{
						from: 0,
						to: 5,
						classname: "_title_buttons_sound_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: -86.9},
						transform: [60, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 6,
						to: 15,
						classname: "_title_buttons_sound_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: -86.9},
						transform: [60, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
					{
						from: 16,
						to: 19,
						classname: "_title_buttons_sound_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 81.4},
						transform: [60, 81.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.444, 0], [0.556, 1], [1, 1], ],
						}
					},
					{
						from: 20,
						to: 20,
						classname: "_title_buttons_sound_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 59.4},
						transform: [60, 59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 24,
						classname: "_title_buttons_sound_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 59.4},
						transform: [60, 59.4, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.565, 1], [1, 1], ],
						}
					},
					{
						from: 25,
						to: 34,
						classname: "_title_buttons_sound_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 83},
						transform: [60, 83, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.478, 0], [0.833, 0.64], [1, 1], ],
						}
					},
					{
						from: 35,
						to: 35,
						classname: "_title_buttons_sound_btn",
						instancename: "resume_btn",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: -86.9},
						transform: [60, -86.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.224, 0.37], [0.573, 1], [1, 1], ],
						}
					},
				]
			},
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 5,
					},
					{
						from: 6,
						to: 20,
					},
					{
						from: 21,
						to: 35,
					},
				]
			},
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 5,
						actions: function(self){self.stop();},
					},
					{
						from: 6,
						to: 19,
					},
					{
						from: 20,
						to: 20,
						actions: function(self){self.stop();},
					},
					{
						from: 21,
						to: 34,
					},
					{
						from: 35,
						to: 35,
						actions: function(self){self.stop();},
					},
				]
			},
		]
	},
	"_gui_player_healthbar_life_bar": {
		type: "movieclip",
		fps: 24,
		totalFrames: 13,
		labels: {},
		layers: [
			{
				name: "containers",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_gui_player_healthbar_life_bar_hearts_container",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "hearts",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_gui_player_healthbar_life_bar_hearts",
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
	"_gui_buttons_pause_btn": {
		type: "movieclip",
		fps: 24,
		totalFrames: 13,
		labels: {over: {from:0, to:6}, down: {from:7, to:12}, },
		layers: [
			{
				name: "icon",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_gui_buttons_pause_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_gui_buttons_pause_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "sign",
				keys: [
					{
						from: 0,
						to: 12,
						classname: "_gui_buttons_details_sticker_sign_x",
						instancename: "",
						matrix: {a: 0.66, b: 0, c: 0, d: 0.66, tx: -45.2, ty: -4.9},
						transform: [-45.2, -4.9, 0.66, 0.66, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "script",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 12,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 12,
					},
				]
			},
		]
	},
	"_gui_buttons_camera_btn": {
		type: "movieclip",
		fps: 24,
		totalFrames: 20,
		labels: {on: {from:0, to:6}, down: {from:7, to:12}, off: {from:13, to:19}, },
		layers: [
			{
				name: "icon",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_gui_camera_camera_1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_gui_camera_camera_2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 19,
						classname: "_gui_camera_camera_3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flash0",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_gui_buttons_flash_timer",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 0.5, tx: 0, ty: -75},
						transform: [0, -75, 0.5, 0.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flash1",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_gui_buttons_flash_timer",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 0.5, tx: 0, ty: -145},
						transform: [0, -145, 0.5, 0.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flash2",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_gui_buttons_flash_timer",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 0.5, tx: 0, ty: -215},
						transform: [0, -215, 0.5, 0.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "flash3",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_gui_buttons_flash_timer",
						instancename: "",
						matrix: {a: 0.5, b: 0, c: 0, d: 0.5, tx: 0, ty: -285},
						transform: [0, -285, 0.5, 0.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "script",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 19,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 12,
					},
					{
						from: 13,
						to: 19,
					},
				]
			},
		]
	},
	"_gui_buttons_change_btn": {
		type: "movieclip",
		fps: 24,
		totalFrames: 29,
		labels: {darwin: {from:0, to:8}, gumball: {from:9, to:18}, anais: {from:19, to:28}, },
		layers: [
			{
				name: "icon",
				keys: [
					{
						from: 0,
						to: 8,
						classname: "_gui_buttons_darwin_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 18,
						classname: "_gui_buttons_gumball_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 28,
						classname: "_gui_buttons_anais_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "script",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 28,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 8,
					},
					{
						from: 9,
						to: 18,
					},
					{
						from: 19,
						to: 28,
					},
				]
			},
		]
	},
	"_gui_box_x": {
		type: "bitmap",
		asset: "_gui_box_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_dialog_box_dialog_box_container": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "container",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_dialog_box_dialog_box_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "text",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_dialog_box_dialog_text",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -235, ty: 0},
						transform: [-235, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "characters",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_dialog_box_characters",
						instancename: "",
						matrix: {a: 0.983, b: 0, c: 0, d: 0.98, tx: -354.65, ty: 0},
						transform: [-354.65, 0, 0.983, 0.98, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"shadow_x": {
		type: "bitmap",
		asset: "shadow_x",
		scale: 1,
		position: [-202.2, -21.75],
	},
	"_gui_dialog_box_dialog_text": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "tf",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "Text",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -11.05, ty: -55.25},
						transform: [0, -57.25, 1, 1, 0, 0, 0],
						text: "At vero eos et accusamus|et iusto odio dignissimos |ducimus qui blanditiis ",
						alpha: 1,
						visible: true,
						size: 30,
						width: 650,
						height: 114.5,
						font: "Dunkirk",
						color: "#FFFFFF",
						alignment: "left",
					},
				]
			},
		]
	},
	"_gui_tutorial_hand_x": {
		type: "bitmap",
		asset: "_gui_tutorial_hand_x",
		scale: 1,
		position: [-127.45, -127.45],
	},
	"_gui_tutorial2,copy": {
		type: "movieclip",
		fps: 24,
		totalFrames: 100,
		labels: {},
		layers: [
			{
				name: "Layer 6",
				keys: [
					{
						from: 0,
						to: 11,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 1, tx: -173.15, ty: 2.8},
						transform: [-173.15, 2.8, 0.1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 12,
						to: 18,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -131.85, ty: 2.85},
						transform: [-131.85, 2.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 28,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -38.75, ty: 2.85},
						transform: [-38.75, 2.85, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 29,
						to: 33,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 72.95, ty: 2.8},
						transform: [72.95, 2.8, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 34,
						to: 38,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: 1.14, b: 0, c: 0, d: 1, tx: 106.8, ty: 2.85},
						transform: [106.8, 2.85, 1.14, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 48,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 128.35, ty: 2.9},
						transform: [128.35, 2.9, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.667, 0.667], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 52,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: 0.1, b: 0, c: 0, d: 1, tx: 151.85, ty: 2.8},
						transform: [151.85, 2.8, 0.1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 53,
						to: 62,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: -0.1, b: 0, c: 0, d: 1, tx: 151.85, ty: 2.8},
						transform: [151.85, 2.8, 0.1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 63,
						to: 68,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 102.25, ty: 2.8},
						transform: [102.25, 2.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 69,
						to: 78,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 32.9, ty: 2.8},
						transform: [32.9, 2.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 79,
						to: 83,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -75.9, ty: 2.8},
						transform: [-75.9, 2.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 84,
						to: 88,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -106.35, ty: 2.8},
						transform: [-106.35, 2.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 89,
						to: 98,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: -127.75, ty: 2.8},
						transform: [-127.75, 2.8, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 99,
						to: 99,
						classname: "_gui_tutorial_stroke_tutorial_x",
						instancename: "",
						matrix: {a: -0.1, b: 0, c: 0, d: 1, tx: -160.65, ty: 2.8},
						transform: [-160.65, 2.8, 0.1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "stickerhand_x",
				keys: [
					{
						from: 0,
						to: 38,
						classname: "_gui_tutorial_hand_x",
						instancename: "",
						matrix: {a: -0.594, b: 0.081, c: -0.081, d: -0.594, tx: -168.95, ty: 29.2},
						transform: [-168.95, 29.2, 0.6, 0.6, -3.006, 3.006, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0], [0.621, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 48,
						classname: "_gui_tutorial_hand_x",
						instancename: "",
						matrix: {a: -0.587, b: -0.122, c: 0.122, d: -0.587, tx: 133.85, ty: 30.55},
						transform: [133.85, 30.55, 0.6, 0.6, 2.936, -2.936, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0], [0.621, 1], [1, 1], ],
						}
					},
					{
						from: 49,
						to: 88,
						classname: "_gui_tutorial_hand_x",
						instancename: "",
						matrix: {a: -0.6, b: 0.018, c: -0.018, d: -0.6, tx: 136, ty: 31.75},
						transform: [136, 31.75, 0.6, 0.6, -3.111, 3.111, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.38, 0], [0.621, 1], [1, 1], ],
						}
					},
					{
						from: 89,
						to: 98,
						classname: "_gui_tutorial_hand_x",
						instancename: "",
						matrix: {a: -0.552, b: 0.232, c: -0.232, d: -0.552, tx: -156.4, ty: 29.65},
						transform: [-156.4, 29.65, 0.599, 0.599, -2.744, 2.744, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 99,
						to: 99,
						classname: "_gui_tutorial_hand_x",
						instancename: "",
						matrix: {a: -0.594, b: 0.081, c: -0.081, d: -0.594, tx: -168.95, ty: 29.2},
						transform: [-168.95, 29.2, 0.6, 0.6, -3.006, 3.006, NaN],
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
	"_title_title_blackout_x": {
		type: "bitmap",
		asset: "_title_title_blackout_x",
		scale: 1,
		position: [-133, -133],
	},
	"_title_title_compo": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "title1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_title_title",
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
	"_title_the_amazing_world_of_gumball_logo_lines_x": {
		type: "bitmap",
		asset: "_title_the_amazing_world_of_gumball_logo_lines_x",
		scale: 1,
		position: [-133, -69],
	},
	"_title_the_amazing_world_of_gumball_logo_white_x": {
		type: "bitmap",
		asset: "_title_the_amazing_world_of_gumball_logo_white_x",
		scale: 1,
		position: [-133, -69],
	},
	"_title_the_amazing_world_of_gumball_logo_x": {
		type: "bitmap",
		asset: "_title_the_amazing_world_of_gumball_logo_x",
		scale: 1,
		position: [-133, -91.4],
	},
	"_title_buttons_sound_btn": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "on",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_title_buttons_sound_on_btn",
						instancename: "music_on",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "off",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_title_buttons_sound_off_btn",
						instancename: "music_on",
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
	"_gui_player_healthbar_life_bar_hearts_container": {
		type: "movieclip",
		fps: 24,
		totalFrames: 61,
		labels: {to0: {from:0, to:0}, to4: {from:10, to:10}, to8: {from:20, to:20}, to12: {from:30, to:30}, to16: {from:40, to:40}, to20: {from:50, to:50}, to24: {from:60, to:60}, },
		layers: [
			{
				name: "heart0",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 0, ty: 0},
						transform: [0, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 10,
						to: 60,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart1",
				keys: [
					{
						from: 0,
						to: 9,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 59.95, ty: 0},
						transform: [59.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 19,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 59.95, ty: 0},
						transform: [59.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 20,
						to: 60,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart2",
				keys: [
					{
						from: 0,
						to: 19,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 119.95, ty: 0},
						transform: [119.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 29,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 119.95, ty: 0},
						transform: [119.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 30,
						to: 60,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart3",
				keys: [
					{
						from: 0,
						to: 29,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 179.95, ty: 0},
						transform: [179.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 39,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 179.95, ty: 0},
						transform: [179.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 40,
						to: 60,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart4",
				keys: [
					{
						from: 0,
						to: 39,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 239.95, ty: 0},
						transform: [239.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 40,
						to: 49,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 239.95, ty: 0},
						transform: [239.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 50,
						to: 60,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart5",
				keys: [
					{
						from: 0,
						to: 49,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 299.95, ty: 0},
						transform: [299.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 50,
						to: 59,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1.2, b: 0, c: 0, d: 1.2, tx: 299.95, ty: 0},
						transform: [299.95, 0, 1.2, 1.2, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 60,
						to: 60,
						classname: "_gui_player_healthbar_heart_container_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
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
						to: 9,
					},
					{
						from: 10,
						to: 10,
					},
					{
						from: 11,
						to: 19,
					},
					{
						from: 20,
						to: 20,
					},
					{
						from: 21,
						to: 29,
					},
					{
						from: 30,
						to: 30,
					},
					{
						from: 31,
						to: 39,
					},
					{
						from: 40,
						to: 40,
					},
					{
						from: 41,
						to: 49,
					},
					{
						from: 50,
						to: 50,
					},
					{
						from: 51,
						to: 59,
					},
					{
						from: 60,
						to: 60,
					},
				]
			},
		]
	},
	"_gui_player_healthbar_life_bar_hearts": {
		type: "movieclip",
		fps: 24,
		totalFrames: 121,
		labels: {to0: {from:0, to:0}, to1: {from:5, to:5}, to2: {from:10, to:10}, to3: {from:15, to:15}, to4: {from:20, to:20}, to5: {from:25, to:25}, to6: {from:30, to:30}, to7: {from:35, to:35}, to8: {from:40, to:40}, to9: {from:45, to:45}, to10: {from:50, to:50}, to11: {from:55, to:55}, to12: {from:60, to:60}, to13: {from:65, to:65}, to14: {from:70, to:70}, to15: {from:75, to:75}, to16: {from:80, to:80}, to17: {from:85, to:85}, to18: {from:90, to:90}, to19: {from:95, to:95}, to20: {from:100, to:100}, to21: {from:105, to:105}, to22: {from:110, to:110}, to23: {from:115, to:115}, to24: {from:120, to:120}, },
		layers: [
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 4,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 5,
						to: 120,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 4,
					},
					{
						from: 5,
						to: 9,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 10,
						to: 120,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 9,
					},
					{
						from: 10,
						to: 14,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 15,
						to: 120,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 14,
					},
					{
						from: 15,
						to: 19,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 20,
						to: 120,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 19,
					},
					{
						from: 20,
						to: 24,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 25,
						to: 120,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 24,
					},
					{
						from: 25,
						to: 29,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 30,
						to: 120,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 29,
					},
					{
						from: 30,
						to: 34,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 35,
						to: 120,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 34,
					},
					{
						from: 35,
						to: 39,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 40,
						to: 120,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 60, ty: 0},
						transform: [60, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 39,
					},
					{
						from: 40,
						to: 44,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 45,
						to: 120,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 44,
					},
					{
						from: 45,
						to: 49,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 50,
						to: 120,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 49,
					},
					{
						from: 50,
						to: 54,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 55,
						to: 120,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 54,
					},
					{
						from: 55,
						to: 59,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 60,
						to: 120,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 120, ty: 0},
						transform: [120, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 59,
					},
					{
						from: 60,
						to: 64,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 65,
						to: 120,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 64,
					},
					{
						from: 65,
						to: 69,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 70,
						to: 120,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 69,
					},
					{
						from: 70,
						to: 74,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 75,
						to: 120,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 74,
					},
					{
						from: 75,
						to: 79,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 80,
						to: 120,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 180, ty: 0},
						transform: [180, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 79,
					},
					{
						from: 80,
						to: 84,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 85,
						to: 120,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 84,
					},
					{
						from: 85,
						to: 89,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 90,
						to: 120,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 89,
					},
					{
						from: 90,
						to: 94,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 95,
						to: 120,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 94,
					},
					{
						from: 95,
						to: 99,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 100,
						to: 120,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 240, ty: 0},
						transform: [240, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 99,
					},
					{
						from: 100,
						to: 104,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 105,
						to: 120,
						classname: "_gui_player_healthbar_heart_tl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 104,
					},
					{
						from: 105,
						to: 109,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 110,
						to: 120,
						classname: "_gui_player_healthbar_heart_bl_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 109,
					},
					{
						from: 110,
						to: 114,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 115,
						to: 120,
						classname: "_gui_player_healthbar_heart_tr_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "heart_x",
				keys: [
					{
						from: 0,
						to: 114,
					},
					{
						from: 115,
						to: 119,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 120,
						to: 120,
						classname: "_gui_player_healthbar_heart_br_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 300, ty: 0},
						transform: [300, 0, 1, 1, 0, 0, 0],
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
						to: 0,
					},
					{
						from: 1,
						to: 4,
					},
					{
						from: 5,
						to: 5,
					},
					{
						from: 6,
						to: 9,
					},
					{
						from: 10,
						to: 10,
					},
					{
						from: 11,
						to: 14,
					},
					{
						from: 15,
						to: 15,
					},
					{
						from: 16,
						to: 19,
					},
					{
						from: 20,
						to: 20,
					},
					{
						from: 21,
						to: 24,
					},
					{
						from: 25,
						to: 25,
					},
					{
						from: 26,
						to: 29,
					},
					{
						from: 30,
						to: 30,
					},
					{
						from: 31,
						to: 34,
					},
					{
						from: 35,
						to: 35,
					},
					{
						from: 36,
						to: 39,
					},
					{
						from: 40,
						to: 40,
					},
					{
						from: 41,
						to: 44,
					},
					{
						from: 45,
						to: 45,
					},
					{
						from: 46,
						to: 49,
					},
					{
						from: 50,
						to: 50,
					},
					{
						from: 51,
						to: 54,
					},
					{
						from: 55,
						to: 55,
					},
					{
						from: 56,
						to: 59,
					},
					{
						from: 60,
						to: 60,
					},
					{
						from: 61,
						to: 64,
					},
					{
						from: 65,
						to: 65,
					},
					{
						from: 66,
						to: 69,
					},
					{
						from: 70,
						to: 70,
					},
					{
						from: 71,
						to: 74,
					},
					{
						from: 75,
						to: 75,
					},
					{
						from: 76,
						to: 79,
					},
					{
						from: 80,
						to: 80,
					},
					{
						from: 81,
						to: 84,
					},
					{
						from: 85,
						to: 85,
					},
					{
						from: 86,
						to: 89,
					},
					{
						from: 90,
						to: 90,
					},
					{
						from: 91,
						to: 94,
					},
					{
						from: 95,
						to: 95,
					},
					{
						from: 96,
						to: 99,
					},
					{
						from: 100,
						to: 100,
					},
					{
						from: 101,
						to: 104,
					},
					{
						from: 105,
						to: 105,
					},
					{
						from: 106,
						to: 109,
					},
					{
						from: 110,
						to: 110,
					},
					{
						from: 111,
						to: 114,
					},
					{
						from: 115,
						to: 115,
					},
					{
						from: 116,
						to: 119,
					},
					{
						from: 120,
						to: 120,
					},
				]
			},
		]
	},
	"_gui_buttons_pause_x": {
		type: "bitmap",
		asset: "_gui_buttons_pause_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_buttons_pause_down_x": {
		type: "bitmap",
		asset: "_gui_buttons_pause_down_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_buttons_details_sticker_sign_x": {
		type: "bitmap",
		asset: "_gui_buttons_details_sticker_sign_x",
		scale: 1,
		position: [-69, -69],
	},
	"_gui_camera_camera_1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 2,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_buttons_camera_x",
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
						classname: "_gui_buttons_camera_bat_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
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
					},
					{
						from: 1,
						to: 1,
						classname: "_gui_camera_eye_lid_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -4.55, ty: -11.45},
						transform: [-4.55, -11.45, 1, 1, 0, 0, 0],
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
						actions: function(self){if (self.on_update === undefined) self.on_update = function(dt) {self.time = self.query_property("current_camera") / self.fps;};},
					},
				]
			},
		]
	},
	"_gui_camera_camera_2": {
		type: "movieclip",
		fps: 24,
		totalFrames: 2,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_buttons_camera_down_x",
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
						classname: "_gui_buttons_camera_down_bat_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
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
						actions: function(self){if (self.on_update === undefined) self.on_update = function(dt) {self.time = self.query_property("current_camera") / self.fps;};},
					},
				]
			},
		]
	},
	"_gui_camera_camera_3": {
		type: "movieclip",
		fps: 24,
		totalFrames: 2,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_buttons_camera_off_x",
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
						classname: "_gui_buttons_camera_off_bat_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
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
						actions: function(self){if (self.on_update === undefined) self.on_update = function(dt) {self.time = self.query_property("current_camera") / self.fps;};},
					},
				]
			},
		]
	},
	"_gui_buttons_flash_timer": {
		type: "movieclip",
		fps: 24,
		totalFrames: 15,
		labels: {idle: {from:0, to:1}, in: {from:2, to:9}, out: {from:10, to:14}, },
		layers: [
			{
				name: "clock",
				keys: [
					{
						from: 0,
						to: 1,
						classname: "_gui_ghost_healthbar_flash_timer_clock_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 8,
						classname: "_gui_ghost_healthbar_flash_timer_clock_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_gui_ghost_healthbar_flash_timer_clock_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, 0, 0, 0],
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
						classname: "_gui_ghost_healthbar_flash_timer_clock_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, 0, 0, 0],
						alpha: 0,
						visible: true,
						tween: false,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
				]
			},
			{
				name: "script",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 1,
						actions: function(self){self.stop();},
					},
					{
						from: 2,
						to: 8,
					},
					{
						from: 9,
						to: 9,
						actions: function(self){self.stop();},
					},
					{
						from: 10,
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
				name: "labels",
				keys: [
					{
						from: 0,
						to: 1,
					},
					{
						from: 2,
						to: 9,
					},
					{
						from: 10,
						to: 14,
					},
				]
			},
		]
	},
	"_gui_buttons_darwin_x": {
		type: "bitmap",
		asset: "_gui_buttons_darwin_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_buttons_gumball_x": {
		type: "bitmap",
		asset: "_gui_buttons_gumball_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_buttons_anais_x": {
		type: "bitmap",
		asset: "_gui_buttons_anais_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_dialog_box_dialog_box_x": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_box_x",
		scale: 1,
		position: [-480, -110],
	},
	"_gui_dialog_box_characters": {
		type: "movieclip",
		fps: 24,
		totalFrames: 25,
		labels: {},
		layers: [
			{
				name: "Layer 2",
				keys: [
					{
						from: 0,
						to: 24,
						classname: "_gui_dialog_box_dialog_photo_container_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "dialog_anais0007.png",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_dialog_box_anais_dialog_dialog_anais0007.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_gui_dialog_box_anais_dialog_dialog_anais0006.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_gui_dialog_box_anais_dialog_dialog_anais0005.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_gui_dialog_box_anais_dialog_dialog_anais0004.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_gui_dialog_box_anais_dialog_dialog_anais0003.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_gui_dialog_box_anais_dialog_dialog_anais0002.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_gui_dialog_box_anais_dialog_dialog_anais0001.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_gui_dialog_box_dialog_gumball_dialog_gumball0001.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_gui_dialog_box_dialog_gumball_dialog_gumball0002.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_gui_dialog_box_dialog_gumball_dialog_gumball0003.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gui_dialog_box_dialog_gumball_dialog_gumball0004.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gui_dialog_box_dialog_gumball_dialog_gumball0005.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_gui_dialog_box_dialog_gumball_dialog_gumball0006.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_gui_dialog_box_dialog_gumball_dialog_gumball0007.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_gui_dialog_box_dialog_darwin_dialog_darwin0001.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_gui_dialog_box_dialog_darwin_dialog_darwin0002.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_gui_dialog_box_dialog_darwin_dialog_darwin0003.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_gui_dialog_box_dialog_darwin_dialog_darwin0004.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_gui_dialog_box_dialog_darwin_dialog_darwin0005.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_gui_dialog_box_dialog_darwin_dialog_darwin0006.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_gui_dialog_box_dialog_darwin_dialog_darwin0007.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_gui_dialog_box_dialog_carrie_dialog_carrie0001.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_gui_dialog_box_dialog_carrie_dialog_carrie0002.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_gui_dialog_box_dialog_carrie_dialog_carrie0003.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_gui_dialog_box_dialog_carrie_dialog_carrie0004.png",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -90, ty: -75},
						transform: [-90, -75, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gui_tutorial_stroke_tutorial_x": {
		type: "bitmap",
		asset: "_gui_tutorial_stroke_tutorial_x",
		scale: 1,
		position: [-91.65, -19.5],
	},
	"_title_title": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "tf",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "Text",
						instancename: "title",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -422.75, ty: -50},
						transform: [-424.75, -96.8, 1, 1, 0, 0, 0],
						text: "GHOST BLAST",
						alpha: 1,
						visible: true,
						size: 96,
						width: 849.5,
						height: 193.65,
						font: "JD Melted",
						color: "#99FF00FE",
						alignment: "center",
					},
				]
			},
		]
	},
	"_title_buttons_sound_on_btn": {
		type: "movieclip",
		fps: 24,
		totalFrames: 13,
		labels: {over: {from:0, to:6}, down: {from:7, to:12}, },
		layers: [
			{
				name: "icon",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_title_buttons_sound_on_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_title_buttons_sound_on_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "script",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 12,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 12,
					},
				]
			},
		]
	},
	"_title_buttons_sound_off_btn": {
		type: "movieclip",
		fps: 24,
		totalFrames: 13,
		labels: {over: {from:0, to:6}, down: {from:7, to:12}, },
		layers: [
			{
				name: "icon",
				keys: [
					{
						from: 0,
						to: 6,
						classname: "_title_buttons_sound_off_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 12,
						classname: "_title_buttons_sound_off_down_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "script",
				keys: [
					{
						from: 0,
						to: 0,
						actions: function(self){self.stop();},
					},
					{
						from: 1,
						to: 12,
					},
				]
			},
			{
				name: "labels",
				keys: [
					{
						from: 0,
						to: 6,
					},
					{
						from: 7,
						to: 12,
					},
				]
			},
		]
	},
	"_gui_player_healthbar_heart_container_x": {
		type: "bitmap",
		asset: "_gui_player_healthbar_heart_container_x",
		scale: 1,
		position: [-69, -69],
	},
	"_gui_player_healthbar_heart_tl_x": {
		type: "bitmap",
		asset: "_gui_player_healthbar_heart_tl_x",
		scale: 1,
		position: [-69, -69],
	},
	"_gui_player_healthbar_heart_bl_x": {
		type: "bitmap",
		asset: "_gui_player_healthbar_heart_bl_x",
		scale: 1,
		position: [-69, -69],
	},
	"_gui_player_healthbar_heart_tr_x": {
		type: "bitmap",
		asset: "_gui_player_healthbar_heart_tr_x",
		scale: 1,
		position: [-69, -69],
	},
	"_gui_player_healthbar_heart_br_x": {
		type: "bitmap",
		asset: "_gui_player_healthbar_heart_br_x",
		scale: 1,
		position: [-69, -69],
	},
	"_gui_buttons_camera_x": {
		type: "bitmap",
		asset: "_gui_buttons_camera_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_buttons_camera_bat_x": {
		type: "bitmap",
		asset: "_gui_buttons_camera_bat_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_camera_eye_lid_anim": {
		type: "movieclip",
		fps: 24,
		totalFrames: 83,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 69,
					},
					{
						from: 70,
						to: 70,
						classname: "_gui_camera_eye_lid_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 71,
						to: 72,
						classname: "_gui_camera_eye_lid_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 73,
						to: 76,
						classname: "_gui_camera_eye_lid_1_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 77,
						to: 79,
						classname: "_gui_camera_eye_lid_1_x",
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
						classname: "_gui_camera_eye_lid_2_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 82,
						to: 82,
						classname: "_gui_camera_eye_lid_3_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
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
						to: 0,
						actions: function(self){self.gotoAndPlay(1+Math.floor((Math.random()*60)));},
					},
					{
						from: 1,
						to: 82,
					},
				]
			},
		]
	},
	"_gui_buttons_camera_down_x": {
		type: "bitmap",
		asset: "_gui_buttons_camera_down_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_buttons_camera_down_bat_x": {
		type: "bitmap",
		asset: "_gui_buttons_camera_down_bat_x",
		scale: 1,
		position: [-77.15, -77.15],
	},
	"_gui_buttons_camera_off_x": {
		type: "bitmap",
		asset: "_gui_buttons_camera_off_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_buttons_camera_off_bat_x": {
		type: "bitmap",
		asset: "_gui_buttons_camera_off_bat_x",
		scale: 1,
		position: [-77.15, -77.15],
	},
	"_gui_ghost_healthbar_flash_timer_clock_anim": {
		type: "movieclip",
		fps: 24,
		totalFrames: 33,
		labels: {},
		layers: [
			{
				name: "shadow_clock",
				keys: [
					{
						from: 0,
						to: 32,
						classname: "_gui_ghost_healthbar_flash_timer_clock_shadow_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 0.3},
						transform: [-0.35, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "mask_clock",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f32",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 1,
						to: 1,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f31",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 2,
						to: 2,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f30",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 3,
						to: 3,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f29",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 4,
						to: 4,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f28",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 5,
						to: 5,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f27",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 6,
						to: 6,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f26",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 7,
						to: 7,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f25",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 8,
						to: 8,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f24",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 9,
						to: 9,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f23",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 10,
						to: 10,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f22",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 11,
						to: 11,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f21",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 12,
						to: 12,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f20",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 13,
						to: 13,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f19",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 14,
						to: 14,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f18",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 15,
						to: 15,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f17",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 16,
						to: 16,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f16",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 17,
						to: 17,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f15",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 18,
						to: 18,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f14",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 19,
						to: 19,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f13",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 20,
						to: 20,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f12",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 21,
						to: 21,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f11",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 22,
						to: 22,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f10",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 23,
						to: 23,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f9",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 24,
						to: 24,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f8",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 25,
						to: 25,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f7",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 26,
						to: 26,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f6",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 27,
						to: 27,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f5",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 28,
						to: 28,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f4",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 29,
						to: 29,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f3",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 30,
						to: 30,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f2",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 31,
						to: 31,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask_f1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
					{
						from: 32,
						to: 32,
						classname: "_gui_camera_charged_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: -0.05},
						transform: [0, -0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gui_dialog_box_dialog_photo_container_x": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_photo_container_x",
		scale: 1,
		position: [-95, -80],
	},
	"_gui_dialog_box_anais_dialog_dialog_anais0007.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_anais_dialog_dialog_anais0007.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_anais_dialog_dialog_anais0006.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_anais_dialog_dialog_anais0006.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_anais_dialog_dialog_anais0005.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_anais_dialog_dialog_anais0005.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_anais_dialog_dialog_anais0004.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_anais_dialog_dialog_anais0004.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_anais_dialog_dialog_anais0003.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_anais_dialog_dialog_anais0003.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_anais_dialog_dialog_anais0002.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_anais_dialog_dialog_anais0002.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_anais_dialog_dialog_anais0001.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_anais_dialog_dialog_anais0001.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_gumball_dialog_gumball0001.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_gumball_dialog_gumball0001.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_gumball_dialog_gumball0002.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_gumball_dialog_gumball0002.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_gumball_dialog_gumball0003.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_gumball_dialog_gumball0003.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_gumball_dialog_gumball0004.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_gumball_dialog_gumball0004.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_gumball_dialog_gumball0005.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_gumball_dialog_gumball0005.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_gumball_dialog_gumball0006.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_gumball_dialog_gumball0006.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_gumball_dialog_gumball0007.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_gumball_dialog_gumball0007.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_darwin_dialog_darwin0001.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_darwin_dialog_darwin0001.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_darwin_dialog_darwin0002.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_darwin_dialog_darwin0002.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_darwin_dialog_darwin0003.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_darwin_dialog_darwin0003.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_darwin_dialog_darwin0004.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_darwin_dialog_darwin0004.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_darwin_dialog_darwin0005.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_darwin_dialog_darwin0005.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_darwin_dialog_darwin0006.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_darwin_dialog_darwin0006.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_darwin_dialog_darwin0007.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_darwin_dialog_darwin0007.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_carrie_dialog_carrie0001.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_carrie_dialog_carrie0001.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_carrie_dialog_carrie0002.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_carrie_dialog_carrie0002.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_carrie_dialog_carrie0003.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_carrie_dialog_carrie0003.png",
		scale: 1,
		position: [-5, -5],
	},
	"_gui_dialog_box_dialog_carrie_dialog_carrie0004.png": {
		type: "bitmap",
		asset: "_gui_dialog_box_dialog_carrie_dialog_carrie0004.png",
		scale: 1,
		position: [-5, -5],
	},
	"_title_buttons_sound_on_x": {
		type: "bitmap",
		asset: "_title_buttons_sound_on_x",
		scale: 1,
		position: [-55, -55],
	},
	"_title_buttons_sound_on_down_x": {
		type: "bitmap",
		asset: "_title_buttons_sound_on_down_x",
		scale: 1,
		position: [-55, -55],
	},
	"_title_buttons_sound_off_x": {
		type: "bitmap",
		asset: "_title_buttons_sound_off_x",
		scale: 1,
		position: [-55, -55],
	},
	"_title_buttons_sound_off_down_x": {
		type: "bitmap",
		asset: "_title_buttons_sound_off_down_x",
		scale: 1,
		position: [-55, -55],
	},
	"_gui_camera_eye_lid_3_x": {
		type: "bitmap",
		asset: "_gui_camera_eye_lid_3_x",
		scale: 1,
		position: [-33.15, -33.15],
	},
	"_gui_camera_eye_lid_2_x": {
		type: "bitmap",
		asset: "_gui_camera_eye_lid_2_x",
		scale: 1,
		position: [-29.25, -29.25],
	},
	"_gui_camera_eye_lid_1_x": {
		type: "bitmap",
		asset: "_gui_camera_eye_lid_1_x",
		scale: 1,
		position: [-23.7, -23.7],
	},
	"_gui_ghost_healthbar_flash_timer_clock_shadow_x": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_timer_clock_shadow_x",
		scale: 1,
		position: [-69, -69],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f32": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f32",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f31": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f31",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f30": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f30",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f29": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f29",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f28": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f28",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f27": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f27",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f26": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f26",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f25": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f25",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f24": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f24",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f23": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f23",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f22": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f22",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f21": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f21",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f20": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f20",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f19": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f19",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f18": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f18",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f17": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f17",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f16": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f16",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f15": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f15",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f14": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f14",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f13": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f13",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f12": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f12",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f11": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f11",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f10": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f10",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f9": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f9",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f8": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f8",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f7": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f7",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f6": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f6",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f5": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f5",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f4": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f4",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f3": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f3",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f2": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f2",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask_f1": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_reverse_clock_mask_f1",
		scale: 1,
		position: [-133, -133],
	},
	"_gui_camera_charged_anim": {
		type: "movieclip",
		fps: 24,
		totalFrames: 15,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 3,
						classname: "_gui_camera_tween,1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0], [0.666, 0.333], [1, 1]],
						}
					},
					{
						from: 4,
						to: 8,
						classname: "_gui_camera_tween,1",
						instancename: "",
						matrix: {a: 1.5, b: 0, c: 0, d: 1.5, tx: 0, ty: 0},
						transform: [0, 0, 1.5, 1.5, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.666], [0.666, 0.9990000000000001], [1, 1]],
						}
					},
					{
						from: 9,
						to: 13,
						classname: "_gui_camera_tween,1",
						instancename: "",
						matrix: {a: 0.8, b: 0, c: 0, d: 0.8, tx: 0, ty: 0},
						transform: [0, 0, 0.8, 0.8, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.8, 0], [0.2, 1], [1, 1], ],
						}
					},
					{
						from: 14,
						to: 14,
						classname: "_gui_camera_tween,1",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
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
	"_gui_camera_tween,1": {
		type: "movieclip",
		fps: 24,
		totalFrames: 1,
		labels: {},
		layers: [
			{
				name: "flash_reverse_clock_mask",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_ghost_healthbar_flash_reverse_clock_mask",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bulb_anim",
				keys: [
					{
						from: 0,
						to: 0,
						classname: "_gui_buttons_bulb_anim",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0.05},
						transform: [0, 0.05, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gui_ghost_healthbar_flash_reverse_clock_mask": {
		type: "movieclip",
		fps: 24,
		totalFrames: 33,
		labels: {},
		layers: [
			{
				name: "Layer 3",
				keys: [
					{
						from: 0,
						to: 31,
						classname: "_gui_ghost_healthbar_flash_timer_clock_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: -0.35, ty: 0.3},
						transform: [-0.35, 0.3, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "Layer 1",
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
					{
						from: 7,
						to: 7,
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
						to: 10,
					},
					{
						from: 11,
						to: 11,
					},
					{
						from: 12,
						to: 12,
					},
					{
						from: 13,
						to: 13,
					},
					{
						from: 14,
						to: 14,
					},
					{
						from: 15,
						to: 15,
					},
					{
						from: 16,
						to: 16,
					},
					{
						from: 17,
						to: 17,
					},
					{
						from: 18,
						to: 18,
					},
					{
						from: 19,
						to: 19,
					},
					{
						from: 20,
						to: 20,
					},
					{
						from: 21,
						to: 21,
					},
					{
						from: 22,
						to: 22,
					},
					{
						from: 23,
						to: 23,
					},
					{
						from: 24,
						to: 24,
					},
					{
						from: 25,
						to: 25,
					},
					{
						from: 26,
						to: 26,
					},
					{
						from: 27,
						to: 27,
					},
					{
						from: 28,
						to: 28,
					},
					{
						from: 29,
						to: 29,
					},
					{
						from: 30,
						to: 30,
					},
					{
						from: 31,
						to: 32,
					},
				]
			},
			{
				name: "bar1",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 31,
						classname: "_gui_ghost_healthbar_flash_clock_line",
						instancename: "",
						matrix: {a: -1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 3.142, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bar1",
				keys: [
					{
						from: 0,
						to: 0,
					},
					{
						from: 1,
						to: 6,
						classname: "_gui_ghost_healthbar_flash_clock_line",
						instancename: "",
						matrix: {a: 0.981, b: -0.195, c: 0.195, d: 0.981, tx: -0.1, ty: -0.2},
						transform: [-0.1, -0.2, 1, 1, 0.196, -0.196, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 7,
						to: 11,
						classname: "_gui_ghost_healthbar_flash_clock_line",
						instancename: "",
						matrix: {a: 0.188, b: -0.982, c: 0.982, d: 0.188, tx: -0.6, ty: -0.35},
						transform: [-0.6, -0.35, 0.999, 0.999, 1.382, -1.382, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 12,
						to: 22,
						classname: "_gui_ghost_healthbar_flash_clock_line",
						instancename: "",
						matrix: {a: -0.713, b: -0.701, c: 0.701, d: -0.713, tx: -0.5, ty: 0.6},
						transform: [-0.5, 0.6, 1, 1, 2.365, -2.365, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 23,
						to: 30,
						classname: "_gui_ghost_healthbar_flash_clock_line",
						instancename: "",
						matrix: {a: -0.19, b: 0.982, c: -0.982, d: -0.19, tx: 0.05, ty: 0.75},
						transform: [0.05, 0.75, 1, 1, -1.762, 1.762, NaN],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.333, 0.333], [0.666, 0.666], [1, 1]],
						}
					},
					{
						from: 31,
						to: 31,
						classname: "_gui_ghost_healthbar_flash_clock_line",
						instancename: "",
						matrix: {a: 0.975, b: 0.224, c: -0.224, d: 0.975, tx: -0.15, ty: 0},
						transform: [-0.15, 0, 1, 1, -0.226, 0.226, NaN],
						alpha: 1,
						visible: true,
						tween: false,
					},
				]
			},
			{
				name: "bb",
				keys: [
					{
						from: 0,
						to: 32,
					},
				]
			},
		]
	},
	"_gui_buttons_bulb_anim": {
		type: "movieclip",
		fps: 24,
		totalFrames: 40,
		labels: {},
		layers: [
			{
				name: "Layer 1",
				keys: [
					{
						from: 0,
						to: 18,
						classname: "_gui_buttons_bulb_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.25,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.357, 0], [0.624, 1], [1, 1], ],
						}
					},
					{
						from: 19,
						to: 38,
						classname: "_gui_buttons_bulb_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 1,
						visible: true,
						tween: true,
						easing: {
							all: [[0, 0], [0.357, 0], [0.624, 1], [1, 1], ],
						}
					},
					{
						from: 39,
						to: 39,
						classname: "_gui_buttons_bulb_x",
						instancename: "",
						matrix: {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0},
						transform: [0, 0, 1, 1, 0, 0, 0],
						alpha: 0.25,
						visible: true,
						tween: false,
					},
				]
			},
		]
	},
	"_gui_ghost_healthbar_flash_timer_clock_x": {
		type: "bitmap",
		asset: "_gui_ghost_healthbar_flash_timer_clock_x",
		scale: 1,
		position: [-69, -69],
	},
	"_gui_ghost_healthbar_flash_clock_line": {
		type: "movieclip",
		fps: 24,
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
	"_gui_buttons_bulb_x": {
		type: "bitmap",
		asset: "_gui_buttons_bulb_x",
		scale: 1,
		position: [-69, -69],
	},
};
