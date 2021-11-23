// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	event.remove({output: 'kibe:drawbridge'}),
	event.remove({output: 'kibe:regular_conveyor_belt'}),
	event.remove({output: 'kibe:fast_conveyor_belt'}),
	event.remove({output: 'kibe:express_conveyor_belt'}),
	event.remove({output: 'kibe:wither_builder'}),
	event.remove({output: 'kibe:cobblestone_generator_mk1'}),
	event.remove({output: 'kibe:cobblestone_generator_mk2'}),
	event.remove({output: 'kibe:cobblestone_generator_mk3'}),
	event.remove({output: 'kibe:cobblestone_generator_mk4'}),
	event.remove({output: 'kibe:cobblestone_generator_mk5'}),
	event.remove({output: 'kibe:basalt_generator_mk1'}),
	event.remove({output: 'kibe:basalt_generator_mk2'}),
	event.remove({output: 'kibe:basalt_generator_mk3'}),
	event.remove({output: 'kibe:basalt_generator_mk4'}),
	event.remove({output: 'kibe:basalt_generator_mk5'}),
	event.remove({output: 'kibe:xp_drain'}),
	event.remove({output: 'kibe:xp_shower'}),
	event.remove({output: 'kibe:magnet'}),
	event.remove({output: 'kibe:glider_left_wing'}),
	event.remove({output: 'kibe:glider_right_wing'}),
	event.remove({output: 'kibe:white_glider'}),
	event.remove({output: 'kibe:orange_glider'}),
	event.remove({output: 'kibe:magenta_glider'}),
	event.remove({output: 'kibe:pink_glider'}),
	event.remove({output: 'kibe:light_blue_glider'}),
	event.remove({output: 'kibe:yellow_glider'}),
	event.remove({output: 'kibe:lime_glider'}),
	event.remove({output: 'kibe:lime_glider'}),
	event.remove({output: 'kibe:gray_glider'}),
	event.remove({output: 'kibe:light_gray_glider'}),
	event.remove({output: 'kibe:cyan_glider'}),
	event.remove({output: 'kibe:blue_glider'}),
	event.remove({output: 'kibe:purple_glider'}),
	event.remove({output: 'kibe:green_glider'}),
	event.remove({output: 'kibe:brown_glider'}),
	event.remove({output: 'kibe:red_glider'}),
	event.remove({output: 'kibe:black_glider'}),
	event.remove({output: 'kibe:void_bucket'}),
	event.remove({output: 'kibe:pocket_crafting_table'}),
	event.remove({output: 'kibe:pocket_trash_can'}),
	event.remove({output: 'kibe:entangled_bucket'}),
	event.remove({output: 'kibe:entangled_bag'}),
	event.remove({output: 'kibe:cooler'}),
	event.remove({output: 'kibe:white_sleeping_bag'}),
	event.remove({output: 'kibe:pink_sleeping_bag'}),
	event.remove({output: 'kibe:orange_sleeping_bag'}),
	event.remove({output: 'kibe:magenta_sleeping_bag'}),
	event.remove({output: 'kibe:light_blue_sleeping_bag'}),
	event.remove({output: 'kibe:yellow_sleeping_bag'}),
	event.remove({output: 'kibe:lime_sleeping_bag'}),
	event.remove({output: 'kibe:lime_sleeping_bag'}),
	event.remove({output: 'kibe:gray_sleeping_bag'}),
	event.remove({output: 'kibe:light_gray_sleeping_bag'}),
	event.remove({output: 'kibe:cyan_sleeping_bag'}),
	event.remove({output: 'kibe:sleeping_bag'}),
	event.remove({output: 'kibe:purple_sleeping_bag'}),
	event.remove({output: 'kibe:green_sleeping_bag'}),
	event.remove({output: 'kibe:brown_sleeping_bag'}),
	event.remove({output: 'kibe:red_sleeping_bag'}),
	event.remove({output: 'kibe:black_sleeping_bag'})
  })


