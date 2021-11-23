// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

console.info('Initialize Recipe Removal')

const DELETE_ITEMS = [

//Kibe
'kibe:drawbridge',
'kibe:regular_conveyor_belt',
'kibe:fast_conveyor_belt',
'kibe:express_conveyor_belt',
'kibe:wither_builder',
'kibe:cobblestone_generator_mk1',
'kibe:cobblestone_generator_mk2',
'kibe:cobblestone_generator_mk3',
'kibe:cobblestone_generator_mk4',
'kibe:cobblestone_generator_mk5',
'kibe:basalt_generator_mk1',
'kibe:basalt_generator_mk2',
'kibe:basalt_generator_mk3',
'kibe:basalt_generator_mk4',
'kibe:basalt_generator_mk5',
'kibe:xp_drain',
'kibe:xp_shower',
'kibe:magnet',
'kibe:glider_left_wing',
'kibe:glider_right_wing',
'kibe:white_glider',
'kibe:orange_glider',
'kibe:magenta_glider',
'kibe:pink_glider',
'kibe:light_blue_glider',
'kibe:yellow_glider',
'kibe:lime_glider',
'kibe:lime_glider',
'kibe:gray_glider',
'kibe:light_gray_glider',
'kibe:cyan_glider',
'kibe:blue_glider',
'kibe:purple_glider',
'kibe:green_glider',
'kibe:brown_glider',
'kibe:red_glider',
'kibe:black_glider',
'kibe:void_bucket',
'kibe:pocket_crafting_table',
'kibe:pocket_trash_can',
'kibe:entangled_bucket',
'kibe:entangled_bag',
'kibe:cooler',
'kibe:white_sleeping_bag',
'kibe:pink_sleeping_bag',
'kibe:orange_sleeping_bag',
'kibe:magenta_sleeping_bag',
'kibe:light_blue_sleeping_bag',
'kibe:yellow_sleeping_bag',
'kibe:lime_sleeping_bag',
'kibe:lime_sleeping_bag',
'kibe:gray_sleeping_bag',
'kibe:light_gray_sleeping_bag',
'kibe:cyan_sleeping_bag',
'kibe:sleeping_bag',
'kibe:purple_sleeping_bag',
'kibe:green_sleeping_bag',
'kibe:brown_sleeping_bag',
'kibe:red_sleeping_bag',
'kibe:black_sleeping_bag',

//Industrial Revolution
'indrev:module_color_pink',
'indrev:module_color_red',
'indrev:module_color_purple',
'indrev:module_color_blue',
'indrev:module_color_cyan',
'indrev:module_color_green',
'indrev:module_color_yellow',
'indrev:module_color_orange',
'indrev:module_color_brown',
'indrev:module_color_black',
'indrev:module_protection',
'indrev:module_speed',
'indrev:module_jump_boost',
'indrev:module_night_vision',
'indrev:module_breathing',
'indrev:module_feather_falling',
'indrev:module_auto_feeder',
'indrev:module_charger',
'indrev:module_solar_panel',
'indrev:module_piglin_tricker',
'indrev:module_elytra',
'indrev:module_fire_resistance',
'indrev:module_range',
'indrev:module_efficiency',
'indrev:module_fortune',
'indrev:module_silk_touch',
'indrev:module_looting',
'indrev:module_fire_aspect',
'indrev:module_sharpness',

'indrev:gamer_axe',
'indrev:modular_core',
'indrev:modular_core_activated',
'indrev:modular_armor_boots',
'indrev:modular_armor_legs',
'indrev:modular_armor_chest',
'indrev:modular_armor_helmet',
'indrev:modular_workbench_mk4',

'indrev:tin_sword',
'indrev:silver_sword',

'indrev:tin_helmet',
'indrev:tin_chestplate',
'indrev:tin_leggings',
'indrev:tin_boots',
'indrev:silver_helmet',
'indrev:silver_chestplate',
'indrev:silver_leggings',
'indrev:silver_boots',

//Better Nether
'betternether:nether_ruby_sword',

'betternether:nether_ruby_helmet',
'betternether:nether_ruby_chestplate',
'betternether:nether_ruby_leggings',
'betternether:nether_ruby_boots',

//Better End
'betterend:thallasium_sword',
'betterend:terminite_sword',

'betterend:thallasium_helmet',
'betterend:thallasium_chestplate',
'betterend:thallasium_leggings',
'betterend:thallasium_boots',

//Applied Energistics 2
'appliedenergistics2:certus_quartz_sword',
'appliedenergistics2:nether_quartz_sword'

		];

events.listen(
	'recipes', event => {
		DELETE_ITEMS.forEach(
			id => event.remove({output: id})
		)
	}
);